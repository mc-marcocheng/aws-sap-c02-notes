---
tags: [aws, sap-c02, database, rds]
---
# RDS Overview

Amazon Relational Database Service (Amazon [[RDS Overview|RDS]]) is a managed service that makes it easy to set up, operate, and scale relational databases in the cloud. 

**Supported Engines**: MySQL, PostgreSQL, MariaDB, Oracle, SQL Server, and Db2.

## Core Components

### DB Instances and Storage
- **RDS Custom**: Gives you access to the underlying OS and database for Oracle and SQL Server. Used for custom patches, third-party agents, or OS-level access that managed RDS doesn't allow.
- **Instance Classes**: Various combinations of CPU and memory.
- **Storage Types**: 
  - **General Purpose SSD (gp2/gp3)**: Balanced for a wide range of workloads.
  - **Provisioned IOPS SSD (io1)**: High-performance for I/O intensive workloads.
- **Storage Autoscaling**: Automatically increases storage when space is low, without downtime.

### Configuration
- **DB Parameter Groups**: Manage engine settings. 
  - **Static parameters** require a manual reboot. 
  - **Dynamic parameters** are applied immediately.
- **DB Option Groups**: Enable optional features (e.g., Oracle APEX, SQL Server TDE).

## High Availability and Scalability

| Feature | Multi-AZ (High Availability) | Read Replicas (Scalability) |
| :--- | :--- | :--- |
| **Replication** | Synchronous | Asynchronous |
| **Primary Use** | Disaster Recovery / High Availability | Scaling Read Workloads |
| **Read/Write** | Only Primary is accessible | Replica is readable |
| **Failover** | Automatic to standby | Manual promotion required |
| **Region** | Same Region | Same or Cross-Region |

## Security and Authentication

- **Network Isolation**: Always deploy RDS in **Private Subnets**.
- **IAM DB Authentication**: Allows authentication to MySQL and PostgreSQL using [[IAM]] users/roles.
- **Encryption**:
  - **At Rest**: Using AWS [[KMS]] keys. Encrypts the instance, snapshots, and replicas.
  - **In Transit**: Using SSL/TLS.
- **Secrets Manager**: Best practice for rotating and managing database credentials.

## Backup and Recovery

- **Automated Backups**: Daily snapshots and transaction logs. Enables Point-in-Time Recovery (PITR) within the retention period (up to 35 days).
- **Manual Snapshots**: User-initiated, kept until explicitly deleted.

> [!important]
> Deleting a DB instance deletes its automated backups, but manual snapshots are preserved.

## Advanced Features

### RDS Proxy
- **Managed Connection Pooling**: Reduces database load and handles connection multiplexing.
- **Lambda Integration**: Solves the "too many connections" problem for serverless functions.
- **Faster Failover**: Reduces failover time by **66%+** by bypassing the need for DNS propagation.

> [!info] **Performance Insights**
> A dashboard to visualize database load and identify bottlenecks (e.g., high-load SQL queries).

> [!exam]
> - **Multi-AZ** is for **Availability/DR**; **Read Replicas** are for **Scalability**.
> - **Aurora** is often the preferred relational choice for SAP-C02 due to its 6-way replication and faster failover.
> - For **Cross-Region DR**, use Cross-Region Read Replicas or Aurora Global Database.

## Related Services
- [[_Database Index|Database Index]]
- [[Aurora Overview]]
- [[RDS Proxy]]
- [[RDS Replication]]
- [[Secrets Manager]]

---
**Practice:** [[RDS - Practice Questions|RDS Practice Questions]]