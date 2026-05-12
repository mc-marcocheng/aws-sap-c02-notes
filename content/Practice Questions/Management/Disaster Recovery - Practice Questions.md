---
tags: [aws, sap-c02, disaster-recovery, practice-questions]
---

# Disaster Recovery Practice Questions

> [!question]
> Your company currently has a 2-tier web application running in an on-premises data center. You have experienced several infrastructure failures in the past two months resulting in significant financial losses. Your CIO is strongly agreeing to move the application to AWS. While working on achieving buy-in from the other company executives, he asks you to develop a disaster recovery plan to help improve Business continuity in the short term. He specifies a target Recovery Time Objective (RTO) of 4 hours and a Recovery Point Objective (RPO) of 1 hour or less. He also asks you to implement the solution within 2 weeks. Your database is 200GB in size and you have a 20Mbps Internet connection. How would you do this while minimizing costs?
> 1. Create an EBS backed private AMI which includes a fresh install or your application. Setup a script in your data center to backup the local database every 1 hour and to encrypt and copy the resulting file to an S3 bucket using multi-part upload
> 2. Install your application on a compute-optimized EC2 instance capable of supporting the application’s average load synchronously replicate transactions from your on-premises database to a database instance in AWS across a secure Direct Connect connection.
> 3. Deploy your application on EC2 instances within an Auto Scaling group across multiple availability zones asynchronously replicate transactions from your on-premises database to a database instance in AWS across a secure VPN connection.
> 4. Create an EBS backed private AMI that includes a fresh install of your application. Develop a Cloud Formation template which includes your AMI and the required EC2. Auto-Scaling and ELB resources to support deploying the application across Multiple Availability Zones. Asynchronously replicate transactions from your on-premises database to a database instance in AWS across a secure VPN connection.
>
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale:** This implements a **Pilot Light** architecture. It meets the RTO (4 hours) using preconfigured AMI and [[Auto Scaling Overview|Auto Scaling]] and RPO (1 hour) via asynchronous replication. It keeps costs low by not running full capacity continuously and can be setup quickly over VPN. (See [[DR Strategies Overview|Disaster Recovery]])

> [!question]
> Your customer wishes to deploy an enterprise application to AWS that will consist of several web servers, several application servers and a small (50GB) Oracle database. Information is stored, both in the database and the file systems of the various servers. The backup system must support database recovery, whole server and whole disk restores, and individual file restores with a recovery time of no more than two hours. They have chosen to use RDS Oracle as the database. Which backup architecture will meet these requirements?
> 1. Backup RDS using automated daily DB backups. Backup the EC2 instances using AMIs and supplement with file-level backup to S3 using traditional enterprise backup software to provide file level restore
> 2. Backup RDS using a Multi-AZ Deployment Backup the EC2 instances using AMIs, and supplement by copying file system data to S3 to provide file level restore
> 3. Backup RDS using automated daily DB backups. Backup the EC2 instances using EBS snapshots and supplement with file-level backups to Amazon Glacier using traditional enterprise backup software to provide file level restore
> 4. Backup RDS database to S3 using Oracle RMAN. Backup the EC2 instances using AMIs, and supplement with EBS snapshots for individual volume restore.
>
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** [[RDS Overview|RDS]] automated backups cover database recovery. AMIs provide whole server restore. Traditional file-level backups to [[S3 Overview|S3]] allow individual file restores. Glacier (option 3) doesn't meet the 2-hour RTO. RMAN (option 4) isn't used for RDS. (See [[DR Strategies Overview|Disaster Recovery]])

> [!question]
> Your company’s on-premises content management system has the following architecture: Application Tier – Java code on a JBoss application server, Database Tier – Oracle database regularly backed up to Amazon Simple Storage Service (S3) using the Oracle RMAN backup utility, Static Content – stored on a 512GB gateway stored Storage Gateway volume attached to the application server via the iSCSI interface. Which AWS based disaster recovery strategy will give you the best RTO?
> 1. Deploy the Oracle database and the JBoss app server on EC2. Restore the RMAN Oracle backups from Amazon S3. Generate an EBS volume of static content from the Storage Gateway and attach it to the JBoss EC2 server.
> 2. Deploy the Oracle database on RDS. Deploy the JBoss app server on EC2. Restore the RMAN Oracle backups from Amazon Glacier. Generate an EBS volume of static content from the Storage Gateway and attach it to the JBoss EC2 server.
> 3. Deploy the Oracle database and the JBoss app server on EC2. Restore the RMAN Oracle backups from Amazon S3. Restore the static content by attaching an AWS Storage Gateway running on Amazon EC2 as an iSCSI volume to the JBoss EC2 server.
> 4. Deploy the Oracle database and the JBoss app server on EC2. Restore the RMAN Oracle backups from Amazon S3. Restore the static content from an AWS Storage Gateway-VTL running on Amazon EC2
>
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** Generating an [[EBS Overview|EBS]] volume directly from the [[Storage Gateway]] snapshot and attaching it gives the best RTO. Option 2 uses Glacier which has a slow restore time. Option 3 adds unnecessary complexity with iSCSI volume on EC2 instead of simple EBS. (See [[DR Strategies Overview|Disaster Recovery]])

> [!question]
> A company requires a multi-region disaster recovery solution for a mission-critical web application. The application uses Amazon Aurora and stores static assets in Amazon S3. The company has a strict RTO of 5 minutes and an RPO of 1 minute. Which strategy meets these requirements MOST cost-effectively?
> 1. Pilot Light: Use Aurora Global Database and S3 Cross-Region Replication (CRR). Keep a small fleet of EC2 instances running in the secondary region.
> 2. Warm Standby: Use Aurora Global Database and S3 CRR. Keep a scaled-down version of the application (e.g., minimum ASG size) running in the secondary region.
> 3. Multi-Site (Active-Active): Run the application at full capacity in both regions with Route 53 Latency-based routing.
> 4. Backup and Restore: Use AWS Backup to copy snapshots to a secondary region and restore them in the event of a disaster.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** For an RTO of 5 minutes, a **Warm Standby** (Option 2) is required because Pilot Light (Option 1) would take longer than 5 minutes to scale up the compute and network resources. Multi-Site (Option 3) would meet the RTO but is much more expensive. Aurora Global Database provides the required sub-1-minute RPO. (See [[DR Strategies Overview|Disaster Recovery]])
