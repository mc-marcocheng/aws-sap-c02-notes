---
tags: ['aws', 'sap-c02', 'auto-scaling']
---
# Auto Scaling Overview

Amazon EC2 Auto Scaling ensures that you have the correct number of EC2 instances available to handle the load for your application. It helps achieve high availability, fault tolerance, and cost optimization.

## Core Components

> [!info] **The Building Blocks**
> - **Auto Scaling Group (ASG)**: A logical grouping of EC2 instances with shared characteristics. Defines min, max, and desired capacity.
> - **Launch Template (LT)**: The modern way to define instance configurations (AMI, instance type, SG, user data). Supports versioning and multiple purchase options (Spot + On-Demand).
> - **Launch Configuration (LC)**: Legacy method. Immutable (requires recreation for changes). *AWS recommends using Launch Templates.*

### Capacity Settings
- **Min Size**: Minimum instances the group will maintain.
- **Max Size**: Maximum instances the group can scale out to.
- **Desired Capacity**: The target number of instances. ASG will launch/terminate instances to match this.

---
## Scaling Policies

| Policy Type | Description | Best For |
| :--- | :--- | :--- |
| **Target Tracking** | Maintains a metric (e.g., average CPU) at a specific target. | Most common workloads. |
| **Step Scaling** | Increases/decreases capacity based on the size of the alarm breach. | Rapidly changing loads. |
| **Simple Scaling** | Waits for a cooldown after a single scaling activity. | Basic, slow-moving loads. |
| **Scheduled Scaling** | Scales based on known time-based patterns (e.g., Friday 6 PM). | Predictable traffic spikes. |
| **Predictive Scaling** | Uses machine learning to forecast traffic and schedule scaling. | Workloads with recurring daily/weekly patterns. |

---
## Health Checks and Rebalancing

### Health Check Types
1. **EC2 Health Checks**: Based on instance status checks (System/Instance).
2. **ELB Health Checks**: Based on application-level pings. 
   - > [!important] **Note**: By default, ASG only uses EC2 health checks. You **must** enable ELB health checks if you want ASG to replace instances that are failing at the application layer.

### AZ Rebalancing
ASG always tries to maintain an equal number of instances across all enabled Availability Zones. If an AZ becomes imbalanced (e.g., after an AZ failure recovers), ASG will launch new instances in the under-represented AZ before terminating instances in the over-represented one.

---
## Termination Policies

When a scale-in event occurs, ASG uses a termination policy to decide which instance to kill:
1. **Default Policy**: 
   - Selects AZ with the most instances.
   - Selects instances with the oldest launch configuration/template.
   - Selects instances closest to the next billing hour (legacy behavior).
2. **Custom Policies**: `OldestInstance`, `NewestInstance`, `OldestLaunchConfiguration`, `ClosestToNextInstanceHour`.

---
## Advanced Management Features

### Lifecycle Hooks
Allows you to pause the launch or termination of an instance to perform custom actions (e.g., installing software, downloading logs, or connecting/disconnecting from other services).
- **States**: `Pending:Wait`, `Pending:Proceed`, `Terminating:Wait`, `Terminating:Proceed`.

### Instance Refresh
Automates the process of rolling out updates to instances in an ASG (e.g., updating the AMI). It replaces instances in stages, ensuring a minimum healthy percentage is maintained.

### Standby and Suspension
- **Standby**: Puts an `InService` instance into a state where it's still part of the ASG but doesn't serve traffic. Useful for troubleshooting.
- **Suspension**: You can suspend specific processes like `Launch`, `Terminate`, `HealthCheck`, or `AZRebalance` to debug issues without ASG interfering.

---
## Auto Scaling with ELB

> [!info] **Integration Benefits**
> - **Connection Draining**: Ensures in-flight requests are completed before an instance is deregistered during scale-in.
> - **Dynamic Registration**: New instances are automatically registered with the target group/load balancer.

---
### SAP-C02 Exam Scenarios

> [!exam] **Scenario: Avoiding Flapping**
> A system scales out but then scales in immediately as CPU drops.
> - **Solution**: Adjust **Cooldown Periods** or use **Step Scaling** with wider ranges to prevent "flapping" (rapid succession of scaling events).

> [!exam] **Scenario: Ensuring 100% Availability during AZ Failure**
> A company needs to handle 100% of peak load even if one AZ fails.
> - **Solution**: In a 2-AZ setup, set **Min Capacity** to 100% of peak load per AZ. In a 3-AZ setup, set it to 50% per AZ.

> [!exam] **Scenario: Blue/Green Deployment with ASG**
> - **Solution**: Use **Instance Refresh** for a rolling update or swap **Target Groups** in the Load Balancer to a new ASG.

---
## Related Links
- [[Auto Scaling - Practice Questions|Practice Questions: Auto Scaling]]
- [[EC2 Overview]]
- [[ALB Overview]]
- [[CloudWatch Overview]]

---
**Practice:** [[Auto Scaling - Practice Questions|Auto Scaling Practice Questions]]