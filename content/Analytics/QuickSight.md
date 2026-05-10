---
tags: [aws, sap-c02, analytics, quicksight]
---
# Amazon QuickSight

> [!info] Amazon QuickSight
> A scalable, serverless, embeddable, machine learning-powered business intelligence (BI) service built for the cloud.

## Key Features
 - **SPICE (Super-fast, Parallel, In-memory Calculation Engine):** In-memory data store for blazingly fast performance.- **ML Insights:** Anomaly detection, forecasting, and auto-narratives powered by ML.
- **Embedded Analytics:** Easily embed interactive dashboards into applications, portals, and websites.
- **QuickSight Q:** Ask questions about data using natural language.

## Use Cases
- Enterprise BI and dash-boarding.
- Embedding analytics into SaaS applications.
- Ad-hoc data exploration and visualization.
- Generating automated ML-driven insights.

## Architecture & Integration
- Connects to various data sources: [[RDS Overview|RDS]], [[Aurora Overview|Aurora]], [[Redshift]], [[Athena]], [[S3 Overview|S3]], on-premises databases, and third-party SaaS.
- **VPC Integration:** Can securely connect to data sources in private VPCs using QuickSight VPC connections (Elastic Network Interfaces).
- **Row-Level Security (RLS):** Restrict data access for users based on rules.

> [!important] Enterprise Edition
> QuickSight Enterprise Edition is required for Active Directory integration, VPC connectivity, Row-Level Security (RLS), and ML Insights.

### Comparison: Direct Query vs. SPICE

| Feature | Direct Query | SPICE |
| :--- | :--- | :--- |
| **Data Freshness** | Real-time | Near real-time (requires refresh schedules) |
| **Query Performance** | Depends on the underlying database | Extremely fast (in-memory) |
| **Cost** | Database compute costs | SPICE capacity pricing |

## Strategic Scenarios

> [!exam] SAP-C02 Exam Scenario
> **Scenario:** An organization wants to provide interactive BI dashboards to internal users securely. The data resides in an Amazon RDS database deployed in private subnets within a VPC. The solution must minimize database load for repetitive dashboard queries.
> **Solution:** Use **Amazon QuickSight Enterprise Edition**. Configure a **VPC connection** in QuickSight to securely access the private RDS database. Ingest the data into **SPICE** and schedule regular refreshes to minimize the load on the RDS instance and provide fast dashboard performance.

## Related Services
- [[_Analytics Index|Analytics Index]]
- [[Athena]]
- [[RDS Overview|RDS]]
- [[Redshift]]
- [[Aurora Overview|Aurora]]

---
**Practice:** [[QuickSight - Practice Questions|Amazon QuickSight Practice Questions]]