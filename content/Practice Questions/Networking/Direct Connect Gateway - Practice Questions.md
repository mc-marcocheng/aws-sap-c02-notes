---
tags: [aws, sap-c02, direct-connect, networking, practice-questions]
---
# Direct Connect Gateway Practice Questions

> [!question]
> Your company currently has set up an AWS Direct Connect connection between their on-premises data center and a VPC in the us-east-1 region. They now want to connect their data center to a VPC in the us-west-1 region. They need to ensure latency is low and maximum bandwidth for the connection. How could they accomplish this in a cost-effective manner?
> 1. Create an AWS Direct Connect connection between the VPC in the us-west-1 region and the on-premises data center
> 2. Setup an AWS Direct Connect Gateway
> 3. Create an AWS VPN managed connection between the VPC in the us-west-1 region and the on-premises data center
> 4. Use VPC peering
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[Direct Connect Gateway]] (DXGW) is a globally available resource that allows you to connect a single [[Direct Connect Overview|Direct Connect]] connection to up to 10 [[VPN|Virtual Private Gateways (VGW)]] across multiple AWS Regions. This is the most cost-effective approach as it leverages the existing physical connection to reach another region without requiring additional circuits. It ensures low latency and high bandwidth by using the AWS private network backbone rather than the public internet (as [[VPN|Site-to-Site VPN]] would). [[VPC Peering]] does not provide on-premises connectivity to the peered VPC (transitive routing via peering is not supported for DX/VPN).
