---
tags: [aws, sap-c02, aws-batch]
---
# AWS Batch

AWS Batch enables developers, scientists, and engineers to easily and efficiently run hundreds of thousands of batch computing jobs on AWS. 

## Architectural Patterns
- **Job Definitions & Queues:** Defines how a job runs (Docker image, vCPUs, memory, IAM role). Jobs are submitted to queues with assigned priorities.
- **Compute Environments:** Maps to compute resources (EC2, Spot, Fargate). Batch automatically provisions and scales the optimal quantity and type of compute instances.
- **Integration:** Often triggered by [[EventBridge]] (e.g., file uploaded to [[S3 Overview|S3]]) or orchestrated by [[Step Functions]].

## SAP-C02 Key Facts
- **Optimal Instance Selection:** AWS Batch can choose instance types based on job requirements, making it highly efficient.
- **Spot Integration:** Natively integrates with EC2 Spot Instances, handling interruptions automatically by retrying jobs.
- **Multi-Node Parallel Jobs:** Supports running a single job across multiple EC2 instances simultaneously, useful for tightly-coupled HPC workloads like MPI (Message Passing Interface).
- **Fargate Support:** For fast-starting jobs without custom AMI requirements, Batch can use [[Fargate]] compute environments.

> [!exam]
> Choose [[AWS Batch]] over standard ECS when the scenario involves complex job dependencies, array jobs, job queues, or requiring multi-node parallel execution for HPC workloads.

---
**Practice:** [[AWS Batch - Practice Questions|AWS Batch Practice Questions]]