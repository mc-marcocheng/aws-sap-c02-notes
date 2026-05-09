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
