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
> > **Rationale:** [[API Gateway Overview|AWS API Gateway]] by default throttles at 500 requests per second (RPS) steady-state and 1,000 RPS burst. Since the traffic is 400 RPS, API Gateway is likely not the bottleneck. [[Lambda Overview|AWS Lambda]] has a default regional limit of concurrent executions. **Calculation**: If each request takes 500ms (0.5s), then 1 concurrent execution can handle 2 requests per second. To handle 400 RPS, you need `400 / 2 = 200` concurrent executions. If the concurrency limit is lower than 200 (for example, the default 100 which only supports 200 RPS), throttling will occur. A limit increase is necessary. (See also: [[DynamoDB Overview]])
