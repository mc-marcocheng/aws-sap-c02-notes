---
tags: [aws, sap-c02, control-tower, management, practice-questions]
---
# Control Tower Practice Questions

> [!question]
> A company is expanding its use of AWS services across its portfolios. The company wants to provision AWS accounts for each team to ensure a separation of business processes for security, compliance, and billing. Account creation and bootstrapping should be completed in a scalable and efficient way so new accounts are created with a defined baseline and governance guardrails in place. An administrator needs to design a provisioning process that saves time and resources. Which action should be taken to meet these requirements?
> 1. Automate using AWS Elastic Beanstalk to provision the AWS accounts, set up infrastructure, and integrate with AWS Organizations.
> 2. Create bootstrapping scripts in AWS OpsWorks and combine them with AWS CloudFormation templates to provision accounts and infrastructure.
> 3. Use AWS Config to provision accounts and deploy instances using AWS Service Catalog.
> 4. Use AWS Control Tower to create a template in Account Factory and use the template to provision new accounts.
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale:** [[Control Tower]] is the primary service for setting up and governing a multi-account AWS environment following best practices. It provides a Landing Zone which is a well-architected, multi-account environment. The Account Factory is a feature of Control Tower that automates the provisioning of new accounts with a defined baseline and [[Control Tower|Guardrails]]. It uses [[Organizations Overview|Service Catalog]] to provision these accounts. Other options like [[EC2 Overview|Elastic Beanstalk]], [[EC2 Overview|OpsWorks]], or [[Config]] alone do not provide a scalable account provisioning and bootstrapping mechanism integrated with [[Organizations Overview|Organizations]] in the way Control Tower does.

> [!question]
> A company wants to prevent any IAM users in their Organization from disabling AWS CloudTrail in any member account. They want a centralized way to enforce this across all current and future accounts. Which AWS Control Tower feature should they use?
> 1. Detective Guardrails
> 2. Preventive Guardrails (Service Control Policies)
> 3. AWS Config conformance packs
> 4. IAM Permissions Boundaries
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[Control Tower|Preventive Guardrails]] are implemented using **Service Control Policies (SCPs)**. These policies are applied at the OU level and restrict actions across all accounts in that OU, including the root user. Disabling CloudTrail is a classic example of an action that a Preventive Guardrail would block. Detective Guardrails (Option 1) use Config rules to *notify* of non-compliance but don't prevent the action. (See [[Control Tower]])

> [!question]
> A solutions architect is setting up a new Landing Zone using AWS Control Tower. They need to ensure that all logs from all member accounts are centralized in a single secure account for auditing. Which account is automatically created by Control Tower for this purpose?
> 1. Management Account
> 2. Audit Account
> 3. **Log Archive Account**
> 4. Shared Services Account
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** [[Control Tower]] automatically sets up a **Log Archive Account** to centralize all logs (CloudTrail, VPC Flow Logs, etc.) from across the Organization. The **Audit Account** is used for security and compliance monitoring but doesn't store the raw log files. (See [[Control Tower]])
