---
tags: [aws, sap-c02, networking, gwlb, practice-questions]
---
# GWLB - Practice Questions

> [!question]
> A company is designing a centralized egress architecture for their AWS environment. They have a Transit Gateway (TGW) connecting 50 Spoke VPCs. All outbound internet traffic must be routed to a dedicated Security VPC and inspected by a fleet of third-party intrusion prevention system (IPS) virtual appliances. The architecture must scale automatically and ensure that traffic flows symmetrically through the same appliance. Which design provides the MOST highly available and scalable solution?
> 
> 1. Deploy the IPS appliances in an Auto Scaling group behind a Network Load Balancer (NLB). Route TGW traffic to the NLB, and enable TGW Appliance Mode on the Security VPC attachment.
> 2. Deploy the IPS appliances in an Auto Scaling group behind a Gateway Load Balancer (GWLB). Create a GWLB Endpoint in the Security VPC. Route TGW traffic to the GWLB Endpoint, and enable TGW Appliance Mode on the Security VPC attachment.
> 3. Deploy the IPS appliances behind an Application Load Balancer (ALB) and use AWS WAF to route the traffic. Route TGW traffic to the ALB.
> 4. Deploy the IPS appliances as standalone EC2 instances. Use an AWS Lambda function to update the TGW route tables to point to healthy instance ENIs based on CloudWatch metrics.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[GWLB Overview|GWLB]] is specifically designed for deploying transparent inline network appliances (Layer 3). It uses GENEVE encapsulation to pass traffic through the appliances without altering IPs. Combining GWLB with [[Transit Gateway]] Appliance Mode ensures that bidirectional traffic between source and destination is forced through the same Availability Zone (and thus the same stateful appliance), preventing asymmetric routing issues.

> [!question]
> A security team has deployed a third-party deep packet inspection firewall behind a Gateway Load Balancer (GWLB). Traffic from a web application in VPC A is routed to the GWLB endpoint in VPC B for inspection before continuing to its destination. During testing, the security team notices that the firewall appliances only see the IP addresses of the GWLB nodes, not the original client IPs from VPC A. What is the cause of this issue?
> 
> 1. The Gateway Load Balancer is operating in proxy mode instead of transparent mode.
> 2. The firewall appliances do not support the GENEVE protocol encapsulation.
> 3. GWLB inherently replaces the source IP with its own ENI IP address; Proxy Protocol v2 must be enabled.
> 4. This is a trick question; GWLB encapsulates the original packet entirely within a GENEVE header, preserving the original IPs. The firewall software is misconfigured to read the outer IP header instead of the inner encapsulated packet.
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale:** [[GWLB Overview|GWLB]] acts as a bump-in-the-wire. It encapsulates the original IP packet (with the original source/destination IPs intact) inside a GENEVE packet. If the firewall is only seeing the GWLB IPs, it means the firewall appliance software is reading the outer GENEVE header rather than decapsulating it to inspect the inner packet payload. GWLB does not perform source NAT like an ALB or NAT Gateway.

> [!question]
> A company has deployed a Gateway Load Balancer with a fleet of third-party firewall appliances for traffic inspection. They notice that when an appliance becomes unhealthy, existing flows through that appliance are immediately dropped, causing TCP connection resets for active sessions. How can they improve the availability of existing flows during appliance failures?
> 
> 1. Enable GWLB cross-zone load balancing to redistribute flows to healthy appliances in other AZs.
> 2. Configure the GWLB target group with a longer deregistration delay (connection draining) to allow existing flows to complete before removing the target.
> 3. Enable **GWLB target failover** so that existing flows are re-routed to a healthy appliance when the original target becomes unhealthy.
> 4. Deploy the appliances in an Auto Scaling group with a shorter health check interval to replace unhealthy instances faster.
>
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** [[GWLB Overview|Gateway Load Balancer]] supports **target failover** configuration, which determines what happens to existing flows when a target becomes unhealthy. By enabling target failover (`rebalance` on existing flows), the GWLB re-hashes existing flows to a healthy appliance rather than dropping them. This is critical for stateful inspection appliances where dropped flows mean broken connections. (See [[GWLB Overview]])
