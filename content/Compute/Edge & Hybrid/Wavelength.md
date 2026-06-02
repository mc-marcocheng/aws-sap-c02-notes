---
tags: [compute, aws, sap-c02, wavelength]
---
# AWS Wavelength

AWS Wavelength embeds AWS compute and storage services within telecommunications providers' 5G (and 4G/LTE) networks. This provides mobile edge computing infrastructure for developing, deploying, and scaling ultra-low-latency applications directly to mobile devices and end users.

## Key Concepts
- **Wavelength Zones (WZ):** A logical extension of an AWS Region, deployed at the CSP's (Communication Service Provider) edge. Managed by the parent Region's control plane. Not available in all Regions.
- **Carrier Gateway:** Connects your Wavelength Zone VPC subnets to the telecommunication carrier network and the internet. It performs NAT to translate the private IP of your Wavelength instance to a Carrier IP address from the network border group. Supports IPv4.
- **Resource Support:** Supports EC2 (General Purpose, Memory Optimized, GPU), EBS (gp2) with snapshots to parent Region, ECS, and EKS.
- **Pricing:** Instances are primarily On-Demand. Compute Savings Plans and EC2 Instance Savings Plans can be applied to reduce costs.

## Architecture

To leverage Wavelength, you need a VPC, Subnet, Network Border Group, and a Carrier Gateway.

- **Hub and Spoke Model:** AWS recommends designing edge applications in a hub and spoke model with the parent Region.
- **Endpoint Discovery:** To direct mobile devices to the closest WZ endpoint, register the EC2 instances with a discovery service such as Amazon [[Cloud Map]].
- **High Availability & DR:** For robust and scalable alternatives, replicate data/apps to an AZ in the parent Region to act as a failover zone. Use multiple Wavelength Zones for highly available latency-sensitive applications.

## Strategic Scenarios (SAP-C02)

> [!exam]
> If a scenario asks for single-digit millisecond latency specifically for **mobile devices, 5G/4G networks, connected vehicles (ADAS), or cellular IoT devices**, the answer is **AWS Wavelength**. 

> [!important]
> Use a **Carrier Gateway** (not an IGW) for inbound/outbound mobile network traffic.
> Use **Amazon Cloud Map** for endpoint discovery to route users to the nearest Wavelength Zone.

## Related Services
- [[_Compute Index|Compute Index]]
- [[EC2 Overview|EC2]]
- [[Lambda]]
- [[VPC Overview|VPC]]
- [[Cloud Map]]

---
**Practice:** [[Wavelength - Practice Questions|Wavelength Practice Questions]]