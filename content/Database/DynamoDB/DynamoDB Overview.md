---
tags: [aws, sap-c02, database, dynamodb]
---
# DynamoDB Overview

Amazon [[DynamoDB Overview|DynamoDB]] is a fully managed NoSQL database service that provides fast, predictable performance with seamless scalability.

> [!important]
> - **Scale**: Handles any level of request traffic with single-digit millisecond latency.
> - **Managed**: No hardware provisioning, setup, configuration, or software patching.
> - **Durability**: Synchronously replicates data across 3 facilities in an AWS Region.

## Primary Keys

DynamoDB supports two types of primary keys:

| Key Type | Components | Description |
| --- | --- | --- |
| **Simple Primary Key** | Partition Key (PK) | Also known as the Hash Key. Used to distribute data across partitions. |
| **Composite Primary Key** | PK + Sort Key (SK) | SK is also known as the Range Key. Multiple items can share the same PK but must have unique SKs. |

## Table Classes

| Table Class | Best For | Storage Cost | Throughput Cost |
| --- | --- | --- | --- |
| **Standard** (Default) | General purpose, high-frequency access. | Higher | Lower |
| **Standard-IA** | Infrequently accessed data (storage is the dominant cost). | **60% lower** | Higher |

## Read/Write Capacity Modes

| Mode | Description | Use Case |
| --- | --- | --- |
| **Provisioned** | Specify the number of reads/writes per second. | Predictable traffic; can use Auto Scaling. |
| **On-Demand** | Pays per request; no capacity planning. | Unpredictable or bursty traffic. |

### Capacity Units (RCU / WCU)
- **1 WCU**: 1 write/sec for item ≤ 1 KB.
- **1 RCU**: 1 strongly consistent read/sec for item ≤ 4 KB (or 2 eventually consistent).

## Read Consistency

- **Eventually Consistent** (Default): Maximizes throughput. Data is typically consistent within 1 second across all replicas.
- **Strongly Consistent**: Returns a result that reflects all successful writes prior to the read. Costs 2x RCU and may have higher latency.
- **Global Secondary Indexes (GSI)**: Only support eventually consistent reads.

## Operations and Bulk Actions

- **Import/Export to S3**: Native feature for bulk operations without consuming table capacity. Supported formats: DynamoDB JSON, Ion, and CSV (import only).
- **Scanning vs. Querying**: 
    - **Query**: Efficiently retrieves items using PK and optional SK filters.
    - **Scan**: Reads every item in the table (expensive and slow; use filters and page limits to minimize impact).

> [!exam]
> - **Hot Partitions**: Occur when a single PK receives a disproportionate amount of traffic. Choose a PK with high cardinality (e.g., User ID, Device ID).
> - **Cost Optimization**: Use **Standard-IA** for infrequently accessed data. Use **Reserved Capacity** for significant savings on provisioned throughput.
> - **Throttling**: If you exceed provisioned capacity, you receive a `400 ProvisionedThroughputExceededException`.
> - **S3 Metadata**: A classic exam pattern is storing large files in [[S3 Overview|S3]] and their metadata in DynamoDB.

## Related Services
- [[_Database Index|Database Index]]
- [[DynamoDB Advanced Features]]
- [[DynamoDB Throughput and Scaling]]
- [[S3 Overview]]

---
**Practice:** [[DynamoDB - Practice Questions|DynamoDB Practice Questions]]