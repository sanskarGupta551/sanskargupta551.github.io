---
title: "Big Data Real-time Analytics with Spark & Airflow"
date: 2023-10-10
tags:
  - Big Data
  - Apache Spark
  - Data Engineering
  - Airflow
  - Streaming
thumbnail: /assets/images/projects/bigdata_spark_airflow.png
tldr: "Building a scalable, real-time analytics platform on Spark Streaming and Airflow for live processing and insights."
problem: |
  The business required actionable analytics on large-scale streaming data (user events, logs) with low latency, but traditional batch pipelines delayed insight and operational flexibility.
tech_stack:
  - Apache Spark (Streaming & SQL)
  - Apache Airflow
  - Google Cloud Storage & Pub/Sub
  - Python
  - Parquet, Avro
  - Docker
architecture_image: /assets/images/projects/spark_airflow_architecture.png
contributions:
  - Implemented robust Spark Streaming jobs for real-time ETL and continuous metric computation.
  - Developed reusable Airflow DAGs for orchestrating streaming, batch, and alerting pipelines.
  - Automated failover, data validation, and SLA monitoring.
  - Delivered near-instant analytics dashboards for business users.
screenshots:
  - /assets/images/projects/spark_streaming_dashboard.png
  - /assets/images/projects/airflow_dags.png
repo: "https://github.com/sanskargupta551/bigdata-streaming-demo"
demo: "https://analytics-demo.example.com/"
more_info: "https://blog.example.com/bigdata-case-study"
---

## Project Overview

This platform ingests high-velocity data from multiple sources (web, IoT, logs), applies streaming transformations using **Apache Spark**, and exposes live KPIs via user-friendly dashboards. **Airflow** handles pipeline orchestration, monitoring, and conditional workflow logic.

## Key Outcomes

- **Real-time reporting** with route-based event aggregation and business metrics refreshed every minute.
- Modular pipeline templates enable easy scaling for future data sources and analytics needs.
- **Reduced time-to-insight** from 12+ hours (legacy batch) to under 2 minutes.

## What I Did

- Architected and coded end-to-end pipeline modules, tuning Spark for high-throughput workloads.
- Wrote comprehensive documentation and pipeline onboarding guides.
- Led training and knowledge transfer for data engineering team.

## Additional Resources

- [GitHub Repository](https://github.com/sanskargupta551/bigdata-streaming-demo)
- [Technical Walk-through](https://blog.example.com/bigdata-case-study)

<!-- Add further technical deep-dives or visualizations as needed for your intended audience -->
