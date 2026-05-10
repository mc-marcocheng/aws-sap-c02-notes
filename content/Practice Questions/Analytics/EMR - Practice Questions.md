---
tags: [aws, sap-c02, emr, analytics, big-data, practice-questions]
---
# EMR Practice Questions

> [!question]
> CPUs are idle during EMR processing of data in S3. What is the most cost-efficient way to reduce runtime?
> 1. Create smaller files on S3.
> 2. Add task group with more instances.
> 3. Use smaller instances that have higher aggregate I/O performance.
> 4. Create fewer, larger files on S3.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** If CPUs are idle, the job is likely I/O bound (waiting for data to be transferred from [[S3 Overview|S3]]). Using instance types that provide higher network and I/O performance relative to their cost will increase the data throughput and reduce the overall job duration.

> [!question]
> How can you reduce EMR job completion time for a single 2-TB file in S3? (Choose 2)
> 1. Use Spot Instances for task nodes.
> 2. Change the input split size in MapReduce.
> 3. Use bootstrap to present S3 as local filesystem.
> 4. Launch in a VPC.
> 5. Adjust the number of simultaneous mapper tasks.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2, 5**
> > **Rationale:** To speed up processing of a single large file, you must increase parallelism. Changing the input split size in [[EMR]] allows the 2-TB file to be divided into more pieces. Adjusting the number of simultaneous mapper tasks allows the cluster to process more of those pieces concurrently.

> [!question]
> How would you optimize the cost for daily EMR jobs that generate reports in S3 for Redshift without compromising performance or integrity?
> 1. RRS for S3, Spot for EMR, RI for Redshift.
> 2. RRS for all S3, Combination of Spot and RI for EMR, RI for Redshift.
> 3. RRS for all S3, Spot for EMR, RI for Redshift.
> 4. RRS for S3, Spot for EMR, Spot for Redshift.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** Reduced Redundancy Storage (RRS) is appropriate for reproducible data. For [[EMR]], using Reserved Instances (RI) for Master/Core nodes ensures cluster stability, while Spot Instances for Task nodes provide significant cost savings for compute. [[Redshift]] is a steady-state workload where Reserved Instances provide the best pricing.

> [!question]
> A company needs to record the first activation of sold devices in a persistent database and analyze this data daily with MapReduce (taking less than 3 hours). The system experiences predictable peaks where activation volume increases 100x. What is the best database and framework combination?
> 1. RDS + EMR with Spot task nodes.
> 2. DynamoDB + EMR with Spot task nodes.
> 3. RDS + EMR with Reserved instances.
> 4. DynamoDB + EMR with Reserved instances.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[DynamoDB Overview|DynamoDB]] handles massive spikes in volume (100x peaks) much more effectively than a relational database like [[RDS Overview|RDS]] due to its seamless scaling and on-demand throughput options. For the daily analytical job, [[EMR]] using Spot task nodes is the most cost-efficient processing model.
