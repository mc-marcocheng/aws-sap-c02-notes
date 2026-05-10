---
tags: [aws, sap-c02, vpc, networking, practice-questions]
---
# VPC NAT Gateway Practice Questions

> [!question]
> After launching an instance that you intend to serve as a NAT (Network Address Translation) device in a public subnet you modify your route tables to have the NAT device be the target of internet bound traffic of your private subnet. When you try and make an outbound connection to the Internet from an instance in the private subnet, you are not successful. Which of the following steps could resolve the issue?
> 1. Attaching a second Elastic Network interface (ENI) to the NAT instance, and placing it in the private subnet
> 2. Attaching an Elastic IP address to the instance in the private subnet
> 3. Attaching a second Elastic Network Interface (ENI) to the instance in the private subnet, and placing it in the public subnet
> 4. Disabling the Source/Destination Check attribute on the NAT instance
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale:** Each EC2 instance performs source/destination checks by default. This means that the instance must be the source or destination of any traffic it sends or receives. However, a [[VPC NAT Gateway#NAT Instance|NAT Instance]] must be able to send and receive traffic when the source or destination is not itself. Therefore, you must disable the **Source/Destination Check** attribute on the NAT instance for it to function correctly.

> [!question]
> You manually launch a NAT AMI in a public subnet. The network is properly configured. Security groups and network access control lists are property configured. Instances in a private subnet can access the NAT. The NAT can access the Internet. However, private instances cannot access the Internet. What additional step is required to allow access from the private instances?
> 1. Enable Source/Destination Check on the private Instances.
> 2. Enable Source/Destination Check on the NAT instance.
> 3. Disable Source/Destination Check on the private instances
> 4. Disable Source/Destination Check on the NAT instance
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale:** Just like in the previous scenario, a [[VPC NAT Gateway#NAT Instance|NAT Instance]] requires the Source/Destination check to be disabled. Since the private instances are communicating "through" the NAT instance (where the NAT instance is neither the ultimate source nor the destination), the default AWS security check would drop the packets unless this attribute is disabled.

> [!question]
> A user has created a VPC with public and private subnets. The VPC has CIDR 20.0.0.0/16. The private subnet uses CIDR 20.0.1.0/24 and the public subnet uses CIDR 20.0.0.0/24. The user is planning to host a web server in the public subnet (port 80) and a DB server in the private subnet (port 3306). The user is configuring a security group of the NAT instance. Which of the below mentioned entries is **NOT** required for the NAT security group?
> 1. For Inbound allow Source: 20.0.1.0/24 on port 80
> 2. For Outbound allow Destination: 0.0.0.0/0 on port 80
> 3. For Inbound allow Source: 20.0.0.0/24 on port 80
> 4. For Outbound allow Destination: 0.0.0.0/0 on port 443
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** A NAT instance is used to provide internet access to instances in [[VPC NAT Gateway#Private Subnet|private subnets]]. In this architecture, the web server in the public subnet (20.0.0.0/24) has direct access to the Internet Gateway and does not need to use the NAT instance. Therefore, the NAT security group does not need to allow inbound traffic from the public subnet. It only needs to allow inbound traffic from the private subnet (20.0.1.0/24) that needs to reach the internet.

> [!question]
> A web company is looking to implement an external payment service into their highly available application deployed in a VPC. Their application EC2 instances are behind a public facing ELB. Auto scaling is used to add additional instances as traffic increases. Under normal load the application runs 2 instances in the Auto Scaling group but at peak it can scale 3x in size. The application instances need to communicate with the payment service over the Internet, which requires whitelisting of all public IP addresses used to communicate with it. A maximum of 4 whitelisting IP addresses are allowed at a time and can be added through an API. How should they architect their solution?
> 1. Route payment requests through two NAT instances setup for High Availability and whitelist the Elastic IP addresses attached to the NAT instances
> 2. Whitelist the VPC Internet Gateway Public IP and route payment requests through the Internet Gateway.
> 3. Whitelist the ELB IP addresses and route payment requests from the Application servers through the ELB.
> 4. Automatically assign public IP addresses to the application instances in the Auto Scaling group and run a script on boot that adds each instances public IP address to the payment validation whitelist API.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** By using [[VPC NAT Gateway#Public NAT Gateway|NAT Gateways]] or NAT instances in multiple AZs, you can assign static **Elastic IP (EIP)** addresses. All traffic from the private application instances will appear to come from these specific EIPs. This allows you to whitelist a small, fixed number of IP addresses (2 in this case, well within the limit of 4) for the external payment service, regardless of how many application instances are running behind the Auto Scaling group.

> [!question]
> A company needs to provide internet access to instances in private subnets across multiple Availability Zones with automatic high availability and simplified management. Which NAT Gateway option should they use?
> 1. Create a public NAT Gateway in each Availability Zone
> 2. Create a Regional NAT Gateway that automatically spans all Availability Zones
> 3. Create a private NAT Gateway in each Availability Zone
> 4. Use NAT instances with Auto Scaling
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** The [[VPC NAT Gateway#Regional NAT Gateway (New)|Regional NAT Gateway]] is the best fit for this requirement. Unlike traditional zonal NAT Gateways which require a gateway in each AZ and manual route table management for high availability, the Regional NAT Gateway automatically scales and spans across multiple AZs. This provides built-in high availability and simplifies the overall network architecture and management.
