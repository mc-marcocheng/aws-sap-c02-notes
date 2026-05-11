---
tags: [aws, sap-c02, analytics, opensearch]
---
# Amazon OpenSearch Service

Amazon OpenSearch Service is a managed service for log analytics, real-time application monitoring, and full-text search.

## Core Features
 - **Managed Clusters**: Automates backups, monitoring, and software patching.- **Storage Tiers (Cost Optimization)**:
    - **Hot**: Fast storage ([[EBS Overview|EBS]]) for indexing and frequent access.
    - **UltraWarm**: S3-backed storage for infrequently queried indices at ~90% lower cost. **(Critical for cost optimization)**
    - **Cold**: Lowest cost, data is detached from compute until needed for analysis.
- **Dedicated Master Nodes**: Offload cluster management tasks from data nodes to improve stability.
- **Multi-AZ**: Supports deployment across 2 or 3 Availability Zones for high availability.

## Security and Access Control
- **Network Isolation**: Deploy within a **[[VPC Overview|VPC]]** for private connectivity.
    - **Exam Tip**: Once deployed in a VPC, you **cannot** switch to a public endpoint (or vice versa). This is **immutable**.
- **Authentication**: Integrates with **[[Cognito|Amazon Cognito]]** and SAML for dashboard access.
- **Fine-Grained Access Control (FGAC)**: Document and field-level security.
- **Encryption**: Supports encryption at rest ([[KMS]]) and node-to-node encryption (TLS).

## Advanced Capabilities
- **Cross-Cluster Replication**: Low-latency synchronization between clusters in different regions. Used for **DR** and low-latency global reads.
- **Integration**: Ingest data via **Kinesis Data Firehose**, **Logstash**, or **AWS IoT**.
- **Trace Analytics**: Analyze distributed trace data for application performance monitoring.

| Tier | Storage | Best Use Case |
| --- | --- | --- |
| **Hot** | EBS (SSD) | Active indexing and high-frequency queries. |
| **UltraWarm** | S3-backed | Large volumes of logs for long-term retention. |
| **Cold** | S3 (Detached) | Historical logs rarely accessed, but must be preserved. |

> [!important] Blue/Green Deployments
> OpenSearch Service uses a blue/green deployment process for configuration updates and patches to ensure zero downtime.

> [!exam]
> **SAP-C02 Tip**: For centralized logging across multiple accounts, the recommended pattern is:
> **CloudWatch Logs** -> **Kinesis Data Firehose** -> **Amazon OpenSearch**.

## Related Services
- [[_Analytics Index|Analytics Index]]
- [[Kinesis Overview|Kinesis]]
- [[Cognito|Amazon Cognito]]
- [[CloudWatch Overview|CloudWatch]]
- [[VPC Overview|VPC]]