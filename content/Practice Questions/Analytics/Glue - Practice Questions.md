---
tags: [aws, sap-c02, glue, analytics, etl, serverless, practice-questions]
---
# Glue Practice Questions

> [!question]
> A data engineer is using an AWS Glue Crawler to populate the Data Catalog with metadata from log files stored in S3. The log format recently changed, adding two new columns. The engineer wants the crawler to automatically detect these changes and update the existing table schema in the Data Catalog without overwriting existing partition information. Which crawler configuration should be used?
> 1. Set the "Schema change policy" to "Update the table definition in the data catalog."
> 2. Enable "Create a single schema for all S3 paths."
> 3. Use a custom Classifier with a regular expression for the new log format.
> 4. Set the "Schema change policy" to "Ignore the change and don't update the table in the data catalog."
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** [[Glue|AWS Glue Crawlers]] have a configurable **Schema change policy**. By setting it to **Update the table definition in the data catalog**, the crawler will detect new columns or changes in data types and update the metadata automatically, supporting schema evolution while preserving existing partition data. Option 2 is for grouping different paths. Option 3 is for parsing, not handling catalog updates. (See [[Glue]])

> [!question]
> A data engineer is designing an ETL pipeline to process 10 TB of raw JSON data stored in S3. The process involves joining the data with a 500 GB reference dataset in RDS and writing the output back to S3 in Parquet format. The engineer notices that the Glue job is frequently failing with "Out of Memory" errors. Which action is MOST likely to resolve this issue while maintaining performance?
> 1. Increase the number of Workers in the Glue job configuration.
> 2. Change the Worker Type from G.1X to G.2X or G.4X.
> 3. Enable Job Bookmarks to process data in smaller increments.
> 4. Use Glue DataBrew instead of Glue ETL to handle the join operation.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** "Out of Memory" (OOM) errors in [[Glue]] often occur when the executor memory is insufficient for the volume of data being processed (especially during large joins or shuffles). **G.2X or G.4X worker types** provide significantly more memory per worker compared to G.1X, which is the primary solution for memory-bound ETL jobs. Increasing the *number* of workers (Option 1) helps with parallelism but doesn't increase the memory available to an individual worker for a specific partition of data. Job Bookmarks (Option 3) help with incremental processing of *new* data but don't solve OOM issues for a single large batch.

> [!question]
> A company has a data lake in S3 and uses AWS Glue for ETL. They have multiple ETL jobs that must run in a specific sequence: Job A must finish successfully before Jobs B and C can start in parallel. If either B or C fails, Job D should be skipped, but if both succeed, Job D should run. What is the MOST efficient way to orchestrate this?
> 1. Use a Lambda function to monitor Glue job states and trigger the next jobs using the Boto3 SDK.
> 2. Implement AWS Glue Workflows with triggers based on job success or failure.
> 3. Use Amazon EventBridge to capture Glue job state change events and trigger the next Lambda functions.
> 4. Create a master Glue job that uses Python's `subprocess` module to call other Glue jobs and wait for their completion.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** **AWS Glue Workflows** is a native orchestration feature that allows you to create complex directed acyclic graphs (DAGs) of Glue jobs and crawlers. It supports triggers based on the success of multiple parent jobs (joining), making it the most efficient and managed way to handle the described dependency logic. Option 1 and 3 are valid but require more custom development and monitoring overhead. Option 4 is an anti-pattern that wastes Glue worker resources while waiting for other jobs.
