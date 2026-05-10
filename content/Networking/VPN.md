---
tags: ['aws', 'sap-c02', 'vpn']
---
# VPN Overview

## AWS [[VPC Overview|VPC]] VPN

> [!info] AWS VPN Overview
> AWS VPN connections are used to extend on-premises data centers to AWS, providing secure IPSec connections between the data center or branch office and AWS resources.

### VPN Types
- **AWS Site-to-Site VPN**: Connects your on-premises network to your VPC. Also known as AWS Hardware VPN or AWS Managed VPN.
- **AWS Client VPN**: A managed client-based VPN service that enables secure access to AWS resources and on-premises networks from any location.
- **AWS VPN CloudHub**: A hub-and-spoke model for connecting multiple branch offices.
- **AWS Software VPN**: Uses a third-party software VPN appliance running on an EC2 instance.

---
## VPN Components

![[aws-vpn-components.png]]

### Virtual Private Gateway (VGW)
- The VPN concentrator on the AWS side of the VPN connection.
- Provides two VPN endpoints for automatic failover.

### Customer Gateway (CGW)
- A physical device or software application on the customer side of the VPN connection.
- **Tunnel Initiation**: By default, the CGW must initiate the IKE negotiation process by generating traffic. VGW does not initiate.
- **Keepalives**: If the tunnel goes down due to idle time (usually 10 seconds), use a network monitoring tool to generate keepalive pings (e.g., IP SLA).

### Transit Gateway (TGW)
- A transit hub that can interconnect VPCs and on-premises networks.
- Supports both IPv4 and IPv6 traffic inside VPN tunnels.
- Higher scalability than VGW.

---
## VPN Routing Options

> [!important]
> For a VPN connection, you must update the subnet route tables to direct traffic destined for the on-premises network to the Virtual Private Gateway (VGW) or Transit Gateway (TGW).

### Static Routing
- Used if the CGW device does not support BGP.
- You must manually specify the IP prefixes (routes) to be communicated to the VGW.

### BGP Dynamic Routing
- Recommended if the device supports Border Gateway Protocol (BGP).
- **Auto-discovery**: The device uses BGP to advertise its routes to the VGW.
- **Robustness**: Offers better liveness detection and faster failover between tunnels.

---
## VPN Route Priority

When multiple routes exist for the same prefix, VGW prioritizes them as follows:
1. **Direct Connect (DX)**: BGP propagated routes from an AWS [[Direct Connect Overview|Direct Connect]] connection.
2. **Static Routes**: Manually added static routes for a Site-to-Site VPN connection.
3. **VPN BGP**: BGP propagated routes from a Site-to-Site VPN connection.

> [!exam]
> If prefixes are identical across multiple BGP-based VPN connections:
> - Shortest **AS PATH** is preferred.
> - Lowest **MED** (Multi-Exit Discriminator) is preferred if AS PATH lengths are equal.

---
## VPN Limitations

- **IPSec only**: Supports only IPSec tunnel mode; transport mode is not supported.
- **VPC Limit**: Only one VGW can be attached to a VPC at a time.
- **No IPv6 on VGW**: Virtual Private Gateways do not support IPv6 (Transit Gateway does).
- **Transitive Routing**: VGW does not support transitive routing (e.g., On-prem -> VGW -> Peered VPC). Use [[Transit Gateway|Transit Gateway]] for transitive needs.
- **MTU**: Does not support Path MTU Discovery.
- **Bandwidth**: Typically provides up to 1.25 Gbps per tunnel. Multiple tunnels/ECMP (with TGW) can be used to scale.

---
## VPN Connection Redundancy

![[vpn-connection-redundancy.png]]

- **Tunnel Redundancy**: Each AWS Site-to-Site VPN connection provides two tunnels to different AWS endpoints for high availability.
- **CGW Redundancy**: To protect against CGW failure, set up a second VPN connection using a second physical CGW device.
- **BGP Recommendation**: Use BGP for dynamic failover between redundant paths.

---
## VPN CloudHub

![[vpn-cloudhub-architecture.png]]

- **Model**: Simple hub-and-spoke model using a VGW.
- **Use Case**: Connecting multiple branch offices (spokes) to each other and to the VPC.
- **Requirements**:
    - Each CGW must have a unique BGP ASN.
    - Sites must not have overlapping IP ranges.
    - Low-cost alternative for primary or backup connectivity.

---
## Comparison: VPN vs Direct Connect

![[aws-direct-connect-vs-vpn.jpg]]

| Feature | AWS Site-to-Site VPN | AWS Direct Connect |
| :--- | :--- | :--- |
| **Connectivity** | Public Internet | Private Network (Dedicated) |
| **Setup Time** | Minutes | Weeks to Months |
| **Cost** | Low (Per hour + Data transfer) | High (Port fees + Data transfer) |
| **Performance** | Variable (Internet-dependent) | Consistent & Predictable |
| **Encryption** | IPSec Encrypted by default | No encryption by default (Can add VPN over DX) |
| **Bandwidth** | Up to 1.25 Gbps per tunnel | 1 Gbps, 10 Gbps, 100 Gbps |

> [!exam]
> For **SAP-C02**, remember that you can combine VPN and Direct Connect:
> - **VPN over Direct Connect**: For private, high-bandwidth, *and* encrypted connectivity.
> - **VPN as Backup for DX**: Use a VPN connection as a lower-cost failover for a Direct Connect link.

---
## Related Services
- [[_Networking Index|Networking Index]]
- [[Direct Connect Overview|Direct Connect]]
- [[Transit Gateway]]
- [[VPC Overview|VPC]]

---
**Practice:** [[VPN - Practice Questions|VPN Practice Questions]]