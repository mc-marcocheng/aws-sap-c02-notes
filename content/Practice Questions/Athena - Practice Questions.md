---
tags: [aws, sap-c02, athena, analytics, serverless, practice-questions]
---
# Athena Practice Questions

> [!question]
> A SysOps administrator wants to use standard SQL to query access logs in S3 without managing infrastructure. Which service should they use?
> 1. Amazon Inspector
> 2. Amazon CloudWatch
> 3. Amazon Athena
> 4. Amazon RDS
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** [[Athena]] is a serverless, interactive query service that makes it easy to analyze data in [[S3 Overview|S3]] using standard SQL. It requires no infrastructure management and you pay only for the queries you run.

> [!question]
> Design a cost-effective storage solution for incoming billing reports (CSV) that are scanned infrequently and discarded after 30 days.
> 1. Import into RDS MySQL
> 2. Use Data Pipeline to import into DynamoDB
> 3. Write to S3 and use Amazon Athena to query
> 4. Import into Redshift cluster
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** Storing CSV reports in [[S3 Overview|S3]] is highly cost-effective. [[Athena]] allows for infrequent SQL querying directly against S3 without the overhead of loading data into a database or data warehouse. [[S3 Lifecycle Management|S3 Lifecycle]] policies can handle the automatic deletion after 30 days.

> [!question]
> How can you implement ACID transactions and time travel queries on a data lake while maintaining Athena compatibility?
> 1. Migrate to Redshift Spectrum
> 2. Use EMR with Apache Hive
> 3. Implement Apache Iceberg tables with Athena
> 4. Use Glue with Delta Lake format
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** Apache Iceberg is a modern open table format that supports ACID transactions and time travel (querying historical versions of data). [[Athena]] has native support for Iceberg, providing these advanced features in a serverless environment.

> [!question]
> How can you share analytical insights with external partners without exposing raw data?
> 1. Lake Formation external access
> 2. AWS Clean Rooms with Athena integration
> 3. QuickSight embedded dashboards
> 4. DataSync replication
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** AWS Clean Rooms allows companies and their partners to analyze their collective datasets without sharing or revealing underlying raw data. It integrates with [[Athena]] to allow SQL queries against the collective data while protecting individual privacy.

> [!question]
> Which feature helps optimize costs for Athena workloads with predictable query patterns and consistent performance requirements?
> 1. Athena Federated Query
> 2. Athena for Apache Spark
> 3. Athena Provisioned Capacity
> 4. Athena Query Result Reuse
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** While standard [[Athena]] uses on-demand pricing (per TB scanned), **Provisioned Capacity** allows you to dedicate compute resources to your queries. This provides predictable performance and can be more cost-effective for high-volume, consistent workloads compared to the on-demand model.
