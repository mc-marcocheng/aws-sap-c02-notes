---
tags: [aws, sap-c02, networking, vpc, privatelink]
---
# AWS PrivateLink

AWS PrivateLink provides private connectivity between VPCs, AWS services, and your on-premises networks, without exposing your traffic to the public internet.

## Key Features
- **Architecture**: Powered by VPC Endpoints (Interface Endpoints).
- **Directional**: Connections are strictly one-way (consumer initiates connection to the provider).
- **Overlapping CIDRs**: Since PrivateLink does not route traffic but instead uses ENIs and NAT, it natively supports connecting VPCs with overlapping IP address ranges.
- **SaaS Exposure**: Allows you to securely expose your services to thousands of other AWS accounts (consumers) without VPC Peering or Transit Gateway.

> [!exam]
> Choose PrivateLink when you need to provide or consume a service across VPCs with **overlapping CIDRs**, or when you want to provide a service to third-party AWS accounts securely without managing complex routing.

## Related Services
- [[_Networking Index|Networking Index]]
- [[VPC Endpoints]]
- [[VPC Peering]]

---
**Practice:** [[PrivateLink - Practice Questions|PrivateLink Practice Questions]]
