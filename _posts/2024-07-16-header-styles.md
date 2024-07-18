---
layout: post
title: Estilizando a navegação superior
author: vagner
date: 2019-08-08 11:33:00 +0800
categories: [CSS, estilos]
tags: [html]
priority: 6
---

# Afinal, o que é a Header Navigation?

A header navigation (ou navegação no cabeçalho) é uma seção na parte superior de um site que geralmente contém links para as principais páginas ou seções do site. Normalmente, inclui elementos como:

- Logotipo: Um link para a página inicial.
- Menu de Navegação: Links para as principais seções do site, como "Home", "Sobre", "Serviços", "Contato", etc.
- Botões de Ação: Chamadas para ação como "Login", "Inscreva-se", "Compre Agora", etc.********
- Barra de Busca: Um campo para os usuários pesquisarem conteúdo no site.
- Ícones de Redes Sociais: Links para perfis de redes sociais.

A header navigation ou muitas vezes chamada de top bar, facilita a navegação pelo site, se bem estruturada, contribui para a acessibilidade do site, garantindo que todos os usuários, incluindo aqueles com deficiências, possam navegar facilmente.
Podem ainda aumentar o engajamento com  bßotões de ação e links importantes no cabeçalho podem direcionar os usuários para páginas de conversão, como páginas de produtos ou formulários de inscrição, aumentando o engajamento e as conversões.


#### Exercício

Vamos criar uma header navigation semelhante a da imagem abaixo.

Para criarmos uma hero section primeiramente vamos criar
uma nova branch a partir da main, chamada hero-section `git checkout -b header-navigation` e em seguida criar
um novo arquivo `navigation.html` e criar a estrutura básica do arquivo.


![resultado](/assets/img/resultado-header.png)

### Código HTML

Seu código provavelmente se parecerá com o código abaixo.

```html
<header>
  <h1>Meu Site</h1>
  <nav>
    <ul>
      <li><a href="https://linkedin.com/in/seu-nome-de-usuario">Linkedin</a></li>
      <li><a href="https://github.com/seu-nome-de-usuario">Github</a></li>
    </ul>
  </nav>
</header>
```




### Estilos CSS

---

Agora, vamos adicionar os estilos CSS para atingir o layout desejado.

`<header>`

Para estilizar o header e a navegação iremos definir as seguintes propriedades no css da página.


**`header`**

- a tag `header` devera organizar seu conteúdo na horizontal e para isso usaremos a propriedade `display` definida como `flex`. Para colocar o titulo em uma ponta e os links na outra, vamos definir a propriedade `justify-content` para `space-between` e o `align-items` definida como `center` e vai centralizar o conteúdo verticalmente ao centro com um espaçamento `padding`de `18px` e o background continua `#333` e a cor do texto definida para branco usando o `color` definido como `#fff`

- a tag `nav` devera organizar seu conteúdo na horizontal e para isso usaremos a propriedade `display` definida como `flex`.

- para a tag `ul` também definiremos o `display` como `flex` o `list-style-type` definido como `none` para remover os estilos de lista.

- para a tag `li` defina um `padding` de `8px`e uma margem direita `margin-right` em `24px`

- a tag `a` terá sua cor definida para branco usando a propriedade `color` como `#fff`. Também removeremos o sublinhado do link com a propriedade `text-decoration` como `none`

### Explicação dos Estilos

---

- **`header`**

  - `color: #fff;`: define a cor do texto para branco
  - `padding: 18px;`: Adiciona um padding de 18 pixels ao redor do conteúdo do header.
  - `background-color: #333;`: Define a cor de fundo do header como cinza escuro (#333).

- **`nav`**

  - `display: flex;`: Usa o Flexbox para organizar os elementos filhos.
  - `justify-content: space-between;`: Distribui os elementos filhos (h1 e ul) com o máximo de espaço possível entre eles.
  - `align-items: center;`: Alinha os elementos filhos verticalmente ao centro.

- **`ul`**

  - `display: flex;`: Exibe os itens da lista na horizontal.
  - `list-style-type: none;`: Remove os marcadores de lista padrão.
  - `padding: 0;`: Remove o padding padrão da lista.
  - `margin: 0;`: Remove a margem padrão da lista.

- **`li`**

  - `margin-left: 24px;`: Adiciona um espaço de 20 pixels à esquerda de cada item da lista, exceto o primeiro item.

- **`a`**
  - `color: white;`: Define a cor do texto dos links como branco.
  - `text-decoration: none;`: Remove o sublinhado dos links.

> Ao final não esqueça de comitar seu código na branch criada.