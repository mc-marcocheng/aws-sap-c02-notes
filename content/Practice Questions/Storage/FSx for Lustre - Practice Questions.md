---
tags: [aws, sap-c02, fsx, storage, practice-questions]
---
# FSx for Lustre Practice Questions

> [!question]
> A solutions architect is designing storage for a high performance computing (HPC) environment based on Amazon Linux. The workload stores and processes a large amount of engineering drawings that require shared storage and heavy computing. Which storage option would be the optimal solution?
> 1. Amazon Elastic File System (Amazon EFS)
> 2. Amazon FSx for Lustre
> 3. Amazon EC2 instance store
> 4. Amazon EBS Provisioned IOPS SSD (io1)
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[FSx for Lustre]] is a high-performance file system optimized for fast processing of workloads like HPC, machine learning, and media data processing. It provides sub-millisecond latencies, hundreds of GB/s of throughput, and millions of IOPS. While [[EFS]] is a shared file system, it is not as highly optimized for the extreme performance requirements of HPC workloads as FSx for Lustre.

> [!question]
> A company is planning to deploy a High Performance Computing (HPC) cluster in its VPC that requires a scalable, high performance file system. The storage service must be optimized for efficient workload processing, and the data must be accessible via a fast and scalable file system interface. It should also work natively with Amazon S3 that enables you to easily process your S3 data with a high-performance POSIX interface. Which of the following is the MOST suitable service that you should use for this scenario?
> 1. Amazon Elastic File System (Amazon EFS)
> 2. Amazon FSx for Lustre
> 3. Amazon Elastic Block Store
> 4. Amazon EBS Provisioned IOPS SSD (io1)
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[FSx for Lustre]] integrates seamlessly with [[S3 Overview|S3]], allowing you to link your S3 buckets to the file system. It presents S3 objects as files and can lazily load data from S3 as it is accessed, making it ideal for processing large-scale data sets stored in S3 with a high-performance POSIX-compliant interface.

> [!question]
> A machine learning team stores 500 TB of training data in Amazon S3. They launch Amazon FSx for Lustre file systems linked to the S3 bucket for each training job. They notice that the first training run on a new file system is significantly slower than subsequent runs because data is being lazily loaded from S3. The team wants the first run to perform at full file system speed. What should the solutions architect recommend?
> 1. Use a Persistent FSx for Lustre file system instead of a Scratch file system to pre-cache data.
> 2. Issue an `hsm_restore` command (via `lfs hsm_restore`) on all files before starting the training job to pre-load data from S3.
> 3. Increase the file system storage capacity to improve throughput and reduce lazy-loading latency.
> 4. Use S3 Transfer Acceleration to speed up the initial data loading from S3 to FSx for Lustre.
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** When [[FSx for Lustre]] is linked to an [[S3 Overview|Amazon S3]] bucket, data is lazy-loaded (loaded on first access). To pre-load data before a workload begins, you can use the `hsm_restore` command (or the `lfs hsm_restore` batch command) to proactively pull data from S3 into the file system. Option 1 is incorrect — Persistent vs. Scratch refers to durability, not caching behavior; both lazy-load. Option 3 increases throughput but doesn't change the lazy-loading behavior. Option 4 is invalid — S3 Transfer Acceleration is for client-to-S3 uploads, not S3-to-FSx data movement.
