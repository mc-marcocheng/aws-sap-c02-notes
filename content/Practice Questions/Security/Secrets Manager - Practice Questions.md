---
tags: [aws, sap-c02, secrets-manager, security, practice-questions]
---
# Secrets Manager Practice Questions

> [!question]
> A company runs a microservices architecture across multiple AWS accounts. Each microservice needs to access shared database credentials that must be rotated every 30 days. When credentials are rotated, all microservices across all accounts must immediately use the new credentials without redeployment. Which solution provides the LEAST operational overhead?
> 1. Store credentials in AWS Systems Manager Parameter Store (SecureString) in each account. Use a Lambda function to synchronize rotations across accounts.
> 2. Store credentials in AWS Secrets Manager in a central account. Enable automatic rotation. Use resource-based policies on the secret to grant cross-account access to each microservice's IAM role.
> 3. Store credentials in AWS Secrets Manager in each account separately. Configure rotation independently in each account.
> 4. Store credentials in an encrypted DynamoDB table. Use DynamoDB Streams to notify microservices of credential changes.
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[Secrets Manager|AWS Secrets Manager]] supports **resource-based policies** that grant cross-account access, allowing a single centralized secret to be accessed from multiple accounts. Automatic rotation handles the 30-day requirement. Microservices that call `GetSecretValue` at runtime will always get the current credentials without redeployment. Option 1 requires custom synchronization logic. Option 3 creates management overhead with multiple independent rotations. Option 4 is a custom solution with significant development effort.

> [!question]
> A company uses Amazon RDS for PostgreSQL databases for its data tier. The company must implement password rotation for the databases. Which solution meets this requirement with the LEAST operational overhead?
> 1. Store the password in AWS Secrets Manager. Enable automatic rotation on the secret.
> 2. Store the password in AWS Systems Manager Parameter Store. Enable automatic rotation on the parameter.
> 3. Store the password in AWS Systems Manager Parameter Store. Write an AWS Lambda function that rotates the password.
> 4. Store the password in AWS Key Management Service (AWS KMS). Enable automatic rotation on the customer master key (CMK).
>
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** [[Secrets Manager|AWS Secrets Manager]] provides native, built-in integration for rotating [[RDS Overview|RDS]] credentials automatically. [[Secrets Manager|Systems Manager Parameter Store]] would require writing and maintaining a custom [[Lambda]] function for rotation, increasing operational overhead. [[KMS]] CMK rotation refers to the backing key, not the secret data itself.

> [!question]
> A company is using AWS Secrets Manager to store database credentials. During a recent rotation event, several application instances failed to connect to the database, causing a brief outage. Investigation revealed a race condition where the database password was changed before all application instances retrieved the new secret. How should the solutions architect prevent this issue?
> 1. Implement Secrets Manager's multi-user rotation strategy (alternating users) so the previous credentials remain valid during the rotation window.
> 2. Configure the application to cache secrets indefinitely and only refresh on connection failure.
> 3. Increase the rotation interval from 30 to 90 days to reduce the frequency of outages.
> 4. Use AWS Systems Manager Parameter Store instead, as it does not have rotation race conditions.
>
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** [[Secrets Manager|AWS Secrets Manager]] supports **alternating users** rotation strategy, which creates two database users (e.g., `app_user` and `app_user_clone`). During rotation, only the inactive user's password is changed, so the active user's credentials remain valid until the rotation is complete and the secret label is swapped. This eliminates the race condition. Option 2 risks using stale credentials. Option 3 doesn't solve the fundamental issue. Option 4 doesn't offer native rotation at all.
