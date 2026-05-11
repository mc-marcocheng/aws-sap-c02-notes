---
tags: [aws, sap-c02, management, cloudtrail]
---
# CloudTrail Overview

AWS CloudTrail is a service that enables governance, compliance, operational auditing, and risk auditing of your AWS account. It records API calls and related events made by or on behalf of your account.

## Event Types
1. **Management Events**: Control plane operations (e.g., `CreateBucket`, `TerminateInstances`). Logged by default.
2. **Data Events**: Data plane operations (e.g., `GetObject`, `PutItem`, `InvokeFunction`). Disabled by default due to high volume and extra cost.
3. **Insights Events**: Detects unusual API activity (e.g., a sudden spike in `TerminateInstances` calls) through machine learning.

## Trail Configurations
- **Single-Region Trail**: Logs events for a specific region.
- **Multi-Region Trail**: (Best Practice) Logs events from all regions in a single trail and delivers them to a central S3 bucket.
- **Organization Trail**: A single trail that logs events across **all accounts** in an AWS Organization. This is the standard for centralized auditing.

## CloudTrail Lake
A managed data lake for CloudTrail events that allows you to aggregate, immutably store, and query events using **SQL**. It is an alternative to the Athena + S3 architecture for long-term investigation and auditing.

## Delivery Delay
> [!important]
> CloudTrail delivers events with a typical delay of **~5 minutes** (not real-time). For real-time monitoring, stream CloudTrail events to **CloudWatch Logs** and set up metric filters/alarms.

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
> - **[[Config|AWS Config]]**: "What does the resource look like now, and how has it changed over time?" (Configuration state).

---
## Related Services
- [[_Management Index|Management Index]]
- [[Config|AWS Config]]
- [[Organizations Overview|AWS Organizations]]
- [[S3 Overview|Amazon S3]]
- [[KMS|AWS KMS]]

---
**Practice:** [[CloudTrail - Practice Questions|CloudTrail Practice Questions]]