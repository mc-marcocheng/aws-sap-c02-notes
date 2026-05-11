---
tags: [aws, sap-c02, networking, vpc]
---
# VPC Overview

> [!info] Definition
> **Amazon Virtual Private Cloud (VPC)** is a logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you define. It is a **Regional** service that spans all Availability Zones (AZs) in the region.

## Core Components

### Subnets
- **Scope**: A subnet resides within a **single Availability Zone** and cannot span multiple AZs.
- **Types**:
    - **Public Subnet**: Has a route to an **Internet Gateway (IGW)**.
    - **Private Subnet**: Does not have a direct route to an IGW.
    - **VPN-only Subnet**: Has a route to a Virtual Private Gateway (VGW).

### IP Addressing
- **IPv4 CIDR**: Size between `/28` (16 IPs) and `/16` (65,536 IPs).
- **Secondary CIDRs**: You can add secondary CIDR blocks to an existing VPC.
- **Reserved IPs**: AWS reserves **5 IP addresses** in every subnet:
    - `.0`: Network address.
    - `.1`: VPC Router.
    - `.2`: Amazon Provided DNS.
    - `.3`: Future use.
    - `.255`: Network broadcast (not supported in VPC, but reserved).

### Elastic Network Interface (ENI)
- A virtual network interface that you can attach to an instance.
- Attributes (IPs, MAC, Security Groups) follow the ENI if moved between instances.

---
## Routing and Connectivity

### Route Tables
- **Main Route Table**: Default table for subnets not explicitly associated with another table.
- **Local Route**: Every route table has a default "local" route for communication within the VPC; it cannot be deleted.
- **Priority**: Most specific route (longest prefix match) wins.

### Internet Gateway (IGW)
- Horizontally scaled, redundant, and highly available.
- Provides a target for internet-routable traffic.
- Performs NAT for instances with public IPs.

### Egress-Only Internet Gateway
- Provides **outbound-only** internet access for **IPv6** traffic from private subnets.
- Prevents the internet from initiating a connection to those instances.

---
## Advanced Networking Services

### Amazon VPC IP Address Manager (IPAM)
- **Centralized Management**: Manage IP addresses across AWS Regions and accounts in an AWS Organization.
- **Automation**: Automates CIDR allocation and prevents overlaps.
- **Advanced Tier**: Integrates with external tools like Infoblox for hybrid cloud management.

### Amazon VPC Lattice
- **Application Networking**: Simplifies service-to-service communication at Layer 4 (TCP) and Layer 7 (HTTP/HTTPS).
- **Zero-Trust**: Built-in authentication and authorization without complex networking (TGW/Peering).
- **Service Discovery**: Automatic discovery without DNS management.

### AWS Network Firewall
- **Managed Security**: Enterprise-grade perimeter defense with Deep Packet Inspection (DPI) and IDS/IPS.
- **Stateful/Stateless**: Supports both stateful and stateless filtering rules.
- **Scaling**: Automatically scales to handle traffic load with a 99.99% SLA.

---
## VPC Sharing & Security

### Shared VPC
- Allows an owner account to share subnets with other accounts (participants) in the same AWS Organization.
- **Benefits**: Centralized network management while allowing teams to manage their own application resources (EC2, RDS).

### Layered Defense
- **Security Groups**: Statefull, instance-level firewall.
- **Network ACLs (NACLs)**: Stateless, subnet-level firewall.

> [!important] Troubleshooting Tip
> If traffic is **ACCEPTED** inbound but **REJECTED** outbound, check the **NACLs**, as Security Groups are stateful (automatic return traffic) but NACLs are stateless (manual return rules needed).

---
## SAP-C02 Exam Strategy

> [!exam]
> - **CIDR Overlap**: Always check for overlapping CIDRs when designing Peering, VPN, or Direct Connect.
> - **Cost vs Performance**: Use [[VPC Endpoints]] to keep traffic off the internet for both security and cost (Gateway Endpoints for S3/DynamoDB are free).
> - **High Availability**: Always distribute resources (subnets, NAT Gateways, ELBs) across multiple AZs.
> - **Hybrid Connectivity**: Know when to use [[VPN]] (quick, cheap, internet-based) vs [[Direct Connect Overview|Direct Connect]] (predictable, high-bandwidth, private).

---
## Summary Table: VPC Components

| Component | HA / Redundancy | Scope | Function |
| :--- | :--- | :--- | :--- |
| **VPC** | Built-in | Regional | Logical isolation |
| **Subnet** | Manual (Multi-AZ) | Availability Zone | Resource grouping |
| **IGW** | Built-in | Regional | Public Internet access |
| **NAT Gateway** | Built-in (within AZ) | Availability Zone | Private internet access (IPv4) |
| **Egress-Only IGW** | Built-in | Regional | Private internet access (IPv6) |
| **VGW** | Built-in | Regional | VPN / Direct Connect hub |
| **TGW** | Built-in | Regional | Multi-VPC / Hybrid hub |

---
## Related Services
- [[_Networking Index|Networking Index]]
- [[VPC NAT Gateway]]
- [[VPC Peering]]
- [[VPC Endpoints]]
- [[Transit Gateway]]
- [[Security Groups vs NACLs]]
- [[VPC Overview|VPC Flow Logs]]

---
**Practice:** [[VPC - Practice Questions|VPC Practice Questions]]