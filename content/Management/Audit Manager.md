---
tags: [aws, sap-c02, audit-manager]
---
# AWS Audit Manager

AWS Audit Manager helps you continuously audit your AWS usage to simplify how you assess risk and compliance with regulations and industry standards (e.g., GDPR, HIPAA, PCI DSS).

## Key Features
- **Automated Evidence Collection:** Automates the gathering of evidence by mapping your AWS resource configurations, CloudTrail events, and Security Hub findings to specific compliance controls.
- **Frameworks:** Provides pre-built standard frameworks (CIS, PCI, HIPAA, etc.) and allows you to create custom frameworks containing custom controls.
- **Assessments:** You create an assessment from a framework. The assessment continuously collects evidence for the controls defined in the framework.
- **Delegation:** You can delegate control sets to subject matter experts (SMEs) within your organization to review and add manual evidence if needed.
- **Assessment Reports:** Generates audit-ready reports containing the collected evidence, which can be shared directly with auditors.

## SAP-C02 Key Facts & Architectural Patterns
- **Organizations Integration:** Can be enabled across [[Organizations Overview|AWS Organizations]] to collect evidence from multiple member accounts into a single delegated administrator account.
- **Evidence Sources:** Automatically pulls data from [[CloudTrail Overview|CloudTrail]], [[AWS Config]], [[Security Hub]], and API calls to provide a continuous, unalterable trail of evidence.

> [!exam]
> Differentiate clearly: 
> - **[[Artifact]]**: Get AWS's compliance documents (AWS is compliant).
> - **Audit Manager**: Automate evidence collection for *your* configuration/workloads to prove *you* are compliant.
> - **[[Security Hub]]**: Continuous security posture management and standard checks (e.g., CIS Foundations), but Audit Manager is specifically for generating formal audit reports/evidence.

---
**Practice:** [[Audit Manager - Practice Questions|Audit Manager Practice Questions]]