---
tags: [aws, sap-c02, ec2]
---
# EC2 Instance Types

EC2 provides a wide selection of instance types optimized to fit different use cases. Instance types comprise varying combinations of CPU, memory, storage, and networking capacity.

## Instance Families Comparison

| Family | Type | Use Case | Examples |
| ------ | ---- | -------- | -------- |
| **General Purpose** | Balance of compute, memory, and networking. | Web servers, small DBs, dev environments. | T3, T4g, M5, M6g |
| **Compute Optimized** | High-performance processors. | Batch processing, media transcoding, gaming servers. | C5, C6g, C7g |
| **Memory Optimized** | Large memory footprints. | High-performance DBs, distributed web-scale in-memory caches. | R5, R6g, X1, High Memory |
| **Accelerated Computing** | Hardware accelerators (GPUs, FPGAs). | Machine learning, graphics, data science. | P4, G5, F1 |
| **Storage Optimized** | High, sequential R/W for large datasets. | NoSQL DBs, data warehousing, Hadoop. | I3, I4g, D3, H1 |

> [!exam]
> - **T-Series (Burstable)**: Uses **CPU Credits** to burst above baseline performance. Good for unpredictable workloads.
> - **EBS-Optimized**: Provides dedicated bandwidth for EBS I/O, eliminating contention with network traffic.
> - **Enhanced Networking**: Uses SR-IOV (Single Root I/O Virtualization) to provide higher I/O performance and lower CPU utilization (look for ENA or Intel 82599).

## Placement Groups

Placement groups determine how instances are distributed across the underlying hardware to meet specific application needs.

| Type | Strategy | Ideal For |
| ---- | -------- | --------- |
| **Cluster** | Packs instances close together inside a single AZ. | Low-latency, high-throughput network performance (HPC). |
| **Partition** | Spreads instances across logical partitions; partitions don't share hardware. | Distributed, large-scale workloads (Hadoop, Cassandra, Kafka). |
| **Spread** | Each instance is on a distinct rack with its own network and power. | Small number of critical instances that must be kept separate. |

> [!important]
> Cluster placement groups cannot span multiple Availability Zones.

## Instance Selection Criteria

- **Virtualization Type**: AWS recommends **HVM** (Hardware Virtual Machine) for better performance and to take advantage of modern hardware features.
- **Network Performance**: High-end instances support **Enhanced Networking** (ENA) for up to 100 Gbps.
- **Storage**:
    - **Instance Store**: Ephemeral storage physically attached to the host. Lost if the instance is stopped/terminated.
    - **EBS**: Persistent, network-attached storage.

> [!exam]
> If an application is bottlenecked by network throughput on a small instance, the first step is often to **change to a larger instance type** or one that supports **Enhanced Networking**.

## Burstable Performance (T-Series)

- **CPU Credits**: One CPU credit equals one vCPU running at 100% utilization for one minute.
- **Baseline Performance**: The level at which an instance can run continuously without consuming credits.
- **Unlimited Mode**: Allows instances to sustain high CPU performance for as long as needed, with additional charges if credits are exhausted.

---
**Practice:** [[EC2 Types - Practice Questions|EC2 Types Practice Questions]]