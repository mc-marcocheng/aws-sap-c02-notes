---
tags: [aws, sap-c02, architecture, analytics]
---
# Data Lake Architecture

A centralized repository that allows you to store all your structured and unstructured data at any scale.

## Core Components
- **Storage**: [[S3 Overview|Amazon S3]] is the foundation. Data is partitioned and stored in formats like Parquet or ORC to reduce query costs.
- **Catalog**: [[Glue]] Data Catalog serves as the central metadata repository.
- **Security**: [[Lake Formation]] provides fine-grained access control (column/row level) over the S3 data lake.
- **Query**: [[Athena]] queries data directly in S3 using standard SQL.
- **Processing**: [[EMR]] for big data processing (Spark/Hadoop).

> [!exam]
> When you see scenarios about separating compute from storage, avoiding data silos, and enabling multiple analytics tools on the same data, the answer is an **S3 Data Lake**.

## Related Notes
- [[_Analytics Index|Analytics Index]]
