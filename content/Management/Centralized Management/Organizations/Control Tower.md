---
tags: [aws, sap-c02, management, control-tower]
---
# AWS Control Tower

AWS Control Tower provides the easiest way to set up and govern a secure, multi-account AWS environment (Landing Zone) based on AWS best practices.

## Core Features
- **Landing Zone**: A well-architected, multi-account environment using **[[Organizations Overview|AWS Organizations]]**.
- **Guardrails**: High-level rules for ongoing governance. **Guardrails = SCPs (preventive) + Config Rules (detective) + AWS Lambda hooks (proactive).**
    - **Preventive Guardrails**: Enforce policies using **SCPs** (e.g., "Disallow changes to log archive bucket").
    - **Detective Guardrails**: Detect non-compliance using **[[Config|AWS Config]]** rules (e.g., "Detect whether public read access to [[S3 Overview|S3]] buckets is allowed").
- **Account Factory**: Automates new account provisioning with pre-configured networking and security baselines via **[[Service Catalog|AWS Service Catalog]]**.
- **Customizations for Control Tower (CfCT)**: Extends Control Tower with custom CloudFormation templates and policies deployed to all accounts.
- **Dashboard**: Centralized visibility into the compliance status of your organization.

## Landing Zone Components
1. **Management Account**: Used for billing and managing the organization.
2. **Log Archive Account**: Centralizes logs from all accounts in the landing zone ([[CloudTrail]] and Config).
3. **Audit Account**: Used for security and compliance teams to gain read-only access to all accounts.

## Guidance Tiers
- **Mandatory**: Always enabled.
- **Strongly Recommended**: Based on common best practices.
- **Elective**: Specific to certain compliance requirements.

![[aws-control-tower.png]]

> [!exam]
> **When to use Control Tower?**
> If a scenario asks for setting up a **new** multi-account environment with **standardized governance, centralized logging, and automated account provisioning**, Control Tower is the correct answer. It automates what would otherwise be a manual setup of Organizations, Config, CloudTrail, and [[IAM Identity Center]].

## Related Services
- [[_Management Index|Management Index]]
- [[Organizations Overview|AWS Organizations]]
- [[Config]]
- [[Service Catalog]]
- [[CloudTrail]]

---
**Practice:** [[Control Tower - Practice Questions|Control Tower Practice Questions]]