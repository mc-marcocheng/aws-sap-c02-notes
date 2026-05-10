---
tags: [aws, sap-c02, vpc, networking, practice-questions]
---
# VPC Endpoints Practice Questions

> [!question]
> You have an application running on an Amazon EC2 instance that uploads 10 GB video objects to amazon S3. Video uploads are taking longer than expected inspite of using multipart upload cause of internet bandwidth, resulting in poor application performance. Which action can help improve the upload performance?
> 1. Apply an Amazon S3 bucket policy
> 2. Use Amazon EBS provisioned IOPS
> 3. Use VPC endpoints for S3
> 4. Request a service limit increase
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** Using [[VPC Endpoints]] for [[S3 Overview|Amazon S3]] allows traffic to remain within the AWS network, bypassing public internet bottlenecks. This significantly improves performance for large uploads and reduces latency.

> [!question]
> What are the services supported by VPC endpoints, using Gateway endpoint type? (Choose 2 answers)
> 1. Amazon S3
> 2. Amazon EFS
> 3. Amazon DynamoDB
> 4. Amazon Glacier
> 5. Amazon SQS
> 
> > [!success]- Answer & Rationale
> > **Answer: 1, 3**
> > **Rationale:** Currently, [[VPC Endpoints#Gateway Endpoints|Gateway Endpoints]] only support [[S3 Overview|Amazon S3]] and [[DynamoDB Overview|Amazon DynamoDB]]. Most other services use [[VPC Endpoints#Interface Endpoints (AWS PrivateLink)|Interface Endpoints]].

> [!question]
> What are the different types of endpoint types supported by VPC endpoints? (Choose 2 Answers)
> 1. Gateway
> 2. Classic
> 3. Interface
> 4. Virtual
> 5. Network
> 
> > [!success]- Answer & Rationale
> > **Answer: 1, 3**
> > **Rationale:** AWS supports two types of [[VPC Endpoints]]: **Gateway Endpoints** (for S3 and DynamoDB) and **Interface Endpoints** (powered by [[VPC Endpoints|AWS PrivateLink]]).

> [!question]
> An application running on EC2 instances processes sensitive information stored on Amazon S3. The information is accessed over the Internet. The security team is concerned that the Internet connectivity to Amazon S3 is a security risk. Which solution will resolve the security concern?
> 1. Access the data through an Internet Gateway.
> 2. Access the data through a VPN connection.
> 3. Access the data through a NAT Gateway.
> 4. Access the data through a VPC endpoint for Amazon S3.
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale:** A [[VPC Endpoints|VPC Endpoint]] for [[S3 Overview|Amazon S3]] ensures that traffic between the [[VPC Overview|VPC]] and S3 never leaves the Amazon network, eliminating exposure to the public internet and addressing the security concern.

> [!question]
> You need to design a VPC for a three-tier architecture, a web application consisting of an Elastic Load Balancer (ELB), a fleet of web/application servers, and a backend consisting of an RDS database. The entire Infrastructure must be distributed over 2 availability zones. Which VPC configuration works while assuring the least components are exposed to Internet?
> 1. Two public subnets for ELB, two private subnets for the web-servers, two private subnets for RDS and DynamoDB
> 2. Two public subnets for ELB and web-servers, two private subnets for RDS and DynamoDB
> 3. Two public subnets for ELB, two private subnets for the web-servers, two private subnets for RDS and VPC Endpoints for DynamoDB
> 4. Two public subnets for ELB and web-servers, two private subnets for RDS and VPC Endpoints for DynamoDB
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** To minimize internet exposure:
> > 1. The [[ELB Overview|ELB]] must be in public subnets to receive external traffic.
> > 2. Web/App servers and [[RDS Overview|RDS]] should be in private subnets.
> > 3. Using [[VPC Endpoints]] for [[DynamoDB Overview|DynamoDB]] allows the private app servers to reach DynamoDB without requiring a [[VPC NAT Gateway|NAT Gateway]] or Internet Gateway.

> [!question]
> A company needs to access Amazon S3 buckets in a different AWS Region privately without exposing traffic to the public internet. Which solution should they use? (Assume November 2025 or later)
> 1. Use Gateway VPC Endpoints for cross-region S3 access
> 2. Use Interface VPC Endpoints with cross-region PrivateLink for S3
> 3. Set up VPC peering between regions and use Gateway Endpoints
> 4. Use AWS Direct Connect with public VIF
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** Gateway endpoints do not support cross-region access. As of November 2025, [[VPC Endpoints#Interface Endpoints (AWS PrivateLink)|Interface VPC Endpoints]] support native cross-region connectivity for [[S3 Overview|Amazon S3]], allowing private access to buckets in other regions over the AWS backbone.
