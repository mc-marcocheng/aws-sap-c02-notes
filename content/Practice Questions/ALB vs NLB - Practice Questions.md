---
tags: [aws, sap-c02, elb, practice-questions]
---
# ALB vs NLB Practice Questions

> [!question]
> A company wants to use load balancer for their application. However, the company wants to forward the requests without any header modification. What service should the company use?
> 1. Classic Load Balancer
> 2. Network Load Balancer
> 3. Application Load Balancer
> 4. Use Route 53
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[NLB Overview|Network Load Balancer]] (NLB) operates at Layer 4 (Transport Layer) and forwards TCP/UDP traffic to targets without modifying the payload or headers. In contrast, [[ALB Overview|Application Load Balancer]] (ALB) operates at Layer 7 and may modify headers (e.g., adding `X-Forwarded-For`) to provide advanced routing features, which makes [[ALB vs NLB|ALB vs NLB]] a key consideration for this requirement.

> [!question]
> A Solutions Architect is building an Amazon ECS-based web application that requires that headers are not modified when being forwarded to Amazon ECS. Which load balancer should the Architect use?
> 1. Application Load Balancer
> 2. Network Load Balancer
> 3. A virtual load balancer appliance from AWS marketplace
> 4. Classic Load Balancer
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** Since the requirement explicitly states that headers must not be modified, [[NLB Overview|Network Load Balancer]] is the correct choice as it functions at Layer 4. [[ALB Overview|Application Load Balancer]] (Layer 7) and [[ELB Overview|Classic Load Balancer]] both have the potential to alter or add headers to the request, as discussed in [[ALB vs NLB|ALB vs NLB]].

> [!question]
> An application tier currently hosts two web services on the same set of instances, listening on different ports. Which AWS service should a solutions architect use to route traffic to the service based on the incoming request?
> 1. AWS Application Load Balancer
> 2. Amazon CloudFront
> 3. Amazon Route 53
> 4. AWS Classic Load Balancer
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** [[ALB Overview|Application Load Balancer]] (ALB) supports advanced Layer 7 routing features, including **host-based** and **path-based routing**. This allows a single ALB to route traffic to multiple target groups (potentially on different ports on the same instances) based on the URL or host header, which is ideal for microservices or multi-service architectures as contrasted in [[ALB vs NLB|ALB vs NLB]].

> [!question]
> A Solutions Architect needs to deploy an HTTP/HTTPS service on Amazon EC2 instances with support for WebSockets using load balancers. How can the Architect meet these requirements?
> 1. Configure a Network Load balancer.
> 2. Configure an Application Load Balancer.
> 3. Configure a Classic Load Balancer.
> 4. Configure a Layer-4 Load Balancer.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[ALB Overview|Application Load Balancer]] (ALB) natively supports **WebSockets** and HTTP/2. While [[NLB Overview|Network Load Balancer]] also supports WebSockets (at Layer 4), ALB is the standard and recommended choice for HTTP/HTTPS applications requiring Layer 7 features and routing, per [[ALB vs NLB|ALB vs NLB]].

> [!question]
> A company is hosting an application in AWS for third party access. The third party needs to whitelist the application based on the IP. Which AWS service can the company use in the whitelisting of the IP address?
> 1. AWS Application Load Balancer
> 2. AWS Classic Load balancer
> 3. AWS Network Load Balancer
> 4. AWS Route 53
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** [[NLB Overview|Network Load Balancer]] (NLB) provides a **static IP address** per Availability Zone (and supports Elastic IPs). This is a critical feature for applications that require fixed IP addresses for third-party firewall whitelisting. [[ALB Overview|Application Load Balancer]] (ALB) and [[ELB Overview|Classic Load Balancer]] (CLB) use DNS names and their underlying IP addresses are dynamic and can change, as noted in [[ALB vs NLB|ALB vs NLB]].
