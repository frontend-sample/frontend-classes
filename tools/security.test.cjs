'use strict';

const assert = require('node:assert/strict');
const test = require('node:test');
const { createRequire } = require('node:module');
const braces = require('braces');
const micromatch = require('micromatch');

for (const name of ['compile', 'expand', 'stringify', 'parse']) {
  test(`braces.${name} rejects excessive nesting with a controlled error`, () => {
    for (const [open, close] of [['{', '}'], ['(', ')']]) {
      const pattern = open.repeat(4000) + 'x' + close.repeat(4000);
      assert.throws(() => braces[name](pattern), {
        name: 'SyntaxError', message: 'Brace pattern nesting exceeds security limit (128)'
      });
    }
  });
}

for (const name of ['compile', 'expand', 'stringify']) {
  test(`braces.${name} also limits a supplied AST`, () => {
    let ast = { type: 'text', value: 'x' };
    for (let i = 0; i < 1000; i++) ast = { type: 'root', nodes: [ast] };
    assert.throws(() => braces[name](ast), {
      name: 'SyntaxError', message: 'Brace pattern nesting exceeds security limit (128)'
    });
  });
}

test('ordinary brace expansion and glob matching remain compatible', () => {
  assert.deepEqual(braces.expand('file-{a,b}-{1..3}'), [
    'file-a-1', 'file-a-2', 'file-a-3', 'file-b-1', 'file-b-2', 'file-b-3'
  ]);
  assert.equal(braces.compile('{a,b}'), '(a|b)');
  assert.equal(braces.stringify('{a,{b,c}}'), '{a,{b,c}}');
  assert.deepEqual(micromatch(['a.scss', 'b.css', 'x.js'], '*.{scss,css}'), ['a.scss', 'b.css']);
  assert.throws(() => braces.expand('{1..10000}'), RangeError);
});

const consumers = [
  ['build tooling', require],
  ['bundled npm', createRequire(require.resolve('npm/package.json'))]
];

for (const [name, consumerRequire] of consumers) {
  const Policy = consumerRequire('http-cache-semantics');
  const req = { url: 'https://example.com/account', headers: { host: 'example.com' } };
  const staleRequest = { ...req, headers: { ...req.headers, 'cache-control': 'max-stale=999999' } };
  for (const cc of ['max-age=600', 'private, max-age=600', 'no-store', 'no-cache, max-age=600']) {
    test(`${name}: max-stale cannot bypass cookie/cache restrictions (${cc})`, () => {
      const policy = new Policy(req, { status: 200, headers: {
        'cache-control': cc, 'set-cookie': 'session=secret'
      }});
      assert.equal(policy.evaluateRequest(staleRequest).response, undefined);
      assert.equal(policy.satisfiesWithoutRevalidation(staleRequest), false);
    });
  }
  test(`${name}: shared revalidation directives cannot be bypassed`, () => {
    for (const cc of ['s-maxage=1', 'max-age=1, proxy-revalidate', 'max-age=1, must-revalidate']) {
      const policy = new Policy(req, { status: 200, headers: { 'cache-control': cc } });
      const now = policy.now();
      policy.now = () => now + 5000;
      assert.equal(policy.evaluateRequest(staleRequest).response, undefined);
    }
  });
  test(`${name}: normal fresh hits and permitted stale responses still work`, () => {
    const policy = new Policy(req, { status: 200, headers: { 'cache-control': 'public, max-age=600' } });
    assert.ok(policy.evaluateRequest(req).response);
    const now = policy.now();
    policy.now = () => now + 700000;
    assert.ok(policy.evaluateRequest(staleRequest).response);
    assert.equal(policy.evaluateRequest(req).response, undefined);
  });
}
