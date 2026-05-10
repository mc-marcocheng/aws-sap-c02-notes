---
tags: [aws, sap-c02, sqs, integration, practice-questions]
---
# SQS Practice Questions

> [!question]
> Which AWS service can help design architecture to persist in-flight transactions?
> 1. Elastic IP Address
> 2. SQS
> 3. Amazon CloudWatch
> 4. Amazon ElastiCache
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale**: [[SQS Overview|Amazon SQS]] is a highly available distributed queue system that acts as a temporary repository for messages awaiting processing. It serves as a buffer between components, ensuring that "in-flight" transactions (messages) are persisted until they are successfully processed and deleted by a consumer.

> [!question]
> A company has a workflow that sends video files from their on-premise system to AWS for transcoding. They use EC2 worker instances that pull transcoding jobs from SQS. Why is SQS an appropriate service for this scenario?
> 1. SQS guarantees the order of the messages.
> 2. SQS synchronously provides transcoding output.
> 3. SQS checks the health of the worker instances.
> 4. SQS helps to facilitate horizontal scaling of encoding tasks.
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale**: SQS decouples the producers (on-premise systems) from the consumers (EC2 worker instances). This allows the fleet of worker instances to scale horizontally based on the number of messages in the queue (load), ensuring efficient processing of transcoding jobs. This is a classic [[SQS Overview#SQS Use Cases|SQS Use Case]].

> [!question]
> Which statement best describes an Amazon SQS use case?
> 1. Automate the process of sending an email notification to administrators when CPU utilization reaches 70%.
> 2. Create a video transcoding website where multiple components need to communicate with each other, but can’t all process the same amount of work simultaneously.
> 3. Coordinate work across distributed web services to process employee’s expense reports.
> 4. Distribute static web content to end users with low latency across multiple countries.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale**: [[SQS Overview|SQS]] is ideal for decoupling components that process work at different rates. It acts as a buffer to smooth out spikes in traffic. Option 1 is better handled by CloudWatch/[[SNS]]. Option 3 is better suited for AWS Step Functions (or SWF). Option 4 is the role of CloudFront.

> [!question]
> Your application provides data transformation services. Files containing data to be transformed are first uploaded to Amazon S3 and then transformed by a fleet of spot EC2 instances. Files submitted by your premium customers must be transformed with the highest priority. How should you implement such a system?
> 1. Use a DynamoDB table with an attribute defining the priority level.
> 2. Use Route 53 latency-based routing.
> 3. Use two SQS queues, one for high priority messages, and the other for default priority. Transformation instances first poll the high priority queue; if there is no message, they poll the default priority queue.
> 4. Use a single SQS queue. Each message contains the priority level.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale**: The standard "Priority Queue Pattern" in AWS uses separate [[SQS Overview|SQS queues]] for different priority levels. Consumers are programmed to check the higher-priority queue first before processing messages from the lower-priority queue.

> [!question]
> To ensure that you do not drop any database writes during a large donation event with undetermined traffic, which service should you use?
> 1. Amazon RDS with provisioned IOPS.
> 2. Amazon Simple Queue Service (SQS) for capturing the writes and draining the queue to write to the database.
> 3. Amazon ElastiCache to store the writes.
> 4. Amazon DynamoDB with provisioned write throughput.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale**: [[SQS Overview|SQS]] provides a highly durable buffer that can capture and store incoming write requests even if the database is experiencing high load. This prevents data loss (dropped writes) and allows the database to process the writes at a steady rate.

> [!question]
> How can you reduce the load on your on-premises mainframe database in a cost-effective way when it is unable to handle the volume of writes from an AWS-hosted web application?
> 1. Use Amazon EMR S3DistCp.
> 2. Modify the application to write to an Amazon SQS queue and develop a worker process to flush the queue to the on-premises database.
> 3. Modify the application to use DynamoDB.
> 4. Provision an RDS read-replica.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale**: Using [[SQS Overview|SQS]] as a buffer allows the application to acknowledge the write immediately while the worker process throttles the actual database writes to a level the on-premises mainframe can handle.

> [!question]
> An organization has created a Queue named “modularqueue” but is not performing any operations on it. What happens after 30 days of inactivity?
> 1. AWS SQS sends notification after 15 days.
> 2. AWS SQS can delete queue after 30 days without notification.
> 3. AWS SQS marks queue inactive after 30 days.
> 4. AWS SQS notifies the user after 2 weeks.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale**: [[SQS Overview|SQS]] reserves the right to delete a queue without notification if no action has been performed on it for 30 consecutive days.

> [!question]
> Which of the below mentioned operations is not supported by SQS?
> 1. SendMessageBatch
> 2. DeleteMessageBatch
> 3. CreateQueue
> 4. DeleteMessageQueue
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale**: The correct API action name is `DeleteQueue`, not `DeleteMessageQueue`. `SendMessageBatch`, `DeleteMessageBatch`, and `CreateQueue` are all valid [[SQS Overview|SQS API operations]].

> [!question]
> A consumer of an SQS queue is down for 3 days and then becomes available. Will it receive messages that were sent while it was down?
> 1. Yes, since SQS by default stores message for 4 days.
> 2. No, since SQS by default stores message for 1 day only.
> 3. No, since SQS sends message to consumers who are available that time.
> 4. Yes, since SQS will not delete message until it is delivered to all consumers.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale**: The default message retention period for [[SQS Overview|Amazon SQS]] is 4 days. Since the consumer was only down for 3 days, the messages sent during that time will still be available in the queue.

> [!question]
> Which of the following is a valid Queue URL for a queue named “queue2” in US-East region with AWS account ID 123456789012?
> 1. http://sqs.us-east-1.amazonaws.com/123456789012/queue2
> 2. http://sqs.amazonaws.com/123456789012/queue2
> 3. http://sqs.123456789012.us-east-1.amazonaws.com/queue2
> 4. http://123456789012.sqs.us-east-1.amazonaws.com/queue2
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale**: The standard format for an [[SQS Overview|SQS Queue URL]] is `https://sqs.[region].amazonaws.com/[account-id]/[queue-name]`.

> [!question]
> If a user tries to delete an SQS queue that has four messages in it, what will happen?
> 1. A user can never delete a queue manually.
> 2. It will delete the queue.
> 3. It will wait for four days before deleting.
> 4. It will ask user to delete the messages first.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale**: [[SQS Overview|Amazon SQS]] allows you to delete a queue even if it contains messages. When you delete the queue, all messages in it are also deleted.

> [!question]
> A user wants to decouple data sending to a NoSQL database so the application keeps processing without waiting for a DB acknowledgement. Which service helps?
> 1. AWS SNS
> 2. AWS SWF
> 3. AWS SQS
> 4. AWS Simple Query Service
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale**: [[SQS Overview|Amazon SQS]] is designed specifically for decoupling distributed components through an asynchronous polling model.

> [!question]
> Your backend system needs messages in the same sequence customer orders were placed. How can you achieve this with SQS?
> 1. It is not possible to do this with SQS.
> 2. You can use sequencing information on each message.
> 3. You can do this with SQS but you also need to use SWF.
> 4. Messages will arrive in the same order by default.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale**: In the context of older SQS documentation, manual sequencing information was required. However, the modern answer would be to use [[SQS Overview#SQS FIFO|SQS FIFO Queues]], which provide strict First-In-First-Out ordering.

> [!question]
> Using an architecture with SQS, CloudWatch, and Auto Scaling, which feature can you implement in a cost-effective manner?
> 1. Daisy-chain message passing.
> 2. Implement fault tolerance by backing up messages to S3.
> 3. Implement message passing within a batch.
> 4. Coordinate number of EC2 instances with number of job requests automatically.
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale**: This is the "Job Observer Pattern". [[CloudWatch Overview|CloudWatch]] monitors the [[SQS Overview|SQS]] queue depth and triggers Auto Scaling to adjust the number of worker instances to match the load, ensuring cost-effectiveness.

> [!question]
> How does Amazon SQS allow multiple readers to access the same message queue without losing messages or processing them many times?
> 1. By identifying a user by his unique id.
> 2. By using unique cryptography.
> 3. Amazon SQS queue has a configurable visibility timeout.
> 4. Multiple readers can’t access the same message queue.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale**: When a message is received by a consumer, it remains in the queue but is "hidden" from other consumers for the duration of the [[SQS Overview#Visibility Timeout|visibility timeout]]. If the consumer processes and deletes the message within this window, it won't be processed again.

> [!question]
> How do you configure SQS to support longer message retention?
> 1. Set the MessageRetentionPeriod attribute using the SetQueueAttributes method.
> 2. Using a Lambda function.
> 3. You can’t; it is set to 14 days and cannot be changed.
> 4. You need to request it from AWS.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale**: [[SQS Overview|Message retention]] can be configured from 1 minute to 14 days. This is done by modifying the `MessageRetentionPeriod` queue attribute.

> [!question]
> If a message is retrieved from a queue in Amazon SQS, how long is the message inaccessible to other users by default?
> 1. 0 seconds
> 2. 1 hour
> 3. 1 day
> 4. 30 seconds
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale**: The default [[SQS Overview#Visibility Timeout|visibility timeout]] for an SQS queue is 30 seconds.

> [!question]
> Which statement about SQS Standard Queues is true?
> 1. Messages will be delivered exactly once and in FIFO order.
> 2. Messages will be delivered exactly once and order is indeterminate.
> 3. Messages will be delivered one or more times and in FIFO order.
> 4. Messages will be delivered one or more times and order is indeterminate.
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale**: [[SQS Overview#Standard Queues|Standard queues]] provide "at-least-once" delivery (meaning messages can occasionally be delivered more than once) and "best-effort ordering" (meaning order is not guaranteed).

> [!question]
> How long can you keep your Amazon SQS messages in SQS queues?
> 1. From 120 secs up to 4 weeks.
> 2. From 10 secs up to 7 days.
> 3. From 60 secs up to 2 weeks.
> 4. From 30 secs up to 1 week.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale**: The [[SQS Overview|message retention]] range is 60 seconds (1 minute) to 1,209,600 seconds (14 days).

> [!question]
> When a task takes 5 minutes to complete, which process results in successful processing while minimizing duplicate processing?
> 1. Retrieve the message with an increased visibility timeout, process the message, delete the message from the queue.
> 2. Retrieve the message with an increased visibility timeout, delete the message from the queue, process the message.
> 3. Retrieve the message with increased DelaySeconds, process the message, delete the message from the queue.
> 4. Retrieve the message with increased DelaySeconds, delete the message from the queue, process the message.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale**: Increasing the [[SQS Overview#Visibility Timeout|visibility timeout]] ensures the message remains hidden until the 5-minute task is complete. Deleting it *after* processing ensures it was successful. Deleting *before* processing risks data loss if the task fails.

> [!question]
> You are getting a lot of empty receive requests when using Amazon SQS. How can you reduce this load?
> 1. Subscribe your queue to an SNS topic.
> 2. Use as long of a poll as possible, instead of short polls.
> 3. Alter your visibility timeout to be shorter.
> 4. Use sqsd on your EC2 instances.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale**: [[SQS Overview#Long Polling|Long Polling]] (up to 20 seconds) reduces the number of empty responses by waiting for a message to arrive in the queue before returning a response, thus reducing API calls and costs.

> [!question]
> An ASG scales according to SQS queue depth. Completion velocity has gone down, ASG size has maxed out, but inbound velocity is unchanged. What is a possible issue?
> 1. New jobs are malformed and unprocessable.
> 2. Routing tables changed.
> 3. IAM Role Policy broke permissions.
> 4. Scaling metric is not functioning.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale**: If jobs are unprocessable, they will fail and return to the [[SQS Overview|queue]] (after visibility timeout), causing the queue depth to stay high or increase, which keeps the ASG at max size. Since some work is still happening (velocity went down but not to zero), malformed messages clogging the system is the most likely cause.

> [!question]
> Polling in tight loops is burning CPU cycles and increasing costs with empty responses. How can you reduce the number of empty responses?
> 1. Set visibility Timeout to 20 seconds.
> 2. Set ReceiveMessageWaitTimeSeconds attribute to 20 seconds.
> 3. Set MessageRetentionPeriod attribute to 20 seconds.
> 4. Set DelaySeconds parameter to 20 seconds.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale**: Setting `ReceiveMessageWaitTimeSeconds` to a value between 1 and 20 enables [[SQS Overview#Long Polling|Long Polling]], which waits for messages to be available before responding to a poll request.

> [!question]
> A company has a fleet of EC2 instances pulling transcoding jobs from an SQS queue. How does SQS facilitate horizontal scaling?
> 1. SQS allows the producers and consumers to scale independently.
> 2. SQS provides a mechanism to automatically terminate unhealthy EC2 instances.
> 3. SQS guarantees that all instances receive the same job at the same time.
> 4. SQS limits the number of EC2 instances that can connect to the queue.
>
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale**: SQS allows the producers and consumers to scale independently. By monitoring the `ApproximateNumberOfMessagesVisible` metric, the Auto Scaling group can add more EC2 workers as the queue depth increases. This is a common application of [[SQS Overview|SQS]].

> [!question]
> How can you reduce the number of empty responses when polling an SQS queue?
> 1. By decreasing the visibility timeout of the messages in the queue.
> 2. By increasing the message retention period of the queue.
> 3. By enabling Long Polling by setting the `ReceiveMessageWaitTimeSeconds` to a value greater than 0 (up to 20 seconds).
> 4. By switching from Standard queues to FIFO queues.
>
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale**: Enable [[SQS Overview#Long Polling|Long Polling]] by setting the `ReceiveMessageWaitTimeSeconds` to a value greater than 0 (up to 20 seconds).
