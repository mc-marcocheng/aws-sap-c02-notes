---
tags: [aws, sap-c02, app-mesh]
---
# AWS App Mesh

AWS App Mesh is a service mesh that provides application-level networking to make it easy for your services to communicate with each other across multiple types of compute infrastructure.

## Architectural Patterns
- **Envoy Proxy:** Uses the open-source Envoy proxy as a sidecar container alongside your microservices.
- **Cross-Compute Routing:** Consistent routing and traffic rules across [[EKS]], [[ECS Overview|ECS]], EC2, and Kubernetes on EC2.
- **Traffic Control:** Supports advanced routing capabilities like canary deployments, circuit breaking, and retries without changing application code.

## SAP-C02 Key Facts
- **Observability:** Centralized metrics, logs, and traces (integrates with [[CloudWatch Overview|CloudWatch]], X-Ray).
- **mTLS:** Supports mutual TLS (mTLS) for end-to-end encryption and authentication between services using [[ACM]] Private CA or Envoy SDS.
- **Virtual Nodes & Routers:** A Virtual Node acts as a logical pointer to a particular task group/deployment. A Virtual Router handles traffic distribution (e.g., 90% to v1, 10% to v2).

> [!exam]
> If a question asks for a way to implement mutual TLS (mTLS), complex traffic routing (canary/blue-green), or centralized observability for microservices across ECS/EKS *without changing application code*, the answer is [[App Mesh]].

---
**Practice:** [[App Mesh - Practice Questions|App Mesh Practice Questions]]