---
tags: [aws, sap-c02, kinesis, practice-questions]
---

# Kinesis Comparison Practice Questions

> [!question]
> A global logistics company needs to capture telemetry data from millions of IoT sensors and store it in an Amazon S3-based data lake for long-term analysis. The data must be transformed from JSON to Parquet format before being stored to optimize costs in Athena. The solution must handle massive bursts in traffic and require the LEAST amount of custom code and infrastructure management. What is the BEST solution?
> 1. Use Kinesis Data Streams and a fleet of EC2 instances running the Kinesis Client Library (KCL) to transform and write data to S3.
> 2. Use Kinesis Data Firehose with an inline AWS Lambda function for transformation, delivering directly to S3 with Parquet conversion enabled.
> 3. Use Amazon MSK (Managed Streaming for Apache Kafka) with Kafka Connect to stream data to S3.
> 4. Use Amazon SQS to buffer the data and a scheduled EMR job to transform and move data to S3.
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[Kinesis Overview|Kinesis Data Firehose]] is a fully managed, serverless service that can ingest, transform, and load data into [[S3 Overview|S3]]. It natively supports converting JSON to **Parquet** format and can trigger an inline [[Lambda]] function for custom transformations (like schema mapping), meeting all requirements with minimal management compared to EC2/KCL (Option 1) or MSK (Option 3).

> [!question]
> Your application generates a 1 KB JSON payload that needs to be queued and delivered to EC2 instances for applications. At the end of the day, the application needs to replay the data for the past 24 hours. In the near future, you also need the ability for other multiple EC2 applications to consume the same stream concurrently. What is the best solution for this?
> 1. Kinesis Data Streams
> 2. Kinesis Firehose
> 3. SNS
> 4. SQS
>
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** [[Kinesis Overview|Kinesis Data Streams]] supports data storage (typically 24 hours up to 365 days), replay capability, and concurrent consumption by multiple applications.

> [!question]
> A company needs to stream data to Amazon S3 with the lowest possible latency (under 10 seconds). Which Kinesis service and configuration should they use? (Assume December 2023 or later)
> 1. Kinesis Data Streams with Lambda consumer
> 2. Kinesis Data Firehose with zero buffering enabled
> 3. Kinesis Data Firehose with 60-second buffer
> 4. Kinesis Data Streams with KCL consumer
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[Kinesis Overview|Kinesis Data Firehose]] with **Zero Buffering** (introduced December 2023) delivers data within ~5 seconds, meeting the under 10 seconds latency requirement. Unlike traditional Firehose which had a minimum 60-second buffer, Zero Buffering enables near real-time delivery to [[S3 Overview|S3]].
