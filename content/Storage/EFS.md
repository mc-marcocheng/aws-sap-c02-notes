---
tags: [aws, sap-c02, efs]
---
# Amazon EFS Overview

Amazon Elastic File System (EFS) provides a simple, serverless, set-and-forget elastic file system for use with AWS Cloud services and on-premises resources.

## Storage Classes
- **Standard**: For frequently accessed data. Replicated across multiple Availability Zones.
- **Standard-IA (Infrequent Access)**: Cost-optimized for data not accessed every day.
- **One Zone**: Replicated within a single Availability Zone for 45% lower cost.
- **One Zone-IA**: Infrequent access version of One Zone.

## Performance Modes
- **General Purpose** (Default): Ideal for latency-sensitive use cases (web servers, CMS, home directories).
- **Max I/O**: Scalable to higher levels of aggregate throughput and operations per second. Best for highly parallelized workloads (Big Data, media processing).

## Throughput Modes
- **Bursting Throughput**: Throughput scales with the size of the file system.
- **Provisioned Throughput**: You specify the throughput in MiB/s, independent of the amount of data stored.
- **Elastic Throughput**: (Recommended) Automatically scales throughput based on application activity.

## Key Features
- **Shared Access**: Thousands of EC2 instances can mount an EFS file system concurrently.
- **Regional Resilience**: Data in Standard classes is stored redundantly across multiple AZs.
- **Connectivity**: Accessible from on-premises via Direct Connect or VPN.
- **Lifecycle Management**: Automatically move files to IA storage classes after a period of inactivity (e.g., 30 days).

![[efs-storage-classes.png]]

> [!exam]
> **EFS vs. EBS vs. S3**:
> - Use **EFS** when you need a **distributed, highly available file system** (NFS) shared by multiple instances.
> - Use **EBS** when you need a **local, high-performance block device** for a single instance.
> - Use **S3** when you need **object storage** for massive amounts of unstructured data.

---
### Security
- **IAM**: Control who can manage and mount the file system.
- **Security Groups**: Control network access to the EFS mount targets.
- **Encryption**: Supports encryption at rest (KMS) and in transit (TLS).

---
**Practice:** [[EFS - Practice Questions|EFS Practice Questions]]