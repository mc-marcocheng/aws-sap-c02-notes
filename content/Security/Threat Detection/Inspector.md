---
tags: [aws, sap-c02, inspector]
---
# Amazon Inspector

Amazon Inspector is an automated vulnerability management service that continually scans AWS workloads for software vulnerabilities and unintended network exposure.

## Architectural Patterns & Key Facts
- **Coverage:** Scans [[EC2 Overview|Amazon EC2]] instances, container images in [[Index|Amazon ECR]], and [[Lambda Overview|AWS Lambda]] functions.
- **SSM Agent:** For EC2 instances, Inspector relies heavily on the [[Systems Manager Overview|AWS Systems Manager]] (SSM) Agent to collect software inventory. If the SSM agent is not running or the instance is not managed, Inspector cannot perform software vulnerability scans.
- **Continuous Scanning:** Inspector v2 is continuous. It automatically discovers resources and scans them, and rescans when new vulnerabilities (CVEs) are published or when software is installed/updated.
- **Network Reachability:** Scans for unintended network accessibility to EC2 instances (e.g., ports open to `0.0.0.0/0`) without requiring an agent.
- **AWS Organizations:** Supports delegated administrator integration. The designated account can manage Inspector across the entire organization.
- **Integration with Security Hub:** Findings are automatically sent to [[Security Hub|AWS Security Hub]] and [[EventBridge|Amazon EventBridge]].
- **Risk Score:** Inspector provides a highly contextualized risk score (Inspector Risk Score) by correlating CVE information with network reachability and exploitability.

> [!exam] SAP-C02 Exam Tip
> If an exam question mentions continuous vulnerability scanning for EC2, ECR, and Lambda, think **Amazon Inspector**.
> A common troubleshooting scenario: Inspector isn't scanning an EC2 instance. The fix is usually ensuring the **SSM Agent** is installed, running, and has the correct IAM permissions (`AmazonSSMManagedInstanceCore`) to communicate with Systems Manager.

---
**Practice:** [[Inspector - Practice Questions|Inspector Practice Questions]]