---
tags: [aws, sap-c02, analytics, etl, serverless]
---
# AWS Glue

[[Glue|AWS Glue]] is a fully managed, serverless **ETL** (Extract, Transform, and Load) service that automates the time-consuming steps of data preparation for analytics. It runs on a managed Apache Spark environment.

## Key Components

### AWS Glue Data Catalog
- A **central metadata repository** and persistent store for all data assets.
- Apache Hive Metastore compatible; can be a drop-in replacement for Hive Metastore in [[EMR]].
- Provides integration with [[Athena]], [[EMR]], and [[Redshift]] Spectrum.
- Each account has one Data Catalog per region.

### AWS Glue Crawlers
- Automatically scan various data stores ([[S3 Overview|S3]], [[RDS Overview|RDS]], [[Redshift]], [[DynamoDB Overview|DynamoDB]]) to infer schemas and partition structures.
- Populate the Data Catalog with metadata (table definitions and statistics).
- Can be scheduled to run periodically to keep metadata in sync with underlying data.

### ETL Engine
- Automatically generates Scala or Python code for ETL jobs.
- **Dynamic Frames**: A distributed table that supports nested data (structures, arrays). Unlike Spark DataFrames, each record is self-describing, providing schema flexibility for semi-structured data.
- **Job Bookmarks**: Tracks data that has already been processed to prevent reprocessing of old data during scheduled runs.

### AWS Glue Streaming ETL
- Performs ETL on streaming data using the Apache Spark Structured Streaming engine.
- Ingests from **Kinesis Data Streams**, **MSK**, or Apache Kafka.

### Glue DataBrew & Glue Studio
- **Glue DataBrew**: A visual data preparation tool for cleaning and normalizing data without writing code.
- **Glue Studio**: A graphical interface for authoring, running, and monitoring ETL jobs.

## Workflow Overview

![[glue-components.png]]

1. **Discover**: Crawlers scan data sources and populate the Data Catalog.
2. **Develop**: Use Glue Studio or custom code to create ETL jobs.
3. **Deploy**: Schedule jobs using triggers or the Glue Flexible scheduler.
4. **Monitor**: Track job progress and state using Job Bookmarks.

> [!exam]
> **Glue vs. EMR**: Use **Glue** for serverless, Spark-based ETL and data cataloging. Use **EMR** for more complex big data workloads requiring custom Hadoop ecosystem tools or specific cluster configurations.

---
**Practice:** [[Glue - Practice Questions|Glue Practice Questions]]