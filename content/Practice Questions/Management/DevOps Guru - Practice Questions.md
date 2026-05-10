---
tags: [aws, sap-c02, devops-guru, practice-questions]
---
# AWS DevOps Guru - Practice Questions

> [!question]
> A large e-commerce platform relies on dozens of microservices deployed via AWS CloudFormation. During recent outages, the operations team experienced severe alert fatigue because hundreds of CloudWatch alarms triggered simultaneously. They need a solution that correlates these alarms, identifies the root cause using machine learning, and reduces the number of distinct alerts.
> 
> Which approach meets these requirements with the LEAST configuration effort?
> 
> 1. Enable Amazon Macie on the account and configure it to scan CloudWatch logs for error patterns.
> 2. Enable AWS DevOps Guru and scope its analysis to the specific CloudFormation stacks.
> 3. Configure CloudWatch Anomaly Detection on every metric for the microservices and aggregate them in a CloudWatch Dashboard.
> 4. Use AWS CloudTrail Insights to detect unusual API activity and trigger a Step Functions workflow to suppress duplicate alarms.
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** **AWS DevOps Guru** is designed exactly for this use case. It uses ML to correlate metrics, logs, and events across your architecture to group related anomalies into a single "Insight." This drastically reduces alert fatigue and pinpoints the root cause. You can scope DevOps Guru natively using CloudFormation stacks. CloudWatch Anomaly Detection (C) operates on a per-metric basis and does not correlate across services automatically.
> > **Reference Notes:** [[DevOps Guru]]

> [!question]
> A company uses AWS DevOps Guru to monitor their production AWS account. The operations team wants to ensure that every time DevOps Guru generates a high-severity insight, an incident ticket is automatically created in their third-party IT Service Management (ITSM) tool.
> 
> How should the solutions architect integrate DevOps Guru with the ITSM tool?
> 
> 1. Configure DevOps Guru to write insights directly to an Amazon SQS queue. Run a Lambda function to poll the queue and call the ITSM API.
> 2. Configure an Amazon EventBridge rule that matches the DevOps Guru Insight event. Set the target to an AWS Lambda function or API Destination that integrates with the ITSM tool.
> 3. Create a CloudWatch Alarm based on the `DevOpsGuruInsightCount` metric and trigger an SNS topic connected to the ITSM tool.
> 4. Use AWS Config custom rules to detect new insights and execute a Systems Manager Automation document to open a ticket.
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** DevOps Guru natively publishes events to **Amazon EventBridge**. By creating an EventBridge rule that matches DevOps Guru events (e.g., `New Insight Open`), you can route the event to targets like AWS Lambda or EventBridge API Destinations to directly communicate with third-party ITSM tools like ServiceNow or Jira.
> > **Reference Notes:** [[DevOps Guru]]
