---
tags: [compute, aws, sap-c02, lightsail]
---
# Amazon Lightsail

Amazon Lightsail is a simplified Virtual Private Server (VPS) solution. It provides an all-in-one bundle: compute (instances), storage (SSD), and networking (Static IP, DNS management) for a predictable monthly price.

## Core Features

| Feature | Description |
| :--- | :--- |
| **Instances** | Pre-configured virtual servers (Linux or Windows). |
| **Containers** | Deploy containerized apps directly (integrated Load Balancer/HTTPS). |
| **Databases** | Managed MySQL or PostgreSQL (Standard or High Availability). |
| **Storage** | SSD-based block storage and S3-compatible object storage. |
| **Networking** | Static IPs, DNS management, and simplified Load Balancers. |
| **CDN** | Integrated distribution backed by Amazon CloudFront. |

---
## Key Characteristics

- **Predictable Pricing**: Monthly "bundles" include a specific amount of CPU, RAM, and data transfer.
- **Simplified Management**: Web console and API are much simpler than the standard AWS console.
- **Dual-Stack**: Supports both IPv4 and IPv6.
- **Scaling/Migration**: You can scale up (not down) or migrate to **EC2** by taking a snapshot and exporting it.

---
## SAP-C02 Strategic Considerations

> [!important] **Lightsail vs. EC2**
> - **Lightsail**: Best for simple apps, development environments, and small business websites (WordPress, LAMP stacks). Predictable costs are a key driver.
> - **EC2**: Required for enterprise-grade applications, custom networking, complex VPC integration, or high-performance scaling requirements.

> [!important] **Migration Path**
> Lightsail is often a starting point. If an application outgrows Lightsail's capabilities, use the **"Export to EC2"** feature. This involves:
> 1. Creating a snapshot of the Lightsail instance.
> 2. Exporting the snapshot to EC2.
> 3. Launching a new EC2 instance from that snapshot in a standard VPC.

> [!exam] **Scenario: Predictable Monthly Billing**
> If a scenario requires a fixed monthly cost for a simple web server or a dev environment without the complexity of managing VPCs and individual EBS volumes, **Lightsail** is the preferred choice.

> [!exam] **Scenario: Rapid Deployment**
> Use Lightsail when you need to quickly launch pre-configured stacks like **WordPress**, **Magento**, or **Node.js** with minimal overhead.

---
## Limits & Constraints
- **Max Instances**: 20 per account.
- **Fixed Bundles**: Cannot customize CPU/RAM independently.
- **Limited VPC Connectivity**: Lightsail exists in a "shadow" VPC; you can use **VPC Peering** to connect it to your default AWS VPC in the same region.

---
## Related Services
- [[_Compute Index|Compute Index]]
- [[EC2 Overview]]
- [[VPC Overview]]
