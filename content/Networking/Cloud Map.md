---
tags: [aws, sap-c02, networking, cloud-map]
---
# AWS Cloud Map

AWS Cloud Map is a cloud resource discovery service. With Cloud Map, you can define custom names for your application resources, and it maintains the updated location of these dynamically changing resources.

## Architectural Patterns
- **Service Discovery:** Replaces hardcoded IP addresses or internal load balancers with dynamic DNS or API-based discovery for microservices.
- **Integration:** Natively integrates with [[ECS|ECS]] and [[EKS]] to automatically register/deregister services as tasks scale up and down.
- **Namespace Types:** Supports public DNS, private DNS (within a [[VPC Overview|VPC]]), and HTTP API namespaces (useful for IP/port discovery without DNS constraints).

## SAP-C02 Key Facts
- **Health Checks:** Automatically integrates with [[Route 53 Overview|Route 53]] health checks. If a resource fails a health check, Cloud Map stops returning it in discovery queries.
- **Custom Attributes:** You can register custom attributes (e.g., `version=beta`, `stage=prod`) with resources and query based on these attributes using the HTTP API.
- **App Mesh Integration:** [[App Mesh]] uses Cloud Map under the hood for discovering virtual nodes.

> [!exam]
> Choose [[Cloud Map]] when a scenario requires dynamic discovery of microservices that rapidly scale, especially if custom metadata attributes need to be queried (which DNS alone cannot do).

---
## Related Services
- [[_Networking Index|Networking Index]]
- [[App Mesh]]
- [[Route 53 Overview]]
- [[ECS]]
- [[EKS]]

---
**Practice:** [[Cloud Map - Practice Questions|Cloud Map Practice Questions]]