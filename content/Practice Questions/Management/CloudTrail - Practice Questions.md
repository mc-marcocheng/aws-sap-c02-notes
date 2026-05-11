---
tags: [aws, sap-c02, cloudtrail, management, practice-questions]
---
# CloudTrail Practice Questions

> [!question]
> You currently operate a web application in the AWS US-East region. The application runs on an auto-scaled layer of EC2 instances and an RDS Multi-AZ database. Your IT security compliance officer has tasked you to develop a reliable and durable logging solution to track changes made to your EC2, IAM and RDS resources. The solution must ensure the integrity and confidentiality of your log data. Which of these solutions would you recommend?
> 1. Create a new CloudTrail trail with one new S3 bucket to store the logs and with the global services option selected. Use IAM roles, S3 bucket policies and Multi-Factor Authentication (MFA) Delete on the S3 bucket that stores your logs.
> 2. Create a new CloudTrail with one new S3 bucket to store the logs. Configure SNS to send log file delivery notifications to your management system. Use IAM roles and S3 bucket policies on the S3 bucket that stores your logs.
> 3. Create a new CloudTrail trail with an existing S3 bucket to store the logs and with the global services option selected Use S3 ACLs and Multi Factor Authentication (MFA) Delete on the S3 bucket that stores your logs.
> 4. Create three new CloudTrail trails with three new S3 buckets to store the logs one for the AWS Management console, one for AWS SDKs and one for command line tools. Use IAM roles and S3 bucket policies on the S3 buckets that store your logs.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** Creating a new [[S3 Overview|S3]] bucket ensures a dedicated environment for log storage, supporting confidentiality. The **Global Services** option is mandatory to capture [[IAM]] events, as IAM is a global service. Using [[IAM]] roles and bucket policies ensures confidentiality by restricting access, while [[S3 Security|S3 MFA Delete]] prevents accidental or malicious deletion of the log files, ensuring the integrity and durability of the data.

> [!question]
> Which of the following are true regarding AWS CloudTrail? (Choose 3 answers)
> 1. CloudTrail is enabled globally.
> 2. CloudTrail is enabled by default.
> 3. CloudTrail is enabled on a per-region basis.
> 4. CloudTrail is enabled on a per-service basis.
> 5. Logs can be delivered to a single Amazon S3 bucket for aggregation.
> 6. CloudTrail is enabled for all available services within a region.
> 7. Logs can only be processed and delivered to the region in which they are generated.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2, 3, 5**
> > **Rationale:** 
> > - **Enabled by default:** Per recent [[CloudTrail|AWS enhancements]], CloudTrail is now enabled for all accounts to provide the last 90 days of management events.
> > - **Per-region basis:** While you can configure a "multi-region" trail, CloudTrail technically operates on a per-region basis.
> > - **Single S3 bucket:** You can aggregate logs from multiple regions and multiple accounts into a single [[S3 Overview|S3]] bucket for centralized auditing.
> > *Note: CloudTrail is not per-service (it's for all supported services) and global service events are specifically handled (not "globally enabled" in a simple toggle sense).*

> [!question]
> An organization has configured the custom metric upload with CloudWatch. The organization has given permission to its employees to upload data using CLI as well SDK. How can the user track the calls made to CloudWatch?
> 1. The user can enable logging with CloudWatch which logs all the activities.
> 2. Use CloudTrail to monitor the API calls.
> 3. Create an IAM user and allow each user to log the data using the S3 bucket.
> 4. Enable detailed monitoring with CloudWatch.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[CloudTrail]] is specifically designed to record AWS API calls. Whenever an employee uses the CLI or SDK to interact with [[CloudWatch Overview|CloudWatch]] (e.g., `PutMetricData`), CloudTrail captures the request details, including the identity of the caller and the timestamp.

> [!question]
> Your CTO thinks your AWS account was hacked. What is the only way to know for certain if there was unauthorized access and what they did, assuming your hackers are very sophisticated AWS engineers and doing everything they can to cover their tracks?
> 1. Use CloudTrail Log File Integrity Validation.
> 2. Use AWS Config SNS Subscriptions and process events in real time.
> 3. Use CloudTrail backed up to AWS S3 and Glacier.
> 4. Use AWS Config Timeline forensics.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** [[CloudTrail|CloudTrail Log File Integrity Validation]] is the key feature for forensic auditing. It uses SHA-256 for hashing and RSA for digital signing. If a hacker attempts to modify or delete log files to hide their tracks, the digest files will fail the validation check, providing proof of tampering.

> [!question]
> Your CTO has asked you to make sure that you know what all users of your AWS account are doing to change resources at all times. She wants a report of who is doing what over time, reported to her once per week, for as broad a resource type group as possible. How should you do this?
> 1. Create a global AWS CloudTrail Trail. Configure a script to aggregate the log data delivered to S3 once per week and deliver this to the CTO.
> 2. Use CloudWatch Events Rules with an SNS topic subscribed to all AWS API calls. Subscribe the CTO to an email type delivery on this SNS Topic.
> 3. Use AWS IAM credential reports to deliver a CSV of all uses of IAM User Tokens over time to the CTO.
> 4. Use AWS Config with an SNS subscription on a Lambda, and insert these changes over time into a DynamoDB table. Generate reports based on the contents of this table.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** A global (multi-region) [[CloudTrail]] trail is the most comprehensive way to track "who, what, when, and where" for API calls across all AWS services and regions. Aggregating these logs from [[S3 Overview|S3]] allows you to generate the required weekly reports. While [[Config]] tracks "what" changed, CloudTrail is the primary source for "who" made the change.
