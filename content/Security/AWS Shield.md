---
tags: [aws, sap-c02, shield]
---
# AWS Shield

AWS Shield is a managed Distributed Denial of Service (DDoS) protection service that safeguards applications running on AWS. It provides always-on detection and automatic inline mitigations.

## Shield Tiers

### 1. AWS Shield Standard
- **Availability**: Provided to all AWS customers at no additional charge.
- **Protection**: Defends against the most common, frequently occurring Layer 3 and Layer 4 DDoS attacks.
- **Optimized with**: Use with **[[CloudFront Overview|CloudFront]]** and **[[Route 53 Overview|Route 53]]** for comprehensive availability protection against all known infrastructure attacks.

### 2. AWS Shield Advanced
- **Target Resources**: EC2, ELB, CloudFront, Global Accelerator, and Route 53.
- **Advanced Mitigation**: Protects against large and sophisticated DDoS attacks, including Layer 7 (Application Layer) attacks like HTTP floods.
- **Key Benefits**:
    - **24/7 Access to SRT**: Access to the AWS Shield Response Team (SRT).
    - **DDoS Cost Protection**: Safeguards against scaling charges resulting from DDoS-related usage spikes.
    - **AWS WAF Included**: Advanced customers get AWS WAF at no extra cost for protected resources.
    - **Centralized Management**: Uses **AWS Firewall Manager** to automatically apply policies across multiple accounts and resources.

## Comparison of Shield Tiers

| Feature | Shield Standard | Shield Advanced |
| --- | --- | --- |
| **Cost** | Free | $3,000/month + usage |
| **Layer 3/4 Protection** | Yes (Common) | Yes (Sophisticated) |
| **Layer 7 Protection** | No | Yes (via WAF) |
| **SRT Support** | No | Yes (24/7) |
| **Cost Protection** | No | Yes |
| **WAF Integration** | Manual | Automatic / Included |

> [!exam]
> For SAP-C02, **Shield Advanced** is the correct choice when a scenario mentions **cost protection** against scaling spikes or the need for **24/7 specialized support (SRT)** during an attack.

## Attack Categories
- **Network Volumetric (Layer 3)**: Saturate network capacity.
- **Network Protocol (Layer 4)**: Abuse protocols (e.g., TCP SYN flood).
- **Application Layer (Layer 7)**: Flood application with valid queries (e.g., web request floods).

![[aws-high-availability-and-fault-tolerance.png]]

---
**Practice:** [[Shield - Practice Questions|Shield Practice Questions]]