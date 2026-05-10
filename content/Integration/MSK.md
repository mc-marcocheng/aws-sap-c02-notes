---
tags: [aws, sap-c02, integration, msk] 
---
# Amazon MSK (Managed Streaming for Apache Kafka)

A fully managed service that makes it easy to build and run applications that use Apache Kafka to process streaming data.

## Architectural Patterns
- **High-Throughput Streaming:** Designed for massive data ingestion and real-time analytics (clickstreams, log aggregation, event sourcing).
- **Cluster Deployment:** Deploys Kafka brokers across multiple AZs (up to 3). Data is replicated automatically.
- **MSK Connect:** Run Kafka Connect clusters on AWS to move data between MSK and other data stores (like [[S3 Overview|S3]], [[Redshift]], [[OpenSearch]]) without managing infrastructure.
- **Serverless vs Provisioned:** MSK Serverless automatically scales compute and storage based on demand, reducing operational overhead.

## Multi-Region Strategies
- Requires MirrorMaker 2.0 (usually running on MSK Connect or [[EC2 Overview|EC2]]) to replicate data asynchronously across MSK clusters in different AWS regions for Disaster Recovery.

> [!exam]
> Choose MSK when an application already uses Apache Kafka and needs to migrate, or when you need the specific streaming capabilities, massive throughput, and long-term retention of Kafka over Amazon [[Kinesis Overview|Kinesis]].

## Related Services
- [[_Integration Index|Integration Index]]
- [[Kinesis Overview|Kinesis]]
- [[Redshift]]
- [[OpenSearch]]

---
**Practice:** [[MSK - Practice Questions|MSK Practice Questions]]