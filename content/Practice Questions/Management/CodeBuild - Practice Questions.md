---
tags: [aws, sap-c02, codebuild, practice-questions]
---
# CodeBuild Practice Questions

> [!question]
> A company is using AWS CodeBuild to compile an application and run integration tests. The integration tests require access to a database hosted on Amazon RDS in a private subnet. The CodeBuild project keeps timing out when trying to download dependencies from the internet. The project is configured to run in the same private subnets as the RDS instance. How should a solutions architect fix this issue?
> 1. Assign a public IP address to the CodeBuild project.
> 2. Create a NAT Gateway in a public subnet and update the private subnet route table to point internet-bound traffic to the NAT Gateway.
> 3. Move the CodeBuild project to a public subnet and modify the RDS security group to allow inbound traffic from the CodeBuild security group.
> 4. Add an Internet Gateway to the private subnet and route `0.0.0.0/0` to it.
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[CodeBuild]] instances deployed in a VPC do not receive public IP addresses. To access the internet (to download dependencies), they must be placed in a private subnet with a route to a NAT Gateway located in a public subnet. 

> [!question]
> A development team is migrating their CI process to AWS CodeBuild. Their application uses database passwords and API keys during the build process. The team wants to ensure these secrets are securely managed and not exposed in the build logs or source code. What is the most secure and operationally efficient way to handle these secrets?
> 1. Encrypt the secrets using AWS KMS and commit them in the source code. Decrypt them in the `buildspec.yml` using the AWS CLI.
> 2. Store the secrets in AWS Secrets Manager and reference them in the `env:secrets-manager` section of the `buildspec.yml`.
> 3. Store the secrets as plaintext environment variables in the CodeBuild project configuration.
> 4. Store the secrets in an S3 bucket encrypted with SSE-S3 and download them during the build phase using the AWS CLI.
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** Storing secrets in AWS Secrets Manager or Systems Manager Parameter Store and natively referencing them in the `buildspec.yml` is the AWS recommended best practice for [[CodeBuild]]. It avoids exposing secrets in code, logs, or static configuration.
