---
tags: [aws, sap-c02, redshift, database, analytics, practice-questions]
---
# Redshift Practice Questions

> [!question]
> With which AWS services can CloudHSM be used? (Select 2)
> 1. S3
> 2. DynamoDB
> 3. RDS
> 4. ElastiCache
> 5. Amazon Redshift
> 
> > [!success]- Answer & Rationale
> > **Answer: 3, 5**
> > **Rationale:** [[KMS|CloudHSM]] can be used to manage encryption keys for [[RDS Overview|RDS]] and [[Redshift]]. While [[S3 Overview|S3]] supports various encryption options, direct integration for managing S3 keys with CloudHSM is typically handled via [[KMS|KMS]] (Custom Key Store).

> [!question]
> You need to store sensor data (100K sensors, 1KB each/min) for at least two years and perform year-over-year comparisons. Peak IOPS is 10K. Which setup meets the requirements?
> 1. Add an SQS queue to buffer writes to RDS
> 2. Ingest data into a DynamoDB table and move old data to a Redshift cluster
> 3. Replace RDS with a 6 node Redshift cluster
> 4. Upgrade RDS storage to 3TB and 10K PIOPS
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[DynamoDB Overview|DynamoDB]] is ideal for high-velocity ingestion (100K sensors writing per minute). [[Redshift]] is the preferred choice for performing large-scale, historical, year-over-year analytical comparisons (OLAP). Moving "cold" data from [[DynamoDB Overview|DynamoDB]] to [[Redshift]] is a standard architectural pattern for cost-effective big data analytics.

> [!question]
> Which two AWS services provide out-of-the-box user configurable automatic backup-as-a-service and backup rotation options? (Choose 2)
> 1. Amazon S3
> 2. Amazon RDS
> 3. Amazon EBS
> 4. Amazon Redshift
> 
> > [!success]- Answer & Rationale
> > **Answer: 2, 4**
> > **Rationale:** Both [[RDS Overview|RDS]] and [[Redshift]] feature built-in, automated backup capabilities where users can configure backup windows and retention periods. [[S3 Overview|S3]] uses versioning and replication but doesn't have a scheduled "backup window." [[EBS Overview|EBS]] requires [[Index|AWS Backup]] or Data Lifecycle Manager (DLM) for automated schedules.

> [!question]
> Your EMR jobs generate PDF reports in S3 and aggregated tables in CSV for Redshift. How to lower costs without compromising average performance or data integrity?
> 1. Use RRS for S3. Add Spot instances to EMR. Use Reserved Instances for Redshift.
> 2. Use RRS for all data in S3. Use a combination of Spot instances and Reserved Instances for EMR. Use Reserved instances for Redshift.
> 3. Use RRS for all data in S3. Add Spot Instances to EMR. Use Reserved Instances for Redshift.
> 4. Use RRS for PDF and CSV data in S3. Add Spot Instances to EMR. Use Spot Instances for Redshift.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** Reduced Redundancy Storage (RRS) in [[S3 Overview|S3]] is cost-effective for reproducible data like reports. For [[EMR]], using a mix of Reserved Instances (for Master/Core nodes to ensure integrity) and Spot Instances (for Task nodes to save cost) is the best practice. [[Redshift]] clusters are typically steady-state, making Reserved Instances the most cost-effective choice compared to On-Demand.
