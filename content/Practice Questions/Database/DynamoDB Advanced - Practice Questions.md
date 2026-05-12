---
tags: [aws, sap-c02, dynamodb, database, practice-questions]
---
# DynamoDB Advanced Practice Questions

> [!question]
> A global gaming company has a leaderboard in Amazon DynamoDB. The game is played by millions of users across the US, Europe, and Asia. Players in Europe and Asia are complaining about high latency when updating their scores. Which DynamoDB feature should be implemented to provide local read/write performance for global users?
> 1. DynamoDB Accelerator (DAX).
> 2. **DynamoDB Global Tables**.
> 3. Cross-Region Replication using AWS Data Pipeline.
> 4. Amazon CloudFront with Lambda@Edge.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** **DynamoDB Global Tables** (Option 2) provides a fully managed, multi-region, multi-active database. It replicates data across your choice of AWS Regions, allowing applications to perform local reads and writes with single-digit millisecond latency in each region. DAX (Option 1) only provides read caching within a single region. (See [[DynamoDB Overview]])

> [!question]
> A company uses Amazon DynamoDB to store user session data. To comply with data privacy regulations, session data must be deleted 24 hours after it was last accessed. What is the MOST cost-effective and operationally efficient way to implement this?
> 1. Use a Lambda function triggered by a CloudWatch Event to scan the table and delete old items.
> 2. **Enable DynamoDB Time to Live (TTL)** on an attribute containing the expiration timestamp.
> 3. Use an S3 Lifecycle policy to move old data to Glacier.
> 4. Create a new table every day and delete the previous day's table.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** **DynamoDB TTL** (Option 2) allows you to define a specific attribute as an expiration timestamp. DynamoDB automatically deletes expired items from the table at no additional cost (no WCU consumed for the delete). This is far more efficient than manual scanning (Option 1). (See [[DynamoDB Overview]])

> [!question]
> An application uses DynamoDB to store high-frequency sensor data. The team wants to capture all changes (Inserts, Updates, Deletes) to the table in real-time and trigger a Lambda function to perform complex aggregations. Which feature should be used?
> 1. DynamoDB Global Tables.
> 2. **DynamoDB Streams**.
> 3. CloudWatch Logs.
> 4. S3 Event Notifications.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** **DynamoDB Streams** (Option 2) captures a time-ordered sequence of item-level changes in a table and stores this information for up to 24 hours. It is the standard way to trigger downstream actions like Lambda functions or cross-account replication. (See [[DynamoDB Overview]])
