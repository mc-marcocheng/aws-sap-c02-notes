---
tags: [aws, sap-c02, database, dynamodb]
---
# DynamoDB Accelerator (DAX)

Amazon [[DynamoDB DAX|DynamoDB Accelerator (DAX)]] is a fully managed, highly available, in-memory cache for [[DynamoDB Overview|DynamoDB]] that reduces response times from milliseconds to **microseconds**.

> [!important]
> - **Performance**: Up to 10x performance improvement for read-heavy workloads.
> - **Compatibility**: API-compatible with DynamoDB; requires minimal code changes.
> - **Consistency**: Supports eventual consistency; strongly consistent reads are passed through directly to DynamoDB (not cached).

## DAX Cluster Architecture

- **Nodes**: A cluster consists of 1 Primary node and up to 9 Read Replicas (10 nodes total).
- **Fault Tolerance**: Minimum of 3 nodes across different AZs is recommended for production.
- **VPC**: DAX clusters run inside your [[VPC Overview|VPC]].
- **Scaling**: Horizontal scaling by adding read replicas.

## Caching Mechanisms

DAX maintains two separate caches:

| Cache Type | Purpose | Operations |
| --- | --- | --- |
| **Item Cache** | Stores individual items. | `GetItem`, `BatchGetItem` |
| **Query Cache** | Stores sets of items (result sets). | `Query`, `Scan` |

- **TTL**: Default TTL is 5 minutes for both caches.
- **Eviction**: Uses a Least Recently Used (LRU) algorithm when the cache is full.

## Write Strategies

| Strategy | Description | Best For |
| --- | --- | --- |
| **Write-Through** | Data is written to DynamoDB first, then to DAX. | Applications requiring data to be immediately available in cache. |
| **Write-Around** | Data is written directly to DynamoDB, bypassing the DAX cache. | Bulk uploads or data that isn't read immediately (reduces latency). |

## Security and Connectivity

- **Encryption at Rest**: Supported using **AWS-owned keys** only (Customer-managed [[KMS]] keys are NOT supported).
- **Encryption in Transit**: Supported via TLS.
- **PrivateLink**: DAX supports AWS PrivateLink for **Management APIs** (e.g., `CreateCluster`). Data plane operations (Get/Put) are already private within the VPC.

> [!info]
> DAX clusters only interact with DynamoDB tables in the same Region.

> [!exam]
> - **Microseconds**: Always the keyword for DAX.
> - **Consistency**: DAX does NOT cache strongly consistent reads.
> - **Availability**: Use at least 3 nodes across 3 AZs for high availability.
> - **Cost**: DAX saves money by reducing the RCU (Read Capacity Units) needed on the base DynamoDB table.
> - **Encryption**: Remember that DAX does NOT support Customer Managed Keys (CMK) for encryption at rest.

![[dynamodb-accelerator-dax.png]]

## Related Services
- [[_Database Index|Database Index]]
- [[DynamoDB Overview]]
- [[ElastiCache]]

---
**Practice:** [[DynamoDB DAX - Practice Questions|DynamoDB DAX Practice Questions]]