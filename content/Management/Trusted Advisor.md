---
tags: [aws, sap-c02, management]
---
# AWS Trusted Advisor

AWS Trusted Advisor is an online tool that provides real-time guidance to help you provision your resources following AWS best practices. It inspects your AWS environment and makes recommendations across five categories.

## Trusted Advisor Categories

| Category | Description |
| --- | --- |
| **Cost Optimization** | Highlights unused resources and opportunities to reduce your bill (e.g., idle Load Balancers, unassociated EIPs). |
| **Security** | Identifies security gaps (e.g., S3 buckets with public access, unrestricted SSH access, MFA not enabled on root). |
| **Fault Tolerance** | Increases resiliency by highlighting redundancy shortfalls (e.g., single-AZ deployments, missing snapshots). |
| **Performance** | Improves speed and responsiveness (e.g., overutilized EBS volumes, high CloudFront header usage). |
| **Service Limits** | Checks usage that is more than 80% of your service limits (quotas). |

## Support Plans and Access
- **Basic and Developer**: Access to core security and service limit checks.
- **Business and Enterprise**: Access to the full set of checks.
- **Trusted Advisor Priority**: (Enterprise only) Prioritized recommendations and visibility into risks identified by AWS account teams.

## Automation
- **AWS Support API**: Programmatic access to Trusted Advisor recommendations.
- **Amazon EventBridge**: Can trigger automated actions based on Trusted Advisor status changes.

![[trusted-advisor-categories.png]]

> [!exam]
> **SAP-C02 Key Point**: Trusted Advisor is a **reactive/consultative** tool. For **proactive/governance** controls, use **AWS Organizations SCPs** or **AWS Control Tower**. For **automated compliance auditing**, use **AWS Config**.

---
**Practice:** [[Trusted Advisor - Practice Questions|Trusted Advisor Practice Questions]]