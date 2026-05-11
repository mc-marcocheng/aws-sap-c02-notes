---
tags: [aws, sap-c02, integration, step-functions] 
---
# AWS Step Functions

Serverless visual workflow orchestrator for AWS services and business processes.

## Workflow Types

| Feature | Standard Workflow | Express Workflow |
| :--- | :--- | :--- |
| **Duration** | Up to **1 year** | Up to **5 minutes** |
| **Execution Model** | Exactly-once | At-least-once |
| **Throughput** | Lower (< 2k/sec) | **High (> 100k/sec)** |
| **Pricing** | Per State Transition | Per Execution (Duration/Memory) |
| **Best For** | Long-running, auditable tasks. | High-volume, short-lived tasks. |

## Core Features
- **Service Integrations:** Directly call **200+ AWS services** (e.g., [[DynamoDB Overview|DynamoDB]], [[ECS]], Glue, SageMaker) **without using Lambda**. Reduces cost and complexity.
- **Callback Pattern (`.waitForTaskToken`):** Pauses execution until an external system (or human) returns a task token. Ideal for **manual approvals**.
- **Error Handling:** Built-in **Retry** with exponential backoff and **Catch** (try/catch logic) to handle service failures gracefully without custom code.

## Architectural Patterns
- **Saga Pattern:** Coordinates distributed transactions across microservices with compensating steps for rollbacks.
- **Wait States:** Pause execution for a specific duration or until a timestamp.

> [!exam]
> Choose Step Functions when you need:
> 1. Complex branching, looping, or state management.
> 2. **Manual approval** steps (Callback pattern).
> 3. Orchestration that must persist for up to a year.
> 4. To simplify architectures by removing "glue" Lambda functions.

## Related Services
- [[_Integration Index|Integration Index]]
- [[EventBridge]]
- [[SQS Overview|SQS]]
- [[Lambda]]

---
**Practice:** [[Step Functions - Practice Questions|Step Functions Practice Questions]]