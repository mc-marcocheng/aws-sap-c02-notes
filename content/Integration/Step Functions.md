---
tags: [aws, sap-c02, integration, step-functions] 
---
# AWS Step Functions

A serverless visual workflow service used to orchestrate AWS services, automate business processes, and build serverless applications.

## Architectural Patterns
- **Saga Pattern:** Handle distributed transactions and rollbacks using compensation steps when a microservice fails.
- **Standard vs. Express Workflows:**
  - **Standard:** Long-running (up to 1 year), exactly-once execution. Good for non-idempotent actions.
  - **Express:** High-throughput, short-duration (up to 5 mins), at-least-once (default) execution. Good for IoT data ingestion, high-volume event processing.
- **Wait States & Callbacks:** Pause workflows for up to a year, wait for manual approval (`.waitForTaskToken`).

## Integration
- Native integration with hundreds of AWS APIs via Optimized Integrations or AWS SDK integrations.

> [!exam]
> Choose Step Functions over [[SQS Overview|SQS]] or [[EventBridge]] when you need complex orchestration, state management, complex branching/looping, or manual approval steps (Task Tokens).

## Related Services
- [[_Integration Index|Integration Index]]
- [[EventBridge]]
- [[SQS Overview|SQS]]
- [[Lambda]]

---
**Practice:** [[Step Functions - Practice Questions|Step Functions Practice Questions]]