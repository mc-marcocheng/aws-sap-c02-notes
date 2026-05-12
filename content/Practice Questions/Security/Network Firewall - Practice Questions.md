---
tags: [aws, sap-c02, network-firewall, practice-questions]
---
# Network Firewall Practice Questions

> [!question]
> A company has a fleet of Amazon EC2 instances in a private subnet that need to download software updates from external repositories over HTTPS. Security policy mandates that outbound internet access must be strictly limited to a predefined list of approved domain names (e.g., `*.ubuntu.com`, `repo.maven.apache.org`). IP addresses for these domains change frequently. How should a solutions architect implement this control?
> 1. Create a VPC Security Group with outbound rules allowing HTTPS port 443 to the specific domain names.
> 2. Deploy a NAT Gateway. Create an AWS Network Firewall and configure stateful rules for domain list filtering. Route traffic from the private subnet through the Network Firewall to the NAT Gateway.
> 3. Use AWS WAF and create a WebACL with string match conditions for the approved domains. Attach the WebACL to the NAT Gateway.
> 4. Use an AWS Lambda function triggered by Amazon EventBridge to constantly resolve the domain names to IPs and update a VPC Network Access Control List (NACL) dynamically.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[Network Firewall|AWS Network Firewall]] provides native support for stateful domain list filtering (FQDN filtering) for outbound HTTP/HTTPS traffic. Security Groups and NACLs (Options 1 and 4) only support IP addresses, not domain names. AWS WAF (Option 3) is for inbound layer 7 protection and cannot be attached to a NAT Gateway or used for generic outbound EC2 proxying.

> [!question]
> A large enterprise is redesigning its AWS network architecture. They have 50 VPCs connected via an AWS Transit Gateway. The CISO requires that all VPC-to-VPC (East-West) traffic and all VPC-to-Internet (North-South) traffic be inspected by an Intrusion Prevention System (IPS) for deep packet inspection. What is the MOST scalable and AWS-native architectural pattern to meet this requirement?
> 1. Deploy AWS Network Firewall in every individual VPC. Configure VPC route tables to route all outbound and inter-VPC traffic through the local Network Firewall endpoints.
> 2. Create a centralized Inspection VPC attached to the Transit Gateway. Deploy AWS Network Firewall in the Inspection VPC. Configure Transit Gateway routing tables to route all traffic requiring inspection through the Inspection VPC attachment.
> 3. Deploy a fleet of EC2 instances running third-party IPS software in an Auto Scaling group within a central VPC. Use AWS Gateway Load Balancer to distribute traffic to the appliances.
> 4. Enable VPC Flow Logs in all VPCs and use Amazon GuardDuty to perform continuous deep packet inspection on the network traffic.
> 
> [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** The centralized inspection pattern using [[Transit Gateway|AWS Transit Gateway]] and an Inspection VPC hosting [[Network Firewall|AWS Network Firewall]] is the standard, scalable AWS architecture for enterprise deep packet inspection. This avoids the operational overhead and cost of deploying firewalls in every single VPC (Option 1). While Gateway Load Balancer (Option 3) is valid for third-party appliances, AWS Network Firewall is the fully managed, native service. [[GuardDuty|Amazon GuardDuty]] (Option 4) analyzes flow logs (metadata) but does not perform inline blocking or deep packet inspection on the actual payload.

> [!question]
> A company has deployed AWS Network Firewall in a centralized inspection VPC. They want to implement Suricata-compatible IPS rules that can detect and block known malware command-and-control (C2) traffic patterns. The rules must be updated automatically as new threat intelligence becomes available without manual intervention. Which approach meets these requirements?
> 1. Write custom Suricata rules and manually update the Network Firewall rule group weekly.
> 2. Subscribe to AWS Network Firewall managed rule groups for threat intelligence. Associate the managed stateful rule group with the firewall policy.
> 3. Deploy a third-party threat intelligence feed on an EC2 instance and configure Network Firewall to pull rules from it via an API.
> 4. Use AWS WAF managed rule groups for known bad inputs and associate them with the Network Firewall policy.
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[Network Firewall|AWS Network Firewall]] supports **managed stateful rule groups** from AWS and AWS Marketplace partners that are automatically updated with new threat intelligence (including C2 domain lists and known malware signatures). This eliminates manual rule maintenance. Option 1 requires manual updates. Option 3 adds infrastructure management. Option 4 is invalid — [[WAF|AWS WAF]] rule groups cannot be used with Network Firewall as they are different services with different rule formats.