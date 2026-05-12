---
tags: [aws, sap-c02, direct-connect, practice-questions]
---
# Direct Connect Gateway Practice Questions

> [!question]
> A company is planning to use AWS Direct Connect Gateway to connect to multiple VPCs in different regions. What are the key benefits of using Direct Connect Gateway? (Choose 2 answers)
> 1. It allows you to connect to VPCs in any AWS region (except China) from any Direct Connect location.
> 2. It provides a way to connect multiple VPCs in the same region to a single Direct Connect connection.
> 3. It automatically enables VPC peering between all connected VPCs.
> 4. It reduces the number of Border Gateway Protocol (BGP) sessions you need to manage.
> 5. It provides a managed VPN connection as a backup to Direct Connect.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1, 4**
> > **Rationale**: [[Direct Connect Gateway]] provides two primary benefits:
> > - **Multi-Region Connectivity**: It allows a single [[Direct Connect Overview|Direct Connect]] connection to interface with VPCs in different AWS regions globally (excluding China).
> > - **Simplified BGP Management**: Instead of maintaining a separate BGP session for every VPC (which would require a separate Private VIF per VPC), you can use a single BGP session between your on-premises router and the Direct Connect Gateway to reach all associated VPCs.
> > Option 2 is also a feature but connecting VPCs in the *same* region can be done with a standard VIF/VGW; the *unique* value is cross-region. Option 3 is false (no transitive peering). Option 5 is a separate architecture (VPN backup).

> [!question]
> A multinational corporation has a single 10 Gbps AWS Direct Connect connection terminating in us-east-1. They have VPCs in us-east-1, eu-west-1, and ap-southeast-1. They also need to access Amazon S3 in all three regions from their on-premises data center. Which combination of Direct Connect components enables connectivity to ALL VPCs and S3 in all regions through the single DX connection?
> 
> 1. Create a Direct Connect Gateway with Private Virtual Interfaces to each VPC's VGW, and create a separate Public Virtual Interface for S3 access in all regions.
> 2. Create three Transit Virtual Interfaces, one for each region's Transit Gateway, and use the Transit Gateways for S3 access via VPC endpoints.
> 3. Create a Direct Connect Gateway associated with a Transit Gateway in each region via Transit Virtual Interfaces, and create a Public Virtual Interface on the DX connection for S3 access across all regions.
> 4. Create VPC Peering between all three VPCs and use a single Private Virtual Interface to the us-east-1 VPC.
>
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** A [[Direct Connect Gateway]] with Transit Virtual Interfaces allows a single [[Direct Connect Overview|Direct Connect]] connection to reach [[Transit Gateway|Transit Gateways]] in multiple regions, providing VPC connectivity globally. A **Public Virtual Interface** provides access to all AWS public services (including [[S3 Overview|S3]]) in all regions through the same DX connection. Option 4 fails because [[VPC Peering]] does not support transitive routing from Direct Connect.

> [!question]
> A company has Direct Connect connections in two different AWS regions (us-east-1 and eu-west-1) for redundancy. Each connection has a Private Virtual Interface to a Direct Connect Gateway, which is associated with a Virtual Private Gateway (VGW) attached to their production VPC in us-east-1. If the us-east-1 Direct Connect connection fails, will traffic automatically failover to the eu-west-1 connection to reach the production VPC?
> 
> 1. Yes, the Direct Connect Gateway automatically routes traffic through the eu-west-1 connection to the VGW in us-east-1.
> 2. No, a Private Virtual Interface on a DX connection can only reach VGWs in the same region as the DX location.
> 3. Yes, but only if BGP communities are configured to allow cross-region failover on the Direct Connect Gateway.
> 4. No, because Direct Connect Gateway only supports one DX connection at a time.
>
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** [[Direct Connect Gateway]] is a globally available resource. When multiple [[Direct Connect Overview|Direct Connect]] connections in different regions have Private Virtual Interfaces associated with the same Direct Connect Gateway, traffic will failover between them using BGP. The DXGW can route traffic from any associated connection to any associated VGW regardless of region, providing geographic redundancy for the DX path.
