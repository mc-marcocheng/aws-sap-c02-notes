---
tags: [aws, sap-c02, billing, practice-questions]
---
# Billing Practice Questions

> [!question]
> Your company wants to understand where cost is coming from in the company’s production AWS account. There are a number of applications and services running at any given time. Without expending too much initial development time, how best can you give the business a good understanding of which applications cost the most per month to operate?
> 1. Create an automation script which periodically creates AWS Support tickets requesting detailed intra-month information.
> 2. Use custom CloudWatch Metrics in your system and put a metric data point whenever cost is incurred.
> 3. Use AWS Cost Allocation Tagging for all resources which support it. Use the Cost Explorer to analyze costs throughout the month.
> 4. Use the AWS Price API and constantly running resource inventory scripts to calculate total price based on consumed resources.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** Using [[Billing and Cost Management|Cost Allocation Tags]] is the most efficient and standard way to categorize and track costs by application, environment, or department. Once tags are activated in the Billing Console, [[Billing and Cost Management|AWS Cost Explorer]] can filter and group costs by these tags, providing a clear breakdown of spend per application with minimal development overhead.

> [!question]
> You need to know when you spend $1000 or more on AWS. What’s the easy way for you to see that notification?
> 1. AWS CloudWatch Events tied to API calls, when certain thresholds are exceeded, publish to SNS.
> 2. Scrape the billing page periodically and pump into Kinesis.
> 3. AWS CloudWatch Metrics + Billing Alarm + SNS/Email notification.
> 4. Scrape the billing page periodically and publish to SNS.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** The standard and simplest way to receive notifications for cost thresholds is using [[Billing and Cost Management|CloudWatch Billing Alarms]]. These alarms monitor the estimated charges metric (in the `us-east-1` region) and can trigger an [[SNS]] notification or email when a specified threshold is met. Alternatively, [[Billing and Cost Management|AWS Budgets]] can also be used for this purpose.

> [!question]
> A user is planning to use AWS services for his web application. If the user is trying to set up his own billing management system for AWS, how can he configure it?
> 1. Set up programmatic billing access. Download and parse the bill as per the requirement.
> 2. It is not possible for the user to create his own billing management service with AWS.
> 3. Enable the AWS CloudWatch alarm which will provide APIs to download the alarm data.
> 4. Use AWS billing APIs to download the usage report of each service from the AWS billing console.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** For custom billing analysis systems, AWS provides **Programmatic Billing Access** (via Cost and Usage Reports or legacy Monthly Billing Reports). This allows users to have billing data delivered to an [[S3 Overview|S3]] bucket, where it can be parsed and ingested into custom tools or databases for specialized reporting.

> [!question]
> A company wants to visualize their AWS spending patterns and receive recommendations for optimizing costs, such as identifying underutilized EC2 instances. Which combination of tools should they use?
> 1. AWS Cost Explorer and AWS Compute Optimizer.
> 2. AWS Budgets and AWS Trusted Advisor.
> 3. AWS Cost and Usage Report (CUR) and Amazon Athena.
> 4. AWS Pricing Calculator and AWS Organizations.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** [[Billing and Cost Management|AWS Cost Explorer]] provides the visualization of spending patterns, while [[Compute Optimizer]] specifically uses ML to identify underutilized resources (right-sizing). While Trusted Advisor (Option 2) also provides some recommendations, Cost Explorer + Compute Optimizer is the more targeted combination for visualization and deep ML-based right-sizing.

> [!question]
> An organization needs to provide their finance department with a granular, hourly breakdown of AWS costs, including which IAM user or role incurred the cost. Which tool provides this level of detail?
> 1. AWS Cost Explorer.
> 2. **AWS Cost and Usage Report (CUR)**.
> 3. AWS Budgets.
> 4. Consolidated Billing.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** The **AWS Cost and Usage Report (CUR)** is the most detailed billing report available. It can be configured to provide hourly granularity and includes resource-level details (like IAM user/role) and metadata (like tags). Cost Explorer (Option 1) is great for visualization but doesn't offer the same depth of raw data as CUR. (See [[Billing and Cost Management]])

> [!question]
> A solutions architect is designing a multi-account strategy for a large enterprise. They want to ensure that all member accounts can benefit from the volume discounts and Reserved Instance (RI) sharing of the entire Organization. What feature must be enabled?
> 1. Service Control Policies (SCPs).
> 2. **Consolidated Billing** in AWS Organizations.
> 3. AWS RAM (Resource Access Manager).
> 4. AWS Compute Optimizer.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** **Consolidated Billing** (Option 2) treats all accounts in an [[Organizations Overview|AWS Organization]] as one for billing purposes. This allows for volume-based tiered pricing discounts and enables the sharing of Reserved Instances and Savings Plans across all member accounts (unless RI sharing is explicitly disabled). (See [[Billing and Cost Management]])
