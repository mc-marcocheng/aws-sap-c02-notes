---
tags: [aws, sap-c02, networking, vpc]
---
# VPC Route Tables

A route table contains a set of rules, called routes, that determine where network traffic from your subnet or gateway is directed.

## 1. Route Priority
AWS uses the **longest prefix match** to determine the preferred route. If multiple routes match the destination, the most specific one (highest CIDR prefix) is used.

> [!important]
> The **Local Route** (the VPC's own CIDR) always has the highest priority and cannot be modified or deleted.

## 2. Common Route Targets

| Target | Description |
| :--- | :--- |
| **igw-xxxx** | Internet Gateway (Public Subnet). |
| **nat-xxxx** | NAT Gateway (Private Subnet for IPv4 internet). |
| **eigw-xxxx** | Egress-Only Internet Gateway (Private Subnet for IPv6). |
| **pcx-xxxx** | VPC Peering Connection. |
| **vgw-xxxx** | Virtual Private Gateway (VPN/Direct Connect). |
| **tgw-xxxx** | Transit Gateway. |
| **vpce-xxxx** | Gateway VPC Endpoint (S3/DynamoDB). |
| **eni-xxxx** | Elastic Network Interface (e.g., for a Firewall instance). |

## 3. Propagation
- **VPN/DX Propagation**: Allows the Virtual Private Gateway to automatically propagate routes from your on-premises network to your route tables using BGP.
- **Transit Gateway Propagation**: TGW can also propagate routes to its own internal route tables.

---
## SAP-C02 Edge Case: More Specific Routes
If you have a VPC Peering connection (`10.1.0.0/16`) and a more specific Static Route for a single IP (`10.1.0.5/32`) pointing to a NAT Gateway, traffic for `10.1.0.5` will go to the **NAT Gateway**, while everything else in the `10.1.0.0/16` range goes through the **Peering** connection.

> [!exam]
> If a subnet is not explicitly associated with a route table, it is implicitly associated with the **Main Route Table**. It is a best practice to keep the Main Route Table private and use **Custom Route Tables** for public subnets.

---
## Related Services
- [[_Networking Index|Networking Index]]
- [[VPC Overview|VPC]]
- [[VPC Peering]]
- [[Transit Gateway]]

---
**Practice:** [[VPC - Practice Questions|VPC Practice Questions]]