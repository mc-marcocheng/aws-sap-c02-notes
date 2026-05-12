---
tags: [aws, sap-c02, resilience-hub, practice-questions]
---
# AWS Resilience Hub - Practice Questions

> [!question]
> A company wants to enforce a strict Recovery Time Objective (RTO) and Recovery Point Objective (RPO) for its core banking application deployed on AWS. The application consists of EC2 instances, an RDS Multi-AZ database, and ElastiCache. The architecture team needs a solution to continuously assess if infrastructure changes violate the RTO and RPO targets, and they want automated recovery procedures generated for common failures.
> 
> Which solution provides these capabilities with the LEAST operational effort?
> 
> 1. Use AWS Config rules to monitor RTO and RPO compliance. Create AWS Lambda functions to act as standard operating procedures (SOPs) for recovery.
> 2. Define the application in AWS Resilience Hub. Assign a resilience policy with the RTO/RPO targets. Use Resilience Hub to generate CloudWatch alarms and Systems Manager Automation runbooks for SOPs.
> 3. Use Amazon EventBridge rules to detect infrastructure changes. Trigger AWS Step Functions workflows to calculate RTO and RPO. 
> 4. Use AWS Fault Injection Service (FIS) to continuously drop availability zones. Measure the recovery time using custom CloudWatch metrics and dashboard.
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** **AWS Resilience Hub** is designed specifically to track, assess, and manage RTO and RPO targets. It analyzes the architecture and automatically recommends and generates CloudWatch alarms and Systems Manager SOPs for recovery. Option D (FIS) is for testing, not for continuous passive assessment and generating SOPs. Options A and C require significant custom development.
> > **Reference Notes:** [[Resilience Hub]]

> [!question]
> An enterprise has implemented AWS Resilience Hub and configured RTO and RPO policies for a critical order-processing stack. The assessment shows that the architecture meets the theoretical RTO target of 10 minutes. The business stakeholders now require empirical proof that the system will actually recover within 10 minutes if a primary RDS instance fails.
> 
> How should the solutions architect obtain this proof?
> 
> 1. Manually reboot the RDS instance using the AWS Console and time the recovery using a stopwatch.
> 2. Use AWS Systems Manager to execute a custom script that corrupts the database.
> 3. Use AWS Resilience Hub's integration with AWS Fault Injection Service (FIS) to run an automated experiment that simulates an RDS failover and measures the recovery time.
> 4. Configure AWS Backup to restore the database continuously and measure the restore duration.
>
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** **AWS Fault Injection Service (FIS)** is the native chaos engineering service in AWS. Resilience Hub natively integrates with FIS to generate and run experiments (like DB failovers, AZ drops) to empirically validate that the application recovers within the defined RTO.
> > **Reference Notes:** [[Resilience Hub]]

> [!question]
> A company has an application that met its RTO and RPO targets during the initial Resilience Hub assessment. However, over the following months, several manual configuration changes were made to the infrastructure. How can Resilience Hub help detect if these changes have compromised the application's resilience?
> 1. By automatically running an FIS experiment every day.
> 2. By using **Resilience Drift Detection** to identify changes in the application's configuration that might impact its ability to meet RTO/RPO targets.
> 3. By monitoring CloudTrail for any "Deny" actions.
> 4. By automatically reverting any manual changes using Systems Manager.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[Resilience Hub]] provides **Drift Detection** (Option 2), which continuously monitors the application's resources and compares their current state to the state at the time of the last successful assessment. If a change is detected that could negatively impact resilience, Resilience Hub alerts the team so they can re-assess or fix the configuration. (See [[Resilience Hub]])
