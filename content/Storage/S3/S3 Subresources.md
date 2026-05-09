---
tags: [aws, sap-c02, s3]
---
# S3 Subresources

S3 Subresources are used to manage bucket and object configurations. They do not exist independently and are always associated with a specific bucket or object.

## Key Bucket Subresources

### 1. Static Website Hosting
- Allows S3 to serve static content (HTML, JS, CSS, images).
- **Endpoint**: `<bucket-name>.s3-website-<region>.amazonaws.com`.
- **Requirements**:
    - Bucket must be public (or use CloudFront OAI).
    - `index.html` and `error.html` documents must be configured.
- > [!important]
  > S3 Website endpoints do **NOT** support HTTPS. Use CloudFront for HTTPS.

### 2. Versioning
- Keeps multiple variants of an object in the same bucket.
- Protects against accidental deletes and overwrites.
- **States**: Unversioned (default), Enabled, or Suspended.
- > [!exam]
  > MFA Delete can be added to versioning to require MFA for permanent deletion of a version or changing versioning state.

### 3. CORS (Cross-Origin Resource Sharing)
- Allows client web applications in one domain to interact with resources in a different domain.
- Required when a website hosted on S3 needs to request assets from another S3 bucket.

### 4. Logging & Monitoring
- **S3 Access Logs**: Detailed records for requests made to the bucket. Delivered to a target bucket.
- **S3 Inventory**: Scheduled reports (CSV, ORC, Parquet) of all objects and metadata.
- **Event Notifications**: Triggers actions (Lambda, SQS, SNS) when events occur (e.g., `s3:ObjectCreated:*`).

### 5. Replication
- **CRR (Cross-Region Replication)**: Compliance, lower latency, account separation.
- **SRR (Same-Region Replication)**: Log aggregation, production-to-test sync.
- **Requirements**: Versioning must be enabled on both source and destination.

---
## Object-Level Subresources

### 1. ACLs (Access Control Lists)
- Legacy method for granting permissions.
- **Bucket ACL**: Mostly used for S3 Log Delivery.
- **Object ACL**: Used when an object owner is different from the bucket owner.

### 2. Object Lock
- Enables WORM (Write Once, Read Many) protection.
- **Governance Mode**: Only users with specific permissions can delete/modify.
- **Compliance Mode**: No one (including root) can delete/modify until the retention period expires.

---
## Comparison Table: S3 Access Control

| Method | Best For | SAP-C02 Tip |
| :--- | :--- | :--- |
| **IAM Policy** | Internal users/roles | Centralized management. |
| **Bucket Policy** | Cross-account access, IP restrictions | Granting access to anyone outside the owner's account. |
| **Object ACL** | Fine-grained object control | Needed for cross-account uploads where uploader owns object. |
| **Access Points** | Large datasets with many teams | Simplifies managing access for complex shared buckets. |

> [!exam] 
> - **Requester Pays**: The requester (instead of the owner) pays for the download/transfer costs. The owner still pays for storage.
> - **S3 Select**: Allows retrieving only a subset of data from an object (CSV, JSON, Parquet) using SQL, reducing latency and cost.

---
**Practice:** [[S3 Subresources - Practice Questions|S3 Subresources Practice Questions]]