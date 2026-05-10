---
tags: [aws, sap-c02, firewall-manager, practice-questions]
---
# Firewall Manager Practice Questions

> [!question]
> A large enterprise uses AWS Organizations with hundreds of accounts. The security team wants to enforce a strict baseline: no Amazon EC2 instance should have a Security Group that allows inbound SSH (port 22) or RDP (port 3389) from `0.0.0.0/0`. If developers create such a rule, it should be immediately identified and automatically removed. Which solution requires the LEAST operational overhead?
> 1. Use AWS CloudTrail and Amazon EventBridge in every account to trigger a Lambda function that evaluates and modifies Security Group changes.
> 2. Create an AWS Config custom rule in every account backed by a Lambda function for remediation using AWS CloudFormation StackSets.
> 3. Use AWS Firewall Manager to create a Security Group policy that audits for overly permissive rules. Configure the policy to automatically remediate non-compliant resources.
> 4. Use AWS Systems Manager State Manager to run a daily script across all accounts to remove permissive Security Group rules.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** [[Firewall Manager|AWS Firewall Manager]] is designed precisely for centralized policy enforcement across [[Organizations Overview|AWS Organizations]]. You can create a Security Group policy to deny specific ports to the internet (`0.0.0.0/0`) and enable automatic remediation. This is much simpler than managing custom Lambda functions and Config rules via StackSets across hundreds of accounts.

> [!question]
> A company is migrating 50 web applications to AWS across multiple accounts in AWS Organizations. All applications use Application Load Balancers (ALBs). The security team dictates that every ALB must be protected by AWS WAF with a specific set of managed rules (e.g., SQL injection, XSS). They want this applied automatically to any existing or newly created ALBs in any account. What are the prerequisites and steps to achieve this?
> 1. Enable AWS Config across all accounts. Designate a Firewall Manager administrator account. Create a Firewall Manager WAF policy targeting ALBs and enable automatic remediation.
> 2. Enable AWS Security Hub across all accounts. Create a Security Hub custom action to deploy a WAF WebACL to all ALBs using EventBridge and Lambda.
> 3. Use AWS Resource Access Manager (RAM) to share a central WAF WebACL with all accounts. Use an SCP to require developers to attach it to their ALBs.
> 4. Create an AWS Network Firewall policy in the management account and deploy it to all member accounts using Firewall Manager.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** To centrally manage and automatically deploy [[WAF]] across multiple accounts, you must use [[Firewall Manager|AWS Firewall Manager]]. The strict prerequisites for Firewall Manager are: 1) AWS Organizations with all features enabled, 2) [[Config]] enabled on all accounts/regions, and 3) a designated delegated administrator. Once setup, a WAF policy targeting ALBs with auto-remediation will instantly attach the WebACL to new and existing ALBs.