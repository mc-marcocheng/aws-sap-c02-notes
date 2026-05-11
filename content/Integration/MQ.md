---
tags: [aws, sap-c02, integration, amazon-mq] 
---
# Amazon MQ

Managed message broker service for **Apache ActiveMQ** and **RabbitMQ**.

## Key Decision Points
- **Migration Strategy:** Use Amazon MQ when migrating on-premises applications relying on industry-standard protocols (**JMS, AMQP, MQTT, STOMP, WSS**).
- **New Development:** If building "cloud-native," prefer [[SNS]] + [[SQS Overview|SQS]] due to their superior scalability and serverless nature.
- **Protocol Requirements:** Choose Amazon MQ if JMS features like message selectors or distributed transactions are required.

## Deployment Modes
- **Single-instance:** Used for development or testing; no HA.
- **Active/Standby:** Provides High Availability (HA) across Availability Zones. 
  - **ActiveMQ:** Uses a shared **[[EFS]]** volume for data persistence.
  - **RabbitMQ:** Uses a cluster of nodes with data replicated across them.

> [!exam]
> If the scenario mentions **"migrating from on-premises ActiveMQ/RabbitMQ"** or explicitly names protocols like **JMS/AMQP**, the answer is **Amazon MQ**. If the goal is "cloud-native decoupling," prefer SNS/SQS.

## Related Services
- [[_Integration Index|Integration Index]]
- [[SQS Overview|SQS]]
- [[SNS]]
- [[EFS]]

---
**Practice:** [[MQ - Practice Questions|Amazon MQ Practice Questions]]