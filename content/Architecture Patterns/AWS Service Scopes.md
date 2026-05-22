---
tags: [aws, sap-c02, architecture-patterns, scope, global, regional, zonal]
---
# AWS Service Scopes

Understanding whether an AWS service is Global, Regional, or Zonal is fundamental to designing highly available, resilient, and fault-tolerant architectures.

## 1. Global Services
These services operate across all of AWS and are not tied to a specific region. Their control planes and data planes span globally.

*   **[[IAM]]** (Identity and Access Management)
*   **[[IAM Identity Center]]** *(Note: Provides global access management, but is **deployed in a single home region** where its configuration data resides. It is not purely global in the same architectural sense as IAM.)*
*   **[[Route 53 Overview|Route 53]]** (Global DNS)
*   **[[CloudFront Overview|CloudFront]]** (Content Delivery Network)
*   **[[Shield]]** (Global Security - Shield Advanced)
*   **[[Organizations Overview|Organizations]]** (Multi-account management)
*   **[[Global Accelerator]]** (Global traffic routing)
*   **[[Trusted Advisor]]**
*   **[[Billing and Cost Management|Cost Explorer / Billing]]**: Provides a global view of costs across the organization.
*   **[[Artifact]]**: Portal for global compliance reports.

> [!warning] WAF Scope
> **[[WAF]]** is contextually scoped. It is only **Global** (us-east-1 scoped) when associated with **CloudFront**. It is **Regional** when associated with ALBs, API Gateway, AppSync, or Cognito.

## 2. Regional Services
These services are bound to a specific AWS Region. Both the control plane and data plane reside within that region. Data stored in a regional service does not leave that region unless explicitly configured to do so.

*   **Compute:** **[[Lambda]]**, **[[ECS]]**, **[[EKS]]**, **[[Fargate]]**
*   **Storage:** **[[S3 Overview|S3]]** *(Note: S3 has a global bucket namespace, but data is strictly regional)*, **[[EFS]]**, **[[FSx]]**, **[[Storage Gateway]]**
*   **Database:** **[[DynamoDB Overview|DynamoDB]]**, **[[ElastiCache]]**, **[[Redshift]]**, **[[Aurora Overview|Aurora]]**
*   **Networking:** **[[API Gateway]]**, **[[VPC Overview|VPC]]**, **[[Transit Gateway]]**
*   **Integration:** **[[SQS Overview|SQS]]**, **[[SNS]]**, **[[EventBridge]]**, **[[Step Functions]]**
*   **Security:** **[[KMS]]**, **[[Secrets Manager]]**, **[[GuardDuty]]**, **[[Security Hub]]**, **[[Macie]]**, **[[Inspector]]**, **[[Detective]]**, **[[Cognito]]** *(User & Identity Pools are strictly regional)*
*   **Analytics:** **[[Athena]]**, **[[EMR]]**, **[[Glue]]**, **[[QuickSight]]**, **[[Kinesis Overview|Kinesis]]**
*   **Management:** **[[CloudWatch Overview|CloudWatch]]**, **[[CloudTrail]]**, **[[Systems Manager Overview|Systems Manager]]** *(SSM, Parameter Store, Patch Manager are regional)*
*   **Compute/Storage Sub-resources**: **[[EBS Snapshots]]** and **AMIs** *(While EBS Volumes are Zonal, the Snapshots and AMIs derived from them are Regional, stored under the hood in S3)*

## 3. Zonal Services (Availability Zone)
These resources are strictly tied to a single Availability Zone within a region. If the Availability Zone goes down, the resources within it are impacted.

*   **[[EC2 Overview|EC2 Instances]]**
*   **[[EBS Overview|EBS Volumes]]**
*   **Subnets** *(A component of a [[VPC Overview|VPC]])*
*   **RDS Instances** *(Single-AZ deployments)*
*   **[[VPC NAT Gateway|NAT Gateways]]**
*   **Elastic Network Interfaces (ENIs)**
*   **ELB Nodes** *(Individual nodes are zonal; the Load Balancer service itself is regional)*
*   **Redshift single-node clusters**
*   **Hyper-Local Extensions**: **[[Local Zones]]** and **[[Wavelength]]** Zones sit "below" the standard AZ level to provide ultra-low latency compute.

## 4. Services with Multi-Region or Global Variations
Several regional services have capabilities that allow them to span multiple regions or act globally, which is essential for Disaster Recovery and Global Active-Active architectures.

*   **[[DynamoDB Overview|DynamoDB]]**: Fundamentally regional, but supports **Global Tables** for active-active cross-region replication.
*   **[[Aurora Overview|Aurora]]**: Regional, but supports **Aurora Global Database** for fast cross-region read replicas and disaster recovery.
*   **[[RDS Overview|RDS]]**: Supports **Cross-Region Read Replicas** for asynchronous disaster recovery.
*   **[[S3 Overview|S3]]**: Regional storage, but supports **Cross-Region Replication (CRR)** and **Multi-Region Access Points** to route requests to the closest region.
*   **[[Transit Gateway]]**: Regional router, but supports **Inter-Region Peering** to connect networks globally.
*   **[[Direct Connect Gateway]]**: A global network router that allows you to connect on-premises environments to VPCs in *any* AWS Region.
*   **[[EventBridge]]**: Regional event bus, but supports **Cross-Region Event Routing**.
*   **[[VPC Peering]]**: Supports Inter-Region VPC Peering to connect VPCs across different AWS Regions.
*   **[[KMS]]**: Supports **Multi-Region Keys** (replicated key material across regions).
*   **[[Secrets Manager]]**: Supports **Cross-Region Replication** of secrets.
*   **[[CloudFormation StackSets]]**: Allows deploying CloudFormation stacks across multiple regions and accounts globally.
*   **[[Backup]]**: Supports Cross-Region and Cross-Account Backups.
*   **[[EFS]]**: Supports Cross-Region Replication.
*   **[[ElastiCache]]**: Supports **Global Datastore** for Redis.
*   **[[Security Hub]]**: Regional, but supports **cross-region finding aggregation**.
*   **[[CloudTrail]]**: Supports **Multi-Region Trails** and **Organization Trails** to aggregate logs globally into a single S3 bucket.
*   **[[CloudWatch Overview|CloudWatch]]**: Supports **Cross-Account Cross-Region Dashboards** to aggregate metrics globally.
