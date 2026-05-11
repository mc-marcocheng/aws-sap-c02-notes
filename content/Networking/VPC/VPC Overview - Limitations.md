---
tags: [aws, sap-c02, networking, vpc]
---
# VPC Limitations & Quotas

Understanding VPC limits is essential for large-scale architectural design in the SAP-C02 exam.

## 1. CIDR and IP Limits
- **VPC Size**: Minimum `/28`, Maximum `/16`.
- **Secondary CIDRs**: You can associate up to 5 CIDR blocks with a VPC. Secondary CIDR blocks must be from the same RFC 1918 range as the primary OR from the `100.64.0.0/10` range (CG-NAT).
- **Reserved IPs**: 5 IP addresses are always reserved in every subnet (Network, Router, DNS, Future, Broadcast).

## 2. Resource Quotas (Soft Limits)
Most VPC limits can be increased by contacting AWS Support.

| Resource | Default Limit |
| :--- | :--- |
| **VPCs per Region** | 5 |
| **Subnets per VPC** | 200 |
| **Internet Gateways per Region**| 5 |
| **NAT Gateways per AZ** | 5 |
| **VPC Peering Connections** | 50 (max 125) |
| **Security Groups per VPC** | 2,500 |
| **Rules per Security Group** | 60 Inbound / 60 Outbound |

## 3. Performance Limitations
- **Security Group Evaluation**: Too many rules can impact performance.
- **VPC Peering**: No single point of failure, but limited to 1500 byte MTU for inter-region peering.
- **Transit Gateway**: Each TGW attachment supports up to 50 Gbps of bursty throughput.

---
## SAP-C02 Strategic Insight: Dealing with Limits

> [!exam]
> - **Exhausting IP addresses**: If you run out of IPs in a VPC, you can add **Secondary CIDR blocks** (must be within allowed ranges and not overlap).
> - **Reaching Peering Limits**: If you exceed the 125 peering limit, migrate to **AWS Transit Gateway**, which supports thousands of VPC attachments.
> - **Security Group Rule Limits**: If you hit the 60-rule limit, consider using **Security Group Referencing** (allowing a security group ID instead of individual IPs) or **AWS Network Firewall**.

---
## Related Services
- [[_Networking Index|Networking Index]]
- [[VPC Overview|VPC]]
- [[Transit Gateway]]
- [[VPC Peering]]

---
**Practice:** [[VPC - Practice Questions|VPC Practice Questions]]