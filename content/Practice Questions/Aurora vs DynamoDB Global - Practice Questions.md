---
tags: [aws, sap-c02, aurora, dynamodb, practice-questions]
---
# Aurora vs DynamoDB Global Practice Questions

> [!question]
> A company needs to implement a relational database with a multi-region disaster recovery Recovery Point Objective (RPO) of 1 second and a Recovery Time Objective (RTO) of 1 minute. Which AWS solution can achieve this?
> 1. Amazon Aurora Global Database
> 2. Amazon DynamoDB global tables
> 3. Amazon RDS for MySQL with Multi-AZ enabled
> 4. Amazon RDS for MySQL with a cross-Region snapshot copy
> > [!success]- Answer & Rationale
> > **Correct Answer: 1**
> > - [[Aurora vs DynamoDB Global|Amazon Aurora Global Database]] provides asynchronous replication with an RPO of less than 1 second and can be promoted to a primary cluster in less than 1 minute (RTO), satisfying both requirements for a relational database.
> > - DynamoDB is a NoSQL database, not relational.
> > - RDS Multi-AZ is for intra-region high availability, not multi-region DR.
> > - RDS cross-region snapshot copies have a much higher RPO and RTO.

> [!question]
> A financial services company requires a globally distributed database with zero data loss (RPO = 0) and strong consistency across all regions. Which solution should they choose?
> 1. Amazon Aurora Global Database
> 2. Amazon DynamoDB Global Tables with MREC
> 3. Amazon DynamoDB Global Tables with MRSC
> 4. Amazon RDS with cross-region read replicas
> > [!success]- Answer & Rationale
> > **Correct Answer: 3**
> > - **DynamoDB Global Tables with MRSC** (Multi-Region Strong Consistency) provides synchronous replication across regions, enabling a Recovery Point Objective (RPO) of zero and strongly consistent reads globally.
> > - [[Aurora vs DynamoDB Global|Aurora Global Database]] and DynamoDB MREC use asynchronous replication, which results in a non-zero RPO (typically ~1 second).
> > - RDS cross-region replicas are also asynchronous.

> [!question]
> A company needs a multi-region database that supports writes in all regions simultaneously with automatic failover. Which solution provides this capability?
> 1. Amazon Aurora Global Database
> 2. Amazon DynamoDB Global Tables
> 3. Amazon RDS Multi-AZ
> 4. Amazon Aurora with read replicas
> > [!success]- Answer & Rationale
> > **Correct Answer: 2**
> > - [[Aurora vs DynamoDB Global|DynamoDB Global Tables]] is a multi-active (multi-master) database where all replicas accept reads and writes, and it supports automatic failover by redirecting requests to other healthy replicas.
> > - Aurora Global Database is single-master (writes only in the primary region) and requires manual failover.
> > - RDS Multi-AZ is not multi-region.

> [!question]
> What is the primary difference between Aurora Global Database and DynamoDB Global Tables in terms of write operations?
> 1. Aurora supports writes in all regions, DynamoDB only in primary region
> 2. Aurora supports writes only in primary region, DynamoDB supports writes in all regions
> 3. Both support writes in all regions
> 4. Both support writes only in primary region
> > [!success]- Answer & Rationale
> > **Correct Answer: 2**
> > - [[Aurora vs DynamoDB Global|Aurora Global Database]] uses a single-master architecture where writes occur only in the primary region. In contrast, **DynamoDB Global Tables** use a multi-active architecture where every replica can accept writes.

> [!question]
> A company needs to deploy a DynamoDB Global Table with MRSC. How many regions must they deploy in?
> 1. Minimum 2 regions
> 2. Exactly 3 regions
> 3. Up to 5 regions
> 4. Unlimited regions
> > [!success]- Answer & Rationale
> > **Correct Answer: 2**
> > - **DynamoDB MRSC** (Multi-Region Strong Consistency) must be deployed in exactly three Regions (either 3 replicas or 2 replicas + 1 witness) within a specific Region set (US, EU, or AP).

> [!question]
> Which of the following statements about Aurora Global Database and DynamoDB Global Tables are correct? (Select TWO)
> 1. Aurora Global Database requires manual failover, DynamoDB Global Tables support automatic failover
> 2. Aurora Global Database supports NoSQL, DynamoDB supports SQL
> 3. DynamoDB Global Tables offer 99.999% availability, Aurora offers 99.99%
> 4. Aurora Global Database supports multi-active writes
> 5. DynamoDB MRSC has higher replication latency than Aurora
> > [!success]- Answer & Rationale
> > **Correct Answers: 1 and 3**
> > - **Statement 1 is correct**: [[Aurora vs DynamoDB Global|Aurora Global]] requires manual promotion of a secondary region, while DynamoDB failover is automatic.
> > - **Statement 3 is correct**: DynamoDB Global Tables provide a 99.999% availability SLA, whereas Aurora Global Database provides 99.99%.
> > - Statement 2 is incorrect (Aurora is SQL, DynamoDB is NoSQL).
> > - Statement 4 is incorrect (Aurora is single-master).
> > - Statement 5 is incorrect (MRSC is synchronous, while Aurora is asynchronous).
