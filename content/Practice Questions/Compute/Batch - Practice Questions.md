---
tags: [aws, sap-c02, aws-batch, practice-questions]
---
# AWS Batch Practice Questions

> [!question]
> A research team runs complex genomic sequencing workloads that require processing millions of tasks with specific dependencies. The tasks vary in compute and memory requirements. They want a fully managed service that can orchestrate these jobs, select optimal EC2 instance types dynamically, and utilize Spot instances to save costs. Which AWS service is best suited for this requirement?
> 1. Amazon Elastic MapReduce (EMR)
> 2. AWS Step Functions with AWS Lambda
> 3. AWS Batch
> 4. Amazon ECS with Auto Scaling
>
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** [[Batch]] natively supports complex job dependencies, automatically provisions the optimal compute (including Spot instances) based on resource requirements, and handles queues and retries perfectly for HPC and batch processing workloads.

> [!question]
> An engineering company has a tightly-coupled computational fluid dynamics (CFD) simulation application. The application requires multiple instances to communicate with each other during processing using Message Passing Interface (MPI). What AWS service and feature supports this requirement?
> 1. AWS Lambda using provisioned concurrency.
> 2. AWS Batch using Multi-node parallel (MNP) jobs.
> 3. Amazon ECS using Fargate.
> 4. Amazon EKS using DaemonSets.
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[Batch]] supports Multi-node parallel (MNP) jobs which allow a single job to span multiple EC2 instances, making it the perfect solution for tightly-coupled HPC workloads utilizing MPI.

> [!question]
> A financial company is processing large datasets using AWS Batch. They have a requirement to use Fargate as the compute environment to minimize management overhead. However, some of their jobs require 16 vCPUs and 120 GB of RAM. What should the solutions architect consider when designing this compute environment?
> 1. AWS Batch on Fargate supports up to 16 vCPUs and 120 GB RAM per job.
> 2. Fargate compute environments in AWS Batch are limited to 4 vCPUs and 30 GB RAM per job.
> 3. Use an EC2 compute environment because Fargate's maximum resource allocation is 16 vCPUs and 120 GB (for specific configurations), but Batch defaults may be lower.
> 4. Fargate does not support AWS Batch; only ECS and EKS can use Fargate.
>
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** While **Fargate** now supports up to 16 vCPUs and 120 GB RAM, these large configurations are only available for specific vCPU/RAM ratios. If a job requires a very high RAM-to-vCPU ratio or resources beyond Fargate's limits, an **EC2 compute environment** within [[Batch]] is required to provide the necessary instance types (e.g., R-class or X-class instances).
