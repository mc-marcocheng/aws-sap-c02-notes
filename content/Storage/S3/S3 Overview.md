---
tags: ['aws', 'sap-c02', 's3']
---
# S3 Overview

> [!info] Definition
> **Amazon Simple Storage Service (S3)** is an object storage service offering industry-leading scalability, data availability, security, and performance. It is designed for 99.999999999% (11 9's) of durability.

## Core Concepts

### Buckets
- **Container**: A bucket is a container for objects.
- **Global Namespace**: Bucket names must be **globally unique** across all AWS accounts.
- **Regional Service**: While S3 is a global service, each bucket is created in a specific AWS Region.
- **Limits**: Default limit is 100 buckets per account (expandable to 1,000).

### Objects
- **Key-Value Store**: Objects are identified by a **Key** (the name) and a **Version ID**.
- **Metadata**: Set of name-value pairs that describe the object (e.g., Content-Type).
- **Size**: Individual objects can range from 0 bytes to **5 TB**.
- **Single Upload Limit**: A single PUT operation can upload up to **5 GB**. For larger objects, you **MUST** use Multipart Upload.

---
## Operations & Features

### Multipart Upload
- **Recommendation**: Use for objects > 100 MB; **required** for objects > 5 GB.
- **Benefits**:
    - **Improved Throughput**: Parallelize uploads.
    - **Fault Tolerance**: Restart only failed parts.
    - **Pause/Resume**: Upload parts over time.
- **Parts**: Supports 1 to 10,000 parts; each part from 5 MB to 5 GB (last part can be < 5 MB).

### S3 Transfer Acceleration
- Uses **CloudFront's** globally distributed edge locations to accelerate data uploads to S3 over an optimized network path.
- Ideal for customers transferring large objects across continents.

### Pre-Signed URLs
- Allows users to download or upload objects without AWS credentials.
- The URL is valid only for a specified duration.
- **Security**: The pre-signed URL inherits the permissions of the user who generated it.

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

### Request Styles
- **Virtual Hosted-Style (Recommended)**: `https://bucket-name.s3.region-code.amazonaws.com/key-name`
- **Path-Style (Deprecated)**: `https://s3.region-code.amazonaws.com/bucket-name/key-name`

---
## S3 Pricing

- **Storage**: Charged per GB/month based on the storage class.
- **Requests**: Charged per 1,000 requests (PUT, COPY, POST, LIST, GET, etc.).
- **Data Transfer Out**: Charged per GB (Data transfer *in* is free).
- **Management & Replication**: Charges for features like Inventory, Analytics, and Object Tagging.

---
## SAP-C02 Exam Strategy

> [!exam]
> - **Durability vs Availability**: S3 is designed for 11 9's durability. Availability varies by storage class (e.g., S3 Standard is 99.99%).
> - **Consistency**: S3 provides **strong read-after-write consistency** for all applications.
> - **Security**: Use **Bucket Policies** for cross-account access and **IAM Policies** for user-level access. Use **S3 Block Public Access** at the account level for maximum security.
> - **Large Scale Migration**: For petabytes of data, consider **AWS Snowball** or **AWS DataSync**.

---
## Comparison: Single PUT vs. Multipart Upload

| Feature | Single PUT | Multipart Upload |
| :--- | :--- | :--- |
| **Max Object Size** | 5 GB | 5 TB |
| **Max Part Size** | N/A (Full object) | 5 GB |
| **Parallelism** | No | **Yes** |
| **Use Case** | Small objects (< 100 MB) | Large objects (> 100 MB) or unstable networks |

---
**References:**
- [[S3 Storage Classes]]
- [[S3 Data Protection]]
- [[S3 Lifecycle Management]]
- [[S3 Permissions]]
- [[S3 Encryption]]
- [[S3 vs EBS vs EFS]]

---
**Practice:** [[S3 - Practice Questions|S3 Practice Questions]]