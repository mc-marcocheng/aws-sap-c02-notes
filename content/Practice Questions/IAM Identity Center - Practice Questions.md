---
tags: [aws, sap-c02, iam-identity-center, practice-questions]
---
# IAM Identity Center Practice Questions

> [!question]
> A large enterprise uses AWS Organizations with hundreds of accounts. They currently use an on-premises Active Directory and want to provide their developers with SSO access to the AWS Management Console across all accounts. The solution must minimize administrative overhead and avoid syncing passwords to AWS. Which solution meets these requirements?
> 1. Set up a SAML identity provider in each AWS account using IAM and establish a trust relationship with the on-premises ADFS.
> 2. Enable AWS IAM Identity Center in the Organizations management account. Configure AD Connector to connect to the on-premises Active Directory. Assign access using Permission Sets.
> 3. Use AWS Directory Service for Microsoft Active Directory (AWS Managed Microsoft AD) and establish a two-way trust with the on-premises AD. Use IAM roles in each account.
> 4. Create an Amazon Cognito User Pool federated with the on-premises Active Directory. Configure API Gateway to handle console access requests.
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[IAM Identity Center]] is the ideal solution for multi-account SSO via [[Organizations Overview|AWS Organizations]]. Using AD Connector ensures that authentication is forwarded to the on-premises AD without syncing passwords or users to AWS, minimizing overhead.

> [!question]
> A company manages its workforce identities in an external identity provider (IdP) like Okta. They are using AWS IAM Identity Center for AWS account access. The security team wants to ensure that when a user is deactivated in Okta, their access to AWS is revoked immediately without manual intervention in AWS. How can this be achieved?
> 1. Configure a Lambda function to poll the Okta API hourly and update IAM Identity Center.
> 2. Enable SAML 2.0 Just-in-Time (JIT) provisioning in IAM Identity Center.
> 3. Configure SCIM (System for Cross-domain Identity Management) provisioning between Okta and IAM Identity Center.
> 4. Use AWS CloudTrail to detect user deactivations and trigger an EventBridge rule to disable the user in AWS.
>
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** SCIM is an open standard that allows for the automation of user provisioning and de-provisioning. By configuring SCIM, Okta can push user lifecycle events (like deactivation) directly to [[IAM Identity Center]] in near real-time.

> [!question]
> A company is using AWS IAM Identity Center and wants to implement Attribute-Based Access Control (ABAC) to simplify permission management. They want developers to only access EC2 instances tagged with a `Department` key that matches the user's department in their corporate directory (Azure AD). How should this be implemented?
> 1. Create a different Permission Set for every department and manually assign users to the correct Permission Set.
> 2. Map the department attribute from Azure AD in the IAM Identity Center attribute mappings. Create a single Permission Set with an IAM policy that uses the `aws:PrincipalTag/Department` condition key to match the `ResourceTag/Department`.
> 3. Configure Azure AD to pass the department as an IAM role name, and configure IAM Identity Center to assume the matching role.
> 4. Write an AWS Config rule to automatically terminate EC2 instances if accessed by users from the wrong department.
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** This is the standard ABAC pattern. By mapping IdP attributes (like Department) into [[IAM Identity Center]], they become session tags (`aws:PrincipalTag`). A single Permission Set can then dynamically evaluate access based on resource tags (`aws:ResourceTag`).