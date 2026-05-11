---
tags: [aws, sap-c02, integration, appsync] 
---
# Amazon AppSync

Managed GraphQL service that simplifies application development by letting you create a flexible API to securely access, manipulate, and combine data from one or more data sources.

## Architectural Patterns
- **Unified API:** Combine [[DynamoDB Overview|DynamoDB]], [[Lambda]], [[OpenSearch]], and HTTP APIs into a single GraphQL endpoint.
- **Real-time Subscriptions:** Provides WebSockets for real-time updates (e.g., chat apps, dashboards).
- **Offline Sync:** Uses AWS Amplify to allow offline access and conflict resolution.

## Multi-Region Strategies
- Generally a regional service. Multi-region requires custom [[Route 53 Overview|Route 53]] routing policies and replicating backend data stores (e.g., DynamoDB Global Tables).

> [!exam]
> When asked to combine multiple microservices or data sources into a single API endpoint with minimal latency and minimal client requests, always choose AppSync (GraphQL).

## Related Services
- [[_Integration Index|Integration Index]]
- [[DynamoDB Overview|DynamoDB]]
- [[Lambda]]
- [[OpenSearch]]

---
**Practice:** [[AppSync - Practice Questions|AppSync Practice Questions]]