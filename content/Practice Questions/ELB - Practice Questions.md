---
tags: [aws, sap-c02, elb, networking, practice-questions]
---
# ELB Practice Questions

> [!question]
> You are migrating a legacy client-server application to AWS. The application responds to a specific DNS domain (e.g. www.example.com) and has a 2-tier architecture, with multiple application servers and a database server. Remote clients use TCP to connect to the application servers. The application servers need to know the IP address of the clients in order to function properly and are currently taking that information from the TCP socket. A Multi-AZ RDS MySQL instance will be used for the database. During the migration you can change the application code but you have to file a change request. How would you implement the architecture on AWS in order to maximize scalability and high availability?
> 1. File a change request to implement Proxy Protocol support In the application. Use an ELB with a TCP Listener and Proxy Protocol enabled to distribute load on two application servers in different AZs.
> 2. File a change request to Implement Cross-Zone support in the application. Use an ELB with a TCP Listener and Cross-Zone Load Balancing enabled, two application servers in different AZs.
> 3. File a change request to implement Latency Based Routing support in the application. Use Route 53 with Latency Based Routing enabled to distribute load on two application servers in different AZs.
> 4. File a change request to implement Alias Resource support in the application Use Route 53 Alias Resource Record to distribute load on two application servers in different AZs.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** [[ELB Overview|Elastic Load Balancing]] supports Proxy Protocol version 1 when you use TCP for both front-end and back-end connections. Proxy Protocol provides a human-readable header that includes connection information such as the source IP address, destination IP address, and port numbers. The application servers must be configured to parse this header to know the original client IP.

> [!question]
> You are designing an SSL/TLS solution that requires HTTPS clients to be authenticated by the Web server using client certificate authentication. The solution must be resilient. Which of the following options would you consider for configuring the web server infrastructure? (Choose 2 answers)
> 1. Configure ELB with TCP listeners on TCP/443. And place the Web servers behind it.
> 2. Configure your Web servers with EIPs. Place the Web servers in a Route53 Record Set and configure health checks against all Web servers.
> 3. Configure ELB with HTTPS listeners, and place the Web servers behind it.
> 4. Configure your web servers as the origins for a CloudFront distribution. Use custom SSL certificates on your CloudFront distribution.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1, 2**
> > **Rationale:** [[ELB Overview|Elastic Load Balancers]] with HTTPS listeners do not support Client-Side certificates (mutual TLS) because they terminate the connection without passing the client certificate. To perform client certificate authentication, you must pass the TCP connection directly to the web servers. This can be done by using a Network Load Balancer (or Classic ELB with TCP listeners) on port 443, OR by using Route 53 with health checks directly against instances with EIPs.

> [!question]
> You are designing a multi-platform web application for AWS. The application will run on EC2 instances and will be accessed from PCs, tablets and smart phones. Supported accessing platforms are Windows, MACOS, IOS and Android. Separate sticky session and SSL certificate setups are required for different platform types. Which of the following describes the most cost effective and performance efficient architecture setup?
> 1. Setup a hybrid architecture to handle session state and SSL certificates on-prem and separate EC2 Instance groups running web applications for different platform types running in a VPC.
> 2. Set up one ELB for all platforms to distribute load among multiple instance under it. Each EC2 instance implements all functionality for a particular platform.
> 3. Set up two ELBs. The first ELB handles SSL certificates for all platforms and the second ELB handles session stickiness for all platforms for each ELB run separate EC2 instance groups to handle the web application for each platform.
> 4. Assign multiple ELBs to an EC2 instance or group of EC2 instances running the common components of the web application, one ELB for each platform type. Session stickiness and SSL termination are done at the ELBs.
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale:** In a scenario requiring different SSL certificates and distinct session stickiness per platform on common backend components, assigning multiple [[ELB Overview|ELBs]] to the same group of instances is the most cost-effective. Each ELB acts as the entry point for a specific platform, handling its specific SSL termination and sticky session logic, without requiring you to duplicate the entire EC2 compute fleet for each platform. Note: While ALBs support SNI and multiple certificates, they still only support a single stickiness policy.

> [!question]
> A customer has an online store that uses cookie-based sessions to track logged-in customers. It is deployed on AWS using ELB and Auto Scaling. When the load increases, Auto scaling automatically launches new web servers, but the load on the web servers do not decrease. This causes the customers a poor experience. Which two answer choices independently describe a behavior that could be the cause of the sluggish user experience? (Choose 2 answers)
> 1. ELB's normal behavior sends requests from the same user to the same backend instance.
> 2. ELB's behavior when sticky sessions are enabled causes ELB to send requests in the same session to the same backend.
> 3. A faulty browser is not honoring the TTL of the ELB DNS name.
> 4. The web application uses long polling such as comet or websockets, thereby keeping a connection open to a web server for a long time.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2, 4**
> > **Rationale:** If an [[ELB Overview|ELB]] has sticky sessions enabled, existing user sessions will remain tied to their original EC2 instances, meaning newly launched instances won't receive traffic from existing users. Similarly, if the application uses long polling (like websockets), the connections remain open and active with the older instances, preventing load from shifting to the new instances launched by [[Auto Scaling Overview|Auto Scaling]].

> [!question]
> Your application currently leverages AWS Auto Scaling to grow and shrink as load increases or decreases and has been performing well. Your marketing team expects a steady ramp up in traffic to follow an upcoming campaign that will result in a 20x growth in traffic over 4 weeks. Your forecast for the approximate number of Amazon EC2 instances necessary to meet the peak demand is 175. What should you do to avoid potential service disruptions during the ramp up in traffic?
> 1. Ensure that you have pre-allocated 175 Elastic IP addresses so that each server will be able to obtain one as it launches.
> 2. Check the service limits in Trusted Advisor and adjust as necessary so the forecasted count remains within limits.
> 3. Change your Auto Scaling configuration to set a desired capacity of 175 prior to the launch of the marketing campaign.
> 4. Pre-warm your Elastic Load Balancer to match the requests per second anticipated during peak demand.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** Since the traffic will steadily ramp up over 4 weeks, the [[ELB Overview|Elastic Load Balancer]] has plenty of time to scale automatically without needing manual pre-warming (which is meant for sudden, massive spikes). However, scaling up to 175 instances could easily hit account service limits for EC2 instances. Checking [[Trusted Advisor|AWS Trusted Advisor]] and requesting limit increases for EC2 instance capacity ensures Auto Scaling can operate without disruption.

> [!question]
> A startup deploys its photo-sharing site in a VPC. An elastic load balancer distributes web traffic across two subnets. The load balancer session stickiness is configured to use the AWS-generated session cookie, with a session TTL of 5 minutes. The web server Auto Scaling group is configured as min-size=4, max-size=4. The startup runs load-testing software on a single Amazon EC2 instance. After 60 minutes, the web server logs show that web servers in subnet A received over 20,000 requests each, while web servers in subnet B received 0 requests from the load tester. Which recommendations can help ensure that load-testing HTTP requests are evenly distributed across the four web servers? (Choose 2 answers)
> 1. Launch and run the load-tester Amazon EC2 instance from us-east-1 instead.
> 2. Configure Elastic Load Balancing session stickiness to use the app-specific session cookie.
> 3. Re-configure the load-testing software to re-resolve DNS for each web request.
> 4. Configure Elastic Load Balancing and Auto Scaling to distribute across us-west-2a and us-west-2b.
> 5. Use a third-party load-testing service which offers globally distributed test clients.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3, 5**
> > **Rationale:** [[ELB Overview|Elastic Load Balancers]] scale by creating multiple nodes (IP addresses) in DNS. If a load tester from a single EC2 instance caches a single DNS response and doesn't re-resolve it, it will send all traffic to just one ELB node in one AZ (resulting in traffic only hitting instances in that AZ). To distribute the test properly, you must either re-configure the software to re-resolve the DNS (preventing caching of a single ELB IP), or use a globally distributed load testing service with multiple clients mimicking real-world traffic.

> [!question]
> You are designing an application that contains protected health information (PHI). Security and compliance requirements for your application mandate that all PHI in the application use encryption at rest and in transit. The application uses a three-tier architecture where data flows through the load balancer and is stored on Amazon EBS volumes for processing, and the results are stored in Amazon S3 using the AWS SDK. Which of the following two options satisfy the security requirements? (Choose 2 answers)
> 1. Use SSL termination on the load balancer, Amazon EBS encryption on Amazon EC2 instances, and Amazon S3 with server-side encryption.
> 2. Use SSL termination with a SAN SSL certificate on the load balancer, Amazon EC2 with all Amazon EBS volumes using Amazon EBS encryption, and Amazon S3 with server-side encryption with customer-managed keys.
> 3. Use TCP load balancing on the load balancer, SSL termination on the Amazon EC2 instances, OS-level disk encryption on the Amazon EBS volumes, and Amazon S3 with server-side encryption.
> 4. Use SSL termination on the load balancer, an SSL listener on the Amazon EC2 instances, Amazon EBS encryption on EBS volumes containing PHI, and Amazon S3 with server-side encryption.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3, 4**
> > **Rationale:** To maintain encryption in transit for PHI, data must be encrypted all the way to the instances. If you terminate SSL at the load balancer and send unencrypted HTTP to the instances (as in options 1 and 2), you violate the "encryption in transit" requirement. You must either use TCP load balancing to pass the encrypted traffic directly to the instances (Option 3), or terminate SSL at the ELB but re-encrypt it (using an SSL listener on the backend instances) before sending to the EC2 instances (Option 4). Additionally, EBS and S3 encryption handles the "at rest" requirements.

> [!question]
> A user has configured a website and launched it using the Apache web server on port 80. The user is using ELB with the EC2 instances for Load Balancing. What should the user do to ensure that the EC2 instances accept requests only from the ELB?
> 1. Open the port for an ELB static IP in the EC2 security group
> 2. Configure the security group of EC2, which allows access to the ELB source security group
> 3. Configure the EC2 instance so that it only listens on the ELB port
> 4. Configure the security group of EC2, which allows access only to the ELB listener
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** To restrict access so that an EC2 instance only accepts traffic from an [[ELB Overview|Elastic Load Balancer]], you should configure the Security Group of the EC2 instances to only allow inbound traffic from the Security Group ID associated with the ELB.

> [!question]
> A user has created an ELB with Auto Scaling. Which of the below mentioned offerings from ELB helps the user to stop sending new requests traffic from the load balancer to the EC2 instance when the instance is being deregistered while continuing in-flight requests?
> 1. ELB sticky session
> 2. ELB deregistration check
> 3. ELB connection draining
> 4. ELB auto registration Off
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** [[ELB Overview|Connection Draining]] (also known as Deregistration Delay on modern ELBs) allows the load balancer to complete in-flight requests made while keeping the existing connections open, and preventing any new requests from being sent to instances that are de-registering or unhealthy.

> [!question]
> Which of the following features ensures even distribution of traffic to Amazon EC2 instances in multiple Availability Zones registered with a load balancer?
> 1. Elastic Load Balancing request routing
> 2. An Amazon Route 53 weighted routing policy
> 3. Elastic Load Balancing cross-zone load balancing
> 4. An Amazon Route 53 latency routing policy
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** Enabling **Cross-Zone load balancing** allows the [[ELB Overview|Elastic Load Balancer]] to distribute incoming requests evenly across all the backend instances, regardless of the Availability Zone they are in. Without it, the load balancer distributes traffic evenly across AZs first, which can cause uneven instance load if the AZs have different numbers of instances.
