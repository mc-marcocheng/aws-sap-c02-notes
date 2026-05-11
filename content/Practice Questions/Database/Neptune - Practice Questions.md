---
tags: [aws, sap-c02, database, neptune, practice-questions]
---
# Neptune - Practice Questions

> [!question]
> A retail company is developing a real-time recommendation engine. The application must traverse millions of user profiles, purchase histories, and product categories to find complex, multi-hop relationships within milliseconds. The database must be highly available across multiple Availability Zones and support read scaling as user traffic grows. Which AWS database service is the MOST appropriate for this workload?
> 
> 1. Amazon DynamoDB with DynamoDB Accelerator (DAX)
> 2. Amazon RDS for PostgreSQL with recursive Common Table Expressions (CTEs)
> 3. Amazon Neptune with read replicas
> 4. Amazon Redshift with Concurrency Scaling
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** [[Neptune]] is a purpose-built, fully managed graph database designed specifically for traversing highly connected datasets (like recommendation engines or social networks) with millisecond latency. It supports creating up to 15 read replicas across multiple AZs for read scalability and high availability. Relational databases (Option 2) struggle with performance on complex multi-hop queries.

> [!question]
> A fraud detection platform uses Amazon Neptune to store relationships between credit cards, IP addresses, and user accounts. The data science team wants to continuously export change data from the Neptune graph database into an Amazon S3 data lake to train new machine learning models using Amazon SageMaker. What is the MOST operationally efficient way to implement this?
> 
> 1. Configure an AWS Glue crawler to query the Neptune cluster via JDBC and write the results to S3 hourly.
> 2. Enable Neptune Streams, and use an AWS Lambda function triggered by the stream to process and write the changes to Amazon S3 via Kinesis Data Firehose.
> 3. Take automated daily snapshots of the Neptune cluster and use the Neptune Export utility to export the snapshot data to S3.
> 4. Modify the application to perform dual writes: one to Neptune and one directly to Amazon S3.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** **Neptune Streams** provides a continuous, ordered sequence of changes to the graph data. Using a [[Lambda]] function to consume the stream and forward it to S3 (optionally via Firehose) is the AWS-recommended, event-driven pattern for continuously replicating Neptune data to a data lake for ML training.
