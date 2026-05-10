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
> A data processing application runs batch jobs as Docker containers. The jobs are fault-tolerant, can be interrupted, and typically complete within 10 to 15 minutes. The company wants to minimize compute costs and management overhead. Which compute option should they choose?
> 1. Amazon EC2 Spot Instances with an Auto Scaling group.
> 2. AWS Lambda functions.
> 3. Amazon ECS on AWS Fargate Spot.
> 4. Amazon EKS on EC2 Reserved Instances.
>
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** [[Fargate]] Spot is ideal for containerized, interruption-tolerant workloads and minimizes management overhead since no underlying servers are maintained. While Lambda is an option, Fargate is better suited for Docker containers with potential time constraints approaching Lambda's 15-minute limit.