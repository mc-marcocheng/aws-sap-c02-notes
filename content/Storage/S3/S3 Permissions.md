---
tags: [aws, sap-c02, s3]
---
# S3 Permissions

Understanding S3 permission evaluation is critical for the SAP-C02 exam, especially in cross-account scenarios.

## 1. Evaluation Logic
When S3 receives a request, it evaluates all applicable policies (IAM, Bucket Policy, ACLs).
- **Explicit Deny**: Always wins.
- **Explicit Allow**: Wins if there is no explicit deny.
- **Default**: Deny.

## 2. Cross-Account Access Strategies

### Option A: Bucket Policies & IAM (Preferred)
1. Account A (Bucket Owner) grants access to Account B (IAM Principal) via a **Bucket Policy**.
2. Account B (IAM Principal Owner) grants access to the user/role via an **IAM Policy**.
- **Result**: Users in Account B can access the bucket.

### Option B: IAM Roles (Cross-Account)
1. Account A creates an **IAM Role** with access to the bucket.
2. Account A defines a **Trust Policy** allowing Account B to assume the role.
3. Users in Account B use `AssumeRole` to gain access.
- **Advantage**: The IAM Role belongs to Account A, so all objects uploaded by Account B users are owned by Account A.

### Option C: ACLs (Legacy)
- Used to grant permissions to other accounts or predefined groups (e.g., Log Delivery).

---
## 3. Object Ownership (Crucial for Exam)
By default, an object is owned by the AWS account that uploaded it, NOT necessarily the bucket owner.

> [!important] S3 Object Ownership Setting
> You can disable ACLs and enforce **Bucket Owner Enforced**. This ensures the bucket owner automatically owns every object uploaded to the bucket, regardless of who uploaded it. This simplifies access control via Bucket Policies.

---
## 4. Predefined Groups (ACLs)
- **Authenticated Users**: Any AWS account (not just yours). Use with caution!
- **All Users**: Public access (Anonymous).
- **Log Delivery Group**: Used for S3 server access logging.

---
## SAP-C02 Exam Scenarios

| Scenario | Recommended Action |
| :--- | :--- |
| **Enforce encryption on upload** | Bucket policy with `Deny` if `s3:x-amz-server-side-encryption` is not `AES256` or `aws:kms`. |
| **Restrict to specific VPC** | Bucket policy with `Condition` on `aws:SourceVpce`. |
| **Cross-account sharing** | Use **Bucket Policy** (easiest) or **IAM Role** (best for complex access). |
| **Uploader owns object issue** | Enable **S3 Object Ownership (Bucket Owner Enforced)**. |

> [!exam]
> If a user can list objects but cannot download them, check if the object is encrypted with **KMS** and whether the user has `kms:Decrypt` permissions.

---
**Practice:** [[S3 Permissions - Practice Questions|S3 Permissions Practice Questions]]