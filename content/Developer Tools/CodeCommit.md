---
tags: [aws, sap-c02, codecommit]
---
# CodeCommit

AWS CodeCommit is a fully managed source control service that hosts secure Git-based repositories. It makes it easy for teams to collaborate on code in a highly scalable and secure ecosystem.

## 1. Features
- **Git-Compatible**: Uses standard Git commands and tools.
- **Security**: Data is encrypted in transit and at rest. Integrated with IAM for granular access control.
- **Highly Available**: Architecture is highly available and scalable across multiple Availability Zones.
- **Triggers and Notifications**: Can trigger SNS notifications, Lambda functions, or EventBridge rules on repository events (e.g., commit, PR creation).

## 2. Authentication
- **HTTPS with Git Credentials**: Generate Git credentials inside the IAM console.
- **SSH**: Upload an SSH public key to your IAM user and configure your `.ssh/config`.
- **Credential Helper**: Uses your AWS CLI credentials (and IAM roles/temporary credentials) to authenticate to the repo via HTTPS. This is critical for federated users or CI/CD services.

## 3. Use Cases
- Private, secure source code hosting.
- Compliance environments requiring strict IAM controls over source code.
- Storing infrastructure as code (CloudFormation, Terraform) or configuration scripts securely.

## Strategic Scenarios (SAP-C02)
- **Cross-Account Access**: To allow a CI/CD pipeline in Account A to access a CodeCommit repo in Account B, Account A's pipeline role must assume a role in Account B that has read permissions on the CodeCommit repository.
- **Federated Access**: Users authenticating via AWS IAM Identity Center (SSO) cannot use SSH keys or standard Git HTTP credentials generated in IAM. They **must** use the AWS CLI credential helper `git-remote-codecommit` to access repositories using temporary STS tokens.
- **Enforcing Code Reviews**: Use IAM policies to deny `codecommit:GitPush` to the `main` or `master` branch. Require developers to use Pull Requests. Combine this with Approval Rule Templates to enforce a minimum number of approvals before merging.

> [!important]
> Federated users (SAML/OIDC/IAM Identity Center) MUST use `git-remote-codecommit` (HTTPS) as they do not have permanent IAM users to attach SSH keys or Git credentials to.

> [!exam]
> Watch for questions about securing the `main` branch. The answer usually involves setting IAM policies with a `Condition` block checking the branch name, or using CodeCommit Approval Rule Templates.

---
**Practice:** [[CodeCommit - Practice Questions|CodeCommit Practice Questions]]
