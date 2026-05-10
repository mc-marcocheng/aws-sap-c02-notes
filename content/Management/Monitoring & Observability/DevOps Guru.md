---
tags:
  - aws
  - sap-c02
  - devops-guru
  - observability
---
# AWS DevOps Guru

AWS DevOps Guru is a Machine Learning (ML) powered service that makes it easy to improve an application’s operational performance and availability. It detects behaviors that deviate from normal operating patterns so you can identify operational issues long before they impact your customers.

## Key Features

- **Proactive and Reactive Insights:** 
  - *Reactive insights:* Analyze current issues and alert you to the root cause (e.g., increased 5xx errors caused by a recent DynamoDB capacity change).
  - *Proactive insights:* Alert you to impending issues (e.g., memory utilization is trending upwards and will cause an OOM error in 3 days).
- **Zero Configuration:** No ML expertise required. Just enable it for the entire account, specific CloudFormation stacks, or AWS tags.
- **Contextual Data:** Provides a timeline of events, related metrics, and recent configuration changes (via AWS CloudTrail integration) that likely caused the anomaly.
- **Recommendations:** Suggests remediation steps for the identified anomalies.

> [!important] Scope of DevOps Guru
> DevOps Guru analyzes CloudWatch metrics, Config rules, CloudTrail events, and X-Ray traces. It groups related anomalies into an "Insight" to reduce alert fatigue.

## Integrations

- **Amazon SNS:** Send notifications when an Insight is created, updated, or closed.
- **Amazon EventBridge:** Forward insights to target services like AWS Systems Manager (OpsCenter to create OpsItems), Lambda, or third-party ticketing tools (Jira, ServiceNow).
- **AWS Systems Manager OpsCenter:** Native integration to automatically create OpsItems for every DevOps Guru insight.

## Strategic Scenarios (SAP-C02)

### Scenario 1: Alert Fatigue and Root Cause Analysis
**Challenge:** A microservice architecture generates hundreds of CloudWatch alarms during an incident. The operations team struggles to find the root cause (e.g., a bad code deployment or a database schema change).
**Solution:** Enable **AWS DevOps Guru**. Instead of hundreds of isolated alarms, DevOps Guru analyzes the correlation and generates a single **Insight**. It connects the spike in API Gateway latency with an RDS CPU spike, and points to a CloudTrail event showing a configuration change right before the incident, providing immediate root cause analysis.

### Scenario 2: Automated Remediation via OpsCenter
**Challenge:** You want to standardize how operational issues are handled and automatically trigger remediation for common patterns detected by ML.
**Solution:** Configure DevOps Guru to send notifications to **Amazon EventBridge**. Route the EventBridge rule to **Systems Manager OpsCenter** to create an OpsItem. You can attach Systems Manager Automation runbooks to the OpsItem for 1-click or fully automated remediation.

> [!exam]
> In exam scenarios comparing **CloudWatch Anomaly Detection** vs **DevOps Guru**:
> - Use *CloudWatch Anomaly Detection* when you want ML on a **single, specific metric**.
> - Use *DevOps Guru* when you need cross-service correlation, root cause analysis, and aggregated insights for an entire application stack.

---
**Practice:** [[DevOps Guru - Practice Questions|AWS DevOps Guru Practice Questions]]
