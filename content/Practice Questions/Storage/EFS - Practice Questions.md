---
tags: [aws, sap-c02, efs, storage, practice-questions]
---
# EFS Practice Questions

> [!question]
> An administrator runs a highly available application in AWS. A file storage layer is needed that can share between instances and scale the platform more easily. The storage should also be POSIX compliant. Which AWS service can perform this action?
> 1. Amazon EBS
> 2. Amazon S3
> 3. Amazon EFS
> 4. Amazon EC2 Instance store
>
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** [[EFS|Amazon EFS]] (Elastic File System) provides a simple, fully managed, scalable, and serverless NFS (Network File System) for use with AWS Cloud and on-premises resources. It is **POSIX compliant**, allowing it to be mounted on multiple [[EC2 Overview|EC2]] instances simultaneously across multiple Availability Zones, making it ideal for highly available applications that require a shared file storage layer.

> [!question]
> A media production company has a fleet of EC2 instances across three Availability Zones processing video files. They currently use an EFS file system in General Purpose performance mode. During peak rendering hours, they experience increased latency and notice the `PercentIOLimit` CloudWatch metric consistently exceeds 95%. The workload involves millions of small file operations (metadata-heavy). What should the solutions architect recommend?
> 1. Switch the EFS file system to Max I/O performance mode.
> 2. Increase the size of the EFS file system to increase baseline throughput.
> 3. Switch to Provisioned Throughput mode and allocate additional throughput.
> 4. Migrate to Amazon FSx for Lustre for the rendering workload.
>
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale:** When `PercentIOLimit` is consistently high with metadata-heavy workloads, the General Purpose mode is saturated. While Max I/O mode (Option 1) offers higher aggregate throughput, it introduces higher per-operation latency which worsens metadata-heavy workloads. [[FSx for Lustre]] is specifically designed for high-performance, parallel file access patterns common in video rendering and HPC. [[EFS]] Provisioned Throughput (Option 3) addresses throughput, not IOPS/metadata limitations.

> [!question]
> A company is migrating a content management system to AWS. The system requires shared POSIX-compliant storage accessible from multiple EC2 instances. Only 20% of the stored data is accessed regularly; the rest is retained for compliance. The company wants to minimize storage costs without changing application code. Which configuration is most cost-effective?
> 1. Use Amazon EFS with the Infrequent Access (IA) storage class and enable EFS Lifecycle Management to transition files not accessed for 30 days.
> 2. Use Amazon S3 with S3 Intelligent-Tiering and mount it using s3fs-fuse on all EC2 instances.
> 3. Use Amazon EFS with Provisioned Throughput to ensure consistent performance at lower cost.
> 4. Use Amazon EFS One Zone storage class with lifecycle management to move data to S3 Glacier.
>
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** [[EFS|Amazon EFS]] Lifecycle Management automatically moves files to the EFS Infrequent Access (IA) storage class based on access patterns, reducing costs by up to 92% for infrequently accessed data. This requires no application code changes. s3fs-fuse (Option 2) is not production-grade and doesn't provide true POSIX compliance. Provisioned Throughput (Option 3) increases cost. EFS cannot lifecycle to S3 Glacier (Option 4).

> [!question]
> A solutions architect must design a shared file system for a containerized application running on Amazon EKS. The application requires low-latency access for thousands of concurrent connections from pods across multiple Availability Zones. Data must be encrypted at rest and in transit. Which storage solution meets these requirements?
> 1. Amazon EBS volumes with Multi-Attach enabled, mounted as ReadWriteMany PersistentVolumes.
> 2. Amazon EFS with an EFS CSI driver, configured with encryption at rest and mount option `tls` for encryption in transit.
> 3. Amazon S3 mounted via the Mountpoint for Amazon S3 CSI driver.
> 4. Amazon FSx for Windows File Server accessed via SMB from Linux pods.
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[EFS|Amazon EFS]] supports ReadWriteMany (RWX) access mode across AZs, works with the EFS CSI driver for [[EKS]], and supports both encryption at rest (via [[KMS]]) and in transit (via TLS mount helper). EBS Multi-Attach (Option 1) only works within a single AZ and requires a cluster-aware file system. S3 Mountpoint (Option 3) is read-heavy and doesn't support full POSIX write semantics. FSx for Windows (Option 4) uses SMB, not ideal for Linux containers.
