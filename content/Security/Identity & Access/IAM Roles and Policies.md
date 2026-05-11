---
tags: [aws, sap-c02, iam, security]
---
# IAM Roles and Policies

IAM Roles are the preferred way to delegate permissions to AWS services, cross-account users, and federated identities.

## IAM Roles
Unlike a user, a role does not have long-term credentials. Instead, it provides **temporary security credentials** (via AWS STS) when assumed.

### Common Use Cases
- **AWS Service Roles**: Allowing [[EC2 Overview|EC2]] to access [[S3 Overview|S3]] or [[Lambda]] to access [[DynamoDB Overview|DynamoDB]].
- **Cross-Account Access**: Allowing a user in Account A to manage resources in Account B without creating a new user in Account B.
- **Identity Federation**: Allowing users authenticated by an external IdP (like Okta or Google) to access AWS.

### Policies for Roles
1. **Trust Policy**: Defines **WHO** can assume the role (the Principal).
2. **Permissions Policy**: Defines **WHAT** actions the role can perform once assumed.

## Instance Profiles
- A container for an IAM role that you use to pass role information to an EC2 instance.
- When you use the Console to assign a role to EC2, AWS creates the instance profile for you. Via CLI, you must create it manually.

## AWS STS (Security Token Service)
The global service that issues temporary credentials.
- `AssumeRole`: Used for cross-account and service-to-service access.
- `AssumeRoleWithSAML`: Used for SAML 2.0 federation.
- `AssumeRoleWithWebIdentity`: Used for OIDC/social login federation.
- **Session Policies**: Optional policies passed as a parameter during `AssumeRole` (and other STS calls) to further restrict the permissions of the resulting session. The session's effective permissions are the intersection of the role's permissions and the session policy.

## Cross-Account Access Flow
1. **Account B** (Trusting) creates a role with a **Trust Policy** allowing **Account A** (Trusted).
2. **Account A** user calls `sts:AssumeRole` for the role in Account B.
3. **Account A** user receives temporary credentials and performs actions in Account B.

![[roles-usingroletodelegate.png]]

> [!exam]
> **Confused Deputy & External ID**: If you are a SaaS provider accessing customer accounts, always require an **External ID** in the trust policy to prevent the confused deputy problem. This ensures that you only assume a customer's role when acting on behalf of *that* specific customer.

## Service-Linked Roles
- Specialized roles linked directly to an AWS service.
- The service defines the permissions, and you cannot edit them. These allow services (like Auto Scaling or Lex) to call other services on your behalf.

## Related Services
- [[_Security Index|Security Index]]
- [[IAM]]
- [[EC2 Overview]]
- [[S3 Overview]]
- [[Lambda]]
- [[DynamoDB Overview]]

---
**Practice:** [[IAM Roles - Practice Questions|IAM Roles Practice Questions]]