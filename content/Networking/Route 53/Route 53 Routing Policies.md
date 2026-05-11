---
tags: [aws, sap-c02, networking, route53]
---
# Route 53 Routing Policies

Route 53 uses routing policies to determine how it responds to DNS queries. Choosing the right policy is key to global availability and performance.

## 1. Simple Routing
- **Use Case**: Single resource that performs a given function (e.g., one web server).
- **Behavior**: Returns one or more values (e.g., IP addresses) in a random order.
- **Limitation**: Does not support health checks.

## 2. Weighted Routing
- **Use Case**: Load balancing between regions or testing new software versions (Blue/Green, Canary).
- **Behavior**: Assigns weights (0-255) to records. Traffic is distributed based on the proportion of the weight.
- **Example**: 90% to Prod (Weight 90), 10% to Canary (Weight 10).

## 3. Latency-Based Routing (LBR)
- **Use Case**: Directing users to the region that provides the lowest network latency.
- **Behavior**: Route 53 maintains a database of latency between users and AWS regions. It returns the record for the region with the fastest response.

## 4. Failover Routing (Active-Passive)
- **Use Case**: Disaster Recovery.
- **Behavior**: Routes traffic to a **Primary** resource if healthy. If the primary fails its health check, Route 53 switches to the **Secondary** resource.

## 5. Geolocation Routing
- **Use Case**: Localization (content in user's language), legal restrictions, or predictable load balancing.
- **Behavior**: Routes based on the physical location of the user (Continent, Country, or US State).

## 6. Geoproximity Routing
- **Use Case**: Shifting traffic between regions based on a "bias".
- **Behavior**: Routes based on geographic distance between users and resources. Bias allows you to expand or shrink the geographic size of a region.
- **Requirement**: Requires **Traffic Flow** (a paid visual policy builder feature).

## 7. Multivalue Answer Routing
- **Use Case**: Basic DNS-level load balancing with health checks.
- **Behavior**: Returns up to 8 healthy records (IPs) for a single name. Similar to simple routing but with health checks.

---
## Advanced Concepts

### Policy Nesting
You can **nest** routing policies to create complex logic. For example:
1. Create a **Latency-based** record that points to multiple **Weighted** records.
2. Users are first directed to the lowest-latency region, then traffic is distributed according to weights within that region.

---
## Comparison Table

| Policy | Best For | Supports Health Checks? |
| :--- | :--- | :--- |
| **Simple** | Single resource | No |
| **Weighted** | Proportional distribution (Canary) | Yes |
| **Latency** | Performance / Low Latency | Yes |
| **Failover** | Disaster Recovery (Active-Passive) | Yes |
| **Geolocation** | Compliance / Localization | Yes |
| **Geoproximity** | Shifting traffic between regions | Yes |
| **Multivalue** | Availability / Simple Load Balancing | Yes |

> [!exam]
> - **LBR vs Geolocation**: LBR is about **performance** (speed); Geolocation is about **location** (content/compliance).
> - **Alias Records**: You can use Alias records with any of these policies to point to ELBs, S3 buckets, etc., with no DNS query charge.

> [!important]
> Always enable **Evaluate Target Health** on Alias records so Route 53 can failover to other regions/resources if the target (like an ALB) is unhealthy.
---
## Related Services
- [[_Networking Index|Networking Index]]
- [[Route 53 Overview]]

---
**Practice:** [[Route 53 Routing - Practice Questions|Route 53 Routing Practice Questions]]