---
tags: [aws, sap-c02, ec2, compute, practice-questions]
---
# EC2 Types Practice Questions

> [!question]
> Which of the following instance types are available as Amazon EBS-backed only? (Choose 2 answers)
> 1. General purpose T2
> 2. General purpose M3
> 3. Compute-optimized C4
> 4. Compute-optimized C3
> 5. Storage-optimized I2
> 
> > [!success]- Answer & Rationale
> > **Answer: 1, 3**
> > **Rationale:**
> > * **General purpose T2** instances are available as [[EBS Overview|EBS]]-backed instances only.
> > * **Compute-optimized C4** instances (and newer generations like C5, C6g) are [[EBS Overview|EBS]]-only and EBS-optimized by default.
> > * M3, C3, and I2 families include [[EC2 Instance Types|Instance Store]] (ephemeral) storage options and are not EBS-only.

> [!question]
> A t2.medium EC2 instance type must be launched with what type of Amazon Machine Image (AMI)?
> 1. An Instance store Hardware Virtual Machine AMI
> 2. An Instance store Paravirtual AMI
> 3. An Amazon EBS-backed Hardware Virtual Machine AMI
> 4. An Amazon EBS-backed Paravirtual AMI
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:**
> > * T2 instances must be launched into a [[VPC Overview|VPC]] and require **Hardware Virtual Machine (HVM)** AMIs.
> > * They are also [[EBS Overview|EBS]]-backed only, meaning they do not support [[EC2 Instance Types|Instance Store]] volumes for the root device.

> [!question]
> You have identified network throughput as a bottleneck on your m1.small EC2 instance when uploading data into Amazon S3 in the same region. How do you remedy this situation?
> 1. Add an additional ENI
> 2. Change to a larger Instance
> 3. Use DirectConnect between EC2 and S3
> 4. Use EBS PIOPS on the local volume
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:**
> > * EC2 network performance is tied to the [[EC2 Instance Types|Instance Type]]. Smaller instances like `m1.small` have "Low" to "Moderate" network performance.
> > * Moving to a **larger instance type** provides higher network throughput and potentially supports [[EC2 Instance Types|Enhanced Networking]] (ENA).

> [!question]
> You are using an m1.small EC2 instance with one 300 GB EBS volume to host a relational database. You determined that write throughput to the database needs to be increased. Which of the following approaches can help achieve this? (Choose 2 answers)
> 1. Use an array of EBS volumes
> 2. Enable Multi-AZ mode
> 3. Place the instance in an Auto Scaling Group
> 4. Add an EBS volume and place into RAID 5
> 5. Increase the size of the EC2 Instance
> 6. Put the database behind an Elastic Load Balancer
> 
> > [!success]- Answer & Rationale
> > **Answer: 1, 5**
> > **Rationale:**
> > * **Use an array of EBS volumes:** Striping (RAID 0) multiple [[EBS Overview|EBS]] volumes increases total throughput and IOPS by distributing I/O across multiple volumes.
> > * **Increase the size of the EC2 Instance:** Larger instances have better CPU/Memory and higher dedicated bandwidth for [[EC2 Instance Types|EBS-Optimized]] traffic.
> > * RAID 5 is not recommended for EBS because EBS is already replicated for durability; striping (RAID 0) is preferred for performance.

> [!question]
> You are tasked with setting up a cluster of EC2 instances for a NoSQL database. The database requires random read IO disk performance up to 100,000 IOPS at 4KB block size per node. Which of the following EC2 instances will perform the best for this workload?
> 1. A High-Memory Quadruple Extra Large (m2.4xlarge) with EBS-Optimized set to true and a PIOPs EBS volume
> 2. A Cluster Compute Eight Extra Large (cc2.8xlarge) using instance storage
> 3. High I/O Quadruple Extra Large (hi1.4xlarge) using instance storage
> 4. A Cluster GPU Quadruple Extra Large (cg1.4xlarge) using four separate 4000 PIOPS EBS volumes in a RAID 0 configuration
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:**
> > * The **hi1.4xlarge** (High I/O) instance type was specifically designed for workloads requiring very high random I/O using SSD-based [[EC2 Instance Types|Instance Store]] volumes.
> > * While these are older generation names, the "High I/O" (now I3/I4g) family remains the standard for local high-performance SSD storage.

> [!question]
> You are implementing a URL whitelisting system for a company using a single EC2 instance running proxy software. You have 500 instances fetching 200MB updates within a 10-minute window. You notice some machines are failing to download updates. What might be happening? (Choose 2 answers)
> 1. You are running the proxy on an undersized EC2 instance type so network throughput is not sufficient.
> 2. You have not allocated enough storage to the EC2 instance running the proxy.
> 3. You have not allocated enough EIPs to support the needed network throughput.
> 4. You are running the proxy in a private subnet and its network throughput is being throttled by an undersized NAT instance.
> 5. The route table is not configured to direct traffic to the proxy.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1, 4**
> > **Rationale:**
> > * **Undersized Proxy Instance:** 500 instances * 200MB = 100GB. To transfer this in 10 minutes (600s), you need ~1.3 Gbps throughput. A small proxy instance will be bottlenecked by its [[EC2 Instance Types|Network Performance]].
> > * **NAT Instance Throttling:** If the proxy or clients are in a private subnet, their traffic to the internet (for updates) must pass through a [[VPC NAT Gateway|NAT Gateway/Instance]]. An undersized NAT instance will throttle this aggregate traffic.

> [!question]
> Design a storage layer for an application requiring at least 100,000 IOPS, 3TB capacity, and survival of the loss of an individual disk, EC2 instance, or Availability Zone without data loss. Which design meets these objectives?
> 1. i2.8xlarge in us-east-1a, RAID 0 ephemeral, 3x1TB EBS RAID 0, sync replication from ephemeral to EBS.
> 2. i2.8xlarge in us-east-1a, RAID 0 ephemeral, sync replication to an identically configured instance in us-east-1b.
> 3. c3.8xlarge, AWS Storage Gateway with 3TB and 100,000 IOPS.
> 4. c3.8xlarge, 4x1TB EBS volumes in RAID 5, snapshots every 15 mins.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:**
> > * **i2.8xlarge with RAID 0 SSDs** provides the required 100,000 IOPS via [[EC2 Instance Types|Instance Store]].
> > * **Synchronous replication to another AZ** (us-east-1b) ensures the architecture can survive the loss of an instance or an entire [[VPC Overview|Availability Zone]] without data loss.
> > * RAID 5 and snapshots (Option 4) involve potential data loss (RPO) and do not provide synchronous protection against AZ failure.
