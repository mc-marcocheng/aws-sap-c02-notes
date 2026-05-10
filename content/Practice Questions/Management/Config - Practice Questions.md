---
tags: [aws, sap-c02, config, management, practice-questions]
---
# AWS Config Practice Questions

> [!question]
> One of the challenges in managing AWS resources is to keep track of changes in the resource configuration over time. Which one of the following statements provide the best solution?
> 1. Use strict syntax tagging on the resources
> 2. Create a custom application to automate the configuration management process
> 3. Use AWS Config for supported services and use an automated process via APIs for unsupported services
> 4. Use resource groups and tagging along with CloudTrail so that you can audit changes using the logs
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** [[Config]] is the primary service for tracking configuration changes over time for supported resources. For services not yet supported by Config, using the AWS SDKs/APIs to programmatically query and record state is the recommended supplemental approach. Tagging and [[CloudTrail|CloudTrail]] (Option 4) provide activity logs but not the detailed configuration history and relationship mapping provided by Config.

> [!question]
> Fill the blanks: \_\_\_\_ helps us track AWS API calls and transitions, \_\_\_\_ helps to understand what resources we have now, and \_\_\_\_ allows auditing credentials and logins.
> 1. AWS Config, CloudTrail, IAM Credential Reports
> 2. CloudTrail, IAM Credential Reports, AWS Config
> 3. CloudTrail, AWS Config, IAM Credential Reports
> 4. AWS Config, IAM Credential Reports, CloudTrail
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** [[CloudTrail|CloudTrail]] records API calls and account activity (WHO/WHEN). [[Config]] provides a detailed inventory and configuration history of resources (WHAT/Current State). [[IAM|IAM]] Credential Reports are used specifically for auditing user credentials, MFA status, and last login activity.
