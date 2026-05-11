---
tags: [aws, sap-c02, integration, eventbridge] 
---
# Amazon EventBridge

A serverless event bus that connects applications using data from your own apps, SaaS apps, and AWS services. Formerly known as CloudWatch Events.

## Core Features
- **Event Bus:** Default bus (AWS services), Custom bus (your apps), and SaaS bus (3rd party).
- **Rules:** Match incoming events and route them to targets. Supports **Content-based Filtering** (JSON).
- **Event Replay & Archive:** Archive events and replay them later for debugging or reprocessing. **Unique feature vs SNS/SQS**.
- **Schema Registry:** Auto-discovers event schemas and generates code bindings for developers.

## Comparison: EventBridge vs SNS vs SQS

| Service | Architecture | Best For |
| :--- | :--- | :--- |
| **EventBridge** | Event Bus | Complex routing, content filtering, SaaS integration, Many-to-Many. |
| **SNS** | Pub/Sub | High-throughput fan-out, simple topic-based notifications, Many-to-Many. |
| **SQS** | Queuing | Decoupling, point-to-point, load leveling, Point-to-Point. |

## Architectural Patterns
- **Choreography:** Decouple microservices by publishing events; services independently subscribe via Rules.
- **Cross-Account/Cross-Region:** Route events between accounts/regions for centralized processing.

> [!exam]
> Choose EventBridge for:
> 1. Content-based routing (filtering on JSON body, not just attributes).
> 2. Integrating with SaaS applications (Zendesk, Datadog, etc.).
> 3. Scenarios requiring Event Replay capabilities.

## Related Services
- [[_Integration Index|Integration Index]]
- [[SNS]]
- [[SQS Overview|SQS]]
- [[Lambda]]

---
**Practice:** [[EventBridge - Practice Questions|EventBridge Practice Questions]]