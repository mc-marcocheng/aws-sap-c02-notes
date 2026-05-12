---
tags: [aws, sap-c02, s3, storage, practice-questions]
---
# S3 Data Protection Practice Questions

> [!question]
> A customer is leveraging Amazon Simple Storage Service in eu-west-1 to store static content for a web-based property. The customer is storing objects using the Standard Storage class. Where are the customers objects replicated?
> 1. A single facility in eu-west-1 and a single facility in eu-central-1
> 2. A single facility in eu-west-1 and a single facility in us-east-1
> 3. Multiple facilities in eu-west-1
> 4. A single facility in eu-west-1
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** [[S3 Data Protection#1. Resilience & Durability|S3 Standard storage class]] is designed for high durability by redundantly storing objects across **Multiple facilities** (at least 3 Availability Zones) within the same region. This ensures [[S3 Data Protection#1. Resilience & Durability|Resilience & Durability]] against the failure of a single data center.

> [!question]
> A system admin is planning to encrypt all objects being uploaded to S3 from an application. The system admin does not want to implement his own encryption algorithm; instead he is planning to use server side encryption by supplying his own key (SSE-C). Which parameter is not required while making a call for SSE-C?
> 1. x-amz-server-side-encryption-customer-key-AES-256
> 2. x-amz-server-side-encryption-customer-key
> 3. x-amz-server-side-encryption-customer-algorithm
> 4. x-amz-server-side-encryption-customer-key-MD5
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** When using [[S3 Encryption#SSE-C (Customer-Provided Keys)|SSE-C]], you must provide the following three headers:
> > 1. `x-amz-server-side-encryption-customer-algorithm`: Specifies the encryption algorithm (e.g., AES256).
> > 2. `x-amz-server-side-encryption-customer-key`: Provides the 256-bit, base64-encoded encryption key.
> > 3. `x-amz-server-side-encryption-customer-key-MD5`: Provides the base64-encoded 128-bit MD5 digest of the encryption key.
> > `x-amz-server-side-encryption-customer-key-AES-256` is not a valid header. For more details on encryption options, see [[S3 Encryption]].

> [!question]
> A company stores critical financial records in Amazon S3 and needs to protect against accidental deletion by IAM users. They also need the ability to recover any version of an object deleted in the past 90 days. The bucket is accessed by automated processes that overwrite objects frequently. Which combination of S3 features should be enabled? (Choose 2)
> 1. Enable S3 Versioning on the bucket.
> 2. Enable MFA Delete on the bucket.
> 3. Configure S3 Object Lock in Governance mode with a 90-day retention period.
> 4. Configure a lifecycle rule to permanently delete non-current versions after 90 days.
> 5. Enable S3 Cross-Region Replication to a backup bucket.
>
> > [!success]- Answer & Rationale
> > **Answer: 1, 4**
> > **Rationale:** [[S3 Data Protection|S3 Versioning]] preserves all versions of an object, including deletions (which create a delete marker rather than permanently removing data). A [[S3 Lifecycle Management|Lifecycle rule]] to expire non-current versions after 90 days controls storage costs while maintaining the 90-day recovery window. MFA Delete (Option 2) adds protection but is for preventing permanent version deletion, not for the recovery requirement. Object Lock (Option 3) prevents any modification, which conflicts with the automated overwrite requirement. CRR (Option 5) adds durability but doesn't inherently provide point-in-time recovery of deleted objects.
