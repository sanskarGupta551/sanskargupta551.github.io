---
layout: default
title: "Projects"
permalink: /projects/
description: "All major ML, MLOps, and Data Engineering projects by Sanskar Gupta."
---

<!--
projects.md
All projects listing/landing page.
- Fixes /projects/ 404 problem.
- Uses the same improved card/banner and mini tech badge layout as the home page.
-->

<section>
  <div class="container">
    <h1>All Projects</h1>
    <div class="projects-grid">
      {% for project in site.projects %}
        <div class="project-card">
          <div class="project-banner" style="background-image:url('{{ project.thumbnail }}');">
            <div class="project-banner-content">
              <h3><a href="{{ project.url }}">{{ project.title }}</a></h3>
            </div>
          </div>
          <div class="project-summary">
            {{ project.tldr }}
          </div>
          <div class="mini-skills-list">
            {% if project.tech_stack %}
              {% for tech in project.tech_stack %}
                {% assign tech_name = tech %}
                {% assign logo_path = "" %}
                {% case tech %}
                  {% when "Kubernetes" %}{% assign logo_path = "logos/kubernetes.svg" %}
                  {% when "Docker" %}{% assign logo_path = "logos/docker.svg" %}
                  {% when "GCP" or "Google Cloud Platform" %}{% assign logo_path = "logos/gcp.svg" %}
                  {% when "CI/CD" %}{% assign logo_path = "logos/cicd.svg" %}
                  {% when "MLflow" %}{% assign logo_path = "logos/mlflow.svg" %}
                  {% when "Airflow" %}{% assign logo_path = "logos/airflow.svg" %}
                  {% when "Spark" or "Apache Spark" %}{% assign logo_path = "logos/spark.svg" %}
                  {% when "FastAPI" %}{% assign logo_path = "logos/fastapi.svg" %}
                  {% when "DataOps" %}{% assign logo_path = "logos/dataops.svg" %}
                  {% when "Cloud Functions" %}{% assign logo_path = "logos/cloudfunctions.svg" %}
                  {% when "REST APIs" %}{% assign logo_path = "logos/api.svg" %}
                  {% when "SQL" %}{% assign logo_path = "logos/sql.svg" %}
                  {% else %}{% assign logo_path = "" %}
                {% endcase %}
                <span class="mini-skill-badge">
                  {% if logo_path != "" %}
                    <img src="{{ site.baseurl }}/assets/images/{{ logo_path }}" alt="{{ tech_name }} logo">
                  {% endif %}
                  {{ tech_name }}
                </span>
              {% endfor %}
            {% endif %}
          </div>
        </div>
      {% endfor %}
    </div>
  </div>
</section>
