---
tags: [aws, sap-c02, storage, s3]
---
# S3 Overview

> [!info] Definition
> **Amazon Simple Storage Service (S3)** is an object storage service offering industry-leading scalability, data availability, security, and performance. It is designed for 99.999999999% (11 9's) of durability.

## Core Concepts

### Buckets
- **Container**: A bucket is a container for objects.
- **Global Namespace**: Bucket names must be **globally unique** across all AWS accounts.
- **Regional Service**: While S3 is a global service, each bucket is created in a specific AWS Region.
- **Directory Buckets**: A specialized bucket type mapped to a single Availability Zone, used exclusively by the **S3 Express One Zone** storage class for single-digit millisecond latency.
- **Limits**: Default limit is 10,000 buckets per account.

### Objects
- **Key-Value Store**: Objects are identified by a **Key** (the name) and a **Version ID**.
- **Metadata**: Set of name-value pairs that describe the object (e.g., Content-Type, custom tags). S3 automatically captures and stores metadata in fully managed Apache Iceberg tables (metadata tables) for efficient querying.
- **Size**: Individual objects can range from 0 bytes to **50 TB**.
- **Single Upload Limit**: A single PUT operation can upload up to **5 GB**. For larger objects, you **MUST** use Multipart Upload.

### Strong Consistency
- **Strong Read-After-Write Consistency**: S3 provides strong consistency for **all operations** (PUT, DELETE, LIST) for both new objects and overwrites. Any successful write is immediately visible to all subsequent requests.
- **Exceptions (Eventual Consistency)**: Changes to bucket-level configurations (like Versioning) and Bucket Listing (after a bucket is deleted, it might still briefly appear) are eventually consistent.

---
## Advanced Features & Integrations

### S3 Tables (Apache Iceberg Integration)
- **Function**: S3 Tables provides purpose-built "Table Buckets" designed specifically to store tabular data (e.g., transactions, sensor data) in the **Apache Iceberg format**.
- **Benefits**: Optimizes analytics workloads with increased TPS and query throughput. S3 automatically performs maintenance (compaction, unreferenced file removal).
- **Integration**: Can be seamlessly queried using Amazon Athena, EMR, Redshift, and Spark.

### Amazon S3 on Outposts
- **Function**: Uses S3 APIs to deliver object storage to an on-premises AWS Outposts environment.
- **Security**: Data is encrypted with SSE-C and SSE-S3 and redundantly stored across Outposts servers.
- **Data Transfer**: Automate data transfer between Outposts and AWS Regions using **AWS DataSync**.

### S3 Storage Browser
- An open-source component for integrating a graphical interface into web applications (like React), enabling authorized end-users to interact with S3 data directly (LIST, GET, PUT, COPY, DELETE).

### Multipart Upload
- **Recommendation**: Use for objects > 100 MB; **required** for objects > 5 GB.
- **Benefits**: Improved throughput, fault tolerance, and pause/resume capabilities.

### S3 Batch Operations
- Perform large-scale operations (copy, tag, restore, lambda) on billions of objects.
- Works with **S3 Inventory** to provide the list of objects.

---
## Performance & Scaling

> [!important] Request Rate Limits
> S3 scales automatically to high request rates. You can achieve:
> - **3,500 PUT/COPY/POST/DELETE** requests per second per prefix.
> - **5,500 GET/HEAD** requests per second per prefix.
>
> There is no limit to the number of prefixes in a bucket. To scale performance, use a diverse prefix naming strategy (e.g., folder-like structures).

---
## SAP-C02 Exam Strategy

> [!exam]
> - **Analytics & Data Lakes**: If a scenario requires querying massive metadata or transactional data directly on S3 with high performance, look for **S3 Tables (Apache Iceberg)**.
> - **Hybrid Object Storage**: For on-premises object storage using S3 APIs, choose **S3 on Outposts** and sync to the cloud via **DataSync**.
> - **Consistency**: Remember that S3 data is strongly consistent, but *bucket configurations* are eventually consistent.

---
## Comparison: Single PUT vs. Multipart Upload

| Feature | Single PUT | Multipart Upload |
| :--- | :--- | :--- |
| **Max Object Size** | 5 GB | 50 TB |
| **Max Part Size** | N/A (Full object) | 5 GB |
| **Parallelism** | No | **Yes** |
| **Use Case** | Small objects (< 100 MB) | Large objects (> 100 MB) or unstable networks |

---
## Related Services
- [[_Storage Index|Storage Index]]
- [[S3 Storage Classes]]
- [[S3 Data Protection]]
- [[S3 Lifecycle Management]]
- [[S3 Permissions]]
- [[S3 Encryption]]
- [[S3 vs EBS vs EFS]]

---
**Practice:** [[S3 - Practice Questions|S3 Practice Questions]]
