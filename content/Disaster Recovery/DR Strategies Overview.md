---
tags: [aws, sap-c02, disaster-recovery]
---
# Disaster Recovery Strategies Overview

Disaster Recovery (DR) is the process of preparing for and recovering from a disaster. In AWS, the focus is on minimizing **RTO (Recovery Time Objective)** and **RPO (Recovery Point Objective)** while optimizing cost.

## Key Metrics

- **Recovery Time Objective (RTO)**: The maximum acceptable delay between the interruption of service and restoration of service. (How long can we be down?)
- **Recovery Point Objective (RPO)**: The maximum acceptable amount of data loss measured in time. (How much data can we lose?)

![[dr-rto-rpo-planning.png]]

---
## Disaster Recovery Strategies

| Strategy | RPO | RTO | Cost | Description |
| :--- | :--- | :--- | :--- | :--- |
| **Backup & Restore** | Hours | 24h+ | $ | Backups restored from S3. Infrastructure created after disaster. |
| **Pilot Light** | Minutes | 10s of Mins | $$ | Live data (DBs) + dormant app servers (AMIs). |
| **Warm Standby** | Seconds | Minutes | $$$ | Scaled-down but functional environment always running. |
| **Multi-Site** | ~0 | ~0 | $$$$ | Active-Active full environments in multiple regions. |

---
### Decision Tree: Choosing a DR Strategy

| If RPO is... | and RTO is... | Choose... |
| :--- | :--- | :--- |
| Hours | 24h+ | **Backup & Restore** |
| Minutes | 10s of Minutes | **Pilot Light** |
| Seconds | Minutes | **Warm Standby** |
| ~0 (Real-time) | ~0 (Near-instant) | **Multi-Site (Active-Active)** |

---
### 1. Backup & Restore
- **Mechanism**: Use S3 for storage, AWS Backup for automation, and EBS Snapshots.
- **Tools**: AWS [[Storage Gateway]], AWS Snowball (for large data migration).
- **Process**: Restore data first, then provision infrastructure (CloudFormation/Terraform).

### 2. Pilot Light
- **Mechanism**: Critical core elements (like Databases) are kept running and synchronized.
- **Process**: During a disaster, "turn on the lights" by launching application servers from pre-configured AMIs and scaling the database.

### 3. Warm Standby
- **Mechanism**: A "business-critical" version of the environment is always running at low capacity.
- **Process**: In a disaster, scale up the existing instances (Vertical/Horizontal) and point DNS to the DR site.

### 4. Multi-Site (Active-Active)
- **Mechanism**: Full capacity environment in two or more regions.
- **Process**: Route 53 uses Weighted or Latency routing to send traffic to both sites. If one fails, traffic is shifted 100% to the healthy site.

---
## Key AWS Services for DR
- **AWS Elastic Disaster Recovery (DRS)**: The primary AWS DR tool for EC2 and on-premises workloads. Provides continuous block-level replication into a low-cost staging area. Replaces **CloudEndure**.
- **Route 53**: DNS failover, health checks, and global traffic management.
- **CloudFormation**: Infrastructure as Code to rapidly recreate environments.
- **S3 / Glacier**: Durable storage for backups with Cross-Region Replication (CRR).
- **RDS**: Multi-AZ for high availability; Cross-Region Read Replicas for DR.
- **AWS MGN (Application Migration Service)**: Continuous replication for servers.

---
> [!exam]
> - **Cost vs. Performance**: Backup & Restore is cheapest/slowest; Multi-Site is most expensive/fastest.
> - **RTO/RPO 15 mins**: Usually requires **Warm Standby** or **Pilot Light** with frequent snapshots/replication.
> - **Data Corruption**: Replication won't help if corruption is replicated. You need **Point-in-Time recovery (PITR)** using snapshots or S3 Versioning.

## Related Services
- [[_Disaster Recovery Index|Disaster Recovery Index]]
- [[Route 53 Overview|Route 53]]
- [[CloudFormation Overview|CloudFormation]]
- [[S3 Overview|S3]]

---
**Practice:** [[Disaster Recovery - Practice Questions|Disaster Recovery Practice Questions]]