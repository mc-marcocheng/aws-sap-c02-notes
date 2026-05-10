---
tags: [aws, sap-c02, database, aurora, dynamodb]
---
# Aurora vs DynamoDB Global

Comparison between Amazon [[Aurora Overview|Aurora]] Global Database and Amazon [[DynamoDB Overview|DynamoDB]] Global Tables for multi-region architectures.

> [!important]
> - **Aurora Global**: Relational (SQL), Single-master (writes in one region), Manual failover.
> - **DynamoDB Global**: NoSQL, Multi-active (writes in all regions), Automatic failover.

## Aurora Global Database
- **Architecture**: Single-master, multi-reader. One primary region for writes, up to 5 secondary regions for reads.
- **Replication**: Asynchronous, typical latency < 1 second.
- **Failover**: **Manual** promotion of a secondary region is required if the primary fails.
- **Use Case**: Relational data, complex joins, and transactions where SQL compatibility is required.

## DynamoDB Global Tables
- **Architecture**: Multi-active (multi-master). All replicas accept reads and writes.
- **Availability**: 99.999% SLA.
- **Failover**: **Automatic**; applications can redirect to any healthy replica.

### Consistency Modes
| Mode | Consistency | Replication | RPO | Availability |
| --- | --- | --- | --- | --- |
| **MREC** (Default) | Eventual | Asynchronous | ~1 sec | 99.999% |
| **MRSC** (New) | **Strong** | **Synchronous** | **Zero** | 99.999% |

> [!info] **DynamoDB MRSC (Multi-Region Strong Consistency)**
> - Announced at re:Invent 2024.
> - Requires exactly 3 regions (or 2 regions + 1 witness).
> - Provides Zero RPO and global strongly consistent reads.
> - Ideal for financial applications and global inventory management.

## Comparison Table

| Feature | Aurora Global Database | DynamoDB Global (MREC) | DynamoDB Global (MRSC) |
| --- | --- | --- | --- |
| **Database Type** | Relational (SQL) | NoSQL | NoSQL |
| **Architecture** | Single-master | Multi-active | Multi-active |
| **Max Regions** | 6 (1 Primary + 5 Secondary) | Unlimited | Exactly 3 |
| **Replication** | Asynchronous | Asynchronous | **Synchronous** |
| **Consistency** | Eventual (Cross-Region) | Eventual (Cross-Region) | **Strong (Global)** |
| **RPO** | < 1 second | ~1 second | **Zero** |
| **RTO** | < 1 minute (Manual) | Seconds (Automatic) | Seconds (Automatic) |
| **Failover** | **Manual** | **Automatic** | **Automatic** |
| **Availability** | 99.99% | 99.999% | 99.999% |

## Summary of Use Cases

### Choose Aurora Global if:
- You need a **Relational** model (MySQL/PostgreSQL).
- You require complex SQL queries, joins, and ACID transactions.
- Centralized writes in one region are acceptable.

### Choose DynamoDB Global if:
- You need a **NoSQL** model for massive scale and low latency.
- You need **Multi-active writes** (writing to the closest region).
- You require **99.999% availability** and automatic failover.
- You need **Zero RPO** (via MRSC) for critical data loss prevention.

> [!exam]
> - **Failover**: Aurora Global requires manual action (detach and promote); DynamoDB is automatic.
> - **Writes**: Only DynamoDB Global supports active-active writes across regions.
> - **RPO**: For Zero RPO across regions, choose DynamoDB with **MRSC**.
> - **RTO**: DynamoDB has better RTO because it doesn't require manual promotion or endpoint changes.

![[aws-aurora-global-database-vs-dynamodb-global-tables.jpg]]

## Related Services
- [[_Database Index|Database Index]]
- [[Aurora Overview]]
- [[DynamoDB Overview]]
- [[High Availability]]

---
**Practice:** [[Aurora vs DynamoDB Global - Practice Questions|Aurora vs DynamoDB Global Practice Questions]]