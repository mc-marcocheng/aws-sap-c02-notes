---
tags: ['aws', 'sap-c02', 'vpc']
---
# VPC NAT Gateway

> [!info] Definition
> **NAT (Network Address Translation)** devices allow instances in a private subnet to connect to the internet or other AWS services, but prevent the internet from initiating connections with those instances.

## Overview
- **Function**: Performs both Network Address Translation and Port Address Translation (PAT).
- **Use Case**: Allows private instances to download software updates or access external APIs securely.
- **Comparison**: AWS offers two types of NAT:
    1. **NAT Gateway**: A managed service providing better availability and higher bandwidth.
    2. **NAT Instance**: A self-managed EC2 instance running a NAT AMI.

---
## NAT Gateway (Managed Service)

> [!important] Key Characteristics
> - **Managed**: AWS handles maintenance and scaling.
> - **Bandwidth**: Starts at 5 Gbps and scales automatically up to 100 Gbps.
> - **Redundancy**: Built-in redundancy within a single Availability Zone.
> - **EIP**: A Public NAT Gateway requires an Elastic IP (EIP) address.

### Technical Details
- **Scalability**: Can process up to 10 million packets per second.
- **Protocols**: Supports TCP, UDP, and ICMP.
- **Security**: You cannot associate a Security Group with a NAT Gateway. Instead, use [[Security Groups vs NACLs|Network ACLs]] on the subnet or Security Groups on the private instances.
- **Limitations**:
    - **Idle Timeout**: Connections time out after 350 seconds. Use TCP keepalives to prevent drops.
    - **Simultaneous Connections**: Supports ~55,000 connections per destination IP. To scale, associate up to 8 EIPs (1 primary + 7 secondary).
    - **Routing**: NAT Gateway cannot be used to reach resources over Peering, VPN, or Direct Connect. Subnet route tables must handle those directly.

---
## NAT Gateway Types

### Public NAT Gateway
- **Use Case**: Connectivity to the public internet.
- **Requirement**: Must be placed in a **public subnet** and has an EIP.

### Private NAT Gateway
- **Use Case**: Connectivity to other VPCs or on-premises without using the internet.
- **Requirement**: No EIP required.

### Regional NAT Gateway (New)
> [!info]
> Announced in late 2024, the Regional NAT Gateway automatically spans multiple Availability Zones, simplifying HA architecture without requiring a NAT Gateway in every AZ.

---
## Comparison: NAT Gateway vs. NAT Instance

| Feature | NAT Gateway | NAT Instance |
| :--- | :--- | :--- |
| **Availability** | High (Managed by AWS) | Self-managed (Manual HA) |
| **Bandwidth** | Scales up to 100 Gbps | Limited by instance type |
| **Maintenance** | None (AWS managed) | High (Patching, Scaling) |
| **Cost** | Hourly rate + Data processing | Instance cost + Data transfer |
| **Security Groups** | No (Use NACLs) | Yes |
| **Source/Dest Check** | Not required | **Must be disabled** |

![[nat-gateway-vs-nat-instance.png]]

---
## High Availability Architecture

![[nat-gateway-high-availability.png]]

> [!exam]
> For maximum resiliency (unless using the new Regional NAT Gateway), you should place a NAT Gateway in **each** Availability Zone. If one AZ fails, instances in other AZs can still reach the internet through their respective local NAT Gateways.
>
> If you have a NAT Gateway in only one AZ and that AZ goes down, **all** private subnets across all AZs lose internet access if they route through that single NAT Gateway.

---
## SAP-C02 Exam Tips

- **SPOF**: A single NAT Gateway is a single point of failure for the region if not configured cross-AZ or using the new Regional NAT GW.
- **Cost Optimization**: For low-traffic workloads, a small NAT Instance might be cheaper than a NAT Gateway. However, for production, NAT Gateway is almost always preferred for reliability.
- **Whitelisting**: When a third-party service requires whitelisting your IP, use a NAT Gateway with an Elastic IP. All traffic from your private instances will appear to come from that EIP.
- **Source/Destination Check**: If using a **NAT Instance**, you must **disable** the Source/Destination check attribute on the instance for it to route traffic.

---
## Troubleshooting Checklist

1. **Route Table**: Does the private subnet have a route (0.0.0.0/0) pointing to the NAT Gateway/Instance?
2. **Public Subnet**: Is the NAT device actually in a public subnet (with a route to an IGW)?
3. **Source/Dest Check**: (For NAT Instances only) Is it disabled?
4. **NACLs/SGs**: Do they allow outbound traffic from the private instance and inbound/outbound on the NAT device?
5. **EIP**: Does the Public NAT Gateway have an Elastic IP attached?

---
**References:**
- [[VPC Overview]]
- [[Security Groups vs NACLs]]
- [[VPC Endpoints]]

---
**Practice:** [[VPC NAT Gateway - Practice Questions|VPC NAT Gateway Practice Questions]]