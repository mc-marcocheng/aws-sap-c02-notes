---
tags: [aws, sap-c02, dynamodb, practice-questions]
---
# DynamoDB Practice Questions

> [!question]
> Which of the following are use cases for Amazon DynamoDB? (Choose 3 answers)
> 1. Storing BLOB data.
> 2. Managing web sessions
> 3. Storing JSON documents
> 4. Storing metadata for Amazon S3 objects
> 5. Running relational joins and complex updates.
> 6. Storing large amounts of infrequently accessed data.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2, 3, 4**
> > **Rationale**: DynamoDB is a NoSQL service optimized for key-value and document data structures. It is ideal for session management (low latency), JSON storage, and metadata indexing. BLOB storage should be handled by [[S3 Overview|Amazon S3]], complex joins require [[RDS Overview|Amazon RDS]], and large-scale infrequent data is better suited for S3 storage classes.

> [!question]
> You are configuring your company’s application to use Auto Scaling and need to move user state information. Which of the following AWS services provides a shared data store with durability and low latency?
> 1. AWS ElastiCache Memcached
> 2. Amazon Simple Storage Service
> 3. Amazon EC2 instance storage
> 4. Amazon DynamoDB
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale**: [[DynamoDB Overview|DynamoDB]] provides both durability (3-way replication) and single-digit millisecond latency. ElastiCache Memcached is not durable (in-memory only). S3 does not provide the sub-millisecond/low-millisecond latency required for high-performance state management. EC2 Instance Storage is ephemeral and not shared across instances.

> [!question]
> Does Dynamo DB support in-place atomic updates?
> 1. It is not defined
> 2. No
> 3. Yes
> 4. It does support in-place non-atomic updates
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale**: DynamoDB supports atomic counters, allowing you to use the `UpdateItem` operation to increment or decrement an existing attribute without interfering with other write requests.

> [!question]
> What is the maximum write throughput I can provision for a single Dynamic DB table?
> 1. 1,000 write capacity units
> 2. 100,000 write capacity units
> 3. Dynamic DB is designed to scale without limits, but if you go beyond 10,000 you have to contact AWS first
> 4. 10,000 write capacity units
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale**: While DynamoDB is designed to scale virtually without limit, there are default soft limits (typically 10,000 RCU/WCU per table) that require a service quota increase request to exceed.

> [!question]
> For a DynamoDB table, what happens if the application performs more reads or writes than your provisioned capacity?
> 1. Nothing
> 2. Requests above the provisioned capacity will be performed but you will receive 400 error codes.
> 3. Requests above the provisioned capacity will be performed but you will receive 200 error codes.
> 4. Requests above the provisioned capacity will be throttled and you will receive 400 error codes.
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale**: Exceeding provisioned capacity results in a `ProvisionedThroughputExceededException`, which is a 400-series client error.

> [!question]
> In which of the following situations might you benefit from using DynamoDB? (Choose 2 answers)
> 1. You need fully managed database to handle highly complex queries
> 2. You need to deal with massive amount of "hot" data and require very low latency
> 3. You need a rapid ingestion of clickstream in order to collect data about user behavior
> 4. Your on-premises data center runs Oracle database, and you need to host a backup in AWS cloud
> 
> > [!success]- Answer & Rationale
> > **Answer: 2, 3**
> > **Rationale**: DynamoDB excels at high-volume, low-latency ingestion and retrieval. Complex queries (joins, subqueries) are better handled by [[RDS Overview|RDS]]. Backup for Oracle is typically handled by [[RDS Overview|RDS]] or EC2-based Oracle installs.

> [!question]
> [PROFESSIONAL] You are designing a file-sharing service with millions of files. You want to store metadata on each file (title, description, permissions) and charge users based on storage usage. How do you achieve this economically and at scale?
> 1. Store files in S3; store metadata in filenames; use LIST commands.
> 2. Store all files in Amazon S3. Create Amazon DynamoDB tables for the corresponding key-value pairs on the associated metadata.
> 3. Use a striped set of EBS volumes for storage; use RDS for metadata.
> 4. Use a striped set of EBS volumes for storage; use DynamoDB for metadata.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale**: The combination of [[S3 Overview|S3]] for object storage and DynamoDB for metadata is a standard architectural pattern. S3 provides unlimited, cheap storage, while DynamoDB provides fast, searchable access to metadata that is slow to retrieve via S3 LIST commands.

> [!question]
> [PROFESSIONAL] A company stores data from 10,000 sensors (1KB every 10 mins). They need to query a particular sensor for the past week rapidly and delete data older than 4 weeks. What is the most cost-effective implementation?
> 1. One table, PK = sensor ID, SK = timestamp.
> 2. One table, PK = concatenation of sensor ID and timestamp.
> 3. One table for each week, PK = concatenation of sensor ID and timestamp.
> 4. One table for each week, with a primary key that is the sensor ID and a hash key that is the timestamp.
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale**: Creating a new table per week (time-bucketed tables) allows for efficient data deletion by simply dropping the old table rather than performing millions of `DeleteItem` calls (which consume WCU). Using a composite key (Sensor ID + Timestamp) allows for efficient range queries.

> [!question]
> [PROFESSIONAL] A system with 100K sensors uploads 1KB of data per minute. You need to support this ingestion and store data for 2 years for year-over-year comparisons. Which setup meets these requirements?
> 1. Add an SQS queue to buffer writes to an RDS instance.
> 2. Ingest data into a DynamoDB table and move old data to a Redshift cluster.
> 3. Replace RDS with a 6-node Redshift cluster for ingestion and storage.
> 4. Upgrade RDS to 3TB and 10K provisioned IOPS.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale**: DynamoDB is superior for the high-concurrency ingestion of sensor data. Moving older data to Amazon Redshift (an OLAP database) allows for cost-effective long-term storage and high-performance analytical queries for year-over-year comparisons.

> [!question]
> Does Amazon DynamoDB support both increment and decrement atomic operations?
> 1. No, neither increment nor decrement operations.
> 2. Only increment.
> 3. Only decrement.
> 4. Yes, both increment and decrement operations.
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale**: The `UpdateItem` API allows for `ADD` actions (for numbers) which can be positive (increment) or negative (decrement).

> [!question]
> What is the data model of DynamoDB?
> 1. "Items", with Keys and one or more Attribute; and "Attribute", with Name and Value.
> 2. "Database", which is a set of "Tables", which is a set of "Items"...
> 3. "Table", a collection of Items; "Items", with Keys and one or more Attribute; and "Attribute", with Name and Value.
> 4. "Database", a collection of Tables...
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale**: This correctly identifies the hierarchy: Tables contain Items, which are made up of Attributes (Name-Value pairs).

> [!question]
> In regard to DynamoDB, for which one of the following parameters does Amazon NOT charge you?
> 1. Cost per provisioned write units
> 2. Cost per provisioned read units
> 3. Storage cost
> 4. I/O usage within the same Region
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale**: DynamoDB billing is based on Provisioned Throughput (RCU/WCU), Data Storage, and optional features (Streams, Backups). It does not charge for "I/O usage" as a separate metric like some EBS or RDS configurations.

> [!question]
> Which statements about DynamoDB are true? (Choose 2 answers)
> 1. DynamoDB uses a pessimistic locking model
> 2. DynamoDB uses optimistic concurrency control
> 3. DynamoDB uses conditional writes for consistency
> 4. DynamoDB restricts item access during reads
> 5. DynamoDB restricts item access during writes
> 
> > [!success]- Answer & Rationale
> > **Answer: 2, 3**
> > **Rationale**: DynamoDB uses Optimistic Concurrency Control (OCC) via conditional expressions in `PutItem`, `UpdateItem`, and `DeleteItem` to ensure that an operation only succeeds if the item hasn't changed since it was last read.

> [!question]
> Which of the following is an example of a good DynamoDB hash key schema for provisioned throughput efficiency?
> 1. User ID, where the application has many different users.
> 2. Status Code where most status codes is the same.
> 3. Device ID, where one is by far more popular than all the others.
> 4. Game Type, where there are three possible game types.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale**: A good partition (hash) key has high cardinality to distribute data and requests evenly across all partitions. Low cardinality keys (like Status Code or Game Type) lead to "hot partitions."

> [!question]
> You are inserting 1000 items/sec. Once an hour these items are analyzed and then no longer needed. What is the most efficient way to manage these items?
> 1. Retain the items in a single table.
> 2. Delete items individually over a 24 hour period.
> 3. Delete the table and create a new table per hour.
> 4. Create a new table per hour.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale**: Deleting a table is a metadata operation that costs nothing in terms of WCU. Deleting millions of individual items is extremely expensive and can impact the performance of other operations.

> [!question]
> When using a large Scan operation in DynamoDB, what technique can be used to minimize the impact of a scan on a table’s provisioned throughput?
> 1. Set a smaller page size for the scan.
> 2. Use parallel scans.
> 3. Define a range index on the table.
> 4. Prewarm the table by updating all items.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale**: A `Scan` operation reads every item in the table. By setting a smaller `Limit` (page size), the scan is broken into smaller chunks, preventing it from consuming the entire provisioned throughput of the table in a single request.

> [!question]
> In regard to DynamoDB, which of the following statements is correct?
> 1. An Item should have at least two value sets, a primary key and another attribute.
> 2. An Item can have more than one attributes
> 3. A primary key should be single-valued.
> 4. An attribute can have one or several other attributes.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale**: A DynamoDB item is a collection of attributes. While it must have a primary key, it can have any number of other attributes (up to the 400KB limit).

> [!question]
> Which one of the following statements is NOT an advantage of DynamoDB being built on Solid State Drives?
> 1. Serve high-scale request workloads
> 2. Low request pricing
> 3. High I/O performance of WebApp on EC2 instance
> 4. Low-latency response times
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale**: The performance of a WebApp on an EC2 instance is determined by the instance type and EBS volumes, not the underlying storage of the DynamoDB service.

> [!question]
> Which one of the following operations is NOT a DynamoDB operation?
> 1. BatchWriteItem
> 2. DescribeTable
> 3. BatchGetItem
> 4. BatchDeleteItem
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale**: While you can delete multiple items using `BatchWriteItem` (by specifying `DeleteRequest` objects), there is no standalone API named `BatchDeleteItem`.

> [!question]
> What item operation allows the retrieval of multiple items from a DynamoDB table in a single API call?
> 1. GetItem
> 2. BatchGetItem
> 3. GetMultipleItems
> 4. GetItemRange
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale**: `BatchGetItem` allows you to retrieve up to 100 items from one or more tables in a single call.

> [!question]
> [PROFESSIONAL] Managers run reports for ranges of names in their office. One query is: "Return all Items in this office for names starting with A through E". Which table configuration results in the lowest throughput impact?
> 1. Hash on Name, Range on Office ID.
> 2. Hash on Office ID, Range on Name.
> 3. Hash on Name, no Range.
> 4. Hash on Office ID, no Range.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale**: Using Office ID as the partition (hash) key and Name as the sort (range) key allows the query to target a specific partition and then use the `begins_with` or `BETWEEN` operator on the sort key to efficiently retrieve only the required names.

> [!question]
> Migrate 10M records in 1 hour. All records are 1.5KB. Data is evenly distributed. How many WCU?
> 1. 6667
> 2. 4166
> 3. 5556
> 4. 2778
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale**: 1. Calculate units per item: 1.5KB requires 2 WCU (1 unit per 1KB, rounded up). 2. Total units needed: 10,000,000 items * 2 WCU/item = 20,000,000 total units. 3. Calculate units per second: 20,000,000 units / 3600 seconds ≈ 5,555.55. 4. Round up to 5556 WCU.

> [!question]
> 600 temperature gauges, samples every minute. Each sample is 1KB. Writes are evenly distributed. How much write throughput is required?
> 1. 1 WCU
> 2. 10 WCU
> 3. 60 WCU
> 4. 600 WCU
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale**: 600 samples per minute / 60 seconds = 10 samples per second. Each 1KB write requires 1 WCU. Total = 10 WCU.

> [!question]
> You need to store user high scores for many games and look up the highest score for any game. What’s the best DynamoDB key structure?
> 1. HighestScore as the Hash key.
> 2. GameID as the Hash key, HighestScore as the Range key.
> 3. GameID as the Hash key only.
> 4. GameID as the Range key only.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale**: Using GameID as the partition key groups all scores for a game together. Using HighestScore as the sort key allows you to efficiently query for the top scores (e.g., using `ScanIndexForward=false` to get the highest first).

> [!question]
> A marketplace for video games experiences performance issues on its most popular game’s high score table. What is the most likely problem?
> 1. Vector clock out of sync.
> 2. You selected the Game ID as the primary partition key.
> 3. Users of the popular game perform more requests.
> 4. Not enough throughput provisioned.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale**: If one game is significantly more popular than others, all traffic for that game will hit a single partition (the one mapped to that Game ID), leading to a "hot partition" even if the overall table throughput is not exceeded.

> [!question]
> You receive `ProvisionedThroughputExceededException` but CloudWatch metrics show you are below your provisioned throughput. Why?
> 1. Not enough storage instances.
> 2. Exceeding capacity on a particular Range Key.
> 3. Exceeding capacity on a particular Hash Key.
> 4. Auto Scaling not configured.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale**: CloudWatch metrics for DynamoDB are often averaged over one minute. Bursts of traffic to a single partition (Hash Key) can cause throttling that doesn't show up in the minute-level averages of the entire table's throughput.

> [!question]
> [PROFESSIONAL] Device activation data must be analyzed daily with MapReduce in under 3 hours. Peaks can reach 100x average. Which setup optimizes cost and performance?
> 1. RDS + EMR with Spot instances.
> 2. DynamoDB + EMR with Spot instances.
> 3. RDS + EMR with Reserved instances.
> 4. DynamoDB + EMR with Reserved instances.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale**: DynamoDB handles the unpredictable 100x peaks more gracefully than RDS (especially with On-Demand capacity). EMR with Spot instances provides the most cost-effective processing for the daily batch job.
