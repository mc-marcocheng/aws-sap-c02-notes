---
tags: [aws, sap-c02, networking, route53]
---
# Route 53 Resolver

Route 53 Resolver (formerly ".2" address or AmazonProvidedDNS) provides recursive DNS lookup for VPC resources and is the foundation for hybrid DNS.

## 1. Internal VPC Resolution
- By default, Resolver answers queries for VPC domain names (EC2 internal hostnames) and Private Hosted Zones.
- It uses the VPC's reserved IP address (VPC CIDR + 2).

## 2. Hybrid DNS (Resolver Endpoints)
To bridge DNS between on-premises and AWS, you use Resolver Endpoints over VPN or Direct Connect.

### Inbound Endpoints
- **Direction**: On-premises -> AWS.
- **Use Case**: Allows on-premises servers to resolve names in **AWS Private Hosted Zones**.
- **Setup**: You provide IP addresses from your VPC subnets. On-prem DNS servers are configured to forward queries for `.aws` or `.internal` to these IPs.

### Outbound Endpoints
- **Direction**: AWS -> On-premises.
- **Use Case**: Allows EC2 instances to resolve names for **on-premises services** (e.g., `myservice.corp.internal`).
- **Setup**: You create **Resolver Rules** that specify which domains should be forwarded to which on-premises DNS IP addresses.

---
## 3. Resolver Rules
- **Forward Rules**: Forward queries for specific domains to specific DNS servers (Outbound).
- **System Rules**: Override a forward rule for a specific sub-domain (uses default VPC resolver).
- **Recursive Rules**: (Default) Resolves via the internet.

## 4. Route 53 Resolver DNS Firewall
- **Function**: Filters outbound DNS queries from your VPCs.
- **Security**: Prevents data exfiltration via DNS and blocks access to known malicious domains.
- **Configuration**: Uses **Rule Groups** (lists of domains to block/allow) associated with VPCs.

---
## SAP-C02 Strategic Scenarios

| Requirement | Solution |
| :--- | :--- |
| **On-prem needs to resolve S3 PrivateLink** | Inbound Endpoint + Private Hosted Zone. |
| **VPC needs to resolve on-prem AD** | Outbound Endpoint + Forwarding Rule. |
| **Shared DNS across 100 VPCs** | Centralized TGW with Resolver Endpoints in a **shared services VPC**. Share forwarding rules with other accounts via **Resource Access Manager (RAM)**. |
| **Block C&C (Command & Control) domains** | Route 53 DNS Firewall with Managed Domain Lists. |

> [!exam]
> Resolver Endpoints are **Regional**. To have hybrid DNS in multiple regions, you must deploy endpoints in each region or use a Transit Gateway with peered TGWs and centralized DNS.

---
## Related Services
- [[_Networking Index|Networking Index]]
- [[Route 53 Overview]]
- [[VPC Overview|VPC]]
- [[Direct Connect Overview|Direct Connect]]
- [[VPN]]

---
**Practice:** [[Route 53 Resolver - Practice Questions|Route 53 Resolver Practice Questions]]