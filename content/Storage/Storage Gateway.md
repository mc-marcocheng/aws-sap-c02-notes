---
tags: [aws, sap-c02, storage]
---
# Storage Gateway Overview

AWS Storage Gateway is a hybrid cloud storage service that gives you on-premises access to virtually unlimited cloud storage. It provides low-latency performance by caching frequently accessed data on-premises while storing the full data set in AWS.

## Gateway Types

| Type | Protocol | Backend Storage | Use Case |
| :--- | :--- | :--- | :--- |
| **S3 File Gateway** | NFS, SMB | Amazon [[S3 Overview|S3]] | Flat files, content repositories, backups to S3. |
| **FSx File Gateway** | SMB | Amazon [[FSx]] for Windows | Native Windows file systems. *(Note: No longer available to new customers as of Oct 2024)* |
| **Volume Gateway (Cached)**| iSCSI | S3 / [[EBS Overview|EBS]] Snapshots | Primary data in S3, cache frequently used data locally. |
| **Volume Gateway (Stored)**| iSCSI | S3 / EBS Snapshots | Primary data locally, asynchronous backup to S3. |
| **Tape Gateway (VTL)** | iSCSI | S3 / Glacier | Replace physical tapes with virtual tapes. |

---
## 1. S3 File Gateway
- Provides a file interface (NFS or SMB) into S3.
- Objects in S3 are accessible directly via S3 API or through the gateway.
- Supports POSIX-style metadata (ownership, permissions, timestamps) stored as S3 object metadata.
- **Cache**: Low-latency access via local caching (supports up to 64TB of local cache data).
- **Compliance**: Now supports **Amazon S3 Object Lock**, enabling WORM (write-once-read-many) file-based systems. Edits/deletes from the gateway are stored as *new versions* without overwriting locked previous versions.

> [!exam]
> S3 File Gateway is the only gateway where you can see the files as individual objects in S3. Volume and Tape gateways store data in a managed format that cannot be directly read as S3 objects.

## 2. Volume Gateway
Provides cloud-backed iSCSI block storage volumes.

- **Cached Volumes**: Data is stored in S3. Only frequently accessed data is kept in the local cache. Volumes can range from 1 GiB to 32 TiB (up to 32 volumes per gateway).
- **Stored Volumes**: All data is stored locally. The gateway asynchronously takes snapshots and stores them in S3. Volumes can range from 1 GiB to 16 TiB (up to 32 volumes, max 512 TiB per gateway).

> [!important]
> For Volume Gateway, snapshots are stored as **EBS Snapshots** in S3, allowing you to restore them as EBS volumes or Gateway volumes. Volume Gateway customers can detach and attach volumes between gateways to migrate/refresh hardware.

## 3. Tape Gateway (VTL)
- Replaces physical tape infrastructure.
- Integrates with existing backup software (Veritas, Veeam, etc.) via iSCSI.
- **Virtual Tape Library (VTL)**: Backed by S3.
- **Virtual Tape Shelf (VTS)**: Backed by S3 Glacier or Deep Archive for long-term retention. 
- **Compliance**: Supports **Tape Retention Lock** and WORM compliance on virtual tapes to prevent malicious or accidental deletion.
- **Limits**: Tapes can be sized between 100 GiB and 15 TiB. Supports up to 1,500 tapes per gateway (1 PiB total capacity).

## Deployment Options
- **Virtual Appliance**: Deployed as a VM on VMware ESXi, Microsoft Hyper-V, or Linux KVM.
- **EC2 Instance**: Deployed within a VPC for cloud-to-cloud scenarios.
- **Hardware Appliance**: A physical, dedicated server device for on-premises environments where virtualization is not available.

---
## Key Architecture & Trade-offs

> [!exam] Key Decision Matrix
> - **Ongoing Hybrid Access**: Use **File Gateway**.
> - **Data Migration (One-time or Periodic)**: Use **[[DataSync]]**.
> - **Cloud-Backed Backup for Block Storage**: Use **Volume Gateway**.

- **Security**: Data is encrypted in transit (SSL) and at rest (SSE-S3 or SSE-KMS). Uses CHAP authentication for iSCSI connections.

> [!exam] Trade-off: Stored vs. Cached Volumes
> - **RTO/RPO**: Stored volumes provide better RTO for local access since the primary data is on-prem.
> - **Cost**: Cached volumes are more cost-effective as they leverage S3 for primary storage.
> - **Scaling**: Cached volumes scale more easily as you don't need to provision all storage on-premises.

> [!info]
> For SAP-C02, focus on when to use File Gateway (NFS/SMB to S3) vs. [[DataSync]] (for one-time or scheduled migrations).

## Related Services
- [[_Storage Index|Storage Index]]
- [[S3 Overview|S3]]
- [[FSx]]
- [[EBS Overview|EBS]]
- [[DataSync]]

---
**Practice:** [[Storage Gateway - Practice Questions|Storage Gateway Practice Questions]]
