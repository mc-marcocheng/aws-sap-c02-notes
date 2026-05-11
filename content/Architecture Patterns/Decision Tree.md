---
tags: [aws, sap-c02, architecture, strategy]
---
# Architecture Decision Tree

Quick reference guide for common exam decision points.

## Storage
- Shared Linux file storage → **EFS**
- Shared Windows file storage → **FSx for Windows**
- Shared multi-protocol (NFS+SMB) → **FSx for NetApp ONTAP**
- HPC file storage with S3 backend → **FSx for Lustre**

## Networking
- Static IPs for load balancer → **NLB** (or Global Accelerator + ALB)
- Block a single IP → **NACL** (deny rule)
- Layer 7 filtering / SQLi / XSS → **WAF**
- DPI / IPS across multiple VPCs → **Network Firewall** or **GWLB**
- Centralized rule enforcement → **Firewall Manager**
- Overlapping CIDRs → **PrivateLink**

## Compute
- Long-running batch jobs → **AWS Batch**
- Short event-driven scripts → **Lambda**
- Serverless containers → **Fargate**
- Millisecond edge execution → **CloudFront Functions**
- Hybrid local computing → **Outposts**

## Related Notes
- [[_Architecture Patterns Index|Architecture Patterns Index]]
