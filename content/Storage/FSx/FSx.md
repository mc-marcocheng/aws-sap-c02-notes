---
tags: [aws, sap-c02, storage, fsx]
---
# Amazon FSx

Amazon FSx provides fully managed third-party file systems with the native compatibility and feature sets of workloads. It eliminates the administrative overhead of managing hardware, provisioning capacity, and taking backups.

## 1. Amazon FSx for Windows File Server

A fully managed native Microsoft Windows file system with full support for the SMB protocol, Windows NTFS, and Microsoft Active Directory (AD) integration.

- **Protocols Supported**: SMB.
- **Features**:
  - **Native Windows Features**: Full support for NTFS, Windows ACLs, DFS Namespaces (DFS-N) to scale-out storage, and DFS Replication (DFS-R).
  - **Active Directory Integration**: Integrates seamlessly with AWS Managed Microsoft AD or on-premises AD for access control.
  - **Multi-AZ**: Supports Multi-AZ and Single-AZ deployments.
  - **Cost Optimization**: Reduce storage costs by turning on data deduplication. Choose between SSD and HDD storage based on performance needs.
  - **Migration**: Use Windows RoboCopy to migrate data + metadata (ACLs, ownership).
- **Use Cases**: Migrating Windows file shares, SQL Server High Availability (FCI) deployments, home directories, ERP workloads, and IIS web serving.

## 2. Amazon FSx for Lustre

A high-performance file system optimized for fast processing of workloads. Lustre is a popular open-source parallel file system. *(Note: See [[FSx for Lustre]] for deep dive)*.

- **Protocols Supported**: POSIX-compliant interface.
- **Features**:
  - **Performance**: Provides sub-millisecond access, reading/writing data at hundreds of gigabytes per second and millions of IOPS.
  - **S3 Integration**: Managed via **Data Repository Associations (DRA)**, FSx transparently presents S3 objects as files and allows you to write results back to S3. Uses FSx as "hot" storage and S3 as "cold".
  - **Deployment Types**: Supports Scratch (temporary, no replication) and Persistent (long-term, replicated).
- **Use Cases**: High-performance computing (HPC), machine learning, video processing, financial modeling.

## 3. Amazon FSx for NetApp ONTAP

A highly reliable, scalable, and feature-rich file storage solution built on NetApp's popular ONTAP file system.

- **Protocols Supported**: NFS, SMB, and iSCSI.
- **Features**:
  - **Multi-Protocol Access**: Access the same data via SMB (Windows) and NFS (Linux) simultaneously.
  - **Storage Efficiencies**: Native deduplication, compression, and compaction to reduce storage costs.
  - **Snapshots & Clones**: Instantaneous, space-efficient snapshots and FlexClone volumes.
  - **SnapMirror & SnapVault**: Native replication to/from on-premises ONTAP or other FSx for ONTAP file systems for disaster recovery and backup.
  - **Tiering**: Automatically tier infrequently accessed data to a lower-cost capacity pool (Auto, Snapshot-only, All, None).
  - **Compliance**: Supports SnapLock for WORM compliance.
- **Use Cases**: Migrating existing NetApp ONTAP environments, multi-protocol file sharing, EDA workloads, and disaster recovery for on-premises NetApp.

## 4. Amazon FSx for OpenZFS

A fully managed service that provides high-performance, cost-effective NFS storage built on the OpenZFS file system (powered by AWS Graviton processors).

- **Protocols Supported**: NFS (v3, v4, v4.1, v4.2). Accessible from Linux, Windows, and macOS.
- **Features**:
  - **Performance**: Up to 1 million IOPS and 12 GB/s throughput with latencies in hundreds of microseconds.
  - **Snapshots & Clones**: Instant point-in-time snapshots and data cloning.
  - **ZFS Efficiencies**: Native Z-Standard compression.
  - **Deployment**: Now supports Multi-AZ deployments for high availability.
- **Use Cases**: High-performance NFS workloads, Machine Learning, EDA, and migrating on-premises ZFS without modifying application code.

---

## SAP-C02 Strategic Scenarios

> [!exam] High-Speed S3 Processing
> If a scenario involves compute clusters processing massive amounts of data stored in S3 and requiring sub-millisecond latencies (HPC/Machine Learning), **FSx for Lustre linked to S3 (via DRA)** is the correct architectural pattern.

> [!exam] Multi-Protocol Requirements
> If a workload requires both Linux servers (using NFS) and Windows servers (using SMB) to read and write to the exact same dataset concurrently, **FSx for ONTAP** is the only FSx service that supports simultaneous multi-protocol access.

> [!exam] Migration Strategies
> - **On-Premises NetApp**: Use **FSx for ONTAP** with SnapMirror for low-RPO disaster recovery or migration.
> - **Legacy Windows/NTFS**: Use **FSx for Windows File Server**. Utilize **DFS Namespaces (DFS-N)** to group file shares into a common folder structure and scale-out throughput. Use **RoboCopy** to migrate ACLs.
> - **On-Premises ZFS**: Use **FSx for OpenZFS** to lift-and-shift without changing code.

## Related Services
- [[_Storage Index|Storage Index]]
- [[EFS]]
- [[EBS Overview|EBS]]
- [[S3 Overview|S3]]

---
**Practice:** [[FSx - Practice Questions|Amazon FSx Practice Questions]]