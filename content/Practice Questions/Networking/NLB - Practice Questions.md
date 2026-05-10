---
tags: [aws, sap-c02, elb, nlb, networking, practice-questions]
---
# NLB Practice Questions

> [!question]
> A company wants to use a load balancer for their application. However, the company wants to forward the requests without any header modification. What service should the company use?
> 1. Classic Load Balancer
> 2. Network Load Balancer
> 3. Application Load Balancer
> 4. Use Route 53
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[NLB Overview|Network Load Balancer (NLB)]] operates at **Layer 4** (Connection level), routing TCP/UDP/TLS traffic without modifying the payload. Unlike [[ALB Overview|Application Load Balancer (ALB)]], which operates at Layer 7 and terminates/re-initiates the connection (often modifying or adding headers like `X-Forwarded-For`), NLB preserves the original packet data. [[ELB Overview|Classic Load Balancer]] is legacy and can modify headers in HTTP mode. [[Route 53 Overview|Route 53]] is a DNS service, not a load balancer.

> [!question]
> A company is hosting an application in AWS for third-party access. The third party needs to whitelist the application based on the IP. Which AWS service can the company use in the whitelisting of the IP address?
> 1. AWS Application Load Balancer
> 2. AWS Classic Load Balancer
> 3. AWS Network Load Balancer
> 4. AWS Route 53
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** [[NLB Overview|Network Load Balancer (NLB)]] provides a static IP address per Availability Zone. You can also associate one [[VPC Overview|Elastic IP]] address per subnet (AZ) to the NLB, providing fixed IPs that third parties can reliably whitelist. [[ALB Overview|Application Load Balancer (ALB)]] and [[ELB Overview|Classic Load Balancer]] do not have static IPs; their IPs change as they scale, and they are typically accessed via a DNS name.
