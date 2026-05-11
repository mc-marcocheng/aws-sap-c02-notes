---
tags: [aws, sap-c02, storage, practice-questions]
---
# S3 vs EBS vs EFS Practice Questions

> [!question]
> A company runs an application on a group of Amazon Linux EC2 instances. The application writes log files using standard API calls. For compliance reasons, all log files must be retained indefinitely and will be analyzed by a reporting tool that must access all files concurrently. Which storage service should a solutions architect use to provide the MOST cost-effective solution?
> 1. Amazon EBS
> 2. Amazon EFS
> 3. Amazon EC2 instance store
> 4. Amazon S3
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** The requirement to use "standard API calls" for writing log files and the need for concurrent access from multiple [[EC2 Overview|Amazon EC2]] instances points to a shared file system. [[EFS|Amazon EFS]] provides a [[EFS|POSIX]]-compliant interface that allows multiple instances to mount the same file system and write logs simultaneously. While [[S3 Overview|Amazon S3]] is more cost-effective for "indefinite retention," it is object storage and does not support standard file system APIs (like `fwrite` or `open`) without an intermediate agent or SDK.

> [!question]
> A new application is being deployed on Amazon EC2. The Application needs to read write up to 3 TB of data to an external data store and requires read-after-write consistency across all AWS regions for writing new objects into this data store.
> 1. Amazon EBS
> 2. Amazon Glacier
> 3. Amazon EFS
> 4. Amazon S3
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale:** [[S3 Overview|Amazon S3]] now provides strong read-after-write consistency for all operations, including the creation of new objects, across all AWS regions. It is an ideal "external" data store for large volumes (3 TB) of data that doesn't require the low-latency block performance of [[EBS Overview|Amazon EBS]].

> [!question]
> To meet the requirements of an application, an organization needs to save a constantly increasing volume of files on a cloud storage system with the following features and abilities:
> - Pay only for the storage used
> - Create different security policies for different groups of files
> - Allow access to the public
> - Retrieve the files at any time
> - Store an unlimited number of files
> 
> What below AWS service will meet these requirements?
> 
> 1. Amazon EBS
> 2. Amazon S3
> 3. Amazon Glacier
> 4. Amazon EFS
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[S3 Overview|Amazon S3]] is the only service that satisfies all these requirements. It is a pay-as-you-go service with unlimited capacity. It supports complex security via [[S3 Permissions|S3 Bucket Policies]] and [[IAM]], allows public access (e.g., for static website hosting), and provides immediate retrieval (unlike [[S3 Storage Classes|Amazon S3 Glacier]] which has retrieval latencies).

> [!question]
> An administrator runs a highly available application in AWS. A file storage layer is needed that can share between instances and scale the platform more easily. The storage should also be POSIX compliant. Which AWS service can perform this action?
> 
> 1. Amazon EBS
> 2. Amazon S3
> 3. Amazon EFS
> 4. Amazon EC2 Instance store
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** [[EFS|Amazon EFS]] is a managed [[EFS|NFS]] file system that is [[EFS|POSIX]] compliant and can be mounted by thousands of [[EC2 Overview|Amazon EC2]] instances simultaneously. It scales automatically as data is added or removed, making it the perfect choice for a scalable shared storage layer.
