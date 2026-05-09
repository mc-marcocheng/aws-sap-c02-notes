---
tags: [aws, sap-c02, artifact, practice-questions]
---
# Artifact Practice Questions

> [!question]
> A healthcare company is migrating its patient portal to AWS. To comply with HIPAA regulations, the company's legal team requires a signed Business Associate Addendum (BAA) with AWS before any Protected Health Information (PHI) can be stored in the cloud. How can a Solutions Architect fulfill this requirement?
> 1. Open an AWS Support case to request a physical BAA document to be mailed, signed, and returned.
> 2. Use AWS Artifact to review and accept the AWS BAA online.
> 3. Use AWS License Manager to upload a custom BAA document.
> 4. Deploy AWS Audit Manager to generate a HIPAA compliance report which automatically serves as a BAA.
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[Artifact]] is the correct service for managing and accepting compliance agreements with AWS, such as the Business Associate Addendum (BAA) required for HIPAA.

> [!question]
> An external auditor is reviewing a financial company's cloud architecture. The auditor requests proof that the underlying physical infrastructure of the AWS data centers where the company's workloads are hosted complies with SOC 2 requirements. Where can the company obtain this documentation?
> 1. AWS Trusted Advisor
> 2. AWS Security Hub
> 3. AWS Artifact
> 4. AWS Audit Manager
>
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** [[Artifact]] provides on-demand access to AWS's security and compliance reports (like SOC, ISO, PCI DSS) produced by third-party auditors. This proves the compliance of the AWS cloud infrastructure itself.

> [!question]
> A company uses AWS Organizations to manage 50 AWS accounts. The compliance team needs to accept a new compliance agreement with AWS that must apply to all existing and future accounts within the organization. What is the MOST operationally efficient way to accomplish this?
> 1. Use AWS CloudFormation StackSets to deploy a custom resource to each account that accepts the agreement via API.
> 2. Use AWS Artifact in the Organizations management account to accept the agreement on behalf of the entire organization.
> 3. Log in to each member account individually and use AWS Artifact to accept the agreement.
> 4. Configure an SCP to force all member account administrators to accept the agreement in AWS Artifact.
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[Artifact]] integrates with [[Organizations Overview|AWS Organizations]], allowing the management account to accept agreements (like BAAs or NDAs) globally. This automatically applies the agreement to all current and future member accounts, minimizing overhead.