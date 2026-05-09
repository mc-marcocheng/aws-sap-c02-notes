---
tags: [aws, sap-c02, s3]
---
# S3 Encryption

S3 provides multiple options for protecting data at rest and in transit. Understanding the trade-offs between key management and performance is essential for the SAP-C02.

## 1. Encryption in Transit
- **TLS (HTTPS)**: Use HTTPS endpoints for all S3 communication.
- **Enforcement**: Apply a bucket policy that denies any request that does not use `aws:SecureTransport`.

## 2. Encryption at Rest (Server-Side)

### SSE-S3 (S3-Managed Keys)
- **Mechanism**: S3 manages the encryption keys (AES-256).
- **Pros**: Easy to use, no extra cost, no key management overhead.
- **Cons**: Cannot be used for granular audit trails of key usage.

### SSE-KMS (AWS KMS-Managed Keys)
- **Mechanism**: Keys are managed in AWS KMS.
- **Pros**: 
    - Separate permissions for the object and the key.
    - Audit trail in CloudTrail showing when a key was used.
    - Automatic rotation of keys.
- **Cons**: KMS API costs and request rate limits.

### SSE-C (Customer-Provided Keys)
- **Mechanism**: You provide the encryption key in every API request. S3 performs the encryption but doesn't store the key.
- **Pros**: You have full control over keys without managing the encryption process.
- **Cons**: You MUST manage the mapping between objects and keys. If you lose the key, the data is lost.

---
## 3. Encryption at Rest (Client-Side)
- **Mechanism**: Data is encrypted on the client side before it reaches S3.
- **Key Management**: Use **KMS** (CSE-KMS) or a **client-side master key**.
- **Pros**: Highest security; AWS never sees the unencrypted data.

---
## SAP-C02 Key Scenarios

| Requirement | Recommendation |
| :--- | :--- |
| **Audit Trails for each access** | Use **SSE-KMS**. CloudTrail logs each key usage. |
| **Enforce encryption for all uploads**| Use **S3 Default Encryption** at the bucket level or a **Bucket Policy** denying non-encrypted uploads. |
| **Minimize KMS costs** | Use **S3 Bucket Keys** to reduce KMS request volume by up to 99%. |
| **Regulatory Compliance (WORM)** | Combine encryption with **S3 Object Lock**. |

> [!exam] S3 Bucket Keys
> When using SSE-KMS, S3 Bucket Keys reduce KMS request costs by creating a bucket-level key that is used to derive unique data keys for objects. This significantly reduces the number of calls from S3 to KMS.

> [!important]
> When downloading an object encrypted with **SSE-C**, you must provide the same key used during the upload. If you don't, S3 returns a `403 Forbidden` error (or `400 Bad Request` if headers are missing).

---
**Practice:** [[S3 Encryption - Practice Questions|S3 Encryption Practice Questions]]