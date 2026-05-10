---
tags: [aws, sap-c02, organizations]
---
# Organizations Overview

AWS Organizations is an account management service that enables you to consolidate multiple AWS accounts into an organization that you create and centrally manage.

## Hierarchical Structure
- **Root**: The parent container for all accounts.
- **Organizational Unit (OU)**: A container for accounts. OUs can be nested up to 5 levels deep.
- **Management Account**: The primary account (formerly Master account) that manages billing and policies.
- **Member Account**: All other accounts in the organization.

## Key Features
- **Consolidated Billing**: Pay for all accounts from the management account and benefit from volume discounts.
- **Service Control Policies (SCPs)**: JSON policies that specify the maximum available permissions for an OU or account. **SCPs do not grant permissions; they filter them.**
- **Trusted Access**: Allows other AWS services (like CloudTrail, Config, GuardDuty) to integrate with Organizations to perform actions across all accounts.
- **Tag Policies**: Enforce consistent tagging across resources.
- **Backup Policies**: Centrally manage AWS Backup schedules.

## Feature Sets
1. **Consolidated Billing only**: Only provides billing features.
2. **All Features**: (Recommended) Includes billing plus advanced governance (SCPs, account management).

## Service Control Policies (SCPs)
- **Evaluation**: The effective permission is the intersection of the SCP and the IAM policy.
- **Default**: `FullAWSAccess` is attached to all nodes.
- **Inheritance**: Policies applied at a higher level (e.g., Root) are inherited by all child OUs and accounts.
- **Logic**: Explicit `Deny` in an SCP always overrides any `Allow`.

![[aws-organizations-terminology-and-concepts.png]]

> [!exam]
> **SAP-C02 Scenario: Restricting Regions**
> To ensure no accounts in your organization can launch resources in unapproved regions, use an **SCP** with a `Deny` action on all services where `aws:RequestedRegion` is not in the approved list. This applies even to the root user of the member accounts.

---
**Practice:** [[Organizations - Practice Questions|Organizations Practice Questions]]