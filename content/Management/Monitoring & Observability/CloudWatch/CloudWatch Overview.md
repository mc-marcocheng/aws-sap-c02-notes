---
tags: [aws, sap-c02, cloudwatch]
---
# CloudWatch Overview

Amazon CloudWatch is a monitoring and observability service that provides data and actionable insights for AWS resources and applications.

## Core Concepts
- **Metrics**: Time-ordered data points (Standard: 1-minute, High-Resolution: 1-second).
- **Dimensions**: Name/value pairs that uniquely identify a metric (e.g., `InstanceId`).
- **Statistics**: Metric data aggregations over specified periods (Average, Sum, Min, Max, SampleCount).
- **Namespaces**: Containers for metrics (e.g., `AWS/EC2`).

## Alarms
Alarms watch a single metric (or math expression) and perform actions based on thresholds.
- **States**: `OK`, `ALARM`, `INSUFFICIENT_DATA`.
- **Actions**:
    - SNS Notifications.
    - Auto Scaling Policies.
    - EC2 Actions (Stop, Terminate, Reboot, Recover).

## CloudWatch Agent
- A unified agent that collects **metrics** and **logs** from both EC2 instances and on-premises servers.
- Can collect system-level metrics not available via standard monitoring (e.g., **Memory Utilization**, Disk Space).

## Dashboards
- Customizable home pages to monitor resources in a single view across regions.
- **Cross-Account Observability**: Allows a central monitoring account to view metrics, logs, and traces from multiple source accounts.

## Metric Retention
- 1-second data: 3 hours.
- 60-second data: 15 days.
- 5-minute data: 63 days.
- 1-hour data: 455 days (15 months).

![[cw-overview.png]]

> [!exam]
> **EC2 Custom Metrics**: Standard EC2 metrics include CPU, Network, and Disk I/O. **Memory utilization** and **Disk swap** are NOT standard metrics and require the **CloudWatch Agent**.
---
**Practice:** [[CloudWatch - Practice Questions|CloudWatch Practice Questions]]