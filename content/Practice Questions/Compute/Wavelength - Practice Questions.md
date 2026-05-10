---
tags: [aws, sap-c02, wavelength, practice-questions]
---
# Wavelength Practice Questions

> [!question]
> A gaming company is developing a multiplayer augmented reality (AR) game for mobile devices on a 5G network. The game requires ultra-low latency for physics calculations and real-time interaction between mobile clients. Which AWS service and architecture should be used?
> 1. Deploy EC2 instances in an AWS Local Zone and route traffic via AWS Global Accelerator.
> 2. Deploy EC2 instances in an AWS Wavelength Zone and use a Carrier Gateway for network access.
> 3. Install AWS Outposts at the mobile provider's edge locations.
> 4. Use Amazon CloudFront with Lambda@Edge to perform the physics calculations.
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[Wavelength]] embeds AWS infrastructure directly in 5G networks, providing the lowest possible latency for mobile clients. A Carrier Gateway is required to route traffic to the carrier network.

> [!question]
> A company is deploying an application for connected autonomous vehicles using 5G. They have extended their VPC to a Wavelength Zone. How should they configure the VPC route table to allow the EC2 instances in the Wavelength subnet to communicate with the vehicles on the telecommunications network?
> 1. Add a route pointing to an Internet Gateway (IGW).
> 2. Add a route pointing to a NAT Gateway.
> 3. Add a route pointing to a Carrier Gateway (CGW).
> 4. Add a route pointing to a Local Gateway (LGW).
>
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** In [[Wavelength]] Zones, a Carrier Gateway (CGW) allows traffic to flow between the Wavelength subnet and the telecommunication carrier's network.

> [!question]
> An automotive startup is evaluating edge compute options. What is the fundamental difference in use cases between AWS Wavelength, AWS Local Zones, and AWS Outposts?
> 1. Wavelength is for 5G edge devices, Local Zones for large metropolitan end-users, and Outposts for customer on-premises data centers.
> 2. Wavelength provides caching, Local Zones provide compute, and Outposts provide storage.
> 3. Wavelength is purely for media streaming, whereas Local Zones and Outposts are for databases.
> 4. All three provide the exact same functionality but are offered by different hardware vendors.
>
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** [[Wavelength]] targets 5G network edges, [[Local Zones]] target large metro populations (where AWS doesn't have a full region), and [[Outposts]] brings AWS to a customer's specific physical data center.