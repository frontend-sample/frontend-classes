---
layout: post
title: Criando uma Hero Section.
author: vagner
date: 2019-08-08 19:54:00 +0800
categories: [css, html]
tags: [css]
priority: 5
---

## Hero section

Uma "hero section" (seção herói, em português) é um termo usado no design de websites para descrever uma área destacada na parte superior de uma página web. Esta seção é frequentemente a primeira coisa que os visitantes veem quando acessam um site sendo usada para causar uma forte impressão inicial.

A hero section é crucial porque é a primeira impressão que um visitante terá do seu site. Ela deve ser visualmente atraente e comunicar de forma clara a mensagem principal ou a proposta de valor do site. Uma hero section bem projetada pode aumentar o engajamento do usuário e direcioná-lo para as ações desejadas.

As caraterísticas mais comuns de uma heros section sáo: 

#### 1 - Imagem ou Vídeo de Fundo
Muitas hero sections usam imagens grandes, vídeos ou gráficos de fundo que são visualmente atraentes. Estas imagens geralmente representam o tema, o produto ou o serviço oferecido.

#### 2 - Título Principal (Headline)
Um título grande e chamativo que resume o propósito do site ou a mensagem principal que se quer transmitir.

#### 3 - Subtítulo (Sub Headline):
Um texto menor que complementa o título principal, fornecendo mais informações ou contexto.

#### 4 - Call to Action (CTA):
Um botão ou link que incentiva os visitantes a realizar uma ação específica, como "Saiba Mais", "Compre Agora", "Inscreva-se", etc.

#### Texto Breve:
Pequenos trechos de texto ou descrições que explicam o produto, serviço ou a proposta de valor do site.

#### Elementos Visuais:
Ícones, logotipos, animações ou outros elementos visuais que ajudem a captar a atenção e comunicar a mensagem.


### Exemplos

<div style="display: flex; gap: 24px">
<img  src="/assets/img/hero-1.jpeg" alt="Modelo de hero section">
<img  src="/assets/img/hero-2.jpeg" alt="Modelo de hero section">
<img  src="/assets/img/hero-3.jpeg" alt="Modelo de hero section">
</div>


### Criando uma hero section

Para criarmos uma hero section primeiramente vamos criar
uma nova branch a partir da main, chamada hero-section `git checkout -b hero-section` e em seguida criar
um novo arquivo `hero.html` e criar a estrutura básica do arquivo.


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hero Section</title>
</head>
<body>
    <!-- o conteúdo da hero section vai aqui -->
</body>
</html>
```

**Passos**

- Para a hero section vamos precisar de um container `div` que vai ter apenas heading de nível 1 `h1` com o conteúdo, "Bem-vindo ao Meu Site", um parágrafo `p` com o seguinte texto. "Descubra nossos produtos e serviços incríveis." e um link `a` apontando para `#saiba-mais` e o seguinte texto "Saiba Mais". 
- Para a `div#hero` defina o estilo da hero section com uma imagem de fundo, faça o download da imagem a ser usada <a href="{{ site.baseurl }}/assets/img/contact.jpg">aqui</a>, altura total da viewport (100vh), cor do texto branco e centralização do conteúdo usando Flexbox.
- O título `<h1>` e o parágrafo `<p>` são estilizados para serem grandes e chamativos e com cor branca.
- a família de fonte do site deverá ser Arial, sans-serif;
- o botão deverá ter cor de fundo `#007BFF` e cor de texto branco. quando o mouse estiver sobre o botão o mesmo deverá mudar sua cor de fundo para `#0056b3`

> O texto da hero section contém um elemento que será explicado em outro momento, entretanto, para alcançar o mesmo resultado adicione essa propriedade as tags `h1` e `p`
> `text-shadow: 0px 1px 5px rgba(0, 0, 0, 1);`
> Essa propriedade adicionará um efeito de sombra ao texto das tags h1 e p.

