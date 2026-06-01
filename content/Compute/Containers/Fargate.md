---
tags: [compute, aws, sap-c02, fargate]
---
# AWS Fargate

AWS Fargate is a serverless, pay-as-you-go compute engine that lets you focus on building applications without managing servers. It works with both Amazon [[ECS]] and Amazon [[EKS]].

## Architectural Patterns
- **Serverless Containers:** Removes the need to provision, configure, or scale clusters of virtual machines to run containers. Supports Linux (x86_64, ARM64/Graviton2) and Windows Server.
- **Resource Sizing:** You allocate exact CPU and memory required for tasks/pods, paying only for what you use.
- **Networking:** Requires `awsvpc` network mode. Tasks run in their own VPC ENI, receiving a primary IP address from the VPC subnets.
- **Storage:** Tasks receive 20 GiB of ephemeral storage by default (configurable up to 200 GiB). For persistent, shared storage, Fargate tasks can mount Amazon [[EFS]].
- **Logging:** Native support for `awslogs`, `splunk`, `firelens`, and `fluentd` log drivers.

## SAP-C02 Key Facts
- **No Underlying Access:** You cannot SSH into the underlying host. Interactive shell or single command access is supported via Amazon ECS Exec.
- **DaemonSets in EKS:** Fargate does not support EKS DaemonSets. If you need logging or metrics agents, they must run as sidecar containers.
- **Cost Optimization:** Use Fargate Spot for interruption-tolerant tasks for significant savings. Compute Savings Plans apply for steady-state workloads.
- **Privileged Containers:** Fargate does not support privileged containers or accessing underlying host devices (e.g., GPUs).
- **Updates:** To update running tasks to a new platform version, update the service with the new version and choose "Force new deployment".

> [!exam]
> If a question asks for the lowest maintenance overhead for running containers, or removing EC2 patching/scaling responsibilities, [[Fargate]] is usually the correct answer. Remember it does not support DaemonSets on EKS or privileged execution.

## Related Services
- [[_Compute Index|Compute Index]]
- [[EC2 Overview|EC2]]
- [[Lambda]]
- [[VPC Overview|VPC]]

---
**Practice:** [[Fargate - Practice Questions|Fargate Practice Questions]]
