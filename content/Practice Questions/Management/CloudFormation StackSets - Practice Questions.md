---
tags: [aws, sap-c02, cloudformation, stacksets, practice-questions]
---
# CloudFormation StackSets - Practice Questions

> [!question]
> A large enterprise uses AWS Organizations with all features enabled. The cloud platform team wants to ensure that every time a new AWS account is created and added to a specific Organizational Unit (OU) called "Production", a standard set of IAM roles and AWS Config rules are automatically deployed to the new account across three specific regions. The solution should require minimal operational overhead and no manual intervention after the initial setup.
> 
> What is the MOST operationally efficient solution?
> 
> 1. Create a CloudFormation template. Write an AWS Lambda function triggered by an EventBridge rule on the `CreateAccount` API call. The Lambda function assumes an IAM role in the new account and deploys the CloudFormation stack to the required regions.
> 2. Create a CloudFormation StackSet using self-managed permissions. Create the necessary IAM execution roles in the target OU. Deploy the StackSet to the "Production" OU.
> 3. Create a CloudFormation StackSet using service-managed permissions. Target the "Production" OU. Select the three regions and enable automatic deployments. 
> 4. Use AWS Systems Manager Quick Setup to deploy the baseline configuration to the "Production" OU.
>
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** 
> > - **C is correct** because CloudFormation StackSets with service-managed permissions integrate directly with AWS Organizations. By targeting an OU and enabling automatic deployments, StackSets will automatically deploy the stack instances to any new account added to that OU, matching the requirement for minimal operational overhead.
> > - A is incorrect because it requires building and maintaining custom automation (Lambda, EventBridge), which adds operational overhead compared to a native solution.
> > - B is incorrect because self-managed permissions require manual creation of IAM roles in target accounts and do not support automatic deployments when accounts are added to an OU.
> > - D is incorrect because while Quick Setup can configure some baselines, CloudFormation StackSets provides a generic and declarative way to deploy *any* set of resources (like specific IAM roles and Config rules defined by the user).
> > 
> > **Links:** [[CloudFormation StackSets]]

> [!question]
> The security operations team needs the ability to deploy AWS WAF WebACLs and GuardDuty configurations across all AWS accounts in the company's AWS Organization. The company's policy strictly prohibits anyone outside the core cloud infrastructure team from accessing the AWS Organizations Management account. 
> 
> How can the security team meet these requirements using CloudFormation StackSets?
> 
> 1. In the Management account, create an IAM role with `sts:AssumeRole` permissions for the security team. Have the security team assume this role to create service-managed StackSets.
> 2. In the Management account, register the security team's AWS account as a Delegated Administrator for CloudFormation StackSets. The security team can then create service-managed StackSets from their own account.
> 3. Create a self-managed StackSet in the security team's account. Create an IAM administration role in the security account and an execution role in the Management account.
> 4. It is not possible to use service-managed StackSets outside of the Management account. The security team must use self-managed StackSets and manually deploy execution roles to all accounts.
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:**
> > - **B is correct** because AWS Organizations supports delegating administration for certain services, including CloudFormation StackSets. By registering the security account as a delegated administrator, the security team can use service-managed permissions to deploy StackSets across the organization without needing access to the Management account.
> > - A is incorrect because while it might technically work, it violates the principle of least privilege and the strict policy of not giving access to the Management account directly (even via assumed role). Delegated administrator is the native and secure way to handle this.
> > - C is incorrect because deploying an execution role only in the Management account would not allow deployment to all member accounts. Self-managed StackSets would require execution roles in *every* target account.
> > - D is incorrect because Delegated Administrator functionality specifically exists to solve this problem.
> > 
> > **Links:** [[CloudFormation StackSets]], [[Organizations Advanced]]

> [!question]
> A solutions architect is using CloudFormation StackSets to deploy an application to 100 AWS accounts across 5 regions. The deployment must be as fast as possible, but it must stop automatically if more than 10% of the account deployments in any given region fail.
> 
> Which combination of StackSet settings should be configured?
> 
> 1. Set `MaxConcurrentAccounts` to 100 and `FailureToleranceCount` to 0.
> 2. Set `MaxConcurrentPercentage` to 100 and `FailureTolerancePercentage` to 10.
> 3. Set `RegionConcurrencyType` to `Parallel` and `FailureTolerancePercentage` to 10.
> 4. Set `MaxConcurrentPercentage` to 10 and `FailureToleranceCount` to 10.
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** To maximize speed, **MaxConcurrentPercentage** should be set to 100 (allowing all accounts to be updated at once). The **FailureTolerancePercentage** of 10 ensures that if more than 10% of deployments fail, CloudFormation stops the operation in that region. Option 3 is also important for speed (deploying to multiple regions in parallel), but Option 2 directly addresses the failure tolerance requirement. (See [[CloudFormation StackSets]])
