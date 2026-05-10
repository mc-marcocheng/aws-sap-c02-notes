---
tags: [aws, sap-c02, iam, security]
---
# IAM Best Practices

Adhering to the Principle of Least Privilege and securing the AWS Root account are foundational to a secure AWS environment.

## 1. Root Account Security
- **Lock away access keys**: Do not use the root account for daily tasks.
- **MFA**: Enable Multi-Factor Authentication (MFA) on the root account immediately.
- **No Access Keys**: Delete root access keys if they exist.

## 2. Identity Management
- **Individual Users**: Create individual IAM users instead of sharing credentials.
- **Groups**: Use IAM Groups to assign permissions to users based on job functions.
- **Roles for EC2**: Use IAM Roles for applications running on [[EC2 Overview|EC2]] instead of long-term access keys.
- **Identity Federation**: Use federation (SAML 2.0 or OIDC) for corporate users to avoid creating IAM users.

## 3. Privilege Management
- **Least Privilege**: Grant only the permissions required to perform a task.
- **Permissions Boundaries**: Use boundaries to set the maximum permissions that an identity-based policy can grant.
- **Service Control Policies (SCPs)**: Use SCPs in [[Organizations Overview|AWS Organizations]] to restrict permissions at the account level.

## 4. Auditing and Monitoring
- **IAM Access Analyzer**: Use it to identify resources shared with external entities and to generate least-privilege policies based on [[CloudTrail]] activity.
- **Credential Report**: Regularly audit user credentials and MFA status.
- **CloudTrail**: Enable CloudTrail to log all API calls for auditing.

## 5. Credential Rotation
- **Rotate Keys**: Regularly rotate access keys for any IAM users that require them.
- **Strong Password Policy**: Enforce complexity and rotation requirements.

> [!exam]
> **SAP-C02 Key Concept: Permissions Boundaries**
> Permissions boundaries are often tested in scenarios where you need to delegate IAM administration to a user but want to ensure they cannot grant themselves (or others) more than a specific set of permissions.

---
### IAM Best Practices Checklist

| Category | Best Practice |
| --- | --- |
| **Root** | MFA Enabled, No Access Keys |
| **Users** | Individual Accounts, Group-based permissions |
| **Applications** | Use IAM Roles (Temporary Credentials) |
| **Governance** | Use IAM Access Analyzer & Credential Reports |
| **Least Privilege** | Start with zero permissions, add as needed |

## Related Services
- [[_Security Index|Security Index]]
- [[IAM]]
- [[Organizations Overview]]
- [[CloudTrail]]
- [[EC2 Overview]]

---
**Practice:** [[IAM Best Practices - Practice Questions|IAM Best Practices Practice Questions]]