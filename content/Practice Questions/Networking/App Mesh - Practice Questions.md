---
tags: [aws, sap-c02, app-mesh, practice-questions]
---
# App Mesh Practice Questions

> [!question]
> A company is running hundreds of microservices across Amazon ECS and Amazon EKS. Security compliance mandates that all service-to-service communication must be encrypted using mutual TLS (mTLS). Developers should not need to modify application code to implement this encryption. Which solution meets these requirements with the LEAST operational overhead?
> 1. Deploy AWS WAF between every microservice.
> 2. Modify all application code to use AWS KMS SDK for encryption before transmission.
> 3. Implement AWS App Mesh and configure it to require mTLS between virtual nodes using AWS Private CA.
> 4. Configure Elastic Load Balancers with HTTPS listeners in front of every microservice.
>
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** [[App Mesh]] uses Envoy sidecar proxies to intercept network traffic and natively supports enforcing mutual TLS (mTLS) between services using [[ACM]] Private CA, requiring zero changes to the application code.

> [!question]
> A development team wants to deploy a new version of a critical microservice. They want to route exactly 5% of traffic to the new version and 95% to the current version. Both versions are running on Amazon ECS. How can they achieve this without implementing routing logic in their code?
> 1. Use an Application Load Balancer with weighted target groups.
> 2. Use Route 53 weighted routing policies.
> 3. Use AWS App Mesh Virtual Routers and Virtual Routes to distribute traffic based on weights.
> 4. Both 1 and 3 are valid, but App Mesh is more suitable for complex service-to-service mesh architectures.
>
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale:** While ALB weighted target groups can route traffic, [[App Mesh]] is specifically designed for fine-grained internal service-to-service traffic routing (canary deployments) across a microservices architecture using Virtual Routers. Option 4 correctly identifies this nuance.