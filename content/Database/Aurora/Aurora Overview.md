---
tags: [aws, sap-c02, database, aurora]
---
# Aurora Overview

Amazon [[Aurora Overview|Aurora]] is a fully managed, MySQL and PostgreSQL-compatible relational database engine. It combines the speed and reliability of commercial databases with the simplicity and cost-effectiveness of open-source databases.

> [!important]
> - **Performance**: Up to 5x faster than standard MySQL and 3x faster than standard PostgreSQL.
> - **Scaling**: Storage scales automatically from 10GB to 128TiB in 10GB increments.
> - **Availability**: Replicates data 6-way across 3 Availability Zones (AZs).

## Aurora DB Clusters

An Aurora DB cluster consists of one or more DB instances and a cluster volume that manages the data for those instances. The cluster volume is a virtual storage volume that spans multiple AZs.

### DB Instance Types
- **Primary DB Instance**: Supports read and write operations. Each cluster has one primary instance.
- **Aurora Replica**: Supports only read operations. A cluster can have up to 15 replicas. Replicas provide high availability and can be used for failover.
- **Multi-master Clusters**: All instances have read/write capability.

## Connection Endpoints

| Endpoint Type | Description | Purpose |
| --- | --- | --- |
| **Cluster Endpoint** | Connects to the current primary DB instance. | Write operations and DDL statements. |
| **Reader Endpoint** | Load balances connections among available Aurora Replicas. | Read-only queries to offload primary instance. |
| **Custom Endpoint** | Represents a user-defined set of DB instances. | Specialized workloads (e.g., higher-capacity instances). |
| **Instance Endpoint** | Connects to a specific DB instance. | Direct control and troubleshooting. |

## High Availability and Scaling

- **Self-Healing Storage**: Data blocks and disks are continuously scanned for errors and repaired automatically.
- **Fault Tolerance**: Can handle the loss of up to 2 copies of data without affecting write availability and up to 3 copies without affecting read availability.
- **Auto Scaling**: Aurora Auto Scaling automatically adds/removes replicas based on [[CloudWatch Overview|CloudWatch]] metrics (CPU utilization or average connections).

### Failover Priority
Aurora automatically fails over to a replica if the primary instance fails.
1. Promote an existing replica with the highest priority (Tier 0 to Tier 15).
2. If priorities are equal, promote the replica that is largest in size.
3. If no replicas exist, create a new primary instance.

## Backup and Restore

- **Automated Backups**: Always enabled; does not impact performance.
- **Snapshots**: Manual snapshots are supported and can be shared with other AWS accounts.
- **Point-in-Time Recovery (PITR)**: Can restore to any point within the retention period, up to the last 5 minutes.
- **Backtrack**: Allows rewinding a DB cluster to a specific point in time without restoring from a backup. (MySQL only, max 72 hours).

## Advanced Features

### Aurora Global Database
- Spans multiple AWS Regions.
- Provides low-latency global reads and disaster recovery.
- Typical replication latency is under 1 second.

### Aurora Parallel Query
- Pushes down and distributes query processing across thousands of CPUs in the storage layer.
- Best for analytical workloads on large tables.

### Aurora Clone
- Uses **copy-on-write** protocol.
- Creating a clone is faster and more space-efficient than restoring a snapshot.
- Only allocates new storage when data changes in either the source or the clone.

> [!exam]
> - Aurora storage is **self-healing** and **auto-expanding** (up to 128 TiB).
> - **Replication**: 6 copies across 3 AZs.
> - **Endpoints**: Use the Reader Endpoint for load-balancing read traffic.
> - **Backtrack** is unique to Aurora MySQL and does not create a new instance (in-place).

## Related Services
- [[_Database Index|Database Index]]
- [[RDS Overview]]
- [[DynamoDB Overview]]
- [[ElastiCache]]

---
**Practice:** [[Aurora - Practice Questions|Aurora Practice Questions]]