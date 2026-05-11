---
tags: [aws, sap-c02, dms]
---
# Database Migration Service (DMS)

AWS Database Migration Service (DMS) helps you migrate databases to AWS quickly and securely while the source database remains fully operational.

## Core Components
- **Replication Instance**: A managed [[EC2 Overview|EC2]] instance that runs the migration tasks.
- **DMS Serverless**: Automatically provisions and scales replication capacity, eliminating the need to manage instance sizing.
- **Endpoints**: Connections to the source and target data stores.
- **Replication Tasks**: Defines what data is moved. Common pattern: **Full-load + CDC** (initial bulk load followed by ongoing change capture to minimize downtime).

## Migration Types
1. **Homogeneous**: Source and target are the same (e.g., MySQL to Aurora MySQL). DMS handles this natively; SCT is **not** required.
2. **Heterogeneous**: Source and target are different (e.g., Oracle to PostgreSQL). Requires **AWS Schema Conversion Tool (SCT)** to convert the schema before DMS can migrate data.

## AWS Schema Conversion Tool (SCT)
- SCT is **only needed for heterogeneous** migrations (e.g., Oracle → PostgreSQL). For homogeneous migrations, DMS handles it natively.
- Converts database schemas, views, stored procedures, and functions.
- Must be used **before** DMS in heterogeneous scenarios.
- Can also convert application code containing embedded SQL.

## Key Features
- **CDC (Change Data Capture)**: Continuous replication of changes from source to target.
- **Multi-AZ**: Provides high availability for the replication instance.
- **LOB Modes**:
    - **Limited LOB Mode**: (Fastest) Truncates LOBs to a specified size.
    - **Full LOB Mode**: Migrates entire LOBs regardless of size (Slower).
- **Fleet Advisor**: Automates discovery and planning for large-scale database migrations.

## Best Practices
- **Parallelism**: Use multiple tasks to migrate large databases or tables.
- **Indexes**: Drop primary/secondary indexes on the target during the "Full Load" phase to improve speed; re-add them before starting CDC.
- **LOBs**: All LOB columns on the target must be nullable.

![[dms-migration.png]]

> [!exam]
> **SAP-C02 Scenario: Heterogeneous Migration**
> If you are migrating from an on-premises Oracle database to Amazon Aurora PostgreSQL:
> 1. Use **SCT** to convert the schema and application code.
> 2. Use **DMS** with a **Full Load + CDC** task to migrate the data and keep it in sync until cutover.

## Related Services
- [[_Migration Index|Migration Index]]
- [[Snow Family]]
- [[DataSync]]
- [[RDS Overview|RDS]]

---
**Practice:** [[DMS - Practice Questions|DMS Practice Questions]]