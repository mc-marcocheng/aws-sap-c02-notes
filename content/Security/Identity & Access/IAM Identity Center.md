---
tags: [aws, sap-c02, iam-identity-center, security]
---
# AWS IAM Identity Center (formerly AWS SSO)

AWS IAM Identity Center is the recommended service for centrally managing workforce access to multiple AWS accounts and business applications.

## Key Features
- **Centralized Access Management:** Integrate with [[Organizations Overview|AWS Organizations]] to manage SSO access across all member accounts.
- **Identity Sources:** Can act as an identity provider itself, or connect to external identity providers like Active Directory (via AWS Managed Microsoft AD or AD Connector) or external SAML 2.0 IdPs (Okta, Azure AD, Ping, etc.).
- **Permission Sets:** A collection of IAM policies (managed or inline) that you assign to users or groups. These are translated into IAM roles in the target AWS accounts.
- **Application Integration:** Provides SSO for AWS applications (like Amazon Q, SageMaker Studio) and third-party SAML 2.0 business applications.

## SAP-C02 Key Facts & Architectural Patterns
- **ABAC (Attribute-Based Access Control):** IAM Identity Center supports ABAC by passing user attributes from the identity source (e.g., cost center, department) in the SAML assertion, which can be mapped to AWS tags in Permission Sets.
- **Automated Provisioning:** Supports SCIM (System for Cross-domain Identity Management) to automatically sync user and group identities from an external IdP (like Azure AD or Okta) into IAM Identity Center.
- **Multi-Region Resiliency:** IAM Identity Center is deployed in a single region. If that region goes down, SSO login is unavailable (though existing active sessions/temporary credentials may continue until expiration). 

> [!exam]
> If you have a multi-account structure via [[Organizations Overview|Organizations]] and need centralized user access, **IAM Identity Center** is the correct answer.
> For mapping Active Directory users to AWS accounts, use IAM Identity Center + AD Connector.
> Differentiate between IAM Identity Center (workforce access/SSO) and [[Cognito]] (customer/app user authentication).

## Related Services
- [[_Security Index|Security Index]]
- [[Organizations Overview]]
- [[Cognito]]
- [[Directory Service]]

---
**Practice:** [[IAM Identity Center - Practice Questions|IAM Identity Center Practice Questions]]