---
tags: [aws, sap-c02, route-53, networking, practice-questions]
---
# Route 53 Resolver Practice Questions

> [!question]
> A company wants to use a hybrid cloud architecture and has established a Direct Connect connection between their on-premises data center and their AWS VPC. They need their on-premises DNS servers to be able to resolve DNS queries for their private hosted zones in Route 53. Which AWS service can they use to achieve this?
> 1. Route 53 Resolver Inbound Endpoints
> 2. Route 53 Resolver Outbound Endpoints
> 3. CloudFront
> 4. AWS App Mesh
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale**: [[Route 53 Resolver]] **Inbound Endpoints** allow DNS queries from your on-premises network to be forwarded to AWS for resolution of Route 53 private hosted zone records or other AWS-internal DNS names. Outbound Endpoints (Option 2) are used for the reverse: allowing VPC resources to resolve on-premises DNS names.

> [!question]
> A company has multiple VPCs across three AWS regions and an on-premises data center. They need to implement a centralized DNS architecture where:
> - On-premises servers can resolve AWS private hosted zone records
> - EC2 instances in all VPCs can resolve on-premises Active Directory DNS records
> - DNS query logs must be captured for security analysis
> 
> Which architecture meets ALL requirements?
> 
> 1. Create Route 53 private hosted zones and associate them with all VPCs. Deploy Inbound Endpoints in one region and Outbound Endpoints with forwarding rules shared via AWS RAM across all regions. Enable Route 53 Resolver Query Logging.
> 2. Deploy BIND DNS servers on EC2 instances in each VPC and configure zone transfers between all regions and on-premises.
> 3. Use Route 53 public hosted zones with split-horizon DNS and VPC DHCP option sets pointing to on-premises DNS.
> 4. Deploy Inbound and Outbound Endpoints in every VPC across all regions, each with independent forwarding rules.
>
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** [[Route 53 Resolver]] Inbound Endpoints allow on-premises DNS to forward queries to Route 53 for private hosted zone resolution. Outbound Endpoints with forwarding rules enable VPC resources to resolve on-premises domains. Forwarding rules can be shared across accounts and regions using [[RAM|AWS RAM]]. **Query Logging** captures all DNS queries for security analysis. Option 4 is operationally excessive — rules can be shared rather than duplicated.

> [!question]
> A company has an AWS environment with a Route 53 Resolver Outbound Endpoint configured to forward queries for `corp.example.com` to on-premises DNS servers (10.1.1.10 and 10.1.1.11) over a Direct Connect connection. Users report that DNS resolution for `corp.example.com` intermittently fails. The Direct Connect link is healthy. What is the MOST likely cause?
> 
> 1. The Route 53 Resolver Outbound Endpoint does not have enough ENIs provisioned for the query volume.
> 2. The security group on the Outbound Endpoint ENIs does not allow outbound UDP/TCP port 53 traffic, OR the on-premises firewall is blocking inbound DNS from the Outbound Endpoint subnet CIDR.
> 3. The forwarding rule is configured as a "System" rule instead of a "Forward" rule.
> 4. Route 53 Resolver does not support forwarding queries over Direct Connect; a VPN is required.
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[Route 53 Resolver]] Outbound Endpoints use ENIs in your VPC subnets. These ENIs have security groups that must allow outbound DNS traffic (TCP/UDP port 53). Additionally, on-premises firewalls must allow inbound DNS from the IP addresses of these ENIs. This is the most common misconfiguration. Option 4 is false — Resolver works over any connectivity (DX, VPN). Option 3 would prevent forwarding entirely, not cause intermittent issues.
