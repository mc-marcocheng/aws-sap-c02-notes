---
tags: [aws, sap-c02, organizations, practice-questions]
---
# AWS Organizations Advanced - Practice Questions

> [!question] Question 1: Protecting Centralized Security Controls
> A company uses AWS Organizations and has enabled AWS CloudTrail in all member accounts to send logs to a centralized S3 bucket in a dedicated "Security" account. The CISO mandates that no user in any member account, including those with AdministratorAccess or the local root user, should be able to stop CloudTrail logging or modify the CloudTrail configuration.
> 
> How can a Solutions Architect enforce this requirement?
> 
> 1. In each member account, create an IAM permission boundary that denies `cloudtrail:StopLogging` and attach it to all IAM users and roles.
> 2. In the Organizations Management account, create a Service Control Policy (SCP) that explicitly denies `cloudtrail:StopLogging`, `cloudtrail:UpdateTrail`, and `cloudtrail:DeleteTrail`. Attach this SCP to the root of the organization.
> 3. Create a bucket policy on the centralized S3 bucket that denies any CloudTrail modifications unless the request originates from the Security account.
> 4. Use AWS Config rules to monitor for changes to CloudTrail. If a change is detected, trigger a Lambda function to revert the configuration automatically.
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:**
> > - **B is correct** because Service Control Policies (SCPs) are the only mechanism in AWS that can restrict permissions for all IAM users and roles, **including the root user** of member accounts. Applying an explicit Deny at the root level ensures that no entity within the organization's member accounts can disable the security tooling.
> > - A is incorrect because permission boundaries do not apply to the root user, and local administrators could potentially modify or detach the permission boundary from themselves.
> > - C is incorrect because S3 bucket policies control access to the bucket itself, not the CloudTrail service configuration APIs (`StopLogging`, etc.) occurring within the member accounts.
> > - D is incorrect because while AWS Config and Lambda can provide auto-remediation (reactive), an SCP provides preventative control (proactive), which is better for enforcing strict security mandates.
> > 
> > **Links:** [[Organizations Advanced]], [[Organizations Overview]]

> [!question] Question 2: Delegating GuardDuty Administration
> An organization has a complex multi-account structure managed via AWS Organizations. The Management account is strictly controlled by the Cloud Platform team. A separate Security Operations (SecOps) team has their own dedicated AWS account within the organization. The SecOps team needs to enable and manage Amazon GuardDuty across all existing and future accounts in the organization.
> 
> Which solution meets these requirements while adhering to the principle of least privilege?
> 
> 1. Create an IAM role in the Management account with GuardDuty administrative permissions. Configure a trust policy allowing the SecOps account to assume this role.
> 2. From the Management account, register the SecOps account as a Delegated Administrator for Amazon GuardDuty. The SecOps team can then enable and manage GuardDuty organization-wide from their own account.
> 3. Use CloudFormation StackSets with self-managed permissions to deploy GuardDuty configurations. Give the SecOps team access to the Management account to run the StackSets.
> 4. In the Management account, use AWS Resource Access Manager (RAM) to share the GuardDuty service with the SecOps account.
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:**
> > - **B is correct** because AWS Organizations supports the concept of Delegated Administrator for integrated services like Amazon GuardDuty. By registering the SecOps account as the delegated administrator, you grant them the ability to manage GuardDuty for the entire organization without requiring them to log into or assume roles within the highly restricted Management account.
> > - A is incorrect because giving the SecOps team a role in the Management account violates the principle of least privilege, as they only need to manage GuardDuty, not have presence in the billing/management account.
> > - C is incorrect because self-managed StackSets would require IAM execution roles in every account, and giving SecOps access to the Management account violates the requirements.
> > - D is incorrect because AWS RAM is used for sharing specific resources (like Subnets, Transit Gateways), not for delegating administrative control of an AWS service across an organization.
> > 
> > **Links:** [[Organizations Advanced]]

> [!question] Question 3: Dynamic Cross-Account Access via Organizations
> An application running in an AWS member account needs to publish messages to an Amazon SNS topic located in a central "Shared Services" account. The organization frequently adds new member accounts that will also need to publish to this same SNS topic. The Solutions Architect wants to grant access with the lowest possible administrative overhead as new accounts are added.
> 
> How should the SNS topic policy be configured?
> 
> 1. Create an IAM group in the Shared Services account containing cross-account roles for each member account. Grant this group access to the SNS topic.
> 2. Configure the SNS topic policy to allow `sns:Publish` for `Principal: "*"` and add a condition `StringEquals` with the key `aws:PrincipalOrgID` set to the organization's ID.
> 3. Add an Organizations Service Control Policy (SCP) at the root level that grants `sns:Publish` access to the specific SNS topic ARN.
> 4. Write an AWS Lambda function triggered by AWS Organizations `CreateAccount` events to automatically update the SNS topic policy with the new account ID.
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:**
> > - **B is correct** because using the `aws:PrincipalOrgID` condition key in a resource-based policy (like an SNS topic policy) allows you to dynamically grant access to any principal within the specified AWS Organization. When new accounts are added to the organization, they automatically inherit this access without any manual updates to the policy, minimizing administrative overhead.
> > - A is incorrect because it requires manual creation of roles/groups for each new account, increasing overhead.
> > - C is incorrect because SCPs **do not grant permissions**; they only filter them. An SCP cannot give an account access to an SNS topic.
> > - D is incorrect because while technically possible, maintaining custom Lambda automation is far more complex and has higher overhead than simply using the native `aws:PrincipalOrgID` condition key.
> > 
> > **Links:** [[Organizations Advanced]]
