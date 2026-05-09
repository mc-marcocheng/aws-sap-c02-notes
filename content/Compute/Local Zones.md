---
tags: [aws, sap-c02, local-zones]
---
# AWS Local Zones

AWS Local Zones are a type of AWS infrastructure deployment that places compute, storage, database, and other select services closer to large population, industry, and IT centers where no AWS Region exists today.

## Key Concepts
- **Purpose:** Deliver single-digit millisecond latency to end-users in a specific metropolitan area (e.g., Los Angeles, Miami, Chicago) for latency-sensitive applications like video rendering, real-time gaming, and electronic trading.
- **Architecture:** Local Zones are extensions of an AWS Region (the "parent region"). You enable a Local Zone, extend your VPC by creating a subnet in that Local Zone, and deploy resources directly into it.
- **Supported Services:** EC2, EBS, FSx, ALB, EMR, RDS, ElastiCache. (Services vary by zone).
- **Network Routing:** You can use an Internet Gateway in the VPC, and AWS routes the traffic in and out of the Local Zone directly, rather than hair-pinning it back to the parent region.

> [!exam]
> If a scenario demands single-digit millisecond latency to **end-users in a specific large metropolitan city** (like Los Angeles) and they don't have their own data center (Outposts) or rely exclusively on 5G (Wavelength), the answer is **AWS Local Zones**.

---
**Practice:** [[Local Zones - Practice Questions|Local Zones Practice Questions]]