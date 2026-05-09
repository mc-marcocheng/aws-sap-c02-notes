---
tags: [aws, sap-c02, codedeploy]
---
# CodeDeploy

AWS CodeDeploy is a fully managed deployment service that automates software deployments to a variety of compute services such as Amazon EC2, AWS Fargate, AWS Lambda, and your on-premises servers.

## 1. Features
- **AppSpec File**: Uses an `appspec.yml` file to map files and define lifecycle event hooks (e.g., BeforeInstall, AfterInstall, ApplicationStart).
- **Compute Platforms**: Supports EC2/On-Premises, Lambda, and ECS.
- **Rollbacks**: Supports automatic rollbacks upon deployment failure or CloudWatch Alarm triggers.
- **Agent**: Requires the CodeDeploy agent installed on EC2/On-premises instances.

## 2. Deployment Strategies

| Strategy | Supported Platforms | Description |
| --- | --- | --- |
| **In-Place** | EC2, On-Premises | Stops the application on each instance, updates the code, and restarts it. Causes downtime unless using a Load Balancer with rolling updates (e.g., OneAtATime, HalfAtATime). |
| **Blue/Green** | EC2, ECS, Lambda | Provisions a new environment (Green). Traffic is shifted from the old (Blue) to the new environment. Safer, allows easy rollback, but requires more resources temporarily. |
| **Canary** | Lambda, ECS | Traffic is shifted in two increments. (e.g., 10% initially, wait 10 mins, then the remaining 90%). |
| **Linear** | Lambda, ECS | Traffic is shifted in equal increments with an equal number of minutes between each increment. (e.g., 10% every 3 minutes). |

## 3. Architecture for EC2 Blue/Green
- **Process**: CodeDeploy creates a new Auto Scaling Group (ASG) based on the old one, installs the new revision, attaches instances to the Load Balancer, and deregisters the old instances.
- **Requirement**: Must use an Elastic Load Balancer (ALB, NLB, or CLB).

## Strategic Scenarios (SAP-C02)
- **Zero Downtime Deployments**: Utilize Blue/Green deployments for ECS or EC2 to ensure zero downtime. If an issue is detected, rollback is nearly instantaneous by shifting the routing back to the blue environment.
- **On-Premises Integration**: CodeDeploy can deploy to on-premises servers. You must install the CodeDeploy agent, register the on-premises instances with IAM roles anywhere or long-term IAM user credentials (less preferred), and tag them for CodeDeploy deployment groups.
- **Handling Lifecycle Hooks**: In EC2, common issues revolve around the `ApplicationStop` hook failing on the *first* deployment or if the script is missing.
- **Auto Scaling Integration**: When integrated with ASG, CodeDeploy automatically deploys the latest successful revision to new instances launched by the ASG during scale-out events.

> [!important]
> For Blue/Green deployments on EC2, CodeDeploy effectively duplicates the Auto Scaling Group. Ensure your account limits for EC2 instances can handle the double capacity during the deployment.

> [!info]
> Lambda deployments use Aliases and Versions. The `appspec.yaml` specifies the alias to shift traffic to the new version.

> [!exam]
> Know the difference between Canary and Linear traffic shifting for Lambda/ECS. Canary shifts a small percentage, waits, then shifts the rest. Linear shifts equal portions at equal intervals until 100% is reached.

---
**Practice:** [[CodeDeploy - Practice Questions|CodeDeploy Practice Questions]]
