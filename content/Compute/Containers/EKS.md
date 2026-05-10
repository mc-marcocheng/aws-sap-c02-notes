---
tags: [compute, aws, sap-c02, eks]
---
# Elastic Kubernetes Service (EKS)

Amazon EKS is a managed Kubernetes service that makes it easy for you to run Kubernetes on AWS without needing to stand up or maintain your own Kubernetes control plane.

## Architectural Patterns
- **Integration with AWS:** Integrates natively with [[IAM|IAM]] via IAM Roles for Service Accounts (IRSA), [[VPC Overview|VPC]] via the Amazon VPC CNI plugin, and [[ELB Overview|ELB]] for load balancing.
- **Compute Options:** Supports EC2 managed node groups, self-managed nodes, and serverless compute via [[Fargate]].
- **High Availability:** The EKS control plane is highly available and spans multiple Availability Zones.

## SAP-C02 Key Facts
- **IRSA (IAM Roles for Service Accounts):** The most secure way to grant AWS permissions to a Kubernetes pod. Uses OIDC provider.
- **VPC CNI Plugin:** Assigns VPC IP addresses directly to pods, allowing them to communicate within the VPC without NAT. If IP exhaustion is a concern, consider custom networking or IPv6 clusters.
- **EKS Anywhere / Outposts:** For hybrid deployments, EKS can be run on-premises via EKS Anywhere or [[Outposts|AWS Outposts]].

> [!exam]
> If a scenario mentions pod-level security for accessing AWS services, look for IRSA (IAM Roles for Service Accounts) rather than assigning roles to the underlying EC2 nodes.

## Related Services
- [[_Compute Index|Compute Index]]
- [[EC2 Overview|EC2]]
- [[Lambda]]
- [[VPC Overview|VPC]]

---
**Practice:** [[EKS - Practice Questions|EKS Practice Questions]]