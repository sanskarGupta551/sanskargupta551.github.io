---
layout: default
title: "Projects"
permalink: /projects/
description: "All major ML, MLOps, and Data Engineering projects by Sanskar Gupta."
---

<!--
projects.md
All projects listing—uses simple tag-only skills.
-->

<section>
  <div class="container">
    <h1>All Projects</h1>
    <div class="featured-projects-grid">
      {% for project in site.projects %}
        <div class="project-card">
          {% if project.thumbnail %}
          <img class="project-banner" src="{{ project.thumbnail }}" alt="{{ project.title }} image">
          {% endif %}
          <div class="project-title-row">
            <h3><a href="{{ project.url }}">{{ project.title }}</a></h3>
          </div>
          <div class="project-short">
            {{ project.tldr }}
          </div>
          <div class="project-tag-list">
            {% if project.tech_stack %}
              {% for tech in project.tech_stack %}
                <span class="project-tag">{{ tech }}</span>
              {% endfor %}
            {% endif %}
          </div>
        </div>
      {% endfor %}
    </div>
  </div>
</section>
