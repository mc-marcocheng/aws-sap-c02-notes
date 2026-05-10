---
tags: [aws, sap-c02, vpc]
---
# VPC Peering

> [!info] Definition
> A **VPC Peering connection** is a networking connection between two [[VPC Overview|VPCs]] that enables routing traffic between them using private IPv4 or IPv6 addresses.

## Overview
- **Scope**: Supports intra-region and inter-region peering.
- **Accounts**: Can be established between your own VPCs or with a VPC in another AWS account.
- **Relationship**: It is a **one-to-one** relationship.
- **Encryption**: Inter-region traffic is encrypted. All traffic stays on the AWS global backbone and never traverses the public internet.
- **Performance**: No single point of failure or bandwidth bottleneck.

### Pricing
- **Connection**: No charge to create or maintain a VPC peering connection.
- **Data Transfer**:
    - **Free**: Within the same Availability Zone (even between different accounts).
    - **Charged**: Cross-AZ or Cross-Region data transfer rates apply.

![[aws-vpc-peering.png]]

---
## VPC Peering Connectivity

### Setup Process
1. **Request**: The owner of the *Requester VPC* sends a request to the *Accepter VPC*.
2. **Acceptance**: The peering connection is activated once accepted.
3. **Routing**: **Manual update** of route tables on both VPCs is required.
4. **Security**: Security group rules must be updated to allow traffic from the peered VPC.

> [!important]
> Peering alone does not grant access. You **MUST** update route tables and security groups on both sides.

---
## Limitations & Rules

> [!critical] Key Constraints
> - **CIDR Overlap**: Does **not** support overlapping or matching CIDR blocks.
> - **Transitive Peering**: **NOT supported**. If VPC A is peered with VPC B, and VPC B is peered with VPC C, VPC A *cannot* talk to VPC C through B.
> - **Edge-to-Edge Routing**: A VPC cannot use its peer's gateways (Internet Gateway, NAT Gateway, VPN, Direct Connect, or VPC Endpoints).

### Quotas
- **Active Connections**: Default limit is **50** per VPC (expandable to **125**).
- **Outstanding Requests**: Default limit is **25**. Requests expire after 7 days if not accepted.

### Technical Details
- **Jumbo Frames**: Supported within the same region (MTU 9001); limited to 1500 bytes for inter-region.
- **Security Group Referencing**:
    - **Intra-region**: You can reference a security group from a peered VPC.
    - **Inter-region**: You **cannot** reference a peer's security group in rules.

---
## VPC Peering Architecture

![[vpc-peering-shared-services.png]]

- **Shared Services**: Often used to provide shared resources (LDAP, Monitoring, Active Directory) to multiple VPCs.
- **Mesh vs Hub**: As the number of VPCs grows, a full mesh of peering becomes difficult to manage. For larger scales, use [[Transit Gateway|Transit Gateway]].

---
## Comparison: Peering vs. Transit Gateway vs. PrivateLink

![[vpc-peering-vs-transit-vpc-vs-transit-gateway-v1-scaled.jpg]]

| Feature | VPC Peering | AWS Transit Gateway | AWS PrivateLink |
| :--- | :--- | :--- | :--- |
| **Topology** | Point-to-Point (Mesh) | Hub-and-Spoke | Service-to-Consumer |
| **Transitive Routing** | No | Yes | N/A (Unidirectional) |
| **CIDR Overlap** | Not allowed | Not allowed | **Allowed** |
| **Cost** | Low (Data transfer only) | Moderate (Hourly + Data processing) | Moderate (Hourly + Data processed) |
| **Scalability** | Complex at scale | High (Thousands of VPCs) | High (Service-oriented) |
| **Best For** | Simple 1:1 connections | Centralized hub for many VPCs | Exposing a specific service/SaaS |

---
## SAP-C02 Exam Scenarios

> [!exam]
> - **Transitive Connectivity**: Remember that VPC Peering is **NOT transitive**. For a hub-and-spoke model that supports transitive routing, use **Transit Gateway**.
> - **Overlapping CIDRs**: VPC Peering will fail if CIDR ranges overlap. Use **PrivateLink** to connect VPCs with overlapping CIDRs.
> - **Inter-Region Cost**: VPC Peering is often the most cost-effective way to connect two VPCs across regions for high-bandwidth traffic compared to VPN.

> [!info] Scenario 1: Transitive Routing
> **Problem**: Dev is peered to Test, and Test is peered to Prod. Dev needs to reach Prod.
> **Solution**: Create a direct peering connection between Dev and Prod. Transitive peering is not supported.

> [!info] Scenario 2: Inter-Region Cost
> **Problem**: Connecting VPCs in different regions cost-effectively.
> **Solution**: **VPC Peering** is generally more cost-effective than VPN for high-bandwidth needs because it uses the AWS backbone, though data transfer charges still apply.

> [!info] Scenario 3: SaaS Exposure
> **Problem**: A provider wants to share an application with customers who might have overlapping CIDRs.
> **Solution**: **AWS PrivateLink**. It avoids CIDR conflicts and doesn't require full network peering.

---
**Practice:** [[VPC Peering - Practice Questions|VPC Peering Practice Questions]]