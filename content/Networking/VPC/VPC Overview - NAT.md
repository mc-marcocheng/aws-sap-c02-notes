---
tags: [aws, sap-c02, networking, vpc]
---
# VPC NAT & Egress Options

For instances in private subnets, AWS provides several mechanisms for outbound-only connectivity.

## 1. NAT Gateway vs. NAT Instance
For a full breakdown of the managed NAT Gateway service, see [[VPC NAT Gateway]].

### Key Architectural Trade-off
- **NAT Gateway**: Scalable, managed, 100 Gbps, redundant within an AZ.
- **NAT Instance**: Cheap for small dev/test, supports Security Groups, requires disabling **Source/Destination Check**.

## 2. Egress-Only Internet Gateway (IPv6)
A horizontally scaled, redundant, and highly available VPC component that allows outbound communication over **IPv6** from instances in your VPC to the internet, and prevents the internet from initiating an IPv6 connection with your instances.

> [!exam]
> - **NAT Gateway** = IPv4 only.
> - **Egress-Only IGW** = IPv6 only.
> - Both are used to allow private resources to reach the internet while remaining unreachable from it.

---
## 3. Shared VPC Networking
Allows multiple AWS accounts to create their resources (EC2, RDS) in shared, centrally-managed VPCs.

- **VPC Owner**: Manages the VPC, subnets, route tables, and gateways.
- **Participants**: Can see and use the shared subnets but cannot see resources owned by other participants.
- **Benefits**: Simplifies IP address management and reduces the number of VPCs.

---
## SAP-C02 Scenario: Blocking Malicious IPs at the NAT level
- You cannot block IPs at a **NAT Gateway** (no Security Groups).
- You **can** block IPs at a **NAT Instance** using its Security Group.
- **Best Practice**: Block malicious IPs at the **Network ACL (NACL)** for the subnet, which affects both NAT Gateways and instances.

> [!info]
> For high-performance internet egress for thousands of instances, consider using a **Transit Gateway with an Egress VPC** containing a cluster of NAT Gateways or Firewalls.

---
## Related Services
- [[_Networking Index|Networking Index]]
- [[VPC NAT Gateway]]
- [[VPC Overview|VPC]]
- [[Transit Gateway]]

---
**Practice:** [[VPC NAT Gateway - Practice Questions|VPC NAT Gateway Practice Questions]]