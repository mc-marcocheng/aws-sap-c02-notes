---
tags: [aws, sap-c02, sns]
---
# Amazon Simple Notification Service (SNS)

Amazon SNS is a fully managed pub/sub messaging service that enables you to decouple microservices, distributed systems, and serverless applications.

## Core Concepts
- **Topics**: Logical access points and communication channels.
- **Publishers (Producers)**: Send messages to topics.
- **Subscribers (Consumers)**: Receive messages from topics via supported protocols.
- **Fan-out Pattern**: A message published to an SNS topic is distributed to multiple subscribing endpoints (SQS, Lambda, HTTP, etc.) for parallel processing.

## Supported Protocols and Endpoints
- **HTTP/HTTPS**: Post messages to webhooks.
- **Email / Email-JSON**: Send text or JSON objects to email addresses.
- **Amazon SQS**: Enqueue messages into SQS queues (highly reliable fan-out).
- **AWS Lambda**: Trigger functions for serverless processing.
- **Mobile Push**: Send notifications to mobile apps (APNS, GCM/FCM, ADM, etc.).
- **SMS**: Send text messages to phone numbers.
- **Kinesis Data Firehose**: Archive events to S3, Redshift, or OpenSearch.

![[sns-delivery-protocols.png]]

## Key Features
- **Message Filtering**: Subscribers can define filter policies so they only receive the messages they are interested in, rather than every message sent to the topic.
- **Message Fan-out**: One-to-many communication pattern.
- **Encryption**: Supports encryption at rest (KMS) and in transit (HTTPS).
- **Message Redrive (DLQ)**: Assign a Dead Letter Queue to a subscription to capture messages that couldn't be delivered.

## SNS vs. SQS
| Feature | Amazon SNS | Amazon SQS |
| --- | --- | --- |
| **Model** | Pub/Sub (Push) | Message Queue (Pull/Polling) |
| **Persistence** | No (lost if not delivered/retried) | Yes (1 min to 14 days) |
| **Consumers** | Multiple (Fan-out) | Single consumer per message (usually) |
| **Use Case** | Real-time notifications | Decoupling, load smoothing |

> [!exam]
> **Fan-out Architecture**: For SAP-C02, if you need to perform multiple independent actions in response to a single event (e.g., an S3 upload triggering a thumbnail generation AND an image analysis), use an **SNS Topic** with multiple **SQS Queues** subscribed to it.

---
**Practice:** [[SNS - Practice Questions|SNS Practice Questions]]