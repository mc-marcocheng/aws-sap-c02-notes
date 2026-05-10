---
tags: [aws, sap-c02, analytics, kinesis]
---
# Kinesis Data Streams Overview

Amazon Kinesis Data Streams (KDS) is a massively scalable and durable real-time data streaming service.

## Core Terminology
 - **Shard**: The base unit of throughput. 1 MB/s Ingest, 2 MB/s Outgest.- **Partition Key**: Used to group data by shard. Ensures that data for the same key goes to the same shard (preserving order).
- **Sequence Number**: A unique identifier assigned by KDS to each data record.
- **Retention**: 24 hours by default, extendable up to 365 days.

## Capacity Modes
1. **On-Demand**: (Recommended for variable workloads) AWS automatically manages shards. Scales up to 200 MB/s (or more with support).
2. **Provisioned**: (Best for predictable traffic) You specify the number of shards and pay per shard/hour.

## Producers and Consumers
- **Producers**: KPL (Kinesis Producer Library), Kinesis Agent, SDK (`PutRecord`, `PutRecords`).
- **Consumers**: KCL (Kinesis Client Library), AWS [[Lambda]], Kinesis Data Firehose.
- **Enhanced Fan-Out**: Provides a dedicated 2 MB/s throughput per consumer per shard, reducing latency to ~70ms.

## Security
- **Encryption at Rest**: Server-side encryption using AWS [[KMS]].
- **Encryption in Transit**: TLS/HTTPS.
- **VPC Endpoints**: Interface [[VPC Endpoints]] (PrivateLink) for private access.

## Resharding
- **Shard Splitting**: Increases capacity (Splits one shard into two).
- **Shard Merging**: Decreases cost (Merges two shards into one).
- **Note**: With On-Demand mode, resharding is automated.

> [!exam]
> **Kinesis vs. SQS**:
> - **Kinesis**: Multiple consumers can read the same message (pub/sub style), data is ordered per shard, and data is persistent (replayable).
> - **SQS**: One consumer per message (usually), no native replay, and messages are deleted after processing.

## Related Services
- [[_Analytics Index|Analytics Index]]
- [[Lambda]]
- [[SQS Overview|SQS]]
- [[VPC Endpoints]]
- [[KMS]]

---
**Practice:** [[Kinesis - Practice Questions|Kinesis Practice Questions]]