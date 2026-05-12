---
tags: [aws, sap-c02, elb, nlb, networking, practice-questions]
---
# NLB Practice Questions

> [!question]
> A financial trading application requires ultra-low latency connections from clients to the load balancer. The application uses a custom TCP protocol on port 9000. The architecture team needs the load balancer to handle millions of connections per second while preserving the client's source IP address at the target without using proxy protocol. Which load balancer configuration meets these requirements?
> 
> 1. Application Load Balancer with a TCP listener on port 9000
> 2. Network Load Balancer with a TCP listener on port 9000
> 3. Gateway Load Balancer with GENEVE encapsulation
> 4. Classic Load Balancer in TCP mode with cross-zone load balancing
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[NLB Overview|Network Load Balancer]] operates at Layer 4, provides ultra-low latency (designed for millions of requests per second), and natively preserves the client source IP for TCP traffic when using instance targets (no proxy protocol needed). [[ALB Overview|ALB]] doesn't support custom TCP protocols (it's Layer 7 HTTP/HTTPS only). [[GWLB Overview|GWLB]] is for inline appliance inspection, not client-facing load balancing.

> [!question]
> A company is migrating a UDP-based gaming application to AWS. The game servers must receive traffic on UDP port 7777. The architecture requires static IP addresses that can be hardcoded in the game client software (which cannot be updated after distribution). The solution must support cross-zone load balancing across three Availability Zones. Which load balancer solution meets ALL requirements?
> 
> 1. Application Load Balancer with Elastic IP addresses assigned to each subnet
> 2. Network Load Balancer with Elastic IP addresses assigned to each subnet and cross-zone load balancing enabled
> 3. Global Accelerator with an Application Load Balancer endpoint
> 4. Network Load Balancer with cross-zone load balancing and a Route 53 alias record
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[NLB Overview|Network Load Balancer]] is the only ELB that supports UDP traffic, allows assigning one Elastic IP per AZ (providing static IPs for hardcoded clients), and supports cross-zone load balancing. [[ALB Overview|ALB]] (Option 1) does not support UDP or Elastic IPs. Option 4 provides DNS resolution but not static IPs (DNS could return different IPs if NLB scales). [[Global Accelerator]] (Option 3) provides static IPs but ALB doesn't support UDP.

> [!question]
> A solutions architect is designing an architecture where a Network Load Balancer must forward TLS-encrypted traffic to targets running on EC2 instances. The security team requires end-to-end encryption but also needs the NLB to perform TLS termination for certificate management purposes. The backend instances must also receive encrypted traffic. How should this be configured?
> 
> 1. Configure a TLS listener on the NLB. The NLB will terminate TLS and forward plaintext TCP to targets.
> 2. Configure a TCP listener on port 443 on the NLB. Configure the targets to handle TLS termination directly.
> 3. Configure a TLS listener on the NLB for frontend TLS termination, then configure a separate TLS connection from the NLB to the targets (TLS re-encryption).
> 4. NLB does not support TLS listeners; use an ALB instead.
>
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** [[NLB Overview|Network Load Balancer]] supports TLS listeners and can perform TLS termination using certificates from [[ACM|AWS Certificate Manager]]. To achieve end-to-end encryption while still managing certificates at the NLB, you configure TLS re-encryption: the NLB terminates the client-side TLS connection and establishes a new TLS connection to the backend targets. This is supported by specifying a TLS target group.
