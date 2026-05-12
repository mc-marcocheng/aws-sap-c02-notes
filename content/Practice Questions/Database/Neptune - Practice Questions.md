---
tags: [aws, sap-c02, neptune, database, compute, practice-questions]
---
# Neptune Practice Questions

> [!question]
> A social media company needs a database to store and query complex relationships between users, such as "friends of friends who like the same music". The database must support high-volume, low-latency graph queries using the Gremlin or SPARQL languages. Which service is BEST suited for this?
> 1. Amazon RDS.
> 2. Amazon DynamoDB.
> 3. **Amazon Neptune**.
> 4. Amazon Redshift.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** [[Neptune]] is a fast, reliable, fully managed graph database service. It is optimized for storing billions of relationships and querying the graph with millisecond latency, supporting popular graph models like Property Graph (Gremlin) and W3C's RDF (SPARQL).

> [!question]
> A company wants to implement a recommendation engine for its e-commerce site. The engine needs to analyze millions of purchase patterns to suggest products to users in real-time. Why is Amazon Neptune a better choice than a relational database for this use case?
> 1. Neptune supports SQL joins more efficiently.
> 2. **Neptune is optimized for multi-hop relationship queries** without the performance penalty of complex joins.
> 3. Neptune provides higher write throughput for transactional data.
> 4. Neptune is more cost-effective for simple key-value lookups.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** In a relational database, querying multi-hop relationships (e.g., A bought B, who also bought C, and C is related to D) requires multiple expensive JOIN operations. [[Neptune]]'s graph-native storage and query engines are designed to traverse these relationships efficiently, providing consistent performance even as the complexity of the relationships increases.

> [!question]
> A solutions architect needs to ensure that an Amazon Neptune database is highly available across multiple Availability Zones. How is this achieved in Neptune?
> 1. Manually configure a secondary instance in a different AZ.
> 2. **Neptune automatically maintains six copies of your data across three Availability Zones**.
> 3. Neptune relies on S3 replication for high availability.
> 4. Use Multi-AZ deployment for the underlying EC2 instances.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** Like Aurora, [[Neptune]] features a purpose-built storage layer that is distributed across three Availability Zones. It automatically replicates data six times (two copies in each AZ) and can handle the loss of two copies of data without affecting write availability and up to three copies without affecting read availability.
