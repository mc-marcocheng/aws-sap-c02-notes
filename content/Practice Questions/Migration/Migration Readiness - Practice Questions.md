---
tags: [aws, sap-c02, migration, practice-questions]
---
# Migration Readiness Practice Questions

> [!question]
> A company is planning to migrate their large scale application to AWS. They want to ensure they have the necessary foundation in place before starting the migration. Which AWS tool or framework can help the company assess their migration readiness?
> 1. AWS Cloud Adoption Framework (CAF)
> 2. AWS Migration Hub
> 3. AWS Application Discovery Service
> 4. AWS Server Migration Service
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale**: The [[Migration Readiness Assessment|AWS Cloud Adoption Framework (CAF)]] provides guidance to help organizations develop and execute a plan for their cloud adoption journey. It helps identify gaps in skills and processes, which is a key part of assessing migration readiness. While Migration Hub (Option 2) tracks the migration and Application Discovery Service (Option 3) helps identify on-premises assets, the CAF is the overarching framework for readiness assessment.

> [!question]
> A large enterprise is planning to migrate 500 applications to AWS over 3 years. The CTO wants to understand the organization's overall cloud readiness, identify capability gaps (people, process, technology), and create a prioritized migration roadmap. Which AWS program or tool should they engage with FIRST?
> 
> 1. AWS Migration Hub
> 2. AWS Migration Readiness Assessment (MRA)
> 3. AWS Application Discovery Service
> 4. AWS Well-Architected Review
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** The [[Migration Readiness Assessment]] (MRA) is designed to be the first step in a large-scale migration. It evaluates an organization's readiness across six dimensions (Business, People, Governance, Platform, Security, Operations) and produces an actionable roadmap. AWS Application Discovery Service (Option 3) focuses on technical discovery of individual workloads, not organizational readiness. Migration Hub (Option 1) is for tracking migrations already in progress.

> [!question]
> During a portfolio assessment, a solutions architect identifies the following applications:
> - App A: A legacy mainframe application with no vendor support, used by 5 employees
> - App B: A .NET monolith that needs to be broken into microservices for scalability
> - App C: A commercial off-the-shelf (COTS) application that the vendor now offers as SaaS
> - App D: A Java web app running on Tomcat with no cloud-incompatible dependencies
> 
> Match each application to the MOST appropriate migration strategy:
> 
> 1. App A: Retire, App B: Refactor, App C: Repurchase, App D: Rehost
> 2. App A: Retain, App B: Rehost, App C: Refactor, App D: Replatform
> 3. App A: Retire, App B: Refactor, App C: Repurchase, App D: Replatform
> 4. App A: Retain, App B: Replatform, App C: Repurchase, App D: Rehost
>
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** Using the [[Migration Readiness Assessment|6 R's]]:
> > - **App A → Retire**: No vendor support, minimal users — decommission it.
> > - **App B → Refactor**: Breaking a monolith into microservices is a re-architecture effort.
> > - **App C → Repurchase**: Moving from a self-hosted COTS app to the vendor's SaaS offering.
> > - **App D → Replatform**: A Java/Tomcat app can be moved to [[ECS|AWS ECS]] or Elastic Beanstalk with minor optimizations (containerization or managed platform), which is "lift, tinker, and shift." A pure rehost (Option 1) is valid but replatform captures the optimization opportunity better for SAP-C02.
