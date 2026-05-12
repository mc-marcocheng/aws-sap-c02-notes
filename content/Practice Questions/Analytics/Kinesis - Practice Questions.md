---
tags: [aws, sap-c02, analytics, kinesis, practice-questions]
---
# Kinesis Practice Questions

> [!question]
> A financial services company is building a real-time trading platform. Thousands of trading events per second are ingested into an Amazon Kinesis Data Stream. Multiple downstream applications need to process these events: one for fraud detection (latency-sensitive) and another for long-term auditing (stored in S3). The company notices that as they add more consumer applications, the overall throughput per consumer is decreasing due to the 2 MB/sec per shard limit. How should the company scale the consumption of the stream without increasing the number of shards?
> 1. Use Kinesis Data Firehose to distribute the data to multiple S3 buckets.
> 2. Enable Enhanced Fan-out for the consumer applications.
> 3. Increase the retention period of the Kinesis Data Stream.
> 4. Use Amazon SQS to buffer the data before it reaches the consumers.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[Kinesis Overview|Enhanced Fan-out]] allows consumers to receive their own dedicated 2 MB/sec throughput per shard, separate from other consumers. This is the primary way to scale consumption when multiple applications need to read from the same stream simultaneously without encountering the shared throughput limit. Kinesis Data Firehose (Option 1) is for loading data, not for multi-consumer real-time processing. Increasing retention (Option 3) doesn't help with throughput. SQS (Option 4) doesn't natively support multiple consumers reading the same message independently without a fan-out architecture (like SNS).

> [!question]
> An e-commerce platform needs to process clickstream data to update a recommendation engine in real-time. The order of events is critical: the engine must process "item_viewed" before "item_added_to_cart" for each user session. How should the data be published to Kinesis to ensure this ordering?
> 1. Publish all events without a Partition Key to allow Kinesis to balance the load across shards.
> 2. Use the `SessionID` as the Partition Key when publishing events to the Kinesis Data Stream.
> 3. Use a random string as the Partition Key for each event to ensure high entropy.
> 4. Use Kinesis Data Firehose with a 60-second buffering window to sort events before delivery.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[Kinesis Overview|Partition Keys]] determine which shard a record is sent to. Kinesis guarantees that all records with the same Partition Key will be sent to the same shard and will be processed in the order they arrived. By using the `SessionID` as the Partition Key, the platform ensures that all events for a specific user session are processed in order by the same consumer instance.

> [!question]
> Your company is developing a pet collar that collects biometric information. Each collar pushes 30kb of data every 2 seconds. Requirements: real-time analytics, highly durable, elastic, and parallel. Results should be persisted for data mining. Which architecture meets these requirements?
> 1. Utilize S3 to collect inbound sensor data, analyze with Data Pipeline, save to Redshift.
> 2. Utilize Amazon Kinesis to collect inbound sensor data, analyze with Kinesis clients and save results to Redshift using EMR.
> 3. Utilize SQS to collect inbound sensor data, analyze with Kinesis and save to RDS.
> 4. Utilize EMR to collect inbound sensor data, analyze with Kinesis and save to DynamoDB.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale**: [[Kinesis Overview|Kinesis]] handles the real-time ingestion and parallel processing. Kinesis clients (KCL) provide the elasticity and parallel processing capability. Saving to Redshift (potentially via EMR or Firehose) satisfies the long-term data mining requirement.

> [!question]
> A customer wants to consolidate access logs, application logs, and security logs in one single system for real-time heuristic analysis. They occasionally need to go back to data samples from the last 12 hours to validate heuristics. What is the best approach?
> 1. Send all log events to Amazon SQS. Setup Auto Scaling group to consume and apply heuristics.
> 2. Send all log events to Amazon Kinesis and develop a client process to apply heuristics.
> 3. Configure Amazon CloudTrail to receive custom logs, use EMR to apply heuristics.
> 4. Setup Auto Scaling group of EC2 syslogd servers, store logs on S3, use EMR.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale**: [[Kinesis Overview|Kinesis Data Streams]] supports real-time analysis and has a default retention period of 24 hours (extendable to 365 days). This allows the "going back 12 hours" requirement to be met by simply re-reading the stream from a previous sequence number or timestamp.

> [!question]
> You need to analyze clickstream data to understand the sequence of pages and ads clicked. This data must be used in real-time to modify page layouts. Which option meets the requirements?
> 1. Log clicks in weblogs to S3, then analyze with EMR.
> 2. Push web clicks by session to Amazon Kinesis and analyze behavior using Kinesis workers.
> 3. Write click events directly to Redshift and analyze with SQL.
> 4. Publish web clicks to SQS, then drain periodically to RDS.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale**: [[Kinesis Overview|Kinesis]] preserves the order of records within a shard when a Partition Key (like SessionID) is used. This is critical for "sequence of pages" analysis in real-time.

> [!question]
> Your social media application injects feeds into a Kinesis stream. A second app generates KPIs into DynamoDB. What is the most efficient option to prevent data loss for this application?
> 1. Use Data Pipeline to replicate DynamoDB tables.
> 2. Use the second app to store a backup of Kinesis data onto EBS.
> 3. Add a second Kinesis stream in another AZ and replicate.
> 4. Add a third app that uses the Kinesis S3 connector to archive data into S3.
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale**: Archiving the raw stream to S3 is the most cost-effective and efficient way to ensure long-term durability and recoverability of the source data, complementing the real-time processing.

> [!question]
> You need to replicate API calls across two systems in real time. What tool should you use as a buffer and transport mechanism for API call events?
> 1. AWS SQS
> 2. AWS Lambda
> 3. AWS Kinesis
> 4. AWS SNS
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale**: [[Kinesis Overview|Kinesis]] acts as an event stream buffer. It maintains the order of events and allows multiple consumers (the two systems) to process the same data independently.

> [!question]
> You need to perform ad-hoc business analytics queries on well-structured data arriving at high velocity. Your team understands SQL. What AWS services should you use?
> 1. Kinesis Firehose + RDS
> 2. Kinesis Firehose + RedShift
> 3. EMR using Hive
> 4. EMR running Apache Spark
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale**: [[Kinesis Overview|Kinesis Data Firehose]] can aggregate high-velocity streaming data and load it directly into Redshift. Redshift is an OLAP database that supports standard SQL, making it ideal for the BI team's ad-hoc queries.

> [!question]
> A company wants to avoid manual shard management for their Kinesis Data Streams. Which capacity mode should they use?
> 1. Provisioned mode with Auto Scaling
> 2. On-Demand mode
> 3. Enhanced fan-out mode
> 4. Standard mode
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale**: In [[Kinesis Overview#Capacity Modes|On-Demand mode]], AWS automatically manages shard capacity based on throughput, removing the need for manual resharding.

> [!question]
> A company needs to access Kinesis Data Streams from an on-premises data center privately without traversing the public internet. Which solution should they use?
> 1. Use public Kinesis endpoints over VPN
> 2. Create Interface VPC endpoints with cross-region PrivateLink support
> 3. Use NAT Gateway
> 4. Use Internet Gateway with security groups
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale**: [[Kinesis Overview#Security|Interface VPC Endpoints (PrivateLink)]] allow private connectivity to Kinesis. Recent updates (Nov 2025) support cross-region PrivateLink, further enhancing connectivity options.
