---
tags: [aws, sap-c02, s3]
---
# S3 Security

S3 security is a shared responsibility. AWS manages the infrastructure, while you manage access, encryption, and data protection.

## 1. Access Control

### IAM Policies & Bucket Policies
- **IAM Policies**: Attached to users/roles. Best for internal access.
- **Bucket Policies**: Attached to the bucket. Best for cross-account access, public access, or enforcing encryption (e.g., `Deny` if `s3:x-amz-server-side-encryption` is null).

### S3 Block Public Access
- Centralized control to prevent public access at the account or bucket level.
- Overrides all other policies and ACLs.

### S3 Access Points
- Named network endpoints for buckets.
- Each access point has its own policy, simplifying access for large datasets used by multiple applications/teams.

---
## 2. Encryption

### Data at Rest
- **SSE-S3**: S3 manages keys (AES-256). No extra charge.
- **SSE-KMS**: Keys managed in AWS KMS. Provides audit trails and key rotation.
- **SSE-C**: Customer manages keys. AWS handles the encryption/decryption but doesn't store the key.
- **Client-Side Encryption**: Encrypt data before uploading.

### Data in Transit
- Use **TLS (HTTPS)** for all S3 APIs.
- Enforce via bucket policy: `Condition: {"Bool": {"aws:SecureTransport": "false"}}` -> `Effect: Deny`.

---
## 3. Data Protection

### S3 Versioning & MFA Delete
- **Versioning**: Protects against accidental overwrite/delete.
- **MFA Delete**: Requires MFA for permanent version deletion or changing versioning state.

### S3 Object Lock
- **Governance Mode**: Protects against deletion by most users.
- **Compliance Mode**: Protects against deletion by ANY user (including root). Mandatory for some regulatory requirements (WORM).

### S3 Access Analyzer
- Identifies buckets with public or cross-account access.

---
## SAP-C02 Strategic Trade-offs

| Requirement | Solution |
| :--- | :--- |
| **Audit Compliance** | Use **SSE-KMS** for encryption (CloudTrail logs) + **S3 Access Logs**. |
| **Ransomware Protection** | Enable **Versioning** + **S3 Object Lock (Compliance Mode)**. |
| **Least Privilege** | Use **S3 Access Points** for complex multi-tenant environments. |
| **Privacy** | Use **VPC Gateway Endpoints** to keep S3 traffic off the public internet. |

> [!exam]
> - **VPC Gateway Endpoints** are free and don't require an IGW.
> - **S3 Macie** can be used to scan buckets for PII (Personally Identifiable Information).
> - **S3 Cross-Region Replication (CRR)** can be used for compliance-mandated offsite backups.

---
**Practice:** [[S3 Security - Practice Questions|S3 Security Practice Questions]]