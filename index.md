---
layout: base.njk
title: Daniel Giscombe — Portfolio
---
# Selected Work

A selection of recent case studies focusing on design systems, UX architecture, and engineering.

<section class="projects-grid">
  {% for project in collections.projects %}
    <article class="project-card">
      <div class="card-meta">
        <span class="project-tag">{{ project.data.role }}</span>
        <time class="project-date">{{ project.data.date | default("") }}</time>
      </div>
      <h2 class="card-title">
        <a href="{{ project.url }}">{{ project.data.title }}</a>
      </h2>
      <p class="card-desc">{{ project.data.description }}</p>
      <a href="{{ project.url }}" class="card-link">View Case Study &rarr;</a>
    </article>
  {% endfor %}
</section>