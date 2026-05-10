---
tags: [aws, sap-c02, developer-tools, codepipeline]
---
# CodePipeline

AWS CodePipeline is a fully managed continuous delivery service that helps you automate your release pipelines for fast and reliable application and infrastructure updates.

## 1. Features
- **Workflow Automation**: Automates the build, test, and deploy phases of your release process every time there is a code change.
- **Integrations**: Integrates tightly with other AWS services like CodeCommit, CodeBuild, CodeDeploy, ECS, Elastic Beanstalk, S3, and third-party tools (GitHub, Bitbucket, Jenkins).
- **Custom Plugins**: You can integrate custom tools and actions into your pipeline.
- **Approvals**: Supports manual approval actions to pause the pipeline until an authorized user approves.

## 2. Architecture
- **Artifacts**: CodePipeline uses Amazon S3 to store and pass artifacts (e.g., source code, built binaries) between stages.
- **Stages**: A pipeline consists of stages (e.g., Source, Build, Test, Deploy). Each stage contains one or more actions.
- **Actions**: Actions run sequentially or in parallel within a stage.
- **Event-Driven**: Triggers can be based on EventBridge events (recommended for CodeCommit, S3) or webhooks (for GitHub/Bitbucket).

## 3. Use Cases
- Automating CI/CD for serverless applications using SAM or CloudFormation.
- Deploying containerized applications to ECS.
- Managing multi-region or cross-account deployments.

## Strategic Scenarios (SAP-C02)
- **Cross-Account Deployments**: To deploy across accounts, CodePipeline in Account A assumes a cross-account IAM role in Account B. The S3 artifact bucket must have a bucket policy granting Account B read access, and AWS KMS Customer Managed Keys (CMK) must be used to encrypt the S3 artifacts (AWS managed keys cannot be shared cross-account).
- **Pipeline Security**: Secure the pipeline using IAM policies for the pipeline role. Use manual approvals controlled by IAM policies restricting who can approve.
- **Dynamic Pipelines**: Integrating CloudFormation to provision testing environments in a Test stage and tear them down afterward.

> [!important]
> For cross-account pipelines, you **must** use a Customer Managed KMS Key (CMK) for the S3 artifact bucket. Default AWS managed KMS keys cannot be shared across accounts.

> [!info]
> Use EventBridge to trigger CodePipeline instead of polling (which is legacy and less efficient).

> [!exam]
> Look out for scenarios requiring multi-region deployments. CodePipeline can deploy to multiple regions by specifying the region in the deployment action provider settings.

## Related Services
- [[_Developer Tools Index|Developer Tools Index]]
- [[CodeBuild]]
- [[CodeCommit]]
- [[CodeDeploy]]

---
**Practice:** [[CodePipeline - Practice Questions|CodePipeline Practice Questions]]
