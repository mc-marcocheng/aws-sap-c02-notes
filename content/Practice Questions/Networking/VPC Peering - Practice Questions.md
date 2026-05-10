---
tags: [aws, sap-c02, vpc, networking, practice-questions]
---
# VPC Peering Practice Questions

> [!question]
> You currently have 2 development environments hosted in 2 different VPCs in an AWS account in the same region. There is now a need for resources from one VPC to access another. How can this be accomplished?
> 1. Establish a Direct Connect connection.
> 2. Establish a VPN connection.
> 3. Establish VPC Peering.
> 4. Establish Subnet Peering.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale**: [[VPC Peering]] is the most direct and cost-effective method to connect two VPCs within the same region. It allows instances in either VPC to communicate using private IP addresses. Options 1 and 2 are primarily for hybrid connectivity (on-premises to AWS), and "Subnet Peering" is not a valid AWS feature.

> [!question]
> A company has an AWS account that contains three VPCs (Dev, Test, and Prod) in the same region. Test is peered to both Prod and Dev. All VPCs have non-overlapping CIDR blocks. The company wants to push minor code releases from Dev to Prod to speed up the time to market. Which of the following options helps the company accomplish this?
> 1. Create a new peering connection Between Prod and Dev along with appropriate routes.
> 2. Create a new entry to Prod in the Dev route table using the peering connection as the target.
> 3. Attach a second gateway to Dev. Add a new entry in the Prod route table identifying the gateway as the target.
> 4. The VPCs have non-overlapping CIDR blocks in the same account. The route tables contain local routes for all VPCs.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale**: [[VPC Peering]] does **not support transitive routing**. Even though both Dev and Prod are peered to Test, Dev cannot communicate with Prod through the Test VPC. A direct peering connection must be established between Dev and Prod, and the corresponding [[VPC Overview#Route Tables|route tables]] must be updated.

> [!question]
> A company has 2 AWS accounts that have individual VPCs. The VPCs are in different AWS regions and need to communicate with each other. The VPCs have non-overlapping CIDR blocks. Which of the following would be a cost-effective connectivity option?
> 1. Use VPN connections
> 2. Use VPC peering between the 2 VPC's
> 3. Use AWS Direct Connect
> 4. Use a NAT gateway
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale**: **Inter-region [[VPC Peering]]** is a highly cost-effective solution for connecting VPCs across different regions and accounts. It uses the AWS global backbone, ensuring high performance and security without the overhead of managing [[VPN|VPN connections]] or the high cost of [[Direct Connect Overview|Direct Connect]]. There is no hourly charge for the peering connection itself, only standard inter-region data transfer rates.

> [!question]
> A company needs to connect 15 VPCs across multiple AWS accounts and regions with centralized routing and management. Which solution is most appropriate?
> 1. Create VPC peering connections between all VPCs
> 2. Use AWS Transit Gateway with a hub-and-spoke architecture
> 3. Use AWS PrivateLink for all connections
> 4. Use multiple VPN connections
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale**: For connecting a large number of VPCs (15 in this case), [[Transit Gateway|AWS Transit Gateway]] is the best choice. It acts as a network hub, simplifying the topology into a **hub-and-spoke** model and supporting **transitive routing**. While [[VPC Peering]] is possible, a full mesh for 15 VPCs would require 105 separate connections, making it extremely difficult to manage.

> [!question]
> A SaaS provider wants to expose their application running in their VPC to multiple customer VPCs without requiring VPC peering or overlapping CIDR concerns. Which solution should they use?
> 1. VPC Peering with each customer VPC
> 2. AWS Transit Gateway
> 3. AWS PrivateLink with VPC endpoint service
> 4. Internet Gateway with security groups
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale**: [[VPC Endpoints|AWS PrivateLink]] (VPC Endpoint Service) is designed for this exact scenario. It allows service providers to share applications with consumers securely via the AWS backbone without requiring full network peering. It also solves the problem of **overlapping CIDR blocks** because the service is accessed via an Interface [[VPC Endpoints|VPC Endpoint]] in the customer's VPC, using an IP from the customer's own range.
