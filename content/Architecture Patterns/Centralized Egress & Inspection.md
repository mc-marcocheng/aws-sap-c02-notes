---
tags: [aws, sap-c02, architecture, security]
---
# Centralized Egress & Inspection

A common pattern for enterprises that require all outbound internet traffic or cross-VPC traffic to be inspected by a firewall.

## Architecture using Transit Gateway
1. **Spoke VPCs**: Application VPCs have no IGW or NAT Gateway. The default route (`0.0.0.0/0`) points to the [[Transit Gateway]].
2. **Inspection VPC**: A dedicated VPC attached to the TGW. Contains [[Network Firewall]] or third-party appliances using [[GWLB Overview|GWLB]].
3. **Egress VPC**: Optionally combined with Inspection. Contains NAT Gateways and an IGW for internet access.

## Traffic Flow
Spoke VPC → Transit Gateway → Inspection VPC (Firewall/GWLB) → NAT Gateway → Internet.

## Related Notes
- [[Transit Gateway]]
- [[Network Firewall]]
- [[GWLB Overview|GWLB]]
