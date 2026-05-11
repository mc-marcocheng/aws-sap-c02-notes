---
tags: [aws, sap-c02, networking, elb]
---
# ELB Advanced Configuration

> [!abstract] **TL;DR: Exam Critical Facts**
> - **Subnet requirements**: Needs at least a **/27** mask and **8 free IP addresses**.
> - **Cross-Zone Load Balancing**: **ALB** (Free + Enabled by default), **NLB** (Paid + Disabled by default).
> - **SNI (Server Name Indication)**: Supported by **ALB** and **NLB**; NOT supported by CLB.
> - **Pre-warming**: Contact AWS Support for expected massive traffic spikes.
> - **Proxy Protocol**: Used by **NLB** only for client IP passthrough when not using Instance ID targets.

This note covers specialized features, networking requirements, and advanced configurations for Elastic Load Balancing (ALB, NLB, and GWLB).

## 1. Networking & Subnets
- **Subnet Requirements**:
    - Must have at least a **/27** bitmask.
    - Must have at least **8 free IP addresses**.
    - For High Availability, attach at least one subnet per AZ for at least two AZs.
- **Dynamic Scaling**: ELB controller monitors traffic and scales the nodes. DNS TTL is set to **60 seconds**.
- **Internal vs. Internet-facing**:
    - **Internet-facing**: Public subnets; routes to private/public instances.
    - **Internal**: Private subnets; routes to private instances.

---
## 2. Security Groups & NACLs
- **Security Groups**:
    - **Inbound**: Allow traffic on the listener port from the source (Client for Internet-facing, VPC CIDR for Internal).
    - **Outbound**: Allow traffic to back-end instances on both the instance listener port and health check port.
- **NACLs**: Must allow responses on **ephemeral ports** (1024-65535).
- **Instances**: Should only allow incoming traffic from the ELB security group (security group referencing).

---
## 3. SSL Termination & SNI
- **SSL Termination**: ELB decrypts traffic and passes it to instances (usually via HTTP). Reduces CPU load on instances.
- **Security Policy**: A combination of SSL protocols and ciphers. ELB selects the latest predefined policy by default.
- **Server Order Preference**: Allows the load balancer to select the first cipher in its list that matches the client's list.
- **SNI (Server Name Indication)**:
    - Allows multiple certificates on a single listener.
    - Supported by **ALB** and **NLB**.
    - **NOT** supported by Classic Load Balancer (CLB).

---
## 4. Connection Management

### Idle Connection Timeout
- **Default**: 60 seconds.
- Triggered when no data is sent for the specified period. For lengthy operations (file uploads), this should be increased.

### Deregistration Delay (Connection Draining)
- Completes in-flight requests when a target is removed or unhealthy.
- **Range**: 1 - 3600 seconds (Default: 300s).

### Cross-Zone Load Balancing
- Distributes traffic evenly across all instances in all enabled AZs, regardless of the number of instances per AZ.
- **ALB**: Enabled by default (free).
- **NLB**: Disabled by default (charged for inter-AZ data transfer).

---
## 5. Health Checks
- **Parameters**:
    - **Ping Protocol/Port/Path**: The endpoint the ELB checks.
    - **Interval**: Time between checks.
    - **Response Timeout**: Time to wait for a response.
    - **Healthy Threshold**: Consecutive successes to be "InService".
    - **Unhealthy Threshold**: Consecutive failures to be "OutOfService".
- **Behavior**: ELB stops routing traffic to unhealthy instances immediately but continues checking them to restore them if they become healthy.

---
## 6. Advanced Routing & Stickiness

### Sticky Sessions (Session Affinity)
- **ALB**: Uses cookies (Duration-based or Application-based).
- **NLB**: Uses Source IP Stickiness (No cookies).
- **Requirement**: SSL must be terminated on the ELB for cookie-based stickiness.

### Listener Rules (ALB Only)
- **Host-based**: `service1.example.com` vs `service2.example.com`.
- **Path-based**: `/api/*` vs `/images/*`.
- **HTTP Headers/Methods**: Route based on custom headers (e.g., `User-Agent`) or methods (GET, POST).

---
## SAP-C02 Exam Focus

| Feature | Key Fact |
| :--- | :--- |
| **Pre-warming** | For massive spikes, contact AWS to pre-warm the ELB capacity. |
| **Static IP** | Only **NLB** provides Static IPs/EIPs. ALB uses DNS. |
| **Proxy Protocol** | Use for **NLB** to pass client IP if not using Instance ID target type. |
| **Deletion** | Deleting an ELB **does not** terminate the registered instances. |

> [!exam]
> - If you need to **Whitelist a specific IP** on a back-end server, you must use an **NLB** with **EIPs**.
> - For **WebSocket** or **Long Polling**, ensure **Sticky Sessions** are enabled or use **NLB**.
> - If an application needs the **Client's Source IP** and uses **TCP** (non-HTTP), use **Proxy Protocol**.

---
## Related Services
- [[_Networking Index|Networking Index]]
- [[ELB Overview]]
- [[ALB Overview]]
- [[NLB Overview]]

---
**Practice:** [[ELB - Practice Questions|ELB Practice Questions]]