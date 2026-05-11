---
tags: [aws, sap-c02, database, rds]
---
# RDS Replication

Amazon [[RDS Overview|RDS]] provides two primary mechanisms for data redundancy and scalability: **Multi-AZ Deployments** and **Read Replicas**.

## Multi-AZ vs. Read Replicas Comparison

| Feature | Multi-AZ DB Instance | Multi-AZ DB Cluster | Read Replicas |
| :--- | :--- | :--- | :--- |
| **Replication** | Synchronous | Synchronous | Asynchronous |
| **Standby Read** | **No** (Passive) | **Yes** (2 Readables) | **Yes** |
| **Failover** | Automatic (60-120s) | Automatic (< 35s) | Manual Promotion |
| **AZs** | 2 | 3 | 1 per replica |

---
## Multi-AZ Deployments

- **Multi-AZ DB Instance**: The classic option. One primary and one standby (passive/non-readable). Failover updates DNS.
- **Multi-AZ DB Cluster**: One primary and **two readable standby instances** across 3 AZs. Optimized for faster failover and high-throughput workloads. Standbys can serve read traffic.

---
## Read Replicas

> [!info] **Operational Mechanics**
> - Data is replicated asynchronously using the engine's native replication.
> - **Promotion**: A read replica can be **promoted** to a standalone DB instance. This is a common DR strategy and a way to create a copy for testing.

> [!exam]
> - **Read Replicas** can be promoted to a standalone instance.
> - **Classic Multi-AZ** standby is NOT readable.
> - **Multi-AZ Clusters** provide 2 readable standbys and faster failover.

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