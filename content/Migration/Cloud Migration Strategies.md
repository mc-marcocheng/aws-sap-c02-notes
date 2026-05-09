---
tags: [aws, sap-c02, migration]
---
# Cloud Migration Strategies

Migrating to AWS involves moving applications, databases, and data from on-premises or other clouds to the AWS platform.

## Application Migration Strategies (The 6 R's)

| Strategy | Description | Best Use Case |
| --- | --- | --- |
| **Rehost** (Lift & Shift) | Moving applications as-is to EC2. Automated using **AWS Application Migration Service (MGN)**. | Fast migration, large scale, low change. |
| **Replatform** (Lift, Tinker & Shift) | Making minor optimizations (e.g., moving to RDS or Elastic Beanstalk) without core architecture changes. | Reducing management overhead. |
| **Repurchase** (Drop & Shop) | Switching to a different product, typically a SaaS (e.g., moving from local CRM to Salesforce). | Moving to modern SaaS solutions. |
| **Refactor** (Re-architect) | Reimagining the application using cloud-native features (Lambda, S3, DynamoDB). | Need for high scalability and agility. |
| **Retire** | Identifying and turning off resources that are no longer useful. | Reducing cost and complexity. |
| **Retain** | Keeping portions of the IT portfolio on-premises for now. | High complexity or regulatory requirements. |

## Key Migration Services

### 1. Discovery and Planning
- **AWS Migration Hub**: Central dashboard to track migration progress across various AWS and third-party tools.
- **AWS Application Discovery Service**: Collects usage and configuration data from on-premises servers to plan the migration.

### 2. Server Migration
- **AWS Application Migration Service (MGN)**: The recommended primary service for lift-and-shift migrations to AWS. It minimizes downtime by continuously replicating block-level data.
- **VM Import/Export**: Import existing virtual machine images as EC2 instances or AMIs.

### 3. Database Migration
- **AWS Database Migration Service (DMS)**: Migrates databases to AWS with minimal downtime.
- **AWS Schema Conversion Tool (SCT)**: Used for heterogeneous migrations (e.g., Oracle to Aurora) to convert the schema and code.

## Data Transfer Services

| Service                 | Mechanism            | Capacity                        |
| ----------------------- | -------------------- | ------------------------------- |
| **AWS Snowball**        | Physical Appliance   | Terabytes to Petabytes          |
| **AWS Snowmobile**      | Shipping Container   | Up to 100 PB                    |
| **AWS DataSync**        | Online (Agent-based) | High-speed online transfer      |
| **AWS Transfer Family** | SFTP/FTPS/FTP        | Managed file transfer to S3/EFS |
| **AWS Direct Connect**  | Dedicated Network    | 1 Gbps to 100 Gbps              |

> [!exam]
> **SAP-C02 Choice**:
> - If the goal is **speed** and **minimum downtime** for servers: **AWS MGN**.
> - If the goal is **minimal management** for database migration: **AWS DMS**.
> - If the network is too slow for large data: **Snow Family**.

---
**Practice:** [[Migration - Practice Questions|Migration Practice Questions]]