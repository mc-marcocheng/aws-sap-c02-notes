---
tags: [aws, sap-c02, architecture, ha, practice-questions]
---
# High Availability Practice Questions

> [!question]
> You are moving an existing traditional system to AWS, and during the migration discover that there is a master server which is a single point of failure. Having examined the implementation of the master server you realize there is not enough time during migration to re-engineer it to be highly available, though you do discover that it stores its state in a local MySQL database. In order to minimize down-time you select RDS to replace the local database and configure master to use it, what steps would best allow you to create a self-healing architecture?
> 
> 1. Migrate the local database into multi-AZ RDS database. Place master node into a multi-AZ auto-scaling group with a minimum of one and maximum of one with health checks.
> 2. Replicate the local database into a RDS read replica. Place master node into a Cross-Zone ELB with a minimum of one and maximum of one with health checks.
> 3. Migrate the local database into multi-AZ RDS database. Place master node into a Cross-Zone ELB with a minimum of one and maximum of one with health checks.
> 4. Replicate the local database into a RDS read replica. Place master node into a multi-AZ auto-scaling group with a minimum of one and maximum of one with health checks.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > 
> > **Rationale:**
> > - [[RDS Overview|RDS]] Multi-AZ provides high availability for the database layer through synchronous replication and automated failover.
> > - Placing a single master node in an [[Auto Scaling Overview|Auto Scaling]] Group (ASG) with `Min=1, Max=1` across multiple [[VPC Overview|Availability Zones]] (AZs) ensures "self-healing." If the instance or AZ fails, the ASG will automatically launch a replacement instance in a healthy AZ.
> > - [[ELB Overview|ELB]] cannot manage the lifecycle (Min/Max) of instances; it only distributes traffic.
> > - [[RDS Replication|Read Replicas]] provide scalability for read-heavy workloads but do not provide high availability for writes or automatic failover in the same way Multi-AZ does.

> [!question]
> You are designing Internet connectivity for your VPC. The Web servers must be available on the Internet. The application must have a highly available architecture. Which alternatives should you consider? (Choose 2 answers)
> 
> 1. Configure a NAT instance in your VPC. Create a default route via the NAT instance and associate it with all subnets.
> 2. Configure a CloudFront distribution and configure the origin to point to the private IP addresses of your Web servers.
> 3. Place all your web servers behind ELB. Configure a Route53 CNAME to point to the ELB DNS name.
> 4. Assign EIPs to all web servers. Configure a Route53 record set with all EIPs. With health checks and DNS failover.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3, 4**
> > 
> > **Rationale:**
> > - **3:** Using an [[ELB Overview|ELB]] (Elastic Load Balancer) to front web servers is the standard pattern for [[High Availability]]. [[Route 53 Overview|Route 53]] can point to the ELB via CNAME or Alias records.
> > - **4:** Assigning [[VPC Overview|Elastic IP]] (EIP) addresses to multiple web servers and using [[Route 53 Overview|Route 53]] with health checks and DNS failover provides a mechanism for HA, though ELB is generally more robust for modern web apps.
> > - **1:** [[VPC NAT Gateway|NAT Instance]]/Gateway is used to provide internet access to instances in *private* subnets, not to make web servers available *from* the internet.
> > - **2:** [[CloudFront Overview|CloudFront]] cannot point directly to private IP addresses; the origin must be publicly resolvable or use a Load Balancer.

> [!question]
> When deploying a highly available 2-tier web application on AWS, which combination of AWS services meets the requirements?
> 
> 1. Amazon Route 53, Elastic Load Balancing, Auto Scaling, and Amazon VPC
> 2. AWS Storage Gateway, Elastic Load Balancing, Auto Scaling, and AWS CloudTrail
> 3. AWS Direct Connect, Amazon Route 53, Amazon EC2, and Amazon VPC
> 4. AWS Direct Connect, AWS Storage Gateway, Auto Scaling, and AWS CloudTrail
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > 
> > **Rationale:**
> > - A highly available 2-tier architecture requires:
> >     1. [[VPC Overview|VPC]] for secure networking.
> >     2. [[Route 53 Overview|Route 53]] for highly available DNS.
> >     3. [[ELB Overview|ELB]] for distributing traffic across AZs.
> >     4. [[Auto Scaling Overview|Auto Scaling]] to maintain the desired number of healthy instances.
> > - Direct Connect and Storage Gateway are hybrid connectivity services, not core components for web tier HA. CloudTrail is for auditing.

> [!question]
> Company A is migrating an interactive website with real-time restaurant ratings to AWS. The site is expected to grow rapidly and must be highly available. The current setup is a Windows web server and a MySQL database. What is the most efficient way to transfer this to AWS ensuring performance and HA?
> 
> 1. Export web files to S3. Run the website directly out of S3. Launch a multi-AZ MySQL RDS. Use Route 53 pointing to an ELB.
> 2. Launch two Windows instances in us-west-1a and two in us-west-1b. Copy web files to instances. Launch a multi-AZ MySQL RDS. Create an ELB and a Route 53 Alias record.
> 3. Use VM Import/Export for an AMI. Configure Auto Scaling for 2 servers in us-west-1a and 2 in us-west-1b. Launch Multi-AZ RDS. Use Route 53 A record to point to the ELB.
> 4. Use VM Import/Export for an AMI. Configure Auto Scaling. Launch multi-AZ RDS. Create an ELB and Route 53 A record pointing to the ELB.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > 
> > **Rationale:**
> > - **2** provides full HA by spreading instances across two AZs (us-west-1a/b) and using a Multi-AZ [[RDS Overview|RDS]] instance.
> > - [[Route 53 Overview|Route 53]] Alias records are essential when pointing a naked domain or subdomain to an [[ELB Overview|ELB]], as ELBs do not have static IP addresses.
> > - **1** is incorrect because an "interactive" website usually requires a compute layer (S3 hosting is for static sites).
> > - **3 and 4** fail because they suggest standard "A records" for ELB, which requires an Alias record or CNAME.

> [!question]
> A registration site requires 6 web servers and 6 app servers for normal operation, but can run on a minimum of 65% capacity. It uses one MySQL database. Which architecture provides high availability in a region with 3 Availability Zones?
> 
> 1. Web and app tiers in 2 AZs (3 each), RDS with read replicas in the 3rd AZ.
> 2. Web and app tiers in 3 AZs (2 each), RDS with read replicas in the other two AZs.
> 3. Web and app tiers in 2 AZs (3 each), Multi-AZ RDS deployment.
> 4. Web and app tiers in 3 AZs (2 each), Multi-AZ RDS deployment.
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > 
> > **Rationale:**
> > - **Capacity Calculation:** 65% of 6 servers is 3.9, so at least 4 servers must remain operational.
> > - In a **3-AZ** setup with 2 instances per AZ (Total 6): If one AZ fails, 4 instances remain. 4/6 = 66.6%, which meets the 65% requirement.
> > - In a **2-AZ** setup with 3 instances per AZ (Total 6): If one AZ fails, only 3 instances remain. 3/6 = 50%, which fails the requirement.
> > - **Database:** [[RDS Overview|RDS]] Multi-AZ is the standard for high availability, providing synchronous replication and automated failover. Read replicas are primarily for scaling reads.

> [!question]
> For a 3-tier site in a Region with only two AZs, which architecture provides fault tolerance if the application minimally requires 6 web tier servers and 6 application tier servers?
> 
> 1. 6 EC2 instances in EACH AZ (Total 12) inside an ASG behind an ELB for both tiers, and Multi-AZ RDS.
> 2. 3 EC2 instances in EACH AZ (Total 6) inside an ASG behind an ELB for both tiers, and Multi-AZ RDS.
> 3. 3 EC2 instances in one AZ and 6 in another, with RDS Read Replicas.
> 4. 6 instances in one AZ and 6 stopped instances in the other AZ ready to start.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > 
> > **Rationale:**
> > - To provide [[High Availability|Fault Tolerance]] where a minimum of 6 instances must be running at all times in a 2-AZ region, you must assume one AZ could fail completely.
> > - Deploying 6 instances per AZ (12 total) ensures that if one AZ fails, the remaining 6 instances in the other AZ satisfy the requirement immediately.
> > - [[RDS Overview|RDS]] Multi-AZ ensures the database remains available across the AZ failure.

> [!question]
> You need at minimum 8 instances. In us-east-1 (6 AZs), how should you distribute instances to handle a full AZ failure while minimizing cost?
> 
> 1. 3 servers in each of 4 AZs.
> 2. 8 servers in each of 2 AZs.
> 3. 2 servers in each of 5 AZs.
> 4. 4 servers in each of 3 AZs.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > 
> > **Rationale:**
> > - This is an **N+1 Redundancy** cost optimization problem.
> > - **3:** 5 AZs * 2 instances = 10 total. If 1 AZ fails, 4 AZs * 2 = 8 instances remain. (Cost: 10 instances)
> > - **1:** 4 AZs * 3 instances = 12 total. If 1 AZ fails, 3 AZs * 3 = 9 instances remain. (Cost: 12 instances)
> > - **2:** 2 AZs * 8 instances = 16 total. If 1 AZ fails, 8 instances remain. (Cost: 16 instances)
> > - **4:** 3 AZs * 4 instances = 12 total. If 1 AZ fails, 2 AZs * 4 = 8 instances remain. (Cost: 12 instances)
> > - Spreading instances across more AZs reduces the "extra" capacity needed to survive a single zone failure.

> [!question]
> You need your DynamoDB-backed API to stay online during a total regional AWS failure. You can tolerate a couple minutes of lag during recovery. What is the best approach?
> 
> 1. Set up DynamoDB Global Tables. Create an ASG behind an ELB in two regions. Use Route 53 Latency DNS with DNS Failover.
> 2. Set up a DynamoDB Multi-Region table. Create a cross-region ELB pointing to a cross-region ASG.
> 3. Use DynamoDB Read Replicas in another region and manual failover scripts for EC2.
> 4. Use S3 to backup DynamoDB and restore in another region during failure.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > 
> > **Rationale:**
> > - [[DynamoDB Overview|DynamoDB]] Global Tables (cross-region replication) provides a multi-region database solution.
> > - Deploying compute resources (ASG + ELB) in multiple regions and using [[Route 53 Overview|Route 53]] Latency routing with health checks allows traffic to be redirected to a healthy region automatically if the primary region fails.
> > - There is no such thing as a "Cross-region ELB" or "Cross-region ASG"; these resources are regional.

> [!question]
> You are setting up a WordPress site using Route 53, ELB, EC2, and RDS. Connection strings are correct, but the URL doesn't load. Which of the following could NOT be the cause?
> 
> 1. Forgotten to open port 80/443 on the EC2 security group.
> 2. ELB health check is checking a non-existent page.
> 3. No ALIAS record configured in Route 53.
> 4. Port 22 is locked down to your specific IP address.
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > 
> > **Rationale:**
> > - Port 22 is used for [[EC2 Overview|SSH]] management access. Locking it to a specific IP or even closing it entirely would prevent administrative access but would have no impact on public users trying to access the website via HTTP (80) or HTTPS (443).
> > - Security Groups (1), ELB Health Checks (2), and DNS configuration (3) are all common causes for a website failing to load.

> [!question]
> A development team wants to move to a CI model on AWS. They need a source code repo, project management (MySQL), build resources, and QA storage. They must integrate with on-premises LDAP/email. What is the best combination of services?
> 
> 1. VPC with VPN Gateway, EC2 for repo/EBS, RDS for project management, SQS for build queue, ASG for build instances, and S3 for output.
> 2. Bastion host with VPN, EC2 for repo, RDS, SQS, and SES for build output.
> 3. Storage Gateway for connectivity, EC2 for repo, RDS, SNS for builds, and S3 for output.
> 4. Direct Connect, S3 for repo, DynamoDB for project management, and EMR for builds.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > 
> > **Rationale:**
> > - A [[VPC Overview|VPC]] with a **VPN Gateway** provides the secure, private connectivity required to reach on-premises LDAP and email servers.
> > - [[SQS Overview|SQS]] is an ideal way to queue build jobs, which can then be processed by an [[Auto Scaling Overview|Auto Scaling]] Group of EC2 instances.
> > - [[S3 Overview|S3]] is the standard service for storing build artifacts (output) for QA.
> > - [[RDS Overview|RDS]] MySQL satisfies the project management database requirement with high availability.
