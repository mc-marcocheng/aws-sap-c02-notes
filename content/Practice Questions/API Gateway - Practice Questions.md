---
tags: [aws, sap-c02, api-gateway, practice-questions]
---
# API Gateway Practice Questions

> [!question]
> You are running a mobile media application and are considering API Gateway for the client entry point. What benefits would this provide? (Choose 2 answers)
> 1. Caching API responses
> 2. IP blacklisting
> 3. Intrusion prevention
> 4. Load balancing
> 5. Throttling traffic
> 
> > [!success]- Answer & Rationale
> > **Answer: 1, 5**
> > **Rationale**: [[API Gateway Overview|API Gateway]] provides the following benefits:
> > - **Caching API responses**: API Gateway can cache responses from the endpoint for a specified TTL (Time-to-Live) period. This improves performance and reduces the latency experienced by end users while also decreasing the load on backend services.
> > - **Throttling traffic**: API Gateway provides traffic management with throttling limits (standard rates and bursts). This protects backend operations from being overwhelmed by traffic spikes, ensuring overall system resiliency.
> > - **IP blacklisting**: Although API Gateway integrates with AWS WAF to enable IP-based filtering, it is not listed as a primary native benefit in the core feature set in the same way caching and throttling are.
> > - **Intrusion prevention**: API Gateway automatically provides some protection against DDoS attacks (Layer 3 and Layer 7), but "Intrusion Prevention" is a specific term usually referring to IPS services.
> > - **Load balancing**: While API Gateway can distribute requests to various backends (like Lambda or ELB), it is not a "Load Balancer" service itself; rather, it is a management layer that often works in front of load balancers or serverless functions.
