---
tags: [aws, sap-c02, networking, vpc, security]
---
# VPC Flow Logs

VPC Flow Logs is a feature that enables you to capture information about the IP traffic going to and from network interfaces in your VPC.

## Key Features
- **Levels**: Can be applied at the VPC, Subnet, or ENI level.
- **Destinations**: Can be published to **Amazon CloudWatch Logs**, **Amazon S3**, or **Amazon Kinesis Data Firehose**.
- **Traffic Type**: Capture ACCEPT, REJECT, or ALL traffic.
- **Format**: Supports default format and custom formats (e.g., adding TCP flags, protocol).

> [!exam]
> Flow logs do **not** capture the packet payload (only metadata like source/destination IP, port, bytes). Use Flow Logs for **troubleshooting connectivity issues** (e.g., seeing REJECT logs means a Security Group or NACL is blocking traffic) and for security analysis.

## Related Services
- [[_Networking Index|Networking Index]]
- [[VPC Overview]]
- [[Security Groups vs NACLs]]

---
**Practice:** [[VPC Flow Logs - Practice Questions|VPC Flow Logs Practice Questions]]
