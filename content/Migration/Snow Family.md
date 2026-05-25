---
tags: [aws, sap-c02, snow]
---
# Snow Family

The AWS Snow Family consists of physical devices used to transport large amounts of data into and out of AWS, as well as perform edge computing in locations with little to no connectivity.

## Device Comparison

| Feature | Snowcone | Snowball Edge |
| --- | --- | --- |
| **Form Factor** | Small, portable (4.5 lbs) | Ruggedized suitcase |
| **Capacity** | 8 TB (HDD) / 14 TB (SSD) | 28 TB (Compute Optimized) - 210 TB (Storage Optimized) |
| **Edge Compute** | 4 vCPU, 4 GB RAM | Up to 104 vCPUs, 416 GB RAM |
| **Connectivity** | WiFi, Ethernet | 10G/25G/40G/100G Ethernet |
| **Use Case** | IoT, Drones, Tight spaces | Large data migration, Edge ML |

## Management
- **AWS OpsHub**: A GUI-based application for managing Snow devices locally. It simplifies unlocking devices, configuring IPs, and monitoring metrics.

## AWS Snowball Edge Tiers
1. **Storage Optimized**: Optimized for large-scale data transfer and local storage. (80 TB usable).
2. **Compute Optimized**: Provides powerful compute resources for tasks like machine learning, video analysis, and image processing at the edge. (Includes optional GPU).

## AWS Snowcone
- The smallest member of the family.
- Supports **AWS DataSync** for online data transfer once the device is connected to a network.
- Can be powered by a battery for maximum portability.

## Security
- **Encryption**: Data is automatically encrypted using 256-bit keys managed via **AWS KMS**.
- **Tamper-Evident**: Devices use a Trusted Platform Module (TPM) to ensure hardware and software integrity.
- **Self-Service**: E-ink shipping labels automate the return process to the correct AWS facility.

![[aws-snow-family-feature-comparision.png]]

> [!exam]
> **SAP-C02 Decision Point**:
> - If data is **< 10 TB**: Use Snowcone or high-speed internet.
> - If data is **Petabyte-scale**: Use multiple Snowball Edge devices.
> - For **Exabyte-scale**: Use multiple Snowball Edge devices (e.g., 10+ Snowball Edge 100TB devices for 1 PB).

## Related Services
- [[_Migration Index|Migration Index]]
- [[DataSync]]
- [[Transfer Family]]
- [[Direct Connect Overview|Direct Connect]]

---
**Practice:** [[Snow Family - Practice Questions|Snow Family Practice Questions]]
