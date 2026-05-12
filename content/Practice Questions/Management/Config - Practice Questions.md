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
> > **Rationale:** [[Config]] is the primary service for tracking configuration changes over time for supported resources. For services not yet supported by Config, using the AWS SDKs/APIs to programmatically query and record state is the recommended supplemental approach. Tagging and [[CloudTrail]] (Option 4) provide activity logs but not the detailed configuration history and relationship mapping provided by Config.

> [!question]
> Fill the blanks: \_\_\_\_ helps us track AWS API calls and transitions, \_\_\_\_ helps to understand what resources we have now, and \_\_\_\_ allows auditing credentials and logins.
> 1. AWS Config, CloudTrail, IAM Credential Reports
> 2. CloudTrail, IAM Credential Reports, AWS Config
> 3. CloudTrail, AWS Config, IAM Credential Reports
> 4. AWS Config, IAM Credential Reports, CloudTrail
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** [[CloudTrail]] records API calls and account activity (WHO/WHEN). [[Config]] provides a detailed inventory and configuration history of resources (WHAT/Current State). [[IAM]] Credential Reports are used specifically for auditing user credentials, MFA status, and last login activity.

> [!question]
> A central compliance team needs to monitor the configuration compliance of 500 AWS accounts in an Organization. They want to see a single dashboard that shows the compliance status of all "S3 Bucket Public Read Prohibited" rules across all accounts. What is the most efficient way to achieve this?
> 1. Write a script that uses the AWS CLI to query each account's Config status and aggregates the results in a CSV.
> 2. Create a **Config Aggregator** in a central security account and authorize the Organization to provide data to it.
> 3. Use AWS Organizations to deploy a Service Control Policy (SCP) that blocks public S3 buckets.
> 4. Use CloudWatch Dashboards with cross-account functionality to visualize Config metrics.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** A **Config Aggregator** (Option 2) is a native [[Config]] feature that collects configuration and compliance data from multiple accounts and regions into a single account. When integrated with AWS Organizations, it can automatically include all accounts in the Organization, providing the required centralized dashboard with minimal effort. (See [[Config]])
