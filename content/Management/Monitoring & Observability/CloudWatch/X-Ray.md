---
tags: [aws, sap-c02, management, x-ray, observability]
---
# AWS X-Ray

AWS X-Ray helps developers analyze and debug production, distributed applications, such as those built using a microservices architecture. It allows you to understand how your application and its underlying services are performing to identify and troubleshoot the root cause of performance issues and errors.

## Key Features

- **End-to-End Tracing:** Follows user requests as they travel through your entire application.
- **Service Map:** Visualizes the relationships between services and highlights the health of each node.
- **Annotations and Metadata:** Annotations are indexed and can be used for filtering traces (e.g., `user_id`, `game_id`). Metadata is not indexed but allows you to store additional context (e.g., full request payload).
- **Sampling Rules:** Control the amount of data recorded to reduce costs without modifying code. Centralized sampling rules allow dynamic updates.

> [!important] Annotations vs. Metadata
> - **Annotations:** Key-value pairs that are **indexed** for use with filter expressions. Use them to search for traces.
> - **Metadata:** Key-value pairs with any data type, **not indexed**. Good for storing debug data you want to see when looking at a specific trace.

## Architecture & Integration

- **X-Ray Daemon:** A software application that listens for traffic on UDP port 2000, gathers raw segment data, and relays it to the X-Ray API.
- **[[Lambda|AWS Lambda]]:** Native integration. Just enable active tracing. The Lambda platform runs the X-Ray daemon automatically.
- **[[ECS|Amazon ECS]] / [[EKS]]:** You must run the X-Ray daemon as a sidecar container in your task definition or pod.
- **[[API Gateway]]:** Can capture traces of requests entering the API and pass the trace ID to backend integrations (like Lambda or HTTP endpoints).

> [!info] X-Ray Trace Header
> X-Ray passes the trace ID across services using the `X-Amzn-Trace-Id` HTTP header.

## Strategic Scenarios (SAP-C02)

### Scenario 1: Cross-Account Tracing
**Challenge:** You have microservices deployed across multiple AWS accounts and need a unified view in a single service map.
**Solution:** Configure the X-Ray daemon/SDK in source accounts to assume an IAM role in a central monitoring account to write trace data. X-Ray now supports cross-account observability out-of-the-box using **[[CloudWatch Overview|CloudWatch]] cross-account observability**, which links a monitoring account to source accounts.

### Scenario 2: High Traffic and Cost Optimization
**Challenge:** A high-throughput API is generating too many traces, leading to high X-Ray costs.
**Solution:** Use **Centralized Sampling Rules** in the X-Ray console to reduce the sampling rate (e.g., from 5% to 1%, or just 1 request per second and 5% thereafter) without redeploying code.

### Scenario 3: Identifying Bottlenecks
**Challenge:** Intermittent high latency in an ECS-based microservice environment interacting with [[DynamoDB Overview|DynamoDB]] and third-party APIs.
**Solution:** Instrument the code with the X-Ray SDK, deploy the X-Ray daemon as a sidecar on ECS tasks. Use the **Service Map** to identify which component (DynamoDB or external API) shows high latency (colored nodes/edges) and filter by subsegments.

> [!exam]
> If a question asks about searching logs or traces for specific business identifiers (like OrderID), the answer will almost certainly involve adding **Annotations** (not Metadata) in X-Ray, as annotations are indexed for search.

## Related Services
- [[_Management Index|Management Index]]
- [[CloudWatch Overview|CloudWatch]]
- [[ECS]]
- [[Lambda]]
- [[API Gateway]]

---
**Practice:** [[X-Ray - Practice Questions|AWS X-Ray Practice Questions]]
