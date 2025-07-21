## Portfolio Project Preferences & Requirements

Below is a comprehensive overview of your portfolio project goals, technical focus, workflow paradigms, and best practices.

### 1. Target Role & High-Level Goals

- **Role:** Production ML Engineer
- **Portfolio Expectations:** A showcase of diverse, end-to-end projects embodying industry standards and best practices for modern machine learning deployment.

### 2. Key Paradigms & Focus Areas

| Paradigm             | Core Focus                                                              |
|----------------------|-------------------------------------------------------------------------|
| MLOps & DevOps       | Automated, reliable model deployment, monitoring, CI/CD, versioning     |
| Full-stack ML        | End-to-end workflows (data, model, API, product integration)            |
| Big Data             | Handling, processing, and analyzing large-scale distributed datasets     |

### 3. Technology Stack & Skills

| Tool / Skill           | Category                | Role in Projects                        |
|------------------------|-------------------------|-----------------------------------------|
| **Python**             | Programming Language    | ML, scripting, pipelines                |
| **Go**                 | Programming Language    | Efficient microservices                 |
| **Scala**              | Programming Language    | Big Data processing (e.g., Spark)       |
| **SQL, NoSQL**         | Databases               | Data management, modeling               |
| **DSA**                | Algorithms              | Efficient data & computation            |
| **Applied Mathematics**| Analytics               | Model formulation, statistics           |
| **GCP, AWS, Azure**    | Cloud Platforms         | Cloud-native architecture               |
| **Terraform**          | IaC                     | Automated provisioning (all envs)       |
| **Docker**             | Containerization        | Local testing, reproducibility          |
| **Kubernetes**         | Orchestration           | Scaling, deployment                     |
| **Open-source Tools**  | General                 | Flexibility, cost-effective foundation  |

### 4. Hybrid Workflow Approach

- **Development & Testing:** On-premises, utilizing standard open-source tools and local resources.
- **Deployment & Scaling:** In the cloud, leveraging managed, cloud-native services (with essential open-source integrations).
- **Separation of Environments:** Clear distinction and isolated workflows for on-premises (development/test) and cloud (production).

#### Workflow by Phase

| Phase        | Environment     | Tools/Services (General)                       | IaC Method                |
|--------------|----------------|------------------------------------------------|---------------------------|
| Development  | On-premises    | Open-source ML/data/pipeline tools             | Local Terraform scripts   |
| Testing      | On-premises    | Open-source monitoring/testing tools           | Local Terraform scripts   |
| Deployment   | Cloud          | Managed services plus essential open-source    | Cloud-specific Terraform  |
| Scaling      | Cloud          | Managed orchestration & automation             | Cloud-specific Terraform  |
| Cleanup      | Both           | Terraform for infra teardown                   | Dedicated cleanup scripts |

### 5. Infrastructure as Code & Automation

- **Every project utilizes Terraform for IaC**, enabling reproducible infrastructure setups.
- **Separate, pre-configured Terraform scripts** for:
  - Local/on-premises deployment and teardown
  - Each supported cloud platform (GCP, AWS, Azure)
- **Automated cleanup procedures** streamline infrastructure management.

### 6. Documentation & User Experience

- **Comprehensive documentation** for all projects:
  - Instructions for on-premises and cloud workflows
  - Infrastructure provisioning details
  - One-click deployment and cleanup options
- **Modular and user-friendly scripts** for easy onboarding and usability.

### 7. Core Values & Best Practices

- **Consistency:** All projects follow the described hybrid, IaC-driven pattern.
- **Auditable Deployments:** Clear, versioned infrastructure and codebase.
- **Scalability & Production Readiness:** Cloud-native scaling and robust operational tooling.
- **Industry Alignment:** Adherence to current standards in MLOps, DevOps, and Big Data engineering.

This framework ensures your portfolio is both practical and reflective of leading industry methodologies.