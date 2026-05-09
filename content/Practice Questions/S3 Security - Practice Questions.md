---
tags: [aws, sap-c02, s3, storage, practice-questions]
---
# S3 Security Practice Questions

> [!question]
> A financial services company must store regulatory documents in an Amazon S3 bucket for a minimum of seven years. The company's compliance department has specified that the data must be stored using a Write-Once-Read-Many (WORM) model, and even the AWS account root user must not be able to delete the objects or shorten the retention period during this time. Which S3 feature should the company use to meet these requirements?
> 1. Enable S3 Versioning and configure MFA Delete on the bucket.
> 2. Use S3 Object Lock in Governance mode with a 7-year retention period.
> 3. Use S3 Object Lock in Compliance mode with a 7-year retention period.
> 4. Create a Bucket Policy that denies the `s3:DeleteObject` action for all principals including the root user.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** [[S3 Security|S3 Object Lock]] in **Compliance mode** ensures that a protected object version cannot be overwritten or deleted by any user, including the root user. The retention mode cannot be changed, and the period cannot be shortened. [[S3 Security#Governance mode|Governance mode]] (2) allows certain users with special permissions (like `s3:BypassGovernanceRetention`) to delete objects or change settings, which fails the "even root user" requirement. [[S3 Overview#MFA Delete|MFA Delete]] (1) prevents accidental deletions but does not provide a fixed WORM retention period enforced against the root user for a specific duration. [[S3 Permissions|Bucket Policies]] (4) can be modified or deleted by the root user or anyone with `PutBucketPolicy` permissions, so they do not provide the same immutable guarantee as [[S3 Security|S3 Object Lock]].

> [!question]
> A large enterprise uses a single S3 bucket to store petabytes of data shared across dozens of different departments. Managing a single bucket policy has become extremely complex and error-prone as each department requires different access levels to specific prefixes. Which S3 feature would most effectively simplify the management of these access controls?
> 1. S3 Access Points
> 2. S3 Batch Operations
> 3. S3 Multi-Region Access Points
> 4. IAM Policy Variables
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** [[S3 Permissions|S3 Access Points]] are named network endpoints with dedicated access policies that describe how data can be accessed using that endpoint. This allows you to decompose a single large bucket policy into separate, easier-to-manage policies for each department or application. [[S3 Overview|S3 Batch Operations]] (2) is for performing large-scale object operations (like copying or tagging), not for access control management. [[S3 Overview|Multi-Region Access Points]] (3) provide a global endpoint for routing traffic to buckets in multiple regions, but the primary solution for simplifying complex local access control is standard Access Points.

> [!question]
> A Solutions Architect needs to ensure that all data uploaded to an S3 bucket is encrypted at rest using AWS KMS (SSE-KMS). Additionally, the architect must ensure that no objects are uploaded using unencrypted channels. Which combination of actions will achieve this? (Select TWO)
> 1. Enable "S3 Default Encryption" on the bucket and set it to SSE-KMS.
> 2. Use a bucket policy to `Allow` `s3:PutObject` only if `s3:x-amz-server-side-encryption` is set to `aws:kms`.
> 3. Use a bucket policy to `Deny` `s3:PutObject` if the `aws:SecureTransport` condition is `false`.
> 4. Use S3 Block Public Access to prevent unencrypted uploads.
> 5. Enable S3 Versioning to ensure encrypted versions are kept.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2, 3**
> > **Rationale:** **2** is required to explicitly enforce that the caller provides the correct encryption headers for [[S3 Encryption|SSE-KMS]]. While Default Encryption (1) exists, a `Deny` policy is the standard way to *ensure* compliance at the API level for specific keys. **3** enforces [[S3 Security|Data in Transit]] security by denying any requests made over HTTP (non-SSL). [[S3 Encryption|Default Encryption]] (1) automatically encrypts objects if no encryption is specified, but it doesn't strictly *prevent* a user from attempting to upload via unencrypted channels. [[S3 Permissions|Block Public Access]] (4) handles public exposure, not encryption or transport security.

> [!question]
> A company wants to access S3 buckets from their private VPC subnets without allowing traffic to traverse the public internet or requiring an Internet Gateway (IGW). They also want to ensure there are no additional hourly costs or data processing charges for this connectivity. What is the best solution?
> 1. Deploy an S3 Interface VPC Endpoint.
> 2. Deploy an S3 Gateway VPC Endpoint.
> 3. Use a NAT Gateway in a public subnet.
> 4. Establish an AWS Direct Connect connection.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[VPC Endpoints|S3 VPC Gateway Endpoint]] is the ideal solution here because it is **free of charge** and does not require an IGW or NAT Gateway. It uses route table entries to direct traffic to S3 over the AWS private network. [[VPC Endpoints|Interface Endpoints]] (1) ([[VPC Endpoints|PrivateLink]]) carry an hourly cost and data processing charges, though they allow access from on-premises or peered VPCs. [[VPC NAT Gateway|NAT Gateway]] (3) requires an IGW and incurs charges. [[Direct Connect Overview|Direct Connect]] (4) is an expensive hardware-based solution for hybrid cloud, not a simple VPC-to-S3 private link solution.

> [!question]
> An administrator is concerned that some S3 buckets in the account might be accidentally configured to allow public access. Which AWS service or feature provides a dashboard to identify buckets that are accessible from outside the AWS account?
> 1. Amazon Macie
> 2. S3 Access Analyzer
> 3. AWS CloudTrail
> 4. Amazon Inspector
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[S3 Security|S3 Access Analyzer]] (part of [[IAM Best Practices|IAM Access Analyzer]]) specifically evaluates your bucket policies and ACLs to alert you to buckets that are accessible from outside your account or organization. [[Amazon Macie]] (1) is used for discovering sensitive data (PII) within S3 buckets, not primarily for access policy analysis (though it does show public buckets). [[CloudTrail Overview|CloudTrail]] (3) provides logs of API calls but not a proactive dashboard of access status. [[Index|Inspector]] (4) is used for host-based vulnerability assessment (EC2), not S3 bucket access analysis.
