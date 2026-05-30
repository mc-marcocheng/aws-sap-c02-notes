---
tags: [compute, aws, sap-c02, ecs]
---
# ECS Overview

Amazon Elastic Container Service (Amazon ECS) is a highly scalable, high-performance container orchestration service that supports Docker containers and allows you to run and scale containerized applications on AWS.

## Launch Types

| Feature | Fargate (Serverless) | EC2 Launch Type |
| :--- | :--- | :--- |
| **Management** | AWS manages the underlying instances. | You manage the EC2 instances in the cluster. |
| **Pricing** | Based on vCPU and memory requested for the task. | Based on the EC2 instance type and EBS volumes. |
| **Isolation** | Kernel-level isolation for each task. | Tasks share the kernel of the EC2 host. |
| **Use Case** | Low overhead, ephemeral workloads, small-to-medium apps. | **GPUs, specific instance types, or persistent storage attached to the host.** |

---
## Core Components

> [!info] **Task Definitions**
> A JSON file that describes one or more containers (up to 10) that form your application. Defines images, CPU/memory, ports, and storage.
> - **Task Execution Role**: Used by the ECS agent to pull images and push logs (permissions for AWS infrastructure).
> - **Task Role**: The IAM role assumed by the application *inside* the container to access other AWS services (e.g., S3, DynamoDB).
> - **Container Grouping**: Put multiple containers in the same task definition *only* if they share a common lifecycle, require the same underlying host, or share data volumes.

> [!info] **Clusters and Services**
> - **Clusters**: Logical groupings of tasks or services.
> - **Services**: Ensures the specified number of tasks are running and restarts failed tasks. Integrates with ELBs for traffic distribution.
> - **Service Connect**: Simplifies service-to-service communication, traffic management, and observability. It abstracts complex network configurations (provides Service Discovery, automatic retries/connection draining, and traffic metrics) without the complexity of setting up App Mesh.
> - **ECS Anywhere**: Run ECS tasks on on-premises or customer-managed infrastructure. You install the SSM Agent and ECS Container Agent on your on-premises hardware, which registers them as "External Instances" within an AWS ECS cluster. Frequently tested in hybrid cloud migration, data sovereignty, and edge computing scenarios.

## Tasks and Scheduling

> [!important] **Scheduling Strategies**
> - **REPLICA**: Places and maintains the desired number of tasks across your cluster. Spreads tasks across Availability Zones by default.
> - **DAEMON**: Deploys exactly one task on each active container instance in your cluster (e.g., for logging or monitoring agents).

> [!info] **Task Management Features**
> - **ECS Exec**: Provides interactive shell or single-command access to a running container on EC2 or Fargate.
> - **Task Scale-In Protection**: Protects specific critical tasks (like long-running batch jobs or game sessions) from being terminated during an ASG scale-in event.

---
## Networking and Storage

- **awsvpc Mode**: Each task is assigned its own Elastic Network Interface (ENI) and private IP. This is the recommended mode (and required for Fargate).
- **Load Balancing**: You can attach **multiple target groups** to your ECS services. This allows a single service to serve traffic from both internal and external load balancers or support multiple path-based routing rules.
- **Service Discovery**: Integrates with **AWS Cloud Map** for microservices to discover each other via DNS or API.
- **Persistent Storage**:
  - **EC2 Type**: Supports EBS, EFS, Docker volumes, and bind mounts.
  - **Fargate**: Supports **EFS** for persistent storage and **ephemeral storage** (up to 200 GiB) for temporary files/scratch space.

---
## SAP-C02 Strategic Considerations

> [!important] **Capacity Providers**
> The mechanism that links ASG to ECS for managed scaling of the infrastructure.
> - **EC2**: Automatically scales Auto Scaling Groups based on task requirements.
> - **Fargate**: Used to select between Fargate and Fargate Spot, or Graviton2 (ARM64) for better price/performance.

> [!important] **Deployment Strategies**
> - **Rolling Update**: Replaces the currently running version with the latest version. Controlled by minimum and maximum healthy percent configurations.
> - **Blue/Green Deployment (CodeDeploy)**: Verifies a new deployment before sending production traffic to it. Requires an ALB or NLB.

> [!important] **Security & Compliance**
> - Use **Secrets Manager** integration in Task Definitions to inject sensitive data into environment variables.
> - Each task should have its own **Task IAM Role** (Least Privilege).

---
### Exam Focus: Trade-offs

> [!exam] **Scenario: Microservices with Dynamic Scaling**
> Use **ECS with Fargate** to avoid managing EC2 fleets. Combine with **Application Load Balancer (ALB)** and **path-based routing** to consolidate multiple services behind one load balancer.

> [!exam] **Scenario: High-Performance Batch Processing**
> Use **ECS with EC2 Launch Type** and **Spot Instances** via Capacity Providers to minimize costs while maintaining high compute power. Use **Task Scale-In Protection** to ensure jobs finish before instances terminate.

---
## Related Services
- [[_Compute Index|Compute Index]]
- [[EC2 Overview]]
- [[Lambda]]
- [[ALB Overview]]
- [[EFS]]

---
**Practice:** [[ECS - Practice Questions|ECS Practice Questions]]