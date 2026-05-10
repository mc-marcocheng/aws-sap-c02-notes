---
tags: [aws, sap-c02, networking, global-accelerator]
---
# Global Accelerator Overview

AWS Global Accelerator is a networking service that improves the availability and performance of your applications with local or global users.

## How it Works
- Provides **two static Anycast IP addresses** that act as a fixed entry point.
- Uses the AWS global network to route traffic to the nearest healthy application endpoint.
- **TCP Termination at the Edge**: Connections are terminated at the edge location, and a new connection is opened to the endpoint, reducing latency and increasing throughput.

## Supported Endpoints
- Application Load Balancers (ALB)
- Network Load Balancers (NLB)
- EC2 Instances
- Elastic IP Addresses

## Key Features
- **Health Checks**: Automatically reroutes traffic to healthy endpoints.
- **Client Affinity**: Sticky sessions based on source IP.
- **Weighting**: Control traffic distribution across regions.
- **BYOIP**: Bring your own IP addresses to AWS.

## CloudFront vs. Global Accelerator

| Feature | CloudFront | Global Accelerator |
| --- | --- | --- |
| **Protocols** | HTTP/HTTPS | TCP / UDP |
| **Edge Caching** | Yes | No |
| **IP Addresses** | Dynamic / DNS-based | **2 Static Anycast IPs** |
| **Typical Use Case** | Web content delivery | Gaming, VoIP, API Acceleration |

![[aws-cloudfront-vs-global-accelerator.jpg]]

> [!exam]
> **SAP-C02 Scenario: Fixed IPs**
> If a client firewall requires a **fixed IP address** to access your global application, use **Global Accelerator**. ALB and CloudFront use dynamic IP addresses that change over time.

---
## Related Services
- [[_Networking Index|Networking Index]]
- [[CloudFront Overview]]
- [[ALB Overview]]
- [[NLB Overview]]

---
**Practice:** [[Global Accelerator - Practice Questions|Global Accelerator Practice Questions]]