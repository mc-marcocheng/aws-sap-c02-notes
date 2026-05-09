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
> A user is sending the data to CloudWatch using the CloudWatch API. The user is sending data 90 minutes in the future. What will CloudWatch do in this case?
> 1. CloudWatch will accept the data
> 2. It is not possible to send data of the future
> 3. It is not possible to send the data manually to CloudWatch
> 4. The user cannot send data for more than 60 minutes in the future
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > According to [[CloudWatch Overview|CloudWatch]] concepts, a timestamp for a metric data point can be up to two weeks in the past and up to **two hours (120 minutes)** into the future. Therefore, data sent 90 minutes in the future will be accepted.

> [!question]
> A user is having data generated randomly based on a certain event. The user wants to upload that data to CloudWatch. It may happen that event may not have data generated for some period due to randomness. Which of the below mentioned options is a recommended option for this case?
> 1. For the period when there is no data, the user should not send the data at all
> 2. For the period when there is no data the user should send a blank value
> 3. For the period when there is no data the user should send the value as 0
> 4. The user must upload the data to CloudWatch as having no data for some period will cause an error at CloudWatch monitoring
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > In [[CloudWatch Overview|CloudWatch]], it is often recommended to publish the value **0** instead of no value during periods of inactivity. This helps in distinguishing between "no activity" and "failed reporting," ensures that statistics like Average and Sum are accurate, and allows for consistent alarm evaluation.

> [!question]
> A user has a weighing plant. The user measures the weight of some goods every 5 minutes and sends data to AWS CloudWatch for monitoring and tracking. Which of the below mentioned parameters is mandatory for the user to include in the request list?
> 1. Value
> 2. Namespace
> 3. Metric Name
> 4. Timezone
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > When using the `put-metric-data` command, the [[CloudWatch Overview|Namespace]] is a mandatory parameter. It acts as a container that isolates metrics from different applications or sources. While Metric Name and Value are also required for a meaningful data point, the Namespace is the primary organizational requirement in the API request.

> [!question]
> A user has a refrigerator plant. The user is measuring the temperature of the plant every 15 minutes. If the user wants to send the data to CloudWatch to view the data visually, which of the below mentioned statements is true?
> 1. The user needs to use AWS CLI or API to upload the data
> 2. The user can use the AWS Import Export facility to import data to CloudWatch
> 3. The user will upload data from the AWS console
> 4. The user cannot upload data to CloudWatch since it is not an AWS service metric
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > Since the temperature of a physical refrigerator plant is not an automated AWS service metric, it must be treated as a **Custom Metric**. Custom metrics must be published to [[CloudWatch Overview|CloudWatch]] using the [[Index|AWS CLI]] or the `PutMetricData` API.

> [!question]
> A user has launched an EC2 instance. The user is planning to setup the CloudWatch alarm. Which of the below mentioned actions is not supported by the CloudWatch alarm?
> 1. Notify the Auto Scaling launch config to scale up
> 2. Send an SMS using SNS
> 3. Notify the Auto Scaling group to scale down
> 4. Stop the EC2 instance
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > [[CloudWatch Overview|CloudWatch Alarms]] can trigger [[Auto Scaling Overview|Auto Scaling]] scaling policies (to scale a group up or down), send notifications via [[SNS]], and perform [[EC2 Overview|EC2]] actions (Stop, Terminate, Reboot, or Recover). However, they cannot directly modify or "notify" a Launch Configuration, which is a static template used by Auto Scaling.

> [!question]
> A user is trying to aggregate all the CloudWatch metric data of the last 1 week. Which of the below mentioned statistics is not available for the user as a part of data aggregation?
> 1. Aggregate
> 2. Sum
> 3. Sample data
> 4. Average
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > Standard [[CloudWatch Overview|CloudWatch]] statistics include **Sum**, **Average**, **Minimum**, **Maximum**, and **SampleCount**. "Aggregate" is a general term for the process but is not a specific statistic type available for retrieval.

> [!question]
> A user has setup a CloudWatch alarm on an EC2 action when the CPU utilization is above 75%. The alarm sends a notification to SNS on the alarm state. If the user wants to simulate the alarm action how can he achieve this?
> 1. Run activities on the CPU such that its utilization reaches above 75%
> 2. From the AWS console change the state to “Alarm”
> 3. The user can set the alarm state to “Alarm” using CLI
> 4. Run the SNS action manually
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > You can use the `set-alarm-state` command in the [[Index|AWS CLI]] to manually set an alarm to any state (`OK`, `ALARM`, or `INSUFFICIENT_DATA`). This is primarily used to test that the alarm's associated actions, such as [[SNS]] notifications or [[Auto Scaling Overview|Auto Scaling]] triggers, are working correctly.

> [!question]
> A user is publishing custom metrics to CloudWatch. Which of the below mentioned statements will help the user understand the functionality better?
> 1. The user can use the CloudWatch Import tool
> 2. The user should be able to see the data in the console after around 15 minutes
> 3. If the user is uploading the custom data, the user must supply the namespace, timezone, and metric name as part of the command
> 4. The user can view as well as upload data using the console, CLI and APIs
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > When you create a new custom metric using `put-metric-data`, it can take up to 2 minutes for the statistics to be retrievable and up to **15 minutes** for the new metric to appear in the searchable list in the [[CloudWatch Overview|CloudWatch]] console.

> [!question]
> An application that you are managing has EC2 instances and DynamoDB tables deployed to several AWS Regions. In order to monitor the performance of the application globally, you would like to see two graphs: 1) Avg CPU Utilization across all EC2 instances and 2) Number of Throttled Requests for all DynamoDB tables. How can you accomplish this?
> 1. Tag your resources with the application name, and select the tag name as the dimension in the CloudWatch Management console to view the respective graphs.
> 2. Use the CloudWatch CLI tools to pull the respective metrics from each regional endpoint. Aggregate the data offline & store it for graphing in CloudWatch.
> 3. Add SNMP traps to each instance and DynamoDB table. Leverage a central monitoring server to capture data from each instance and table.
> 4. Add a CloudWatch agent to each instance and attach one to each DynamoDB table.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > [[CloudWatch Overview|CloudWatch]] metrics are **regional**. To create a truly global aggregate (e.g., average CPU across all regions), you must retrieve the data from each regional endpoint using the [[Index|AWS CLI]] or SDKs and then aggregate it. Note: While [[CloudWatch Overview|CloudWatch Dashboards]] now allow viewing metrics from multiple regions in one view, cross-region *aggregation* into a single metric still requires custom logic.

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
> > Historically, [[CloudWatch Overview|CloudWatch]] metric retention was limited to 14 days for high-resolution data. If you are reviewing data from 3 weeks ago, standard metrics might have been deleted or aggregated to a much lower resolution, making it difficult to pinpoint the exact cause of a transient spike compared to [[CloudTrail Overview|CloudTrail]] or [[ELB Overview|ELB]] Access Logs stored in [[S3 Overview|S3]].

> [!question]
> You have a high security requirement for your AWS accounts. What is the most rapid and sophisticated setup you can use to react to AWS API calls to your account?
> 1. Subscription to AWS Config via an SNS Topic. Use a Lambda Function to perform analysis.
> 2. Global AWS CloudTrail setup delivering to S3 with an SNS subscription pushing into Lambda.
> 3. Use a CloudWatch Rule ScheduleExpression to periodically analyze IAM credential logs.
> 4. CloudWatch Events Rules, which trigger based on all AWS API calls, submitting all events to an AWS Kinesis Stream for arbitrary downstream analysis.
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > [[Index|CloudWatch Events]] can capture [[CloudTrail Overview|CloudTrail]] API calls in near real-time. By using a rule to match all API calls and setting the target to an [[Kinesis Overview|Kinesis Stream]], you can perform sophisticated, real-time analysis using Kinesis Data Analytics or other tools.

> [!question]
> To monitor API calls against our AWS account by different users and entities, we can use \_\_\_\_ to create a history of calls in bulk for later review, and use \_\_\_\_ for reacting to AWS API calls in real-time.
> 1. AWS Config; AWS Inspector
> 2. AWS CloudTrail; AWS Config
> 3. AWS CloudTrail; CloudWatch Events
> 4. AWS Config; AWS Lambda
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > [[CloudTrail Overview|CloudTrail]] is the service for logging and maintaining a durable history of API calls across your AWS account. [[Index|CloudWatch Events]] is used to detect those same API calls in near real-time and trigger automated responses.

> [!question]
> You are the head of operations for a SaaS company. Your CTO wants to make debugging any part of your complex, service-oriented architecture simpler and faster. Developers currently log to disk, making it hard to find errors across many services. How can you best meet this requirement?
> 1. Copy all log files into AWS S3 using a cron job. Use S3 Notifications to trigger Lambda for analysis.
> 2. Begin using CloudWatch Logs on every service. Stream all Log Groups into S3 and use AWS EMR for MapReduce analysis.
> 3. Copy all log files into AWS S3 and use Kinesis with Apache Spark on EMR for stream processing.
> 4. Begin using CloudWatch Logs on every service. Stream all Log Groups into an AWS Elasticsearch Service Domain running Kibana and perform log analysis.
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > Centralizing logs with [[CloudWatch Logs]] and streaming them to the ELK stack (Elasticsearch, Logstash, Kibana - now [[OpenSearch|OpenSearch Service]]) provides the fastest and most flexible way to search, visualize, and debug errors across multiple services in a distributed architecture.

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
