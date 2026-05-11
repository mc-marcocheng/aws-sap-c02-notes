---
tags: [aws, sap-c02, analytics, serverless]
---
# Amazon Athena

[[Athena|Amazon Athena]] is a serverless, interactive analytics service that analyzes data in [[S3 Overview|S3]] and other sources using standard SQL or Python. No infrastructure to manage; pay only for the queries you run.

## Key Features

- **Glue Data Catalog**: Uses a managed [[Glue|Glue Data Catalog]] to store schemas and metadata.
- **Federated Query**: Query RDS, DynamoDB, Redshift, and on-premises databases via Lambda connectors. **(Tested)**
- **Workgroups**: Isolate query execution, enforce data usage limits, and separate costs per team/workload.
- **CTAS (CREATE TABLE AS SELECT)**: Converts query results into optimized formats (Parquet/ORC) for future queries.
- **Modern Table Formats**: Supports **Apache Iceberg**, **Delta Lake**, and **Apache Hudi** for ACID transactions, schema evolution, and time travel.
- **Athena for Apache Spark**: Run serverless Spark applications for advanced analytics and ML.

## Performance & Cost Optimization

> [!exam]
> Athena pricing is primarily based on the amount of data scanned. Optimizing data storage is critical for both performance and cost.

- **Columnar Formats (Parquet/ORC)**: Reduce scan volume → lower cost. (Athena only reads the required columns).
- **Partitioning**: Reduces data scanned per query by limiting the scope to specific partitions (e.g., `date`, `region`).
- **Compression**: Reduces bytes read from S3 (use splittable compression like **Snappy**).
- **Partition Projection**: Speeds up query processing for highly partitioned tables by retrieving partition information from configuration rather than the Glue Data Catalog.
- **Query Result Reuse**: Cache and reuse query results to reduce costs for repeated queries.

## Security & Governance

- **IAM**: Control access to workgroups and data catalog resources.
- **AWS Lake Formation**: Fine-grained access control (row-level and cell-level security).
- **Encryption**: Supports encryption at rest (KMS) and in transit (TLS).
- **VPC Endpoints**: Access Athena privately without traversing the public internet.

## Related Services
- [[_Analytics Index|Analytics Index]]
- [[Glue]]
- [[S3 Overview|S3]]
- [[Lake Formation]]
- [[QuickSight]]

---
**Practice:** [[Athena - Practice Questions|Athena Practice Questions]]