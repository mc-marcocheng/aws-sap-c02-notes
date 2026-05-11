---
tags: [aws, sap-c02, integration, amazon-mq] 
---
# Amazon MQ

A managed message broker service for Apache ActiveMQ and RabbitMQ. 

## Architectural Patterns
- **Lift and Shift:** Use this when migrating legacy on-premises applications that rely on industry-standard APIs and protocols like JMS, NMS, AMQP, STOMP, MQTT, or WebSocket.
- **Broker Types:**
  - **Single-instance:** Good for dev/test. No high availability.
  - **Active/Standby:** High availability across two AZs using a shared Amazon [[EFS]] volume (ActiveMQ) or cluster nodes (RabbitMQ).
  - **Network of Brokers (ActiveMQ):** For high throughput and multi-region messaging architectures.

## vs SQS/SNS
- AWS native new applications should use [[SQS Overview|SQS]] or [[SNS]].
- Use Amazon MQ *only* if the application requires specific AMQP/JMS features (like distributed transactions, message selectors, message ordering across multiple consumers) or if rewriting the code to use AWS SDKs is not possible.

> [!exam]
> If a question mentions "JMS", "AMQP", "migrating legacy application without rewriting code", or "ActiveMQ/RabbitMQ", the answer is almost always Amazon MQ.

## Related Services
- [[_Integration Index|Integration Index]]
- [[SQS Overview|SQS]]
- [[SNS]]
- [[EventBridge]]

---
**Practice:** [[MQ - Practice Questions|Amazon MQ Practice Questions]]