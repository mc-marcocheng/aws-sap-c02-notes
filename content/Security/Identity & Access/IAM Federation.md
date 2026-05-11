---
tags: [aws, sap-c02, iam, federation, security]
---
# IAM Federation

Identity Federation allows external identities (users from your corporate directory or social providers) to access AWS resources without needing permanent IAM users.

## 1. SAML 2.0 Federation (Enterprise)
Used for integrating with corporate directories like Active Directory (via AD FS), Okta, or Ping Identity.
- **Flow**: User authenticates with IdP -> IdP sends SAML Assertion to browser -> Browser posts assertion to AWS SAML endpoint -> AWS STS returns temporary credentials.
- **API**: Uses `AssumeRoleWithSAML`.
- **Recommendation**: For new federation implementations, **prefer [[IAM Identity Center|AWS IAM Identity Center]]** over direct SAML 2.0 integration for simplified management and better scalability.

## 2. Web Identity Federation (OIDC)
Used for social logins (Google, Facebook, Amazon) or any OpenID Connect compatible provider.
- **API**: Uses `AssumeRoleWithWebIdentity`.
- **Cognito**: **[[Cognito|Amazon Cognito]]** is the recommended identity broker for mobile and web applications. It handles the handshake with multiple IdPs and provides a consistent identity ID.

## 3. Custom Identity Broker
Used when the identity store is not SAML or OIDC compatible (e.g., custom LDAP).
- **Flow**: Application authenticates with Custom Broker -> Broker validates with LDAP -> Broker calls `STS:AssumeRole` -> Broker returns temporary credentials to the app.

## Comparison of Federation Types

| Type | Protocol | Typical Use Case | STS API |
| --- | --- | --- | --- |
| **Enterprise** | SAML 2.0 | Corporate AD / Okta | `AssumeRoleWithSAML` |
| **Web Identity** | OIDC / OAuth2 | Social Login / Cognito | `AssumeRoleWithWebIdentity` |
| **Cross-Account** | AWS IAM | Accessing Resource in Account B | `AssumeRole` |

![[saml-based-federation-diagram.png]]

## Key Concepts
- **Identity Provider (IdP)**: The external service that manages user identities.
- **Trust Policy**: A policy on the IAM Role that defines the IdP as a trusted principal.
- **External ID**: Used in third-party "Confused Deputy" scenarios to ensure the role is only assumed by the intended party.

> [!exam]
> **Confused Deputy Problem**: Occurs when a service (the deputy) is tricked by another party into using its privileges to access a resource it shouldn't. Using an **External ID** in the trust policy is the standard AWS solution for this when granting cross-account access to third-party SaaS providers.

## Related Services
- [[_Security Index|Security Index]]
- [[IAM Identity Center]]
- [[Cognito]]
- [[IAM]]

---
**Practice:** [[IAM Federation - Practice Questions|IAM Federation Practice Questions]]