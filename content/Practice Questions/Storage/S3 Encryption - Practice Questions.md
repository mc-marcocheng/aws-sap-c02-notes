---
tags: [aws, sap-c02, s3, storage, practice-questions]
---
# S3 Encryption Practice Questions

> [!question]
> A company is storing data on Amazon Simple Storage Service (S3). The company’s security policy mandates that data is encrypted at rest. Which of the following methods can achieve this? (Choose 3)
> 1. Use Amazon S3 server-side encryption with AWS Key Management Service managed keys
> 2. Use Amazon S3 server-side encryption with customer-provided keys
> 3. Use Amazon S3 server-side encryption with EC2 key pair.
> 4. Use Amazon S3 bucket policies to restrict access to the data at rest.
> 5. Encrypt the data on the client-side before ingesting to Amazon S3 using their own master key
> 6. Use SSL to encrypt the data while in transit to Amazon S3.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1, 2, 5**
> > **Rationale:** AWS S3 supports several methods for encryption at rest: [[S3 Encryption#SSE-KMS (AWS KMS-Managed Keys)|SSE-KMS]], [[S3 Encryption#SSE-C (Customer-Provided Keys)|SSE-C]], and [[S3 Encryption#3. Encryption at Rest (Client-Side)|Client-Side Encryption]]. SSE-S3 is also available but not listed correctly. EC2 key pairs are for SSH access, bucket policies manage access control but don't perform encryption, and SSL protects data in transit, not at rest.

> [!question]
> A user has enabled versioning on an S3 bucket. The user is using server side encryption for data at Rest. If the user is supplying his own keys for encryption (SSE-C) which of the below mentioned statements is true?
> 1. The user should use the same encryption key for all versions of the same object
> 2. It is possible to have different encryption keys for different versions of the same object
> 3. AWS S3 does not allow the user to upload his own keys for server side encryption
> 4. The SSE-C does not work when versioning is enabled
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** With [[S3 Encryption#SSE-C (Customer-Provided Keys)|SSE-C]], since the customer provides the key with each request, they can choose to use different keys for different versions of the same object. The customer is responsible for tracking which key belongs to which version.

> [!question]
> A storage admin wants to encrypt all the objects stored in S3 using server side encryption. The user does not want to use the AES 256 encryption key provided by S3. How can the user achieve this?
> 1. The admin should upload his secret key to the AWS console and let S3 decrypt the objects
> 2. The admin should use CLI or API to upload the encryption key to the S3 bucket. When making a call to the S3 API mention the encryption key URL in each request
> 3. S3 does not support client supplied encryption keys for server side encryption
> 4. The admin should send the keys and encryption algorithm with each API call
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale:** This describes [[S3 Encryption#SSE-C (Customer-Provided Keys)|SSE-C]]. In this mode, the client must provide the encryption key and the algorithm (e.g., AES256) in the HTTP headers of every request. S3 uses the key to encrypt/decrypt but does not store the key itself.

> [!question]
> A user has enabled versioning on an S3 bucket. The user is using server side encryption for data at rest. If the user is supplying his own keys for encryption (SSE-C), what is recommended to the user for the purpose of security?
> 1. User should not use his own security key as it is not secure
> 2. Configure S3 to rotate the user’s encryption key at regular intervals
> 3. Configure S3 to store the user’s keys securely with SSL
> 4. Keep rotating the encryption key manually at the client side
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale:** Since AWS does not store or manage the keys for [[S3 Encryption#SSE-C (Customer-Provided Keys)|SSE-C]], it cannot perform automatic rotation. The user is responsible for managing, storing, and rotating these keys.

> [!question]
> A system admin is planning to encrypt all objects being uploaded to S3 from an application. The system admin does not want to implement his own encryption algorithm; instead he is planning to use server side encryption by supplying his own key (SSE-C). Which parameter is not required while making a call for SSE-C?
> 1. x-amz-server-side-encryption-customer-key-AES-256
> 2. x-amz-server-side-encryption-customer-key
> 3. x-amz-server-side-encryption-customer-algorithm
> 4. x-amz-server-side-encryption-customer-key-MD5
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** The required headers for [[S3 Encryption#SSE-C (Customer-Provided Keys)|SSE-C]] are `x-amz-server-side-encryption-customer-algorithm`, `x-amz-server-side-encryption-customer-key`, and `x-amz-server-side-encryption-customer-key-MD5`. There is no header named `x-amz-server-side-encryption-customer-key-AES-256`.

> [!question]
> You are designing a personal document-archiving solution for your global enterprise with thousands of employee. Each employee has potentially gigabytes of data to be backed up in this archiving solution. The solution will be exposed to the employees as an application, where they can just drag and drop their files to the archiving system. Employees can retrieve their archives through a web interface. The corporate network has high bandwidth AWS DirectConnect connectivity to AWS. You have regulatory requirements that all data needs to be encrypted before being uploaded to the cloud. How do you implement this in a highly available and cost efficient way?
> 1. Manage encryption keys on-premise in an encrypted relational database. Set up an on-premises server with sufficient storage to temporarily store files and then upload them to Amazon S3, providing a client-side master key.
> 2. Manage encryption keys in a Hardware Security Module(HSM) appliance on-premise server with sufficient storage to temporarily store, encrypt, and upload files directly into amazon Glacier.
> 3. Manage encryption keys in amazon Key Management Service (KMS), upload to amazon simple storage service (s3) with client-side encryption using a KMS customer master key ID and configure Amazon S3 lifecycle policies to store each object using the amazon glacier storage tier.
> 4. Manage encryption keys in an AWS CloudHSM appliance. Encrypt files prior to uploading on the employee desktop and then upload directly into amazon glacier
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** [[S3 Encryption#3. Encryption at Rest (Client-Side)|Client-side encryption]] with KMS (CSE-KMS) meets the requirement to encrypt data *before* it leaves the corporate network. Uploading to S3 and using lifecycle policies to move data to Glacier is more flexible and often more cost-efficient for an application-based archiving solution than direct Glacier uploads.

> [!question]
> A user has enabled server side encryption with S3. The user downloads the encrypted object from S3. How can the user decrypt it?
> 1. S3 does not support server side encryption
> 2. S3 provides a server side key to decrypt the object
> 3. The user needs to decrypt the object using their own private key
> 4. S3 manages encryption and decryption automatically
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale:** For [[S3 Encryption#SSE-S3 (S3-Managed Keys)|SSE-S3]] and [[S3 Encryption#SSE-KMS (AWS KMS-Managed Keys)|SSE-KMS]], Amazon S3 handles the decryption automatically when an authorized user requests the object. The user receives the unencrypted data.

> [!question]
> When uploading an object, what request header can be explicitly specified in a request to Amazon S3 to encrypt object data when saved on the server side?
> 1. x-amz-storage-class
> 2. Content-MD5
> 3. x-amz-security-token
> 4. x-amz-server-side-encryption
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale:** The `x-amz-server-side-encryption` header is used to request server-side encryption. For [[S3 Encryption#SSE-S3 (S3-Managed Keys)|SSE-S3]], it is set to `AES256`. For [[S3 Encryption#SSE-KMS (AWS KMS-Managed Keys)|SSE-KMS]], it is set to `aws:kms`.

> [!question]
> A company must ensure that any objects uploaded to an S3 bucket are encrypted. Which of the following actions should the SysOps Administrator take to meet this requirement? (Select TWO.)
> 1. Implement AWS Shield to protect against unencrypted objects stored in S3 buckets.
> 2. Implement Object access control list (ACL) to deny unencrypted objects from being uploaded to the S3 bucket.
> 3. Implement Amazon S3 default encryption to make sure that any object being uploaded is encrypted before it is stored.
> 4. Implement Amazon Inspector to inspect objects uploaded to the S3 bucket to make sure that they are encrypted.
> 5. Implement S3 bucket policies to deny unencrypted objects from being uploaded to the buckets.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3, 5**
> > **Rationale:** [[S3 Encryption|S3 Default Encryption]] ensures all objects are encrypted at rest even if the user doesn't specify it. A [[S3 Encryption#1. Encryption in Transit|Bucket Policy]] can also be used to explicitly deny any `PutObject` requests that do not include encryption headers.
