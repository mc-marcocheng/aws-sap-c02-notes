---
tags: [aws, sap-c02, rds, database, compute, practice-questions]
---
# RDS Practice Questions

> [!question]
> A company is running a production MySQL database on a single Amazon RDS instance. Due to a new compliance requirement, the database must be highly available with an RTO of less than 60 seconds and an RPO of 0. Which action should the solutions architect take?
> 1. Create a Read Replica in a different Availability Zone.
> 2. Enable Multi-AZ deployment for the RDS instance.
> 3. Use AWS Backup to take snapshots every 5 minutes.
> 4. Configure an Aurora Global Database with a secondary region.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** **Multi-AZ deployment** (Option 2) provides synchronous replication to a standby instance in a different Availability Zone. In the event of a failure, RDS automatically fails over to the standby instance, typically within 60 seconds, with zero data loss (RPO 0). Read Replicas (Option 1) are asynchronous and require manual promotion. AWS Backup (Option 3) does not provide the required RTO. (See [[RDS Overview]])

> [!question]
> A company has an unencrypted Amazon RDS for PostgreSQL instance. A security audit requires that all data at rest must be encrypted using a customer-managed KMS key. What is the MOST efficient way to implement this?
> 1. Enable encryption on the existing instance using the RDS console.
> 2. Create a snapshot of the instance, copy the snapshot to an encrypted snapshot using the KMS key, and restore the encrypted snapshot to a new instance.
> 3. Use AWS DMS to migrate data from the unencrypted instance to a new encrypted instance.
> 4. Create an encrypted Read Replica and then promote it to a standalone instance.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** Encryption at rest for [[RDS Overview|RDS]] cannot be enabled on an existing unencrypted instance. The standard procedure is to take a **snapshot**, **copy** it while enabling encryption with the desired [[KMS]] key, and then **restore** from that encrypted snapshot. DMS (Option 3) is a valid but more complex migration method. You cannot create an encrypted Read Replica of an unencrypted source (Option 4).

> [!question]
> An application experiences unpredictable bursts of write activity that occasionally cause the RDS database to run out of storage space, leading to application downtime. How can the solutions architect resolve this with the LEAST manual intervention?
> 1. Create a CloudWatch Alarm for `FreeStorageSpace` and manually increase the storage.
> 2. Enable **RDS Storage Autoscaling**.
> 3. Use a Provisioned IOPS (io1) volume type.
> 4. Migrate the database to Amazon Aurora.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** **RDS Storage Autoscaling** (Option 2) automatically increases the storage capacity of an RDS instance when the free space drops below a threshold. This happens without downtime and with minimal management overhead. While Aurora (Option 4) also handles storage automatically, enabling autoscaling on the existing RDS instance is the "least intervention" path. (See [[RDS Overview]])

> [!question]
> A company wants to improve the security of their RDS for SQL Server database by removing the need for password-based authentication for their application servers. Which feature should they use?
> 1. Use AWS Secrets Manager to rotate passwords.
> 2. Enable **IAM Database Authentication**.
> 3. Use Windows Authentication with an AWS Managed Microsoft AD.
> 4. Use a VPC Endpoint for RDS.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** For **RDS for SQL Server**, password-less authentication is typically achieved using **Windows Authentication** integrated with [[Directory Service|AWS Managed Microsoft AD]]. IAM Database Authentication (Option 2) is supported for MySQL and PostgreSQL, but not for SQL Server. Secrets Manager (Option 1) still uses passwords, though it rotates them. (See [[RDS Overview]])

> [!question]
> A solutions architect needs to design a disaster recovery (DR) solution for an RDS for PostgreSQL database with an RTO of 4 hours and an RPO of 1 hour in a secondary region. Which solution is MOST cost-effective?
> 1. Use Cross-Region Read Replicas.
> 2. Use AWS Backup to perform **Cross-Region Snapshot Copy** on a scheduled basis.
> 3. Implement an Aurora Global Database.
> 4. Use AWS DMS for continuous replication to the secondary region.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** For an RPO of 1 hour and RTO of 4 hours, **Cross-Region Snapshot Copy** via AWS Backup is the most cost-effective solution as it doesn't require a running database instance in the secondary region. Cross-Region Read Replicas (Option 1) and Aurora Global Database (Option 3) provide much lower RPOs but are more expensive due to the cost of the secondary instance. (See [[RDS Replication]])
