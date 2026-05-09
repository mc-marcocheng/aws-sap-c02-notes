---
tags: [aws, sap-c02, codebuild]
---
# CodeBuild

AWS CodeBuild is a fully managed continuous integration service that compiles source code, runs tests, and produces software packages that are ready to deploy.

## 1. Features
- **Fully Managed**: No build servers to provision, manage, or scale.
- **Pay-as-you-go**: You are charged by the minute for the compute resources you use.
- **Buildspec**: Uses a `buildspec.yml` file to define build commands and settings.
- **Docker Support**: Natively supports building Docker images and can output them to Amazon ECR.
- **Custom Environments**: You can bring your own Docker image for the build environment.

## 2. Architecture
- **Compute Types**: Offers different instance sizes (compute types) and OS options (Linux, Windows, ARM).
- **VPC Support**: CodeBuild can be launched inside a VPC to access internal resources like RDS databases, ElastiCache, or internal APIs.
- **Caching**: Supports local caching (e.g., Docker layers) and S3 caching (e.g., dependencies) to speed up build times.

## 3. Use Cases
- Compiling code and running unit tests.
- Building Docker container images and pushing to ECR.
- Running infrastructure-as-code linting (e.g., cfn-lint) or security scanning.

## Strategic Scenarios (SAP-C02)
- **Accessing Private Resources**: If your build needs to access resources in a VPC (e.g., integration tests against an internal DB), configure CodeBuild to run within that VPC. Ensure the VPC has a NAT Gateway if the build needs internet access (e.g., to download packages).
- **Secrets Management**: Do not hardcode secrets in `buildspec.yml`. Integrate with **AWS Secrets Manager** or **AWS Systems Manager Parameter Store** natively within the buildspec.
- **Performance Optimization**: Use S3 caching for Maven/npm dependencies to reduce build duration.
- **Cross-Account ECR**: To push an image to an ECR repo in another account, the CodeBuild IAM role needs permissions in the remote account's ECR repository policy.

> [!important]
> When running CodeBuild in a VPC, it does NOT get a public IP. To access the internet (to download public dependencies like npm/pip), the subnet used by CodeBuild MUST be private and route traffic through a NAT Gateway.

> [!exam]
> For managing credentials, expect questions testing your knowledge of using the `env:secrets-manager` or `env:parameter-store` blocks inside the `buildspec.yml`.

---
**Practice:** [[CodeBuild - Practice Questions|CodeBuild Practice Questions]]
