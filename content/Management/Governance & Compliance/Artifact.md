---
tags: [aws, sap-c02, management, artifact]
---
# AWS Artifact

AWS Artifact is a self-service audit artifact retrieval portal that provides our customers with on-demand access to AWS' compliance documentation and AWS agreements.

## Key Features
- **Artifact Reports:** Provides access to AWS security and compliance reports from third-party auditors (e.g., SOC, PCI DSS, ISO, HIPAA). These prove that AWS infrastructure meets specific compliance standards.
- **Artifact Agreements:** Allows you to review, accept, and manage agreements with AWS for an individual account or across all accounts in [[Organizations Overview|AWS Organizations]].
    - Example: Business Associate Addendum (BAA) for HIPAA compliance.
- **Organizations Integration:** You can accept an agreement on behalf of all accounts within your Organization.

## SAP-C02 Key Facts & Architectural Patterns
- **Not for Custom Applications:** AWS Artifact provides compliance reports for the **AWS underlying infrastructure and managed services**, NOT for the customer's applications running on AWS. 
- **NDA Required:** Many reports in AWS Artifact are confidential and require you to accept a Non-Disclosure Agreement (NDA) before downloading.

> [!exam]
> If a question asks how to prove to an external auditor that AWS data centers meet ISO or SOC compliance standards, the answer is **AWS Artifact**.
> Do not confuse Artifact with [[Audit Manager]]. Artifact provides *AWS's* compliance reports. Audit Manager helps you continuously audit *your* AWS usage.

## Related Services
- [[_Management Index|Management Index]]
- [[Audit Manager]]
- [[Organizations Overview|AWS Organizations]]

---
**Practice:** [[Artifact - Practice Questions|Artifact Practice Questions]]