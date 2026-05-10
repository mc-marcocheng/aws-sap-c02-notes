---
tags: [aws, sap-c02, vpn, networking, practice-questions]
---
# VPN Practice Questions

> [!question]
> You have in total 5 offices, and the entire employee-related information is stored under AWS VPC instances. Now all the offices want to connect the instances in VPC using VPN. Which of the below help you to implement this?
> 1. you can have redundant customer gateways between your data center and your VPC
> 2. you can have multiple locations connected to the AWS VPN CloudHub
> 3. You have to define 5 different static IP addresses in route table.
> 4. 1 and 2
> 5. 1, 2 and 3
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale:** AWS [[VPN Overview|VPN CloudHub]] is specifically designed to provide secure communication between multiple on-premises sites using a hub-and-spoke model. Using redundant [[VPN Overview|customer gateways]] is a best practice for ensuring high availability of the [[VPN Overview|VPN connection]]. Defining 5 static IPs in the route table is not a primary requirement for the connectivity itself, as dynamic routing via BGP is often preferred.

> [!question]
> You have in total of 15 offices, and the entire employee-related information is stored under AWS VPC instances. Now all the offices want to connect the instances in VPC using VPN. What problem do you see in this scenario?
> 1. You can not create more than 1 VPN connections with single VPC
> 2. You can not create more than 10 VPN connections with single VPC
> 3. When you create multiple VPN connections, the virtual private gateway can not sends network traffic to the appropriate VPN connection using statically assigned routes.
> 4. Statically assigned routes cannot be configured in case of more than 1 VPN with the virtual private gateway.
> 5. None of above
> 
> > [!success]- Answer & Rationale
> > **Answer: 5**
> > **Rationale:** AWS supports multiple [[VPN Overview|VPN connections]] to a single [[VPC Overview|VPC]]. While there are soft limits (e.g., 10 VPN connections per VGW), these can be increased. The [[VPN Overview|VGW]] can correctly route traffic using either static or dynamic (BGP) routing for multiple connections simultaneously.

> [!question]
> You have been asked to virtually extend two existing data centers into AWS to support a highly available application that depends on existing, on-premises resources located in multiple data centers and static content that is served from an Amazon Simple Storage Service (S3) bucket. Your design currently includes a dual-tunnel VPN connection between your CGW and VGW. Which component of your architecture represents a potential single point of failure that you should consider changing to make the solution more highly available?
> 1. Add another VGW in a different Availability Zone and create another dual-tunnel VPN connection.
> 2. Add another CGW in a different data center and create another dual-tunnel VPN connection.
> 3. Add a second VGW in a different Availability Zone, and a CGW in a different data center, and create another dual-tunnel.
> 4. No changes are necessary: the network architecture is currently highly available.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** In an [[VPN Overview|AWS Site-to-Site VPN]] setup, the [[VPN Overview|VGW]] is a managed service that is already highly available and distributed across multiple Availability Zones. The [[VPN Overview|CGW]], being a physical or software appliance on the customer side, is a single point of failure if only one exists. Adding a second CGW in a geographically separate data center provides the necessary redundancy.

> [!question]
> You are designing network connectivity for your fat client application. The application is designed for business travelers who must be able to connect to it from their hotel rooms, cafes, public Wi-Fi hotspots, and elsewhere on the Internet. You do not want to publish the application on the Internet. Which network design meets the above requirements while minimizing deployment and operational costs?
> 1. Implement AWS Direct Connect, and create a private interface to your VPC. Create a public subnet and place your application servers in it.
> 2. Implement Elastic Load Balancing with an SSL listener that terminates the back-end connection to the application.
> 3. Configure an IPsec VPN connection, and provide the users with the configuration details. Create a public subnet in your VPC, and place your application servers in it.
> 4. Configure an SSL VPN solution in a public subnet of your VPC, then install and configure SSL VPN client software on all user computers. Create a private subnet in your VPC and place your application servers in it.
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale:** For remote travelers, an SSL-based [[VPN Overview|Client VPN]] or a [[VPN Overview|Software VPN]] appliance is the most cost-effective and flexible solution. It allows secure access to resources in a private subnet without exposing them to the internet via public IPs or ELBs. [[Direct Connect Overview|Direct Connect]] is too expensive and complex for individual remote users.

> [!question]
> You are designing a connectivity solution between on-premises infrastructure and Amazon VPC Your server’s on-premises will be communicating with your VPC instances You will be establishing IPSec tunnels over the internet You will be using VPN gateways and terminating the IPsec tunnels on AWS-supported customer gateways. Which of the following objectives would you achieve by implementing an IPSec tunnel as outlined above? (Choose 4 answers)
> 1. End-to-end protection of data in transit
> 2. End-to-end Identity authentication
> 3. Data encryption across the Internet
> 4. Protection of data in transit over the Internet
> 5. Peer identity authentication between VPN gateway and customer gateway
> 6. Data integrity protection across the Internet
> 
> > [!success]- Answer & Rationale
> > **Answer: 3, 4, 5, 6**
> > **Rationale:** An IPSec-based [[VPN Overview|VPN connection]] provides:
> > - [[KMS Overview|Data encryption]] (3) and [[S3 Security|protection of data in transit]] (4) over the public internet.
> > - [[VPN Overview|Peer identity authentication]] (5) between the [[VPN Overview|VGW]] and the [[VPN Overview|CGW]].
> > - [[S3 Security|Data integrity protection]] (6) to ensure data isn't tampered with during transit.
> > It does not provide "end-to-end" (application-to-application) protection (1) or authentication (2) by itself, as these usually require protocols at higher layers of the OSI model.

> [!question]
> A development team that is currently doing a nightly six-hour build which is lengthening over time on-premises with a large and mostly under utilized server would like to transition to a continuous integration model of development on AWS with multiple builds triggered within the same day. However, they are concerned about cost, security and how to integrate with existing on-premises applications such as their LDAP and email servers, which cannot move off-premises. The development environment needs a source code repository; a project management system with a MySQL database resources for performing the builds and a storage location for QA to pick up builds from. What AWS services combination would you recommend to meet the development team’s requirements?
> 1. A Bastion host Amazon EC2 instance running a VPN server for access from on-premises, Amazon EC2 for the source code repository...
> 2. An AWS Storage Gateway for connecting on-premises software applications...
> 3. An AWS Storage Gateway for connecting on-premises software applications...
> 4. A VPC with a VPN Gateway back to their on-premises servers, Amazon EC2 for the source-code repository with attached Amazon EBS volumes, Amazon EC2 and Amazon RDS MySQL for the project management system, EIPs for the source code repository and project management system, SQS for a build queue, An Auto Scaling group of EC2 instances for performing builds and S3 for the build output.
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale:** This architecture fulfills all requirements:
> > - **Security/Integration**: [[VPN Overview|VPN Gateway]] provides a secure tunnel for LDAP/Email integration.
> > - **Source Code/Project Management**: EC2 and [[RDS Overview|RDS MySQL]] host these systems.
> > - **Scalable Builds**: [[SQS Overview|SQS]] acts as a build queue, and an [[Auto Scaling Overview|Auto Scaling]] group of EC2 instances handles the variable build load efficiently.
> > - **QA Storage**: [[S3 Overview|S3]] is the standard, durable location for build artifacts.
