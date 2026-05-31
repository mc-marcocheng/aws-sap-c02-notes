---
tags: [compute, aws, sap-c02, beanstalk]
---
# AWS Elastic Beanstalk

AWS Elastic Beanstalk is a **Platform as a Service (PaaS)** that allows for quick deployment and scaling of web applications and services. It handles capacity provisioning, load balancing, scaling, and health monitoring automatically.

## Core Concepts

| Concept | Description |
| :--- | :--- |
| **Application** | A logical collection of components (environments, versions). |
| **Application Version** | A specific deployable iteration of code (stored in S3). |
| **Environment** | A version deployed onto AWS resources (Web Server or Worker tier). |
| **Platform** | A combination of OS, runtime, and web server (e.g., Node.js on Amazon Linux 2). |

---
## Environment Tiers

- **Web Server Tier**: Handles HTTP(S) requests. Typically uses an ALB and Auto Scaling.
- **Worker Tier**: Pulls tasks from an **Amazon SQS queue**. Includes a "host manager" that polls the queue and sends messages to the app as POST requests.

---
## Deployment Policies

| Strategy | Description | Pros | Cons |
| :--- | :--- | :--- | :--- |
| **All at once** | Deploys to all instances simultaneously. | Fastest. | Downtime; No rollbacks. |
| **Rolling** | Deploys in batches. | No downtime. | Reduced capacity during deployment. |
| **Rolling w/ Add. Batch** | Launches new batch first, then rolls. | No downtime; Full capacity. | Slightly slower. |
| **Immutable** | Deploys to a new ASG; swaps DNS. | Safest; easy rollback. | Slowest; double cost during deploy. |
| **Traffic Splitting** | Canary deployment (e.g., 10% to new version). | Great for testing health. | Complexity. |

---
## SAP-C02 Strategic Considerations

> [!important] **Production Database Best Practice**
> Never provision an RDS database *within* the Beanstalk environment for production.
> - **Risk**: If the Beanstalk environment is terminated, the database is deleted.
> - **Solution**: Provision RDS **externally** and connect via environment properties/connection strings. This allows the database to persist independently of the app lifecycle.

> [!important] **Customization with `.ebextensions`**
> Use `.ebextensions` folder in the root of your source code (YAML/JSON format) to:
> - Define/modify AWS resources (SQS, S3, etc.).
> - Configure the EC2 instances (packages, users, files, services).
> - Set environment variables.

> [!exam] **Scenario: Asynchronous Processing**
> For long-running tasks (e.g., image processing), use a **Worker Tier** with an **SQS queue** to decouple the front-end web tier from the back-end processing.

> [!exam] **Scenario: Blue/Green Deployment**
> To perform a Blue/Green deployment in Beanstalk:
> 1. Launch a new environment with the new version (Green).
> 2. Test the Green environment.
> 3. Perform a **CNAME Swap** in the Beanstalk console to route traffic to the new environment.

---
## Monitoring & Security
- **Enhanced Health**: Analyzes CloudWatch logs and HTTP response codes to provide a more granular health status than basic EC2 status checks.
- **Managed Updates**: Automatically applies patches/updates to the platform during a maintenance window.
- **IAM Roles**: 
  - **Service Role**: Allows Beanstalk to manage AWS resources.
  - **Instance Profile**: Allows EC2 instances to access S3 (for code) and CloudWatch (for logs).

---
## Related Services
- [[_Compute Index|Compute Index]]
- [[SQS Overview]]
- [[RDS Overview]]
- [[CloudFront Overview]]
