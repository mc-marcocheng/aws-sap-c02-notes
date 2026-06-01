---
tags: [compute, aws, sap-c02, lambda]
---
# Lambda Overview

AWS Lambda is a serverless, event-driven compute service that lets you run code for virtually any type of application or backend service without provisioning or managing servers. You only pay for compute time, billed per request and per millisecond of execution.

## Core Concepts

| Feature | Description |
| :--- | :--- |
| **Serverless** | No servers to manage; automatic scaling and high availability. Runs on Firecracker microVMs. |
| **Event-Driven** | Triggered by changes in data, state shifts, or user actions. Connects natively with 220+ AWS services. |
| **Cost** | Pay only for duration (GB-seconds) and number of requests. |
| **Isolation** | Each function runs in its own execution environment. |
| **Deployments**| Deploy as ZIP packages or container images (up to 10 GB from ECR). |

> [!info] **Resource Allocation & Scaling**
> - Memory ranges from 128 MB to 10,240 MB (10 GB).
> - **CPU, network, and I/O scale linearly with memory**. At 1,769 MB, you get the equivalent of 1 full vCPU.
> - Supports diverse languages (Node.js, Python, Java, .NET, Go, Ruby, PowerShell) and architectures (x86, Graviton2).

---
## Advanced Architecture Options

### Lambda Managed Instances (New)
A compute mode allowing you to run Lambda functions on specific, fully managed Amazon EC2 instances (including GPUs and Graviton4), bridging serverless simplicity with hardware control.
- **Multiconcurrency:** A single instance processes multiple requests simultaneously, maximizing utilization (unlike standard Lambda's one-request-per-environment).
- **Cost Structure:** You pay standard EC2 rates (eligible for Savings Plans) + ~15% management fee + request charges ($0.20/1M). **No per-millisecond duration charge.**
- **Use Case:** High-volume, predictable workloads, AI/ML inference requiring GPUs, or when you need zero cold starts (instances are pre-provisioned).

### Lambda Function URLs
Launch a secure, dedicated HTTPS endpoint for a Lambda function without requiring API Gateway.
- Publicly accessible by default (`https://<url-id>.lambda-url.<region>.on.aws`).
- **Auth Options:** `AWS_IAM` (requires IAM permissions) or `NONE` (open to the internet).
- Supports CORS configuration via resource-based policies.
- Cannot be accessed via AWS PrivateLink (VPC Endpoints); traffic traverses the public internet.

---
## Invocation Types

> [!info] **Sync vs. Async**
> - **Synchronous**: Caller waits for response (e.g., API Gateway, ALB, Cognito, Kinesis Data Firehose). Retries are the responsibility of the client.
> - **Asynchronous**: Lambda queues the event and returns a 202 Accepted immediately (e.g., S3, SNS, EventBridge). Lambda retries automatically. Supports **Destinations** for success/failure. Payload limit is 256 KB.
> - **Event Source Mapping**: Lambda polls a source (e.g., Kinesis, DynamoDB, SQS, MQ, MSK) and invokes synchronously. Can apply event-filtering to reduce invocations.

---
## Networking, Storage, and Security

### VPC Integration
- By default, Lambda runs securely within an AWS-managed VPC.
- **VPC Access**: Providing subnet and security group IDs creates **Hyperplane ENIs** in your private subnets, enabling access to resources like RDS or ElastiCache.
- > [!important] **Note**: To access the internet from a VPC-connected Lambda, you **must** have a NAT Gateway/Instance in a public subnet.

### Storage
- Can mount **Amazon EFS** for secure, persistent, shared storage across concurrent executions.
- Ephemeral storage (`/tmp`) is configurable between 512 MB and 10 GB.

### Security & State
- **Stateless:** Functions have no affinity to underlying servers.
- **Execution Role**: IAM role that grants the function permission to access AWS services.
- **Resource-based Policy**: Controls which services/accounts can *invoke* the function (used for Function URLs and API Gateway integrations).
- **Environment Variables**: Always encrypted at rest. Use Secrets Manager or KMS for sensitive data.

---
## Performance Optimization

- **Cold Starts**: Latency when a new execution environment is created.
- **Provisioned Concurrency**: Keeps a specified number of environments initialized. **Pricing Note**: Eliminates cold starts, but you pay for pre-warmed environments even when idle.
- **Reserved Concurrency:** Guarantees a set number of concurrent executions for a function and prevents it from scaling beyond that limit (acts as a throttle).
- **Lambda SnapStart**: Dramatically reduces cold starts for **Java, Python, and .NET** functions by reusing a single initialized snapshot. No additional cost; removes the need for complex optimizations.

---
## SAP-C02 Strategic Considerations

> [!important] **Lambda@Edge vs. CloudFront Functions**
> See detailed comparison in [[CloudFront Edge Functions|CloudFront Edge Notes]].
> - **Lambda@Edge**: Full runtime support, network access, executes in Regional Edge Caches. Good for complex logic.
> - **CloudFront Functions**: JavaScript only, no network access, executes in Edge Locations (sub-millisecond).

> [!important] **Limits and Timeouts**
> - **Timeout**: Maximum of 15 minutes. If processing exceeds this, use **Step Functions** or **Fargate**.
> - **Payload Size**: 6MB (Synchronous), 256KB (Asynchronous).

> [!important] **Database Connectivity**
> Use **RDS Proxy** to manage a pool of database connections, as Lambda can easily overwhelm RDS with too many concurrent connections during scaling.

---
### Exam Focus: Scenarios

> [!exam] **Scenario: Processing High-Volume Streams**
> Use Lambda with **Kinesis Data Streams** or DynamoDB Streams via Event Source Mapping. Adjust **Batch Size** and **Batch Window** to optimize throughput vs. latency.

> [!exam] **Scenario: Orchestrating Complex Workflows**
> Don't chain Lambda functions directly. Use **AWS Step Functions** to manage state, retries, and error handling for multi-step processes.

---
## Related Services
- [[_Compute Index|Compute Index]]
- [[VPC Overview]]
- [[S3 Overview]]
- [[DynamoDB Overview]]
- [[ALB Overview]]
- [[RDS Overview]]

---
**Practice:** [[Lambda - Practice Questions|Lambda Practice Questions]]