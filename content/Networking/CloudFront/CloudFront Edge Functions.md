---
tags: [aws, sap-c02, networking, cloudfront]
---
# CloudFront Edge Functions: Functions vs. Lambda@Edge

CloudFront offers two ways to run code at the edge to customize content delivery and improve performance.

## Comparison Table

| Feature | CloudFront Functions | Lambda@Edge |
| --- | --- | --- |
| **Runtime** | JavaScript (Subset) | Node.js, Python |
| **Scale** | 10M+ requests per second | Thousands of requests per second |
| **Execution Time** | < 1 ms | 5s (Viewer), 30s (Origin) |
| **Memory** | 2 MB | Up to 10 GB |
| **Network Access** | No | Yes |
| **File System** | No | Yes |
| **Events** | Viewer Request/Response | Viewer & Origin Request/Response |

## CloudFront Functions (High Scale, Simple Logic)
- **Best Use Case**: Cache key manipulation, header manipulation, URL rewrites/redirects, and basic authorization.
- **Latency**: Sub-millisecond execution.
- **Events**: Runs only on Viewer Request and Viewer Response.

## Lambda@Edge (Full Compute, Complex Logic)
- **Best Use Case**: A/B testing, dynamic content generation, complex authorization (e.g., calling an external API), and image optimization.
- **Latency**: Higher than CloudFront Functions but still at the edge.
- **Events**: Can run on Viewer Request, Viewer Response, Origin Request, and Origin Response.

![[cloudfront-functions-vs-lambda-edge-scaled.jpg]]

> [!exam]
> **SAP-C02 Tip**:
> - If the task is simple (URL rewrite, header change) and happens at **extremely high scale**, choose **CloudFront Functions**.
> - If the task requires **network access** (checking a database) or **longer execution**, choose **Lambda@Edge**.

---
### CloudFront Events Flow
1. **Viewer Request**: Before CloudFront checks the cache.
2. **Origin Request**: If there is a cache miss, before CloudFront forwards to origin.
3. **Origin Response**: After origin responds, before CloudFront caches the result.
4. **Viewer Response**: Before CloudFront delivers the result to the user.
---
## Related Services
- [[_Networking Index|Networking Index]]
- [[CloudFront Overview]]

---
**Practice:** [[CloudFront Edge - Practice Questions|CloudFront Edge Practice Questions]]