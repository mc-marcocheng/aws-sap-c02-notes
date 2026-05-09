---
tags:
  - aws
  - sap-c02
  - systems-manager
  - management
---
# Systems Manager (Patch Manager & Automation)

AWS Systems Manager (SSM) is the operational hub for AWS and hybrid environments. For the SAP-C02 exam, understanding deep dive scenarios involving **Patch Manager**, **Automation**, and multi-account operations is critical.

## 1. SSM Patch Manager

Patch Manager automates the process of patching managed instances with both security related and other types of updates. It works for Windows, Linux, and macOS.

### Key Concepts
- **Patch Baselines:** Define which patches should or shouldn't be installed, based on auto-approval rules (e.g., approve all "Critical" security updates 7 days after release).
- **Patch Groups:** A way to group instances (using the tag `Patch Group`). You associate a Patch Baseline with a Patch Group (e.g., `DEV`, `PROD`).
- **Maintenance Windows:** Schedule when patching (or other SSM tasks) occurs. It defines a schedule, targets, and tasks.
- **Operations:** You can run a `Scan` (check for missing patches) or `Scan and install` (apply patches).

### Multi-Account & Multi-Region Patching
To deploy patches across an AWS Organization centrally:
- Use **AWS Systems Manager Quick Setup** or **Systems Manager Explorer**.
- Deploy a **Resource Data Sync** to send patch compliance data from all member accounts/regions into a centralized Amazon S3 bucket, which can be queried using **Amazon Athena** or visualized in Amazon QuickSight.

## 2. SSM Automation

SSM Automation simplifies common IT tasks by executing runbooks (JSON/YAML documents defining steps). 

### Key Features
- **Runbooks:** Pre-defined or custom scripts (e.g., `AWS-RestartEC2Instance`, `AWS-CreateImage`).
- **Approvals:** You can add manual approval steps into an Automation runbook using SNS notifications.
- **Multi-Account/Multi-Region Execution:** You can target instances across different AWS accounts and regions from a central delegated administrator account.
- **Rate Control:** Control the concurrency (`Max concurrency`) and error thresholds (`Max errors`) when running automation across a fleet of instances.

### Integrations
- **EventBridge:** Trigger Automation runbooks based on events (e.g., trigger an EBS snapshot automation when an EC2 instance changes state).
- **Config Rules:** Use SSM Automation as a remediation action for non-compliant AWS Config rules (e.g., automatically attach a strict security group if an open SSH port is detected).

## Strategic Scenarios (SAP-C02)

### Scenario 1: Zero-Day Vulnerability Patching
**Challenge:** A critical zero-day vulnerability is announced. You need to immediately patch all EC2 instances across 50 AWS accounts, bypassing the standard 7-day wait time in your Patch Baselines.
**Solution:** Do NOT modify the standard Patch Baselines. Instead, use a **Patch Exception**. Add the specific CVE or KB article to the `RejectedPatches` (to block) or `ApprovedPatches` (to force install immediately) list in the baseline. Use an on-demand Systems Manager Run Command (using `AWS-RunPatchBaseline`) to execute the patch outside of the regular Maintenance Window.

### Scenario 2: Automated AMI Baking Pipeline
**Challenge:** You need a Golden AMI pipeline that spins up an EC2 instance, applies patches, installs custom software, takes an AMI, and terminates the instance.
**Solution:** Create a custom **SSM Automation Runbook**. Use steps to launch the instance (`aws:executeAwsApi`), run a command to patch and install software (`aws:runCommand`), create the image (`aws:createImage`), and terminate the instance. Trigger this runbook on a schedule via EventBridge or natively via SSM Maintenance Windows.

> [!exam]
> When you need centralized reporting of patch compliance across an AWS Organization, the answer is almost always **Resource Data Sync to S3 + Amazon Athena**.

---
**Practice:** [[Systems Manager - Practice Questions|Systems Manager Practice Questions]]
