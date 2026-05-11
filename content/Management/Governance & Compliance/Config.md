---
tags: [aws, sap-c02, management, compliance]
---
# AWS Config

[[Config]] is a fully managed service that provides AWS resource inventory, configuration history, and configuration change notifications to enable security, compliance, and governance. It is a **regional service**.

> [!exam]
> AWS Config is strictly a **detective** service. It does not prevent changes (use [[IAM]] or [[Organizations Overview|SCP]] for prevention) but integrates with other services for remediation.

> [!important]
> **Key Prerequisite**: Config is a **prerequisite** for Security Hub, Firewall Manager, and many Config-based guardrails in Control Tower.

## Key Features & Use Cases
- **Resource Inventory & History**: Provides a detailed view of the configuration of AWS resources.
- **Conformance Packs**: A collection of Config rules and remediation actions that can be deployed as a single entity across an organization.
- **Advanced Queries**: SQL-like queries across all Config-recorded resources. Used for inventory and compliance reporting.
- **Change Management**: Understand relationships between resources.

## Components
- **AWS Config Rules**: Define desired configuration settings.
  - **Evaluation Modes**: Proactive (before provisioning) and Detective (after provisioning).
  - **Triggers**: Periodic or on configuration changes.

## AWS Config vs. [[CloudTrail]]
Config records **what changed** (configuration history), while CloudTrail records **who changed it** (API calls). Together they provide full audit coverage.

| Feature | AWS Config | CloudTrail |
| :--- | :--- | :--- |
| **Focus** | **WHAT** changed | **WHO** changed it |
| **Details** | Configuration history and relationships | API call details (IP, timestamp, user) |
| **Use Case** | Compliance, change management | Security auditing, troubleshooting |

## Related Services
- [[_Management Index|Management Index]]
- [[CloudTrail]]
- [[Organizations Overview|AWS Organizations]]
- [[Systems Manager Overview|Systems Manager]]

---
**Practice:** [[Config - Practice Questions|AWS Config Practice Questions]]