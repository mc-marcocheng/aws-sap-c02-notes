---
tags: [aws, sap-c02, aurora, database, practice-questions]
---
# Aurora Practice Questions

> [!question]
> A company is using an Amazon Aurora MySQL cluster for its web application. During peak hours, the application experiences high read latency. The cluster consists of one primary instance and one Aurora Replica. What is the MOST effective way to reduce read latency?
> 1. Scale up the primary instance to a larger size.
> 2. **Add more Aurora Replicas** to the cluster and use the Reader Endpoint.
> 3. Enable Aurora Serverless v2.
> 4. Use an Amazon ElastiCache cluster to cache frequently accessed data.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[Aurora Overview|Aurora]] allows you to add up to 15 Read Replicas. By adding more replicas and using the **Reader Endpoint**, the application can distribute read traffic across all available replicas, significantly reducing latency. Scaling up the primary (Option 1) helps with writes but doesn't solve read-scaling as efficiently. Caching (Option 4) is also effective but adds more architectural complexity. (See [[Aurora Overview#High Availability and Scaling|Aurora Scaling]])

> [!question]
> A financial services company needs to ensure that their Amazon Aurora database can survive the failure of an entire AWS Region with an RPO of less than 1 second and an RTO of less than 1 minute. Which feature should they implement?
> 1. Cross-Region Read Replicas.
> 2. **Aurora Global Database**.
> 3. Snapshot replication to a secondary region.
> 4. Multi-Region AWS Managed Microsoft AD.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** **Aurora Global Database** (Option 2) uses dedicated infrastructure to replicate data to up to 5 secondary regions with a typical latency of less than 1 second (RPO < 1s). In the event of a regional failure, a secondary region can be promoted to full read/write capabilities in less than a minute (RTO < 1m). Standard Cross-Region Replicas (Option 1) have higher latency and RTO. (See [[Aurora Overview#Aurora Global Database|Aurora Global Database]])

> [!question]
> An application uses an Amazon Aurora PostgreSQL cluster. The team wants to minimize costs during development by ensuring the database automatically scales down to zero when there is no activity and scales up instantly when a developer starts testing. Which Aurora configuration meets this?
> 1. Aurora Serverless v2.
> 2. **Aurora Serverless v1**.
> 3. Aurora Auto Scaling for Read Replicas.
> 4. RDS Instance Start/Stop on a schedule.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** **Aurora Serverless v1** is the only version that supports "scaling to zero" when there is no activity. Aurora Serverless v2 (Option 1) scales much faster and more granularly but has a minimum capacity of 0.5 ACUs. (See [[Aurora Serverless]])
