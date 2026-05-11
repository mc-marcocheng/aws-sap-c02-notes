---
tags: [aws, sap-c02, developer-tools, codedeploy]
---
# CodeDeploy

AWS CodeDeploy is a fully managed deployment service that automates software deployments to a variety of compute services such as Amazon EC2, AWS Fargate, AWS Lambda, and your on-premises servers.

## 1. Core Concepts
- **appspec.yml**: Mandatory file defining file mappings and lifecycle event hooks (e.g., `BeforeInstall`, `AfterInstall`, `ApplicationStart`).
- **Compute Platforms**: Supports EC2/On-Premises, Lambda, and ECS.
- **Rollback Behavior**: CodeDeploy can automatically roll back if **CloudWatch alarms** trigger or if the deployment **fails**.
- **Agent**: Required for EC2/On-premises instances.

## 2. Deployment Strategies

| Strategy | Platforms | Description |
| --- | --- | --- |
| **In-Place** | EC2, On-Prem | Updates code on existing instances. Causes downtime. |
| **Blue/Green** | EC2, ECS, Lambda | Shifts traffic from old (Blue) to new (Green) environment. |
| **Canary** | Lambda, ECS | Traffic shifted in two increments (e.g., 10% then 90%). |
| **Linear** | Lambda, ECS | Traffic shifted in equal increments at equal intervals. |

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

## Related Services
- [[_Developer Tools Index|Developer Tools Index]]
- [[CodePipeline]]
- [[EC2 Overview|EC2]]
- [[Lambda]]

---
**Practice:** [[CodeDeploy - Practice Questions|CodeDeploy Practice Questions]]
