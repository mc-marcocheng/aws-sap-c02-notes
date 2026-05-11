---
tags: [aws, sap-c02, integration, appsync] 
---
# Amazon AppSync

**AppSync = managed GraphQL**. Provides a single endpoint to securely access, manipulate, and combine data from multiple sources.

## Core Features
- **Resolvers:** Connect GraphQL fields to data sources including [[DynamoDB Overview|DynamoDB]], [[Lambda]], [[RDS Overview|RDS]], HTTP APIs, and [[OpenSearch]].
- **Pipeline Resolvers:** Allow chaining multiple data sources (functions) per query to execute complex logic.
- **Real-time Subscriptions:** Native support for real-time updates via **WebSockets**.
- **Caching:** Supports server-side caching to reduce resolver invocations and improve performance.
- **Merged APIs:** Combines multiple source AppSync APIs into a single Merged API endpoint (ideal for microservices patterns).

## Architectural Patterns
- **Unified API:** Combine multiple backend services into a single GraphQL endpoint.
- **Offline Sync:** Uses AWS Amplify to allow offline access and conflict resolution.

## Multi-Region Strategies
- Generally a regional service. Multi-region requires custom [[Route 53 Overview|Route 53]] routing policies and replicating backend data stores (e.g., DynamoDB Global Tables).

> [!exam]
> Choose AppSync for:
> 1. Combining multiple microservices/data sources into one endpoint.
> 2. Real-time data requirements (WebSockets).
> 3. Complex queries requiring data from multiple sources in a single request.

## Related Services
- [[_Integration Index|Integration Index]]
- [[DynamoDB Overview|DynamoDB]]
- [[Lambda]]
- [[OpenSearch]]

---
**Practice:** [[AppSync - Practice Questions|AppSync Practice Questions]]