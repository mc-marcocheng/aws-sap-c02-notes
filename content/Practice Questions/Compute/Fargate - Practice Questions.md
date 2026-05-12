---
tags: [aws, sap-c02, fargate, practice-questions]
---
# Fargate Practice Questions

> [!question]
> A team wants to run an application on Amazon EKS. They do not want to manage or patch any EC2 instances for the worker nodes. The application requires a logging agent to run on every node to collect cluster-wide logs. Can this be achieved natively using AWS Fargate for EKS?
> 1. Yes, by deploying the logging agent as a Kubernetes DaemonSet.
> 2. Yes, by installing the logging agent via the EKS Fargate node startup script.
> 3. No, Fargate does not support Kubernetes DaemonSets; the logging agent must run as a sidecar in each pod.
> 4. No, Fargate does not support EKS; it only works with ECS.
>
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** [[Fargate]] profiles in [[EKS]] do not support DaemonSets because there are no managed nodes. Any necessary infrastructure agents (like logging or monitoring) must be deployed as sidecar containers within the pod definition itself.

> [!question]
> A containerized application running on Amazon ECS on AWS Fargate needs to store temporary scratch data (up to 100 GB) during processing. The data does not need to persist after the task terminates. What is the MOST cost-effective storage option?
> 1. Mount an Amazon EFS file system.
> 2. Use the default ephemeral storage and **increase its size** in the task definition.
> 3. Attach an Amazon EBS volume to the Fargate task.
> 4. Use an Amazon S3 bucket with S3 Select.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[Fargate]] tasks come with a default amount of ephemeral storage (20 GiB). You can increase this up to 200 GiB in the task definition. This is the most cost-effective and highest performance option for non-persistent scratch data. EFS (Option 1) is more expensive and intended for persistent/shared storage. EBS (Option 3) cannot be directly attached to Fargate tasks in the same way it is for EC2.

> [!question]
> A data processing application runs batch jobs as Docker containers. The jobs are fault-tolerant, can be interrupted, and typically complete within 10 to 15 minutes. The company wants to minimize compute costs and management overhead. Which compute option should they choose?
> 1. Amazon EC2 Spot Instances with an Auto Scaling group.
> 2. AWS Lambda functions.
> 3. Amazon ECS on AWS Fargate Spot.
> 4. Amazon EKS on EC2 Reserved Instances.
>
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** [[Fargate]] Spot is ideal for containerized, interruption-tolerant workloads and minimizes management overhead since no underlying servers are maintained. While Lambda is an option, Fargate is better suited for Docker containers with potential time constraints approaching Lambda's 15-minute limit.