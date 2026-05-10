---
tags: [aws, sap-c02, glue, analytics, etl, serverless, practice-questions]
---
# Glue Practice Questions

> [!question]
> An organization needs a data catalog for RDS, Redshift, and S3 (CSV). The catalog should be populated on a scheduled basis with minimal administration. What is the most efficient solution?
> 1. DynamoDB + Lambda
> 2. RDS + Lambda
> 3. AWS Glue Data Catalog + Scheduled Crawlers
> 4. EC2 + Apache Hive Metastore + Bash scripts
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** [[Glue|AWS Glue]] is a fully managed, serverless solution for data cataloging and ETL. Scheduled [[Glue|Crawlers]] can automatically connect to various data stores ([[RDS Overview|RDS]], [[Redshift]], [[S3 Overview|S3]]), infer schemas, and populate the [[Glue|Data Catalog]] with metadata. This requires significantly less administrative overhead than manual scripting or managing a custom metadata store.
