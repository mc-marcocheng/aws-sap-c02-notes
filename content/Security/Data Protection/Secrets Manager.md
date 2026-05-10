---
tags: [aws, sap-c02, secrets, security]
---
# Secrets Manager Overview

AWS Secrets Manager helps you protect secrets needed to access your applications, services, and IT resources.

## Key Features
- **Automatic Rotation**: Natively supports rotating credentials for [[RDS Overview|RDS]], [[Redshift]], and DocumentDB. Supports [[Lambda]] for other services (API keys, etc.).
- **Encryption**: All secrets are encrypted at rest using **AWS [[KMS]]**.
- **Cross-Region Replication**: Replicate secrets to multiple regions for disaster recovery and global applications.
- **VPC Endpoints**: Support for PrivateLink to access secrets without leaving the AWS network.

## Secrets Manager vs. Parameter Store

| Feature | Secrets Manager | Parameter Store (SecureString) |
| --- | --- | --- |
| **Rotation** | **Native / Automatic** | Manual (requires custom Lambda) |
| **Cost** | $0.40 per secret / month | Free (Standard), $0.05/10k API calls (Advanced) |
| **Integration** | RDS, Redshift, etc. | General purpose config |
| **Cross-Region** | Native Replication | Manual copy |

## How Rotation Works
1. Secrets Manager triggers a Lambda function on a schedule.
2. The Lambda function creates a new version of the secret.
3. The Lambda function updates the credentials in the target database.
4. The Lambda function tests the new credentials.
5. Secrets Manager marks the new version as "current".

![[aws-secrets-manager-vs-systems-parameter-store.jpg]]

> [!exam]
> **SAP-C02 Decision Point**: Choose **Secrets Manager** over Parameter Store if the requirement mentions **automatic rotation** or **cross-region replication**. Choose **Parameter Store** if the goal is a low-cost solution for simple configuration and non-rotating secrets.

## Related Services
- [[_Security Index|Security Index]]
- [[KMS]]
- [[RDS Overview]]
- [[Lambda]]
- [[Systems Manager Overview]]

---
**Practice:** [[Secrets Manager - Practice Questions|Secrets Manager Practice Questions]]