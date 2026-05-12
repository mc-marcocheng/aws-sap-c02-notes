---
tags: [aws, sap-c02, local-zones, practice-questions]
---
# Local Zones Practice Questions

> [!question]
> A company wants to provide ultra-low latency access to a real-time gaming application for users in a specific metropolitan area where AWS does not have a full region. They decide to use an AWS Local Zone. What is the CORRECT architectural step to extend their existing VPC to the Local Zone?
> 1. Create a new VPC in the Local Zone and peer it with the existing VPC.
> 2. Create a new subnet in the existing VPC and select the Local Zone as the Availability Zone for that subnet.
> 3. Use AWS Site-to-Site VPN to connect the VPC to the Local Zone's public endpoint.
> 4. Deploy an AWS Outposts rack in the target metropolitan area.
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[Local Zones]] are extensions of an existing AWS Region. To use them, you simply create a new subnet within your existing VPC and choose the Local Zone (which appears as a specific AZ) for that subnet. This allows resources in the Local Zone to communicate with the rest of the VPC over the AWS private network. Option 1 is incorrect because you don't create a separate VPC. Option 3 is for external connectivity. Option 4 is a different service (physical hardware) and more complex than using a managed Local Zone.

> [!question]
> A company is using an AWS Local Zone in Miami. The resources in the Local Zone subnet need to access the public internet. To minimize latency, how should internet-bound traffic be routed?
> 1. Route traffic back to the parent region's Internet Gateway (IGW).
> 2. Create a Carrier Gateway in the Local Zone subnet.
> 3. Route traffic to a NAT Gateway deployed in the Local Zone.
> 4. Ensure the VPC has an Internet Gateway (IGW); AWS automatically ingress/egress internet traffic locally from the Local Zone.
>
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale:** When using [[Local Zones]] with an IGW, AWS optimizes the routing so internet traffic enters and exits locally at the Local Zone rather than being backhauled to the parent region.

> [!question]
> Which of the following accurately describes the relationship between AWS Local Zones and AWS Regions?
> 1. A Local Zone acts as an independent region with its own isolated control plane.
> 2. Local Zones are extensions of a parent AWS Region and rely on the parent region for control plane operations (API calls).
> 3. Local Zones provide a subset of services, but they must use AWS Outposts hardware.
> 4. Local Zones are designed purely for 5G network integration.
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[Local Zones]] are logically and physically connected to a parent AWS Region. They rely on the parent region's control plane for API calls and management, while the data plane operates locally.