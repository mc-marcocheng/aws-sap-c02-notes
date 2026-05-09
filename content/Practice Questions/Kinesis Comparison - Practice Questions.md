---
tags: [aws, sap-c02, kinesis, practice-questions]
---

# Kinesis Comparison Practice Questions

> [!question]
> Your organization needs to ingest a big data stream into its data lake on Amazon S3. The data may stream in at a rate of hundreds of megabytes per second. What AWS service will accomplish the goal with the least amount of management?
> 1. Amazon Kinesis Firehose
> 2. Amazon Kinesis Streams
> 3. Amazon CloudFront
> 4. Amazon SQS
>
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** Amazon Kinesis Firehose is fully managed and automatically scales to deliver streaming data to Amazon S3 with the least amount of management overhead.

> [!question]
> Your application generates a 1 KB JSON payload that needs to be queued and delivered to EC2 instances for applications. At the end of the day, the application needs to replay the data for the past 24 hours. In the near future, you also need the ability for other multiple EC2 applications to consume the same stream concurrently. What is the best solution for this?
> 1. Kinesis Data Streams
> 2. Kinesis Firehose
> 3. SNS
> 4. SQS
>
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** Kinesis Data Streams supports data storage (typically 24 hours up to 365 days), replay capability, and concurrent consumption by multiple applications.

> [!question]
> A company needs to stream data to Amazon S3 with the lowest possible latency (under 10 seconds). Which Kinesis service and configuration should they use? (Assume December 2023 or later)
> 1. Kinesis Data Streams with Lambda consumer
> 2. Kinesis Data Firehose with zero buffering enabled
> 3. Kinesis Data Firehose with 60-second buffer
> 4. Kinesis Data Streams with KCL consumer
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** Kinesis Data Firehose with Zero Buffering (introduced December 2023) delivers data within ~5 seconds, meeting the under 10 seconds latency requirement.