---
tags: [aws, sap-c02, alb]
---
# Application Load Balancer (ALB) Overview

The Application Load Balancer (ALB) operates at the application layer (Layer 7), making routing decisions based on the content of the HTTP/HTTPS requests.

## 1. Key Components

### Listeners
- Check for connection requests using a protocol (HTTP/HTTPS) and port (1-65535).
- Each listener has a **Default Rule** and can have multiple prioritized **Rules**.

### Target Groups
- Route requests to one or more registered targets (EC2, ECS tasks, Lambda, or IP addresses).
- **Health Checks** are configured at the target group level.

### Rules
Rules define how traffic is routed to target groups based on conditions:
- **Host-based**: Route by domain name (e.g., `api.example.com`).
- **Path-based**: Route by URL path (e.g., `/images/*`).
- **HTTP Headers/Methods**: Route by custom headers or GET/POST methods.
- **Query String**: Route by specific parameters in the URL.

---
## 2. Advanced Features

### Security & Authentication
- **SSL Termination**: Offload TLS encryption from your targets.
- **OIDC/Cognito Integration**: Offload user authentication to providers like Google, Facebook, or Enterprise AD.
- **WAF Integration**: Attach an AWS WAF Web ACL directly to the ALB.

### Performance
- **HTTP/2 & WebSockets**: Natively supported.
- **Slow Start Mode**: Allows targets to warm up before handling full load.
- **Least Outstanding Requests**: An alternative routing algorithm to Round Robin, ideal for requests with varying processing times.

---
## 3. Deployment Models

### Internet-facing vs. Internal
- **Internet-facing**: Has a public DNS name; routes traffic from the internet. Requires public subnets.
- **Internal**: Routes traffic to targets using private IP addresses.

### Hybrid Load Balancing
- ALBs can route to targets outside the VPC (on-premises or in peered VPCs) using **IP Address** target types over VPN or Direct Connect.

---
## SAP-C02 Strategic Trade-offs

| Requirement | Strategy |
| :--- | :--- |
| **Microservices on one ALB** | Use **Path-based routing** to route `/users` to Service A and `/orders` to Service B. |
| **Zero-downtime Blue/Green** | Use **Weighted Target Groups** to shift traffic (e.g., 90% to Blue, 10% to Green). |
| **Serverless Integration** | Register **AWS Lambda** functions as targets in a target group. |
| **Compliance (Encryption)** | Use **HTTPS Listeners** and re-encrypt traffic to the back-end targets. |

> [!exam]
> - ALB does **NOT** support Static IPs. It provides a DNS name that resolves to dynamic IPs. If you need static IPs, use **NLB** or **Global Accelerator** in front of the ALB.
> - ALB is **Regional** but requires subnets in at least two Availability Zones for high availability.

---
**Practice:** [[ALB - Practice Questions|ALB Practice Questions]]