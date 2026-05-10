---
tags: [aws, sap-c02, aurora, database, practice-questions]
---
# Aurora Practice Questions

> [!question]
> Company wants to use MySQL compatible relational database with greater performance. Which AWS service can be used?
> 1. Aurora
> 2. RDS
> 3. SimpleDB
> 4. DynamoDB
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** [[Aurora Overview|Aurora]] is a MySQL and PostgreSQL-compatible relational database engine that combines the speed and reliability of high-end commercial databases with the simplicity and cost-effectiveness of open-source databases. It delivers up to 5x the performance of standard MySQL. While standard [[RDS Overview|RDS]] also supports MySQL, Aurora is specifically designed for higher performance and scalability.

> [!question]
> An application requires a highly available relational database with an initial storage capacity of 8 TB. The database will grow by 8 GB every day. To support expected traffic, at least eight read replicas will be required to handle database reads. Which option will meet these requirements?
> 1. DynamoDB
> 2. Amazon S3
> 3. Amazon Aurora
> 4. Amazon Redshift
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** [[Aurora Overview|Aurora]] meets all these requirements: it is a highly available relational database, its storage scales automatically up to 128 TiB (easily handling 8 TB + growth), and it supports up to 15 [[Aurora Overview|Read Replicas]]. [[DynamoDB Overview|DynamoDB]] is NoSQL, [[S3 Overview|S3]] is object storage, and [[Redshift|Redshift]] is an OLAP data warehouse not typically used for standard application relational workloads.

> [!question]
> A company is migrating their on-premise 10TB MySQL database to AWS. As a compliance requirement, the company wants to have the data replicated across three availability zones. Which Amazon RDS engine meets the above business requirement?
> 1. Use Multi-AZ RDS
> 2. Use RDS
> 3. Use Aurora
> 4. Use DynamoDB
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** [[Aurora Overview|Aurora]] automatically replicates data six ways across three Availability Zones (AZs) by default, providing high durability and meeting the compliance requirement for 3-AZ replication. While [[RDS Overview|RDS]] Multi-AZ provides replication across two AZs (Primary and Standby), Aurora's native storage architecture is built on a 3-AZ quorum-based system.
