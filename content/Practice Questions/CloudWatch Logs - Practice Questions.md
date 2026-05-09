---
tags: [aws, sap-c02, cloudwatch, management, practice-questions]
---
# CloudWatch Logs Practice Questions

> [!question]
> Once we have our logs in CloudWatch, we can do a number of things such as: (Choose 3)
> 1. Send the log data to AWS Lambda for custom processing or to load into other systems
> 2. Stream the log data to Amazon Kinesis
> 3. Stream the log data into Amazon OpenSearch Service in near real-time with CloudWatch Logs subscriptions.
> 4. Record API calls for your AWS account and delivers log files containing API calls to your Amazon S3 bucket
> 
> > [!success]- Answer & Rationale
> > **Answer: 1, 2, 3**
> > **Rationale:** CloudWatch Logs enables real-time processing of log data through [[CloudWatch Logs|Subscription Filters]]. These filters can stream data to [[Lambda Overview|AWS Lambda]] for custom logic, [[Kinesis Overview|Amazon Kinesis Data Streams]] or [[Kinesis Overview|Amazon Kinesis Data Firehose]] for downstream processing, and [[OpenSearch|Amazon OpenSearch Service]] for indexing and search. The option regarding recording API calls refers to the primary function of [[CloudTrail Overview|AWS CloudTrail]], which can deliver logs to [[S3 Overview|Amazon S3]] independently of CloudWatch Logs.

> [!question]
> You have decided to set the threshold for errors on your application to a certain number and once that threshold is reached you need to alert the Senior DevOps engineer. What is the best way to do this? (Choose 3)
> 1. Set the threshold your application can tolerate in a CloudWatch Logs group and link a CloudWatch alarm on that threshold.
> 2. Use CloudWatch Logs agent to send log data from the app to CloudWatch Logs from Amazon EC2 instances
> 3. Pipe data from EC2 to the application logs using AWS Data Pipeline and CloudWatch
> 4. Once a CloudWatch alarm is triggered, use SNS to notify the Senior DevOps Engineer.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1, 2, 4**
> > **Rationale:** The standard workflow for log-based alerting involves:
> > 1. Installing the [[CloudWatch Logs|CloudWatch Unified Agent]] (or legacy Logs Agent) on [[EC2 Overview|Amazon EC2]] instances to stream logs.
> > 2. Creating [[CloudWatch Logs|Metric Filters]] on the [[CloudWatch Logs]] group to transform log patterns into numerical metrics.
> > 3. Setting a [[CloudWatch Overview|CloudWatch Alarm]] on that metric with a defined threshold.
> > 4. Configuring [[SNS|Amazon SNS]] as the alarm action to notify personnel. [[Index|AWS Data Pipeline]] is not used for real-time log streaming to CloudWatch.

> [!question]
> You are hired as the new head of operations for a SaaS company. Your CTO has asked you to make debugging any part of your entire operation simpler and as fast as possible. She complains that she has no idea what is going on in the complex, service-oriented architecture, because the developers just log to disk, and it’s very hard to find errors in logs on so many services. How can you best meet this requirement and satisfy your CTO?
> 1. Copy all log files into AWS S3 using a cron job on each instance. Use an S3 Notification Configuration on the PutBucket event and publish events to AWS Lambda. Use the Lambda to analyze logs as soon as they come in and flag issues.
> 2. Begin using CloudWatch Logs on every service. Stream all Log Groups into S3 objects. Use AWS EMR cluster jobs to perform adhoc MapReduce analysis and write new queries when needed.
> 3. Copy all log files into AWS S3 using a cron job on each instance. Use an S3 Notification Configuration on the PutBucket event and publish events to AWS Kinesis. Use Apache Spark on AWS EMR to perform at-scale stream processing queries on the log chunks and flag issues.
> 4. Begin using CloudWatch Logs on every service. Stream all Log Groups into an Amazon OpenSearch Service Domain and perform log analysis on a search cluster.
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale:** For high-speed, interactive, and ad-hoc log analysis in a complex architecture, streaming [[CloudWatch Logs]] to [[OpenSearch|Amazon OpenSearch Service]] (formerly Elasticsearch) is the architecturally preferred solution. This "OpenSearch Stack" (often combined with Dashboards) allows for near real-time searching, filtering, and visualization of logs across many services. Options involving [[S3 Overview|Amazon S3]] with cron jobs or [[EMR|Amazon EMR]] introduce significant latency and are better suited for batch processing or long-term archival rather than fast debugging.

> [!question]
> You use Amazon CloudWatch as your primary monitoring system for your web application. After a recent software deployment, your users are getting Intermittent 500 Internal Server Errors when using the web application. You want to create a CloudWatch alarm, and notify an on-call engineer when these occur. How can you accomplish this using AWS services? (Choose 3)
> 1. Deploy your web application as an AWS Elastic Beanstalk application. Use the default Elastic Beanstalk CloudWatch metrics to capture 500 Internal Server Errors. Set a CloudWatch alarm on that metric.
> 2. Install a CloudWatch Logs Agent on your servers to stream web application logs to CloudWatch.
> 3. Create a CloudWatch Logs group and define metric filters that capture 500 Internal Server Errors. Set a CloudWatch alarm on that metric.
> 4. Use Amazon Simple Notification Service to notify an on-call engineer when a CloudWatch alarm is triggered.
> 5. Use Amazon Simple Email Service to notify an on-call engineer when a CloudWatch alarm is triggered.
> 6. Use AWS Data Pipeline to stream web application logs from your servers to CloudWatch.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2, 3, 4**
> > **Rationale:** To monitor specific error codes within application logs:
> > 1. Use the [[CloudWatch Logs|CloudWatch Unified Agent]] to push logs from servers to [[CloudWatch Logs]].
> > 2. Define [[CloudWatch Logs|Metric Filters]] to search for "500" errors and increment a custom metric.
> > 3. Create a [[CloudWatch Overview|CloudWatch Alarm]] on that custom metric.
> > 4. Use [[SNS|Amazon SNS]] to deliver the notification. [[Index|Amazon SES]] is generally used for transactional emails, not direct CloudWatch alarm actions. [[EC2 Overview|AWS Elastic Beanstalk]] provides some metrics, but custom log parsing is more precise for specific application error messages.
