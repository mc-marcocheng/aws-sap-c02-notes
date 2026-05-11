---
tags: [aws, sap-c02, database, elasticache]
---
# Amazon ElastiCache

Amazon [[ElastiCache]] is a fully managed in-memory data store and cache service, supporting Redis (and Valkey) and Memcached. It is primarily used to improve the performance of web applications by retrieving information from fast, managed, in-memory caches, instead of relying entirely on slower disk-based databases.

## Redis vs Memcached

| Feature | Redis / Valkey | Memcached |
| --- | --- | --- |
| **High Availability** | Multi-AZ with Auto-failover | No (Multi-node partitioning only) |
| **Persistence** | Supported (AOF / Snapshots) | No (In-memory only) |
| **Replication** | Read Replicas (up to 5) | No |
| **Data Types** | Complex (Sets, Hashes, Lists, etc.) | Simple Key-Value |
| **Data Tiering** | **Supported** (Store data on SSDs) | No |
| **Threading** | Single-threaded | Multi-threaded |

## Deployment Options

- **ElastiCache Serverless**: New option that eliminates capacity planning. Scales automatically based on memory, CPU, and network usage. Ideal for unpredictable workloads.
- **Global Datastore**: Cross-region replication for Redis. Provides low-latency global reads and disaster recovery with <1s replication lag.

## Architecture Patterns

- **Lazy Loading (Cache-Aside)**: App queries cache -> Cache miss -> App queries DB -> App writes to cache. Data can become stale; requires TTL.
- **Write-Through**: App writes to DB and Cache simultaneously. Data is never stale, but incurs higher write latency.
- **In Practice**: Most architectures combine both: **Write-Through for consistency + TTL for cache eviction** to prevent the cache from growing indefinitely.
- **Session Store**: Storing stateless session data for web servers to enable highly available and scalable web fleets.

> [!exam]
> For cross-region disaster recovery with ElastiCache, use **Redis Global Datastore**. It allows one primary region for writes and up to two secondary regions for low-latency reads and cross-region DR. Memcached does NOT support cross-region replication or persistence.

## Related Services
- [[_Database Index|Database Index]]
- [[DynamoDB DAX]]
- [[RDS Overview]]
- [[DynamoDB Overview]]

---
**Practice:** [[ElastiCache - Practice Questions|ElastiCache Practice Questions]]