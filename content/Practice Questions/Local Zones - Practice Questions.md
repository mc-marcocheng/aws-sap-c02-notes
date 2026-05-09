---
tags: [aws, sap-c02, local-zones, practice-questions]
---
# Local Zones Practice Questions

> [!question]
> A media entertainment company based in Los Angeles has a latency-sensitive video rendering application. Their main AWS infrastructure is in `us-west-2` (Oregon), but artists in LA complain about high latency when accessing the rendering nodes. They do not have their own on-premises data center. How can this latency be reduced?
> 1. Deploy AWS Outposts in an LA colocation facility and run the rendering nodes there.
> 2. Enable the Los Angeles AWS Local Zone, extend the VPC to create a subnet in the Local Zone, and deploy the rendering nodes there.
> 3. Use AWS Wavelength in Los Angeles to host the rendering application.
> 4. Deploy Amazon CloudFront to cache the rendering compute processes at the edge.
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[Local Zones]] are designed to provide single-digit millisecond latency to users in specific metropolitan areas (like LA) by bringing select AWS services closer to them, without the customer needing to manage physical data centers.

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