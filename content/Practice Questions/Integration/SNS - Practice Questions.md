---
tags: [aws, sap-c02, sns, practice-questions]
---

# SNS Practice Questions

> [!question]
> A company is running a batch analysis every hour on their main transactional DB running on an RDS MySQL instance to populate their central Data Warehouse running on Redshift. During the execution of the batch their transactional applications are very slow. When the batch completes they need to update the top management dashboard with the new data. The dashboard is produced by another system running on-premises that is currently started when a manually-sent email notifies that an update is required. The on-premises system cannot be modified because is managed by another team. How would you optimize this scenario to solve performance issues and automate the process as much as possible?
> 1. Replace RDS with Redshift for the batch analysis and SNS to notify the on-premises system to update the dashboard
> 2. Replace RDS with Redshift for the batch analysis and SQS to send a message to the on-premises system to update the dashboard
> 3. Create an RDS Read Replica for the batch analysis and SNS to notify the on-premises system to update the dashboard
> 4. Create an RDS Read Replica for the batch analysis and SQS to send a message to the on-premises system to update the dashboard.
>
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** Using an [[RDS Replication#Read Replicas|RDS Read Replica]] offloads the read-heavy batch analysis workload from the main transactional database, solving the performance issues. Amazon [[SNS]] can send an automated email notification to trigger the on-premises system, automating the manual email process as requested ("notifies that an update is required").

> [!question]
> You are providing AWS consulting service for a company developing a new mobile application that will be leveraging amazon SNS push for push notifications. In order to send direct notification messages to individual devices each device registration identifier or token needs to be registered with SNS, however the developers are not sure of the best way to do this. You advise them to:
> 1. Bulk upload the device tokens contained in a CSV file via the AWS Management Console
> 2. Let the push notification service (e.g. Amazon Device messaging) handle the registration
> 3. Implement a token vending service to handle the registration
> 4. Call the CreatePlatformEndpoint API function to register multiple device tokens.
>
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale:** The `CreatePlatformEndpoint` API action in [[SNS]] creates an endpoint for a device and mobile app on one of the supported push notification services, allowing you to register the device token for direct publishing.

> [!question]
> Which of the following notification endpoints or clients does Amazon Simple Notification Service support? Choose 2 answers
> 1. Email
> 2. CloudFront distribution
> 3. File Transfer Protocol
> 4. Short Message Service
> 5. Simple Network Management Protocol
>
> > [!success]- Answer & Rationale
> > **Answer: 1, 4**
> > **Rationale:** Amazon [[SNS]] supports sending notifications via Email and Short Message Service (SMS), among other protocols like HTTP/HTTPS, Lambda, and [[SQS Overview|SQS]]. It does not support CloudFront, FTP, or SNMP as endpoints.

> [!question]
> A company wants to implement a fan-out architecture where a single message published to a topic is delivered to multiple SQS queues for parallel processing. How can they ensure that certain messages are only delivered to specific queues based on message attributes?
> 1. Use SQS Visibility Timeouts.
> 2. Implement **SNS Message Filtering**.
> 3. Use multiple SNS topics, one for each queue.
> 4. Use a Lambda function to sort and route messages.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** **SNS Message Filtering** allows subscribers (like [[SQS Overview|SQS]] queues) to specify a filter policy. SNS will then only deliver messages to that subscriber if the message attributes match the policy. This avoids the need for custom routing logic in Lambda (Option 4) or creating excessive topics (Option 3). (See [[SNS]])
