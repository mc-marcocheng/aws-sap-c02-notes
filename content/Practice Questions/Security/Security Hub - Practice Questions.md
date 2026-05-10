---
tags: [aws, sap-c02, security-hub, security, practice-questions]
---
# Security Hub Practice Questions

> [!question]
> A security engineer has been asked to continuously monitor the company's AWS account using automated compliance checks based on AWS best practices and Center for Internet Security (CIS) AWS Foundations Benchmarks. How can the security engineer accomplish this using AWS services?
> 1. AWS Config + AWS Security Hub
> 2. Amazon Inspector + AWS GuardDuty
> 3. Amazon Inspector + AWS Shield
> 4. AWS Config + Amazon Inspector
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** [[Security Hub]] is a cloud security posture management (CSPM) service that automatically runs continuous, account-level configuration and security checks based on standards like the [[Security Hub|CIS AWS Foundations]] Benchmark. It leverages [[Config]] rules under the hood to perform these checks and identify security issues.
