---
tags: [aws, sap-c02, macie, security, practice-questions]
---
# Macie Practice Questions

> [!question]
> A healthcare company stores millions of patient records across hundreds of Amazon S3 buckets in a multi-account AWS Organization. The compliance team needs to automatically identify any S3 buckets that contain personally identifiable information (PII) such as Social Security numbers or medical record numbers, and they need ongoing visibility as new data is uploaded. Which solution provides this capability with the LEAST operational overhead?
> 1. Enable AWS Config rules to scan S3 object content for PII patterns.
> 2. Enable Amazon Macie across the Organization and configure automated sensitive data discovery jobs.
> 3. Deploy AWS Lambda functions triggered by S3 events to scan objects using Amazon Comprehend for PII detection.
> 4. Use Amazon Athena with regular expressions to query S3 access logs for PII patterns.
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[Macie|Amazon Macie]] can be enabled at the [[Organizations Overview|AWS Organization]] level via a delegated administrator account. It uses machine learning and pattern matching to automatically discover and classify sensitive data like PII within [[S3 Overview|Amazon S3]] buckets. AWS Config (Option 1) evaluates resource configurations, not object content. Lambda + Comprehend (Option 3) requires custom development and maintenance. Athena (Option 4) queries structured data, not raw object content for PII.

> [!question]
> A financial institution has enabled Amazon Macie across their AWS Organization. The security team discovers that Macie has identified thousands of S3 objects containing credit card numbers in a bucket that should only contain anonymized analytics data. They need to automatically quarantine affected objects and notify the security operations center. Which architecture achieves this?
> 1. Configure Macie to automatically move objects to a quarantine bucket when findings are generated.
> 2. Create an EventBridge rule matching Macie finding events. Trigger a Step Functions workflow that moves objects to a quarantine bucket and publishes to an SNS topic.
> 3. Configure an S3 event notification on the source bucket to trigger a Lambda function that calls the Macie API to check each object.
> 4. Use S3 Batch Operations to scan and move all objects in the bucket to a quarantine bucket.
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[Macie|Amazon Macie]] publishes findings to [[EventBridge|Amazon EventBridge]], which can trigger automated workflows. [[Step Functions|AWS Step Functions]] can orchestrate the quarantine process (copy to quarantine bucket, delete from source, notify via [[SNS]]). Macie (Option 1) does not natively move objects. Option 3 reverses the flow incorrectly. Option 4 is a one-time batch operation, not an automated response.

> [!question]
> A company uses Amazon Macie and notices that sensitive data discovery jobs are only scanning a fraction of their S3 buckets. Upon investigation, they find that several buckets are in regions where Macie is not enabled, and some buckets use customer-managed KMS keys that Macie cannot access. Which combination of actions resolves this? (Choose 2)
> 1. Enable Macie in all regions where S3 buckets exist.
> 2. Configure S3 Cross-Region Replication to copy all objects to a single region where Macie is enabled.
> 3. Update the KMS key policies to grant Macie's service-linked role the `kms:Decrypt` permission.
> 4. Re-encrypt all objects using SSE-S3 instead of SSE-KMS.
> 5. Create a Macie classification export configuration to an S3 bucket in the primary region.
>
> > [!success]- Answer & Rationale
> > **Answer: 1, 3**
> > **Rationale:** [[Macie|Amazon Macie]] is a regional service and must be enabled in each region where you want to scan buckets. Additionally, if objects are encrypted with [[KMS|customer-managed KMS keys]], the Macie service-linked role must be granted `kms:Decrypt` permission in the key policy. Cross-Region Replication (Option 2) adds cost and complexity. Re-encrypting everything (Option 4) is operationally heavy and may violate other security requirements.
