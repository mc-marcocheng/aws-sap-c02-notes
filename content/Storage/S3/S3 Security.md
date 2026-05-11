---
tags: [aws, sap-c02, storage, s3]
---
# S3 Security

S3 security focuses on controlling access and auditing who can interact with your data. This note covers specialized security features. For core permissions, see [[S3 Permissions]]. For encryption, see [[S3 Encryption]].

## 1. S3 Block Public Access
- **Function**: Provides a centralized way to prevent public access to S3 buckets and objects.
- **Scope**: Can be applied at the **Bucket level** or the **Account level** (affects all buckets in the account).
- **Behavior**: Overrides any existing or future bucket policies or ACLs that allow public access.
- **Recommendation**: Enable at the account level for all accounts except those specifically intended for public static hosting.

## 2. S3 Access Points
- **Function**: Named network endpoints that simplify managing data access for shared datasets in S3.
- **Architecture**: Instead of one massive bucket policy, you create multiple Access Points, each with its own policy tailored to a specific application or team.
- **Use Case**: A "Data Lake" bucket shared by multiple teams (Analysis team, Finance team, Dev team).
- **VPC Integration**: Can be restricted to allow access only from specific VPCs via **VPC Endpoints**.

## 3. IAM Access Analyzer for S3
- **Function**: Monitors your bucket policies and ACLs to identify buckets that are accessible from outside your account or publicly.
- **Security Posture**: Provides a quick way to audit cross-account and public access across your entire S3 estate.

---
## 4. Other Security Controls

### S3 Object Lock
- Provides WORM (Write Once, Read Many) protection to prevent object deletion or overwriting.
- See [[S3 Data Protection]] for details on Governance and Compliance modes.

### Monitoring & Auditing
- **[[CloudTrail]]**: Logs S3 bucket-level API actions (default) and object-level actions (if Data Events are enabled).
- **S3 Access Logs**: Capture detailed information about requests made to a bucket (who, when, what).
- **S3 Inventory**: Provides a scheduled report of all objects and their metadata for auditing.

> [!exam]
> - **VPC Gateway Endpoints** are the preferred way to access S3 from a VPC without an Internet Gateway.
> - **S3 [[Macie]]** is used for automated sensitive data (PII) discovery.

## Related Services
- [[_Storage Index|Storage Index]]
- [[S3 Overview|S3]]
- [[S3 Permissions]]
- [[S3 Encryption]]
- [[Macie]]

---
**Practice:** [[S3 Security - Practice Questions|S3 Security Practice Questions]]