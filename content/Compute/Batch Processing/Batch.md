---
tags: [compute, aws, sap-c02, batch]
---
# AWS Batch

AWS Batch is a fully managed service that enables you to run batch computing workloads at any scale. It dynamically provisions the optimal quantity and type of compute resources (CPU, memory, etc.) based on the volume and specific requirements of the submitted jobs.

## Core Components

| Component | Description |
| :--- | :--- |
| **Job** | A unit of work (shell script, executable, or Docker image). Can be single or array. |
| **Job Definition** | Blueprint for the job (IAM role, vCPU/Memory, container props, mount points). |
| **Job Queue** | Where jobs reside until scheduled. Queues map to one or more compute environments. |
| **Compute Environment** | Managed or Unmanaged resources (EC2, Spot, Fargate, EKS) where jobs run. |

---
## Job Types & Dependencies

- **Array Jobs**: Collections of related basic jobs (2 to 10,000) that share common parameters but can run concurrently.
- **Multi-node Parallel (MNP) Jobs**: For tightly coupled HPC applications. Spans multiple EC2 instances. Uses a **Main Node** and **Child Nodes**.
  - *Note*: MNP jobs are NOT supported on Spot Instances.
- **Dependencies**: Jobs can depend on the success of other jobs (up to 20 dependencies). Array jobs support **N-To-N** dependencies or **Sequential** children.

---
## Scheduling & Lifecycle

- **Fair-Share Scheduling**: Uses **Share Identifiers** and weights to ensure resources are allocated fairly across different users/workloads, preventing monopoly.
- **Job States**: `SUBMITTED` → `PENDING` → `RUNNABLE` → `STARTING` → `RUNNING` → `SUCCEEDED` / `FAILED`.
- **Retry Strategy**: Can configure automatic retries for failed jobs.
- **Timeout**: Global timeout to terminate long-running jobs.

---
## SAP-C02 Strategic Considerations

> [!important] **Compute Environment Selection**
> - **Managed**: AWS handles instance lifecycle and scaling. Supports **On-Demand** and **Spot**.
> - **Unmanaged**: You manage your own ECS cluster/instances. Useful for highly custom requirements or specialized AMIs.
> - **Fargate**: Best for serverless batching without managing EC2 capacity, but has specific resource limits (vCPU/RAM).

> [!important] **Cost Optimization with Spot**
> Use **Spot Instances** for interruptible batch workloads to achieve up to 90% savings. Batch handles the replacement of interrupted instances automatically.
> - *Note*: If using Spot, ensure jobs are idempotent or can resume from checkpoints.

> [!exam] **Scenario: High-Performance Computing (HPC)**
> For tightly coupled MPI (Message Passing Interface) applications, use **Multi-node Parallel Jobs** with **Cluster Placement Groups** for low-latency networking between nodes.

> [!exam] **Scenario: Fairness in Multi-tenant Environments**
> If multiple teams share a single Batch cluster, use a **Scheduling Policy** with **Fair Share Scheduling** to prevent one team's massive job array from blocking everyone else's urgent single jobs.

> [!exam] **Integration Strategy**
> Often triggered by [[EventBridge]] (e.g., file uploaded to [[S3 Overview|S3]]) or orchestrated by [[Step Functions]] for complex workflows.

---
## Security & Monitoring
- **IAM Roles**: 
  - **Job Role**: Provides permissions for the code *inside* the job to access AWS services (S3, DynamoDB).
  - **Service-Linked Role**: Allows Batch to manage EC2, ECS, and EKS on your behalf.
- **CloudWatch Events**: Use to trigger downstream actions based on job state changes (e.g., `FAILED`).

---
## Related Services
- [[_Compute Index|Compute Index]]
- [[EC2 Overview]]
- [[ECS]]
- [[EKS]]
- [[Fargate]]
- [[EC2 Purchase Options|EC2 Purchase Options (Spot)]]
- [[Step Functions]]

---
**Practice:** [[Batch - Practice Questions|AWS Batch Practice Questions]]
