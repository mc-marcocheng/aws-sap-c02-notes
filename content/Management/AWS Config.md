---
tags: [aws, sap-c02, management, compliance]
---
# AWS Config

[[AWS Config]] is a fully managed service that provides AWS resource inventory, configuration history, and configuration change notifications to enable security, compliance, and governance. It is a **regional service**.

> [!exam]
> AWS Config is strictly a **detective** service. It does not prevent changes (use [[IAM Overview|IAM]] or [[Organizations Overview|SCP]] for prevention) but integrates with other services for remediation.

## Key Features & Use Cases

- **Resource Inventory & History**: Provides a detailed view of the configuration of AWS resources.
- **Change Management**: Understand relationships between resources (e.g., which EC2 instances are using a specific Security Group) to assess the impact of changes.
- **Security Analysis**: Continuous monitoring and governance over resource configurations to identify misconfigurations.
- **Auditing & Compliance**: Retrieve historical configurations for audits and ensure compliance with internal policies.
- **Troubleshooting**: Compare the last working configuration to a recent change to identify root causes.

## Core Concepts

- **Configuration Items (CI)**: A point-in-time view of a supported AWS resource (metadata, attributes, relationships).
- **Configuration Recorder**: Stores configurations as CIs. It must be created and started to begin recording.
- **Configuration Snapshot**: A collection of CIs for all supported resources in an account.
- **Configuration Stream**: An automatically updated list of CIs delivered to an [[S3 Overview|S3]] bucket.
- **AWS Config Rules**: Define desired configuration settings. Can be **Managed Rules** (predefined) or **Custom Rules** (Lambda-based).
  - **Evaluation Modes**: Proactive (before provisioning) and Detective (after provisioning).
  - **Triggers**: Periodic or on configuration changes.

## Multi-Account & Multi-Region Data Aggregation

An **Aggregator** collects AWS Config configuration and compliance data from:
- Multiple accounts and multiple regions.
- Single account and multiple regions.
- An entire organization in [[Organizations Overview|AWS Organizations]].

## AWS Config Remediation

Remediation is applied using **[[Systems Manager Overview|Systems Manager]] Automation documents**.
- Defines actions to be performed on non-compliant resources.
- Can be triggered automatically when a rule evaluation returns a non-compliant status.

![[aws-config-systems-manager-automation-remediation.png]]

## AWS Config vs. [[CloudTrail Overview|CloudTrail]]

| Feature | AWS Config | CloudTrail |
| :--- | :--- | :--- |
| **Focus** | **WHAT** has changed (Resource configuration) | **WHO** made the change (API calls/Events) |
| **Details** | Point-in-time snapshots and historical states | User, application, and activity performed |
| **Use Case** | Compliance, auditing, change management | Security auditing, operational troubleshooting |

---
**Practice:** [[AWS Config - Practice Questions|AWS Config Practice Questions]]