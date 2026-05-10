---
tags: [aws, sap-c02, storage]
---
# Storage Gateway Overview

AWS Storage Gateway is a hybrid cloud storage service that gives you on-premises access to virtually unlimited cloud storage. It provides low-latency performance by caching frequently accessed data on-premises while storing the full data set in AWS.

## Gateway Types

| Type | Protocol | Backend Storage | Use Case |
| :--- | :--- | :--- | :--- |
| **S3 File Gateway** | NFS, SMB | Amazon [[S3 Overview|S3]] | Flat files, content repositories, backups to S3. |
| **FSx File Gateway** | SMB | Amazon [[FSx]] for Windows | Native Windows file systems (NTLM, ACLs). |
| **Volume Gateway (Cached)**| iSCSI | S3 / [[EBS Overview|EBS]] Snapshots | Primary data in S3, cache frequently used data locally. |
| **Volume Gateway (Stored)**| iSCSI | S3 / EBS Snapshots | Primary data locally, asynchronous backup to S3. |
| **Tape Gateway (VTL)** | iSCSI | S3 / Glacier | Replace physical tapes with virtual tapes. |

---
## 1. S3 File Gateway
- Provides a file interface (NFS or SMB) into S3.
- Objects in S3 are accessible directly via S3 API or through the gateway.
- Supports POSIX-style metadata (ownership, permissions, timestamps) stored as S3 object metadata.
- **Cache**: Low-latency access via local caching.

> [!exam]
> S3 File Gateway is the only gateway where you can see the files as individual objects in S3. Volume and Tape gateways store data in a managed format that cannot be directly read as S3 objects.

## 2. Volume Gateway
Provides cloud-backed iSCSI block storage volumes.

- **Cached Volumes**: Data is stored in S3. Only frequently accessed data is kept in the local cache. Ideal for low-cost primary storage.
- **Stored Volumes**: All data is stored locally. The gateway asynchronously takes snapshots and stores them in S3 as EBS Snapshots. Ideal for low-latency local access with offsite backup.

> [!important]
> For Volume Gateway, snapshots are stored as **EBS Snapshots** in S3, allowing you to restore them as EBS volumes or Gateway volumes.

## 3. Tape Gateway (VTL)
- Replaces physical tape infrastructure.
- Integrates with existing backup software (Veritas, Veeam, etc.) via iSCSI.
- **Virtual Tape Library (VTL)**: Backed by S3.
- **Virtual Tape Shelf (VTS)**: Backed by S3 Glacier or Deep Archive for long-term retention.

---
## Key Architecture & Trade-offs

- **Security**: Data is encrypted in transit (SSL) and at rest (SSE-S3 or SSE-KMS).
- **Deployment**: Can be deployed on-premises as a VM (VMware, Hyper-V, KVM) or in AWS as an EC2 instance.
- **Performance**: Bottlenecked by network bandwidth and local disk I/O for caching.

> [!exam] Trade-off: Stored vs. Cached Volumes
> - **RTO/RPO**: Stored volumes provide better RTO for local access since the primary data is on-prem.
> - **Cost**: Cached volumes are more cost-effective as they leverage S3 for primary storage.
> - **Scaling**: Cached volumes scale more easily as you don't need to provision all storage on-premises.

> [!info] 
> For SAP-C02, focus on when to use File Gateway (NFS/SMB to S3) vs. FSx File Gateway (Windows File Server integration) vs. [[DataSync]] (for one-time or scheduled migrations).

## Related Services
- [[_Storage Index|Storage Index]]
- [[S3 Overview|S3]]
- [[FSx]]
- [[EBS Overview|EBS]]
- [[DataSync]]

---
**Practice:** [[Storage Gateway - Practice Questions|Storage Gateway Practice Questions]]