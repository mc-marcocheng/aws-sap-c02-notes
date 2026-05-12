---
tags: [aws, sap-c02, cloudwatch, management, practice-questions]
---
# CloudWatch Practice Questions

> [!question]
> A company needs to monitor the read and write IOPs metrics for their AWS MySQL RDS instance and send real-time alerts to their operations team. Which AWS services can accomplish this? (Choose 2)
> 1. Amazon Simple Email Service
> 2. Amazon CloudWatch
> 3. Amazon Simple Queue Service
> 4. Amazon Route 53
> 5. Amazon Simple Notification Service
> 
> > [!success]- Answer & Rationale
> > **Answer: 2, 5**
> > [[CloudWatch Overview|CloudWatch]] automatically monitors [[RDS Overview|RDS]] metrics such as ReadIOPS and WriteIOPS. To send real-time alerts, you configure a CloudWatch Alarm that triggers an [[SNS]] (Simple Notification Service) topic, which then sends notifications via email or SMS to the operations team.

> [!question]
> A customer needs to capture all client connection information from their load balancer every five minutes. The company wants to use this data for analyzing traffic patterns and troubleshooting their applications. Which of the following options meets the customer requirements?
> 1. Enable AWS CloudTrail for the load balancer.
> 2. Enable access logs on the load balancer.
> 3. Install the Amazon CloudWatch Logs agent on the load balancer.
> 4. Enable Amazon CloudWatch metrics on the load balancer.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > [[ELB Overview|Elastic Load Balancing]] access logs provide detailed information about requests sent to your load balancer, including the time the request was received, the client's IP address, latencies, request paths, and server responses. This is the correct tool for connection-level analysis, whereas [[CloudWatch Overview|CloudWatch]] metrics provide aggregate performance data.

> [!question]
> A user is running a batch process on EBS backed EC2 instances. The batch process starts a few instances to process Hadoop Map reduce jobs, which can run between 50 – 600 minutes or sometimes for more time. The user wants to configure that the instance gets terminated only when the process is completed. How can the user configure this with CloudWatch?
> 1. Setup the CloudWatch action to terminate the instance when the CPU utilization is less than 5%
> 2. Setup the CloudWatch with Auto Scaling to terminate all the instances
> 3. Setup a job which terminates all instances after 600 minutes
> 4. It is not possible to terminate instances automatically
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > [[CloudWatch Overview|CloudWatch Alarms]] can be configured to perform [[EC2 Overview|EC2]] actions, such as terminating or stopping an instance when a specific threshold is met. By monitoring CPU utilization and triggering a termination action when it falls below a threshold (e.g., 5%), you can ensure the instance is removed once the batch process is idle/complete.

> [!question]
> A user has two EC2 instances running in two separate regions. The user is running an internal memory management tool, which captures the data and sends it to CloudWatch in US East, using a CLI with the same namespace and metric. Which of the below mentioned options is true with respect to the above statement?
> 1. The setup will not work as CloudWatch cannot receive data across regions
> 2. CloudWatch will receive and aggregate the data based on the namespace and metric
> 3. CloudWatch will give an error since the data will conflict due to two sources
> 4. CloudWatch will take the data of the server, which sends the data first
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > [[CloudWatch Overview|CloudWatch]] can receive custom metric data from any source (including instances in other regions or on-premises servers) using the `PutMetricData` API. If multiple sources publish to the same [[CloudWatch Overview|Namespace]] and Metric Name with the same dimensions, CloudWatch will aggregate the data points.

> [!question]
> An application that you are managing has EC2 instances and DynamoDB tables deployed to several AWS Regions. In order to monitor the performance of the application globally, you would like to see two graphs: 1) Avg CPU Utilization across all EC2 instances and 2) Number of Throttled Requests for all DynamoDB tables. How can you accomplish this?
> 1. Tag your resources with the application name, and select the tag name as the dimension in the CloudWatch Management console to view the respective graphs.
> 2. Use the CloudWatch CLI tools to pull the respective metrics from each regional endpoint. Aggregate the data offline & store it for graphing in CloudWatch.
> 3. Add SNMP traps to each instance and DynamoDB table. Leverage a central monitoring server to capture data from each instance and table.
> 4. Add a CloudWatch agent to each instance and attach one to each DynamoDB table.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > [[CloudWatch Overview|CloudWatch]] metrics are **regional**. To create a truly global aggregate (e.g., average CPU across all regions), you must retrieve the data from each regional endpoint using the AWS CLI or SDKs and then aggregate it. Note: While [[CloudWatch Overview|CloudWatch Dashboards]] now allow viewing metrics from multiple regions in one view, cross-region *aggregation* into a single metric still requires custom logic.

> [!question]
> You have set up Individual AWS accounts for each project. You have been asked to make sure your AWS Infrastructure costs do not exceed the budget set per project for each month. Which of the following approaches can help ensure that you do not exceed the budget each month?
> 1. Consolidate your accounts so you have a single bill for all accounts and projects.
> 2. Set up auto scaling with CloudWatch alarms using SNS to notify you when you are running too many Instances.
> 3. Set up CloudWatch billing alerts for all AWS resources used by each project, with a notification occurring when the amount for each resource tagged to a particular project matches the budget.
> 4. Set up CloudWatch billing alerts for all AWS resources used by each account, with email notifications when it hits 50%, 80% and 90% of its budgeted monthly spend.
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > [[CloudWatch Overview|CloudWatch]] Billing Alarms (which integrate with [[Billing and Cost Management|AWS Budgets]]) allow you to monitor your total estimated charges. By setting multiple thresholds (e.g., 50%, 80%, 90%), you get proactive notifications via [[SNS]] as your spending approaches the project's monthly budget.

> [!question]
> You meet once per month with your operations team to review the past month’s data. During the meeting, you realize that 3 weeks ago, your monitoring system recorded a large spike in latency on your 3-tier web service API. You use DynamoDB, ELB, EBS, and EC2. Which of the following techniques will NOT help you figure out what happened?
> 1. Check your CloudTrail log history around the spike’s time for any API calls that caused slowness.
> 2. Review CloudWatch Metrics graphs to determine which component(s) slowed the system down.
> 3. Review your ELB access logs in S3 to see if any ELBs in your system saw the latency.
> 4. Analyze your logs to detect bursts in traffic at that time.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > Historically, [[CloudWatch Overview|CloudWatch]] metric retention was limited to 14 days for high-resolution data. If you are reviewing data from 3 weeks ago, standard metrics might have been deleted or aggregated to a much lower resolution, making it difficult to pinpoint the exact cause of a transient spike compared to [[CloudTrail]] or [[ELB Overview|ELB]] Access Logs stored in [[S3 Overview|S3]].

> [!question]
> You have a high security requirement for your AWS accounts. What is the most rapid and sophisticated setup you can use to react to AWS API calls to your account?
> 1. Subscription to AWS Config via an SNS Topic. Use a Lambda Function to perform analysis.
> 2. Global AWS CloudTrail setup delivering to S3 with an SNS subscription pushing into Lambda.
> 3. Use a CloudWatch Rule ScheduleExpression to periodically analyze IAM credential logs.
> 4. CloudWatch Events Rules, which trigger based on all AWS API calls, submitting all events to an AWS Kinesis Stream for arbitrary downstream analysis.
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > CloudWatch Events can capture [[CloudTrail]] API calls in near real-time. By using a rule to match all API calls and setting the target to an [[Kinesis Overview|Kinesis Stream]], you can perform sophisticated, real-time analysis using Kinesis Data Analytics or other tools.

> [!question]
> To monitor API calls against our AWS account by different users and entities, we can use \_\_\_\_ to create a history of calls in bulk for later review, and use \_\_\_\_ for reacting to AWS API calls in real-time.
> 1. AWS Config; AWS Inspector
> 2. AWS CloudTrail; AWS Config
> 3. AWS CloudTrail; CloudWatch Events
> 4. AWS Config; AWS Lambda
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > [[CloudTrail]] is the service for logging and maintaining a durable history of API calls across your AWS account. CloudWatch Events is used to detect those same API calls in near real-time and trigger automated responses.

> [!question]
> A company is running a large-scale microservices application on Amazon EKS. They need a centralized way to monitor container-level metrics such as CPU and memory usage, as well as diagnostic information like restart counts for all pods across multiple clusters. Which CloudWatch feature should they enable?
> 1. CloudWatch Application Insights
> 2. **CloudWatch Container Insights**
> 3. CloudWatch Lambda Insights
> 4. CloudWatch Logs Insights
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** **CloudWatch Container Insights** (Option 2) is specifically designed to collect, aggregate, and summarize metrics and logs from containerized applications and microservices. it supports Amazon ECS, Amazon EKS, and Kubernetes on EC2. It provides built-in dashboards for viewing resource utilization and health across clusters, nodes, and pods. (See [[CloudWatch Overview]])

> [!question]
> Your application includes a monitoring instance that periodically makes requests of various components and calls CloudWatch to fire an alarm if they fail. You also need to "watch the watcher"—the monitoring instance itself—and be notified if it becomes unhealthy. What is a simple way to achieve this?
> 1. Run another monitoring instance that pings the primary monitoring instance.
> 2. Set a CloudWatch alarm based on EC2 system and instance status checks and have the alarm notify your operations team.
> 3. Set a CloudWatch alarm based on the CPU utilization of the monitoring instance.
> 4. Have the monitoring instances post messages to an SQS queue and dequeue them on another instance.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > [[EC2 Overview|EC2]] Status Checks are the simplest way to monitor the health of an instance. "System Status Checks" monitor the AWS systems required for the instance to run, and "Instance Status Checks" monitor the software/network configuration of the instance. A [[CloudWatch Overview|CloudWatch]] alarm on these checks can automatically notify the team via [[SNS]].

> [!question]
> A company wants to use CloudWatch to monitor their application. They need to alert if the error rate (Errors / Total Requests) exceeds 5% over a 5-minute period. Which CloudWatch feature should they use?
> 1. CloudWatch Anomaly Detection
> 2. **CloudWatch Metric Math**
> 3. CloudWatch Logs Insights
> 4. CloudWatch Composite Alarms
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[CloudWatch Overview|CloudWatch Metric Math]] allows you to perform calculations (like division for error rates) across multiple metrics and create an alarm based on the result. Anomaly Detection (Option 1) is for detecting outliers, not specific percentage thresholds. Logs Insights (Option 3) is for querying log data. Composite Alarms (Option 4) are for grouping existing alarms.

> [!question]
> A solutions architect is designing a centralized monitoring solution for an Organization with 100 accounts. They want a single dashboard that shows the `CPUUtilization` and `StatusCheckFailed` metrics for all EC2 instances across all accounts and regions. What is the BEST way to implement this?
> 1. Use CloudWatch Cross-Account Observability and configure a **Monitoring Account** to aggregate data from multiple source accounts.
> 2. Create a script to assume cross-account roles and pull metrics from each account into a central S3 bucket.
> 3. Deploy a CloudWatch agent on every instance that publishes directly to the management account's namespace.
> 4. Use an EventBridge event bus to forward all metrics to a central account.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** **CloudWatch Cross-Account Observability** (Option 1) is the native feature that allows you to link multiple "source accounts" to a central "monitoring account." This enables viewing dashboards, metrics, and logs across accounts and regions without custom scripting or agents. (See [[CloudWatch Overview]])
