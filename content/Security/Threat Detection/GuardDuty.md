---
tags: [aws, sap-c02, guardduty, security]
---
# Amazon GuardDuty

Amazon GuardDuty is a continuous security monitoring service that analyzes and processes AWS data sources to identify unexpected and potentially unauthorized and malicious activity within your AWS environment.

## Architectural Patterns & Key Facts
- **Data Sources:** Analyzes [[VPC Overview|VPC Flow Logs]], [[CloudTrail|AWS CloudTrail]] event logs, CloudTrail management events, CloudTrail S3 data events, [[Route 53 Overview|Amazon Route 53]] DNS logs, EKS audit logs, and EBS volume data.
- **Advanced Monitoring Features:**
    - **Malware Protection**: Automatically scans EBS volumes for malware when GuardDuty detects suspicious activity related to EC2 or container workloads.
    - **Runtime Monitoring**: Provides agent-based monitoring for **EKS, ECS (on EC2/Fargate), and EC2** to detect on-host threats like fileless malware or command execution.
- **No Agent Required (Mostly):** Core GuardDuty operates entirely outside your instances. Agent-based components are only required for specific Runtime Monitoring features.
- **Integration with [[Organizations Overview|AWS Organizations]]:** A Delegated Administrator account can manage GuardDuty for up to 5,000 member accounts in the organization.
- **Cross-Region:** GuardDuty is a regional service. You must enable it in all supported regions to monitor global activity. Findings can be aggregated to a single region using [[Security Hub|AWS Security Hub]] or [[EventBridge|Amazon EventBridge]].
- **Trusted IP Lists:** Prevents GuardDuty from generating findings for known, trusted IP addresses.
- **Threat IP Lists:** Generates findings when activity involves IP addresses on your custom threat lists.
- **Suspension vs. Disabling:** Suspending stops monitoring but keeps settings/findings. Disabling deletes all configuration and findings.

> [!exam] SAP-C02 Exam Tip
> **Automated Remediation Pattern**: GuardDuty → **[[EventBridge|Amazon EventBridge]]** → **[[Lambda|AWS Lambda]]** or **[[Systems Manager Overview|AWS Systems Manager Automation]]**. This is the standard pattern for auto-responding to security findings.
> For multi-region aggregation of findings, you typically use [[Security Hub|AWS Security Hub]] or route GuardDuty findings via [[EventBridge|Amazon EventBridge]] to a central region/account. GuardDuty does *not* natively aggregate findings across regions on its own.

## Related Services
- [[_Security Index|Security Index]]
- [[Security Hub]]
- [[EventBridge]]
- [[CloudTrail]]
- [[VPC Overview]]

---
**Practice:** [[GuardDuty - Practice Questions|GuardDuty Practice Questions]]