# Dependency security patches

The build/release dependencies have two security issues with no complete upstream
fix identified during the October 21, 2026 review. The project applies explicit,
versioned patches using `patch-package --error-on-fail` during `postinstall`.
Do not install these tools with lifecycle scripts disabled. Use the root
`yarn.lock` with Yarn 1.22.22; patches must remain committed with the lockfile.

## Shared-cache disclosure

[GHSA-ch52-4w7c-c8xp](https://github.com/advisories/GHSA-ch52-4w7c-c8xp)
describes a client `max-stale` directive bypassing shared-cache restrictions.

The root graph is resolved to `http-cache-semantics` 4.3.0, outside the advisory's
reported affected range. However, the regression test still reproduces the
cookie disclosure in unpatched 4.3.0. Updating the version alone is insufficient.
The npm distributed with semantic-release also bundles its own 4.2.0 copy,
which a Yarn resolution does not replace.

Both copies are patched. Requests cannot reuse unstoreable responses, responses
requiring validation, or shared responses carrying cookies without the library's
explicit caching opt-in. Stale responses requiring shared-cache revalidation
cannot be reused merely because the client sends `max-stale`. Normal fresh hits
and allowed stale responses retain their behavior.

## Brace nesting

[GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm)
affects `braces` through 3.0.3. No patched release was available during review.
The local patch bounds parser nesting and the compile, expand and stringify AST
walkers to 128 levels. Excessive nesting raises a controlled `SyntaxError`
before exhausting the call stack. Callers must handle invalid input as errors;
this patch does not promise unlimited brace expansion or eliminate all possible
resource exhaustion from arbitrary glob patterns.

The published version remains 3.0.3. `yarn audit` therefore still reports the
three vulnerable dependency paths even with the patch applied. This is a
mitigation with executable regression tests, not a clean upstream audit result.
The advisory has not been hidden, suppressed, or manually dismissed.
An isolated npm installation also passed the 20 security tests. Its audit reports
21 high findings by propagating the same `braces` advisory through parent
packages; these are not 21 distinct advisories. The Yarn audit reports the
three dependency paths. A fresh npm resolution can select 4.3.0 for the bundled
HTTP-cache path too; patch-package warns about the version difference, applies
the compatible patch, and both HTTP-cache regression suites still pass.

## Validation and maintenance

Run:

```sh
npx --yes yarn@1.22.22 install --frozen-lockfile
npm run test:security
npm run build
```

The 20 tests reproduce malicious nesting, direct AST input, shared-cookie
exposure and revalidation bypasses in both HTTP-cache copies, and check ordinary
brace matching/cache behavior. They fail without the patches and pass with them.
The dependency-security workflow repeats the install, security tests and build
on pull requests and pushes to the default branches.

The full existing `npm test` still reports 19 pre-existing SCSS lint errors.
Jekyll/link checks require Ruby >=3.0 (the Pages workflow uses Ruby 3.3); they
could not be run with the local Ruby 2.6 environment.

Review these patches whenever updating `braces`, `http-cache-semantics`, or the
npm bundled with semantic-release. Remove a patch only after the corresponding
regression tests pass on the unpatched upstream replacement. Keep install scripts
enabled; `--ignore-scripts` bypasses the protections. Audit remains a separate
check and must not be replaced by the regression test suite.
