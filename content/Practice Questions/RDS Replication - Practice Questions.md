---
tags: [aws, sap-c02, rds, database, practice-questions]
---
# RDS Replication Practice Questions

> [!question]
> You are running a successful multi-tier web application on AWS and your marketing department has asked you to add a reporting tier to the application. The reporting tier will aggregate and publish status reports every 30 minutes from user-generated information that is being stored in your web applications database. You are currently running a Multi-AZ RDS MySQL instance for the database tier. You also have implemented ElastiCache as a database caching layer between the application tier and database tier. Please select the answer that will allow you to successfully implement the reporting tier with as little impact as possible to your database.
> 1. Continually send transaction logs from your master database to an S3 bucket and generate the reports of the S3 bucket using S3 byte range requests.
> 2. Generate the reports by querying the synchronously replicated standby RDS MySQL instance maintained through Multi-AZ.
> 3. Launch an RDS Read Replica connected to your Multi-AZ master database and generate reports by querying the Read Replica.
> 4. Generate the reports by querying the ElastiCache database caching tier.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** [[RDS Replication#Read Replicas|Read Replicas]] are designed for offloading read-heavy workloads like reporting. Querying the standby in a standard [[RDS Replication#Multi-AZ Deployments|Multi-AZ]] deployment is not possible as the standby is not accessible. [[Index|ElastiCache]] is a caching layer and may not contain the full dataset required for reports.

> [!question]
> A company is deploying a new two-tier web application in AWS. The company has limited staff and requires high availability, and the application requires complex queries and table joins. Which configuration provides the solution for the company’s requirements?
> 1. MySQL Installed on two Amazon EC2 Instances in a single Availability Zone.
> 2. Amazon RDS for MySQL with Multi-AZ.
> 3. Amazon ElastiCache.
> 4. Amazon DynamoDB.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[RDS Replication#Multi-AZ Deployments|Multi-AZ]] provides high availability with minimal administrative overhead. RDS MySQL supports complex queries and joins, whereas [[DynamoDB Overview|DynamoDB]] is a NoSQL database not ideal for complex relational queries.

> [!question]
> Your company is getting ready to do a major public announcement of a social media site on AWS. The website is running on EC2 instances deployed across multiple Availability Zones with a Multi-AZ RDS MySQL Extra Large DB Instance. The site performs a high number of small reads and writes per second and relies on an eventual consistency model. After comprehensive tests you discover that there is read contention on RDS MySQL. Which are the best approaches to meet these requirements? (Choose 2 answers)
> 1. Deploy ElastiCache in-memory cache running in each availability zone.
> 2. Implement sharding to distribute load to multiple RDS MySQL instances.
> 3. Increase the RDS MySQL Instance size and Implement provisioned IOPS.
> 4. Add an RDS MySQL read replica in each availability zone.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1, 4**
> > **Rationale:** To resolve read contention, you should either cache the data using [[Index|ElastiCache]] or scale the read capacity using [[RDS Replication#Read Replicas|Read Replicas]]. Since the application supports eventual consistency, read replicas are a perfect fit.

> [!question]
> Your company has HQ in Tokyo and branch offices all over the world and is using logistics software with a multi-regional deployment on AWS in Japan, Europe and US. The logistic software has a 3-tier architecture and currently uses MySQL 5.6 for data persistence. Each region has deployed its own database. In the HQ region you run an hourly batch process reading data from every region to compute cross-regional reports. How do you build the database architecture in order to meet the requirements?
> 1. For each regional deployment, use RDS MySQL with a master in the region and a read replica in the HQ region.
> 2. For each regional deployment, use MySQL on EC2 with a master in the region and send hourly EBS snapshots to the HQ region.
> 3. For each regional deployment, use RDS MySQL with a master in the region and send hourly RDS snapshots to the HQ region.
> 4. Use Direct Connect to connect all regional MySQL deployments to the HQ region.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** Using [[RDS Replication#Cross-Region Read Replicas|Cross-Region Read Replicas]] allows the HQ region to have a local, readable copy of the data from all other regions, enabling fast batch processing for reporting without impacting the regional masters.

> [!question]
> What would happen to an RDS (Relational Database Service) Multi-Availability Zone deployment if the primary DB instance fails?
> 1. IP of the primary DB Instance is switched to the standby DB Instance.
> 2. A new DB instance is created in the standby availability zone.
> 3. The canonical name record (CNAME) is changed from primary to standby.
> 4. The RDS (Relational Database Service) DB instance reboots.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** In a [[RDS Replication#Multi-AZ Deployments|Multi-AZ]] failover, RDS automatically updates the DNS CNAME record to point to the standby instance, ensuring the application can reconnect using the same endpoint.

> [!question]
> Large analytics jobs on the database are likely to cause other applications to not be able to get the query results they need. How do you solve the contention issues between these different workloads on the same data?
> 1. Enable Multi-AZ mode on the RDS instance.
> 2. Use ElastiCache to offload the analytics job data.
> 3. Create RDS Read-Replicas for the analytics work.
> 4. Run the RDS instance on the largest size possible.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** [[RDS Replication#Read Replicas|Read Replicas]] are the primary solution for offloading long-running analytics or reporting queries from the primary transactional database.

> [!question]
> Will my standby RDS instance be in the same Availability Zone as my primary?
> 1. Only for Oracle RDS types.
> 2. Yes.
> 3. Only if configured at launch.
> 4. No.
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale:** A [[RDS Replication#Multi-AZ Deployments|Multi-AZ]] deployment specifically places the standby in a *different* Availability Zone to ensure high availability in case of an AZ-level failure.

> [!question]
> Is creating a Read Replica of another Read Replica supported?
> 1. Only in certain regions.
> 2. Only with MySQL based RDS.
> 3. Only for Oracle RDS types.
> 4. No.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** While modern RDS supports "chained" replicas for multiple engines (MySQL, MariaDB, PostgreSQL), historically and in many certification contexts, it is associated with MySQL/MariaDB engines using asynchronous replication.

> [!question]
> A user is planning to set up the Multi-AZ feature of RDS. Which of the below mentioned conditions won’t take advantage of the Multi-AZ feature?
> 1. Availability zone outage.
> 2. A manual failover of the DB instance using Reboot with failover option.
> 3. Region outage.
> 4. When the user changes the DB instance’s server type.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** [[RDS Replication#Multi-AZ Deployments|Multi-AZ]] provides high availability within a single region across different AZs. It does not protect against a full Region outage. For that, you would need [[RDS Replication#Cross-Region Read Replicas|Cross-Region Read Replicas]].

> [!question]
> When you run a DB Instance as a Multi-AZ deployment, the “_____” serves database writes and reads.
> 1. secondary
> 2. backup
> 3. stand by
> 4. primary
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale:** In a standard [[RDS Replication#Multi-AZ Deployments|Multi-AZ]] deployment, only the primary instance is active and serves both reads and writes. The standby is passive.

> [!question]
> When running my DB Instance as a Multi-AZ deployment, can I use the standby for read or write operations?
> 1. Yes.
> 2. Only with MSSQL based RDS.
> 3. Only for Oracle RDS instances.
> 4. No.
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale:** For standard [[RDS Replication#Multi-AZ Deployments|Multi-AZ]], the standby cannot be accessed. Note: The newer **Multi-AZ DB Clusters** do allow reads from standby instances, but "Multi-AZ Deployment" usually refers to the standard version.

> [!question]
> Read Replicas require a transactional storage engine and are only supported for the _________ storage engine.
> 1. OracleISAM
> 2. MSSQLDB
> 3. InnoDB
> 4. MyISAM
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** For MySQL Read Replicas, the InnoDB storage engine is required because it is transactional. MyISAM does not support the same replication reliability.

> [!question]
> A user is configuring the Multi-AZ feature of an RDS DB. The user came to know that this RDS DB does not use the AWS technology, but uses server mirroring to achieve replication. Which DB is the user using right now?
> 1. MySQL
> 2. Oracle
> 3. MS SQL
> 4. PostgreSQL
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** Amazon RDS for SQL Server uses SQL Server Mirroring or Always On Availability Groups to implement [[RDS Replication#Multi-AZ Deployments|Multi-AZ]] functionality.

> [!question]
> If I have multiple Read Replicas for my master DB Instance and I promote one of them, what happens to the rest of the Read Replicas?
> 1. The remaining Read Replicas will still replicate from the older master DB Instance.
> 2. The remaining Read Replicas will be deleted.
> 3. The remaining Read Replicas will be combined to one read replica.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** Promoting a [[RDS Replication#Read Replicas|Read Replica]] makes it a standalone DB instance. The other replicas continue to replicate from the original master.

> [!question]
> If you have chosen Multi-AZ deployment, in the event of a planned or unplanned outage of your primary DB Instance, Amazon RDS automatically switches to the standby replica. The automatic failover mechanism simply changes the ______ record of the main DB Instance to point to the standby DB Instance.
> 1. DNAME
> 2. CNAME
> 3. TXT
> 4. MX
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** RDS uses a DNS CNAME record to point to the current primary. During failover, this record is updated to point to the standby's IP.

> [!question]
> When automatic failover occurs, Amazon RDS will emit a DB Instance event. You can use the _____ to return information about events related to your DB Instance.
> 1. FetchFailure
> 2. DescriveFailure
> 3. DescribeEvents
> 4. FetchEvents
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** The `DescribeEvents` API or CLI command is used to retrieve events for an RDS instance, including failover notifications.

> [!question]
> The new DB Instance that is created when you promote a Read Replica retains the backup window period.
> 1. TRUE
> 2. FALSE
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** When a [[RDS Replication#Read Replicas|Read Replica]] is promoted, it becomes a standalone instance and retains settings like the backup window.

> [!question]
> Will I be alerted when automatic failover occurs?
> 1. Only if SNS configured.
> 2. No.
> 3. Yes.
> 4. Only if Cloudwatch configured.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** RDS sends events when a failover occurs. You can subscribe to these events using RDS Event Notifications (which uses SNS) or view them in the console.

> [!question]
> Can I initiate a “forced failover” for my MySQL Multi-AZ DB Instance deployment?
> 1. Only in certain regions.
> 2. Only in VPC.
> 3. Yes.
> 4. No.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** You can force a failover by rebooting the instance and selecting the "Reboot with failover" option.

> [!question]
> A user is accessing RDS from an application. The user has enabled the Multi-AZ feature with the MS SQL RDS DB. During a planned outage how will AWS ensure that a switch from DB to a standby replica will not affect access to the application?
> 1. RDS will have an internal IP which will redirect all requests to the new DB.
> 2. RDS uses DNS to switch over to standby replica for seamless transition.
> 3. The switch over changes Hardware so RDS does not need to worry about access.
> 4. RDS will have both the DBs running independently and the user has to manually switch over.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** Regardless of the underlying engine (SQL Server, MySQL, etc.), RDS uses DNS CNAME updates to handle the transition to the standby instance.

> [!question]
> Which of these is not a reason a Multi-AZ RDS instance will failover?
> 1. An Availability Zone outage.
> 2. A manual failover of the DB instance was initiated using Reboot with failover.
> 3. To autoscale to a higher instance class.
> 4. Master database corruption occurs.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** Scaling an instance class is a planned maintenance action. While it may involve a switch to a new instance (especially in Multi-AZ), it is not considered a "failover" event triggered by an error or outage.

> [!question]
> You need to scale an RDS deployment. You are operating at 10% writes and 90% reads. How best can you scale this in a simple way?
> 1. Create a second master RDS instance and peer the RDS groups.
> 2. Cache all the database responses on the read side with CloudFront.
> 3. Create read replicas for RDS since the load is mostly reads.
> 4. Create a Multi-AZ RDS installs and route read traffic to standby.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** For read-heavy workloads (90% reads), [[RDS Replication#Read Replicas|Read Replicas]] provide a simple and effective way to scale horizontal read capacity.

> [!question]
> How does Amazon RDS multi Availability Zone model work?
> 1. A second, standby database is deployed and maintained in a different availability zone from master, using synchronous replication.
> 2. A second, standby database is deployed and maintained in a different availability zone from master using asynchronous replication.
> 3. A second, standby database is deployed and maintained in a different region from master using asynchronous replication.
> 4. A second, standby database is deployed and maintained in a different region from master using synchronous replication.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** [[RDS Replication#Multi-AZ Deployments|Multi-AZ]] uses synchronous replication to a standby in a different AZ within the *same* region.

> [!question]
> A customer wants to setup disaster recovery failover from US-West to Singapore. The customer is interested in achieving a low Recovery Point Objective (RPO) for an Amazon RDS multi-AZ MySQL database instance. Which approach is best suited?
> 1. Synchronous replication.
> 2. Asynchronous replication.
> 3. Route53 health checks.
> 4. Copying of RDS incremental snapshots.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** Cross-region replication for RDS is always **asynchronous**. To achieve a low RPO across regions, [[RDS Replication#Cross-Region Read Replicas|Cross-Region Read Replicas]] are used.

> [!question]
> A user is using a small MySQL RDS DB and experiencing high latency due to the Multi AZ feature. Which of the below mentioned options may not help the user in this situation?
> 1. Schedule the automated back up in non-working hours.
> 2. Use a large or higher size instance.
> 3. Use PIOPS.
> 4. Take a snapshot from standby Replica.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** In a [[RDS Replication#Multi-AZ Deployments|Multi-AZ]] deployment, backups are already taken from the standby instance to avoid performance impact on the primary. Scheduling them differently won't resolve latency caused by synchronous replication.

> [!question]
> My Read Replica appears “stuck” after a Multi-AZ failover and is unable to obtain or apply updates from the source DB Instance. What do I do?
> 1. You will need to delete the Read Replica and create a new one to replace it.
> 2. You will need to disassociate the DB Engine and re-associate it.
> 3. The instance should be deployed to Single AZ and then moved to Multi-AZ.
> 4. You will need to delete the DB Instance and create a new one.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** If a [[RDS Replication#Read Replicas|Read Replica]] becomes stuck or breaks replication (common after some failover scenarios or binlog errors), the standard fix is to recreate it.

> [!question]
> What is the charge for the data transfer incurred in replicating data between your primary and standby?
> 1. No charge. It is free.
> 2. Double the standard data transfer charge.
> 3. Same as the standard data transfer charge.
> 4. Half of the standard data transfer charge.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** Data transfer for [[RDS Replication#Multi-AZ Deployments|Multi-AZ]] replication within the same region is free. Charges apply for [[RDS Replication#Cross-Region Read Replicas|Cross-Region Read Replicas]].

> [!question]
> A company is running a batch analysis every hour on their main transactional DB running on an RDS MySQL instance. During execution, applications are slow. How would you optimize this scenario to solve performance issues and automate the process?
> 1. Replace RDS with Redshift for the batch analysis and SNS to notify on-premises.
> 2. Replace RDS with Redshift for the batch analysis and SQS to send a message.
> 3. Create an RDS Read Replica for the batch analysis and SNS to notify on-premises system.
> 4. Create an RDS Read Replica for the batch analysis and SQS to send a message to the on-premises system.
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale:** Using a [[RDS Replication#Read Replicas|Read Replica]] offloads the batch load. SQS is a more robust way to trigger the on-premises dashboard update process compared to SNS if the on-premises system needs to pull tasks or handle them asynchronously.
