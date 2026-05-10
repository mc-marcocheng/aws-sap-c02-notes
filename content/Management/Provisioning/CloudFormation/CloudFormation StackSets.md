---
tags: [aws, sap-c02, management, cloudformation, stacksets]
---
# CloudFormation StackSets

AWS CloudFormation StackSets extends the functionality of stacks by enabling you to create, update, or delete stacks across multiple accounts and regions with a single operation. Using an administrator account, you define and manage an AWS CloudFormation template, and use the template as the basis for provisioning stacks into selected target accounts across specified regions.

## Key Features
- **Multi-Account / Multi-Region Deployments**: Easily deploy infrastructure to multiple AWS accounts and regions simultaneously.
- **Drift Detection**: Detect drift on stack instances to ensure compliance with the original template.
- **Automatic Deployment**: Automatically deploy to new accounts added to an [[Organizations Overview|AWS Organization]] (when using Service-Managed permissions).
- **Concurrency & Fault Tolerance**: Configure maximum concurrent accounts and failure tolerance thresholds during deployments.

## Permission Models

| Feature | Self-Managed Permissions | Service-Managed Permissions |
| :--- | :--- | :--- |
| **Prerequisites** | [[IAM Roles and Policies|IAM Roles]] (Administration and Execution roles) created manually in each target account. | [[Organizations Overview|AWS Organizations]] with "All Features" enabled. |
| **Targeting** | Specific AWS Account IDs. | Organizational Units (OUs) or the entire Organization. |
| **Automatic Deployments** | No. Must manually deploy to new accounts. | Yes. Automatically deploys to new accounts added to targeted OUs. |
| **Management Account** | Any AWS Account. | Management Account or Delegated Administrator account. |

## Architecture & Concepts
- **StackSet**: A regional resource that contains a CloudFormation template and deployment configurations.
- **Stack Instance**: A reference to a stack in a target account and region.
- **StackSet Operation**: Actions such as create, update, or delete applied to a StackSet.

> [!important]
> StackSets are regional resources. If you create a StackSet in `us-east-1`, you must manage it from `us-east-1`, even if it deploys resources to other regions.

## Use Cases
- Deploying baseline IAM roles and policies to all accounts in an organization.
- Enabling [[Config|AWS Config]] and centralized logging across multiple regions and accounts.
- Provisioning standardized [[VPC Overview|VPC]] architectures for new developer accounts.

## Strategic Scenarios

> [!exam]
> **SAP-C02 Scenario: Centralized Baseline Deployment**
> *Scenario:* A company frequently creates new AWS accounts via AWS Organizations. They need a way to automatically deploy a baseline set of IAM roles and [[CloudTrail]] configurations to every new account without manual intervention.
> *Solution:* Use **CloudFormation StackSets with Service-Managed permissions**. Target the Root OU (or specific nested OUs) and enable **Automatic Deployments**. CloudFormation will use the Organizations integration to automatically deploy the baseline template whenever a new account joins the targeted OU.

> [!exam]
> **SAP-C02 Scenario: Delegated Administration**
> *Scenario:* The security team needs to manage their own StackSets across the organization for security tooling, but they should not have access to the Organizations management account.
> *Solution:* Register the security team's AWS account as a **Delegated Administrator** for CloudFormation StackSets in AWS Organizations. The security team can then create Service-Managed StackSets from their own account.

---
## Related Services
- [[_Management Index|Management Index]]
- [[CloudFormation Overview|AWS CloudFormation]]
- [[Organizations Overview|AWS Organizations]]
- [[Config|AWS Config]]
- [[CloudTrail|AWS CloudTrail]]

---
**Practice:** [[CloudFormation StackSets - Practice Questions|CloudFormation StackSets Practice Questions]]
