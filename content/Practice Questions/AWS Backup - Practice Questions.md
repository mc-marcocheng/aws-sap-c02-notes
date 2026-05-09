---
tags: [aws, sap-c02, aws-backup, practice-questions]
---
# AWS Backup Practice Questions

> [!question]
> A company wants to enforce a backup strategy across its 50 AWS accounts managed by AWS Organizations. Backups must be copied to a centralized security account and protected against malicious deletion. How can this be achieved with the LEAST operational overhead?
> 1. Use AWS Systems Manager to run scripts across accounts that take snapshots and share them with the security account.
> 2. Implement AWS Backup policies in AWS Organizations. Configure a centralized Backup Vault in the security account and enable AWS Backup Vault Lock.
> 3. Use AWS Config rules to monitor unbacked resources and trigger Lambda functions to create and copy backups to an S3 bucket with Object Lock in the security account.
> 4. Use CloudWatch Events in each account to trigger backup creation and use IAM roles to push them to the central account.
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[AWS Backup]] natively integrates with AWS Organizations for central policy management. Cross-account copies to a central vault combined with Vault Lock provides WORM protection with minimal operational overhead.

> [!question]
> You are configuring cross-account copies in AWS Backup. The backups are failing to copy to the central backup account. What is the most likely cause?
> 1. The resources are encrypted using AWS managed KMS keys.
> 2. The source account does not have an active Direct Connect connection to the destination account.
> 3. AWS Backup cannot perform cross-account copies, only cross-region copies.
> 4. The Backup Vault in the destination account is in a different region.
>
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** To perform cross-account backup copies with [[AWS Backup]], resources must be encrypted with Customer Managed Keys (CMKs). AWS managed keys cannot be shared across accounts.

> [!question]
> A financial institution needs to store database backups for 7 years to meet regulatory requirements. To optimize costs, backups older than 30 days should be moved to cheaper storage. How should this be configured?
> 1. Use an S3 Lifecycle policy to move EBS snapshots to S3 Glacier Deep Archive.
> 2. Create an AWS Backup plan with a lifecycle rule to transition backups to cold storage after 30 days and expire them after 7 years.
> 3. Write a Lambda function to export RDS snapshots to S3 and apply S3 Glacier lifecycle rules.
> 4. Use AWS DataSync to move backups to an on-premises tape gateway.
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[AWS Backup]] supports lifecycle rules to automatically transition backups to cost-effective cold storage tiers and expire them after a defined retention period.