---
tags: [aws, sap-c02, transit]
---
# Transit Gateway Overview

> [!info] Definition
> **AWS Transit Gateway (TGW)** is a highly available and scalable regional network transit hub that interconnects [[VPC Overview|VPCs]] and on-premises networks using a hub-and-spoke architecture.

## Overview
- **Centralized Routing**: Acts as a regional virtual router, consolidating routing configurations.
- **Security**: Traffic stays on the AWS global backbone, is automatically encrypted, and never traverses the public internet.
- **Regional Service**: Connects resources within the same region. TGWs across different regions can be **peered** for global connectivity.
- **Resource Sharing**: Use **AWS Resource Access Manager (RAM)** to share a TGW with other accounts in your organization.

![[transit-gateway.png]]

---
## Transit Gateway Attachments

A TGW attachment is the connection between a resource and the TGW. Supported types include:
- **VPC Attachment**: Connects a VPC. You specify one subnet per AZ for the TGW to place an ENI.
- **VPN Attachment**: Connects an AWS Site-to-Site VPN.
- **Direct Connect Gateway**: Connects an AWS Direct Connect link.
- **Peering Attachment**: Connects two Transit Gateways (same or different region).
- **Connect Attachment**: Used for SD-WAN or third-party appliances via GRE tunnels.

---
## Transit Gateway Routing

> [!important]
> TGW routes traffic between attachments using **Transit Gateway Route Tables**. You must also update the **subnet route tables** in your VPCs to point traffic (e.g., to other VPCs or on-prem) to the TGW.

- **Propagation**: Routes can be automatically propagated from VPCs, VPNs, and Direct Connect.
- **Associations**: Each attachment is associated with exactly one TGW route table.
- **Dynamic Routing**: Supports BGP for VPN and Direct Connect attachments.

---
## Advanced Features

### Appliance Mode
- **Use Case**: Centralized security inspection (firewall/IPS) using appliances in a separate "Security VPC".
- **Function**: Ensures network flows are symmetrically routed to the same AZ and network appliance for the lifetime of the flow.

### Transit Gateway Connect
- **Use Case**: Native integration with SD-WAN appliances.
- **Protocols**: Supports **GRE** (Generic Routing Encapsulation) for high performance and **BGP** for dynamic routing.

### Transit Gateway Peering
- **Inter-Region**: Build global networks over the AWS backbone.
- **Intra-Region**: Connect TGWs within the same region (useful for organizational separation).

![[transit-gateway-intra-and-inter-region-peering.png]]

---
## Comparison: Peering vs. Transit Gateway vs. Transit VPC

![[vpc-peering-vs-transit-vpc-vs-transit-gateway-v1-scaled.jpg]]

| Feature | VPC Peering | Transit Gateway | Transit VPC (Software) |
| :--- | :--- | :--- | :--- |
| **Architecture** | Mesh | Hub-and-Spoke | Hub-and-Spoke (Legacy) |
| **Scalability** | Low (Mesh becomes complex) | **High** (Thousands of VPCs) | Moderate |
| **Transitive Routing** | No | **Yes** | Yes |
| **Management** | Individual connections | Centralized | High overhead (Managing EC2s) |
| **Throughput** | High (Direct) | High (Scales elastically) | Limited by EC2 instance |

---
## Best Practices

- **Separate Subnet**: Use a small, dedicated `/28` subnet in each AZ for the TGW VPC attachment.
- **AZ Coverage**: Enable the TGW for every AZ where you have workloads. Resources in AZs without an attachment cannot reach the TGW.
- **ASN Management**: Use unique Autonomous System Numbers (ASN) for each TGW in your network.
- **Monitoring**: Use **Transit Gateway Network Manager** for a global view and real-time alerts across your private network.

---
## SAP-C02 Exam Scenarios

> [!exam]
> - **Scale**: Migrate from VPC Peering to **Transit Gateway** when managing hundreds of VPCs to reduce complexity.
> - **Hybrid Access**: Use a **Direct Connect Gateway** attached to a **Transit Gateway** to share a single Direct Connect link across multiple accounts and VPCs.
> - **Security**: Use **Appliance Mode** for centralized traffic inspection to ensure symmetric routing to stateful security appliances.

> [!info] Scenario 1: Hundreds of VPCs
> **Problem**: A company is struggling to manage a mesh of VPC Peering as they scale to hundreds of VPCs.
> **Solution**: Migrate to **AWS Transit Gateway**. It provides a hub-and-spoke model that significantly reduces management overhead.

> [!info] Scenario 2: Centralized Hybrid Access
> **Problem**: Multiple AWS accounts need consistent access to on-premises services via a single Direct Connect link.
> **Solution**: Attach the **Direct Connect Gateway** to a **Transit Gateway**. All VPCs attached to the TGW can then share the DX link.

> [!info] Scenario 3: Egress Inspection
> **Problem**: All outbound internet traffic from multiple VPCs must be inspected by a third-party firewall cluster.
> **Solution**: Create a central Egress VPC with the firewalls and enable **Appliance Mode** on the TGW attachment to ensure symmetric traffic flow.

---
**References:**
- [[VPC Overview]]
- [[VPN]]
- [[Direct Connect Overview]]
- [[VPC Peering]]

---
**Practice:** [[Transit Gateway - Practice Questions|Transit Gateway Practice Questions]]