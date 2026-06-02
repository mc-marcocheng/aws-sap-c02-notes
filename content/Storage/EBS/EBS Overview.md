---
tags: [aws, sap-c02, storage, ebs]
---
# Amazon EBS Overview

Amazon Elastic Block Store (EBS) provides block-level storage volumes for use with [[EC2 Overview|EC2]] instances. EBS volumes are highly available and reliable storage volumes that can be attached to any running instance in the same Availability Zone.

## EBS Volume Types

| Category | Type | Short Name | Use Case |
| --- | --- | --- | --- |
| **SSD** | Provisioned IOPS | `io2` / `io1` | Critical databases, high performance. **io2 Block Express** provides up to 64 TiB size, 256,000 IOPS, and 4,000 MB/s throughput for SAP HANA, Oracle, SQL Server (Requires Nitro). |
| **SSD** | General Purpose | `gp3` / `gp2` | System volumes, dev/test. **gp3** allows provisioning IOPS and throughput independently of size (unlike gp2 where IOPS scales with size) and is cheaper at baseline. |
| **HDD** | Throughput Optimized | `st1` | Big data, data warehouses, log processing. |
| **HDD** | Cold HDD | `sc1` | Infrequently accessed data, lowest cost. |

## Key Features
- **High Availability**: Data is automatically replicated within its Availability Zone.
- **Snapshots**: Incremental backups stored in [[S3 Overview|S3]]. Can be used to create new volumes or replicate data across regions.
- **Elastic Volumes**: Dynamically increase volume size, change performance (IOPS), or change volume type with no downtime. *Note: Decreasing the size of an EBS volume is not supported.*
- **Encryption**: Supports encryption at rest and in transit between EC2 and EBS. Uses AWS [[KMS]]. You can enable "Encryption by Default" for all new volumes.
- **Multi-Attach**: Allows a single Provisioned IOPS (`io1`/`io2`) volume to be concurrently attached to up to 16 Nitro-based EC2 instances in the same AZ. Application must handle concurrent write coordination (e.g., using a cluster-aware filesystem).
- **Recycle Bin**: A recovery feature with configurable retention rules that enables you to restore accidentally deleted EBS Snapshots and EBS Volumes.
- **Torn Write Prevention (TWP)**: Available on `io2` volumes, this ensures 16KiB write operations are not "torn" (partial writes) during power failures or crashes, which is critical for databases like MySQL and MariaDB.

## EBS vs. Instance Store
- **EBS**: Persistent storage. Data survives instance stop/termination (if configured).
- **Instance Store**: Ephemeral storage. Data is lost when the instance is stopped or terminated. Provides the highest IOPS and lowest latency.

> [!exam]
> **SAP-C02 Performance Tip**:
> - If you need **consistent, sub-millisecond latency**, high IOPS, or Multi-Attach: **Provisioned IOPS (io2)**.
> - If you need **massive throughput** for sequential reads/writes: **Throughput Optimized (st1)**.
> - If you need the **absolute highest performance** and data persistence isn't required: **Instance Store**.

---
### EBS Snapshot Management
- Snapshots are **incremental** and stored in S3.
- Use **Data Lifecycle Manager (DLM)** to automate snapshot creation, retention, and deletion.
- **Fast Snapshot Restore (FSR)**: Eliminates the latency of the first access to data (initialization/pre-warming) when a volume is created from a snapshot.

## Related Services
- [[_Storage Index|Storage Index]]
- [[EC2 Overview|EC2]]
- [[S3 Overview|S3]]
- [[KMS]]

---
**Practice:** [[EBS - Practice Questions|EBS Practice Questions]]
