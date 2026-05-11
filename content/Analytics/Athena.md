---
tags: [aws, sap-c02, analytics, serverless]
---
# Amazon Athena

[[Athena|Amazon Athena]] is a serverless, interactive analytics service built on open-source frameworks (Trino, Presto, Apache Spark). It allows for analyzing petabytes of data in [[S3 Overview|S3]] and other data sources using standard SQL or Python without the need for data loading or infrastructure management.

## Key Features

- **Serverless**: No infrastructure to manage; pay only for the queries you run.
- **Schema-on-Read**: Table definitions are applied to the data in [[S3 Overview|S3]] when queries are executed.
- **Glue Data Catalog**: Uses a managed [[Glue|Glue Data Catalog]] to store schemas and metadata.
- **Federated Query**: Query data across 30+ sources, including [[RDS Overview|RDS]], [[Redshift]], and on-premises databases using Athena Federated Query.
- **Modern Table Formats**: Supports **Apache Iceberg**, **Delta Lake**, and **Apache Hudi** for ACID transactions, schema evolution, and time travel.
- **Athena for Apache Spark**: Run serverless Spark applications for advanced analytics and ML.

## Performance & Cost Optimization

> [!exam]
> Athena pricing is primarily based on the amount of data scanned. Optimizing data storage is critical for both performance and cost.

- **Columnar Formats**: Use **Parquet** or **ORC** to reduce the amount of data scanned (Athena only reads the required columns).
- **Compression**: Use splittable compression like **Snappy** or **GZIP** to reduce data size and speed up I/O.
- **Partitioning**: Partition data by common columns (e.g., `date`, `region`) to limit the data scanned by queries.
- **Partition Projection**: Speeds up query processing for highly partitioned tables by retrieving partition information from configuration rather than the Glue Data Catalog.
- **Query Result Reuse**: Cache and reuse query results to reduce costs for repeated queries.

## Athena Workgroups

Workgroups are used to separate users, teams, or workloads. They provide:
- **Cost Controls**: Set limits on the amount of data scanned per query or per workgroup.
- **Query Metrics**: Track usage in [[CloudWatch Overview|CloudWatch]].
- **Encryption Settings**: Enforce workgroup-level encryption for query results.
- **Provisioned Capacity**: Dedicated compute resources for predictable query performance.

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