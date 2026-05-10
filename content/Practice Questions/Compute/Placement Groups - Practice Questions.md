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
> What is required to achieve gigabit network throughput on EC2? You already selected cluster-compute, 10GB instances with enhanced networking, and your workload is already network-bound, but you are not seeing 10 gigabit speeds.
> 1. Enable biplex networking on your servers, so packets are non-blocking in both directions and there’s no switching overhead.
> 2. Ensure the instances are in different VPCs so you don’t saturate the Internet Gateway on any one VPC.
> 3. Select PIOPS for your drives and mount several, so you can provision sufficient disk throughput
> 4. Use a Cluster placement group for your instances so the instances are physically near each other in the same Availability Zone.
>
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale**: You are not guaranteed 10 gigabit performance except within a [[Placement Groups#1. Cluster Placement Groups|Cluster Placement Group]]. Using placement groups enables applications to participate in a low-latency, 10 Gbps network by ensuring the underlying hardware is collocated.

> [!question]
> You need the absolute highest possible network performance for a cluster computing application. You already selected homogeneous instance types supporting 10 gigabit enhanced networking, made sure that your workload was network bound, and put the instances in a placement group. What is the last optimization you can make?
> 1. Use 9001 MTU instead of 1500 for Jumbo Frames, to raise packet body to packet overhead ratios.
> 2. Segregate the instances into different peered VPCs while keeping them all in a placement group, so each one has its own Internet Gateway.
> 3. Bake an AMI for the instances and relaunch, so the instances are fresh in the placement group and do not have noisy neighbors
> 4. Turn off SYN/ACK on your TCP stack or begin using UDP for higher throughput.
>
> [!question]
> In order to optimize performance for a compute cluster that requires low inter-node latency, which feature should you use?
> 1. AWS Direct Connect
> 2. Cluster Placement Groups
> 3. VPC private subnets
> 4. EC2 Dedicated Instances
> 5. Multiple Availability Zones
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale**: [[Placement Groups#1. Cluster Placement Groups|Cluster Placement Groups]] pack instances close together inside a single AZ to provide the lowest possible latency and highest packet-per-second network performance.

> [!question]
> What is required to achieve 10Gbps network throughput on EC2?
> 1. Use an Auto Scaling Group
> 2. Use a Cluster placement group and instances with Enhanced Networking
> 3. Use an Elastic Load Balancer
> 4. Use EBS Optimization
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale**: To achieve 10Gbps+ network performance, it is recommended to use a [[Placement Groups#1. Cluster Placement Groups|Cluster placement group]] and instances that support **Enhanced Networking**.

> [!question]
> You need the absolute highest possible network performance for a cluster computing application. You have homogeneous instances in a placement group. What is the last optimization?
> 1. Use 9001 MTU (Jumbo Frames)
> 2. Use 1500 MTU
> 3. Enable AWS PrivateLink
> 4. Increase EBS IOPS
>
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale**: For maximum throughput between two instances in a [[Placement Groups#1. Cluster Placement Groups|Cluster Placement Group]], you should use **Jumbo Frames (MTU 9001)** to reduce packet overhead.

