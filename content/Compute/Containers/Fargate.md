---
tags: [compute, aws, sap-c02, fargate]
---
# AWS Fargate

AWS Fargate is a serverless, pay-as-you-go compute engine that lets you focus on building applications without managing servers. It works with both Amazon [[ECS]] and Amazon [[EKS]].

## Architectural Patterns
- **Serverless Containers:** Removes the need to provision, configure, or scale clusters of virtual machines to run containers.
- **Resource Sizing:** You allocate exact CPU and memory required for tasks/pods, paying only for what you use.
- **Networking:** Tasks run in their own VPC ENI, receiving a primary IP address from the VPC subnets.

## SAP-C02 Key Facts
- **No Underlying Access:** You cannot SSH into the underlying host. (Exec into containers is supported via ECS Exec).
- **DaemonSets in EKS:** Fargate does not support EKS DaemonSets. If you need logging or metrics agents, they must run as sidecar containers.
- **Spot Pricing:** Fargate Spot can be used for interruption-tolerant tasks for significant cost savings.
- **Privileged Containers:** Fargate does not support privileged containers or accessing underlying host devices (e.g., GPUs are limited/unsupported compared to EC2).

> [!exam]
> If a question asks for the lowest maintenance overhead for running containers, or removing EC2 patching/scaling responsibilities, [[Fargate]] is usually the correct answer. Remember it does not support DaemonSets on EKS or privileged execution.

## Related Services
- [[_Compute Index|Compute Index]]
- [[EC2 Overview|EC2]]
- [[Lambda]]
- [[VPC Overview|VPC]]

---
**Practice:** [[Fargate - Practice Questions|Fargate Practice Questions]]