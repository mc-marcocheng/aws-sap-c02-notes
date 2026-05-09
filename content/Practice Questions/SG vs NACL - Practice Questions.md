---
tags: [aws, sap-c02, networking, security, practice-questions]
---
# SG vs NACL Practice Questions

> [!question]
> Instance A and instance B are running in two different subnets A and B of a VPC. Instance A is not able to ping instance B. What are two possible reasons for this? (Pick 2)
> 1. The routing table of subnet A has no target route to subnet B
> 2. The security group attached to instance B does not allow inbound ICMP traffic
> 3. The policy linked to the IAM role on instance A is not configured correctly
> 4. The NACL on subnet B does not allow outbound ICMP traffic
> 
> > [!success]- Answer & Rationale
> > **Answer: 2, 4**
> > **Rationale:** 
> > - **Security Group Inbound Rules**: For a ping to succeed, the target's [[Security Groups vs NACLs#Security Groups (SG)|Security Group]] must allow inbound ICMP traffic.
> > - **NACL Statelessness**: Since [[Security Groups vs NACLs#Network ACLs (NACL)|Network ACLs]] are stateless, they must explicitly allow both inbound and outbound traffic. If Subnet B's NACL allows inbound ICMP but denies outbound ICMP, the ping response will be blocked.
> > - *Note*: Local routes in a [[VPC Overview|VPC]] allow communication between all subnets by default, and IAM roles do not control network-level traffic.

> [!question]
> An instance is launched into a VPC subnet with the network ACL configured to allow all inbound traffic and deny all outbound traffic. The instance’s security group is configured to allow SSH from any IP address and deny all outbound traffic. What changes need to be made to allow SSH access to the instance?
> 1. The outbound security group needs to be modified to allow outbound traffic.
> 2. The outbound network ACL needs to be modified to allow outbound traffic.
> 3. Nothing, it can be accessed from any IP address using SSH.
> 4. Both the outbound security group and outbound network ACL need to be modified to allow outbound traffic.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** 
> > - **Stateful SGs**: [[Security Groups vs NACLs#Security Groups (SG)|Security Groups]] are stateful. If inbound traffic is allowed, the response is automatically allowed regardless of outbound rules.
> > - **Stateless NACLs**: [[Security Groups vs NACLs#Network ACLs (NACL)|Network ACLs]] are stateless. Even if inbound traffic is allowed, the return traffic must be explicitly permitted in the outbound rules.

> [!question]
> From what services can you block incoming/outgoing IPs?
> 1. Security Groups
> 2. DNS
> 3. ELB
> 4. VPC subnet
> 5. IGW
> 6. NACL
> 
> > [!success]- Answer & Rationale
> > **Answer: 6**
> > **Rationale:** [[Security Groups vs NACLs#Network ACLs (NACL)|Network ACLs]] (applied at the subnet level) are the primary tool for blocking specific IP addresses because they support **Deny** rules. [[Security Groups vs NACLs#Security Groups (SG)|Security Groups]] only support **Allow** rules.

> [!question]
> What is the difference between a security group in VPC and a network ACL in VPC? (Choose 3)
> 1. Security group restricts access to a Subnet while ACL restricts traffic to EC2
> 2. Security group restricts access to EC2 while ACL restricts traffic to a subnet
> 3. Security group can work outside the VPC also while ACL only works within a VPC
> 4. Network ACL performs stateless filtering and Security group provides stateful filtering
> 5. Security group can only set Allow rule, while ACL can set Deny rule also
> 
> > [!success]- Answer & Rationale
> > **Answer: 2, 4, 5**
> > **Rationale:** 
> > - **Scope**: [[Security Groups vs NACLs#Security Groups (SG)|Security Groups]] operate at the instance level (ENI), while [[Security Groups vs NACLs#Network ACLs (NACL)|NACLs]] operate at the subnet level.
> > - **State**: SGs are **stateful** (track connections); NACLs are **stateless**.
> > - **Rule Types**: SGs support **Allow only**; NACLs support **Allow and Deny**.

> [!question]
> You are currently hosting multiple applications in a VPC and have logged numerous port scans coming in from a specific IP address block. Your security team has requested that all access from the offending IP address block be denied for the next 24 hours. What is the best method to quickly and temporarily deny access?
> 1. Create an AD policy to modify Windows Firewall settings on all hosts
> 2. Modify the Network ACLs associated with all public subnets in the VPC to deny access from the IP address block
> 3. Add a rule to all of the VPC Security Groups to deny access from the IP address block
> 4. Modify the Windows Firewall settings on all AMIs
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** To block a specific IP range, you must use a [[Security Groups vs NACLs#Network ACLs (NACL)|Network ACL]] because [[Security Groups vs NACLs#Security Groups (SG)|Security Groups]] do not support Deny rules. This is a centralized and immediate way to enforce the block at the subnet boundary.

> [!question]
> You have two EC2 instances inside a VPC in the same AZ but in different subnets. One instance is running a database and the other an application. Which two things do you need to confirm in the VPC settings so that these instances can communicate? (Choose 2)
> 1. A network ACL that allows communication between the two subnets.
> 2. Both instances are the same instance class and using the same Key-pair.
> 3. That the default route is set to a NAT instance or Internet Gateway (IGW).
> 4. Security groups are set to allow the application host to talk to the database on the right port/protocol
> 
> > [!success]- Answer & Rationale
> > **Answer: 1, 4**
> > **Rationale:** 
> > - **NACLs**: Since subnets are involved, the [[Security Groups vs NACLs#Network ACLs (NACL)|Network ACLs]] of both subnets must allow the traffic in both directions (stateless).
> > - **Security Groups**: The [[Security Groups vs NACLs#Security Groups (SG)|Security Group]] of the database must allow inbound traffic from the application on the required port.
> > - *Note*: Internal VPC traffic uses the default "local" route, so NAT/IGW is not required for inter-subnet communication.

> [!question]
> A web tier becomes unresponsive due to an unanticipated amount of inbound traffic from 15 specific IP addresses over port 80. The instances are so overloaded that admins cannot SSH into them. Which activity would be useful in defending against this attack?
> 1. Create a custom route table associated with the web tier and block the attacking IP addresses from the IGW
> 2. Change the EIP of the NAT instance in the web tier subnet
> 3. Create 15 Security Group rules to block the attacking IP addresses over port 80
> 4. Create an inbound NACL associated with the web tier subnet with deny rules to block the attacking IP addresses
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale:** [[Security Groups vs NACLs#Network ACLs (NACL)|Network ACLs]] are the correct tool for blocking specific malicious IP addresses via **Deny** rules. Since the instances are overloaded, blocking the traffic at the subnet level prevents it from even reaching the EC2 instances.

> [!question]
> Which of the following statements describes network ACLs? (Choose 2)
> 1. Responses to allowed inbound traffic are allowed to flow outbound regardless of outbound rules
> 2. Using network ACLs, you can deny access from a specific IP range
> 3. Keep network ACL rules simple and use a security group to restrict application level access
> 4. NACLs are associated with a single Availability Zone
> 
> > [!success]- Answer & Rationale
> > **Answer: 2, 3**
> > **Rationale:** 
> > - **Deny Rules**: [[Security Groups vs NACLs#Network ACLs (NACL)|NACLs]] allow explicit deny rules for IP ranges.
> > - **Best Practice**: It is recommended to keep [[Security Groups vs NACLs#Network ACLs (NACL)|NACLs]] simple (e.g., for broad CIDR blocks) and use [[Security Groups vs NACLs#Security Groups (SG)|Security Groups]] for granular, application-level stateful filtering.
> > - *Note*: NACLs are associated with subnets, and while a subnet resides in one AZ, a NACL can be associated with multiple subnets across different AZs.

> [!question]
> You are designing security inside your VPC to establish separate security zones. How would you accomplish this? (Choose 2)
> 1. Configure a security group for every zone. Configure a default allow all rule. Configure explicit deny rules.
> 2. Configure NACL to explicitly allow or deny communication between the different IP address ranges.
> 3. Configure a security group for every zone. Configure allow rules only between zones that need to be able to communicate. Use implicit deny all rule.
> 4. Configure multiple subnets and use routing to limit communication.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2, 3**
> > **Rationale:** 
> > - **NACLs**: Can be used to strictly allow/deny traffic between CIDR ranges representing different zones ([[Security Groups vs NACLs#Network ACLs (NACL)|NACL]]).
> > - **Security Groups**: Use the "Least Privilege" model by only adding **Allow** rules for required traffic. SGs have an implicit "deny all" for anything not explicitly allowed ([[Security Groups vs NACLs#Security Groups (SG)|Security Group]]).

> [!question]
> Can you configure security groups to allow only ICMP ping to pass from a monitoring instance in AZ A to an application instance in AZ B?
> 1. No, instances in different AZs cannot talk via ICMP.
> 2. Yes, both must be in the same security group.
> 3. Yes, the monitoring SG needs outbound ICMP and the application SG needs inbound ICMP.
> 4. Yes, both SGs need both inbound and outbound ICMP allowed.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** Because [[Security Groups vs NACLs#Security Groups (SG)|Security Groups]] are **stateful**, you only need to allow the initiating traffic (outbound on the source, inbound on the destination). The response traffic is automatically permitted.

> [!question]
> A user wants instances in the same subnet to communicate with each other using a security group. How should this be configured?
> 1. No modification needed as all instances in a subnet can communicate by default.
> 2. Configure the subnet as the source in the security group.
> 3. Configure the security group itself as the source and allow traffic on all protocols and ports.
> 4. Use VPC peering.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** This is known as **Security Group Referencing**. By allowing the SG ID as a source, all instances associated with that [[Security Groups vs NACLs#Security Groups (SG)|Security Group]] can communicate with each other, regardless of their IP addresses.

> [!question]
> You want to explicitly deny any outbound connections from VPC instances to the Internet except for specific software depot URLs. Which option would you consider?
> 1. Configure a web proxy server in your VPC and enforce URL-based rules.
> 2. Implement security groups and configure outbound rules to only permit traffic to software depots.
> 3. Move instances to private subnets and add specific routes to the depots.
> 4. Implement network access control lists to specific destinations.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** Neither [[Security Groups vs NACLs#Security Groups (SG)|Security Groups]] nor [[Security Groups vs NACLs#Network ACLs (NACL)|NACLs]] can filter traffic based on URLs or Domain Names (they operate at Layers 3 and 4). A web proxy (Layer 7) is required for URL-based filtering.

> [!question]
> You change the Security Group rules to allow inbound traffic on a new port and protocol. When do the new rules apply to old and new instances?
> 1. Immediately to all instances in the security group.
> 2. Immediately to the new instances only.
> 3. Old instances must be restarted.
> 4. To all instances, but it may take several minutes.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** Rule changes to a [[Security Groups vs NACLs#Security Groups (SG)|Security Group]] are applied immediately to all associated instances and their Elastic Network Interfaces (ENIs).
