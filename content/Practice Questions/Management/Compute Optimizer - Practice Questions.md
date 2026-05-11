---
tags: [aws, sap-c02, management, cost, optimizer, practice-questions]
---
# Compute Optimizer - Practice Questions

> [!question]
> An organization has over 1,000 EC2 instances running across multiple AWS accounts. The finance team suspects that many of these instances are over-provisioned, resulting in high costs. They want a centralized, machine-learning-powered tool that analyzes historical CPU and memory metrics to recommend optimal instance types. Which service should they use?
> 
> 1. AWS Trusted Advisor
> 2. AWS Cost Explorer
> 3. AWS Compute Optimizer
> 4. AWS Systems Manager Inventory
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** [[Compute Optimizer]] uses machine learning to analyze historical utilization metrics (up to 3 months with the enhanced infrastructure metrics feature) and provides highly specific right-sizing recommendations (e.g., upgrading from M5 to M6g). Crucially, it can be integrated with AWS Organizations to provide a single, centralized dashboard.

> [!question]
> AWS Compute Optimizer has flagged an Amazon EC2 instance running a steady, predictable, memory-intensive workload as "Under-provisioned." The tool recommends migrating from an `m5.large` to an `r5.large` instance. The application running on the instance is stateless and part of an Auto Scaling Group (ASG) behind an Application Load Balancer. What is the SAFEST and MOST automated way to implement this recommendation with zero downtime?
> 
> 1. Stop the instance, change the instance type via the EC2 console, and start it again.
> 2. Create a new ASG with the `r5.large` instance type, attach it to the ALB, and slowly terminate instances in the old ASG.
> 3. Update the Launch Template for the ASG to specify the `r5.large` instance type, and initiate an Instance Refresh on the ASG.
> 4. Use an AWS Systems Manager Automation document to dynamically resize the running instance in place without restarting.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** Updating the Launch Template and utilizing the ASG **Instance Refresh** feature is the native, automated way to roll out instance type changes across a fleet. Instance Refresh replaces instances in batches according to a defined minimum healthy percentage, ensuring zero downtime for the application behind the ALB.
