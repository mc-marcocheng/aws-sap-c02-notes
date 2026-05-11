---
tags: [aws, sap-c02, iam, security]
---
# IAM Overview

AWS Identity and Access Management (IAM) is a web service that helps you securely control access to AWS resources. It controls both **Authentication** (Who) and **Authorization** (What).

## Core Components
- **IAM Users**: Represents a person or service. Starts with NO permissions.
- **IAM Groups**: A collection of users. Policies attached to a group apply to all users in that group.
- **IAM Roles**: An identity intended to be assumed by anyone who needs it (users, services, or external identities). Uses temporary credentials.
- **IAM Policies**: JSON documents that define permissions (Allow/Deny).

## Policy Types
1. **Identity-based Policies**: Attached to users, groups, or roles.
2. **Resource-based Policies**: Attached to resources (e.g., [[S3 Overview|S3]] Bucket Policies, [[KMS]] Key Policies).
3. **Permissions Boundaries**: Sets the maximum permissions an identity can have.
4. **Service Control Policies (SCPs)**: Applied at the [[Organizations Overview|AWS Organizations]] level to restrict accounts.

## Key Features
- **Shared Access**: Grant permissions without sharing passwords/keys.
- **Granular Permissions**: Fine-grained control over specific API actions and resources.
- **Identity Federation**: Integrate with external IdPs (SAML, OIDC).
- **MFA**: Adds a second layer of security.
- **Eventually Consistent**: Changes to IAM (policies, users) may take a few seconds to propagate globally.

## Evaluation Logic
1. **Explicit Deny**: If any applicable policy has a `Deny`, the request is denied.
2. **Explicit Allow**: If no `Deny` exists and there is an `Allow`, the request is allowed.
3. **Default Deny**: If no `Deny` or `Allow` is found, the request is denied (Implicit Deny).

> [!exam]
> **Policy Evaluation (SAP-C02 Focus)**:
> - **Same-account**: An `Allow` in either an identity-based policy **OR** a resource-based policy is sufficient.
> - **Cross-account**: You must have an `Allow` in **BOTH** the identity-based policy (Account A) **AND** the resource-based policy (Account B).
> Understand that **Resource-based policies** (like S3 Bucket policies) allow the resource to define who can access it, whereas **Identity-based policies** define what a user can access.

## Related Services
- [[_Security Index|Security Index]]
- [[Organizations Overview]]
- [[KMS]]
- [[S3 Overview]]
- [[Cognito]]

---
**Practice:** [[IAM - Practice Questions|IAM Practice Questions]]