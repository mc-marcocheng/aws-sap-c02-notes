---
tags: [aws, sap-c02, management, ram]
---
# AWS Resource Access Manager (RAM)

AWS RAM allows you to easily and securely share AWS resources across AWS accounts or within your [[Organizations Overview|AWS Organizations]]. 

## Key Features
- **Resource Sharing:** Share resources like Transit Gateways, Subnets, License Manager configurations, Route 53 Resolver rules, and [[Outposts]].
- **Organizations Integration:** When sharing within AWS Organizations (if enabled), resource shares are automatically accepted without requiring manual invitations.
- **Cross-Account Sharing:** Can share resources with accounts outside of your Organization, but the recipient must manually accept the RAM invitation.
- **VPC Subnet Sharing:** Allows multiple accounts to deploy resources (like [[EC2 Overview|EC2]], [[RDS Overview|RDS]]) into a single, centrally managed [[VPC Overview|VPC]]. 
    - The account that owns the VPC (Owner) manages the network (subnets, route tables, NACLs).
    - The participant accounts manage their own resources (EC2 instances) deployed in those shared subnets.

## SAP-C02 Key Facts & Architectural Patterns
- **VPC Peering vs. Shared VPCs:** Sharing subnets via RAM reduces the number of VPCs needed and eliminates complex [[VPC Peering]] or [[Transit Gateway]] routing requirements for intra-environment communication (e.g., Dev accounts sharing a Dev VPC).
- **Security Groups:** When using shared subnets, participant accounts create and manage their own Security Groups. However, you can reference Security Group IDs across accounts if they are in the same shared VPC.
- **Tagging:** Tags on shared resources are not automatically propagated to participant accounts. Participant accounts can tag the shared resources in their own accounts without affecting the owner's tags.

> [!exam]
> You **cannot** share an entire VPC; you share specific **Subnets** within the VPC.
> You cannot share default subnets.
> For managing IP address exhaustion across multiple accounts, a Shared VPC via **RAM** is a primary solution.

## Related Services
- [[_Management Index|Management Index]]
- [[Organizations Overview|AWS Organizations]]
- [[VPC Overview|VPC]]
- [[Outposts]]
- [[Transit Gateway]]

---
**Practice:** [[RAM - Practice Questions|RAM Practice Questions]]