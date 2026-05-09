---
tags: [aws, sap-c02, architecture]
---
# High Availability & Fault Tolerance

Building reliable systems on AWS requires understanding the distinction between High Availability (HA) and Fault Tolerance (FT).

> [!info] Definitions
> - **High Availability (HA)**: Ensures a system is "mostly" available and can recover quickly from failures. It often involves redundancy and automated failover.
> - **Fault Tolerance (FT)**: A higher bar where the system remains fully operational even if a major component fails, often with zero downtime or data loss.

## Core Pillars of High Availability

### 1. Global Infrastructure
- **Regions**: Geographically distinct locations. Use multi-region for Disaster Recovery (DR).
- **Availability Zones (AZs)**: Distinct locations within a Region, engineered to be insulated from failures in other AZs.
- **Edge Locations**: Used by CloudFront and Route 53 to reduce latency and provide global reach.

### 2. Compute
- **Auto Scaling Groups (ASG)**: Automatically adjusts the number of EC2 instances. Can work across multiple AZs to ensure capacity even if one AZ fails.
- **Elastic Load Balancing (ELB)**: Distributes traffic across multiple instances in multiple AZs. Health checks ensure traffic is only sent to healthy instances.

### 3. Storage
- **S3**: Highly durable and available by default (replicated across multiple facilities/AZs).
- **EBS**: Replicated within a single AZ. Use **EBS Snapshots** (stored in S3) for cross-AZ/cross-region durability.
- **EFS**: Provides regional storage accessible across multiple AZs.

### 4. Database
- **RDS Multi-AZ**: Synchronous replication to a standby in a different AZ. Automated failover.
- **Aurora**: Replicates 6 copies of data across 3 AZs. Highly resilient to AZ failure.
- **DynamoDB**: Global Tables provide multi-region HA with asynchronous replication.

### 5. Networking
- **Route 53**: Highly available DNS with health checks and failover routing.
- **CloudFront**: Global content delivery network (CDN) that caches content at edge locations.

## Architecture Patterns

### N+1 Redundancy
To handle an AZ failure cost-effectively, spread instances across multiple AZs such that the remaining AZs can handle the load.

> [!exam] Cost Optimization for N+1
> If you need 8 instances to handle peak load and you have 5 AZs available:
> - Put 2 instances in each of the 5 AZs (Total 10).
> - If 1 AZ fails, you still have 4 AZs * 2 instances = 8 instances (Required Capacity).
> - This is more cost-effective than 8 instances in each of 2 AZs (Total 16).

### Summary of Service HA/FT Characteristics

| Service | Level of Availability | Mechanism |
| ------- | --------------------- | --------- |
| **S3** | Regional | Replicated across 3+ facilities |
| **SQS / SNS** | Regional | Distributed architecture |
| **RDS Multi-AZ** | Multi-AZ | Synchronous Standby |
| **EC2** | AZ Specific | Must use ASG + ELB for HA |
| **EBS** | AZ Specific | Replicated within AZ; use Snapshots |
| **Aurora** | Regional | 6-way replication across 3 AZs |

> [!important]
> Stateless applications are easier to scale and make highly available. Store session state in external services like DynamoDB or ElastiCache.

> [!exam] 
> - **RDS Read Replicas** are for scalability, NOT High Availability (though they can be promoted).
> - **Elastic IP (EIP)** can be remapped to a standby instance for basic HA, but ELB is preferred for modern architectures.

---
**Practice:** [[High Availability - Practice Questions|High Availability Practice Questions]]