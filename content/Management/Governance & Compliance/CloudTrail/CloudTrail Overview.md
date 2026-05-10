---
tags: [aws, sap-c02, cloudtrail]
---
# CloudTrail Overview

AWS CloudTrail is a service that enables governance, compliance, operational auditing, and risk auditing of your AWS account. It records API calls and related events made by or on behalf of your account.

## Event Types
1. **Management Events**: (Logged by default) Operations performed on resources, such as creating an EC2 instance or an S3 bucket.
2. **Data Events**: (Not logged by default) High-volume operations performed *within* a resource, such as S3 object-level actions or Lambda function executions.
3. **CloudTrail Insights**: (Optional) Detects unusual API activity (e.g., a sudden spike in `TerminateInstances` calls).

## Trail Configurations
- **Single-Region Trail**: Logs events for a specific region.
- **Multi-Region Trail**: (Best Practice) Logs events from all regions in a single trail and delivers them to a central S3 bucket.
- **Organization Trail**: Logs events for all accounts in an **AWS Organization**. Managed from the management account.

## Security and Integrity
- **Log File Integrity Validation**: Uses SHA-256 and RSA signatures to ensure logs haven't been tampered with after delivery.
- **Encryption**: Logs are encrypted at rest using S3 SSE or **AWS KMS**.
- **S3 MFA Delete**: Recommended for the S3 bucket storing CloudTrail logs to prevent accidental deletion.

## Global Services
- Events for global services (IAM, STS, CloudFront) are delivered to any trail that has the **Include global services** option enabled.
- For multi-region trails, global events are typically delivered from the `us-east-1` region.

![[cloudtrail-flow.png]]

> [!exam]
> **CloudTrail vs. Config**:
> - **CloudTrail**: "Who made the call?" (API call history).
> - **AWS Config**: "What does the resource look like now, and how has it changed over time?" (Configuration state).

---
**Practice:** [[CloudTrail - Practice Questions|CloudTrail Practice Questions]]