---
tags: [aws, sap-c02, secrets-manager, security, practice-questions]
---
# Secrets Manager Practice Questions

> [!question]
> Which AWS service makes it easy for you to easily rotate, manage, and retrieve database credentials, API keys, and other secrets throughout their lifecycle?
> 1. AWS WAF
> 2. AWS Secrets Manager
> 3. AWS Systems Manager
> 4. AWS Shield
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[Secrets Manager Overview|AWS Secrets Manager]] is specifically designed to manage the lifecycle of secrets, including database credentials and API keys. It provides native support for [[KMS Overview|KMS]] encryption and automatic rotation.

> [!question]
> A company uses Amazon RDS for PostgreSQL databases for its data tier. The company must implement password rotation for the databases. Which solution meets this requirement with the LEAST operational overhead?
> 1. Store the password in AWS Secrets Manager. Enable automatic rotation on the secret.
> 2. Store the password in AWS Systems Manager Parameter Store. Enable automatic rotation on the parameter.
> 3. Store the password in AWS Systems Manager Parameter Store. Write an AWS Lambda function that rotates the password.
> 4. Store the password in AWS Key Management Service (AWS KMS). Enable automatic rotation on the customer master key (CMK).
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** [[Secrets Manager Overview|AWS Secrets Manager]] provides native, built-in integration for rotating [[RDS Overview|RDS]] credentials automatically. Using [[Secrets Manager Overview|Systems Manager Parameter Store]] would require writing and maintaining a custom [[Lambda Overview|Lambda]] function for rotation, increasing operational overhead. [[KMS Overview|KMS]] CMK rotation refers to the backing key, not the secret data itself.
