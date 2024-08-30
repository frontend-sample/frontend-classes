---
layout: post
title: Tabelas em HTML
author: vagner
date: 2019-08-08 19:54:00 +0800
categories: [html, table]
tags: [html]
priority: 13
---

# Tabelas - Organizando Dados na Web


## O que são tabelas em HTML?

Uma tabela HTML é um elemento utilizado para organizar e apresentar dados de forma estruturada em linhas e colunas. Essa estrutura é ideal para exibir informações como planilhas, listas de produtos, horários e outros conjuntos de dados relacionados.

![Exemplo de tabela](/assets/img/table.png)

## Para que servem as tabelas em HTML?

 - **Organização de dados**: As tabelas são excelentes para organizar dados de forma clara e concisa, facilitando a leitura e compreensão pelo usuário.
 - **Formatação**: As tabelas permitem aplicar estilos CSS para personalizar a aparência, como cores, bordas, alinhamento e espaçamento.
 - **Acessibilidade**: As tabelas são acessíveis a tecnologias assistivas, como leitores de tela, o que é importante para usuários com deficiência visual.

> **Tabelas devem ser usadas para dados tabulares**: Embora as tabelas possam ser usadas para criar layouts, essa prática não é recomendada, pois pode prejudicar a acessibilidade e o SEO.

## Estrutura Básica de uma Tabela
Uma tabela em HTML é composta por várias tags que definem sua estrutura:

- `<table>`: A tag principal que define o início e o fim de uma tabela.
- `<tr>` (table row): Define uma linha na tabela.
- `<th>` (table header): Define uma célula de cabeçalho em uma linha.
- `<td>` (table data): Define uma célula de dados em uma linha.

## Criando uma tabela.

Vamos criar uma tabela simples com três colunas e três linhas. Crie um novo diretório chamado `tables` e dentro dele crie um novo arquivo chamado `index.html` e coloque o codigo abaixo.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Tabela Simples</title>
</head>
<body>
    <h1>Exemplo de Tabela</h1>
    <table>
        <tr>
            <th>Nome</th>
            <th>Cidade</th>
            <th>Idade</th>
        </tr>
        <tr>
            <td>Ana</td>
            <td>São Paulo</td>
            <td>25</td>
        </tr>
        <tr>
            <td>Bruno</td>
            <td>Rio de Janeiro</td>
            <td>30</td>
        </tr>
        <tr>
            <td>Carla</td>
            <td>Belo Horizonte</td>
            <td>22</td>
        </tr>
    </table>
</body>
</html>
```

O código acima gera uma tabela de 3 linhas e 3 colunas como na imagem de exemplo no início desse tutorial.

## Adicionando estilos à Tabela

Vamos mudar a aparência padrão da tabela e para isso vamos criar um novo arquivo CSS chamado `styles.css` e coloque o trecho de código abaixo.

```css
table {
    width: 50%;
    border-collapse: collapse;
}
th, td {
    border: 1px solid black;
    padding: 8px;
    text-align: center;
}
th {
    background-color: #f2f2f2;
}
```

O CSS acima altera a borda e o espaçamento interno das células, alinha o conteúdo ao centro, limita o tamanho da tabela à 50% do tamanho total do elemento pai, define uma cor de fundo para o cabeçalho e altera o modo como as bordas das células se comportam.

![Exemplo de tabela estilizada](/assets/img/table-with-styles.png)

> `border-collapse: collapse;`: Esta propriedade faz com que as bordas da tabela sejam "colapsadas". Em vez de cada célula ter uma borda individual, as bordas das células adjacentes se fundem em uma única borda. Isso dá à tabela um visual mais compacto e evita a duplicação de bordas entre as células.

### `<caption>`

Esta tag HTML é usada para fornecer um título ou descrição para a tabela. Ela deve ser colocada imediatamente após a abertura da tag `<table>` e serve como uma legenda descritiva para a tabela. Ela é renderizada como um elemento de bloco e, por padrão, aparece acima da tabela. No entanto, pode ser estilizada usando CSS para alterar sua posição, se necessário

Para usuários que utilizam leitores de tela, a tag `<caption>` é lida antes do conteúdo da tabela, ajudando a contextualizar o que será exibido. Isso melhora a experiência de navegação para pessoas com deficiências visuais.

Para adicionar um título à tabela, adicione a tag `caption` imediatamente após a tag de abertura da tabela `table`. 

```html
<table>
    <!-- adicione essa linha -->
    <caption>Lista de Pessoas</caption>
    <!-- até aqui -->
    <tr>
        <th>Nome</th>
        <th>Cidade</th>
        <th>Idade</th>
    </tr>
    <tr>
        <td>Ana</td>
        <td>São Paulo</td>
        <td>25</td>
    </tr>
    <tr>
        <td>Bruno</td>
        <td>Rio de Janeiro</td>
        <td>30</td>
    </tr>
    <tr>
        <td>Carla</td>
        <td>Belo Horizonte</td>
        <td>22</td>
    </tr>
</table>
```


Vamos adicionar um estilo ao `CAPTION` para dar um destaque.

```css
caption {
    font-size: 24px;
    font-weight: bold;
}
````

![Exemplo de tabela com caption](/assets/img/table-with-caption.png)

## ROWSPAN e COLSPAN

Os atributos rowspan e colspan são usados para mesclar células em tabelas, permitindo que uma célula ocupe o espaço de várias linhas ou colunas.

- `colspan`: Este atributo é utilizado para fazer com que uma célula ocupe o espaço de múltiplas colunas.
Exemplo: Uma célula com `colspan="2"` ocupará o espaço de duas colunas.

- rowspan: Este atributo permite que uma célula ocupe o espaço de múltiplas linhas.
Exemplo: Uma célula com `rowspan="3"` se estenderá por três linhas.

![Exemplo de tabela com rowspan](/assets/img/table-rowspan.png)


Vamos criar uma tabela com colspan. A propriedade colspan mescla duas ou mais colunas em uma linha.

```html
 <table>
      <caption>
        Escola noturna
      </caption>
      <thead>
        <tr>
          <th colspan="2">Nome</th>
          <th>Sala</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Marcelo</td>
          <td>Alves</td>
          <td>1</td>
        </tr>
        <tr>
          <td>Alberto</td>
          <td>Leão</td>
          <td>3</td>
        </tr>
        <tr>
          <td>Maicon</td>
          <td>Gamorra</td>
          <td>5</td>
        </tr>
      </tbody>
    </table>
```
> No exemplo acima, perceba como no cabeçalho o nome ocupa duas colunas, e na tabela temos nome em uma coluna e sobrenome em outra.

![Exemplo de tabela com colspan](/assets/img/table-colspan.png)