---
tags: [aws, sap-c02, vpc, networking, practice-questions]
---
# VPC Practice Questions

> [!question]
> You have a business-to-business web application running in a VPC consisting of an Elastic Load Balancer (ELB), web servers, application servers and a database. Your web application should only accept traffic from predefined customer IP addresses. Which two options meet this security requirement? (Choose 2)
> 1. Configure web server VPC security groups to allow traffic from your customers' IPs
> 2. Configure your web servers to filter traffic based on the ELB’s "X-forwarded-for" header
> 3. Configure ELB security groups to allow traffic from your customers’ IPs and deny all outbound traffic
> 4. Configure a VPC NACL to allow web traffic from your customers’ IPs and deny all outbound traffic
> 
> > [!success]- Answer & Rationale
> > **Answer: 2, 3**
> > **Rationale**: Since the [[ELB Overview|ELB]] sits between the client and the web servers, the web servers see the ELB's IP address. To filter by the original client IP, the "X-forwarded-for" header must be used. The ELB's security group is the first point of entry. Restricting it to customer IPs effectively limits access. Security groups are stateful, so "deny all outbound" (implied by lack of rules) wouldn't break the return traffic for allowed requests. Option 1 fails because web servers are behind the ELB. Option 4 fails because [[Security Groups vs NACLs|NACLs]] are stateless, and denying all outbound traffic would block the response from reaching the client.

> [!question]
> A user has created a VPC with public and private subnets. The VPC has CIDR 20.0.0.0/16. The private subnet uses CIDR 20.0.1.0/24 and the public subnet uses CIDR 20.0.0.0/24. The user is planning to host a web server in the public subnet (port 80) and a DB server in the private subnet (port 3306). The user is configuring a security group of the NAT instance. Which of the below mentioned entries is NOT required for the NAT security group?
> 1. For Inbound allow Source: 20.0.1.0/24 on port 80
> 2. For Outbound allow Destination: 0.0.0.0/0 on port 80
> 3. For Inbound allow Source: 20.0.0.0/24 on port 80
> 4. For Outbound allow Destination: 0.0.0.0/0 on port 443
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale**: The [[VPC NAT Gateway|NAT instance]]/gateway is used by instances in the *private* subnet (20.0.1.0/24). Instances in the public subnet (20.0.0.0/24) communicate directly with the [[VPC Overview|IGW]] and do not need to route through the NAT instance. Therefore, allowing the public subnet as a source in the NAT security group is not required.

> [!question]
> A user has setup a VPC with CIDR 20.0.0.0/16. The VPC has a private subnet (20.0.1.0/24) and a public subnet (20.0.0.0/24). The user’s data centre has CIDR of 20.0.54.0/24 and 20.1.0.0/24. If the private subnet wants to communicate with the data centre, what will happen?
> 1. It will allow traffic communication on both the CIDRs of the data centre
> 2. It will not allow traffic with data centre on CIDR 20.1.0.0/24 but allows traffic communication on 20.0.54.0/24
> 3. It will not allow traffic communication on any of the data centre CIDRs
> 4. It will allow traffic with data centre on CIDR 20.1.0.0/24 but does not allow on 20.0.54.0/24
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale**: The VPC CIDR is 20.0.0.0/16, which covers 20.0.0.0 to 20.0.255.255. The data center range 20.0.54.0/24 falls inside this VPC range (it overlaps). Traffic to 20.0.54.0/24 will be treated as local to the VPC and won't be routed to the data center. 20.1.0.0/24 does not overlap and can be routed correctly via a VGW or TGW.

> [!question]
> A user has created a VPC with CIDR 20.0.0.0/16. The user has created one subnet with CIDR 20.0.0.0/16 by mistake. The user is trying to create another subnet of CIDR 20.0.0.1/24. What will happen?
> 1. The VPC will modify the first subnet CIDR automatically to allow the second subnet IP range
> 2. It is not possible to create a second subnet as one subnet with the same CIDR as the VPC has been created
> 3. The second subnet will be created
> 4. It will throw a CIDR overlaps error
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale**: [[VPC Overview|Subnet]] CIDRs cannot overlap. Since the first subnet consumes the entire VPC range (20.0.0.0/16), any other CIDR in that range will overlap and cause an error.

> [!question]
> A company wants to implement their website in a virtual private cloud (VPC). The web tier will use an Auto Scaling group across multiple Availability Zones (AZs). The database will use Multi-AZ RDS MySQL and should not be publicly accessible. What is the minimum number of subnets that need to be configured in the VPC?
> 1. 1
> 2. 2
> 3. 3
> 4. 4
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale**: To support multiple AZs for the web tier (Public) and Multi-AZ for RDS (Private), you need at least 2 public subnets (one in each AZ) and 2 private subnets (one in each AZ). Total = 4 subnets.

> [!question]
> You have deployed a three-tier web application in a VPC with a CIDR block of 10.0.0.0/28. You initially deploy two web servers, two application servers, two database servers and one NAT instance for a total of seven EC2 instances. Web traffic gradually increases, you attempt to double the number of instances in each tier but some fail to launch. Why? (Choose 2)
> 1. The Internet Gateway (IGW) has scaled-up and consumed IPs.
> 2. AWS reserves one IP address in each subnet’s CIDR block for Route53.
> 3. AWS reserves the first and the last private IP address in each subnet’s CIDR block.
> 4. The ELB has scaled-up, reducing the number of available private IP addresses.
> 5. AWS reserves the first four and the last IP address in each subnet’s CIDR block.
> 
> > [!success]- Answer & Rationale
> > **Answer: 4, 5**
> > **Rationale**: In a /28 (16 IPs), AWS reserves 5, leaving only 11. You already used 7. 11-7 = 4 left. If you used an [[ELB Overview|ELB]] (which scales by adding nodes in subnets), it would consume more IP addresses, leaving insufficient space for doubling the application instances.

> [!question]
> A user has created a VPC with CIDR 20.0.0.0/16. The user has created public and VPN only subnets along with hardware VPN access to connect to the user’s datacenter. The user wants to make so that all traffic coming to the public subnet follows the organization’s proxy policy. How can the user make this happen?
> 1. Setting up a NAT with the proxy protocol and configure that the public subnet receives traffic from NAT
> 2. Setting up a proxy policy in the internet gateway connected with the public subnet
> 3. It is not possible to setup the proxy policy for a public subnet
> 4. Setting the route table and security group of the public subnet which receives traffic from a virtual private gateway
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale**: By routing traffic through the Virtual Private Gateway (VGW) to the on-premises data center, the organization can apply its internal proxy policies to the VPC traffic. This is known as "forced tunneling".

> [!question]
> A company needs to ensure that an instance can initiate outgoing IPv6 traffic to the Internet, but no incoming connection can be initiated from the Internet. What should be added?
> 1. A NAT Instance
> 2. A NAT Gateway
> 3. An Internet Gateway
> 4. An egress-only Internet gateway
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale**: An Egress-Only [[VPC Overview|Internet Gateway]] provides outbound-only connectivity for IPv6 traffic, similar to what a [[VPC NAT Gateway|NAT Gateway]] does for IPv4.

> [!question]
> A company is deploying a multi-account AWS environment and needs centralized IP address management across all accounts and regions. Which AWS service should they use?
> 1. AWS Config
> 2. AWS Systems Manager
> 3. Amazon VPC IP Address Manager (IPAM)
> 4. AWS Resource Access Manager
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale**: **VPC IPAM** is specifically designed for centralized IP address management and planning across multiple AWS accounts and regions.

> [!question]
> An organization wants to enable service-to-service communication across multiple VPCs and AWS accounts without managing complex networking configurations or Transit Gateways. Which service?
> 1. AWS PrivateLink
> 2. VPC Peering
> 3. Amazon VPC Lattice
> 4. AWS Direct Connect
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale**: **[[VPC Overview|VPC Lattice]]** simplifies application-layer networking between services across VPCs and accounts without needing complex routing or VPC peering.

> [!question]
> A security team needs to implement deep packet inspection and intrusion prevention for all traffic entering and leaving their VPC. Which AWS service?
> 1. AWS WAF
> 2. AWS Shield
> 3. AWS Network Firewall
> 4. Security Groups
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale**: **AWS Network Firewall** provides deep packet inspection (DPI), intrusion prevention (IPS), and stateful firewalling for VPC traffic.

> [!question]
> Your organization needs to integrate AWS IP address management with existing Infoblox infrastructure. Which IPAM tier is required?
> 1. IPAM Basic Tier
> 2. IPAM Advanced Tier
> 3. IPAM Standard Tier
> 4. IPAM Enterprise Tier
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale**: The **IPAM Advanced Tier** specifically supports integration with third-party tools like Infoblox for hybrid IP management.

> [!question]
> A company wants to route HTTP traffic between microservices based on request headers and paths across multiple VPCs. Which service?
> 1. Application Load Balancer
> 2. AWS Transit Gateway
> 3. Amazon VPC Lattice
> 4. VPC Peering
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale**: While ALB does header/path routing, **[[VPC Overview|VPC Lattice]]** provides this capability as a managed service *across* VPCs without the need for manual peering or complex transit gateway setups.

> [!question]
> Which AWS service provides a 99.99% SLA for managed network security with automatic scaling?
> 1. Security Groups
> 2. Network ACLs
> 3. AWS Network Firewall
> 4. AWS WAF
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale**: **AWS Network Firewall** is a fully managed, highly available service with a 99.99% SLA.

> [!question]
> Which of the following features are provided by Amazon VPC Lattice? (Choose 3)
> 1. Built-in service discovery
> 2. VPN connectivity
> 3. Cross-account service connectivity
> 4. Direct Connect integration
> 5. Application-layer authentication
> 
> > [!success]- Answer & Rationale
> > **Answer: 1, 3, 5**
> > **Rationale**: [[VPC Overview|VPC Lattice]] provides automated service discovery, simplifies cross-account connectivity, and includes application-layer (Layer 7) authentication and authorization. It does not provide VPN or Direct Connect services.
