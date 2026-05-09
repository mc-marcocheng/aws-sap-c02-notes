---
tags: [aws, sap-c02, audit-manager, practice-questions]
---
# Audit Manager Practice Questions

> [!question]
> A company is preparing for an upcoming PCI DSS audit. The compliance team spends weeks manually capturing screenshots of AWS Config rules, CloudTrail logs, and IAM policies to prove that security controls are in place. The CISO wants to automate this evidence collection process to reduce preparation time. Which AWS service should a Solutions Architect recommend?
> 1. AWS Security Hub
> 2. AWS Audit Manager
> 3. AWS Systems Manager Compliance
> 4. AWS Artifact
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[Audit Manager]] is specifically designed to automate the collection of evidence (configurations, logs, API calls) and map them to compliance frameworks (like PCI DSS). This directly solves the problem of manual evidence gathering.

> [!question]
> A company uses AWS Organizations and requires comprehensive evidence collection for GDPR compliance across all its AWS accounts. The company wants a centralized team in a specific 'Security-Auditing' account to manage assessments and generate final audit reports. How should this be configured?
> 1. Enable AWS Audit Manager in the management account. Delegate the 'Security-Auditing' account as the Audit Manager administrator. Create assessments in the delegated account.
> 2. Enable AWS Artifact in the management account and share the GDPR framework with the 'Security-Auditing' account via AWS RAM.
> 3. Set up AWS Config aggregators in the 'Security-Auditing' account and use Athena to query compliance logs.
> 4. Enable AWS Security Hub in all accounts and configure cross-region aggregation to the 'Security-Auditing' account to generate the Audit Manager reports.
>
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** [[Audit Manager]] supports [[Organizations Overview|AWS Organizations]] and allows you to designate a delegated administrator account. The delegated account can then create assessments that automatically collect evidence from all member accounts in the organization.

> [!question]
> A company is conducting an internal compliance assessment using AWS Audit Manager. One of the custom controls requires proof that employees have completed an annual security training program. Since this is not an AWS configuration, how can the compliance team handle this within Audit Manager?
> 1. Audit Manager can only assess automated AWS configurations; manual controls must be managed in a third-party GRC tool.
> 2. Create an AWS Lambda function to query the HR system and send the results to Audit Manager via the API.
> 3. Use the delegation feature in Audit Manager to assign the control to an HR team member, who can manually upload the training completion logs as evidence.
> 4. Store the training logs in an S3 bucket and configure Audit Manager to automatically parse the bucket contents.
>
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** [[Audit Manager]] supports manual evidence collection. You can delegate specific controls within an assessment to subject matter experts (SMEs), allowing them to review the control and manually upload evidence (like PDF documents or logs) directly into the assessment.