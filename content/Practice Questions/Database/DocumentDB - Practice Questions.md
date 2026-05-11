---
tags: [aws, sap-c02, database, documentdb, practice-questions]
---
# DocumentDB - Practice Questions

> [!question]
> A gaming company is migrating their on-premises, self-managed MongoDB replica set to AWS. The database is currently 40 TB in size and experiences highly variable, read-heavy traffic. The company wants a fully managed solution that requires ZERO changes to their application code, drivers, or tools, while allowing storage to scale automatically without manual provisioning. Which migration target is the BEST fit?
> 
> 1. Amazon EC2 instances running MongoDB with EBS Provisioned IOPS volumes.
> 2. Amazon DynamoDB with a customized data mapping layer.
> 3. Amazon DocumentDB (with MongoDB compatibility).
> 4. Amazon Aurora PostgreSQL with JSONB data types.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** [[DocumentDB]] is a fully managed, MongoDB-compatible document database. It allows you to use existing MongoDB drivers and tools without application rewrites. Its architecture separates compute and storage, allowing the storage volume to grow automatically up to 128 TB across multiple AZs.

> [!question]
> A global logistics company uses Amazon DocumentDB in the `us-east-1` region as its primary database. They have a strict disaster recovery requirement: the database must be able to withstand a full regional outage with a Recovery Point Objective (RPO) of less than 1 second and a Recovery Time Objective (RTO) of under 1 minute in the `eu-west-1` region. What is the MOST efficient way to architect this?
> 
> 1. Use AWS Database Migration Service (DMS) to continuously replicate data from the DocumentDB cluster in `us-east-1` to a standby cluster in `eu-west-1`.
> 2. Create an Amazon DocumentDB Global Cluster. Set `us-east-1` as the primary region and add `eu-west-1` as a secondary region.
> 3. Configure a Lambda function to trigger on Amazon EventBridge events to copy automated DocumentDB snapshots to `eu-west-1` every 5 minutes.
> 4. Set up an Amazon S3 export task to back up DocumentDB data to S3, and use S3 Cross-Region Replication (CRR) to move the data to `eu-west-1`.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** Amazon [[DocumentDB]] Global Clusters provide disaster recovery across regions with typical replication latencies under 1 second (RPO < 1s). In the event of a regional degradation, a secondary region can be promoted to primary in under a minute (RTO < 1m). This is a native feature and is vastly more efficient than custom replication.
