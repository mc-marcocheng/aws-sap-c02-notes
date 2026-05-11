---
tags: [aws, sap-c02, integration, sqs]
---
# Amazon Simple Queue Service (SQS)

Fully managed message queuing service for decoupling and scaling microservices and serverless applications.

## Queue Types

| Feature | Standard Queue | FIFO Queue |
| :--- | :--- | :--- |
| **Throughput** | Nearly unlimited | **300 msg/s (no batching), 3,000 msg/s (batching)** |
| **Delivery** | At-least-once | Exactly-once |
| **Ordering** | Best-effort | First-In-First-Out (Strict) |
| **Scaling FIFO** | N/A | Use **Message Group IDs** to parallelize processing |

## Core Concepts
- **Visibility Timeout:** Period where a message is hidden from other consumers. Default 30s.
- **Long Polling:** Reduces costs and empty responses by waiting up to 20s for messages.
- **Dead-Letter Queues (DLQ):** Messages move to DLQ after exceeding the `maxReceiveCount`. 
  - **Config:** Requires a **Redrive Policy** on the source queue and a **Redrive Allow Policy** on the DLQ to control which queues can move messages to it.
- **Temporary Queues:** (Virtual Queues) Used for request-response patterns to reduce cost and management of many short-lived queues.

## SQS Design Patterns

### 1. Fan-out Pattern
SNS topic pushes to multiple SQS queues for parallel processing.
![[sqs-batch-processing-architecture.jpg]]

### 2. Priority Queue Pattern
High and Low priority queues. Consumers poll high-priority first.
![[sqs-priority-queue-pattern.png]]

### 3. Job Observer Pattern
Scale EC2 or Lambda based on `ApproximateNumberOfMessagesVisible`.
![[job-observer-pattern-with-sqs.png]]

> [!exam]
> **Key Differentiator:** Use **SQS FIFO** when order matters and you must avoid duplicates. Use **Standard** for maximum throughput. Use **Kinesis** if multiple consumers need to read the same data stream at different offsets.

## Related Services
- [[_Integration Index|Integration Index]]
- [[SNS]]
- [[Lambda]]

---
**Practice:** [[SQS - Practice Questions|SQS Practice Questions]]