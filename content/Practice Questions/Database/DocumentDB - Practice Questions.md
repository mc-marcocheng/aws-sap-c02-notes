---
tags: [aws, sap-c02, documentdb, database, compute, practice-questions]
---
# DocumentDB Practice Questions

> [!question]
> A company is migrating a legacy MongoDB application to AWS. The application requires high availability, automatic scaling, and a fully managed environment that is compatible with MongoDB 4.0 APIs. Which service should they choose?
> 1. Amazon DynamoDB.
> 2. **Amazon DocumentDB (with MongoDB compatibility)**.
> 3. MongoDB Atlas on AWS.
> 4. Amazon RDS for PostgreSQL with the JSONB data type.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[DocumentDB]] is a fully managed document database service that is compatible with MongoDB workloads. It provides the required HA, scaling, and management features while allowing the application to use existing MongoDB drivers and tools. While Atlas (Option 3) is a valid third-party solution, DocumentDB is the native AWS managed service.

> [!question]
> A solutions architect is designing a backup strategy for an Amazon DocumentDB cluster. The company requires the ability to restore the database to any point in time within the last 35 days. How can this be achieved?
> 1. Schedule daily snapshots using AWS Backup.
> 2. Enable **automated backups** and set the retention period to 35 days.
> 3. Use the `mongodump` tool to export data to S3 hourly.
> 4. Enable MongoDB Change Streams and archive them to Kinesis.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[DocumentDB]] supports automated backups that enable point-in-time recovery (PITR). The backup retention period can be configured between 1 and 35 days.

> [!question]
> How does Amazon DocumentDB handle storage scaling for its clusters?
> 1. The administrator must manually increase the volume size in the console.
> 2. DocumentDB uses **autoscaling storage** that grows automatically up to 128 TiB.
> 3. Storage is scaled by adding more instances to the cluster.
> 4. Storage is fixed at the time of cluster creation based on the selected instance type.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** Similar to Aurora, [[DocumentDB]] features a distributed, fault-tolerant, self-healing storage system that automatically scales up to 128 TiB as your data grows, with no impact on application performance.
