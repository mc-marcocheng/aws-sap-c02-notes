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
> > **Rationale:** When using [[S3 Encryption#SSE-C (Server-Side Encryption with Customer-Provided Keys)|SSE-C]], you must provide the following three headers:
> > 1. `x-amz-server-side-encryption-customer-algorithm`: Specifies the encryption algorithm (e.g., AES256).
> > 2. `x-amz-server-side-encryption-customer-key`: Provides the 256-bit, base64-encoded encryption key.
> > 3. `x-amz-server-side-encryption-customer-key-MD5`: Provides the base64-encoded 128-bit MD5 digest of the encryption key.
> > `x-amz-server-side-encryption-customer-key-AES-256` is not a valid header. For more details on encryption options, see [[S3 Encryption]].
