

### Exercício de bloco de tags

Crie um novo arquivo no seu computador usando um editor de texto como o Notepad, Notepad++ ou Visual Studio Code chamado `block-tags.html`
Nesse arquivo, crie a estrutura de código abaixo com as tags de bloco que estudamos anteriormente, comite e envie ao github no mesmo repositório criado anteriormente.

---

#### `<!DOCTYPE html>`
Esta linha define o tipo de documento como HTML5. Sempre deve ser a primeira linha em um documento HTML.

#### `<html lang="pt-BR">`
Esta tag abre o documento HTML e define o idioma como português brasileiro.

#### `<head>`
A seção `<head>` contém informações sobre o documento, como metadados e links para estilos e scripts.

- **`<meta charset="UTF-8">`**: Define a codificação de caracteres para `UTF-8`, o que permite que a página exiba corretamente todos os caracteres, incluindo acentos e caracteres especiais.
- **`<meta name="viewport" content="width=device-width, initial-scale=1.0">`**: Configura a página para ser responsiva, ajustando-se à largura do dispositivo do usuário.
- **`<title>Exemplo de Tags de Bloco</title>`**: Define o título da página que aparece na aba do navegador.
- **`<style>`**: Contém estilos CSS internos que definem a aparência dos elementos na página.

### Estilos CSS
---

Os estilos CSS no bloco `<style>` definem como os elementos na página devem ser exibidos.
A tag `style` deve estar dentro da tag head e o código css dentro da tag `style`.

Ex: 

```html
    <head>
        <!-- outras tags como link, meta, title, script também poderão aparecer aqui  -->
        <style>
        /* ... seu css vai aqui, exemplo */
        body {
            font-size: 12px
        }
        </style>
    <head>
```

- **`body`**: Define a fonte padrão `font-family` como `"sans-serif"`.
- **`header`, `footer`**: Define um fundo `background-color` cinza escuro (`#333`), texto branco (#fff), preenchimento `padding` de 10 pixels e centraliza o texto `text-center`.
- **`main`**: Adiciona uma margem `margin` de 20 pixels ao redor do conteúdo principal.
- **`section`**: Adiciona uma margem inferior de 20 pixels entre as seções.
- **`aside`**: Define um fundo cinza claro (`#f4f4f4`), adiciona preenchimento de 10 pixels e margens de 20 pixels acima e abaixo.

### Corpo do Documento
---

#### `<body>`
A seção `<body>` contém todo o conteúdo visível da página.

- **`<header>`**: Contém o cabeçalho da página com um título (`<h1>`) e uma navegação (`<nav>`) com links.
  - **`<h1>`**: O título principal da página.
  - **`<nav>`**: A navegação principal com uma lista não ordenada (`<ul>`) de links (`<li>`).
      - dentro de `<nav>` crie uma tag `ol` com dois item `li` dentro.
      - dentro de cada `li` coloque uma tag `a` com o `href` para qualquer site e dentro da tag o nome do site
      - adicione também à tag a um atrtibuto `target` com o valor `_blank`, isso fará com que o link abra em uma nova aba. 

- **`<main>`**: Contém o conteúdo principal da página.
  - **`<section id="home">`**: Seção inicial da página com um cabeçalho (`<h2>`) e um parágrafo (`<p>`).
  - **`<section id="about">`**: Seção "Sobre" com um cabeçalho (`<h2>`) e um parágrafo (`<p>`).
  - **`<aside>`**: Contém informações adicionais, como notícias, com um cabeçalho (`<h3>`) e um parágrafo (`<p>`).
  - **`<section id="contact">`**: Seção de contato com um cabeçalho (`<h2>`) e um parágrafo (`<p>`).

- **`<footer>`**: Contém o rodapé da página com uma mensagem de copyright.

### Resumo
---

- O cabeçalho (`<header>`) contém o título da página e a navegação.
- O conteúdo principal (`<main>`) é dividido em seções (`<section>`) e uma barra lateral (`<aside>`).
- O rodapé (`<footer>`) contém informações de copyright.

Este código cria uma página web bem estruturada e estilizada, com uma navegação clara e seções bem definidas para o conteúdo.
