---
tags: [aws, sap-c02, sqs]
---
# SQS Queue Types: Standard vs. FIFO

Choosing the right SQS queue type is critical for balancing performance, cost, and architectural requirements.

## Comparison Table

| Feature | Standard Queue | FIFO Queue |
| --- | --- | --- |
| **Message Order** | Best-effort | Strict (First-In-First-Out) |
| **Delivery Guarantee** | At-least-once | Exactly-once |
| **Duplicates** | May occur occasionally | Not allowed (Deduplication ID) |
| **Throughput** | Unlimited | 300/s (Standard), 3,000/s (Batching) |
| **Naming** | Any name | Must end in `.fifo` |

![[sqs-standard-vs-fifo-queues.jpg]]

## SQS Standard Queues
- **High Throughput**: Supports a nearly unlimited number of transactions per second.
- **At-Least-Once Delivery**: A message is delivered at least once, but occasionally more than one copy of a message is delivered.
- **Best-Effort Ordering**: Messages are generally delivered in the same order they are sent, but order is not guaranteed.

## SQS FIFO Queues
- **Exactly-Once Processing**: SQS uses a message deduplication ID to ensure a message is processed only once.
- **Strict Ordering**: The order in which messages are sent and received is strictly preserved.
- **Message Group ID**: Allows multiple ordered message streams within a single queue (parallel processing of independent ordered groups).

## Use Cases

### Standard Queue Use Cases
- Decoupling user uploads from backend processing (e.g., resizing images).
- Distributing tasks across a large worker fleet where order doesn't matter.
- Buffering requests to smooth out traffic spikes.

### FIFO Queue Use Cases
- **Financial Transactions**: Ensuring credits and debits happen in the correct order.
- **Inventory Management**: Preventing an item from being sold twice or out of sequence.
- **User Commands**: Ensuring that a series of user actions (e.g., "Delete Account" followed by "Create Account") occurs in the right order.

> [!important] FIFO Limitations
> FIFO queues are not supported by all AWS services as triggers (e.g., S3 Event Notifications). Always verify service integration before choosing FIFO.

> [!exam]
> **SAP-C02 Scenario**: If a question mentions "Exactly-once processing" or "Strict ordering" of messages for a backend workflow, the answer is almost always **SQS FIFO**.

---
**Practice:** [[SQS Queue Types - Practice Questions|SQS Queue Types Practice Questions]]