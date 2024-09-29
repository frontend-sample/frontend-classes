---
layout: default
refactor: true
categories: ninja
---

{% include lang.html %}
{% assign filtered_posts = site.categories[page.category] %}
{% assign sorted_posts = filtered_posts | sort: 'priority' %}
<h1>Curso: {{ page.title }}</h1>

<p>
  Bem-vindo ao nosso curso “Frontend, a Barreira Inicial”! Este módulo é o ponto
  de partida perfeito para quem está começando no desenvolvimento web. Aqui,
  você vai explorar os fundamentos essenciais de HTML e CSS, aprendendo a
  estruturar e estilizar páginas web de forma eficaz.
</p>

<p>
  Vamos começar entendendo a base de qualquer site: o HTML. Você descobrirá como
  construir a estrutura de uma página, criar títulos, parágrafos, listas e
  inserir links, imagens, áudio e vídeo. Em seguida, mergulharemos no CSS, onde
  você aprenderá a transformar a aparência das suas páginas com estilos, cores,
  fontes e layouts responsivos.
</p>

<p>
  Ao longo do curso, você irá dominar desde a criação e configuração de
  formulários até a estilização avançada com técnicas de layout como Flexbox e
  Grid. Este conhecimento vai prepará-lo para criar páginas web elegantes e
  funcionais, proporcionando uma base sólida para seus futuros projetos de
  desenvolvimento web.
</p>

<p>
  Prepare-se para desbravar o mundo do frontend com habilidades que são a chave
  para construir sites impactantes e profissionais!
</p>

{{ page.category }}
<div id="page-category">
  <ul class="content ps-0">
    {% for post in sorted_posts %}
    <li class="d-flex justify-content-between px-md-3">
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <span class="dash flex-grow-1"></span>
      {% include datetime.html date=post.date class='text-muted small
      text-nowrap' lang=lang %}
    </li>
    {% endfor %}
  </ul>
</div>
