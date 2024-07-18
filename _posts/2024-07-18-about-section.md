---
layout: post
title: Criando uma Seção Sobre Nós.
author: vagner
date: 2019-08-08 19:54:00 +0800
categories: [css, html]
tags: [css]
priority: 8
---

## About section

Uma "about section" (seção sobre, em português) é um termo usado no design de websites para descrever uma área onde é contado a história ou o propósito do site e/ou serviço oferecido.


### Exemplos

<div style="display: flex; gap: 24px">
<img  src="/assets/img/about-example-1.png" alt="Modelo de hero section">
<img  src="/assets/img/about-example-2.png" alt="Modelo de hero section">
<img  src="/assets/img/about-example-3.png" alt="Modelo de hero section">
</div>


### Criando uma about section

Para criarmos uma hero section primeiramente vamos criar
uma nova branch a partir da main, chamada hero-section `git checkout -b about-section` e em seguida criar
um novo arquivo `about.html` e criar a estrutura básica do arquivo.

O resultado esperado deve ser algo parecido com a imagem abaixo.

![Seção sobre](/assets/img/about-section.png)


Faça o download da imagem a ser usada <a href="{{ site.baseurl }}/assets/img/about.jpg"  target="_blank">aqui</a>


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sobre Nós</title>
</head>
<body>
    <section id="about" class="about-container">
      <div class="text-content">
        <h2>Sobre Nós</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
        <p>
          Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc
          ut sem vitae risus tristique posuere.
        </p>
      </div>
      <div class="image-content">
        <img src="about.jpg" alt="Descrição da imagem" />
      </div>
    </section>

</body>
</html>
```

**Passos**

- remova a margem, espacamento das tags `html`  e `body` definindo o `padding` e a `margin` para `0`, configure o `height` para `100%` e a família da fonte para `Arial, sans-serif` e com o `background-color` com valor `#231942`
- crie una regra definir os estilos da section `#about` com o `display` definido como `flex`, alinhe os elemenos ao centro verticalmente usando o `align-items` com o valor center e horizontalmente use o `justify-content` com `space-between` um espaçamento de `48px`e o `background-color` com o valor `#f4e9ff` e a cor da fonte `color` com valor `#5e548e`
- para a div `tex-content` defina o seu tamanho `width` para `50%` 
- para `.image-content` defina seu tamanho `width` em `50%` e o `text-align` como `right`
- e para a tag img, o `witdh` em `100%` e o `height` para `auto`

Comite o resultado na sua branch