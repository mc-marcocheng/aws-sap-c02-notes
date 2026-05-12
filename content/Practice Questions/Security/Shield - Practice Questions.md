---
tags: [aws, sap-c02, shield, security, practice-questions]
---
# Shield Practice Questions

> [!question]
> A global media streaming company serves content through Amazon CloudFront and Application Load Balancers across multiple AWS regions. They have experienced several sophisticated Layer 7 DDoS attacks that overwhelmed their application logic. The company wants proactive engagement from AWS during attacks, the ability to create custom mitigations, and financial protection against scaling costs caused by DDoS events. Which combination of services should a solutions architect implement? (Choose 2)
> 1. AWS Shield Standard on all CloudFront distributions and ALBs.
> 2. AWS Shield Advanced on all CloudFront distributions and ALBs.
> 3. AWS WAF with rate-based rules attached to CloudFront and ALBs.
> 4. Amazon GuardDuty with automated EC2 instance isolation via Lambda.
> 5. AWS Firewall Manager to deploy NACLs across all VPCs.
>
> > [!success]- Answer & Rationale
> > **Answer: 2, 3**
> > **Rationale:** [[Shield|AWS Shield Advanced]] provides 24/7 access to the Shield Response Team (SRT) for proactive engagement, custom mitigations, and DDoS cost protection. [[WAF|AWS WAF]] with rate-based rules provides Layer 7 protection against HTTP flood attacks. Shield Standard (Option 1) only covers Layer 3/4 and doesn't offer SRT access or cost protection. GuardDuty (Option 4) is a threat detection service, not a DDoS mitigation tool. Firewall Manager with NACLs (Option 5) doesn't address Layer 7 attacks.

> [!question]
> A media company has monetized their APIs to external third parties. During the last month, the platform has come under DDoS attacks multiple times leading to scaling of underlying instances and cost incurred. Which AWS service would help provide cost protection against such spikes, if such situations do occur in the future?
> 1. AWS Systems Manager
> 2. AWS WAF
> 3. AWS Shield Advanced
> 4. AWS Inspector
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** [[Shield|AWS Shield Advanced]] provides DDoS cost protection to safeguard against scaling charges resulting from DDoS-related usage spikes on protected resources such as EC2, ELB, and CloudFront.

> [!question]
> A company is hosting an important revenue generating application. On the last few occasions, the application has come under large DDoS attacks. As a result of this, a lot of users were complaining about the slowness of the application. You need to now avoid these situations in the future and now require 24/7 support from AWS if such situations do occur in the future. Which of the following service can help in this regard?
> 1. AWS Shield Advanced
> 2. AWS Inspector
> 3. AWS WAF
> 4. AWS Systems Manager
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** [[Shield|AWS Shield Advanced]] provides 24/7 access to the AWS Shield Response Team (SRT) for assistance during attacks and offers more sophisticated detection and mitigation capabilities than the Standard tier.
