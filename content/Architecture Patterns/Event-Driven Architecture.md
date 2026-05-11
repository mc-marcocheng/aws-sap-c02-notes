---
tags: [aws, sap-c02, architecture, integration]
---
# Event-Driven Architecture

Decoupled systems that communicate asynchronously through events.

## Key Patterns
- **Pub/Sub**: [[SNS]] or [[EventBridge]]. A publisher sends an event, and multiple independent subscribers react.
- **Queueing / Buffering**: [[SQS Overview|SQS]]. Absorbs bursts of traffic to protect downstream systems from being overwhelmed (e.g., Lambda or RDS).
- **Event Streaming**: [[Kinesis Overview|Kinesis]] or [[MSK]]. Ingests continuous data streams for real-time analytics.
- **Orchestration**: [[Step Functions]]. Manages complex workflows and state across multiple services.

> [!exam]
> Choose **EventBridge** over SNS for complex event routing, filtering, and integrations with SaaS applications. Choose **SQS** to decouple and buffer. Choose **Step Functions** when you need to orchestrate a workflow with error handling and retries.

## Related Notes
- [[_Integration Index|Integration Index]]
