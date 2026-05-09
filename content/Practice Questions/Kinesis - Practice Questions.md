---
tags: [aws, sap-c02, analytics, kinesis, practice-questions]
---
# Kinesis Practice Questions

> [!question]
> You are deploying an application to track GPS coordinates of delivery trucks in the United States. Coordinates are transmitted from each delivery truck once every three seconds. You need to design an architecture that will enable real-time processing of these coordinates from multiple consumers. Which service should you use to implement data ingestion?
> 1. Amazon Kinesis
> 2. AWS Data Pipeline
> 3. Amazon AppStream
> 4. Amazon Simple Queue Service
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale**: [[Kinesis Overview|Amazon Kinesis Data Streams]] is designed for real-time ingestion and processing of streaming data. It specifically supports multiple consumers reading from the same stream simultaneously, which is a key requirement here. SQS is generally a one-to-one message delivery system (unless using SNS fan-out).

> [!question]
> You are deploying an application to collect votes for a very popular television show. Millions of users will submit votes using mobile devices. The votes must be collected into a durable, scalable, and highly available data store for real-time public tabulation. Which service should you use?
> 1. Amazon DynamoDB
> 2. Amazon Redshift
> 3. Amazon Kinesis
> 4. Amazon Simple Queue Service
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale**: For real-time tabulation of millions of events, [[Kinesis Overview|Kinesis]] provides the necessary scalability and durability. While DynamoDB could store the votes, Kinesis is better suited for the initial ingestion and streaming to real-time analytics engines.

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
