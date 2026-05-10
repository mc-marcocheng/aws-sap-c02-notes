---
tags: [aws, sap-c02, networking, nlb]
---
# Network Load Balancer (NLB) Overview

The Network Load Balancer (NLB) operates at the connection level (Layer 4), routing connections to targets based on IP protocol data. It is optimized for ultra-low latency and massive throughput.

## Key Features
- **Ultra-High Performance**: Capable of handling millions of requests per second with microsecond latency.
- **Static IP Support**: Automatically provides a static IP address per Availability Zone. You can also assign an **Elastic IP** per subnet.
- **Protocol Support**: Ideal for load balancing of TCP, UDP, and TLS traffic.
- **Zonal Isolation**: Designed for applications that require zonal isolation; it creates a network interface in each enabled AZ.
- **Preserve Source IP**: Preserves the client-side source IP address when routing to targets (when using instance ID target type).
- **PrivateLink Integration**: Can be used as a service provider for AWS PrivateLink (Interface VPC Endpoints).

## NLB Target Types
- **Instance ID**: Preserves the source IP address of the client.
- **IP Address**: Source IP is the private IP of the NLB node (unless using Proxy Protocol). Useful for on-premises targets via Direct Connect.
- **Application Load Balancer**: Allows combining NLB's performance with ALB's advanced routing.

## Connectivity and Health
- **Long-lived Connections**: Supports TCP connections that can last for months, making it ideal for WebSockets or IoT.
- **Health Checks**: Supports TCP, HTTP, and HTTPS health checks to ensure traffic is only routed to healthy targets.
- **Cross-Zone Load Balancing**: Disabled by default (unlike ALB). When enabled, you are charged for inter-AZ data transfer.

## NLB vs. ALB vs. CLB
- **NLB**: Layer 4, Static IPs, UDP, Ultra-performance, PrivateLink.
- **ALB**: Layer 7, Path/Host routing, WAF integration, OIDC.
- **CLB**: Legacy, basic Layer 4/7 (Not recommended for new VPC designs).

> [!exam]
> **SAP-C02 Decision Point**: Choose **NLB** if the scenario mentions:
> - **Millions of requests per second**.
> - **Static IP addresses** for whitelisting.
> - **UDP** traffic (gaming, streaming).
> - **PrivateLink** for exposing a service privately to other VPCs.

---
## Related Services
- [[_Networking Index|Networking Index]]
- [[ELB Overview]]
- [[ALB Overview]]
- [[VPC Endpoints]]

---
**Practice:** [[NLB - Practice Questions|NLB Practice Questions]]