---
tags: [aws, sap-c02, eventbridge, practice-questions] 
---
# EventBridge Practice Questions

> [!question]
> A large enterprise has a multi-account AWS environment managed by AWS Organizations. The security team wants to monitor all AWS account root user login events across the entire organization in real-time and trigger an alert in a central Security account. What is the most efficient way to achieve this?
> 1. Create CloudWatch Alarms in each account and use SNS to notify the central account.
> 2. Use EventBridge in each member account to route root login events to a central EventBridge bus in the Security account.
> 3. Enable AWS CloudTrail organizational trail and query it using Athena every 5 minutes.
> 4. Use AWS Config rules to check for root login events and send them to SQS.
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[EventBridge]] excels at cross-account event routing. You can capture AWS API events (like root console logins) locally and route them directly to a centralized EventBridge bus in the security account for real-time alerting.

> [!question]
> A company is building an event-driven architecture. Different microservices publish events to a central event bus. The developers of the consuming microservices are struggling to understand the structure of the events they are subscribing to, leading to frequent parsing errors. Which AWS feature solves this problem with the least operational effort?
> 1. Create a centralized DynamoDB table documenting all event formats.
> 2. Enable Amazon EventBridge Schema Registry and Schema Discovery.
> 3. Route all events through a Lambda function to enforce a strict JSON schema.
> 4. Use AWS Glue Data Catalog to crawl the event payloads.
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[EventBridge]] Schema Registry with Schema Discovery automatically analyzes events on the bus, infers their schemas, and generates code bindings (for languages like Java/Python), allowing developers to interact with events as strongly typed objects without manual documentation.

> [!question]
> An e-commerce system publishes "OrderPlaced" events to Amazon EventBridge. A downstream fulfillment microservice went offline for 48 hours due to a critical bug, missing thousands of events. How can the architects ensure the fulfillment service processes the missed events after it is fixed?
> 1. Create a script to extract missed events from CloudTrail and republish them.
> 2. Enable EventBridge Event Archives for the event bus, and initiate an Event Replay for the affected timeframe.
> 3. Switch the architecture to use SQS instead of EventBridge to persist messages.
> 4. Restore a snapshot of the operational database and trigger a batch job.
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[EventBridge]] natively supports Event Archives (storing events for a defined retention period) and Event Replay, which allows replaying historical events from the archive to a specific rule or all rules.