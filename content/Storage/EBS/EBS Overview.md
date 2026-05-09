---
tags: [aws, sap-c02, ebs]
---
# Amazon EBS Overview

Amazon Elastic Block Store (EBS) provides block-level storage volumes for use with EC2 instances. EBS volumes are highly available and reliable storage volumes that can be attached to any running instance in the same Availability Zone.

## EBS Volume Types

| Category | Type | Short Name | Use Case |
| --- | --- | --- | --- |
| **SSD** | Provisioned IOPS | `io2` / `io1` | Critical databases, high performance. |
| **SSD** | General Purpose | `gp3` / `gp2` | System volumes, dev/test, virtual desktops. |
| **HDD** | Throughput Optimized | `st1` | Big data, data warehouses, log processing. |
| **HDD** | Cold HDD | `sc1` | Infrequently accessed data, lowest cost. |

## Key Features
- **High Availability**: Data is automatically replicated within its Availability Zone.
- **Snapshots**: Incremental backups stored in S3. Can be used to create new volumes or replicate data across regions.
- **Elastic Volumes**: Dynamically increase volume size, change performance (IOPS), or change volume type with no downtime.
- **Encryption**: Supports encryption at rest using AWS KMS. Encryption is transparent to the EC2 instance.
- **Multi-Attach**: Allows a single Provisioned IOPS volume to be attached to multiple Nitro-based EC2 instances in the same AZ.

## EBS vs. Instance Store
- **EBS**: Persistent storage. Data survives instance stop/termination (if configured).
- **Instance Store**: Ephemeral storage. Data is lost when the instance is stopped or terminated. Provides the highest IOPS and lowest latency.

> [!exam]
> **SAP-C02 Performance Tip**:
> - If you need **consistent, sub-millisecond latency** and high IOPS: **Provisioned IOPS (io2)**.
> - If you need **massive throughput** for sequential reads/writes: **Throughput Optimized (st1)**.
> - If you need the **absolute highest performance** and data persistence isn't required: **Instance Store**.

---
### EBS Snapshot Management
- Snapshots are **incremental** and stored in S3.
- Use **Data Lifecycle Manager (DLM)** to automate snapshot creation, retention, and deletion.
- **Fast Snapshot Restore (FSR)**: Eliminates the latency of the first access to data when a volume is created from a snapshot.
---
**Practice:** [[EBS - Practice Questions|EBS Practice Questions]]