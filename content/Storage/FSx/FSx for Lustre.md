---
tags: [aws, sap-c02, fsx]
---
# FSx for Lustre

Amazon FSx for Lustre is a high-performance file system optimized for workloads such as machine learning, high-performance computing (HPC), video processing, and financial modeling.

## 1. Key Characteristics
- **Performance**: Sub-millisecond latencies, hundreds of GB/s of throughput, and millions of IOPS.
- **Protocol**: Lustre (Native Linux client).
- **Integration**: Deeply integrated with **Amazon S3**.

## 2. Deployment Options

### Scratch File Systems
- **Best For**: Temporary storage and short-term processing.
- **Durability**: Data is **not replicated**. If a file server fails, data is lost.
- **Burst**: Supports high burst throughput (up to 6x baseline).

### Persistent File Systems
- **Best For**: Long-term storage and workloads that run indefinitely.
- **Durability**: Data is **automatically replicated** within the same Availability Zone.
- **High Availability**: Infrastructure components are replaced automatically upon failure.

---
## 3. S3 Integration (Data Repository)
FSx for Lustre can be linked to an S3 bucket as a data repository.

- **Lazy Loading**: When linked, S3 objects appear as files but are only downloaded (hydrated) when first accessed.
- **Exporting**: Changes can be exported back to S3 using "Data Repository Tasks."
- **Bi-directional Sync**: Supports synchronizing metadata and data between the file system and S3.

> [!exam]
> FSx for Lustre is frequently the correct answer for **HPC** scenarios where you need to process data stored in **S3** at extremely high speeds.

---
## 4. Performance Scaling
Throughput is determined by the storage capacity and the deployment type.
- **Scratch**: 200 MiB/s per TiB.
- **Persistent**: 50, 100, or 200 MiB/s per TiB.

## SAP-C02 Architectural Comparison

| Requirement | Recommended Service |
| :--- | :--- |
| **Shared Linux File System (General)** | Amazon EFS |
| **Windows File System (SMB)** | Amazon FSx for Windows |
| **Extreme Performance (Lustre)** | Amazon FSx for Lustre |
| **High Performance ONTAP** | Amazon FSx for NetApp ONTAP |

> [!important]
> FSx for Lustre is **Single-AZ** for its storage. For multi-AZ high availability of the data itself (not just the server), you would typically use **NetApp ONTAP** or **FSx for Windows File Server**.

---
**Practice:** [[FSx for Lustre - Practice Questions|FSx for Lustre Practice Questions]]