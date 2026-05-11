---
tags: [aws, sap-c02, management]
---
# AWS Trusted Advisor

AWS Trusted Advisor provides guidance to help you provision your resources following AWS best practices. It inspects your AWS environment and makes recommendations across five categories.

> [!important]
> **Key Exam Fact**: Trusted Advisor checks are **NOT real-time**. They refresh periodically. For real-time compliance checking, use **[[Config|AWS Config]]**.

## Trusted Advisor Categories
- **Cost Optimization**: Idle resources, unassociated EIPs.
- **Security**: Public S3 buckets, unrestricted SSH, MFA on root.
- **Fault Tolerance**: Single-AZ deployments, missing snapshots.
- **Performance**: Overutilized EBS, high CloudFront header usage.
- **Service Limits**: Checks usage > 80% of quotas.

## Support Plans Access
- **Basic and Developer**: Core security and service limit checks only.
- **Business and Enterprise**: Full set of all checks.
- **Trusted Advisor Priority**: (Enterprise only) Prioritized recommendations.

## Automation
- **AWS Support API**: Programmatic access to recommendations.
- **[[EventBridge|Amazon EventBridge]]**: Trigger actions based on status changes.

![[trusted-advisor-categories.png]]

> [!exam]
> **SAP-C02 Key Point**: Trusted Advisor is a **reactive/consultative** tool. For **proactive/governance** controls, use **[[Organizations Overview|AWS Organizations]] SCPs** or **[[Control Tower|AWS Control Tower]]**. For **automated compliance auditing**, use **[[Config|AWS Config]]**.

## Related Services
- [[_Management Index|Management Index]]
- [[Control Tower]]
- [[Config]]
- [[Organizations Overview|AWS Organizations]]
- [[EventBridge]]

---
**Practice:** [[Trusted Advisor - Practice Questions|Trusted Advisor Practice Questions]]