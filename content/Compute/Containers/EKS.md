---
tags: [compute, aws, sap-c02, eks]
---
# Elastic Kubernetes Service (EKS)

## Architectural Patterns
- **Integration with AWS:** Integrates natively with [[IAM]] via IAM Roles for Service Accounts (IRSA) or EKS Pod Identity, [[VPC Overview|VPC]] via the Amazon VPC CNI plugin, and [[ELB Overview|ELB]] for load balancing.
- **Compute Options:** 
    - **Managed Node Groups:** AWS manages EC2 instances.
    - **Fargate:** Serverless pods.
    - **Karpenter:** An open-source, flexible, high-performance Kubernetes cluster autoscaler. It provisions right-sized nodes directly in response to unschedulable pods (faster and more efficient than Cluster Autoscaler). AWS-recommended.
- **High Availability:** The EKS control plane is highly available and spans multiple Availability Zones.

## SAP-C02 Key Facts
- **IRSA (IAM Roles for Service Accounts):** Uses an OIDC provider to map IAM roles to Kubernetes service accounts. **Why:** Without IRSA, all pods on a node share the node's IAM role, which violates the principle of least privilege.
- **EKS Pod Identity:** A simpler replacement for IRSA. It allows you to assign IAM roles to pods without needing to manage an OIDC provider or update trust policies for every new cluster.
- **VPC CNI Plugin:** Assigns VPC IP addresses directly to pods, allowing them to communicate within the VPC without NAT. If IP exhaustion is a concern, consider custom networking or IPv6 clusters.
- **EKS Anywhere:** Run EKS on-premises on your own infrastructure (e.g., VMware vSphere). Useful for hybrid cloud and consistent management.
- **Outposts:** Run EKS on [[Outposts|AWS Outposts]] for local processing and low latency.

> [!exam]
> If a scenario mentions pod-level security for accessing AWS services, look for **IRSA** or **EKS Pod Identity** rather than assigning roles to the underlying EC2 nodes.

## Related Services
- [[_Compute Index|Compute Index]]
- [[EC2 Overview|EC2]]
- [[Lambda]]
- [[VPC Overview|VPC]]

---
**Practice:** [[EKS - Practice Questions|EKS Practice Questions]]