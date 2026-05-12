---
tags: [aws, sap-c02, codedeploy, practice-questions]
---
# CodeDeploy Practice Questions

> [!question]
> A company is migrating a critical legacy application to AWS. They are deploying it on EC2 instances managed by an Auto Scaling Group behind an Application Load Balancer. They require a deployment strategy that guarantees zero downtime and provides an instant rollback capability if errors are detected. Which deployment method meets these requirements?
> 1. AWS CodeDeploy In-Place deployment using the `CodeDeployDefault.OneAtATime` configuration.
> 2. AWS CodeDeploy Blue/Green deployment.
> 3. AWS Elastic Beanstalk Rolling updates.
> 4. AWS CloudFormation stack update with `AutoScalingRollingUpdate` policy.
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[CodeDeploy]] Blue/Green deployments provision a complete parallel environment and shift traffic at the Load Balancer level. This provides true zero downtime and allows for instantaneous rollback by simply routing traffic back to the original instances if validation fails. In-Place/Rolling updates reduce capacity and take time to rollback.

> [!question]
> An organization uses AWS CodeDeploy to deploy a microservice hosted on AWS Lambda. They want to ensure that a new deployment is exposed to only 10% of user traffic for 15 minutes. If no CloudWatch alarms are triggered, the remaining 90% of traffic should be routed to the new version. Which deployment configuration should be used?
> 1. CodeDeployDefault.LambdaLinear10PercentEvery15Minutes
> 2. CodeDeployDefault.LambdaCanary10Percent15Minutes
> 3. CodeDeployDefault.LambdaAllAtOnce
> 4. A Custom CodeDeploy In-Place configuration
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** The Canary strategy shifts a specified percentage of traffic in the first increment (10%), waits for a specified time (15 minutes), and then shifts the remaining traffic (90%). This matches the `CodeDeployDefault.LambdaCanary10Percent15Minutes` configuration in [[CodeDeploy]]. Linear would shift 10% *every* 15 minutes incrementally.

> [!question]
> A solutions architect is configuring an AWS CodeDeploy deployment for an application running on EC2. They need to run a custom script to verify that the application is healthy after it has been installed but *before* traffic is shifted to the new version. Which lifecycle hook in the `appspec.yml` should be used?
> 1. AfterInstall
> 2. **ValidateService**
> 3. BeforeAllowTraffic
> 4. ApplicationStart
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** The **ValidateService** hook in the [[CodeDeploy]] `appspec.yml` is specifically designed for running scripts to verify that the service is functioning as expected before the deployment is considered successful. If the script fails, CodeDeploy can automatically roll back. Option 1 (AfterInstall) runs before the service is even started. Option 3 is for ELB/Lambda traffic shifting control. (See [[CodeDeploy]])
