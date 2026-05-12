---
tags: [compute, aws, sap-c02, ec2]
---
# EC2 Overview

Amazon Elastic Compute Cloud (Amazon EC2) provides scalable computing capacity in the AWS Cloud. It eliminates the need to invest in hardware upfront, allowing for faster development and deployment of applications.

## Core Components

> [!info] **Key Features**
> - **Instances**: Virtual computing environments.
> - **Amazon Machine Images (AMIs)**: Preconfigured templates containing the OS and software. See [[#Amazon Machine Images (AMI)]].
> - **Instance Types**: Various configurations of CPU, memory, storage, and networking capacity.
> - **Key Pairs**: Secure login information (Public key stored by AWS, private key by user).
> - **Instance Store**: Temporary (ephemeral) storage volumes deleted when the instance is stopped or terminated.
> - **EBS Volumes**: Persistent storage volumes using [[EBS Overview|EBS]].
> - **Security Groups**: Virtual firewalls to control inbound and outbound traffic.
> - **Elastic IP Addresses**: Static IPv4 addresses for dynamic cloud computing.

## Amazon Machine Images (AMI)
AMIs are **regional**. To use an AMI in another region, you must **copy** the AMI to that region. To share an AMI cross-account, you must modify its launch permissions.

## Nitro System
The **Nitro System** is the underlying platform for the latest generation of EC2 instances.
- Nitro instances provide better performance, lower cost, and are required for some features (EBS Multi-Attach io2, Enhanced Networking, Hibernation).

## Additional Features
- **EC2 Hibernate**: Saves RAM to EBS root volume. Instance resumes with same process state. Useful for long-initialization apps. Requires encrypted root volume + Nitro.
- **Capacity Reservations**: Guarantees capacity in a specific AZ without a 1/3-year commitment (unlike RIs).
    - **On-Demand Capacity Reservations**: Guarantees capacity for a specific instance type in an AZ.
    - **Capacity Blocks**: Specifically for ML workloads (GPU instances) for a specified duration.

## Storage Comparison

| Feature | Instance Store | EBS Volume |
| :--- | :--- | :--- |
| **Persistence** | Ephemeral (Data lost on stop/termination) | Persistent (Data survives stop/termination) |
| **Use Case** | Temporary data, buffers, caches, scratch pads | Databases, long-term storage, boot volumes |
| **Performance** | Very high I/O, low latency (Direct-attached) | Network-attached, variable performance tiers |

## Network and Security

> [!important] **SAP-C02 Considerations**
> - **Placement Groups**: Use Cluster, Partition, or Spread for performance or availability requirements. See [[Placement Groups]].
> - **Enhanced Networking**: Use SR-IOV for higher I/O performance and lower CPU utilization (ENI, ENA, or ixgbevf).
> - **Elastic IP (EIP)**: Limited per region; use ELBs or Route 53 for scaling instead of many EIPs.

## Accessing EC2
Instances can be managed via the **AWS Management Console**, **AWS CLI**, **AWS Tools for PowerShell**, or **AWS SDKs**. The **Instance Metadata Service (IMDS)** provides data about the instance (e.g., public IP, IAM role) at `http://169.254.169.254/latest/meta-data/`.

---

## Exam Focus: Trade-offs and Scenarios

> [!exam] **Scenario: High Performance Computing (HPC)**
> Use **Cluster Placement Groups** within a single AZ for low-latency network performance. Combine with **Enhanced Networking (ENA)**.

> [!exam] **Scenario: High Availability**
> Deploy instances across multiple **Availability Zones**. Use **Spread Placement Groups** for small numbers of critical instances to ensure they reside on separate physical hardware.

> [!exam] **Scenario: Cost Optimization**
> Analyze workloads to choose between **On-Demand**, **Reserved Instances (RIs)**, or **Spot Instances**. See [[EC2 Purchase Options]].

---

## Related Services
- [[_Compute Index|Compute Index]]
- [[EC2 Instance Types]]
- [[EC2 Purchase Options]]
- [[Placement Groups]]
- [[EBS Overview]]
- [[VPC Overview]]

---
**Practice:** [[EC2 - Practice Questions|EC2 Practice Questions]]
