---
tags: [aws, sap-c02, networking, api-gateway]
---
# API Gateway Overview

AWS API Gateway is a fully managed service that makes it easy for developers to create, publish, maintain, monitor, and secure APIs at any scale.

## Endpoint Types

| Type | Description | Best Use Case |
| --- | --- | --- |
| **Edge-optimized** | Routes traffic to the nearest CloudFront PoP. | Geographically distributed clients. |
| **Regional** | For clients in the same region. | Lower latency for regional resources (e.g., EC2 in same region). |
| **Private** | Accessible only from within a VPC via an interface VPC endpoint (PrivateLink). | Internal microservices or sensitive data. |

## Key Features

### 1. Security
- **Authentication**: Supports IAM, Lambda Authorizers, and Amazon Cognito.
- **WAF Integration**: Protect APIs against common web exploits.
- **Resource Policies**: Restrict access based on IP, VPC, or account.

### 2. Performance & Resiliency
- **Caching**: API Gateway can cache responses to reduce backend load and improve latency.
- **Throttling**: Limit request rates (RPS) and bursts to protect backend services. Returns **429 Too Many Requests**.
- **Canary Deployments**: Safely roll out changes by routing a percentage of traffic to a new version.

### 3. Lifecycle Management
- **Stages**: Manage multiple versions of an API (e.g., `prod`, `dev`, `v2`).
- **Mapping Templates**: Transform request/response payloads (JSON to XML, etc.).

![[aws-api-gateway.png]]

> [!exam]
> **SAP-C02 Scenario: Private API**
> If you need to expose an internal API to other VPCs or on-premises without going over the public internet, use a **Private API Gateway** endpoint and access it via an **Interface VPC Endpoint**.

---
## Related Services
- [[_Networking Index|Networking Index]]
- [[CloudFront Overview]]
- [[VPC Endpoints]]

---
**Practice:** [[API Gateway - Practice Questions|API Gateway Practice Questions]]