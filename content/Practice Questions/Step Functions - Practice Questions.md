---
tags: [aws, sap-c02, step-functions, practice-questions] 
---
# Step Functions Practice Questions

> [!question]
> A company is migrating a multi-step order fulfillment process to a serverless architecture. The process involves charging a credit card, updating inventory, and shipping the item. If the inventory update fails, the credit card charge must be refunded. The process can take several days due to manual fraud review steps. Which service is best suited for this?
> 1. SQS with Dead Letter Queues and long polling.
> 2. AWS Step Functions Standard Workflows.
> 3. Amazon EventBridge with rules triggering Lambda.
> 4. AWS Step Functions Express Workflows.
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[Step Functions]] Standard Workflows support long-running processes (up to 1 year), manual approvals via task tokens, and the Saga pattern for compensating transactions (refunding the card if a subsequent step fails). Express workflows max out at 5 minutes.

> [!question]
> A high-volume IoT application ingests thousands of messages per second. Each message requires a rapid sequence of transformations and validations using Lambda functions before being saved to DynamoDB. The processing must complete within seconds. What is the most cost-effective orchestration method?
> 1. Standard Step Functions triggered by IoT Core.
> 2. Express Step Functions triggered by EventBridge.
> 3. Amazon Kinesis Data Streams directly invoking Lambda.
> 4. Amazon MQ with standard queues.
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** For high-throughput, short-running (under 5 minutes) workflows, [[Step Functions]] Express Workflows are much more cost-effective and scale faster than Standard Workflows. They are ideal for rapid data transformation pipelines.

> [!question]
> A data processing pipeline uses AWS Step Functions. One step invokes an AWS Batch job that takes several hours to complete. How can the state machine efficiently wait for the Batch job to finish without incurring unnecessary charges?
> 1. Use a `Wait` state and poll the Batch API every 5 minutes using a Lambda function.
> 2. Use the Service Integration Pattern with `.sync` (Run a Job) for the AWS Batch integration.
> 3. Use an Express Workflow to avoid paying for idle wait time.
> 4. Send an SNS notification from Batch back to the Step Functions execution ARN.
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[Step Functions]] provides optimized integrations. By using the `.sync` suffix (Run a Job pattern), Step Functions natively waits for the AWS [[AWS Batch|Batch]] job to complete before moving to the next state, requiring zero polling or custom code.