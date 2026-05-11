---
tags: [aws, sap-c02, compute, containers, ecr]
---
# Amazon ECR

Amazon Elastic Container Registry (ECR) is a fully managed container registry that makes it easy to store, manage, share, and deploy container images and artifacts.

## Key Features
- **Integration**: Natively integrated with [[ECS]] and [[EKS]].
- **Security**: Images are encrypted at rest using [[KMS]] and transferred over HTTPS. Supports resource-based permissions via IAM.
- **Image Scanning**: Integrates with [[Inspector]] to identify software vulnerabilities in your container images.
- **Cross-Region/Cross-Account Replication**: Automatically replicate images to other regions or accounts for disaster recovery and fast multi-region deployment.

> [!exam]
> ECR cross-account replication is frequently tested in multi-account CI/CD scenarios where a central tooling account builds the image and replicates it to development and production accounts.

## Related Services
- [[_Compute Index|Compute Index]]
- [[ECS]]
- [[EKS]]

---
**Practice:** [[ECR - Practice Questions|ECR Practice Questions]]
