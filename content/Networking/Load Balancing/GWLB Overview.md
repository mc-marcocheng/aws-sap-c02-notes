---
tags: [aws, sap-c02, networking, gwlb, security]
---
# Gateway Load Balancer (GWLB)

Gateway Load Balancer enables you to deploy, scale, and manage virtual appliances, such as firewalls, intrusion detection and prevention systems (IDS/IPS), and deep packet inspection systems.

## Key Features
- **Layer 3**: Operates at the network layer.
- **GENEVE Protocol**: Uses GENEVE to encapsulate traffic and route it to the virtual appliances transparently.
- **Bump-in-the-wire**: Traffic passes through the GWLB without the source or destination IP addresses being altered.

> [!exam]
> Choose GWLB when you need **centralized egress/inspection** across multiple VPCs using third-party firewall appliances. Often used in conjunction with [[Transit Gateway]].

## Related Services
- [[_Networking Index|Networking Index]]
- [[Transit Gateway]]
- [[Network Firewall]]

---
**Practice:** [[GWLB - Practice Questions|GWLB Practice Questions]]
