---
tags: [aws, sap-c02, kinesis]
---
# Kinesis Data Streams vs. Kinesis Data Firehose

Understanding the differences between Kinesis Data Streams (KDS) and Kinesis Data Firehose (KDF) is essential for designing streaming architectures.

## Key Differences Summary

| Feature | Kinesis Data Streams (KDS) | Kinesis Data Firehose (KDF) |
| --- | --- | --- |
| **Capacity Mode** | Provisioned or On-Demand | Fully managed (automatic) |
| **Latency** | Real-time (~70-200 ms) | Near real-time (60s default, ~5s min) |
| **Data Retention** | 24 hours to 365 days | No storage (transient) |
| **Replay** | Supported | Not supported |
| **Consumers** | Custom (SDK, KCL, Lambda) | Pre-defined (S3, Redshift, OpenSearch) |
| **Use Case** | Custom real-time apps, sub-second latency | ETL, loading data into AWS data stores |

![[kinesis-data-streams-vs-kinesis-data-firehose.jpg]]

## Kinesis Data Streams (KDS)
- **Customizable**: Build your own processing logic using KCL or Lambda.
- **High Performance**: Enhanced fan-out provides dedicated 2MB/s throughput per consumer.
- **Scaling**: 
    - **Provisioned**: Manually manage shards.
    - **On-Demand**: AWS manages scaling automatically (up to 200 MB/s).

## Kinesis Data Firehose (KDF)
- **Zero Management**: No shards to manage; scales automatically.
- **Built-in Transformations**: Use Lambda to transform/convert data format (e.g., JSON to Parquet/Orc) before delivery.
- **Destinations**: Native delivery to S3, Redshift, OpenSearch, HTTP endpoints, and Snowflake.
- **Buffering**: Delivers data based on time (60-900s) or size (1-128MB).

> [!exam]
> **SAP-C02 Decision Point**:
> - If you need **sub-second latency** or need to **replay** data: Choose **KDS**.
> - If you need to **load data into S3 or Redshift** with minimal management: Choose **KDF**.
> - If you need to **transform data** on the fly before storing it: Use **KDF with a Lambda function**.

---
**Practice:** [[Kinesis Comparison - Practice Questions|Kinesis Comparison Practice Questions]]