---
tags: [aws, sap-c02, waf, security, practice-questions]
---
# WAF Practice Questions

> [!question]
> The Web Application Development team is worried about malicious activity from 200 random IP addresses. Which action will ensure security and scalability from this type of threat?
> 1. Use inbound security group rules to block the IP addresses.
> 2. Use inbound network ACL rules to block the IP addresses.
> 3. Use AWS WAF to block the IP addresses.
> 4. Write iptables rules on the instance to block the IP addresses.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** [[WAF|AWS WAF]] is the most scalable and managed solution for blocking a large number of IP addresses at the application layer. It integrates with [[CloudFront Overview|CloudFront]] and [[ALB Overview|ALB]], allowing you to block traffic before it even reaches your compute resources. [[Security Groups vs NACLs|Security Groups]] and [[Security Groups vs NACLs|Network ACLs]] have strict limits on the number of rules, making them unsuitable for blocking hundreds of individual IPs. iptables is an instance-level configuration that does not scale well across multiple instances.

> [!question]
> You’ve been hired to enhance the overall security posture for a very large e-commerce site. They have a well architected multi-tier application running in a VPC that uses ELBs in front of both the web and the app tier with static assets served directly from S3. They are using a combination of RDS and DynamoDB for their dynamic data and then archiving nightly into S3 for further processing with EMR. They are concerned because they found questionable log entries and suspect someone is attempting to gain unauthorized access. Which approach provides a cost effective scalable mitigation to this kind of attack?
> 1. Recommend that they lease space at a DirectConnect partner location and establish a 1G DirectConnect connection to their VPC.
> 2. Add previously identified hostile source IPs as an explicit INBOUND DENY NACL to the web tier subnet.
> 3. Add a WAF tier by creating a new ELB and an AutoScaling group of EC2 Instances running a host-based WAF.
> 4. Remove all but TLS 1.2 from the web tier ELB and enable Advanced Protocol Filtering.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** This is a legacy question referencing the "WAF Sandwich Architecture." Before the launch of [[WAF|AWS WAF]], the standard way to scale a web application firewall was to place a fleet of WAF-running EC2 instances between two [[ELB Overview|Load Balancers]]. Option 1 is expensive and complex. Option 2 (NACLs) is limited by rule counts. Option 4 is incorrect because ELBs do not support "Advanced Protocol Filtering" for WAF-like deep packet inspection. In a modern scenario, you would attach [[WAF|AWS WAF]] directly to the [[ALB Overview|ALB]].
