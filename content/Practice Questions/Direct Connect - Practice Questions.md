---
tags: [aws, sap-c02, direct-connect, networking, practice-questions]
---
# Direct Connect Practice Questions

> [!question]
> You are building a solution for a customer to extend their on-premises data center to AWS. The customer requires a 50-Mbps dedicated and private connection to their VPC. Which AWS product or feature satisfies this requirement?
> 1. Amazon VPC peering
> 2. Elastic IP Addresses
> 3. AWS Direct Connect
> 4. Amazon VPC virtual private gateway
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** [[Direct Connect Overview|Direct Connect]] Hosted Connections support sub-1Gbps speeds, including 50 Mbps, 100 Mbps, up to 500 Mbps, provided by AWS Direct Connect Partners. A [[VPN Overview|Virtual Private Gateway]] (VGW) is needed to terminate the connection, but the product itself is Direct Connect.

> [!question]
> Is there any way to own a direct connection to Amazon Web Services?
> 1. You can create an encrypted tunnel to VPC, but you don’t own the connection.
> 2. Yes, it’s called Amazon Dedicated Connection.
> 3. No, AWS only allows access from the public Internet.
> 4. Yes, it’s called Direct Connect
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale:** [[Direct Connect Overview|Direct Connect]] provides a dedicated physical network connection between your network and one of the AWS Direct Connect locations.

> [!question]
> An organization has established an Internet-based VPN connection between their on-premises data center and AWS. They are considering migrating from VPN to AWS Direct Connect. Which operational concern should drive an organization to consider switching from an Internet-based VPN connection to AWS Direct Connect?
> 1. AWS Direct Connect provides greater redundancy than an Internet-based VPN connection.
> 2. AWS Direct Connect provides greater resiliency than an Internet-based VPN connection.
> 3. AWS Direct Connect provides greater bandwidth than an Internet-based VPN connection.
> 4. AWS Direct Connect provides greater control of network provider selection than an Internet-based VPN connection.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** [[Direct Connect Overview|Direct Connect]] provides significantly higher bandwidth (up to 100 Gbps) and more consistent network performance than Internet-based [[VPN Overview|Site-to-Site VPN]], which is limited by the public internet's variable performance and typically lower bandwidth.

> [!question]
> Does AWS Direct Connect allow you access to all Availabilities Zones within a Region?
> 1. Depends on the type of connection
> 2. No
> 3. Yes
> 4. Only when there’s just one availability zone in a region.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** Each [[Direct Connect Overview|Direct Connect]] location enables connectivity to all Availability Zones within the geographically nearest AWS region.

> [!question]
> A customer has established an AWS Direct Connect connection to AWS. The link is up and routes are being advertised from the customer’s end, however, the customer is unable to connect from EC2 instances inside its VPC to servers residing in its datacenter. Which of the following options provide a viable solution to remedy this situation? (Choose 2 answers)
> 1. Add a route to the route table with an IPSec VPN connection as the target
> 2. Enable route propagation to the Virtual Private Gateway (VGW)
> 3. Enable route propagation to the customer gateway (CGW)
> 4. Modify the route table of all Instances using the “route” command.
> 5. Modify the Instances VPC subnet route table by adding a route back to the customer’s on-premises environment.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2, 5**
> > **Rationale:** For traffic to flow back to on-premises, the VPC [[VPC Overview - Route Tables|Route Table]] must have a path. This can be achieved either by enabling **Route Propagation** on the [[VPN Overview|Virtual Private Gateway]] (VGW) so it automatically adds BGP-learned routes, or by manually adding a static route pointing to the VGW.

> [!question]
> A company has configured and peered two VPCs: VPC-1 and VPC-2. VPC-1 contains only private subnets, and VPC-2 contains only public subnets. The company uses a single AWS Direct Connect connection and private virtual interface to connect their on-premises network with VPC-1. Which two methods increase the fault tolerance of the connection to VPC-1? (Choose 2 answers)
> 1. Establish a hardware VPN over the internet between VPC-2 and the on-premises network.
> 2. Establish a hardware VPN over the internet between VPC-1 and the on-premises network
> 3. Establish a new AWS Direct Connect connection and private virtual interface in the same region as VPC-2
> 4. Establish a new AWS Direct Connect connection and private virtual interface in a different AWS region than VPC-1
> 5. Establish a new AWS Direct Connect connection and private virtual interface in the same AWS region as VPC-1
> 
> > [!success]- Answer & Rationale
> > **Answer: 2, 5**
> > **Rationale:** [[VPC Peering]] does not support "edge-to-edge" routing (transitive routing). Therefore, a connection to VPC-2 cannot be used to reach VPC-1. To increase fault tolerance for VPC-1, you must establish a secondary path directly to VPC-1, such as a [[VPN Overview|Site-to-Site VPN]] (2) or another [[Direct Connect Overview|Direct Connect]] connection (5).

> [!question]
> Your company previously configured a heavily used, dynamically routed VPN connection between your on-premises data center and AWS. You recently provisioned a Direct Connect connection and would like to start using the new connection. After configuring Direct Connect settings in the AWS Console, which of the following options will provide the most seamless transition for your users?
> 1. Delete your existing VPN connection to avoid routing loops.
> 2. Configure your Direct Connect router with a higher BGP priority than your VPN router, verify network traffic is leveraging Direct Connect, and then delete your existing VPN connection.
> 3. Update your VPC route tables to point to the Direct Connect connection.
> 4. Configure your Direct Connect router, update your VPC route tables to point to the Direct Connect connection, configure your VPN connection with a higher BGP priority.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** By using [[Direct Connect Overview|BGP]] priorities (such as AS Path prepending or Local Preference), you can ensure that the [[Direct Connect Overview|Direct Connect]] path is preferred over the VPN path. Once traffic is verified on the DX link, the VPN can be decommissioned without downtime.

> [!question]
> You are designing the network infrastructure for an application server in Amazon VPC. Users will access all the application instances from the Internet as well as from an on-premises network. The on-premises network is connected to your VPC over an AWS Direct Connect link. How would you design routing to meet the above requirements?
> 1. Configure a single routing table with a default route via the Internet gateway. Propagate a default route via BGP on the AWS Direct Connect customer router.
> 2. Configure a single routing table with a default route via the internet gateway. Propagate specific routes for the on-premises networks via BGP on the AWS Direct Connect customer router. Associate the routing table with all VPC subnets.
> 3. Configure a single routing table with two default routes: one to the internet via an Internet gateway the other to the on-premises network via the VPN gateway.
> 4. Configure two routing tables one that has a default route via the Internet gateway and another that has a default route via the VPN gateway.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** A [[VPC Overview - Route Tables|Route Table]] can only have one default route (0.0.0.0/0). To allow internet access, the default route must point to the [[VPC Overview|Internet Gateway]] (IGW). To reach on-premises, specific routes (e.g., 10.0.0.0/8) should be propagated via [[Direct Connect Overview|BGP]] to the [[VPN Overview|Virtual Private Gateway]] (VGW) from the [[Direct Connect Overview|Direct Connect]] connection.

> [!question]
> You are implementing AWS Direct Connect. You intend to use AWS public service endpoints such as Amazon S3, across the AWS Direct Connect link. You want other Internet traffic to use your existing link to an Internet Service Provider. What is the correct way to configure AWS Direct Connect for access to services such as Amazon S3?
> 1. Configure a public Interface on your AWS Direct Connect link. Configure a static route via your AWS Direct Connect link that points to Amazon S3. Advertise a default route to AWS using BGP.
> 2. Create a private interface on your AWS Direct Connect link. Configure a static route via your AWS Direct Connect link that points to Amazon S3.
> 3. Create a public interface on your AWS Direct Connect link. Redistribute BGP routes into your existing routing infrastructure; advertise specific routes for your network to AWS.
> 4. Create a private interface on your AWS Direct connect link. Redistribute BGP routes into your existing routing infrastructure and advertise a default route to AWS.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** A [[Direct Connect Overview|Public Virtual Interface]] (Public VIF) is required to access public AWS services like [[S3 Overview|S3]] or DynamoDB over [[Direct Connect Overview|Direct Connect]]. You receive AWS public IP ranges via [[Direct Connect Overview|BGP]] and advertise your own public prefixes to AWS.

> [!question]
> You have been asked to design network connectivity between your existing data centers and AWS. Network traffic will start small, but ramp up to 10s of GB per second over several months. The success of your application is dependent upon getting to market quickly. Which of the following design options will allow you to meet your objectives?
> 1. Quickly create an internal ELB and provision a 1 Gbps cross-connect.
> 2. Allocate EIPs and an Internet Gateway for quick access, then provision a VPN.
> 3. Provision a VPN connection between a VPC and existing on-premises equipment, submit a DirectConnect partner request to provision cross connects, then cut over from the VPN connection to one or more DirectConnect connections as needed.
> 4. Quickly submit a DirectConnect request to provision a 1 Gbps cross connect.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** [[VPN Overview|Site-to-Site VPN]] can be set up in minutes, allowing for quick time-to-market. [[Direct Connect Overview|Direct Connect]] takes weeks or months to provision but provides the high bandwidth (10s of Gbps) required for the long term.

> [!question]
> You are tasked with moving a legacy application from a virtual machine to an Amazon VPC. This app requires access to on-premises services, but there is no documentation. What will allow the application to reach back without being reconfigured? (Choose 3 answers)
> 1. An AWS Direct Connect link between the VPC and the network housing the internal services
> 2. An Internet Gateway to allow a VPN connection.
> 3. An Elastic IP address on the VPC instance
> 4. An IP address space that does not conflict with the one on-premises
> 5. Entries in Amazon Route 53 that allow the Instance to resolve its dependencies
> 6. A VM Import of the current virtual machine
> 
> > [!success]- Answer & Rationale
> > **Answer: 1, 4, 6**
> > **Rationale:** To maintain the application's hardcoded configurations, you should: (6) Use **VM Import/Export** to preserve the existing OS and app state; (4) Ensure the VPC [[VPC Overview|CIDR]] does not conflict with on-premises so that routing works; and (1) Use [[Direct Connect Overview|Direct Connect]] (or VPN) for private connectivity to the on-premises dependencies.
