---
tags: [aws, sap-c02, ram, practice-questions]
---
# RAM Practice Questions

> [!question]
> A company has 10 development accounts within AWS Organizations. Each account requires network connectivity to a centralized on-premises data center via an AWS Direct Connect connection. To minimize network complexity and save on IP address space, the Network team wants to manage a single VPC and allow developers to launch resources into it from their respective accounts. Which solution achieves this?
> 1. Create a VPC in a central networking account. Use AWS RAM to share the VPC with all 10 development accounts.
> 2. Create a VPC in a central networking account. Use AWS RAM to share specific subnets from the VPC to the Organizational Unit (OU) containing the development accounts.
> 3. Create a Transit Gateway in a central account. Create VPCs in all 10 accounts and attach them to the Transit Gateway.
> 4. Create a VPC in the central account and set up VPC peering connections to VPCs in the 10 development accounts.
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[RAM]] allows you to share Subnets (not the entire VPC) with other accounts or entire OUs within [[Organizations Overview|AWS Organizations]]. This fulfills the requirement of managing a single VPC while allowing participant accounts to launch resources into it.

> [!question]
> Account A owns a VPC and shares Subnet-1 with Account B using AWS RAM. A developer in Account B launches an EC2 instance in Subnet-1. Who owns the EC2 instance, and who is responsible for paying for the EC2 compute charges?
> 1. Account A owns the instance and pays for it.
> 2. Account B owns the instance and pays for it.
> 3. Account B owns the instance, but Account A pays for the compute charges.
> 4. Account A owns the instance, but Account B pays for the compute charges.
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** In a shared subnet scenario using [[RAM]], the participant account (Account B) owns and manages the resources they create in the shared subnet, and they are billed for those resources. The owner account (Account A) only pays for the VPC-level infrastructure (like NAT Gateways).

> [!question]
> A company is acquiring a startup. The startup has an independent AWS account not part of the acquiring company's AWS Organizations. The acquiring company wants to share a Route 53 Resolver rule with the startup's AWS account. What must happen for the startup to use the rule?
> 1. The acquiring company shares the rule via AWS RAM. The startup's account can use it immediately.
> 2. The acquiring company shares the rule via AWS RAM. An administrator in the startup's account must accept the resource share invitation.
> 3. The startup's account must first be invited to and join the acquiring company's AWS Organizations before RAM can be used.
> 4. Route 53 Resolver rules cannot be shared outside of an AWS Organization.
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[RAM]] allows sharing resources with accounts outside of your [[Organizations Overview|Organizations]]. However, when sharing externally, the recipient account receives an invitation that they must explicitly accept before the resource becomes available. If it were within the same Organization (with sharing enabled), it would be automatic.