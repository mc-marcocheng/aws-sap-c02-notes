---
tags: [aws, sap-c02, networking, vpc, privatelink, practice-questions]
---
# PrivateLink - Practice Questions

> [!question]
> A B2B software provider hosts a specialized API in an AWS VPC. They need to expose this API to 50 different enterprise customers, each operating in their own AWS accounts. Many of the customers use the default AWS VPC CIDR block (172.31.0.0/16), which overlaps with the provider's VPC CIDR. The provider wants to offer the service without requiring customers to manage complex routing, NAT, or traverse the public internet. Which architecture should the provider implement?
> 
> 1. Deploy the API behind a Network Load Balancer (NLB). Create an AWS PrivateLink Endpoint Service pointing to the NLB. Have customers create a VPC Interface Endpoint in their VPCs.
> 2. Deploy the API behind an Application Load Balancer (ALB). Set up AWS Transit Gateway and connect all 50 customer VPCs using Transit Gateway Peering.
> 3. Use VPC Peering between the provider VPC and each customer VPC, and deploy an AWS NAT Gateway in the provider VPC to handle the IP address translation.
> 4. Deploy the API behind a Gateway Load Balancer (GWLB). Share the GWLB with customers using AWS Resource Access Manager (RAM).
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** [[PrivateLink]] is the optimal solution for SaaS providers. By placing the service behind an NLB and creating an Endpoint Service, customers can access the API privately using an ENI in their own VPC. PrivateLink natively handles overlapping CIDRs because it does not require route table updates or IP routing between the VPCs; traffic is mapped via the AWS backbone directly to the service.

> [!question]
> A company has an on-premises data center connected to AWS via AWS Direct Connect. They have created a VPC Interface Endpoint (AWS PrivateLink) in their AWS VPC to securely access Amazon S3. The company wants on-premises servers to access S3 using this private endpoint rather than traversing the public internet. What must be configured to allow this?
> 
> 1. Configure the on-premises DNS servers to forward queries for `s3.region.amazonaws.com` to the Amazon Route 53 Resolver Inbound Endpoint deployed in the VPC.
> 2. Create a Public Virtual Interface (VIF) on the Direct Connect connection to route S3 traffic over the AWS public network.
> 3. Enable the "Private DNS Name" option on the VPC Interface Endpoint and share the VPC route table with the Direct Connect Gateway.
> 4. Deploy a NAT Gateway in the VPC and configure the on-premises router to use the NAT Gateway IP as the next hop for S3 traffic.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** While on-premises networks can route to the IP addresses of a [[VPC Endpoints|VPC Interface Endpoint]] over [[Direct Connect Overview|Direct Connect]], they cannot automatically resolve the regional AWS service DNS names to those private IPs. You must deploy an Amazon [[Route 53 Resolver]] Inbound Endpoint and configure on-premises DNS to forward requests for the AWS service domain to the Inbound Endpoint.

> [!question]
> A company has created an AWS PrivateLink endpoint service backed by a Network Load Balancer. Multiple consumer VPCs in different AWS accounts have created Interface Endpoints to access the service. The provider wants to restrict which AWS accounts can create endpoints to their service and also wants to be notified when a new connection request is made. How should this be configured?
> 
> 1. Configure the endpoint service to require manual acceptance of connection requests. Add allowed principals (AWS account IDs) to the endpoint service permissions.
> 2. Use IAM policies on the consumer accounts to prevent unauthorized endpoint creation.
> 3. Configure the NLB security group to only allow traffic from known consumer VPC CIDRs.
> 4. Use AWS Organizations SCPs to restrict which accounts can create VPC endpoints.
>
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** [[PrivateLink]] endpoint services support two access control mechanisms: **allowed principals** (whitelisting specific AWS accounts, IAM users, or roles that can create endpoints) and **acceptance required** (manual or automatic approval of connection requests). When acceptance is required, the provider receives a notification and must approve each connection. NLB security groups (Option 3) cannot filter by consumer VPC CIDR since PrivateLink uses ENIs in the consumer's VPC.
