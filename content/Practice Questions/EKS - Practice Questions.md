---
tags: [aws, sap-c02, eks, practice-questions]
---
# EKS Practice Questions

> [!question]
> A company is migrating its microservices architecture to Amazon EKS. Several pods need to access specific Amazon S3 buckets and Amazon DynamoDB tables. The security team mandates that pods should only have the minimum required permissions, and credentials must not be hardcoded or shared across pods. What is the most secure and scalable way to provide these permissions?
> 1. Attach an IAM role to the EC2 worker nodes containing all required policies for all pods.
> 2. Create an IAM user for each microservice, generate access keys, and store them as Kubernetes Secrets.
> 3. Use IAM Roles for Service Accounts (IRSA) to associate an IAM role with a Kubernetes service account and assign the service account to the pods.
> 4. Deploy a sidecar container that manages temporary STS credentials and injects them into the application pods.
>
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** [[IAM Overview|IRSA (IAM Roles for Service Accounts)]] is the AWS-recommended method to provide granular, least-privilege IAM permissions to individual Kubernetes pods in [[EKS]]. Attaching a role to the EC2 node (Option 1) grants all pods on that node the same permissions. Using IAM users and access keys (Option 2) introduces credential management overhead and security risks.

> [!question]
> An organization is running an EKS cluster in a VPC with limited available IPv4 space. As the cluster scales, they frequently run out of IP addresses because each pod consumes an IP address from the VPC subnets. What is the best architectural solution to prevent IP exhaustion without significantly refactoring the VPC?
> 1. Migrate the EKS cluster workloads to Fargate.
> 2. Implement CNI Custom Networking to assign IPs to pods from secondary VPC CIDR blocks in the 100.64.0.0/10 or 198.19.0.0/16 ranges.
> 3. Disable the Amazon VPC CNI plugin and use kubenet for pod networking.
> 4. Use NAT Gateway to masquerade pod IP addresses behind the worker node IPs.
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** Enabling custom networking with the VPC CNI allows pods to receive IP addresses from a secondary CIDR block (such as Carrier Grade NAT ranges), preserving primary subnet IPs for EC2 instances and other AWS resources while maintaining native VPC connectivity.