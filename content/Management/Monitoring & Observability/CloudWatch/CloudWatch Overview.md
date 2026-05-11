---
tags: [aws, sap-c02, management, cloudwatch]
---
# CloudWatch Overview

Monitoring and observability service for AWS resources and applications.

## Metrics and Resolution
- **Standard Resolution:** 1-minute intervals. Default for most services.
- **High Resolution:** Up to 1-second intervals. **Costs more**; used for mission-critical monitoring.
- **Metric Math:** Perform real-time calculations across metrics (e.g., calculating `Error Rate = (Errors / TotalRequests) * 100`).
- **Custom Metrics:** Memory utilization, disk space, and application-level metrics require the **CloudWatch Agent**.

## Alarms
- **Static Alarms:** Watch a single metric against a fixed threshold.
- **Composite Alarms:** Combine multiple alarms using logic (**AND/OR**) to reduce alarm fatigue (e.g., alarm only if CPU > 80% AND IOPS > 1000).
- **Actions:** SNS, Auto Scaling, or EC2 actions (Recover, Reboot, etc.).

## Advanced Insights
- **Contributor Insights:** Analyze log data to identify the "Top N" contributors (e.g., find the top 10 IP addresses causing the most 5xx errors).
- **Anomaly Detection:** Uses ML to track metrics and identify patterns, automatically setting thresholds based on historical data.

## Dashboards
- **Cross-Account Observability:** Centralize metrics, logs, and traces from multiple AWS accounts into a single dashboard.

![[cw-overview.png]]

> [!exam]
> **Resolution & Cost:** Remember that High-Resolution metrics (1s) provide granular visibility but at a higher price point. **Composite Alarms** are the answer for reducing noise by aggregating multiple conditions.

---
## Related Services
- [[_Management Index|Management Index]]
- [[CloudWatch Logs]]
- [[EventBridge|Amazon EventBridge]]
- [[SNS|Amazon SNS]]

---
**Practice:** [[CloudWatch - Practice Questions|CloudWatch Practice Questions]]