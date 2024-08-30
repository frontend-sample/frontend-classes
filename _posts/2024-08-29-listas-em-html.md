---
layout: post
title: Listas em HTML
description: O que são listas em HTML e como usá-las..
author: vagner
date: 2024-08-29 11:33:00 +0800
categories: [lists, HTML, TAGS]
tags: [html]
priority: 11
---


As listas são elementos essenciais em HTML, usadas para agrupar itens relacionados. Elas ajudam a organizar informações e melhorar a estruturação do conteúdo em uma página web.

## Tipos de Listas em HTML

Existem três tipos principais de listas em HTML:

- Listas Não Ordenadas (`<ul>`)
- Listas Ordenadas (`<ol>`)
- Listas de Definição (`<dl>`)

### Listas não ordenadas (`<ul>`)

As listas não ordenadas são usadas quando a ordem dos itens não importa. Os itens são apresentados com marcadores (pontos, círculos, etc.).


```html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
``` 

![Exemplo de lista não ordenada](/assets/img/unordered-list.png)

**Explicação:**
- `<ul>`: Representa a "**Unordered List**" (Lista Não Ordenada).
- `<li>`: Representa um "**List Item**" (Item da Lista). Cada item da lista é definido com a tag `<li>`.

### Listas ordenadas (`<ol>`)

As listas ordenadas são usadas quando a ordem dos itens é importante. Os itens são numerados automaticamente.

![Exemplo de lista ordenada](/assets/img/ordered-list.png)

**Explicação:**
- `<ol>`: Representa a "Ordered List" (Lista Ordenada).
- `<li>`: Assim como nas listas não ordenadas, representa um item da lista. Neste caso, os itens são numerados.

### Listas de Definição (`<dl>`)

As listas de definição são usadas para apresentar pares de termos e definições, como em um glossário ou uma lista de termos e descrições.

![Exemplo de lista de definição](/assets/img/definition-list.png)

**Explicação:**
- `<dl>`: Representa a "Definition List" (Lista de Definição).
- `<dt>`: Representa um "Definition Term" (Termo de Definição).
- `<dd>`: Representa uma "Definition Description" (Descrição de Definição).


### Estilizando Listas com CSS

Você pode estilizar listas com CSS para personalizar os marcadores, a numeração, o espaçamento, entre outros aspectos visuais.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Exemplo de Estilização de Listas</title>
    <style>
        ul {
            list-style-type: square;
        }
        ol {
            list-style-type: upper-roman;
        }
        li {
            margin-bottom: 5px;
        }
    </style>
</head>
<body>
    <h1>Lista Não Ordenada com Estilo</h1>
    <ul>
        <li>Item A</li>
        <li>Item B</li>
        <li>Item C</li>
    </ul>

    <h1>Lista Ordenada com Estilo</h1>
    <ol>
        <li>Primeiro</li>
        <li>Segundo</li>
        <li>Terceiro</li>
    </ol>
</body>
</html>
```

> Para remover o marcador de uma lista você pode definir a propriedade `list-style-type`com o valor `none`

Listas em HTML são ferramentas fundamentais para a organização de informações em uma página web. Com três tipos principais de listas (`<ul>`, `<ol>`, `<dl>`), você pode estruturar desde listas simples até glossários detalhados. Além disso, a capacidade de estilizar essas listas com CSS permite que você crie visualizações personalizadas e esteticamente agradáveis para seus usuários.






