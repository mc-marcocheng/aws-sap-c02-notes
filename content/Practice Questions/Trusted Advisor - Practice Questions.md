---
tags: [aws, sap-c02, trusted-advisor, management, practice-questions]
---
# Trusted Advisor Practice Questions

> [!question]
> The Trusted Advisor service provides insight regarding which categories of an AWS account?
> 1. Security, fault tolerance, high availability, and connectivity
> 2. Security, access control, high availability, and performance
> 3. Performance, cost optimization, security, and fault tolerance
> 4. Performance, cost optimization, access control, and connectivity
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** [[Trusted Advisor]] provides recommendations across five main categories: **Cost Optimization**, **Security**, **Fault Tolerance**, **Performance**, and **Service Limits**. While high availability is a goal of Fault Tolerance, "connectivity" and "access control" are not standalone categories in the tool.

> [!question]
> Which of the following are categories of AWS Trusted Advisor? (Select TWO.)
> 1. Loose Coupling
> 2. Disaster recovery
> 3. Infrastructure as a Code
> 4. Security
> 5. Service limits
> 
> > [!success]- Answer & Rationale
> > **Answer: 4, 5**
> > **Rationale:** [[Trusted Advisor]] checks include **Security** (identifying security gaps like unrestricted ports) and **Service Limits** (monitoring usage against quotas). Loose Coupling, Disaster Recovery, and Infrastructure as Code are broader architectural principles rather than specific check categories.

> [!question]
> Which AWS tool will identify security groups that grant unrestricted Internet access to a limited list of ports?
> 1. AWS Organizations
> 2. AWS Trusted Advisor
> 3. AWS Usage Report
> 4. Amazon EC2 dashboard
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[Trusted Advisor]]'s [[Trusted Advisor#Security|Security]] category specifically inspects security group configurations and alerts you if any rules grant unrestricted access (0.0.0.0/0) to common ports, helping to close potential security gaps.
