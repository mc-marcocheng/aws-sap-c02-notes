---
tags: [aws, sap-c02, network-firewall, security]
---
# AWS Network Firewall

AWS Network Firewall is a managed, stateful network firewall and intrusion prevention system (IPS) for your [[VPC Overview|Amazon VPC]].

## Architectural Patterns & Key Facts
- **Deployment:** Deployed via a firewall endpoint in a dedicated subnet (Firewall Subnet) within your VPC. You use VPC route tables to route traffic through this endpoint (e.g., routing traffic from a private subnet to the firewall, and then to a NAT Gateway or Internet Gateway).
- **Rule Engine:** Supports stateless rules (processed first, good for dropping DDoS/known bad IPs) and stateful rules (Suricata compatible, IPS/IDS, deep packet inspection, protocol identification).
- **Domain Filtering:** Can filter outbound HTTP/HTTPS traffic based on domain names (FQDNs), allowing you to restrict instances to only access specific trusted domains (e.g., `*.github.com`).
- **TLS Inspection:** Supports inbound and outbound TLS inspection (decryption and re-encryption) to inspect encrypted traffic for malware or data exfiltration.
- **Centralized Deployment Pattern:** Often deployed in a Centralized Inspection VPC connected via [[Transit Gateway|AWS Transit Gateway]]. All East-West (VPC-to-VPC) and North-South (VPC-to-Internet) traffic is routed through the Transit Gateway to the Inspection VPC, processed by the Network Firewall, and then routed to its destination.

> [!exam] SAP-C02 Exam Tip
> If an exam question requires **deep packet inspection (DPI)**, **Intrusion Prevention (IPS)**, or filtering outbound traffic by **domain name (FQDN)** in a VPC, the answer is **AWS Network Firewall** (or sometimes a third-party appliance on EC2, but AWS prefers its native service).
> Understand the routing: In an edge deployment, traffic from IGW -> Edge Association Route Table -> Firewall Subnet -> Public Subnet (ALB/EC2).

## Related Services
- [[_Security Index|Security Index]]
- [[VPC Overview]]
- [[Transit Gateway]]
- [[WAF]]
- [[Firewall Manager]]

---
**Practice:** [[Network Firewall - Practice Questions|Network Firewall Practice Questions]]