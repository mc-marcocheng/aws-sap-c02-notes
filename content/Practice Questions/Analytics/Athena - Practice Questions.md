---
tags: [aws, sap-c02, athena, analytics, serverless, practice-questions]
---
# Athena Practice Questions

> [!question]
> A company stores petabytes of log data in an S3 bucket in CSV format. A security analyst needs to perform periodic ad-hoc SQL queries on this data using Amazon Athena. Initial queries are taking several minutes and scanning significant amounts of data, leading to high costs. Which combination of actions will MOST effectively improve query performance and reduce cost? (Choose 2)
> 1. Use AWS Glue to convert the CSV data into Apache Parquet format.
> 2. Implement S3 bucket replication to move data to a higher performance S3 Express One Zone bucket.
> 3. Partition the data in S3 by year, month, and day.
> 4. Increase the Athena workgroup query result limit.
> 5. Use Athena Federated Query to connect to the S3 bucket via a Lambda function.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1, 3**
> > **Rationale:** [[Athena]] performance and cost are directly tied to the amount of data scanned. Converting to a columnar format like **Parquet** allows Athena to only read the specific columns requested in the query. **Partitioning** the data (e.g., by date) allows Athena to skip entire directories of data that don't match the query's WHERE clause (partition pruning). S3 Express One Zone (Option 2) is for low-latency request performance, not necessarily for massive scans. Athena Federated Query (Option 5) is for querying external data sources, not optimizing native S3 data.

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
