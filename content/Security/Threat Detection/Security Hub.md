---
tags: [aws, sap-c02, security]
---
# AWS Security Hub

AWS Security Hub is a cloud security posture management (CSPM) service that performs security best practice checks, aggregates alerts, and enables automated remediation.

## Key Functions
- **Consolidated Findings**: Aggregates findings from multiple AWS services and third-party partners.
- **Security Standards**: Automatically checks your environment against standards like:
    - **AWS Foundational Security Best Practices**
    - **CIS AWS Foundations Benchmark**
    - **PCI DSS**
- **Cross-Region Aggregation**: Supports aggregating findings from multiple regions into a single administrator account.
- **Multi-Account Management**: Integrates with **[[Organizations Overview|AWS Organizations]]** to manage security posture across all accounts.

## Integration Sources
Security Hub consumes findings from:
- **Amazon [[GuardDuty]]** (Threat detection)
- **Amazon [[Inspector]]** (Vulnerability scanning)
- **Amazon [[Macie]]** (Sensitive data discovery)
- **IAM Access Analyzer** (Resource access monitoring)
- **AWS [[Firewall Manager]]** (Firewall policy management)

![[product-page-diagram-aws-security-hub-402x-7e7c0483e9ce1507af2e9214247a1825a27d6bde.png]]

## Automation and Remediation
- **Amazon [[EventBridge]]**: Findings can trigger EventBridge rules for automated remediation (e.g., triggering a Lambda function to fix a misconfiguration).
- **Custom Actions**: Users can define manual or automated actions for specific findings.

> [!important] Prerequisites
> **AWS [[Config]]** must be enabled on all accounts and regions where you want Security Hub to perform security checks, as it uses Config rules under the hood.

> [!exam]
> For SAP-C02, think of Security Hub as the **"Single Pane of Glass"** for security findings. If the goal is to aggregate security alerts from multiple accounts and services into a centralized dashboard, Security Hub is the answer.

## Related Services
- [[_Security Index|Security Index]]
- [[GuardDuty]]
- [[Inspector]]
- [[Macie]]
- [[Config]]

---
**Practice:** [[Security Hub - Practice Questions|Security Hub Practice Questions]]