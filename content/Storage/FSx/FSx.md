---
tags: [aws, sap-c02, storage, fsx]
---
# Amazon FSx

Amazon FSx provides fully managed third-party file systems with the native compatibility and feature sets of workloads. It eliminates the administrative overhead of managing hardware, provisioning capacity, and taking backups.

## Amazon FSx for NetApp ONTAP

Amazon FSx for NetApp ONTAP is a fully managed service that provides highly reliable, scalable, high-performing, and feature-rich file storage built on NetApp's popular ONTAP file system.

- **Protocols Supported**: NFS, SMB, and iSCSI.
- **Features**: 
  - **Multi-Protocol Access**: Access the same data via SMB (Windows) and NFS (Linux) simultaneously.
  - **Storage Efficiencies**: Native deduplication, compression, and compaction to reduce storage costs.
  - **Snapshots & Clones**: Instantaneous, space-efficient snapshots and FlexClone volumes.
  - **SnapMirror & SnapVault**: Native replication to/from on-premises ONTAP or other FSx for ONTAP file systems for disaster recovery and backup.
  - **Tiering**: Automatically tier infrequently accessed data to a lower-cost capacity pool (similar to [[S3 Overview|S3]]).
- **Use Cases**: Migrating existing NetApp ONTAP environments, multi-protocol file sharing, EDA workloads, and disaster recovery for on-premises NetApp.

## Amazon FSx for Windows File Server

Amazon FSx for Windows File Server provides a fully managed, highly reliable, and scalable file storage that is accessible over the industry-standard Server Message Block (SMB) protocol. It is built on Windows Server.

- **Protocols Supported**: SMB.
- **Features**:
  - **Native Windows Features**: Full support for NTFS features, Windows ACLs, DFS Namespaces (DFS-N), and DFS Replication (DFS-R).
  - **Active Directory Integration**: Integrates seamlessly with AWS Managed Microsoft AD or on-premises AD for access control.
  - **Multi-AZ**: Supports Multi-AZ deployments for high availability.
  - **Storage Types**: SSD for latency-sensitive workloads, HDD for throughput-intensive or cost-sensitive workloads.
  - **Data Deduplication**: Reduces storage costs for typical file shares.
- **Use Cases**: Migrating Windows file shares, home directories, ERP workloads, and IIS web serving.

## Comparison: ONTAP vs Windows File Server

| Feature | FSx for ONTAP | FSx for Windows File Server |
| :--- | :--- | :--- |
| **Protocols** | NFS, SMB, iSCSI | SMB only |
| **Primary OS Target** | Linux, Windows, macOS | Windows (Linux via SMB possible but less native) |
| **On-Prem Replication** | SnapMirror | DFS-R (Distributed File System Replication) |
| **Block Storage** | Yes (iSCSI LUNs) | No |
| **Storage Tiering** | Yes (Capacity Pool) | No (Choose SSD or HDD at creation) |

> [!info] High Availability
> Both FSx for ONTAP and FSx for Windows File Server support Multi-AZ deployments, ensuring data availability even if an entire Availability Zone goes offline.

> [!exam] Migration Strategy
> If a question mentions an on-premises NetApp appliance that needs to be migrated to AWS while maintaining existing replication workflows, **FSx for ONTAP** with SnapMirror is the definitive answer.

> [!important] Multi-Protocol Requirements
> If a workload requires both Linux servers (using NFS) and Windows servers (using SMB) to read and write to the exact same dataset concurrently, **FSx for ONTAP** is the only FSx service that supports simultaneous multi-protocol access.

## Strategic Scenarios (SAP-C02)

### Scenario 1: On-Premises NetApp Disaster Recovery
**Requirement**: A company wants to set up a disaster recovery site in AWS with an RPO of less than 15 minutes. The solution must minimize administrative overhead and utilize existing NetApp skill sets.
**Solution**: Deploy Amazon FSx for NetApp ONTAP in the target AWS Region. Configure NetApp SnapMirror to replicate data asynchronously from the on-premises NetApp cluster to FSx for ONTAP. This provides a native, low-RPO disaster recovery solution without managing underlying infrastructure.

### Scenario 2: Legacy Windows Application Migration
**Requirement**: A legacy Windows application is being migrated to AWS. It relies heavily on strict NTFS permissions, SMB file shares, and DFS Namespaces. The application needs high availability across multiple AZs.
**Solution**: Deploy Amazon FSx for Windows File Server in a Multi-AZ configuration. Join the file system to the company's AWS Managed Microsoft AD. Use DFS-N to provide a consistent namespace for the application.

## Related Services
- [[_Storage Index|Storage Index]]
- [[EFS]]
- [[EBS Overview|EBS]]
- [[S3 Overview|S3]]

---
**Practice:** [[FSx - Practice Questions|Amazon FSx Practice Questions]]