---
tags: [aws, sap-c02, systems-manager]
---
# Systems Manager Overview

AWS Systems Manager (SSM) provides a unified user interface so you can view operational data from multiple AWS services and allows you to automate operational tasks across your AWS resources.

## Key Capabilities

### 1. Operations Management
- **OpsCenter**: Central location to view and resolve operational work items (OpsItems).
- **Explorer**: Operations dashboard providing a view of your AWS resource data.

### 2. Application Management
- **Parameter Store**: Secure, hierarchical storage for configuration data (AMI IDs, license keys) and secrets. Integrates with **KMS**.
- **AppConfig**: Helps you create, manage, and quickly deploy application configurations.

### 3. Change Management
- **Automation**: Simplifies common maintenance and deployment tasks (e.g., patching AMIs, updating drivers).
- **Maintenance Windows**: Define recurring schedules for administrative tasks.

### 4. Node Management
- **Run Command**: Securely manage the configuration of your managed nodes at scale without SSH/bastion hosts.
- **Session Manager**: Interactive browser-based shell and CLI access to instances. **Provides an audit log of all commands.**
- **Patch Manager**: Automates the process of patching managed nodes with security updates. Uses **Patch Baselines** and **Patch Groups**.
- **Inventory**: Collects metadata from managed nodes (OS, applications, network settings).
- **State Manager**: Maintains your managed nodes in a defined state (e.g., ensuring a specific agent is always running).

## SSM Agent
- Software that must be installed on your nodes (EC2, on-premises VMs) to communicate with Systems Manager.
- Pre-installed on most Amazon-provided AMIs.

## Parameter Store vs. Secrets Manager
| Feature | Parameter Store | Secrets Manager |
| --- | --- | --- |
| **Primary Use** | Configuration & Basic Secrets | Sensitive Secrets (DB Credentials) |
| **Rotation** | Manual / Custom Lambda | **Native / Automatic** |
| **Cost** | Free (Standard) | Paid per secret |
| **DR** | Manual Cross-Region | **Native Cross-Region Replication** |

> [!exam]
> **SAP-C02 Tip: Bastion Hosts vs. Session Manager**
> If the requirement is to provide secure access to instances without the overhead of managing SSH keys or bastion hosts, **Session Manager** is the correct answer.

---
**Practice:** [[Systems Manager - Practice Questions|Systems Manager Practice Questions]]