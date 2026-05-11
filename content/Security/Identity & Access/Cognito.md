---
tags: [aws, sap-c02, cognito, security]
---
# Amazon Cognito

Amazon Cognito provides authentication, authorization, and user management for web and mobile apps.

## Key Features
- **User Pools:** Directories that provide sign-up and sign-in options for your app users. **User Pools issue JWT tokens** upon successful authentication. Supports federation with Identity Providers (IdP) like Google, Facebook, Amazon, Apple, and SAML/OIDC.
- **Identity Pools (Federated Identities):** Enable you to grant users access to other AWS services (like [[S3 Overview|S3]] and [[DynamoDB Overview|DynamoDB]]). **Identity Pools exchange JWT tokens for temporary AWS credentials** via STS.
- **Cognito Sync:** (Legacy) Use AWS AppSync for new implementations.

## SAP-C02 Key Facts & Architectural Patterns
- **Web Identity Federation Flow:**
    - User authenticates → User Pool → JWT → Identity Pool → STS credentials → Access AWS resources.
- **Lambda Triggers:** Customize authentication workflows (e.g., pre sign-up, custom authentication challenge, post authentication). Useful for migrating users without forcing password resets.
- **ALB Integration:** [[ALB Overview|ALB]] can authenticate users directly with a Cognito User Pool before routing traffic to targets.
- **API Gateway Integration:** [[API Gateway]] can use Cognito User Pools as an authorizer to protect REST APIs.

> [!exam]
> When integrating [[ALB Overview|ALB]] or [[API Gateway]] for authentication, use Cognito **User Pools**, not Identity Pools.
> If you need to give users direct access to AWS resources (e.g., mobile app directly uploading to an [[S3 Overview|S3]] bucket), you MUST use **Identity Pools**.
> For seamless migration of users to Cognito with existing passwords, use the **User Migration Lambda trigger**.

## Related Services
- [[_Security Index|Security Index]]
- [[S3 Overview]]
- [[DynamoDB Overview]]
- [[ALB Overview]]
- [[API Gateway]]

---
**Practice:** [[Cognito - Practice Questions|Cognito Practice Questions]]