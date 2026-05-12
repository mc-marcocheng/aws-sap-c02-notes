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
> > **Rationale**: [[API Gateway]] provides the following benefits:
> > - **Caching API responses**: API Gateway can cache responses from the endpoint for a specified TTL (Time-to-Live) period. This improves performance and reduces the latency experienced by end users while also decreasing the load on backend services.
> > - **Throttling traffic**: API Gateway provides traffic management with throttling limits (standard rates and bursts). This protects backend operations from being overwhelmed by traffic spikes, ensuring overall system resiliency.
> > - **IP blacklisting**: Although API Gateway integrates with AWS WAF to enable IP-based filtering, it is not listed as a primary native benefit in the core feature set in the same way caching and throttling are.
> > - **Intrusion prevention**: API Gateway automatically provides some protection against DDoS attacks (Layer 3 and Layer 7), but "Intrusion Prevention" is a specific term usually referring to IPS services.
> > - **Load balancing**: While API Gateway can distribute requests to various backends (like Lambda or ELB), it is not a "Load Balancer" service itself; rather, it is a management layer that often works in front of load balancers or serverless functions.

> [!question]
> A company operates a multi-tenant SaaS platform with REST APIs. Different tenants have different usage tiers (Free, Pro, Enterprise). The company needs to enforce different rate limits per tenant and monetize API usage by tracking the number of API calls each tenant makes per month. Which API Gateway feature combination achieves this?
> 
> 1. Create separate API Gateway stages per tenant and configure stage-level throttling.
> 2. Create API Keys and Usage Plans with different throttle/quota limits. Associate each tenant with the appropriate Usage Plan.
> 3. Deploy separate API Gateway instances per tenant using AWS CloudFormation and configure throttling at the account level.
> 4. Use AWS WAF rate-based rules associated with the API Gateway to limit requests per source IP.
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[API Gateway]] **Usage Plans** allow you to define throttle rates (requests/second) and quotas (requests/month) per API Key. Each tenant receives an API Key associated with their tier's Usage Plan. This provides per-tenant rate limiting and usage tracking natively. WAF rate rules (Option 4) are IP-based, not tenant-based. Separate stages (Option 1) don't provide per-key throttling.

> [!question]
> A company exposes a private microservice running on Amazon ECS in a private subnet through API Gateway. The API must only be accessible from within the company's VPC and from their on-premises network connected via Direct Connect. The API must not be accessible from the public internet. Which API Gateway endpoint type and access control mechanism should be used?
> 
> 1. Deploy a Regional API Gateway endpoint with a resource policy that allows access only from the VPC CIDR range.
> 2. Deploy a Private API Gateway endpoint with a VPC Endpoint. Configure a resource policy to allow access from the VPC Endpoint and the on-premises CIDR.
> 3. Deploy an Edge-Optimized API Gateway endpoint with AWS WAF IP whitelisting for the on-premises public IPs.
> 4. Deploy a Regional API Gateway endpoint with mutual TLS (mTLS) authentication to restrict access to known clients.
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** A **Private** [[API Gateway]] endpoint is only accessible from within a VPC via a [[VPC Endpoints|VPC Interface Endpoint]]. The resource policy can be configured to allow access from the VPC Endpoint ID and specific CIDR ranges (for on-premises traffic arriving via [[Direct Connect Overview|Direct Connect]]). Regional and Edge-Optimized endpoints (Options 1, 3) are publicly resolvable by default. mTLS (Option 4) handles authentication but doesn't make the API private.

> [!question]
> A serverless application uses API Gateway with Lambda integration. During flash sales, the application experiences 10x normal traffic for 5-minute bursts. Users report HTTP 429 (Too Many Requests) errors during these bursts even though Lambda concurrency limits have not been reached. What is the MOST likely cause and solution?
> 
> 1. The Lambda function cold starts are causing timeouts. Solution: Use provisioned concurrency.
> 2. API Gateway account-level throttle limit is being exceeded. Solution: Request an increase to the API Gateway account-level rate limit and configure method-level throttling.
> 3. The API Gateway stage cache is full and rejecting new requests. Solution: Increase cache capacity.
> 4. The Lambda function's reserved concurrency is set too low. Solution: Remove the reserved concurrency limit.
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[API Gateway]] has a default account-level throttle of 10,000 requests/second with a 5,000-request burst limit. HTTP 429 errors specifically indicate throttling at the API Gateway layer, not Lambda. The solution is to request a limit increase via AWS Support and properly configure stage/method-level throttling to protect critical endpoints while allowing burst traffic on sale endpoints.
