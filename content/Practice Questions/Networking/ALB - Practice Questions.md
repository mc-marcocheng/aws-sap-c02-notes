---
tags: [aws, sap-c02, elb, alb, practice-questions]
---
# ALB Practice Questions

> [!question]
> You are designing an application which requires websockets support, to exchange real-time messages with end-users without the end users having to request (or poll) the server for an update? Which ELB option should you choose?
> 1. Use Application Load Balancer and enable comet support
> 2. Use Classic Load Balancer which supports WebSockets
> 3. Use Application Load Balancer which supports WebSockets
> 4. Use Classic Load Balancer and enable comet support
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale**: [[ALB Overview|ALB]] natively supports WebSockets and Secure WebSockets, allowing for persistent, bi-directional communication between clients and servers. While Classic Load Balancer (CLB) does support them, it is a legacy service; ALB is the recommended AWS best practice for Layer 7 features. "Comet support" is not a standard configuration option. Related: [[ELB Overview|ELB]].

> [!question]
> Which of the following Internet protocols does an AWS Application Load Balancer Support? (Choose 2 answers)
> 1. ICMP
> 2. UDP
> 3. HTTP
> 4. SNTP
> 5. Websocket
> 
> > [!success]- Answer & Rationale
> > **Answer: 3, 5**
> > **Rationale**: [[ALB Overview|ALB]] is designed primarily for HTTP and HTTPS traffic and natively supports the WebSocket protocol. ICMP is not supported as ALB operates at Layer 7. UDP load balancing requires a [[NLB Overview|Network Load Balancer (NLB)]]. SNTP is also not supported.

> [!question]
> Your organization has configured an application behind ALB. However, Clients are complaining that they cannot connect to an Internet-facing load balancer. What cannot be the issue?
> 1. Internet-facing load balancer is attached to a private subnet
> 2. ALB Security Groups does not allow the traffic
> 3. Subnet NACLs do not allow the traffic
> 4. ALB was not assigned an EIP
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale**: [[ALB Overview|ALB]] do not support or use Elastic IP addresses (EIPs). They are accessed via a DNS name provided by AWS. If a static IP is required, an NLB or Global Accelerator should be used. Issues 1, 2, and 3 are valid connectivity blockers: internet-facing ALBs require public subnets, Security Groups must allow listener port traffic, and NACLs must allow inbound/outbound traffic. Related: [[ELB Overview|ELB]].

> [!question]
> To protect your ALB from accidental deletion, you should:
> 1. enable Multi-Factor Authentication (MFA) protected access
> 2. enable Delete Protection on the ALB
> 3. enabled Termination Protection on the ALB
> 4. ALB does not provide any feature to prevent accidental deletion
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale**: [[ALB Overview|ALB]] has a specific "Deletion Protection" attribute that prevents the load balancer from being deleted when enabled. MFA is for user access security, and "Termination Protection" is an EC2-specific term.

> [!question]
> Your organization is using ALB for servicing requests. One of the API request is facing consistent performance issues. Upon checking the flow, you find that the request flows through multiple services. How can you track the performance or timing issues in the application stack at the granularity of an individual request?
> 1. Track the request using "X-Amzn-Trace-Id" HTTP header
> 2. Track the request using "X-Amzn-Track-Id" HTTP header
> 3. Track the request using "X-Aws-Track-Id" HTTP header
> 4. Track the request using "X-Aws-Trace-Id" HTTP header
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale**: [[ALB Overview|ALB]] adds the `X-Amzn-Trace-Id` header to every request. This header is used for Request Tracing to track requests as they move through different services, which is critical for debugging performance in microservices architectures.
