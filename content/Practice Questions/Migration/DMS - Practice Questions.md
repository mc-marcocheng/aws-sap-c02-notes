---
tags: [aws, sap-c02, dms, migration, practice-questions]
---
# DMS Practice Questions

> [!question]
> A company is migrating a 20 TB Oracle data warehouse to Amazon Redshift. The source database must remain online during the migration with minimal performance impact. The migration must be completed within a 2-week window, and the company needs to validate that the data in Redshift matches the source after migration. Which approach meets these requirements?
> 
> 1. Use AWS DMS with a full-load task to migrate all data, then perform a manual row-count comparison between Oracle and Redshift.
> 2. Use AWS DMS with full-load plus Change Data Capture (CDC) to perform continuous replication, and enable AWS DMS data validation to automatically compare source and target data.
> 3. Export the Oracle database to CSV files, upload them to S3 using AWS DataSync, and use the COPY command to load them into Redshift.
> 4. Use AWS SCT to convert the schema, then use AWS Snowball Edge to physically ship the data to AWS and load it into Redshift.
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[DMS|AWS DMS]] supports full-load plus CDC (Change Data Capture), which performs the initial bulk load and then continuously replicates ongoing changes. This keeps the source online and minimizes the cutover window. DMS also has a built-in **data validation** feature that compares source and target records. Option 3 doesn't capture ongoing changes. Option 4 (Snowball) would take too long for the logistics and doesn't handle CDC.

> [!question]
> A financial services company is migrating from an on-premises PostgreSQL database to Amazon Aurora PostgreSQL. The database contains several stored procedures, triggers, and complex data types that may not migrate cleanly. The team wants to identify potential migration issues before starting the actual data migration. Which combination of AWS services should they use?
> 
> 1. Use AWS DMS Schema Conversion to assess and convert the schema, then use AWS DMS to migrate the data.
> 2. Use AWS Application Discovery Service to analyze the database, then use AWS DMS for migration.
> 3. Use Amazon Inspector to assess the database configuration, then use AWS DMS for migration.
> 4. Use AWS DMS directly with the "convert schema" option enabled during the migration task.
>
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** [[DMS|AWS DMS]] handles data migration, but for heterogeneous migrations where schema conversion is needed, the **AWS DMS Schema Conversion** (formerly AWS SCT) identifies incompatibilities, generates an assessment report, and converts database objects (stored procedures, triggers, views) to the target engine's syntax. This should always be used before starting data migration in heterogeneous scenarios.

> [!question]
> A company uses AWS DMS to replicate data from an on-premises MySQL database to Amazon Aurora MySQL. After the initial full load, CDC replication is running. The operations team notices that the replication instance CPU is consistently at 95% and replication lag is increasing. The source database has 50 tables, with 5 very large tables (over 500 GB each) and 45 small tables. What is the MOST effective way to resolve the performance issue?
> 
> 1. Increase the replication instance size and enable Multi-AZ for better performance.
> 2. Split the migration into multiple DMS tasks: one task for the 5 large tables with parallel load settings, and a separate task for the 45 small tables. Use a larger replication instance.
> 3. Enable Auto Scaling on the DMS replication instance.
> 4. Switch from CDC to periodic full-load migrations during off-peak hours.
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[DMS|AWS DMS]] best practice is to separate large tables into their own tasks with optimized parallel settings (e.g., `MaxFullLoadSubTasks`, partition-based loading). This distributes the workload more effectively. Multi-AZ (Option 1) is for availability, not performance. DMS does not support Auto Scaling (Option 3). Switching away from CDC (Option 4) would increase downtime and data staleness.

> [!question]
> An enterprise is using AWS DMS to migrate a Microsoft SQL Server database to Amazon Aurora PostgreSQL. During testing, they discover that DMS cannot migrate certain SQL Server-specific features like SQL Agent jobs, SSIS packages, and linked server configurations. How should the team handle these components?
> 
> 1. Enable the "migrate all database objects" option in the DMS task settings.
> 2. Use AWS DMS Schema Conversion to automatically convert these features to Aurora equivalents.
> 3. Manually re-architect these components using AWS-native services such as AWS Lambda, AWS Step Functions, and AWS Glue for ETL jobs.
> 4. Use the AWS Application Migration Service to lift-and-shift the entire SQL Server instance to EC2, preserving all features.
>
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** [[DMS|AWS DMS]] migrates data and basic schema objects (tables, indexes, constraints). Server-level features like SQL Agent jobs, SSIS packages, and linked servers have no direct equivalent in Aurora PostgreSQL. These must be manually re-architected using cloud-native alternatives: [[Lambda]] for scheduled tasks, [[Step Functions]] for orchestration, and [[Glue]] for ETL. Schema Conversion tools cannot handle these server-level components.
