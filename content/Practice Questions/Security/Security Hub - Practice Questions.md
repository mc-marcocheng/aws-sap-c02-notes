---
tags: [aws, sap-c02, security-hub, security, practice-questions]
---
# Security Hub Practice Questions

> [!question]
> A security engineer has been asked to continuously monitor the company's AWS account using automated compliance checks based on AWS best practices and Center for Internet Security (CIS) AWS Foundations Benchmarks. How can the security engineer accomplish this using AWS services?
> 1. AWS Config + AWS Security Hub
> 2. Amazon Inspector + AWS GuardDuty
> 3. Amazon Inspector + AWS Shield
> 4. AWS Config + Amazon Inspector
>
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** [[Security Hub]] is a cloud security posture management (CSPM) service that automatically runs continuous, account-level configuration and security checks based on standards like the CIS AWS Foundations Benchmark. It leverages [[Config]] rules under the hood to perform these checks and identify security issues.

> [!question]
> A large enterprise with 200+ AWS accounts in an Organization wants to centralize security findings from Amazon GuardDuty, Amazon Inspector, Amazon Macie, AWS Firewall Manager, and IAM Access Analyzer into a single dashboard. They also want to automatically trigger remediation workflows when critical findings are detected. The solution must work across all member accounts with minimal per-account configuration. Which architecture meets these requirements?
> 1. Configure each service to send findings to a central S3 bucket. Use Athena to query and visualize findings.
> 2. Designate a delegated administrator account for AWS Security Hub. Enable Security Hub across the Organization with auto-enable. Create custom actions that publish to EventBridge for automated remediation.
> 3. Deploy a centralized SIEM solution on EC2 instances. Configure each service in each account to send findings via CloudWatch Logs to the SIEM.
> 4. Use AWS Systems Manager OpsCenter to aggregate findings and create OpsItems for remediation.
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[Security Hub]] supports [[Organizations Overview|AWS Organizations]] integration with a delegated administrator and auto-enable for new accounts. It natively aggregates findings from [[GuardDuty]], [[Inspector]], [[Macie]], [[Firewall Manager]], and IAM Access Analyzer in AWS Security Finding Format (ASFF). Custom actions can route findings to [[EventBridge|Amazon EventBridge]] for automated remediation via [[Lambda]] or [[Step Functions]]. Option 1 requires custom development. Option 3 adds infrastructure management overhead. Option 4 (OpsCenter) is for operational issues, not a security aggregation platform.

> [!question]
> A company has enabled AWS Security Hub with the AWS Foundational Security Best Practices standard. They notice a persistent CRITICAL finding: "S3.2 - S3 buckets should prohibit public read access." The bucket in question intentionally hosts a public static website. The security team wants to suppress this specific finding for this specific bucket without disabling the entire control. What is the correct approach?
> 1. Disable the S3.2 control entirely in Security Hub.
> 2. Set the finding's workflow status to SUPPRESSED for that specific resource.
> 3. Remove the S3 bucket from the AWS Config recording scope.
> 4. Create a Security Hub insight that filters out findings for that bucket.
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[Security Hub]] allows setting the workflow status of individual findings to `SUPPRESSED`. This suppresses the finding for the specific resource without disabling the control (Option 1), which would stop checking all other buckets. Removing from Config scope (Option 3) would impact other rules. Insights (Option 4) are for analysis/grouping, not suppression.
