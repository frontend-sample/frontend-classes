---
layout: post
title: Links em HTML
author: vagner
date: 2019-08-08 19:54:00 +0800
categories: [css, html, links]
tags: [html]
priority: 12
---


Links ou Hiperlinks em HTML são elementos clicáveis em uma página web que permitem a navegação entre diferentes recursos, como páginas, documentos ou seções específicas. Eles são geralmente representados por texto sublinhado ou imagens e são criados usando a tag `<a>` em HTML. O atributo href dentro da tag define o destino do hiperlink, que pode ser uma URL, uma âncora na mesma página ou um endereço de e-mail.


A estrutura básica de um link em HTML é:

```html
<a href="#">Texto do Link</a>
```

- `<a>`: É a tag que define o link. Ela pode envolver texto ou outros elementos, como imagens.

-  `href="#"`: Este é o atributo que define o destino do link. A palavra href significa "Hypertext Reference", e o valor dentro das aspas (o URL) especifica para onde o link vai levar o usuário quando clicado.

- `#`: Um símbolo de jogo da velha (#) é usado como um "placeholder" (espaço reservado) quando você ainda não tem uma URL específica. Se você clicar em um link com href="#", ele não irá a lugar nenhum.
- `Texto do Link`: O texto entre as tags `<a>` e `</a>` é o que o usuário verá na página. Ao clicar nesse texto, o link será ativado.

> Você pode adicionar texto ou imagem à um link, estilizar para parecer um botão entre outros.

## Tipos de Links.


### Links Internos 

Os links internos direcionam o usuário para algum ponto dentro do nosso app ou website. Seja uma outra seção ou uma página diferente dentro da nossa estrutura.

Ex:.

```html
<a href="sobre.html">Sobre Nós</a>
```
O exemplo acima redireciona o usuário para uma página chamada `sobre.html` dentro do nosso site.


### Links Âncora

Os Links para âncoras permitem que você crie links para seções específicas dentro da mesma página

```html
<a href="#contato">Contato</a>
```
O trecho acima leva o usuário até uma seção identificada como contato dentro da mesma página que ele está navegando no nosso site. Geralmente a seção de contato fica no final da página, mas um link pode fazer a tela rolar até essa seção facilitando a experiência do usuário. 

### Links Externos

Os links externos direcionam o usuário para um site ou aplicativo externo.

```html
<a href="https://www.google.com">Google</a>
```