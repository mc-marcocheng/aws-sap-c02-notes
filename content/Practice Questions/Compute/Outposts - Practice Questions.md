---
tags: [aws, sap-c02, outposts, practice-questions]
---
# Outposts Practice Questions

> [!question]
> A company is required by law to process and store all customer data within their own physical data center. However, they want to use AWS APIs and services like Amazon RDS and Amazon EKS to manage their applications. Which AWS solution allows them to run AWS infrastructure on-premises while maintaining full data residency?
> 1. AWS Local Zones.
> 2. AWS Outposts.
> 3. AWS Snowball Edge.
> 4. Amazon VPC with a Direct Connect connection.
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[Outposts]] allows customers to run a subset of AWS services (including RDS, EKS, and S3) on-premises. Because the hardware is physically located in the customer's data center, it satisfies strict data residency requirements while providing a consistent AWS management experience. Local Zones (Option 1) are AWS-managed facilities, not customer-owned. Snowball (Option 3) is primarily for data migration. Direct Connect (Option 4) provides connectivity but the compute still runs in the AWS Region.

> [!question]
> An enterprise deployed an AWS Outposts rack in their data center. The Outpost is connected to the parent AWS Region via an AWS Direct Connect connection. If the Direct Connect connection fails, what will happen to the resources running on the Outpost?
> 1. All EC2 instances will be immediately terminated.
> 2. Running EC2 instances will continue to run, and they can still communicate with the local on-premises network via the Local Gateway.
> 3. Running EC2 instances will continue to run, but they will lose all network connectivity until the link is restored.
> 4. The Outpost will automatically failover to a public internet connection using a secondary service link.
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** If the service link drops, the control plane is disconnected. You cannot provision new resources or make API changes, but existing [[Outposts]] workloads continue to run and can communicate locally via the Local Gateway.

> [!question]
> A company wants to expose a web application hosted on an AWS Outpost to users within their corporate network without the traffic routing through the AWS parent region. How should the network be configured?
> 1. Create a NAT Gateway in the Outpost subnet.
> 2. Create a Local Gateway (LGW) and configure the Outpost subnet route table to direct local corporate traffic to the LGW.
> 3. Attach an Internet Gateway to the VPC and configure it for local routing.
> 4. Use AWS Transit Gateway to bridge the Outpost subnet and the corporate network.
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** The Local Gateway (LGW) is a logical target in [[Outposts]] VPC route tables that provides direct routing to the on-premises network.