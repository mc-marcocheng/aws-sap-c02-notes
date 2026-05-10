---
tags: [aws, sap-c02, sqs, integration, practice-questions]
---
# SQS Queue Types Practice Questions

> [!question]
> A restaurant reservation application needs the ability to maintain a waiting list. When a customer tries to reserve a table, and none are available, the customer must be put on the waiting list, and the application must notify the customer when a table becomes free. What service should the Solutions Architect recommend ensuring that the system respects the order in which the customer requests are put onto the waiting list?
> 1. Amazon SNS
> 2. AWS Lambda with sequential dispatch
> 3. A FIFO queue in Amazon SQS
> 4. A standard queue in Amazon SQS
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** [[SQS Queue Types#SQS FIFO Queues|FIFO (First-In-First-Out) queues]] are specifically designed to ensure that the order in which messages are sent and received is strictly preserved. In this scenario, maintaining the sequence of customer requests on a waiting list is critical. Standard queues only provide best-effort ordering, which might result in customers being notified out of their original joining sequence.

> [!question]
> A solutions architect is designing an application for a two-step order process. The first step is synchronous and must return to the user with little latency. The second step takes longer, so it will be implemented in a separate component. Orders must be processed exactly once and in the order in which they are received. How should the solutions architect integrate these components?
> 1. Use Amazon SQS FIFO queues.
> 2. Use an AWS Lambda function along with Amazon SQS standard queues.
> 3. Create an SNS topic and subscribe an Amazon SQS FIFO queue to that topic.
> 4. Create an SNS topic and subscribe an Amazon SQS Standard queue to that topic.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** The requirement explicitly states that orders must be processed "exactly once" and "in the order in which they are received." These are the two primary features of [[SQS Queue Types#SQS FIFO Queues|FIFO queues]]. Standard SQS queues offer at-least-once delivery (which could lead to duplicates) and best-effort ordering, failing both requirements. While SNS can be integrated with SQS, the core logic for ordering and deduplication resides within the FIFO queue configuration.
