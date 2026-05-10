---
tags: [aws, sap-c02, codecommit, practice-questions]
---
# CodeCommit Practice Questions

> [!question]
> A company has recently migrated to AWS IAM Identity Center (formerly AWS SSO) for enterprise authentication. Developers use their corporate Active Directory credentials to log into AWS. The company is migrating its source code to AWS CodeCommit. How should the developers configure their local Git clients to authenticate with the CodeCommit repositories?
> 1. Generate Git credentials in the IAM console for each user and configure the local Git credential manager.
> 2. Generate SSH keys locally, provide the public keys to the AWS administrator, and attach them to the IAM Identity Center users.
> 3. Install the AWS CLI and the `git-remote-codecommit` extension. Configure Git to use the credential helper with the SSO profile.
> 4. Create an IAM User for each developer just for CodeCommit access and generate Git credentials.
>
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** Federated users (using IAM Identity Center/SSO) do not have traditional IAM Users. Therefore, they cannot generate static Git credentials or upload SSH keys in the IAM console. They must use the AWS CLI credential helper (`git-remote-codecommit`) which leverages their temporary STS credentials generated during the SSO login process to access [[CodeCommit]].

> [!question]
> A development team uses AWS CodeCommit for their repositories. The security team mandates that developers cannot directly push code to the `production` branch. Instead, all changes must go through a pull request and be approved by at least two senior engineers. How can a solutions architect enforce these requirements with the least administrative effort?
> 1. Create an AWS Lambda function triggered by a CodeCommit repository trigger to reject any direct pushes to the `production` branch.
> 2. Create an IAM policy attached to all developers that denies the `codecommit:GitPush` action with a condition `StringEquals` for `codecommit:References` to `refs/heads/production`. Configure an Approval Rule Template requiring 2 approvals and associate it with the repository.
> 3. Move the `production` branch to a separate CodeCommit repository and only grant access to the senior engineers.
> 4. Use Amazon EventBridge to monitor push events to the `production` branch and trigger AWS Step Functions to revert the commit if it wasn't approved.
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** IAM policies are the native and most efficient way to block direct pushes to specific branches in [[CodeCommit]] by utilizing the `codecommit:References` condition key. Approval Rule Templates natively enforce pull request approval requirements (e.g., minimum number of approvals) before a merge can occur.
