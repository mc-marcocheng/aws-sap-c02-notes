---
tags: [aws, sap-c02, cloud-map, practice-questions]
---
# Cloud Map Practice Questions

> [!question]
> A microservices application running on Amazon ECS dynamically scales tasks based on load. Services need to discover and communicate with each other. Some services run multiple versions simultaneously, and clients need to query a specific version using custom metadata attributes. Which AWS service provides this capability natively?
> 1. Amazon Route 53 Private Hosted Zones
> 2. AWS Systems Manager Parameter Store
> 3. AWS Cloud Map
> 4. AWS App Mesh
>
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** While Route 53 can provide private DNS for service discovery, it does not support querying by custom attributes (metadata). [[Cloud Map]] using an HTTP API namespace allows registering instances with custom attributes (e.g., version=2.0) and discovering them programmatically.

> [!question]
> A company is migrating legacy applications to AWS. These applications have hardcoded dependencies on specific IP addresses and cannot easily use DNS names for service discovery. How can they implement dynamic service discovery for these legacy services in AWS without rewriting the applications?
> 1. Use AWS Cloud Map with private DNS namespaces and an agent to update local `/etc/hosts`.
> 2. This is impossible; applications must be rewritten to support DNS or API calls.
> 3. Use AWS App Mesh and Envoy proxy to intercept static IP traffic and route it via Cloud Map discovery.
> 4. Use Amazon EventBridge to trigger a Lambda function that updates the IPs.
>
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** [[App Mesh]] uses Envoy proxies that can transparently intercept traffic (even destined for specific IPs or ports) and route it to the correct dynamic endpoints discovered via [[Cloud Map]]. This provides modern service discovery capabilities to legacy applications without code changes.