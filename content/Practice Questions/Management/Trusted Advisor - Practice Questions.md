---
tags: [aws, sap-c02, trusted-advisor, practice-questions]
---
# AWS Trusted Advisor Practice Questions

> [!question]
> AWS Trusted Advisor provides recommendations in which of the following categories? (Choose 2 answers)
> 1. Cost Optimization
> 2. Vulnerability Scanning
> 3. Performance
> 4. Operating System Patching
> 5. Application Code Analysis
> 
> > [!success]- Answer & Rationale
> > **Answer: 1, 3**
> > **Rationale**: [[Trusted Advisor]] provides recommendations across five categories: Cost Optimization, Performance, Security, Fault Tolerance, and Service Limits. It does not perform deep vulnerability scanning of instances (that's [[Inspector]]), nor does it analyze application code or manage OS patching (that's [[Systems Manager Patch Manager & Automation|Systems Manager]]).

> [!question]
> Which category of AWS Trusted Advisor specifically helps you stay within your service quotas?
> 1. Security
> 2. Fault Tolerance
> 3. Service Limits
> 4. Performance
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale**: The **Service Limits** category in [[Trusted Advisor]] checks your account's usage against the default service quotas (limits) for various AWS services and alerts you as you approach those limits.

> [!question]
> A company wants to programmatically receive notifications from AWS Trusted Advisor when their service limits reach a specific threshold. Which AWS service can be used to achieve this?
> 1. Amazon CloudWatch
> 2. Amazon SNS
> 3. AWS Lambda
> 4. Amazon CloudWatch Events
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale**: [[Trusted Advisor]] integrates with **Amazon EventBridge** (formerly CloudWatch Events). You can create rules that trigger based on changes in Trusted Advisor check results (e.g., when a check status changes to "Warning" or "Error"). These events can then trigger actions like sending a notification via [[SNS]] or invoking a [[Lambda]] function.

> [!question]
> A company has over 200 AWS accounts managed through AWS Organizations. The security team wants to programmatically aggregate Trusted Advisor findings across all accounts to identify security groups with unrestricted access and underutilized EC2 instances. Which approach provides this capability?
> 
> 1. Enable AWS Trusted Advisor in each account and use the AWS Support API to pull check results into a central account using a cross-account IAM role.
> 2. Use AWS Config aggregator to collect Trusted Advisor findings across all accounts.
> 3. Enable AWS Security Hub across all accounts and use the AWS Foundational Security Best Practices standard, which incorporates Trusted Advisor checks.
> 4. Use the AWS Organizations API to pull Trusted Advisor results from member accounts into the management account.
>
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** [[Trusted Advisor]] findings can be accessed programmatically via the AWS Support API (`describe-trusted-advisor-checks` and `describe-trusted-advisor-check-result`). With cross-account IAM roles, a central account can aggregate results from all 200 accounts. Note that full Trusted Advisor checks require Business or Enterprise Support plans. While [[Security Hub]] (Option 3) aggregates security findings, it does not include all Trusted Advisor categories (like Cost Optimization).

> [!question]
> A solutions architect notices that their AWS account is approaching the default limit of 5 Elastic IPs per region. They need to proactively monitor service limits across multiple AWS services and receive alerts before limits are reached. Which solution provides this with the LEAST operational overhead?
> 
> 1. Create custom CloudWatch metrics using a Lambda function that queries each AWS service API for current usage and limits.
> 2. Enable AWS Trusted Advisor Service Limits checks and create CloudWatch alarms on the Trusted Advisor metrics that trigger SNS notifications.
> 3. Use AWS Config rules to monitor resource counts and trigger alerts when approaching known limits.
> 4. Use AWS Service Quotas dashboard and manually review limits monthly.
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[Trusted Advisor]]'s **Service Limits** category automatically monitors your usage against AWS service quotas. These checks publish metrics to [[CloudWatch Overview|CloudWatch]], where you can create alarms that trigger [[SNS]] notifications when usage exceeds a threshold (e.g., 80% of limit). This is fully automated with minimal overhead. AWS Service Quotas (Option 4) also provides this, but without automated alerting without additional configuration.
