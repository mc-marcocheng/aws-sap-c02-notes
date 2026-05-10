---
tags: [aws, sap-c02, migration, practice-questions]
---
# Migration Readiness Practice Questions

> [!question]
> A company is planning the migration of several lab environments used for software testing. An assortment of custom tooling is used to manage the test runs for each lab. The labs use immutable infrastructure for the software test runs, and the results are stored in a highly available SQL database cluster. Although completely rewriting the custom tooling is out of scope for the migration project, the company would like to optimize workloads during the migration. Which application migration strategy meets this requirement?
> 1. Re-host
> 2. Re-platform
> 3. Re-factor/re-architect
> 4. Retire
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[Migration Readiness Assessment#6 R's|Re-platforming]] (also known as "lift, tinker, and shift") involves making a few cloud-native optimizations to achieve some tangible benefit without changing the core architecture of the application. In this scenario, the company wants to optimize workloads but considers completely rewriting the custom tooling to be out of scope. This perfectly describes a re-platforming strategy. [[Cloud Migration Strategies#Re-host (Lift & Shift)|Re-host]] involves no optimization. [[Cloud Migration Strategies#Re-factor (Re-architect)|Re-factor]] would involve a full redesign/rewrite, which is explicitly out of scope. [[Cloud Migration Strategies#Retire|Retire]] would mean decommissioning the environment, which is not the goal.
