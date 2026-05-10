---
tags: [aws, sap-c02, networking, security]
---
# Security Groups vs NACLs

AWS provides two layers of security to control network traffic in a [[VPC Overview|VPC]]: Security Groups and Network ACLs (NACLs).

## Comparison Table

| Feature | Security Groups (SG) | Network ACLs (NACL) |
| --- | --- | --- |
| **Layer** | Instance Level (ENI) | Subnet Level |
| **State** | **Stateful**: Return traffic is automatically allowed. | **Stateless**: Return traffic must be explicitly allowed. |
| **Rules** | Supports **Allow** rules only. | Supports **Allow** and **Deny** rules. |
| **Evaluation** | All rules are evaluated before traffic is allowed. | Rules are evaluated in **numerical order**. |
| **Scope** | Applied to specific instances. | Applied to all instances in a subnet. |

## Security Groups (SG)
- Act as a virtual firewall for associated instances.
- **Default SG**: Allows all outbound, allows all inbound from other members of the same SG, denies all other inbound.
- **New SG**: Allows all outbound, denies all inbound by default.
- **Rule Changes**: Applied immediately to all associated instances.

## Network ACLs (NACL)
- Act as a firewall for controlling traffic in and out of one or more subnets.
- **Rule Order**: Evaluated from lowest to highest number. As soon as a match is found, it is applied.
- **Ephemeral Ports**: Because NACLs are stateless, you must allow outbound traffic to ephemeral ports (usually 1024-65535) for clients to receive responses from your servers.
- **Default NACL**: Allows all inbound and outbound.
- **New NACL**: Denies all inbound and outbound by default.

![[security-groups-vs-nacls.jpg]]

> [!exam]
> **SAP-C02 Scenario: Blocking a specific IP**
> If you need to block a single malicious IP address, you **must use a NACL** because Security Groups do not support Deny rules.

## Related Services
- [[_Security Index|Security Index]]
- [[VPC Overview]]
- [[WAF]]
- [[Network Firewall]]

---
**Practice:** [[SG vs NACL - Practice Questions|SG vs NACL Practice Questions]]