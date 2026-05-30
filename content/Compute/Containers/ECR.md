---
tags: [aws, sap-c02, compute, containers, ecr]
---
# Amazon ECR

Amazon Elastic Container Registry (ECR) is a fully managed container registry that makes it easy to store, manage, share, and deploy container images and artifacts.

## Core Features

> [!info] **Image Management**
> - **Immutability**: Repositories can be configured as immutable, preventing image tags from being overwritten to ensure consistent deployments and avoid accidental code changes.
> - **Lifecycle Policies**: Automate the expiration or transition of old images to save costs (e.g., move to Archive tier based on age or pull count).
> - **Multi-Architecture Support**: Store variants for different CPU architectures (e.g., x86-64, ARM/Graviton) under a single image manifest list.
> - **Pull Through Cache**: Automatically cache images from external public registries in your private ECR to improve availability and pull speeds.

> [!info] **Storage Classes**
> - **Standard Storage**: Default tier.
> - **Archive Storage**: Lower-cost tier for rarely accessed images (compliance/audit). Images cannot be pulled immediately; they must be restored first (takes minutes to hours).

## Security and Networking

> [!important] **SAP-C02 Considerations**
> - **VPC Endpoints (PrivateLink)**: Configure interface VPC endpoints to allow instances/tasks (EC2, ECS, EKS) to pull images from ECR without traversing the public internet. *Note: You also need an S3 Gateway Endpoint because ECR stores layers in S3.*
> - **Image Scanning**:
>   - *Basic Scanning*: Free, uses open-source Clair for CVEs on push.
>   - *Enhanced Scanning*: Integrates with **Amazon Inspector** for continuous, automated scanning of OS and programming language vulnerabilities.
> - **Image Signing**: Integrates with **AWS Signer** to cryptographically sign images. Orchestrators (like EKS) can verify the signature before deployment to ensure untampered, trusted code.
> - **Permissions**: Controlled via IAM resource-based policies (Repository Policies).

## Architecture Patterns

> [!exam] **Scenario: Multi-Account CI/CD**
> **Cross-Region/Cross-Account Replication** is frequently tested. A central tooling account builds the image and automatically replicates it to development and production accounts (or across regions for DR and multi-region deployment).

> [!exam] **Scenario: Strict Network Isolation**
> If an ECS task in an isolated private subnet (no NAT Gateway) needs to pull an image, you **must** use **VPC Endpoints (PrivateLink)** for ECR.

## Related Services
- [[_Compute Index|Compute Index]]
- [[ECS]]
- [[EKS]]

---
**Practice:** [[ECR - Practice Questions|ECR Practice Questions]]