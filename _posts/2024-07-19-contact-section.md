---
layout: post
title: Criando uma seção de Contato.
author: vagner
date: 2019-08-08 19:54:00 +0800
categories: [css, html]
tags: [css]
priority: 10
---

## Contact Us

Uma seção de contatos é uma parte do dedicada onde os visitantes podem encontrar informações e formas de entrar em contato com a empresa ou o proprietário do site. Geralmente, essa seção inclui:

  - Formulário de Contato
  - Mapa de Localização
  - Links para Suporte ao Cliente
  - Endereço de e-mail, número de telefone, endereço físico e links para perfis em redes sociais

### Exemplos

<div style="display: flex; gap: 24px">
<img  src="/assets/img/form-example-1.jpg" alt="Modelo de seção sobre"/>
<img  src="/assets/img/form-example-2.jpg" alt="Modelo de seção sobre"/>
<img  src="/assets/img/form-example-3.jpg" alt="Modelo de seção sobre"/>
</div>


### Criando uma seçao de contatos

Para criarmos uma section de contato primeiramente vamos criar
uma nova branch a partir da main, chamada services-section `git checkout -b contacts-section` e em seguida criar
um novo arquivo `contacts.html` e criar a estrutura básica do arquivo.

O resultado esperado deve ser algo parecido com a imagem abaixo.

![Seção sobre](/assets/img/our-services.png)


Faça o download dos ícones a serem usados você pode baixar os três ícones utilizados abaixo:

<a href="{{ site.baseurl }}/assets/img/service-1.png"  target="_blank"><img alt="ícone para a seção de serviços" src="/assets/img/service-1.png"/></a>
<a href="{{ site.baseurl }}/assets/img/service-2.png"  target="_blank"><img alt="ícone para a seção de serviços" src="/assets/img/service-2.png"/></a>
<a href="{{ site.baseurl }}/assets/img/service-3.png"  target="_blank"><img alt="ícone para a seção de serviços" src="/assets/img/service-3.png"/></a>


Digite ou copie o trecho de código abaixo para o seu arquivo `services.html`. Apos, siga as instruções para estilizar o HTML.

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Nossos Serviços</title>
    <style>
    </style>
  </head>
  <body>
    <div id="services">
      <h2>Nossos Serviços</h2>
      <p>Descubra nossos produtos e serviços incríveis.</p>
      <div class="service-list">
        <div class="service-list-item">
          <img
            src="service-1.png"
            alt="ícone serviço 1"
            height="auto"
            width="64px"
          />
          <h3>Manutenção</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            quae placeat dolores animi.
          </p>
        </div>

        <div class="service-list-item">
          <img
            src="service-2.png"
            alt="ícone serviço 2"
            height="auto"
            width="64px"
          />
          <h3>Hosting</h3>
          <p>
            Dolore excepturi molestias! Velit perspiciatis asperiores est nemo
            eum.
          </p>
        </div>

        <div class="service-list-item">
          <img
            src="service-3.png"
            alt="ícone serviço 3"
            height="auto"
            width="64px"
          />
          <h3>Sempre Online</h3>
          <p>
            Velit perspiciatis asperiores est nemo eum. Dolores aspernatur harum
            quam.
          </p>
        </div>
      </div>
    </div>
  </body>
</html>

```

**Passos**

- remova a margem, espaçamento das tags `html`  e `body` definindo o `padding` e a `margin` para `0`, configure o `height` para `100%` e a família da fonte para `Arial, sans-serif` e configure o `background-color` para `#231942`
- crie una regra definir os estilos da section `#services` com o `display` definido como `flex`, a direção `flex-direction` deverá ser `column` alinhe os elementos ao centro verticalmente usando o `align-items` com o valor center e horizontalmente use o `justify-content` com `space-between` um espaçamento de `48px` na vertical e `24px` na horizontal, o `background-color` com o valor `#5e548e` e a cor da fonte `color` deverá ser branca `#ffffff`
- defina o tamanho da fonte do h2 como `32px`
- a tag p deverá ter o tamanho `18px`;
- para a div `.service-list`, a mesma deverá ser um flex container `display` `flex`, com a direção `flex-direction` como `row`, o alinhamento dos itens `align-items` configurado como `stretch`, um espaçamento entre os elementos `gap` de `18px` e uma margem vertical de `48px`
- para o `.service-list-item` teremos o `display` `flex` com o `justify-content`, `align-items` e `text-align` todos com o valor `center`, o `flex-grow` definido como `1`, um `background-color` com opacidade reduzida `rgba(35, 25, 66, 0.8)`, uma borda com estilo sólido `border-style` `solid` com seu tamanho `border-width` de `2px` e sua cor `border-color` sera `#231942`. Adicione ainda um espaçamento `padding` de `18px`;
- para adicionar sobra ao `.service-list-item` use o seguinte código:
  ```css
  .service-list-item{
      /* outras propriedades aqui... */
      -webkit-box-shadow: 0px 0px 18px 1px rgba(0, 0, 0, 0.63);
      -moz-box-shadow: 0px 0px 18px 1px rgba(0, 0, 0, 0.63);
      box-shadow: 0px 0px 18px 1px rgba(0, 0, 0, 0.63);
  }
  ```
- para finalizar, vamos definir a tag `img` com uma altura `height` automática `auto` e uma largura `width` de `64px`

Com isso você deverá obter o mesmo resultado visto na imagem anterior. Salve o arquivo e confira.

Comite o resultado na sua branch