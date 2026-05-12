---
tags: [aws, sap-c02, ec2, compute, practice-questions]
---
# Placement Groups Practice Questions

> [!question]
> What is a cluster placement group?
> 1. A collection of Auto Scaling groups in the same Region
> 2. Feature that enables EC2 instances to interact with each other via high bandwidth, low latency connections
> 3. A collection of Elastic Load Balancers in the same Region or Availability Zone
> 4. A collection of authorized Cloud Front edge locations for a distribution
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale**: A [[Placement Groups#1. Cluster Placement Groups|Cluster Placement Group]] is a logical grouping of instances within a single Availability Zone. It is recommended for applications that benefit from low network latency, high network throughput, or both, as it places instances physically close together on the underlying hardware.

> [!question]
> In order to optimize performance for a compute cluster that requires low inter-node latency, which feature in the following list should you use?
> 1. AWS Direct Connect
> 2. Cluster Placement Groups
> 3. VPC private subnets
> 4. EC2 Dedicated Instances
> 5. Multiple Availability Zones
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale**: [[Placement Groups#1. Cluster Placement Groups|Cluster Placement Groups]] pack instances close together inside a single AZ to provide the lowest possible latency and highest packet-per-second network performance between nodes in the cluster.

> [!question]
> A company is running a distributed scientific simulation across 100 EC2 instances. They need to ensure that the instances are protected against correlated hardware failures, such that a single rack failure does not affect more than a small fraction of the total cluster. However, the instances must all reside within the same Availability Zone for compliance reasons. Which placement strategy should they use?
> 1. Cluster Placement Group
> 2. Spread Placement Group
> 3. **Partition Placement Group**
> 4. Dedicated Hosts
>
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale**: **Partition Placement Groups** (Option 3) divide the group into logical segments called partitions. AWS ensures that each partition has its own set of racks. By distributing instances across partitions, you ensure that a rack failure only affects the instances in that specific partition, while still keeping all instances in a single AZ. Spread Placement Groups (Option 2) are limited to 7 instances per AZ. Cluster Placement Groups (Option 1) prioritize low latency over rack-level isolation. (See [[Placement Groups]])

> [!question]
> You need the absolute highest possible network performance for a cluster computing application. You have homogeneous instances in a placement group. What is the last optimization?
> 1. **Use 9001 MTU (Jumbo Frames)**
> 2. Use 1500 MTU
> 3. Enable AWS PrivateLink
> 4. Increase EBS IOPS
>
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale**: For maximum throughput between two instances in a [[Placement Groups#1. Cluster Placement Groups|Cluster Placement Group]], you should use **Jumbo Frames (MTU 9001)** to reduce packet overhead. This allows the network to carry more data per packet, significantly improving performance for network-bound workloads.

> [!question]
> What is required to achieve 10Gbps+ network throughput on EC2 instances?
> 1. Use an Auto Scaling Group
> 2. **Use a Cluster placement group and instances with Enhanced Networking**
> 3. Use an Elastic Load Balancer
> 4. Use EBS Optimization
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale**: To achieve 10Gbps+ network performance, it is mandatory to use a [[Placement Groups#1. Cluster Placement Groups|Cluster placement group]] (to ensure physical proximity) and instance types that support **Enhanced Networking** (using ENA or vf drivers).
