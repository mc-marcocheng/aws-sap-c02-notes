---
tags: [aws, sap-c02, direct-connect]
---
# Direct Connect Overview

AWS Direct Connect (DX) provides a dedicated physical network connection between your on-premises data center and AWS, bypassing the public internet.

## Connection Types
- **Dedicated Connection**: 1 Gbps, 10 Gbps, or 100 Gbps physical port.
- **Hosted Connection**: Speeds from 50 Mbps up to 10 Gbps, provisioned by an AWS Direct Connect Partner.

## Virtual Interfaces (VIF)
- **Public VIF**: Access public AWS services (S3, SQS, EC2 APIs) in any region.
- **Private VIF**: Access a single VPC via a Virtual Private Gateway (VGW).
- **Transit VIF**: Access multiple VPCs via a **Transit Gateway (TGW)**.

## Direct Connect Gateway (DXGW)
- A global resource that allows you to connect a single DX connection to VPCs in **any AWS Region** (except China).
- Consolidates connectivity to multiple VPCs across different accounts and regions.

## Resiliency Models
1. **High Resiliency**: Two connections to two different Direct Connect locations for 99.9% uptime.
2. **Maximum Resiliency**: Four connections across two locations for 99.99% uptime.
3. **VPN Backup**: Use an IPsec VPN as a low-cost backup for a Direct Connect connection.

![[direct-connect-anatomy.png]]

## Security and Encryption
- Direct Connect traffic is **not encrypted** by default.
- **MACsec**: Provides Layer 2 encryption for 10/100 Gbps dedicated connections.
- **VPN over DX**: Layer 3 encryption using IPsec over the private DX link.

| Feature | DX Public VIF | DX Private VIF |
| --- | --- | --- |
| **Traffic Path** | Private dedicated line | Private dedicated line |
| **Endpoints** | Public IPs (S3, DynamoDB) | Private IPs (EC2 instances) |
| **Scope** | All Regions | Single VPC / Global with DXGW |

> [!exam]
> **SAP-C02 Key Point**: To reach VPCs in multiple regions over one DX connection, you **must** use a **Direct Connect Gateway**. To reach thousands of VPCs, use a **Transit VIF** with a **Transit Gateway**.
---
**Practice:** [[Direct Connect - Practice Questions|Direct Connect Practice Questions]]