---
tags: [aws, sap-c02, global-accelerator, networking, practice-questions]
---
# Global Accelerator Practice Questions

> [!question]
> What features does AWS Global Accelerator provide? (Select TWO)
> 1. Improved security
> 2. Improved durability
> 3. Improved performance
> 4. Improved cost optimization
> 5. Improved availability
> 
> > [!success]- Answer & Rationale
> > **Answer: 3, 5**
> > **Rationale:**
> > * **Improved performance:** [[Global Accelerator|AWS Global Accelerator]] optimizes the path to applications by using the AWS global network, reducing packet loss, jitter, and latency compared to the public internet. It also uses TCP termination at the edge.
> > * **Improved availability:** It provides two global static anycast public IPs that serve as fixed entry points. It continuously monitors the health of endpoints and automatically re-routes traffic to the nearest healthy available endpoint.

> [!question]
> A company that develops web applications has launched hundreds of Application Load Balancers (ALBs) in multiple Regions. The company wants to create an allow list for the IPs of all the load balancers on its firewall device. A solutions architect is looking for a one-time, highly available solution to address this request, which will also help reduce the number of IPs that need to be allowed by the firewall. What should the solutions architect recommend to meet these requirements?
> 1. Create an AWS Lambda function to keep track of the IPs for all the ALBs in different Regions. Keep refreshing this list.
> 2. Set up a Network Load Balancer (NLB) with Elastic IPs. Register the private IPs of all the ALBs as targets to this NLB.
> 3. Launch AWS Global Accelerator and create endpoints for all the Regions. Register all the ALBs in different Regions to the corresponding endpoints.
> 4. Set up an Amazon EC2 instance, assign an Elastic IP to this EC2 instance, and configure the instance as a proxy to forward traffic to all the ALBs.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** [[Global Accelerator|AWS Global Accelerator]] provides two static anycast IP addresses that act as a fixed entry point to applications. By registering all the [[ALB Overview|ALB]]s as endpoints, the company only needs to allow these two static IPs on their firewall, regardless of how many ALBs are added or moved behind the accelerator. This is a one-time, highly available configuration. Options 1, 2, and 4 are either too complex to maintain or do not provide the same level of global availability and simplicity.

> [!question]
> A company has a multi-region active-active architecture with Application Load Balancers in us-east-1 and eu-west-1. They are choosing between Amazon CloudFront and AWS Global Accelerator for their client-facing endpoint. The application is a real-time bidding platform that uses HTTP POST requests with unique payloads that cannot be cached. Latency must be minimized globally. Which service is more appropriate and why?
> 
> 1. CloudFront, because it has more edge locations than Global Accelerator and will always provide lower latency.
> 2. Global Accelerator, because the application uses non-cacheable dynamic content and benefits from TCP termination at the edge and optimized routing over the AWS backbone.
> 3. CloudFront with caching disabled (TTL=0), because it still provides edge TCP termination and connection reuse to the origin.
> 4. Both B and C provide equivalent latency benefits for this use case; choose based on pricing.
>
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale:** Both [[Global Accelerator]] and [[CloudFront Overview|CloudFront]] (with TTL=0) provide TCP termination at edge locations and route traffic over the AWS backbone rather than the public internet. For non-cacheable HTTP content, both offer similar latency benefits. The choice depends on additional requirements: Global Accelerator provides static IPs and instant failover; CloudFront provides more edge locations and HTTP-specific features like header manipulation. For SAP-C02, recognize that both are valid for dynamic content.
