---
tags: [compute, aws, sap-c02, ec2]
---
# Placement Groups

EC2 Placement groups determine how instances are placed on the underlying hardware to optimize for performance or fault tolerance.

## Placement Group Types

| Type | Description | Best For |
| :--- | :--- | :--- |
| **Cluster** | Packs instances close together inside a single AZ. | Low-latency, high-throughput network performance. |
| **Partition** | Spreads instances across logical partitions that do not share underlying hardware. | Large distributed/replicated workloads (HDFS, HBase, Cassandra). |
| **Spread** | Strictly places each instance on distinct underlying hardware (racks). | Small number of critical instances that must be kept separate. |

---
## 1. Cluster Placement Groups
- **Scope**: Logical grouping within a **single Availability Zone**.
- **Connectivity**: Can span peered VPCs in the same Region.
- **Performance**: Provides lowest latency and highest packet-per-second performance.
- **Recommended**: 
    - Use instances that support **Enhanced Networking**.
    - Launch all instances at once to ensure capacity.
    - Use the same instance type (homogeneous) for all instances in the group.
- **Recovery**: If you receive a capacity error when adding instances, stop and restart all instances in the group and try again.

![[aws-ec2-placement-group.png]]

---
## 2. Partition Placement Groups
- **Scope**: Can span multiple AZs in the same region.
- **Structure**: Each group is divided into logical segments called partitions.
- **Isolation**: EC2 ensures that each partition has its own set of racks (network/power). No two partitions share the same racks.
- **Limits**: Maximum of **7 partitions per AZ**. There is no limit on the number of instances *within* each partition.
- **Visibility**: Topology-aware applications (like HDFS) can use partition information to make intelligent replication decisions.

![[placement-group-partition.png]]

---
## 3. Spread Placement Groups
- **Scope**: Can span multiple AZs in the same region.
- **Structure**: Each instance is placed on a distinct rack with its own network and power source.
- **Limits**: Maximum of **7 running instances per AZ** per group.
- **Use Case**: Critical instances (e.g., Domain Controllers, Database nodes) that must be isolated from correlated hardware failures.

![[placement-group-spread.png]]

---
## Placement Group Rules and Limitations
- **Naming**: Must be unique within your AWS account for the region.
- **Merging**: Placement groups cannot be merged.
- **Moving**: To move an existing instance into a placement group, you must create an AMI from the instance and then launch a new instance from that AMI into the group.
- **Instance Types**: 
    - **Cluster**: Only specific instance types (supporting 10Gbps+ network) are recommended.
    - **Spread/Partition**: Not supported for Dedicated Hosts.
- **Tenancy**: Instances with a tenancy of `host` cannot be launched in placement groups.

> [!exam]
> - **Cluster** = High Performance (Single AZ).
> - **Spread/Partition** = High Availability (Multi-AZ).
> - **Spread Limit**: Restricted to **7 instances per AZ per group**.
> - If you see "Cassandra" or "HDFS" on the exam, think **Partition Placement Groups**.
> - For maximum throughput between two instances, they should be in a **Cluster Placement Group** and use **Jumbo Frames (MTU 9001)**.

## Related Services
- [[_Compute Index|Compute Index]]
- [[EC2 Overview|EC2]]
- [[Lambda]]
- [[VPC Overview|VPC]]

---
**Practice:** [[Placement Groups - Practice Questions|Placement Groups Practice Questions]]