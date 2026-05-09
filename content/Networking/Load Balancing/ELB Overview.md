---
tags: [aws, sap-c02, elb]
---
# ELB Overview

Elastic Load Balancing (ELB) automatically distributes incoming application traffic across multiple targets, such as EC2 instances, containers, and IP addresses.

## Load Balancer Types

| Type | Layer | Best For | Features |
| --- | --- | --- | --- |
| **Application (ALB)** | 7 (HTTP/S) | Web apps, Microservices | Path-based routing, Host-based routing, Lambda targets, WAF. |
| **Network (NLB)** | 4 (TCP/UDP/TLS) | Ultra-low latency, High throughput | **Static IP**, UDP support, Zonal isolation. |
| **Gateway (GWLB)** | 3 (IP) | Security/Network Virtual Appliances | In-line traffic inspection, Bump-in-the-wire. |
| **Classic (CLB)** | 4/7 | Legacy apps | Basic load balancing (Deprecated for most new apps). |

## Core Features

### 1. High Availability
- **Regional Service**: ELBs are regional resources.
- **Cross-Zone Load Balancing**: Distributes traffic evenly across all targets in all enabled AZs. (Enabled by default for ALB, disabled for NLB).

### 2. Security
- **SSL/TLS Termination**: Offload encryption from backend servers.
- **SNI (Server Name Indication)**: Support multiple SSL certificates on a single listener.
- **Security Groups**: ALB/CLB require security groups; NLB passes traffic through to target security groups.

### 3. Monitoring & Health
- **Health Checks**: Periodically checks the health of registered targets.
- **Access Logs**: Detailed logs of all requests sent to the load balancer (stored in S3).

## Advanced Configuration
- **Sticky Sessions**: Bind a user's session to a specific target (Uses cookies).
- **Connection Draining (Deregistration Delay)**: Allows in-flight requests to complete before a target is removed.
- **Idle Timeout**: Time the ELB maintains a connection without data.

![[elb-regional-az-architecture.png]]

> [!exam]
> **SAP-C02 Selection Strategy**:
> - Use **ALB** for complex HTTP/HTTPS routing.
> - Use **NLB** if you need a **Static IP** or support for **UDP**.
> - Use **GWLB** to inspect all incoming/outgoing traffic with a firewall appliance.

---
**Practice:** [[ELB - Practice Questions|ELB Practice Questions]]