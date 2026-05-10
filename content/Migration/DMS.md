---
tags: [aws, sap-c02, dms]
---
# Database Migration Service (DMS)

AWS Database Migration Service (DMS) helps you migrate databases to AWS quickly and securely while the source database remains fully operational.

## Core Components
- **Replication Instance**: A managed EC2 instance that runs the migration tasks.
- **Endpoints**: Connections to the source and target data stores.
- **Replication Tasks**: Defines what data is moved, how it's moved (Full Load, CDC, or both), and how to handle LOBs.

## Migration Types
1. **Homogeneous**: Source and target are the same (e.g., Oracle to Oracle).
2. **Heterogeneous**: Source and target are different (e.g., SQL Server to Aurora). Requires **AWS Schema Conversion Tool (SCT)**.

## AWS Schema Conversion Tool (SCT)
- Converts database schemas, views, stored procedures, and functions.
- For heterogeneous migrations, SCT must be used **before** DMS.
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

---
**Practice:** [[DMS - Practice Questions|DMS Practice Questions]]