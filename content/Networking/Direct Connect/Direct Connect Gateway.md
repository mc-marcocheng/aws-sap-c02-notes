---
tags: [aws, sap-c02, networking, direct-connect]
---
# Direct Connect Gateway (DXGW)

Direct Connect Gateway is a global network resource that simplifies the connection between your on-premises network and multiple VPCs across different AWS Regions and accounts.

## 1. Key Characteristics
- **Global Scope**: A DXGW created in one region can be accessed from all other AWS Regions (excluding China).
- **Multi-Account**: Can connect VPCs owned by different AWS accounts to a single DX connection.
- **VIF Support**: Works with **Private VIFs** (to VGWs) and **Transit VIFs** (to Transit Gateways).

## 2. Connectivity Options

### A. DXGW + Virtual Private Gateway (VGW)
- Connects a single Private VIF to up to **10 VGWs**.
- **Rule**: VPCs cannot have overlapping CIDR blocks.
- **Rule**: DXGW does **not** allow transitive routing between VPCs (VPC A cannot talk to VPC B through the DXGW).

### B. DXGW + Transit Gateway (TGW)
- Connects a **Transit VIF** to a DXGW, which then associates with up to **3 TGWs**.
- Each TGW can connect thousands of VPCs.
- This is the most scalable way to provide on-premises connectivity to a large number of VPCs.

---
## 3. Strategic Comparison: DXGW vs. VGW

| Feature | Direct Connect to VGW | Direct Connect to DXGW |
| :--- | :--- | :--- |
| **Scope** | Single Region | **Global** |
| **VPC Connections** | 1 VPC per Private VIF | Up to 10 VPCs per DXGW |
| **Complexity** | High (1 VIF per VPC) | Low (1 VIF for many VPCs) |
| **Multi-account** | No | **Yes** |

---
## SAP-C02 Exam Scenarios

> [!info] Scenario 1: Multi-Region Access
> **Problem**: You have a DX in `us-east-1` but need to reach a VPC in `eu-west-1`.
> **Solution**: Create a **Direct Connect Gateway**. Associate the Private VIF with the DXGW, and associate the DXGW with the VGW in the `eu-west-1` VPC.

> [!info] Scenario 2: Massive Scalability (Thousands of VPCs)
> **Problem**: You need to connect on-premises to 500+ VPCs across 2 regions.
> **Solution**: Use a **Transit VIF** connected to a **Direct Connect Gateway**, associated with **Transit Gateways** in each region.

> [!important] CIDR Propagation
> When using DXGW, you must specify the prefixes you want to advertise to on-premises. AWS will not automatically advertise all VPC CIDRs unless configured in the association.

> [!exam]
> DXGW does **not** support **Public VIFs**. Public VIFs connect directly to the AWS public service endpoints (like S3) without using a gateway.

---
## Related Services
- [[_Networking Index|Networking Index]]
- [[Direct Connect Overview]]
- [[Transit Gateway]]
- [[VPC Overview|VPC]]

---
**Practice:** [[Direct Connect Gateway - Practice Questions|Direct Connect Gateway Practice Questions]]