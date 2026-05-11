---
tags: [aws, sap-c02, networking, vpc]
---
# VPC Endpoints

> [!info] Definition
> **VPC Endpoints** enable private connections between your [[VPC Overview|VPC]] and supported AWS services or VPC endpoint services powered by **PrivateLink**. Traffic does not leave the Amazon network.

## Overview
- **No Internet Required**: Does not require an Internet Gateway, NAT device, VPN, or Direct Connect to access AWS services.
- **Security**: Reduces exposure to the public internet by keeping traffic within the AWS backbone.
- **Availability**: Horizontally scaled, redundant, and highly available.

### Types of Endpoints
1. **Gateway Endpoints**: Used only for **S3** and **DynamoDB**.
2. **Interface Endpoints (PrivateLink)**: Used for most other AWS services (EC2 API, Kinesis, CloudWatch, etc.) and custom services.

![[vpc-endpoints.png]]

---
## Gateway Endpoints

> [!important]
> Gateway endpoints are a **target** in your subnet's route table. They are **free of charge**.

- **Supported Services**: [[S3 Overview|Amazon S3]] and [[DynamoDB Overview|Amazon DynamoDB]].
- **Routing**: You specify the service prefix (e.g., `com.amazonaws.us-east-1.s3`) as the destination and the VPC Endpoint ID as the target.
- **Limitations**:
    - **No Cross-Region**: Does not support cross-region requests.
    - **No On-Prem Access**: Cannot be accessed from on-premises via VPN or Direct Connect.
    - **No Peering Access**: Cannot be used by a peered VPC.

![[aws-vpc-endpoints.png]]

---
## Interface Endpoints (AWS PrivateLink)

> [!info]
> Interface endpoints use an **Elastic Network Interface (ENI)** with a private IP address from your subnet's range.

- **Pricing**: Billed per hour and per GB of data processed.
- **Endpoint Policies**: Interface Endpoints support **Endpoint Policies** — allowing you to restrict which S3 buckets, DynamoDB tables, or other service resources are accessible through the endpoint.
- **Connectivity**:
    - **On-Premises**: Accessible via [[VPN]] or [[Direct Connect Overview|Direct Connect]].
    - **Peering**: Accessible across intra- and inter-region [[VPC Peering]].
- **Private DNS**: Allows you to use the service's default public DNS name (e.g., `ec2.us-east-1.amazonaws.com`) while resolving to the private IP of the endpoint.

### Custom Endpoint Services
- You can create your own application, put it behind a **Network Load Balancer (NLB)** or **Gateway Load Balancer (GWLB)**, and expose it as an Endpoint Service to other AWS accounts.

### Cross-Region PrivateLink
> [!info] New Capability
> Native cross-region connectivity for Interface VPC endpoints allows you to connect to select AWS services (like S3, ECR, Route 53) in other regions within the same partition over the AWS backbone.

---
## S3 VPC Endpoint Strategy

S3 is unique because it supports both endpoint types. Choosing the right one is a common **SAP-C02** topic.

![[s3-strategy-vpc-gateway-endpoints-vs-vpc-interface-endpoints.png]]

| Feature | S3 Gateway Endpoint | S3 Interface Endpoint |
| :--- | :--- | :--- |
| **Cost** | **Free** | Hourly + Data Processing |
| **Access from On-Prem** | No | **Yes** |
| **Cross-Region Access** | No | **Yes** |
| **Access from Peered VPC** | No | **Yes** |
| **Throughput** | High (Direct routing) | Limited by ENI (up to 100 Gbps) |

> [!exam] Strategy Tip
> - Use **Gateway Endpoints** for resources *inside* the same VPC to save costs.
> - Use **Interface Endpoints** when you need to access S3 from on-premises, from a different region, or from a peered VPC.

---
## SAP-C02 Practice Scenarios

> [!info] Scenario 1: Improving S3 Upload Performance
> **Problem**: EC2 instances are uploading large objects to S3 over the internet, causing latency and cost.
> **Solution**: Use a **VPC Endpoint for S3**. This keeps traffic on the AWS backbone and avoids internet bottlenecks.

> [!info] Scenario 2: Minimal Exposure for 3-Tier App
> **Problem**: App servers need to reach DynamoDB but should not have internet access.
> **Solution**: Use a **Gateway VPC Endpoint for DynamoDB** and keep the app servers in a private subnet with no NAT/IGW route.

> [!info] Scenario 3: SaaS Provider with Overlapping CIDRs
> **Problem**: A service provider wants to offer their app to multiple customers who might have overlapping IP ranges.
> **Solution**: **AWS PrivateLink**. Customers create an Interface Endpoint to connect to the provider's NLB. PrivateLink handles the address translation, so overlapping CIDRs are not an issue.

---
## Related Services
- [[_Networking Index|Networking Index]]
- [[VPC Overview]]
- [[S3 Overview]]
- [[DynamoDB Overview]]
- [[Security Groups vs NACLs]]

---
**Practice:** [[VPC Endpoints - Practice Questions|VPC Endpoints Practice Questions]]