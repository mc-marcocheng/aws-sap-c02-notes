---
tags: [aws, sap-c02, networking, load-balancing]
---
# ALB vs. NLB: Architectural Comparison

Choosing between an Application Load Balancer (ALB) and a Network Load Balancer (NLB) depends on the layer of the OSI model you need to operate at and your specific performance requirements.

## Comparison Table

| Feature | Application Load Balancer (ALB) | Network Load Balancer (NLB) |
| --- | --- | --- |
| **Layer** | Layer 7 (HTTP, HTTPS, gRPC) | Layer 4 (TCP, UDP, TLS) |
| **Throughput** | High (but slower scaling) | **Ultra-high** (Millions of RPS, fast scaling) |
| **Latency** | Milliseconds | **Microseconds** |
| **IP Addresses** | Dynamic (DNS-based) | **Static IP** per AZ (EIP support) |
| **Routing** | Path, Host, Query String, Headers | IP protocol, Port |
| **Target Types** | EC2, IP, Lambda, ALB | EC2, IP, ALB |
| **Sticky Sessions** | Yes (Cookies) | Yes (Source IP affinity / 5-tuple hash) |
| **Security** | WAF, Security Groups, OIDC/SAML | Security Groups, TLS Termination |
| **PrivateLink** | No | **Yes** |

## Application Load Balancer (ALB)
- **Advanced Routing**: Route traffic based on URL path (`/api`), host header (`shop.example.com`), or query strings.
- **Serverless Integration**: Can trigger **AWS Lambda** functions directly.
- **Modern Protocols**: Supports HTTP/2, WebSockets, and gRPC.
- **User Authentication**: Offload authentication to Cognito or OIDC providers.

## Network Load Balancer (NLB)
- **Performance**: Optimized for volatile traffic patterns and massive throughput.
- **Static IPs**: Provides a stable entry point for clients with strict firewall rules.
- **PrivateLink**: The only load balancer that can be used as a service provider for AWS PrivateLink.
- **UDP Support**: Essential for gaming, streaming, and IoT protocols.

## Integration: ALB-type Target Group for NLB
You can register an **ALB as a target for an NLB**. This combines the static IP and high-performance benefits of the NLB with the advanced Layer 7 routing of the ALB.

> [!exam]
> **SAP-C02 Decision Guide**:
> - **Choose ALB** for web applications, microservices, and when you need WAF or OIDC.
> - **Choose NLB** for ultra-low latency, non-HTTP protocols (TCP/UDP), static IPs, or PrivateLink.
> - **Choose both** (NLB in front of ALB) if you need static IPs AND Layer 7 routing.

---
## Related Services
- [[_Networking Index|Networking Index]]
- [[ALB Overview]]
- [[NLB Overview]]
- [[ELB Overview]]

---
**Practice:** [[ALB vs NLB - Practice Questions|ALB vs NLB Practice Questions]]