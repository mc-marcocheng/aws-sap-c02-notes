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
> [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** [[App Mesh]] uses Envoy proxies that can transparently intercept traffic (even destined for specific IPs or ports) and route it to the correct dynamic endpoints discovered via [[Cloud Map]]. This provides modern service discovery capabilities to legacy applications without code changes.

> [!question]
> A company has an ECS service registered with AWS Cloud Map for service discovery. When tasks are stopped due to a deployment, there is a 30-second window where the terminated task's IP is still returned by Cloud Map DNS queries, causing connection errors in upstream services. How can this be resolved?
> 
> 1. Reduce the DNS TTL for the Cloud Map namespace to 0 seconds.
> 2. Configure the Cloud Map service with a custom health check that uses Route 53 health checks to detect terminated tasks faster.
> 3. Configure the ECS service to use Cloud Map with SRV records and set a low DNS TTL, combined with enabling ECS service discovery health check integration.
> 4. Use API-based discovery (HTTP namespace) instead of DNS-based discovery to get real-time instance information.
>
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale:** [[Cloud Map]] DNS-based discovery is limited by DNS TTL and client-side caching (even with TTL=0, resolvers may cache briefly). For real-time accuracy, switching to an **HTTP namespace** with the `DiscoverInstances` API bypasses DNS caching entirely and returns only currently healthy, registered instances. This eliminates the stale endpoint problem during deployments.