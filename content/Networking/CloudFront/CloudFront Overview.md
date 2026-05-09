---
tags: [aws, sap-c02, cloudfront]
---
# CloudFront Overview

Amazon CloudFront is a fast content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency and high transfer speeds.

## Core Components
- **Edge Locations**: Data centers that deliver content (cached).
- **Regional Edge Caches**: Larger caches located between origin and edge locations to improve cache hit ratios.
- **Distribution**: A configuration that tells CloudFront how to deliver your content.

## Origin Types
- **S3 Bucket**: Deliver static website content. Use **Origin Access Control (OAC)** or **Origin Access Identity (OAI)** to restrict direct S3 access.
- **Custom Origin**: HTTP servers (ALB, EC2, or on-premises).
- **Origin Groups**: Provide failover between a primary and secondary origin for high availability.

## Cache Behaviors
- **Path Patterns**: Route requests to different origins based on URL paths (e.g., `images/*` vs `api/*`).
- **TTL (Time to Live)**: Controlled by `Cache-Control` headers from the origin or CloudFront settings (Min/Max/Default TTL).
- **Forwarding**: Choose whether to forward (and cache based on) Query Strings, Cookies, or Headers.

## Security
- **HTTPS**: Use **AWS Certificate Manager (ACM)** in `us-east-1` for SSL/TLS.
- **Signed URLs / Cookies**: Restrict content to specific users (e.g., premium content).
- **Field-Level Encryption**: Encrypt sensitive data at the edge before it's sent to the origin.
- **AWS WAF**: Integrate for Layer 7 protection.

![[regional-edge-caches.png]]

## CloudFront vs. Global Accelerator

| Feature | CloudFront | Global Accelerator |
| --- | --- | --- |
| **Layer** | Layer 7 (HTTP/S) | Layer 4 (TCP/UDP) |
| **Caching** | **Yes** (Content caching) | No |
| **Best For** | Static/Dynamic Web Content | Gaming, VoIP, non-HTTP, Multi-region failover |
| **IP Addresses** | Dynamic | **2 Static Global Anycast IPs** |

> [!exam]
> **SAP-C02 Decision**:
> - If you need to **cache** content: **CloudFront**.
> - If you need **static IPs** for whitelisting or **fast failover** for non-HTTP apps: **Global Accelerator**.

---
**Practice:** [[CloudFront - Practice Questions|CloudFront Practice Questions]]