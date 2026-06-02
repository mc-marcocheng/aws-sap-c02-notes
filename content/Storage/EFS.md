---
tags: [aws, sap-c02, storage, efs]
---
# Amazon EFS Overview

Amazon Elastic File System (EFS) provides a simple, serverless, set-and-forget elastic file system for use with AWS Cloud services and on-premises resources. It supports the NFSv4 protocol and can be mounted onto Linux and MacOS instances (Windows is **not** supported).

## Key Capabilities & Integrations
- **Shared Access**: Thousands of [[EC2 Overview|EC2]] instances can mount concurrently. Also supports mounting on **ECS tasks, EKS pods, and Lambda functions**.
- **Regional Resilience**: Data in Standard classes is durably stored and redundantly replicated across multiple AZs.
- **Data Consistency**: Provides open-after-close consistency semantics expected from NFS. Synchronous data access and non-appending writes have read-after-write consistency.
- **DataSync Integration**: Use **AWS DataSync** to securely copy files between on-premises and EFS, or between EFS file systems (even across AWS Regions and different accounts).
- **AWS Backup**: Natively integrated with **AWS Backup** for scheduled automatic incremental backups. (File systems created in the console are automatically backed up daily with a 35-day retention).

## Storage Classes & Lifecycle Management
- **Standard**: For frequently accessed data. Replicated across multiple Availability Zones.
- **Standard-IA (Infrequent Access)**: Cost-optimized for data not accessed every day.
- **Archive**: Optimized for long-lived data accessed a few times a year or less. Up to 50% lower cost than IA.
- **One Zone / One Zone-IA**: Replicated within a single AZ for lower cost, at the expense of lower availability/durability.
- **Lifecycle Management**: Automatically transitions files from Standard to IA, and from IA to Archive based on set inactivity periods (e.g., 7, 14, 30, 60, or 90 days).

## Performance Modes
- **General Purpose** (Default): Ideal for latency-sensitive use cases (web servers, CMS). **AWS recommends General Purpose with Elastic throughput** for almost all new workloads.
- **Max I/O**: Scalable to higher levels of aggregate throughput. Best for highly parallelized workloads (big data analysis, media processing), but with slightly higher latencies for file operations.

## Throughput Modes
- **Elastic Throughput**: (Recommended/Default) Automatically scales throughput based on activity. You pay only for what you use. Ideal for spiky or unpredictable workloads.
- **Provisioned Throughput**: Specified throughput (MiB/s) independent of the amount of data stored.
- **Bursting Throughput**: (Legacy) Throughput scales with the size of the file system.

## SAP-C02 Strategic Scenarios & DR
- **EFS Replication**: Built-in cross-region or same-region replication for Disaster Recovery.
- **Replication Failback**: EFS supports replication failback, allowing you to synchronize changes from a destination file system back to the source, simplifying DR testing and failover/failback workflows.

![[efs-storage-classes.png]]

> [!exam]
> **EFS vs. EBS vs. S3**:
> - Use **EFS** when you need a **distributed, highly available file system** (NFS) shared by multiple EC2/ECS/Lambda instances with strong open-after-close consistency.
> - Use **[[EBS Overview|EBS]]** when you need a **local, high-performance block device** for a single instance.
> - Use **[[S3 Overview|S3]]** when you need **object storage** for massive amounts of unstructured data over HTTP/HTTPS.

---
### Security & Management
- **IAM Authorization**: Manage NFS access using IAM roles to identify NFS clients and IAM policies to manage client-specific permissions.
- **Access Points**: Enforce an operating system POSIX user/group identity and/or a specific root directory for every file system request made through the access point.
- **Security Groups**: Control network access to the EFS mount targets (Port 2049).
- **Encryption**: Supports encryption at rest ([[KMS]]) and in transit (TLS).
- **Monitoring**: Use the `PercentIOLimit` metric in CloudWatch to ensure you aren't hitting IOPS limits (up to 250,000 read IOPS and 50,000 write IOPS per file system).

## Related Services
- [[_Storage Index|Storage Index]]
- [[EBS Overview|EBS]]
- [[S3 Overview|S3]]
- [[Direct Connect Overview|Direct Connect]]
- [[KMS]]

---
**Practice:** [[EFS - Practice Questions|EFS Practice Questions]]
