---
tags: [aws, sap-c02, msk, practice-questions] 
---
# MSK Practice Questions

> [!question]
> A data engineering team manages an on-premises Apache Kafka cluster that ingests terabytes of telemetry data daily. The cluster requires constant tuning, patching, and scaling. The team wants to migrate to AWS to reduce operational overhead but must retain complete compatibility with their existing Kafka consumer and producer applications. Which service is appropriate?
> 1. Amazon Kinesis Data Streams
> 2. Amazon MQ for RabbitMQ
> 3. Amazon MSK (Managed Streaming for Apache Kafka)
> 4. AWS IoT Core
>
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** Amazon [[MSK]] provides a fully managed Apache Kafka environment, allowing applications to migrate without code changes while AWS handles the broker provisioning, patching, and high availability.

> [!question]
> A company uses Amazon MSK for streaming data. They want to continuously export this data to Amazon S3 for long-term archiving and machine learning analysis, with minimal custom coding and infrastructure management. What is the BEST approach?
> 1. Write a custom Lambda function triggered by MSK to dump data to S3.
> 2. Deploy Kafka Connect on an EC2 instance with the S3 Sink Connector.
> 3. Use Amazon MSK Connect with the Amazon S3 Sink Connector.
> 4. Configure Amazon Kinesis Data Firehose to read directly from MSK.
>
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** [[MSK|MSK Connect]] is a managed service that allows you to run Kafka Connect without managing infrastructure. Using it with the standard S3 Sink Connector provides a fully managed, scalable way to continuously export Kafka topics to [[S3 Overview|S3]] with no custom code.

> [!question]
> An organization operates a mission-critical Amazon MSK cluster in the `us-east-1` region. To meet strict compliance requirements, they must maintain an asynchronous replica of the Kafka data in the `us-west-2` region for disaster recovery. How can this cross-region replication be achieved?
> 1. Enable native MSK Multi-Region Replication in the AWS Console.
> 2. Use MirrorMaker 2.0 deployed on EC2 or MSK Connect to replicate topics across regions.
> 3. Configure a cross-region EBS snapshot lifecycle policy for the MSK brokers.
> 4. Use AWS DataSync to copy the broker storage volumes to the secondary region.
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** Kafka data replication across distinct clusters (especially cross-region) is achieved using Apache Kafka MirrorMaker 2.0. AWS does not have a "single click" cross-region feature for MSK data plane replication; MirrorMaker must be used.