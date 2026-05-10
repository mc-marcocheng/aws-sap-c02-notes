---
tags: [aws, sap-c02, cognito]
---
# Amazon Cognito

Amazon Cognito provides authentication, authorization, and user management for web and mobile apps.

## Key Features
- **User Pools:** Directories that provide sign-up and sign-in options for your app users. Supports federation with Identity Providers (IdP) like Google, Facebook, Amazon, Apple, and SAML/OIDC.
- **Identity Pools (Federated Identities):** Enable you to grant users access to other AWS services (like [[S3 Overview|S3]] and [[DynamoDB Overview|DynamoDB]]). You can provide temporary AWS credentials to users who have authenticated via User Pools or external IdPs.
- **Cognito Sync:** (Legacy) Use AWS AppSync for new implementations.

## SAP-C02 Key Facts & Architectural Patterns
- **Web Identity Federation:** Authenticate via IdP -> Get JWT Token -> Exchange for AWS Credentials via Identity Pool -> Access AWS Resources.
- **Lambda Triggers:** Customize authentication workflows (e.g., pre sign-up, custom authentication challenge, post authentication). Useful for migrating users without forcing password resets.
- **ALB Integration:** [[ALB Overview|ALB]] can authenticate users directly with a Cognito User Pool before routing traffic to targets.
- **API Gateway Integration:** [[API Gateway|API Gateway]] can use Cognito User Pools as an authorizer to protect REST APIs.

> [!exam]
> When integrating [[ALB Overview|ALB]] or [[API Gateway|API Gateway]] for authentication, use Cognito **User Pools**, not Identity Pools.
> If you need to give users direct access to AWS resources (e.g., mobile app directly uploading to an [[S3 Overview|S3]] bucket), you MUST use **Identity Pools**.
> For seamless migration of users to Cognito with existing passwords, use the **User Migration Lambda trigger**.

---
**Practice:** [[Cognito - Practice Questions|Cognito Practice Questions]]