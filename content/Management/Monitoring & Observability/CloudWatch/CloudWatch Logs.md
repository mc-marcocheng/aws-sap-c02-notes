---
tags: [aws, sap-c02, management, cloudwatch]
---
# CloudWatch Logs

CloudWatch Logs enables you to monitor, store, and access log files from [[EC2 Overview|EC2]] instances, [[CloudTrail]], [[Route 53 Overview|Route 53]], and other sources.

## Core Concepts
- **Log Event**: A record of activity (timestamp + raw message).
- **Log Stream**: A sequence of log events from the same source (e.g., an application instance).
- **Log Group**: A collection of log streams with shared retention and access settings.
- **Metric Filters**: Turn log data into numerical CloudWatch metrics (e.g., counting "404" errors).

## Retention and Storage
- Retention can range from 1 day to 10 years (or indefinite).
- **Log Classes**:
    - **Standard**: Full-featured (Metric filters, subscriptions, Live Tail).
    - **Infrequent Access**: Cost-optimized (50% cheaper ingestion, no subscription filters).

## Real-Time Processing
- **Subscription Filters**: Send real-time feeds of log events to:
    - **[[Kinesis Overview|Kinesis Data Streams]]**
    - **[[Kinesis Overview|Kinesis Data Firehose]]**
    - **[[Lambda|AWS Lambda]]**
    - **[[OpenSearch|Amazon OpenSearch Service]]**

## Advanced Features
- **CloudWatch Logs Insights**: Interactive log analytics using a purpose-built query language.
- **Anomaly Detection**: Uses ML to automatically identify anomalies in log patterns.
- **Data Protection**: Automatically masks sensitive data (PII) using data protection policies.

> [!exam]
> **Scenario: Centralized Log Analysis**
> For SAP-C02, if the requirement is to analyze logs from multiple accounts in near real-time, the best practice is to use **CloudWatch Logs Subscriptions** to stream data to a central **Kinesis Data Firehose**, which then delivers to **Amazon OpenSearch** or an **S3** bucket in a security account.

---
## Related Services
- [[_Management Index|Management Index]]
- [[CloudWatch Overview|Amazon CloudWatch]]
- [[CloudTrail|AWS CloudTrail]]
- [[Kinesis Overview|Amazon Kinesis]]
- [[OpenSearch|Amazon OpenSearch Service]]

---
**Practice:** [[CloudWatch Logs - Practice Questions|CloudWatch Logs Practice Questions]]