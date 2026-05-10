---
tags: [aws, sap-c02, macie, security]
---
# Amazon Macie

Amazon Macie is a fully managed data security and data privacy service that uses machine learning and pattern matching to discover and protect sensitive data in AWS.

## Key Capabilities
- **Sensitive Data Discovery**: Automates the discovery and classification of sensitive data (PII, PHI, financial data) in **Amazon [[S3 Overview|S3]]**.
- **Data Security Posture**: Automatically evaluates and monitors S3 buckets for security risks, such as public accessibility or unencrypted storage.
- **Continuous Monitoring**: Generates findings for security risks and potential privacy issues.

## Architecture and Multi-Account Support
- **AWS Organizations Integration**: Macie provides multi-account support through [[Organizations Overview|AWS Organizations]]. A designated administrator account can manage and monitor the S3 data estate across all member accounts.
- **Regional Service**: Macie must be enabled on a region-by-region basis. Findings can be aggregated across accounts within a region.
- **VPC Endpoints**: Supports Interface VPC Endpoints (AWS PrivateLink) for private access without traversing the internet.

![[amzon-macie.png]]

> [!info] Multi-Account Management
> Accounts can be associated in two ways:
> 1. **Integrating AWS Organizations (Recommended)**: Scalable and automated.
> 2. **Membership Invitations**: Manual process.

## Findings and Remediation
- Findings are sent to the Macie console and **Amazon [[EventBridge]]** for automated remediation.
- Integrates with **AWS [[Security Hub]]** to provide a consolidated view of security posture.

---
### Summary Comparison

| Feature | Description |
| --- | --- |
| **Target Service** | Amazon S3 |
| **Discovery Method** | ML and Pattern Matching |
| **Primary Goal** | Sensitive Data Discovery & Privacy |
| **Multi-Account** | Managed via AWS Organizations |

> [!exam]
> Remember: Macie is specifically for **S3**. It does not scan other storage services (like EBS or EFS) or databases (like RDS) directly for sensitive data.

## Related Services
- [[_Security Index|Security Index]]
- [[S3 Overview]]
- [[Organizations Overview]]
- [[Security Hub]]
- [[EventBridge]]

---
**Practice:** [[Macie - Practice Questions|Macie Practice Questions]]