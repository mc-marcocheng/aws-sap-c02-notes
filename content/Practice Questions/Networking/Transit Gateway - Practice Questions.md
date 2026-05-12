---
tags: [aws, sap-c02, transit-gateway, networking, practice-questions]
---
# Transit Gateway Practice Questions

> [!question]
> A company is using a VPC peering strategy to connect its VPCs in a single Region to allow for cross-communication. A recent increase in account creations and VPCs has made it difficult to maintain the VPC peering strategy, and the company expects to grow to hundreds of VPCs. There are also new requests to create site-to-site VPNs with some of the VPCs.
> 
> A solutions architect has been tasked with creating a centrally managed networking setup for multiple accounts, VPCs, and VPNs. Which networking solution meets these requirements?
> 
> 1. Configure shared VPCs and VPNs and share with each other.
> 2. Configure a hub-and-spoke VPC and route all traffic through VPC peering.
> 3. Configure an AWS Direct Connect connection between all VPCs and VPNs.
> 4. Configure a transit gateway with AWS Transit Gateway and connect all VPCs and VPNs.
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale:** [[Transit Gateway|AWS Transit Gateway]] acts as a regional network transit hub that interconnects VPCs and on-premises networks using a hub-and-spoke architecture. It is specifically designed to handle large-scale networking (hundreds of VPCs) and consolidates management of VPC and [[VPN]] connections, replacing the complexity of a full-mesh [[VPC Peering]] setup.

> [!question]
> A company hosts its core network services, including directory services and DNS, in its on-premises data center. The data center is connected to the AWS Cloud using AWS Direct Connect (DX). Additional AWS accounts are planned that will require quick, cost-effective, and consistent access to these network services. What should a solutions architect implement to meet these requirements with the LEAST amount of operational overhead?
> 
> 1. Create a DX connection in each new account. Route the network traffic to the on-premises servers.
> 2. Configure VPC endpoints in the DX VPC for all required services. Route the network traffic to the on-premises servers.
> 3. Create a VPN connection between each new account and the DX VPC. Route the network traffic to the on-premises servers.
> 4. Configure AWS Transit Gateway between the accounts. Assign DX to the transit gateway and route network traffic to the on-premises servers.
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale:** Using [[Transit Gateway|AWS Transit Gateway]] with a [[Direct Connect Overview|Direct Connect Gateway]] allows multiple AWS accounts and VPCs to share a single Direct Connect connection. This provides a centralized, scalable, and cost-effective way to provide on-premises connectivity to multiple accounts with minimal operational overhead compared to creating individual DX or VPN connections for each account.

> [!question]
> A company has a Transit Gateway connecting 20 VPCs and 3 Site-to-Site VPN connections. They want to implement network segmentation so that production VPCs cannot communicate with development VPCs, but both can reach shared services (DNS, Active Directory) in a shared services VPC. How should the Transit Gateway be configured?
> 
> 1. Create three Transit Gateway route tables: Production, Development, and Shared Services. Associate Production VPCs with the Production route table and Development VPCs with the Development route table. Propagate the Shared Services VPC routes to both the Production and Development route tables, and propagate Production and Development routes only to the Shared Services route table.
> 2. Use VPC security groups and NACLs to block traffic between Production and Development VPCs.
> 3. Create separate Transit Gateways for Production and Development, and use Transit Gateway peering to connect both to the Shared Services VPC.
> 4. Use a blackhole route in the Transit Gateway route table to drop traffic between Production and Development CIDR ranges.
>
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** [[Transit Gateway]] supports multiple route tables for network segmentation. By associating VPC attachments with specific route tables and controlling route propagation, you create isolated routing domains. Production VPCs only see routes to Shared Services (and vice versa), and Development VPCs only see routes to Shared Services. This is the standard hub-and-spoke segmentation pattern. Blackhole routes (Option 4) become unmanageable at scale as CIDRs change.
