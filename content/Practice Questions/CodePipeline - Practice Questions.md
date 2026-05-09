---
tags: [aws, sap-c02, codepipeline, practice-questions]
---
# CodePipeline Practice Questions

> [!question]
> A company has a central CI/CD account (Account A) containing an AWS CodePipeline. They need to deploy an application to a production account (Account B) via AWS CodeDeploy. The pipeline is failing at the deployment stage, indicating permission issues accessing the artifacts. How should the solutions architect configure the architecture to allow cross-account deployments successfully?
> 1. Use the default AWS managed KMS key for the S3 artifact bucket. Grant Account B access to the S3 bucket policy.
> 2. Create a Customer Managed KMS key in Account A and share it with Account B. Use this key to encrypt the S3 artifact bucket. Add a bucket policy granting Account B access, and configure a cross-account role in Account B for CodeDeploy.
> 3. Move the S3 artifact bucket to Account B and use the default AWS managed KMS key.
> 4. Use VPC Peering between Account A and Account B so the CodeDeploy agent can access the artifacts in Account A.
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** For cross-account deployments with [[CodePipeline]], the S3 artifact bucket must be encrypted with a Customer Managed KMS key because default AWS managed keys cannot be shared across accounts. The deployment target account (Account B) needs permission to access the KMS key and the S3 bucket.

> [!question]
> An organization wants to strictly control deployments to production. They want to pause their CodePipeline after the staging deployment and require approval from the Security Team. How can this be implemented?
> 1. Add a Manual Approval action to the pipeline. Configure an SNS topic for the action to notify the Security Team. Use IAM policies to restrict the `codepipeline:PutApprovalResult` action to the Security Team's IAM role.
> 2. Implement an AWS Lambda function that stops the pipeline execution. Use Amazon EventBridge to notify the Security Team.
> 3. Use AWS Step Functions to manage the pipeline and add a Wait state.
> 4. Require the CodePipeline service role to have MFA enforced before transitioning to the production stage.
>
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** A Manual Approval action in [[CodePipeline]] pauses the pipeline. Notifications are sent via SNS. Restricting who can approve it is done by controlling the `codepipeline:PutApprovalResult` permission via IAM.
