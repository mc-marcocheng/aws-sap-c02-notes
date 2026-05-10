---
tags: [aws, sap-c02, database, analytics]
---
# Amazon Redshift

[[Redshift|Amazon Redshift]] is a fully managed, fast, and powerful, petabyte-scale data warehouse service. It is an **OLAP** (Online Analytical Processing) solution based on PostgreSQL, optimized for complex queries and large datasets.

## Architecture

![[redshift-architecture-v2.png]]

- **Leader Node**: Manages communications with client programs, parses queries, and develops execution plans. It coordinates parallel execution with compute nodes.
- **Compute Nodes**: Execute the compiled code and send intermediate results back to the leader node.
  - **Node Slices**: Compute nodes are partitioned into slices, each with dedicated CPU, memory, and disk space.
- **Redshift Managed Storage (RMS)**: A separate storage tier that scales storage to petabytes using [[S3 Overview|S3]]. It automatically tiers data between high-performance SSDs and S3.

## Performance Features

- **Massively Parallel Processing (MPP)**: Automatically distributes data and query load across all nodes.
- **Columnar Data Storage**: Ideal for data warehousing where queries involve aggregates over large data sets. Reduces I/O significantly.
- **Advanced Compression**: Columnar data is highly compressible, reducing storage footprint and improving I/O.
- **Result Caching**: Transparently caches query results on the leader node for repeated queries.
- **Redshift Spectrum**: Query and retrieve structured and semi-structured data directly from [[S3 Overview|S3]] without loading it into Redshift tables.
- **Federated Query**: Query data across operational databases ([[RDS Overview|RDS]], [[Aurora Overview|Aurora]]), data warehouses, and data lakes.

## High Availability & Disaster Recovery

> [!exam]
> **Redshift Multi-AZ**: Now supports Multi-AZ deployments with **RPO = 0** and **RTO under a minute**. It is managed as a single data warehouse with one endpoint.

- **Data Durability**: Redshift replicates data within the cluster and continuously backs up to [[S3 Overview|S3]].
- **Node Failure**: Redshift automatically provisions new nodes and restores data from other drives or S3. The cluster is temporarily unavailable during this process.
- **Cross-Region Snapshots**: Snapshots can be asynchronously replicated to another region for Disaster Recovery.

## Redshift Serverless

- Automatically provisions and scales capacity (measured in **Redshift Processing Units - RPUs**).
- Ideal for unpredictable or intermittent workloads.
- Supports **Concurrency Scaling** to handle virtually unlimited concurrent users/queries.

## Comparison: Redshift vs. [[RDS Overview|RDS]] vs. [[EMR]]

| Service | Best For | Focus |
| :--- | :--- | :--- |
| **[[RDS Overview|RDS]]** | Structured data, OLTP | Transactional integrity, standard relational apps |
| **[[Redshift]]** | Large volumes of structured data, OLAP | Complex analytics, BI reporting, petabyte-scale |
| **[[EMR]]** | Unstructured/Semi-structured data | Big data processing (Hadoop/Spark), transitory data |

## Related Services
- [[_Database Index|Database Index]]
- [[RDS Overview]]
- [[Aurora Overview]]
- [[S3 Overview]]
- [[EMR]]

---
**Practice:** [[Redshift - Practice Questions|Redshift Practice Questions]]