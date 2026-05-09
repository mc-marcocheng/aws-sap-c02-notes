---
tags: [aws, sap-c02, elasticache, practice-questions]
---
# ElastiCache Practice Questions

> [!question]
> A globally distributed application requires an in-memory datastore. The application must support complex data structures (like sorted sets), provide high availability across multiple Availability Zones, and allow for sub-millisecond local read latencies in three different AWS Regions. Which solution meets these requirements?
> 1. Amazon ElastiCache for Memcached with cross-region read replicas.
> 2. Amazon DynamoDB Global Tables with DAX.
> 3. Amazon ElastiCache for Redis with Global Datastore.
> 4. Amazon RDS with cross-region read replicas.
>
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** [[ElastiCache]] for Redis supports complex data structures and Global Datastore, which enables one primary (write) region and up to two secondary (read) regions for low-latency cross-region reads.

> [!question]
> A web application uses ElastiCache for Memcached to store session state. During a scaling event, one of the Memcached nodes goes down, causing users to be logged out. The architect must redesign the caching layer to prevent this issue in the future with minimal application changes. What is the BEST approach?
> 1. Implement Memcached Auto Discovery to automatically replace failed nodes.
> 2. Migrate the session state to Amazon ElastiCache for Redis with Multi-AZ and auto-failover enabled.
> 3. Use an Application Load Balancer with sticky sessions mapped to the Memcached cluster.
> 4. Write session data to Amazon S3 instead of ElastiCache.
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** Memcached does not support replication or high availability. Migrating to [[ElastiCache]] for Redis with Multi-AZ enables automatic failover and data persistence for session state.

> [!question]
> An application experiences a high volume of read traffic and occasional database spikes. A cache-aside strategy is implemented using ElastiCache. Over time, users notice that some cached data is severely outdated compared to the underlying RDS database. How can this be mitigated?
> 1. Switch from a cache-aside strategy to a write-through caching strategy.
> 2. Increase the size of the ElastiCache nodes.
> 3. Enable Multi-AZ on the RDS instance.
> 4. Use Amazon SQS to decouple the database reads.
>
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** In a cache-aside model, cache data can become stale if not updated properly. A write-through strategy updates the cache whenever the database is updated, ensuring data freshness (though it increases write latency). Alternatively, implementing a shorter TTL could help, but write-through is the best architectural fix for absolute freshness.