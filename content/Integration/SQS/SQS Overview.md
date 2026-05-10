---
tags: [aws, sap-c02, integration, sqs]
---
# Amazon Simple Queue Service (SQS)

Amazon SQS is a fully managed message queuing service that enables you to decouple and scale microservices, distributed systems, and serverless applications.

## Queue Types

| Feature | Standard Queue | FIFO Queue |
| --- | --- | --- |
| **Throughput** | Nearly unlimited | Up to 3,000 mps (with batching) |
| **Delivery** | At-least-once | Exactly-once |
| **Ordering** | Best-effort | First-In-First-Out (Strict) |
| **Use Case** | General decoupling, high throughput | Transactional order, no duplicates |

## Core Concepts
- **Visibility Timeout**: The period during which SQS prevents other consumers from receiving and processing a message. Default is 30 seconds.
- **Dead-Letter Queues (DLQ)**: A separate queue for messages that cannot be processed successfully after a maximum number of retries.
- **Short Polling**: Returns a response immediately, even if the queue is empty.
- **Long Polling**: Waits up to 20 seconds for a message to arrive, reducing empty responses and costs.
- **Message Retention**: Default is 4 days; range is 1 minute to 14 days.

## SQS Design Patterns

### 1. Fan-out Pattern
Combine SQS with **SNS**. SNS pushes a message to multiple SQS queues simultaneously.
![[sqs-batch-processing-architecture.jpg]]

### 2. Priority Queue Pattern
Use multiple SQS queues for different priority levels (e.g., High, Medium, Low). The consumer polls the High-priority queue first.
![[sqs-priority-queue-pattern.png]]

### 3. Job Observer Pattern
Scale a fleet of EC2 workers based on the number of messages in the queue using Auto Scaling and CloudWatch alarms.
![[job-observer-pattern-with-sqs.png]]

## Security and Reliability
- **Encryption**: Supports SSE at rest (KMS) and TLS in transit.
- **Access Control**: Use IAM policies and SQS Resource-based policies.
- **Durability**: Messages are stored redundantly across multiple Availability Zones.

> [!exam]
> **SAP-C02 Decision: SQS vs. Kinesis**
> - Use **SQS** for simple decoupling, worker/job queues, and when you want a message to be deleted after processing.
> - Use **Kinesis Data Streams** for large-scale data ingestion, real-time analytics, and when multiple consumers need to read the same stream independently.

## Related Services
- [[_Integration Index|Integration Index]]
- [[SNS]]
- [[EventBridge]]
- [[Lambda]]

---
**Practice:** [[SQS - Practice Questions|SQS Practice Questions]]