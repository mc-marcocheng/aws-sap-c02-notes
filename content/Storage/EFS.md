---
tags: [aws, sap-c02, storage, efs]
---
# Amazon EFS Overview

Amazon Elastic File System (EFS) provides a simple, serverless, set-and-forget elastic file system for use with AWS Cloud services and on-premises resources.

## Storage Classes
- **Standard**: For frequently accessed data. Replicated across multiple Availability Zones.
- **Standard-IA (Infrequent Access)**: Cost-optimized for data not accessed every day.
- **One Zone**: Replicated within a single Availability Zone for 45% lower cost.
- **One Zone-IA**: Infrequent access version of One Zone.

## Performance Modes
- **General Purpose** (Default): Ideal for latency-sensitive use cases (web servers, CMS). **AWS recommends General Purpose with Elastic throughput** for almost all new workloads.
- **Max I/O**: Scalable to higher levels of aggregate throughput. Best for highly parallelized workloads, but General Purpose is now the preferred starting point.

## Throughput Modes
- **Bursting Throughput**: Throughput scales with the size of the file system.
- **Provisioned Throughput**: Specified MiB/s, independent of data size.
- **Elastic Throughput**: (Recommended) Automatically scales throughput based on activity.

## Key Features
- **Shared Access**: Thousands of [[EC2 Overview|EC2]] instances can mount concurrently.
- **Regional Resilience**: Data in Standard classes is stored redundantly across multiple AZs.
- **EFS Replication**: Built-in cross-region or same-region replication for DR (RPO ~15 minutes).
- **Connectivity**: Accessible from on-premises via [[Direct Connect Overview|Direct Connect]] or [[VPN]].
- **Lifecycle Management**: Automatically move files to IA storage classes after a period of inactivity.

![[efs-storage-classes.png]]

> [!exam]
> **EFS vs. EBS vs. S3**:
> - Use **EFS** when you need a **distributed, highly available file system** (NFS) shared by multiple instances.
> - Use **[[EBS Overview|EBS]]** when you need a **local, high-performance block device** for a single instance.
> - Use **[[S3 Overview|S3]]** when you need **object storage** for massive amounts of unstructured data.

---
### Security
- **IAM Authorization**: Control mount, read, and write permissions via IAM policies.
- **Access Points**: Enforce a POSIX user/group identity and/or a specific root directory for applications.
- **Security Groups**: Control network access to the EFS mount targets (Port 2049).
- **Encryption**: Supports encryption at rest ([[KMS]]) and in transit (TLS).

## Related Services
- [[_Storage Index|Storage Index]]
- [[EBS Overview|EBS]]
- [[S3 Overview|S3]]
- [[Direct Connect Overview|Direct Connect]]
- [[KMS]]

---
**Practice:** [[EFS - Practice Questions|EFS Practice Questions]]