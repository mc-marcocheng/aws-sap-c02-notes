---
tags: [aws, sap-c02, architecture-patterns, scope, global, regional, zonal]
---
# AWS Service Scopes

Understanding whether an AWS service is Global, Regional, or Zonal is fundamental to designing highly available, resilient, and fault-tolerant architectures.

## 1. Global Services
These services operate across all of AWS and are not tied to a specific region. Their control planes and data planes span globally.

*   **[[IAM]]** (Identity and Access Management) and **[[IAM Identity Center]]**
*   **[[Route 53 Overview|Route 53]]** (Global DNS)
*   **[[CloudFront Overview|CloudFront]]** (Content Delivery Network)
*   **[[WAF]]** & **[[Shield]]** (Global Security)
*   **[[Organizations Overview|Organizations]]** (Multi-account management)
*   **[[Global Accelerator]]** (Global traffic routing)
*   **[[Trusted Advisor]]** 

## 2. Regional Services
These services are bound to a specific AWS Region. Both the control plane and data plane reside within that region. Data stored in a regional service does not leave that region unless explicitly configured to do so.

*   **Compute:** **[[Lambda]]**, **[[ECS]]**, **[[EKS]]**, **[[Fargate]]**
*   **Storage:** **[[S3 Overview|S3]]** *(Note: S3 has a global bucket namespace, but data is strictly regional)*, **[[EFS]]**
*   **Database:** **[[DynamoDB Overview|DynamoDB]]**, **[[ElastiCache]]**, **[[Redshift]]**, **[[Aurora Overview|Aurora]]**
*   **Networking:** **[[API Gateway]]**, **[[VPC Overview|VPC]]**, **[[Transit Gateway]]**
*   **Integration:** **[[SQS Overview|SQS]]**, **[[SNS]]**, **[[EventBridge]]**, **[[Step Functions]]**
*   **Security:** **[[KMS]]**, **[[Secrets Manager]]**, **[[GuardDuty]]**, **[[Security Hub]]**, **[[Macie]]**, **[[Inspector]]**, **[[Detective]]**
*   **Analytics:** **[[Athena]]**, **[[EMR]]**, **[[Glue]]**, **[[QuickSight]]**, **[[Kinesis Overview|Kinesis]]**
*   **Management:** **[[CloudWatch Overview|CloudWatch]]**, **[[CloudTrail]]**

## 3. Zonal Services (Availability Zone)
These resources are strictly tied to a single Availability Zone within a region. If the Availability Zone goes down, the resources within it are impacted.

*   **[[EC2 Overview|EC2 Instances]]**
*   **[[EBS Overview|EBS Volumes]]**
*   **Subnets** *(A component of a [[VPC Overview|VPC]])*
*   **RDS Instances** *(Single-AZ deployments)*

## 4. Services with Multi-Region or Global Variations
Several regional services have capabilities that allow them to span multiple regions or act globally, which is essential for Disaster Recovery and Global Active-Active architectures.

*   **[[DynamoDB Overview|DynamoDB]]**: Fundamentally regional, but supports **Global Tables** for active-active cross-region replication.
*   **[[Aurora Overview|Aurora]]**: Regional, but supports **Aurora Global Database** for fast cross-region read replicas and disaster recovery.
*   **[[S3 Overview|S3]]**: Regional storage, but supports **Cross-Region Replication (CRR)** and **Multi-Region Access Points** to route requests to the closest region.
*   **[[Transit Gateway]]**: Regional router, but supports **Inter-Region Peering** to connect networks globally.
*   **[[EventBridge]]**: Regional event bus, but supports **Cross-Region Event Routing**.
*   **[[VPC Peering]]**: Supports Inter-Region VPC Peering to connect VPCs across different AWS Regions.
