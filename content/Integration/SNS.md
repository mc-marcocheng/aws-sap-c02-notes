---
tags: [aws, sap-c02, integration, sns]
---
# Amazon Simple Notification Service (SNS)

Fully managed pub/sub messaging service for decoupling microservices, distributed systems, and serverless applications.

## Core Concepts
- **Topics:** Logical access points/channels.
- **Publishers:** Send messages to topics.
- **Subscribers:** Receive messages via SQS, Lambda, HTTP, Email, SMS, or Mobile Push.
- **Fan-out:** One message distributed to multiple subscribers for parallel processing.

## Key Features
- **Message Filtering:** Subscribers set filter policies based on message attributes. Only matching messages are delivered. **Benefit:** Reduces costs and unnecessary processing (e.g., Lambda invocations).
- **SNS FIFO Topics:** Paired with **SQS FIFO Queues** to ensure ordered, deduplicated delivery across multiple subscribers.
- **Encryption:** Encryption at rest ([[KMS]]) and in transit.
- **Message Redrive (DLQ):** Capture failed deliveries at the subscription level.

## Architecture Patterns
- **SNS + SQS Fan-out:** One SNS topic fans out to multiple SQS queues.
  - **Benefit:** Parallel processing where each consumer has its own queue, providing independent retries, visibility timeouts, and **Dead Letter Queues (DLQs)**.
- **S3 Event Notifications:** S3 can publish events to SNS to trigger multiple downstream workflows.

![[sns-delivery-protocols.png]]

## Comparison: SNS vs. SQS
| Feature | Amazon SNS | Amazon SQS |
| :--- | :--- | :--- |
| **Model** | Pub/Sub (Push) | Message Queue (Pull/Polling) |
| **Persistence** | No (messages ephemeral) | Yes (up to 14 days) |
| **Consumers** | Multiple (Fan-out) | Single consumer per message |
| **Use Case** | Real-time notifications | Decoupling, load smoothing |

> [!exam]
> For the SAP-C02, if you need **parallel processing** of the same message by multiple different systems with **independent failure handling**, use the **SNS + SQS Fan-out pattern**.

## Related Services
- [[_Integration Index|Integration Index]]
- [[SQS Overview|SQS]]
- [[Lambda]]
- [[EventBridge]]

---
**Practice:** [[SNS - Practice Questions|SNS Practice Questions]]