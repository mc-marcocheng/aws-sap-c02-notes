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
> > **Rationale:** [[RDS Replication#Read Replicas|Read Replicas]] are designed for offloading read-heavy workloads like reporting. Querying the standby in a standard [[RDS Replication#Multi-AZ Deployments|Multi-AZ]] deployment is not possible as the standby is not accessible. [[ElastiCache]] is a caching layer and may not contain the full dataset required for reports.

> [!question]
> Your company is getting ready to do a major public announcement of a social media site on AWS. The website is running on EC2 instances deployed across multiple Availability Zones with a Multi-AZ RDS MySQL Extra Large DB Instance. The site performs a high number of small reads and writes per second and relies on an eventual consistency model. After comprehensive tests you discover that there is read contention on RDS MySQL. Which are the best approaches to meet these requirements? (Choose 2 answers)
> 1. Deploy ElastiCache in-memory cache running in each availability zone.
> 2. Implement sharding to distribute load to multiple RDS MySQL instances.
> 3. Increase the RDS MySQL Instance size and Implement provisioned IOPS.
> 4. Add an RDS MySQL read replica in each availability zone.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1, 4**
> > **Rationale:** To resolve read contention, you should either cache the data using [[ElastiCache]] or scale the read capacity using [[RDS Replication#Read Replicas|Read Replicas]]. Since the application supports eventual consistency, read replicas are a perfect fit.

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
> A company is running a batch analysis every hour on their main transactional DB running on an RDS MySQL instance to populate their central Data Warehouse running on Redshift. During the execution of the batch their transactional applications are very slow. When the batch completes they need to update the top management dashboard with the new data. The dashboard is produced by another system running on-premises that is currently started when a manually-sent email notifies that an update is required. The on-premises system cannot be modified because is managed by another team. How would you optimize this scenario to solve performance issues and automate the process as much as possible?
> 1. Replace RDS with Redshift for the batch analysis and SNS to notify the on-premises system to update the dashboard
> 2. Replace RDS with Redshift for the batch analysis and SQS to send a message to the on-premises system to update the dashboard
> 3. Create an RDS Read Replica for the batch analysis and SNS to notify the on-premises system to update the dashboard
> 4. Create an RDS Read Replica for the batch analysis and SQS to send a message to the on-premises system to update the dashboard.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** Using an [[RDS Replication#Read Replicas|RDS Read Replica]] offloads the read-heavy batch analysis workload from the main transactional database, solving the performance issues. Amazon [[SNS]] can send an automated email notification to trigger the on-premises system, automating the manual email process as requested ("notifies that an update is required").

> [!question]
> A solutions architect needs to design a high availability (HA) architecture for a legacy application that uses a Microsoft SQL Server database. The application requires the database to be highly available across two Availability Zones, but it does NOT support the use of DNS-based failover (it requires a single static IP address for the database). How can this be achieved in AWS?
> 1. Use RDS for SQL Server with Multi-AZ.
> 2. Deploy SQL Server Always On Availability Groups on EC2 instances across two AZs and use an AWS Management Console to manually switch IPs.
> 3. Deploy SQL Server on EC2 in two AZs and use a **Cluster IP** managed by a transit gateway.
> 4. Use RDS for SQL Server with Multi-AZ and place an **AWS PrivateLink endpoint** or a Network Load Balancer in front of it.
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale:** Standard RDS Multi-AZ uses DNS CNAME updates for failover. If an application requires a static IP, you can place a **Network Load Balancer (NLB)** (which provides a static IP per AZ) or a VPC Interface Endpoint (PrivateLink) in front of the RDS instance. The NLB target would be the RDS DNS name (using a Lambda function to update the IP if it changes) or the RDS instance itself. Option 1 alone uses DNS failover. (See [[RDS Replication]])

> [!question]
> A company is migrating its on-premises PostgreSQL database to Amazon RDS. The database is 10 TB in size and supports a critical global application. The company requires a migration strategy that minimizes downtime to under 5 minutes and provides a fallback plan. Which approach is BEST?
> 1. Use the AWS Schema Conversion Tool (SCT) and AWS DMS with Full Load + Change Data Capture (CDC).
> 2. Perform an RDS Snapshot Export to S3 and use RDS S3 Import.
> 3. Use standard PostgreSQL `pg_dump` and `pg_restore` over a Direct Connect connection.
> 4. Create an RDS Read Replica of the on-premises database using an external master configuration.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** For a 10 TB database with a requirement for minimal downtime (< 5 mins), **AWS DMS with CDC** (Option 1) is the preferred method. It performs an initial full load and then continuously replicates changes. Once the databases are in sync, a quick cutover (under 5 mins) can be performed. It also allows for a fallback if the cutover fails. Option 4 is theoretically possible for PostgreSQL but DMS is the managed, standard AWS solution for this scale. (See [[DMS]])

> [!question]
> An application uses an RDS for MySQL Multi-AZ deployment. During a maintenance window, AWS applies a required operating system patch. How does this affect application availability?
> 1. The instance will be unavailable for the entire duration of the patching process.
> 2. AWS patches the standby first, performs a failover, and then patches the old primary, minimizing downtime to the duration of a failover.
> 3. AWS patches the primary first, causing an immediate outage.
> 4. Patching is performed in-place on the primary without any downtime.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** In a [[RDS Replication#Multi-AZ Deployments|Multi-AZ]] deployment, AWS minimizes downtime during maintenance by patching the standby instance first. Once the standby is patched, a failover is triggered (the standby becomes the new primary), and then the old primary (now the standby) is patched. This reduces the total downtime to approximately the time it takes for a failover to complete (typically 60-120 seconds).
