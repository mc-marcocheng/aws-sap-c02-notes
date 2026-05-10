---
tags: [aws, sap-c02, detective]
---
# Amazon Detective

Amazon Detective simplifies the investigative process to help security teams conduct faster and more effective root cause analysis. It automatically extracts time-based events and creates an interactive visual graph.

## Architectural Patterns & Key Facts
- **Data Sources:** Automatically ingests [[VPC Overview|VPC Flow Logs]], [[CloudTrail|AWS CloudTrail]], EKS audit logs, and findings from [[GuardDuty|Amazon GuardDuty]] and [[Security Hub|AWS Security Hub]].
- **Purpose:** Used for *investigation* and *root cause analysis*, not for generating alerts. It helps answer "What happened?", "Who did it?", and "What else did they touch?"
- **Behavior Graph:** Uses machine learning and statistical analysis to build a behavior graph that links users, IP addresses, and AWS accounts over time (up to a year of data retention).
- **Organizations Integration:** Integrates with [[Organizations Overview|AWS Organizations]] to allow a delegated administrator account to view behavior graphs across the organization.
- **No Agent/Configuration:** Requires no agents, sensors, or complex configurations to enable logging. It pulls data directly from AWS infrastructure.

> [!exam] SAP-C02 Exam Tip
> **GuardDuty** = Detection and Alerting.
> **Security Hub** = Aggregation and Posture Management.
> **Detective** = Deep Investigation and Root Cause Analysis.
> If a scenario mentions a security analyst needing to "visualize", "investigate the root cause", or "see the historical activity of an IAM user/IP address" over the last several months, the answer is **Amazon Detective**.

---
**Practice:** [[Detective - Practice Questions|Detective Practice Questions]]