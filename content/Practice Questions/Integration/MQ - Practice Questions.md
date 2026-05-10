---
tags: [aws, sap-c02, amazon-mq, practice-questions] 
---
# Amazon MQ Practice Questions

> [!question]
> A financial company is migrating a legacy on-premises application to AWS. The application uses a custom messaging framework built heavily on the Java Message Service (JMS) API and relies on XA transactions. The company has a strict deadline and no resources to rewrite the messaging logic. Which AWS service should they choose?
> 1. Amazon SQS with FIFO queues.
> 2. Amazon SNS with strict ordering enabled.
> 3. Amazon MQ for ActiveMQ.
> 4. Amazon EventBridge.
>
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** Amazon [[MQ|MQ]] natively supports industry-standard protocols and APIs like JMS, AMQP, and XA transactions (via ActiveMQ). It is designed for lift-and-shift migrations where rewriting the application code to use SQS/SNS is not feasible.

> [!question]
> An architect is designing an active/standby high-availability message broker architecture using Amazon MQ for ActiveMQ across two Availability Zones in a single AWS Region. What underlying storage mechanism provides the shared data synchronization between the active and standby brokers?
> 1. Amazon S3
> 2. Amazon EBS Multi-Attach
> 3. Amazon EFS
> 4. Amazon DynamoDB
>
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** In an Amazon [[MQ|MQ]] Active/Standby broker deployment for ActiveMQ, the brokers share an Amazon [[EFS|EFS]] (Elastic File System) storage volume. This allows the standby broker to seamlessly take over the storage state if the active broker fails.

> [!question]
> A company wants to connect multiple Amazon MQ (ActiveMQ) brokers deployed across different AWS Regions to allow messages produced in `us-east-1` to be consumed by applications in `eu-west-1`. How can this be natively achieved?
> 1. Configure a Cross-Region VPC Peering connection and set up a Network of Brokers.
> 2. Use AWS DataSync to replicate the underlying EFS file systems across regions.
> 3. Enable Amazon MQ Global Brokers.
> 4. Use Amazon SNS cross-region delivery to bridge the brokers.
>
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** ActiveMQ supports a "Network of Brokers" configuration, allowing multiple brokers to be interconnected. By establishing network connectivity (like [[VPC Peering]] or Transit Gateway) across regions, you can configure a Network of Brokers to forward messages globally.