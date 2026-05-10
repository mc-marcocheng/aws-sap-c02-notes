---
tags: [compute, aws, sap-c02, wavelength]
---
# AWS Wavelength

AWS Wavelength embeds AWS compute and storage services within telecommunications providers' 5G networks. This provides mobile edge computing infrastructure for developing, deploying, and scaling ultra-low-latency applications for 5G devices.

## Key Concepts
- **Wavelength Zones:** AWS infrastructure deployments embedded within the CSP's (Communication Service Provider) data centers at the edge of the 5G network.
- **Target Audience:** Applications serving mobile devices (e.g., connected vehicles, AR/VR, interactive live video streaming, multiplayer gaming, smart factories over 5G).
- **Architecture:** You extend your Amazon VPC to one or more Wavelength Zones. You create subnets in these zones and deploy resources (EC2, EBS, ECS, EKS).
- **Carrier Gateway:** To connect instances in a Wavelength Zone to the telecommunication network and the internet, you use a Carrier Gateway instead of a standard Internet Gateway.

> [!exam]
> If a scenario asks for single-digit millisecond latency specifically for **mobile devices, 5G networks, connected vehicles, or cellular IoT devices**, the answer is **AWS Wavelength**. Use a **Carrier Gateway** for inbound/outbound mobile network traffic.

## Related Services
- [[_Compute Index|Compute Index]]
- [[EC2 Overview|EC2]]
- [[Lambda]]
- [[VPC Overview|VPC]]

---
**Practice:** [[Wavelength - Practice Questions|Wavelength Practice Questions]]