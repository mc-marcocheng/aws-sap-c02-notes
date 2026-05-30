---
tags: [compute, aws, sap-c02, eks]
---
# Elastic Kubernetes Service (EKS)

Amazon EKS is a managed service that runs Kubernetes on AWS without needing to install, operate, or maintain the Kubernetes control plane or nodes.

## Architectural Patterns

### Compute Options
- **Managed Node Groups:** Automates provisioning and lifecycle management of EC2 instances via ASGs.
- **Self-managed Nodes:** Custom EC2 instances joined to the cluster (useful for specialized AMIs or OS).
- **Fargate:** Serverless pods. Each pod runs on its own isolated compute environment. Fargate storage is ephemeral, but integrates with EFS for persistent storage. *EBS cannot be mounted to Fargate pods.*
- **Autoscaling:**
  - **Karpenter:** Provisions right-sized nodes directly in response to unschedulable pods. Faster, more efficient, and AWS-recommended.
  - **Cluster Autoscaler:** Uses AWS Auto Scaling groups.

### Networking & Load Balancing
- **VPC CNI Plugin:** Assigns VPC IP addresses directly to pods. If IPv4 exhaustion is a concern, consider custom networking or IPv6 clusters.
- **Cluster Endpoint Access:** The API server endpoint is public by default. For strict security/compliance, configure private access to keep node-to-API communication within the VPC.
- **AWS Load Balancer Controller:** Manages AWS load balancers for the cluster. Provisions an ALB for Kubernetes `Ingress` and an NLB for services of type `LoadBalancer`.

### Storage (Container Storage Interface (CSI) Drivers)
- **Amazon EBS CSI:** Manages lifecycle of EBS volumes for persistent block storage. *Not supported on Fargate.*
- **Amazon EFS CSI:** Allows multiple pods to share a file system. *Supported on Fargate.*

## SAP-C02 Key Facts

### Security & Access
- **IRSA (IAM Roles for Service Accounts):** Uses an OIDC provider to map IAM roles to Kubernetes service accounts. Prevents nodes from sharing overly broad permissions.
- **EKS Pod Identity:** A simpler, recommended alternative to IRSA that assigns IAM roles to pods without managing an OIDC provider.
- **KMS Secrets Encryption:** Enable envelope encryption of Kubernetes secrets (stored in *etcd*) using AWS KMS for enhanced security.
- **Cluster Access:** The IAM user/role that creates the cluster gets `system:masters` permissions by default. Other users are granted access via the `aws-auth` ConfigMap or EKS Access Entries.

### Observability
- **Control Plane Logging:** Sends API server, audit, authenticator, controller manager, and scheduler logs directly to CloudWatch Logs. This is disabled by default and must be enabled per log type.

### Hybrid & Edge
- **EKS Anywhere:** Deploy EKS on-premises (e.g., VMware vSphere or bare metal) for hybrid consistency. Control plane runs locally.
- **EKS on Outposts:** Run EKS worker nodes or the entire cluster on [[Outposts|AWS Outposts]] for low-latency, local processing.
- **EKS Hybrid Nodes:** Connect on-premises/edge infrastructure as worker nodes to a managed EKS control plane running in the AWS cloud.

> [!exam]
> - If a scenario mentions pod-level security for accessing AWS services, look for **IRSA** or **EKS Pod Identity** rather than assigning roles to the underlying EC2 nodes.
> - If the architecture requires serverless compute but needs persistent block storage, Fargate is **not** suitable (use Managed Node Groups with EBS). Use EFS if shared file storage is sufficient.
> - For strictest compliance, ensure the EKS API cluster endpoint is set to **Private** and Kubernetes secrets use **AWS KMS envelope encryption**.

## Related Services
- [[_Compute Index|Compute Index]]
- [[EC2 Overview|EC2]]
- [[Lambda]]
- [[VPC Overview|VPC]]

---
**Practice:** [[EKS - Practice Questions|EKS Practice Questions]]
