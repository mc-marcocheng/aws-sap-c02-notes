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
> > 
> > - [[EBS Overview|Amazon EBS]] is a block storage service designed for use with a single EC2 instance and is not inherently shared across multiple instances in different AZs.
> > - [[S3 Overview|Amazon S3]] is object storage, not a POSIX-compliant file system.
> > - [[EC2 Instance Types|Amazon EC2 Instance store]] provides temporary block-level storage for a single instance and is not shared or highly available.
