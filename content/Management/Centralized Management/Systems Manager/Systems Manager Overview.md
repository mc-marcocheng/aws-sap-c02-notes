---
tags: [aws, sap-c02, management, systems-manager]
---
# Systems Manager Overview

AWS Systems Manager (SSM) provides a unified user interface so you can view operational data from multiple AWS services and allows you to automate operational tasks across your AWS resources.

## Key Capabilities

### 1. Operations Management
- **OpsCenter**: Central location to view and resolve operational work items (OpsItems).
- **Explorer**: Operations dashboard providing a view of your AWS resource data.

### 2. Application Management
- **Parameter Store**: Secure, hierarchical storage for configuration data (AMI IDs, license keys) and secrets. Integrates with **[[KMS]]**.
    - **Hierarchy**: Support structure like `/prod/db/password` for easy management and permissions.
    - **Policies**: Supports policies for expiration notifications (TTL) and versioning.
- **AppConfig**: Helps you create, manage, and quickly deploy application configurations.

### 3. Change Management
- **Automation**: Simplifies common maintenance and deployment tasks (e.g., patching AMIs, updating drivers).
- **Maintenance Windows**: Define recurring schedules for administrative tasks. Integrates with **Run Command**.

### 4. Node Management
- **Run Command**: Execute scripts and commands across hundreds of instances at scale without SSH. Integrates with maintenance windows.
- **Session Manager**: Secure interactive shell access to EC2 without opening port 22 or managing SSH keys. Auditable via **[[CloudTrail]]** and CloudWatch Logs.
- **Patch Manager**: Automates the process of patching managed nodes with security updates. Uses **Patch Baselines** and **Patch Groups**.
- **Inventory**: Collects metadata from managed nodes (OS, applications, network settings).
- **State Manager**: Maintains your managed nodes in a defined state (e.g., ensuring a specific agent is always running).

## SSM Agent & Access Requirements
- **SSM Agent**: Must be installed and running on nodes (EC2, on-premises VMs). Pre-installed on most Amazon-provided AMIs.
- **IAM Role**: The instance must have an IAM role with the **`AmazonSSMManagedInstanceCore`** policy attached. This is the #1 troubleshooting step for SSM connectivity.
- **Network**: The instance must have outbound access to SSM endpoints (via IGW, NAT Gateway, or **VPC Endpoints**).

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

## Related Services
- [[_Management Index|Management Index]]
- [[KMS]]
- [[Secrets Manager]]

---
**Practice:** [[Systems Manager - Practice Questions|Systems Manager Practice Questions]]