---
tags: [aws, sap-c02, database, rds]
---
# RDS Replication

Amazon [[RDS Overview|RDS]] provides two primary mechanisms for data redundancy and scalability: **Multi-AZ Deployments** and **Read Replicas**.

## Multi-AZ vs. Read Replicas Comparison

| Feature | Multi-AZ (High Availability) | Read Replicas (Scalability) |
| :--- | :--- | :--- |
| **Replication** | Synchronous | Asynchronous |
| **Primary Use** | Disaster Recovery / High Availability | Scaling Read Workloads |
| **Active Instances** | Only Primary is accessible | Replica is readable |
| **Failover** | Automatic (CNAME update) | Manual promotion required |
| **Backups** | Taken from Standby (no impact on Primary) | No backups by default |
| **Region** | Same Region | Same or Cross-Region |
| **Cost** | 2x (Primary + Standby) | Per-replica pricing |

---
## Multi-AZ Deployments

> [!info] **Operational Mechanics**
> - RDS automatically provisions a standby instance in a different Availability Zone.
> - Data is synchronously replicated from the Primary to the Standby.
> - **Failover**: Triggered by AZ failure, Primary instance failure, or manual reboot with failover. The DNS CNAME is updated to point to the Standby.

### Multi-AZ DB Cluster (New)
- Consists of one primary and **two readable standby instances** in three different AZs.
- Provides faster failover (typically < 35s) compared to standard Multi-AZ.
- Standby instances **can serve read traffic**.

---
## Read Replicas

> [!info] **Operational Mechanics**
> - Data is replicated asynchronously using the engine's native replication (e.g., MySQL binary logs).
> - **Use Cases**: Offloading reporting queries, scaling read-heavy applications, and testing changes (by promoting the replica).
> - **Promotion**: A read replica can be promoted to a standalone DB instance, but this breaks replication.

### Cross-Region Read Replicas
- Essential for **Disaster Recovery (DR)**. Provides a low RPO (Recovery Point Objective) by having data in another region.
- Reduces latency for global users by serving reads from the local region.
- > [!important] **Note**: Data transfer costs apply for cross-region replication.

---
## SAP-C02 Strategic Considerations

> [!important] **Performance Impact**
> - **Multi-AZ**: Synchronous replication can introduce slight latency on writes since both instances must acknowledge the write.
> - **Read Replicas**: Asynchronous replication can lead to **replication lag**. Applications must be designed to handle eventual consistency when reading from replicas.

> [!important] **Disaster Recovery (DR)**
> - For a **Pilot Light** or **Warm Standby** strategy, use Cross-Region Read Replicas.
> - For **High Availability** within a single region, always use Multi-AZ.

---
### Exam Focus: Scenarios

> [!exam] **Scenario: Reporting Impacting OLTP Performance**
> A company’s nightly reports are slowing down production transactions.
> - **Solution**: Create a **Read Replica** for the reporting tier to offload the read load from the primary Multi-AZ instance.

> [!exam] **Scenario: Minimal RTO during Regional Outage**
> - **Solution**: Use **Cross-Region Read Replicas**. In the event of an outage, manually promote the replica to a standalone instance in the healthy region.

---
## Related Services
- [[_Database Index|Database Index]]
- [[RDS Overview]]
- [[Aurora Overview]]
- [[DR Strategies Overview]]

---
**Practice:** [[RDS Replication - Practice Questions|RDS Replication Practice Questions]]