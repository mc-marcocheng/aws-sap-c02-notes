---
tags: [aws, sap-c02, dynamodb]
---
# DynamoDB Throughput and Scaling

Detailed overview of read/write capacity modes and how DynamoDB handles scaling and partitions.

## Capacity Modes

| Mode | Performance | Billing | Use Case |
| --- | --- | --- | --- |
| **Provisioned** | Fixed throughput (RCUs/WCUs) | Hourly rate based on capacity | Predictable traffic patterns. |
| **On-Demand** | Flexible, scales automatically | Pay-per-request | Unpredictable or unknown workloads. |

## Provisioned Throughput Calculations

### Read Capacity Units (RCU)
- **1 RCU** = 1 Strongly Consistent Read per second (up to 4 KB).
- **1 RCU** = 2 Eventually Consistent Reads per second (up to 4 KB).
- **2 RCUs** = 1 Transactional Read per second (up to 4 KB).
- *Calculation*: `(Item Size / 4 KB rounded up) * Reads per second`.

### Write Capacity Units (WCU)
- **1 WCU** = 1 Write per second (up to 1 KB).
- **2 WCUs** = 1 Transactional Write per second (up to 1 KB).
- *Calculation*: `(Item Size / 1 KB rounded up) * Writes per second`.

> [!exam]
> **Example Calculation**: To perform 10 strongly consistent reads per second for an 8 KB item:
> `(8 KB / 4 KB) * 10 = 2 * 10 = 20 RCUs`.

## Scaling and Throttling

### Partitions
DynamoDB distributes data across physical partitions. Each partition has hard limits:
- **3,000 RCUs** per partition.
- **1,000 WCUs** per partition.
- **10 GB** of data per partition.

### Handling Throttling
Throttling occurs when you exceed provisioned capacity or hit a hot partition.
- **Error**: `400 ProvisionedThroughputExceededException`.
- **Solution**: Implement exponential backoff (built into SDKs) or increase capacity.

## High Availability Scaling Features

### Burst Capacity
- DynamoDB retains up to **5 minutes (300 seconds)** of unused capacity for sudden spikes.
- This capacity is consumed before throttling starts.

### Adaptive Capacity
- Automatically handles imbalanced workloads (hot partitions).
- Allows a hot partition to consume more than its share of the table's total provisioned capacity as long as the total isn't exceeded.
- Enabled by default for all tables.

> [!important]
> **GSI Throttling**: If a Global Secondary Index (GSI) is throttled due to insufficient write capacity, it will throttle the **base table** as well. Always ensure GSI WCUs are equal to or greater than the base table WCUs.

> [!exam]
> - **Exponential Backoff**: The first line of defense for throttling.
> - **Hot Partitions**: Caused by poor PK design (low cardinality).
> - **Calculation Tip**: Always round UP the item size to the nearest 4 KB for reads and 1 KB for writes.

---
**Practice:** [[DynamoDB Throughput - Practice Questions|DynamoDB Throughput Practice Questions]]