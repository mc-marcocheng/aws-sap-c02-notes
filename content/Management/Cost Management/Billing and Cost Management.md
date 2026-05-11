---
tags: [aws, sap-c02, management, billing]
---
# Billing and Cost Management

AWS provides a suite of tools to help you monitor, manage, and optimize your AWS costs.

## Cost Analysis Tools
- **AWS Cost Explorer**: Visualize and forecast your AWS costs and usage. Filter by service, account, tag, and more.
- **[[Trusted Advisor|AWS Trusted Advisor]]**: Provides recommendations for cost optimization (e.g., identifying idle or underutilized resources).
- **AWS Compute Optimizer**: Recommends optimal AWS resources for your workloads to reduce costs and improve performance.

## Budgeting and Alerts
- **AWS Budgets**: Set custom budgets for cost or usage and receive alerts. 
    - **Budget Actions**: Can automatically trigger actions when thresholds are met (e.g., apply an SCP, stop an EC2/RDS instance).
- **AWS Cost Anomaly Detection**: ML-based service that identifies anomalous spend and root causes to prevent cost surprises.
- **[[CloudWatch Overview|CloudWatch]] Billing Alarms**: Monitor your estimated charges and receive SNS notifications.

## Data Transfer Costs
Understanding data transfer is critical for SAP-C02 cost optimization:
- **Inbound Data Transfer**: Free (from Internet, same/different Region).
- **Same Availability Zone (AZ)**: Free if using private IP.
- **Cross-AZ**: ~$0.01/GB each way (inter-AZ transfer).
- **Cross-Region**: ~$0.02/GB (transfer out to a different AWS Region).
- **NAT Gateway**: $0.045/GB (data processing charge) **plus** standard EC2 data transfer charges.
- **AWS Direct Connect / CloudFront**: Often used to reduce data transfer out costs compared to Internet.

## Resource Organization
- **Cost Allocation Tags**: Use tags to track AWS costs on a detailed level. You must **activate** these tags in the Billing Console before they appear in Cost Explorer.
- **Consolidated Billing**: (Part of [[Organizations Overview|AWS Organizations]]) Allows you to combine usage across multiple accounts to reach volume discount tiers and pay with a single payment method.

## Purchase Options
- **On-Demand**: Pay for what you use by the second/hour.
- **Savings Plans**: Commit to a consistent amount of usage ($/hour) for a 1 or 3-year term.
- **Reserved Instances (RIs)**: Commit to specific instance types/regions.
- **Spot Instances**: Use spare AWS capacity at up to 90% discount (subject to interruption).

> [!exam]
> **SAP-C02 Strategy**:
> - For unpredictable workloads: **On-Demand**.
> - For steady-state workloads: **Savings Plans** or **RIs**.
> - For fault-tolerant/batch processing: **Spot Instances**.
> - For multi-account cost management: **Consolidated Billing** with **SCPs** to restrict expensive services.

## Related Services
- [[_Management Index|Management Index]]
- [[Organizations Overview|AWS Organizations]]
- [[Trusted Advisor]]
- [[CloudWatch Overview|CloudWatch]]

---
**Practice:** [[Billing - Practice Questions|Billing Practice Questions]]