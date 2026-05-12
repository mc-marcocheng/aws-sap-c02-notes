---
tags: [aws, sap-c02, lambda, compute, practice-questions]
---
# Lambda Practice Questions

> [!question]
> Your serverless architecture using AWS API Gateway, AWS Lambda, and AWS DynamoDB experienced a large increase in traffic to a sustained 400 requests per second, and dramatically increased in failure rates. Your requests, during normal operation, last 500 milliseconds on average. Your DynamoDB table did not exceed 50% of provisioned throughput, and Table primary keys are designed correctly. What is the most likely issue?
> 1. Your API Gateway deployment is throttling your requests.
> 2. Your AWS API Gateway Deployment is bottlenecking on request (de)serialization.
> 3. You did not request a limit increase on concurrent Lambda function executions.
> 4. You used Consistent Read requests on DynamoDB and are experiencing semaphore lock.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** [[API Gateway|AWS API Gateway]] by default throttles at 500 requests per second (RPS) steady-state and 1,000 RPS burst. Since the traffic is 400 RPS, API Gateway is likely not the bottleneck. [[Lambda|AWS Lambda]] has a default regional limit of concurrent executions. **Calculation**: If each request takes 500ms (0.5s), then 1 concurrent execution can handle 2 requests per second. To handle 400 RPS, you need `400 / 2 = 200` concurrent executions. If the concurrency limit is lower than 200 (for example, the default 100 which only supports 200 RPS), throttling will occur. A limit increase is necessary. (See also: [[DynamoDB Overview]])

> [!question]
> A latency-critical Java application is being migrated to AWS Lambda. The team is concerned about the "cold start" latency, which can be up to 10 seconds due to JVM initialization. The application traffic is highly predictable, with a sharp spike every hour. Which feature should they use to ensure that the functions are always warm and ready to respond within milliseconds?
> 1. Reserved Concurrency
> 2. **Provisioned Concurrency**
> 3. Lambda Destinations
> 4. Increase the function memory to 10 GB.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** **Provisioned Concurrency** (Option 2) initializes a specified number of execution environments in advance. This ensures that the application (including the JVM and any initialization code) is already warm when a request arrives, effectively eliminating cold start latency. Reserved Concurrency (Option 1) limits the maximum concurrency for a function but does not keep environments warm. Increasing memory (Option 4) can speed up initialization but doesn't eliminate the cold start itself. (See [[Lambda]])

> [!question]
> A company uses an asynchronous Lambda function to process events from an S3 bucket. They want to implement a solution where successful executions are logged to an SQS queue for further processing, and failed executions (after retries) are sent to a separate SNS topic for alerting. What is the MOST efficient way to implement this?
> 1. Write custom code in the Lambda function to send messages to SQS/SNS using the SDK.
> 2. Configure a Dead Letter Queue (DLQ) on the Lambda function for both success and failure.
> 3. Use **Lambda Destinations** to route execution results to SQS and SNS based on success/failure.
> 4. Use S3 Event Notifications to trigger separate Lambda functions for success and failure logging.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** **Lambda Destinations** (Option 3) is a feature for asynchronous invocations that natively handles routing the execution result (payload and metadata) to different AWS services based on whether the execution succeeded or failed. This requires no custom code and is more flexible than DLQs (Option 2), which only support failures. (See [[Lambda]])
