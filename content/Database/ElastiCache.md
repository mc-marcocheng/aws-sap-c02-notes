---
tags: [aws, sap-c02, elasticache]
---
# Amazon ElastiCache

Amazon ElastiCache is a fully managed in-memory data store and cache service, supporting Redis (and Valkey) and Memcached. It is primarily used to improve the performance of web applications by retrieving information from fast, managed, in-memory caches, instead of relying entirely on slower disk-based databases.

## Redis vs Memcached
- **Redis/Valkey:** Multi-AZ with auto-failover, Read Replicas, data persistence (AOF/snapshots), complex data types (sets, hashes), pub/sub, Lua scripts, Redis Global Datastore (cross-region replication).
- **Memcached:** Multi-node partitioning (sharding), multi-threaded, simple key-value store. NO high availability, NO replication, NO persistence.

## Architecture Patterns
- **Lazy Loading (Cache-Aside):** App queries cache -> Cache miss -> App queries DB -> App writes to cache. Data can become stale; requires TTL.
- **Write-Through:** App writes to DB and Cache simultaneously. Data is never stale, but incurs higher write latency.
- **Session Store:** Storing stateless session data for web servers to enable highly available and scalable web fleets.

> [!exam]
> For cross-region disaster recovery with ElastiCache, use **Redis Global Datastore**. It allows one primary region for writes and up to two secondary regions for low-latency reads and cross-region DR. Memcached does NOT support cross-region replication or persistence.

---
**Practice:** [[ElastiCache - Practice Questions|ElastiCache Practice Questions]]