---
tags: [aws, sap-c02, eventbridge] 
---
# Amazon EventBridge

A serverless event bus that makes it easy to connect applications together using data from your own applications, integrated SaaS applications, and AWS services.

## Architectural Patterns
- **Choreography:** Decouple microservices by publishing events to an event bus. Services independently subscribe to events using Rules.
- **Cross-Account/Cross-Region:** Easily route events between different AWS accounts or regions for centralized auditing or disaster recovery.
- **Event Replay & Archive:** Archive events and replay them later to recover from downstream failures or to test new features.

## Limits and Features
- **Schema Registry:** Automatically discover and store event schemas. Download code bindings (Java, Python, TypeScript) to use strongly-typed event objects.
- Uses standard JSON event formats.

> [!exam]
> If a scenario mentions decoupling microservices asynchronously where multiple unknown targets might need to react to a single state change, or routing events based on JSON content (content-based filtering), choose EventBridge over [[SNS]] or [[SQS Overview|SQS]].

---
**Practice:** [[EventBridge - Practice Questions|EventBridge Practice Questions]]