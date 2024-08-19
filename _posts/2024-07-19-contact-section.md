---
layout: post
title: Criando uma seção de Contato.
author: vagner
date: 2019-08-08 19:54:00 +0800
categories: [css, html]
tags: [css]
priority: 10
---

# Seção de Contatos

Vamos agora criar uma seção de contatos. Ela terá uma imagem de fundo, um título, alguns cards informativos, uma imagem de um mapa e um formulário.
Por enquanto o formulário não terá nenhuma ação mas, em breve aprenderemos como manipular os dados do formulário com javascript e mostrar uma mensagem de confirmação clicar no botão enviar.

Os cards informativos terão ícones e as imagens serão disponibilizadas para download assim como a imagem de fundo.

## Resultado esperado

![Captura de tela](/assets/img/contact-section-layout.png)

Para criar o layout acima precisamos de um um arquivo HTML um arquivo CSS e algumas imagens que estará dentro de um diretório chamado `assets`. No seu computador, crie um diretório chamado `contact-section` e abra ele no seu editor ou IDE preferido. Crie um novo arquivo com o nome `index.html` e salve. O link para download das imagens serão disponibilizados ao longo deste tutorial.
Nossa estrutura de arquivos ficará como no exemplo abaixo. 

```
/contact-section
│
├── index.html
├── styles.css
└── /assets 
    ├── building.png 
    ├── contacts.jpg 
    ├── map.png 
    ├── faq.png 
    ├── phones.png 
    └── mail.png
```


Nosso arquivo `index.html` terá inicialmente o código abaixo.

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Seção de Contato</title>
</head>
<body>
    
</body>
</html>
```

Vamos agora criar no mesmo diretório um arquivo css com o nome `styles.css`.
Nele vamos colocar inicialmente o código abaixo.

```css
* {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}
```

Aqui está uma explicação detalhada do que cada propriedade faz:

`*`: Este é o seletor universal que seleciona todos os elementos da página.

`margin: 0px;`: Remove todas as margens padrão de todos os elementos. Margens são os espaços externos ao redor de um elemento.

`padding: 0px;`: Remove todos os preenchimentos padrão de todos os elementos. Preenchimentos são os espaços internos dentro de um elemento, entre o conteúdo e a borda.

`box-sizing: border-box;`: Altera o modelo de caixa padrão do CSS. Com `box-sizing: border-box;`, o padding e a border de um elemento são incluídos na largura e altura totais do elemento. Isso facilita o controle do tamanho dos elementos, pois a largura e a altura especificadas incluem o conteúdo, o preenchimento e a borda.

Este código é frequentemente usado como um "reset" CSS para garantir que todos os elementos tenham um comportamento consistente em termos de margens, preenchimentos e dimensionamento de caixas, independentemente do navegador ou das configurações padrão do usuário.

Agora dentro da tag HEAD no arquivo HTML vamos importar o arquivo css com nossos estilos para que eles sejam aplicados à pagina. Para isso usaremos a tag LINK.

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Contato</title>
  <!-- adicione a linha abaixo -->
  <link rel="stylesheet" href="styles.css" />
</head>
```

Agora vamos começar a criar a estrutura do nosso site.

Começaremos criando uma div com o id `contact-section` dentro da tag `body` e um título de nível 2 como no trecho abaixo.

```html

<body>
  <div id="contact-section">
      <h2>Contato</h2>
  </div>
</body>
```

Agora vamos começar a estilizar nosso código. Começaremos definindo uma cor de fundo e o tipo de fonte que usaremos. Também usaremos uma imagem de fundo no `body` uma vez que nesse exercício teremos apenas essa seção.

Faça o download da imagem <a href="{{ site.baseurl }}/assets/img/contacts.jpg"  target="_blank">aqui</a>. Crie um diretório chamado `assets` e salve a imagem dentro dela com o nome `contacts.jpg`.

> **Atenção**
> 
> Os nomes de arquivo são importantes. Se você salvar a imagem com o nome background.png, no código css voê terá que utilizar esse nome.

```css
body {
  background-image: url(assets/contacts.jpg);
  background-size: cover;
  background-color: #231942;
  font-family: Arial, Helvetica, sans-serif;
}
```

Em segunda vamos estilizar nossa seção de contatos. Queremos que ela ocupe toda a tela então precisamos definir a largura e altura mínima da `<div id="contact-section">`


```css
#contact-section {
  width: 100%;
  min-height: 100vh;
  padding: 32px 0;
  background-color: #23194288;
  padding: 24px;
}
```


> Note que no `#contact-section` usamos a unidade de medida `vh` que é a abreviação de **viewport height**. Podemos entender como a altura da área visível do navegador. Nesse caso, nossa div se ajustará para ter a altura do conteúdo se o viewport for menor que a altura do conteúdo, caso contrário a div terá a altura da área visível do navegador. 

O código CSS acima estiliza um elemento com o ID `contact-section` para que ele:

- Ocupe 100% da largura do contêiner pai.
- Tenha uma altura mínima igual à altura da janela do navegador.
- Tenha um preenchimento de 24 pixels em todos os lados.
- Tenha uma cor de fundo com transparência.

Agora, vamos criar os estilos dos título para o `#contact-section`. Note que todos os elementos `H2` que estiverem dentro da `#contact-section` irão herdar esses estilos.

```css
#contact-section h2 {
  color: #fff;
  font-size: 42px;
  width: 100%;
  text-align: center;
  text-shadow: 0px 3px 5px rgba(94, 84, 142, 0.95);
}
```

O código CSS acima estiliza um elemento `<h2>` dentro do elemento com o ID `contact-section` para que ele:

- Tenha texto branco.
- Tenha um tamanho de fonte de 42 pixels.
- Ocupe 100% da largura do contêiner pai.
- Tenha o texto centralizado.
- Tenha uma sombra de texto com deslocamento vertical de 3 pixels, raio de desfoque de 5 pixels, e cor rgba(94, 84, 142, 0.95).

Abaixo do título, adicione o seguinte trecho de código em seu `index.html`.

```html
<div id="contact-cards-container">
  <div class="contact-card-item">
      <img src="./assets/building.png" alt="Ícone escritório" />
      <h3>Nosso Escritório</h3>
      <p>Av das Nações Unidas, 13499</p>
      <p>Brooklyn, São Paulo</p>
  </div>

  <div class="contact-card-item">
      <img src="./assets/phones.png" alt="Ícone escritório" />
      <h3>Telefones</h3>
      <p>+55 (11) 3739-3333</p>
      <p>+55 (21) 4483-5337</p>
  </div>

  <div class="contact-card-item">
      <img src="./assets/faq.png" alt="Ícone escritório" />
      <h3>FAQ</h3>
      <a href="#faq">clique aqui</a>
  </div>
  <div class="contact-card-item">
      <img src="./assets/mail.png" alt="Ícone escritório" />
      <h3>Email</h3>
      <a href="mailto:contato@nossaempresa.com.br"
      >contato@nossaempresa.com.br</a
      >
      <a href="mailto:comercial@nossaempresa.com.br"
      >comercial@nossaempresa.com.br</a
      >
  </div>
</div>
```

As imagens que precisaremos estão disponíveis para download abaixo. Clique na imagem e ela abrirá em uma nova aba. Salve a imagem no diretório assets.

<a href="{{ site.baseurl }}/assets/img/building.png"  target="_blank"><img alt="ícone para o card escritório" src="/assets/img/building.png"/></a>
<a href="{{ site.baseurl }}/assets/img/phones.png"  target="_blank"><img alt="ícone para a seção de serviços" src="/assets/img/phones.png"/></a>
<a href="{{ site.baseurl }}/assets/img/faq.png"  target="_blank"><img alt="ícone para o card faq" src="/assets/img/faq.png"/></a>
<a href="{{ site.baseurl }}/assets/img/mail.png"  target="_blank"><img alt="ícone para o card email" src="/assets/img/mail.png"/></a>

> **Atenção**

Nessa estrutura teremos uma div com o id `contact-cards-container`, que receberá os quatro cards que exibiremos na página. Cada card terá a classe `contact-card-item` pois eles terão o mesmo estilo mas, conteúdo diferente. 
Cada card terá uma imagem, um titulo de nível 3, e alguma informação abaixo que pode ser um texto ou link. Os cards deverão estar alinhados na horizontal com espaçamento igual.

```css
#contact-section #contact-cards-container {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  max-width: 960px;
  margin: 0 auto;
  margin-top: 48px;
}
```

O código CSS acima estiliza um elemento com o ID contact-cards-container dentro do elemento com o ID contact-section para que ele:

- Seja um contêiner flexível.
- Distribua os itens dentro dele com espaço igual entre eles.
- Tenha um espaço de 16 pixels entre os itens.
- Tenha uma largura máxima de 960 pixels.
- Seja centralizado horizontalmente.
- Tenha uma margem superior de 48 pixels.

Queremos que cada card tenha uma core de fundo, uma borda e deixe todos os itens alinhados ao centro do card. Vamos colocar também um efeito de sobra fora do card.

```css
#contact-section #contact-cards-container .contact-card-item {
  background-color: rgba(62, 45, 148, 0.9);
  color: #fff;
  text-align: center;
  padding: 18px;
  border: solid 2px #5a46bb;
  -webkit-box-shadow: 0px 0px 18px 1px rgba(0, 0, 0, 0.63);
  -moz-box-shadow: 0px 0px 18px 1px rgba(0, 0, 0, 0.63);
  box-shadow: 0px 0px 18px 1px rgba(0, 0, 0, 0.63);
  border-radius: 18px;
  flex: 1;
}
```

O código CSS acima estiliza um elemento com a classe contact-card-item dentro do elemento com o ID contact-cards-container, que por sua vez está dentro do elemento com o ID contact-section, para que ele:

- Tenha um fundo roxo semi-transparente.
- Tenha texto branco centralizado.
- Tenha um preenchimento interno de 18 pixels.
- Tenha uma borda roxa sólida de 2 pixels.
- Tenha uma sombra ao redor com desfoque e spread.
- Tenha bordas arredondadas.
- Seja flexível dentro de um contêiner flexível.

O título do card está muito próximo ao texto. Vamos adicionar um espaçamento entre eles.

```css
#contact-section #contact-cards-container .contact-card-item h3 {
  margin-bottom: 8px;
}
```

Os links ainda estão recebendo o estilo padrão do navegador. Vamos alterar isso removendo o sublinhado e alterando sua cor para branco.

```css
#contact-section #contact-cards-container .contact-card-item a {
  color: #fff;
  text-decoration: none;
}
```

Agora que temos nossos cards estilizados, vamos colocar um mapa e um formulário de contato. Vamos criar primeiro nosso mapa. Para isso, vamos criar uma nova div com o id `other-contacts-section` e dentro dele uma div com o id `map-container`.


```html
<div id="contact-section">
  <h2>Contato</h2>

  <div id="contact-cards-container">
  <div class="contact-card-item">
      <!-- codigo dos cards -->
  </div>

  <!-- coloque o trecho abaixo -->
  <div id="other-contacts-section">
      <div id="map-container"></div>
  </div>
  <!-- até aqui -->
</div>
```

> Omitimos alguns trechos de código para fins de visualização.

Baixe a imagem do mapa que usaremos <a href="{{ site.baseurl }}/assets/img/map.png"  target="_blank">aqui</a>


O formulário e o mapa ficarão lado a lado, alinhados verticalmente ao centro e cada um ocupará metade do espaço disponível na tela. Para isso vamos definir os seguintes estilos.

```css
#contact-section #other-contacts-section {
  max-width: 960px;
  margin: 0 auto;
  margin-top: 32px;
  display: flex;
  align-items: center;
}
```

O código CSS acima estiliza um elemento com o ID other-contacts-section dentro do elemento com o ID contact-section para que ele:

- Tenha uma largura máxima de 960 pixels.
- Seja centralizado horizontalmente.
- Tenha uma margem superior de 32 pixels.
- Seja um contêiner flexível.
- Alinhe os itens dentro dele verticalmente ao centro.

Nosso mapa terá uma altura fixa e uma largura variável e bordas arredondadas. Abaixo temos o CSS com esses estilos.

O mapa está pronto mas, no momento ele ocupa todo o espaço disponível horizontalmente na tela. Isso porque ele está dentro de um container flexível e temos apenas ele dentro do `#other-cards-section`. Vamos adicionar agora uma div para nosso formulário. 


```html
<div id="contact-section">
  <h2>Contato</h2>

  <div id="contact-cards-container">
  <div class="contact-card-item">
      <!-- codigo dos cards -->
  </div>

  <div id="other-contacts-section">
      <div id="map-container"></div>
      <!-- coloque o trecho abaixo -->
        <div id="form">
        <form>
          <h2>Entre em contato</h2>
        </form>
      </div>
      <!-- até aqui -->
  </div>
</div>
```

> Omitimos alguns trechos de código para fins de visualização.

Vamos adicionar uma cor de fundo à div `#form` arredondar as bordas do lado direito apenas, um espaçamento interno para não deixar o conteúdo colado nas bordas e definir uma altura mínima.

```css
#contact-section #other-contacts-section #form {
  flex: 1;
  background-color: #231942;
  padding: 32px;
  border-top-right-radius: 24px;
  border-bottom-right-radius: 24px;
}
```

O título ficou muito grande, vamos sobrescrever o estilo dele apenas para o `#form`. Também vamos adicionar uma margem abaixo para separar o título dos campos do formulário.

```css
#contact-section #other-contacts-section #form h2 {
  font-size: 24px;
  margin-bottom: 24px;
}
```

Vamos criar os campos do nosso formulário. Teremos três campos, um para nome, outro para e-mail e um para contato. Para isso precisaremos de uma tag `form`, dois campos do tipo `input` e um campo do tipo `textarea`. Usaremos também a tag `label` para descrever a finalidade do campo. Para ter um estilo bacana, vamos agrupar cada campo e label em uma div com a classe `.container-field`.

A diferença entre `<input>` e `<textarea>` no HTML está principalmente na forma como eles são usados para coletar dados do usuário:

- `<input>`
  - Geralmente usado para campos de entrada de dados de uma única linha, como texto, senhas, números, e-mails, etc.
- `<textarea>`
  - Usado para campos de entrada de dados de múltiplas linhas, como comentários, descrições, etc.

Vamos criar o primeiro campo, para o nome. Esse campo será um `input` e seu `type` será text.

```html
<div id="contact-section">
  <h2>Contato</h2>

  <div id="contact-cards-container">
  <div class="contact-card-item">
      <!-- código dos cards -->
  </div>

  <div id="other-contacts-section">
      <div id="map-container"></div>
        <div id="form">
            <form>
          <h2>Entre em contato</h2>   
          <!-- coloque o trecho abaixo -->
          <div class="container-field">
              <input type="text" name="full-name" id="full-name" />
              <label for="full-name">Nome </label>
          </div>
          <!-- até aqui -->
        </form>
      </div>
  </div>
</div>
```

Vamos ajustar a posição dos elementos dentro do `.container-field`. A `label` foi colocada após o `input` mas queremos que ela seja exibida antes na tela. Para isso, vamos mudar o `flex-direction` para `column-reverse`, isso fara com que o navegador exiba a tag `label` antes da tag `input`. Também adicionamos uma margem abaixo para deixar os campos separados. 


```css
#contact-section #other-contacts-section #form .container-field {
  display: flex;
  flex-direction: column-reverse;
  margin-bottom: 16px;
}
```

Para o `label` vamos definir sua cor e adicionar uma margem abaixo para adicionar um pequeno espaçamento entre label e input.

```css
#contact-section #other-contacts-section #form .container-field label {
  color: #fff;
  margin-bottom: 8px;
}
```



Agora para o `input` vamos alterar a cor de fundo, tamanho e cor do texto, estilo da borda e deixá-las arredondadas. Também vamos adicionar um espaçamento interno ao campo.


```css
#contact-section #other-contacts-section #form .container-field input {
  border: solid 1px #5d499c;
  background-color: #5e548e;
  padding: 12px;
  font-size: 16px;
  border-radius: 4px;
  color: #fff;
  outline-style: solid;
  outline-width: 1px;
  outline-color: #5d499c;
}
```

Este código CSS estiliza os elementos `<input>` dentro de uma estrutura específica de IDs e classes, aplicando uma borda sólida, cor de fundo, tamanho de fonte, preenchimento, bordas arredondadas, cor do texto e um contorno sólido. 

Gostaríamos de adicionar algum feedback ao campo que está com foco então vamos usar o pseudo seletor `:focus` `:focus`,  e o `:active` para alterar a cor da borda do campo quando o campo estiver selecionado ou quando passarmos o mouse sobre ele.

```css
#contact-section #other-contacts-section #form input:hover,
#contact-section #other-contacts-section #form input:active,
#contact-section #other-contacts-section #form input:focus
{
  border: solid 1px #9f86c0;
}
```

Vamos fazer com que o `label` também mude de cor quando o campo estiver ativo. Para isso usaremos um seletor chamado **next-sibling combinator**. O next-sibling combinator pega o próximo elemento que vem imediatamente depois do elemento selecionado.   
Por exemplo: 
O seletor `#form input` vai selecionar o dentro da div form qualquer tag `<input>`. Para usarmos o next-sibling combinator, usamos o sinal `+`. Agrupamos o label e o input dentro de uma div para facilitar a leitura do código e a seleção dos eleantos no css. 

```css
#contact-section #other-contacts-section #form input:active + label,
#contact-section #other-contacts-section #form input:hover + label{
  color: #9b7bf1;
}
```

Vamos adicionar agora o campo para o e-mail. Será um `<input>` do tipo `email`. Apos o `.container-field` de nome adicione o código abaixo.

```html
<div class="container-field">
  <input type="email" name="email" id="email" />
  <label for="full-name">Email</label>
</div>
```

Perceba que ele já herdou o estilo do outro elemento então, vamos adicionar o campo de mensagem que será um `<textarea>` com quatro linhas `rows` de altura.

```html
<div class="container-field">
  <textarea name="message" id="message" rows="4"></textarea>
  <label for="message"></label>
</div>
```

O campo de mensagem está exibindo uma caixa branca sem nenhum estilo, mas gostaríamos que ele tivesse a mesa aparência dos outros campos do formulário. Para isso, não precisamos refazer os estilos que fizemos para o input e sim reaproveitá-los. Vamos alterar nosso CSS e adicionar outro seletor ao trecho que faz o estilo dos inputs.


Procure pela linha que contem o seletor do input.

```css

/** procure pela linha abaixo **/

#contact-section #other-contacts-section #form .container-field input
```

Adicione uma virgula após o input e adicione o seletor do textarea. como no trecho abaixo

```css
#contact-section #other-contacts-section #form .container-field input, /** adicione a virgula e o seletor abaixo */
#contact-section #other-contacts-section #form .container-field textarea {
    /** estilo dos campos **/
}
```  

Agora o textarea está herdando os estilos dos inputs mas, o label não está recebendo alterando sua cor quando o campo de mensagem está selecionado. Faremos mais uma alteração no nosso css e adicionaremos outro seletor na mesma regra que definimos para o input com next-sibling. 

Procure pelo trecho abaixo no seu css.

```css
#contact-section #other-contacts-section #form input:hover,
#contact-section #other-contacts-section #form input:active,
#contact-section #other-contacts-section #form input:focus {
    /** estilo do label quando o input está com foco ou ativo **/
}
```

Adicione uma virgula e os seletores abaixo.

```css
#contact-section #other-contacts-section #form input:hover,
#contact-section #other-contacts-section #form input:active,
#contact-section #other-contacts-section #form input:focus, /** adicione a virgula e os seletores abaixo */
#contact-section #other-contacts-section #form textarea:hover,
#contact-section #other-contacts-section #form textarea:active,
#contact-section #other-contacts-section #form textarea:focus {
    /** estilo do label quando o input está com foco ou ativo **/
}
```

Para finalizar, vamos adicionar e estilizar o botão alterando sua cor de texto, fundo, posição na tela e borda.
Após o campo de mensagem adicione um botão no seu `index.html`.

```html
<button type="submit">enviar</button>
```

E no arquivo css adicione o estilo do botão.

```css
#contact-section #other-contacts-section #form button {
  background-color: #5d499c;
  padding: 16px;
  font-size: 16px;
  color: #fff;
  border-radius: 8px;
  border: none;
  float: right;
}
```

Usamos uma propriedade que ainda não vimos. o `float`.

A propriedade float do CSS é usada para posicionar um elemento à esquerda ou à direita dentro de seu contêiner, permitindo que o texto e outros elementos fluam ao redor dele. O float é útil para criar layouts onde elementos precisam flutuar à esquerda ou à direita, permitindo que o conteúdo flua ao redor deles. No entanto, é importante estar ciente dos efeitos colaterais, como o colapso de contêineres, e usar técnicas como "clearfix" para gerenciar esses casos.


Com isso finalizamos nosso tutorial. Acesse [aqui](https://github.com/vagnerleitte/frontend-classes-contact-section/)  código completo.

Happy Coding!!!