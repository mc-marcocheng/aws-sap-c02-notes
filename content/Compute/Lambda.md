---
tags: ['aws', 'sap-c02', 'lambda']
---
# Lambda Overview

AWS Lambda is a serverless, event-driven compute service that lets you run code for virtually any type of application or backend service without provisioning or managing servers.

## Core Concepts

| Feature | Description |
| :--- | :--- |
| **Serverless** | No servers to manage; automatic scaling and high availability. |
| **Event-Driven** | Triggered by changes in data, state shifts, or user actions. |
| **Cost** | Pay only for duration (GB-seconds) and number of requests. |
| **Isolation** | Each function runs in its own execution environment. |

---
## Invocation Types

> [!info] **Sync vs. Async**
> - **Synchronous**: Caller waits for response (e.g., API Gateway, SDK). Retries are the responsibility of the client.
> - **Asynchronous**: Lambda queues the event and returns success immediately (e.g., S3, SNS). Lambda retries twice automatically. Supports **Destinations** (SQS, SNS, Lambda, EventBridge) for success/failure.
> - **Event Source Mapping**: Lambda polls a source (e.g., Kinesis, DynamoDB Streams, SQS) and invokes the function.

---
## Networking and Security

### VPC Integration
- By default, Lambda runs in a service-owned VPC with internet access but no access to your private resources.
- **VPC Access**: Configuring Lambda to access your VPC creates **Hyperplane ENIs**. 
- > [!important] **Note**: To access the internet from a VPC-connected Lambda, you **must** have a NAT Gateway or NAT Instance in a public subnet.

### Security
- **Execution Role**: IAM role that grants the function permission to access AWS services.
- **Resource-based Policy**: Controls which services/accounts can *invoke* the function.
- **Environment Variables**: Use **Secrets Manager** or **KMS** to encrypt sensitive data (passwords, API keys).

---
## Performance Optimization

- **Cold Starts**: Latency when a new execution environment is created.
- **Provisioned Concurrency**: Keeps a specified number of environments "warm" to eliminate cold starts for latency-sensitive apps.
- **Memory Allocation**: CPU power scales linearly with memory. Increasing memory can often reduce duration and total cost.

---
## SAP-C02 Strategic Considerations

> [!important] **Lambda@Edge vs. CloudFront Functions**
> - **Lambda@Edge**: Full Node.js/Python, supports network access, long execution (up to 30s). Good for complex logic at the edge.
> - **CloudFront Functions**: JavaScript only, no network access, sub-millisecond execution. Good for header manipulation, URL rewrites.

> [!important] **Database Connectivity**
> Use **RDS Proxy** to manage a pool of database connections, as Lambda can easily overwhelm RDS with too many concurrent connections during scaling.

---
### Exam Focus: Scenarios

> [!exam] **Scenario: Processing High-Volume Streams**
> Use Lambda with **Kinesis Data Streams**. Adjust **Batch Size** and **Batch Window** to optimize throughput vs. latency. Use **Parallelization Factor** to process one shard with multiple concurrent Lambda invocations.

> [!exam] **Scenario: Orchestrating Complex Workflows**
> Don't chain Lambda functions directly. Use **AWS Step Functions** to manage state, retries, and error handling for multi-step processes.

---
## Related Links
- [[VPC Overview]]
- [[S3 Overview]]
- [[DynamoDB Overview]]
- [[ALB Overview]]
- [[RDS Overview]]

---
**Practice:** [[Lambda - Practice Questions|Lambda Practice Questions]]