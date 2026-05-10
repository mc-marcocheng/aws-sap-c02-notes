---
tags: [aws, sap-c02, storage]
---
# S3 vs. EBS vs. EFS: Architectural Comparison

Choosing the right storage service is fundamental to AWS architecture. Each service is optimized for different performance, durability, and access patterns.

## Comparison Table

| Feature | Amazon S3 | Amazon EBS | Amazon EFS |
| --- | --- | --- | --- |
| **Type** | Object Storage | Block Storage | File Storage (NFS) |
| **Durability** | 11 nines (Regional) | 99.8% - 99.9% (Zonal) | 11 nines (Regional) |
| **Performance** | High throughput, higher latency | Ultra-low latency | Scalable throughput |
| **Max Size** | Unlimited | 16 TiB per volume | Petabytes |
| **Access** | Web/API (Internet/VPC) | Single EC2 (Zonal) | Multiple EC2 (Regional) |
| **Use Case** | Static assets, backups, data lake | OS volumes, Databases | Shared files, Home dirs |

![[s3-vs-ebs-vs-efs.png]]

## Amazon S3 (Simple Storage Service)
- **Best For**: Unstructured data, static assets, and long-term backups.
- **Key Advantage**: Virtually unlimited scale and extremely high durability.
- **Limitation**: Not a file system; cannot be "mounted" like a drive for high-frequency random I/O (use EBS for that).

## Amazon EBS (Elastic Block Store)
- **Best For**: Operating systems and databases that require low-latency access to raw blocks.
- **Key Advantage**: Dedicated, consistent performance (especially Provisioned IOPS).
- **Limitation**: Tied to a specific Availability Zone. Usually attached to one instance at a time (except for Multi-Attach).

## Amazon EFS (Elastic File System)
- **Best For**: Content management systems, dev tools, and shared data that needs to be accessed by hundreds of instances simultaneously.
- **Key Advantage**: Fully managed, scales automatically, and provides regional resilience.
- **Limitation**: Linux-based (NFS) only; not supported natively by Windows (use [[FSx]] for Windows).

> [!exam]
> **SAP-C02 Selection Logic**:
> - If you need **shared storage** for Linux instances across multiple AZs: **EFS**.
> - If you need **shared storage** for Windows instances: **FSx for Windows**.
> - If you need **high-performance** for a database on a single instance: **EBS**.
> - If you need to **store static web assets** or perform **big data analytics**: **S3**.

## Related Services
- [[_Storage Index|Storage Index]]
- [[S3 Overview|S3]]
- [[EBS Overview|EBS]]
- [[EFS]]

---
**Practice:** [[S3 vs EBS vs EFS - Practice Questions|S3 vs EBS vs EFS Practice Questions]]