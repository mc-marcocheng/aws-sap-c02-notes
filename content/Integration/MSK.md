---
tags: [aws, sap-c02, integration, msk] 
---
# Amazon MSK (Managed Streaming for Apache Kafka)

Managed service for building and running applications that use **Apache Kafka** to process streaming data.

## Core Features
- **MSK Serverless:** Automatically scales compute and storage. No capacity planning required; pay per throughput.
- **MSK Connect:** Managed Kafka Connect for running source/sink connectors to move data between MSK and services like [[S3 Overview|S3]] or [[Redshift]].
- **Storage:** Supports tiered storage to scale storage independently of compute.

## Comparison: MSK vs Kinesis

| Feature | Amazon MSK | Amazon Kinesis |
| :--- | :--- | :--- |
| **Ecosystem** | Apache Kafka | AWS Native |
| **Message Size** | **1 MB default (up to 10 MB)** | **1 MB Max** |
| **Retention** | Days to Years | 24 hours to 365 days |
| **Scaling** | Provisioned or Serverless | On-demand or Provisioned |
| **Consumer Type** | Kafka Consumers, Flink, Lambda | Kinesis Client Library (KCL), Lambda |

## Architectural Patterns
- **High-Throughput Streaming:** Massive data ingestion for real-time analytics.
- **Multi-Region:** Uses **MirrorMaker 2.0** to replicate data asynchronously across regions for DR.

> [!exam]
> Choose MSK if:
> 1. Migrating an existing Kafka workload.
> 2. Requiring **message sizes > 1 MB**.
> 3. Needing specific Kafka-compatible integrations or long-term data retention (years).

## Related Services
- [[_Integration Index|Integration Index]]
- [[Kinesis Overview|Kinesis]]
- [[Redshift]]
- [[OpenSearch]]

---
**Practice:** [[MSK - Practice Questions|MSK Practice Questions]]