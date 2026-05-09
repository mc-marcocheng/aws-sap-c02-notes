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
> > **Rationale:** [[Control Tower]] is the primary service for setting up and governing a multi-account AWS environment following best practices. It provides a Landing Zone which is a well-architected, multi-account environment. The Account Factory is a feature of Control Tower that automates the provisioning of new accounts with a defined baseline and [[Control Tower|Guardrails]]. It uses [[Organizations Overview|Service Catalog]] to provision these accounts. Other options like [[EC2 Overview|Elastic Beanstalk]], [[EC2 Overview|OpsWorks]], or [[AWS Config]] alone do not provide a scalable account provisioning and bootstrapping mechanism integrated with [[Organizations Overview|Organizations]] in the way Control Tower does.
