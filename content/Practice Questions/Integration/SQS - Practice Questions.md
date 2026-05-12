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
> > **Rationale**: SQS decouples the producers (on-premise systems) from the consumers (EC2 worker instances). This allows the fleet of worker instances to scale horizontally based on the number of messages in the queue (load), ensuring efficient processing of transcoding jobs. This is a classic [[SQS Overview#SQS Design Patterns|SQS Use Case]].

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
> > **Rationale**: When a message is received by a consumer, it remains in the queue but is "hidden" from other consumers for the duration of the [[SQS Overview#Core Concepts|visibility timeout]]. If the consumer processes and deletes the message within this window, it won't be processed again.

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
> Which statement about SQS Standard Queues is true?
> 1. Messages will be delivered exactly once and in FIFO order.
> 2. Messages will be delivered exactly once and order is indeterminate.
> 3. Messages will be delivered one or more times and in FIFO order.
> 4. Messages will be delivered one or more times and order is indeterminate.
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale**: [[SQS Overview#Queue Types|Standard queues]] provide "at-least-once" delivery (meaning messages can occasionally be delivered more than once) and "best-effort ordering" (meaning order is not guaranteed).

> [!question]
> When a task takes 5 minutes to complete, which process results in successful processing while minimizing duplicate processing?
> 1. Retrieve the message with an increased visibility timeout, process the message, delete the message from the queue.
> 2. Retrieve the message with an increased visibility timeout, delete the message from the queue, process the message.
> 3. Retrieve the message with increased DelaySeconds, process the message, delete the message from the queue.
> 4. Retrieve the message with increased DelaySeconds, delete the message from the queue, process the message.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale**: Increasing the [[SQS Overview#Core Concepts|visibility timeout]] ensures the message remains hidden until the 5-minute task is complete. Deleting it *after* processing ensures it was successful. Deleting *before* processing risks data loss if the task fails.

> [!question]
> You are getting a lot of empty receive requests when using Amazon SQS. How can you reduce this load?
> 1. Subscribe your queue to an SNS topic.
> 2. Use as long of a poll as possible, instead of short polls.
> 3. Alter your visibility timeout to be shorter.
> 4. Use sqsd on your EC2 instances.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale**: [[SQS Overview#Core Concepts|Long Polling]] (up to 20 seconds) reduces the number of empty responses by waiting for a message to arrive in the queue before returning a response, thus reducing API calls and costs.

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
> A company needs to process large messages (up to 2 GB) using SQS. Since the native SQS message size limit is 256 KB, how should they implement this?
> 1. Use the SQS Extended Client Library for Java and Amazon S3.
> 2. Use SNS to send the message payload as an email attachment.
> 3. Split the message into multiple 256 KB chunks and reassemble them at the consumer.
> 4. Use Amazon MQ instead of SQS.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** The **SQS Extended Client Library** (Option 1) is the standard way to handle large message payloads. It automatically stores the message data in an [[S3 Overview|Amazon S3]] bucket and sends a pointer to the data in the SQS message. The consumer library then automatically retrieves the data from S3. Option 3 is complex to manage. Option 4 has a 256 KB limit as well for some protocols. (See [[SQS Overview]])

> [!question]
> A solutions architect is designing a system where a single event must trigger three different downstream processes. Each downstream process must receive a copy of the event and operate independently. Which AWS integration pattern should be used?
> 1. Send the event to an SQS queue and have three different consumers poll the same queue.
> 2. Send the event to an **SNS topic** and subscribe three different **SQS queues** to that topic.
> 3. Use an SQS FIFO queue with three different Message Group IDs.
> 4. Use a Step Functions state machine with a Parallel state.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** This is the **Fan-out Pattern** (Option 2). By publishing to an [[SNS]] topic and subscribing multiple [[SQS Overview|SQS]] queues, each subscriber gets its own copy of the message to process at its own pace. Option 1 is incorrect because SQS messages are only delivered to one consumer at a time (unless they fail). Option 4 is valid but much more complex for simple event distribution. (See [[SQS Overview]])
