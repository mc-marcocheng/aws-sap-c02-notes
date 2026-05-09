---
tags: [aws, sap-c02, organizations, management, practice-questions]
---
# Organizations Practice Questions

> [!question]
> An organization that is currently using consolidated billing has recently acquired another company that already has a number of AWS accounts. How could an Administrator ensure that all AWS accounts, from both the existing company and the acquired company, are billed to a single account?
> 1. Merge the two companies, AWS accounts by going to the AWS console and selecting the “Merge accounts” option.
> 2. Invite the acquired company’s AWS account to join the existing company’s organization using AWS Organizations.
> 3. Migrate all AWS resources from the acquired company’s AWS account to the master payer account of the existing company.
> 4. Create a new AWS account and set it up as the master payer. Move the AWS resources from both the existing and acquired companies’ AWS accounts to the new account.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[Organizations Overview#Consolidated Billing|Consolidated Billing]] is designed for exactly this purpose. The [[Organizations Overview#Hierarchical Structure|Management Account]] can send invitations to existing accounts to join the organization. Once the invitation is accepted, the account becomes a member account, and its charges are consolidated into the management account's bill. Migrating resources is a high-effort, unnecessary alternative to simply linking the accounts.

> [!question]
> Which of the following are the benefits of AWS Organizations? (Choose 2)
> 1. Centrally manage access policies across multiple AWS accounts.
> 2. Automate AWS account creation and management.
> 3. Analyze cost across all multiple AWS accounts.
> 4. Provide technical help (by AWS) for issues in your AWS account.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1, 2**
> > **Rationale:** [[Organizations Overview#Service Control Policies (SCPs)|Service Control Policies (SCPs)]] allow for centralized management of access policies by defining the maximum available permissions for member accounts. AWS Organizations provides an API to automate the creation of new AWS accounts, allowing for programmatically scaling the [[Organizations Overview#Hierarchical Structure|Hierarchical Structure]]. While Organizations helps with consolidated billing, dedicated tools like AWS Cost Explorer are better suited for deep cost analysis.

> [!question]
> A company has several departments with separate AWS accounts. Which feature would allow the company to enable consolidate billing?
> 1. AWS Inspector
> 2. AWS Shield
> 3. AWS Organizations
> 4. AWS Lightsail
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** [[Organizations Overview#Consolidated Billing|Consolidated Billing]] is a core feature of [[Organizations Overview]]. It enables a single payment method for all accounts in the organization, simplifies tracking, and can provide volume-based discounts.
