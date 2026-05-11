---
tags: [aws, sap-c02, database, dynamodb]
---
# DynamoDB Advanced Features

Overview of advanced capabilities in Amazon [[DynamoDB Overview|DynamoDB]], including indexing, caching, and disaster recovery.

## Secondary Indexes

| Index Type | Description | Use Case |
| --- | --- | --- |
| **Global Secondary Index (GSI)** | Different Partition Key (PK) and Sort Key (SK) from the base table. | Queries across the entire table using non-key attributes. |
| **Local Secondary Index (LSI)** | Same PK as the base table, but a different SK. Must be created at table creation. | Queries within a single Partition Key (limited to 10GB per PK). |

## Caching with DAX (DynamoDB Accelerator)

[[DynamoDB DAX|DAX]] is a fully managed, highly available, in-memory cache for DynamoDB.
- **Performance**: Reduces latency from milliseconds to **microseconds**.
- **Write-through**: Automatically updates the cache when data is written to the table.
- **DAX vs ElastiCache**: DAX is transparent (no code changes, same DynamoDB API). ElastiCache requires application-level caching logic but supports more complex patterns.

## DynamoDB Streams

- **DynamoDB Streams**: Captures item-level changes. Each record contains the key + old/new image. 
- **Retention**: 24 hours. 
- **Use Case**: Commonly used with [[Lambda]] for event-driven architectures and cross-region replication.

## Global Tables

- **Multi-Region**: Active-Active multi-region replication.
- **Conflict Resolution**: Last writer wins (LWW).
- **Prerequisites**: Requires DynamoDB Streams enabled + On-Demand or sufficient provisioned capacity in all regions.

## Backup and Disaster Recovery

### Point-in-Time Recovery (PITR)
- **Continuous Backup**: Provides per-second granularity.
- **Retention**: Can restore to any point in the last **35 days**.
- **Protection**: Guards against accidental writes or deletes.

### On-Demand Backup & Restore
- **Long-term Retention**: For regulatory compliance.
- **AWS Backup**: Recommended for centralizing backups, cross-region/cross-account copies, and cold storage transition.

## Time to Live (TTL)

- Automatically deletes items based on a timestamp attribute.
- **Zero Cost**: Deletion does not consume write throughput.
- **Latency**: Items are typically deleted within 48 hours of expiration.
- **Downstream**: Deletions are marked as "System Deletes" in DynamoDB Streams.

## Connectivity and Security

- **VPC Gateway Endpoints**: Provides private access to DynamoDB from within a [[VPC Overview|VPC]] without an IGW or NAT Gateway.
- **Conflict Resolution**: Global Tables use **Last Write Wins (LWW)** based on timestamps.

> [!important]
> - **GSI** can be added/removed at any time; **LSI** must be defined at table creation.
> - **DAX** is a cluster that resides within your VPC.
> - **Global Tables** require DynamoDB Streams to be enabled (New and Old Images).

> [!exam]
> - For **Microsecond** latency, the answer is always **DAX**.
> - For **Cross-account/Cross-region backups**, use **AWS Backup**.
- **PITR** allows recovery from accidental deletes up to 35 days.
- **TTL** is the best way to manage data lifecycle without incurring extra costs or performance hits.

## Related Services
- [[_Database Index|Database Index]]
- [[DynamoDB Overview]]
- [[DynamoDB DAX]]
- [[Lambda]]

---
**Practice:** [[DynamoDB Advanced - Practice Questions|DynamoDB Advanced Practice Questions]]