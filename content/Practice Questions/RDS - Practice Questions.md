---
tags: [aws, sap-c02, rds, database, practice-questions]
---
# RDS Practice Questions

> [!question]
> What does Amazon RDS stand for?
> 1. Regional Data Server.
> 2. Relational Database Service
> 3. Regional Database Service.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[RDS Overview|Amazon RDS]] stands for Relational Database Service. It is a web service that makes it easier to set up, operate, and scale a relational database in the cloud. It manages common database administration tasks such as hardware provisioning, database setup, patching, and backups.

> [!question]
> How many relational database engines does RDS currently support?
> 1. MySQL, Postgres, MariaDB, Oracle, and Microsoft SQL Server
> 2. Just two: MySQL and Oracle.
> 3. Five: MySQL, PostgreSQL, MongoDB, Cassandra and SQLite.
> 4. Just one: MySQL.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** [[RDS Overview|Amazon RDS]] currently supports several industry-standard relational database engines including MySQL, MariaDB, PostgreSQL, Oracle, and Microsoft SQL Server. Additionally, it supports [[Aurora Overview|Amazon Aurora]], which is a MySQL and PostgreSQL-compatible database engine.

> [!question]
> If I modify a DB Instance or the DB parameter group associated with the instance, should I reboot the instance for the changes to take effect?
> 1. No
> 2. Yes
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** While changes to dynamic parameters are applied immediately, changes to **static parameters** in a [[RDS Overview|DB parameter group]] are NOT applied immediately and require a manual reboot of the DB instance to take effect.

> [!question]
> What is the name of licensing model in which I can use your existing Oracle Database licenses to run Oracle deployments on Amazon RDS?
> 1. Bring Your Own License
> 2. Role Bases License
> 3. Enterprise License
> 4. License Included
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** The **Bring Your Own License (BYOL)** model allows you to use your existing Oracle Database licenses to run Oracle deployments on [[RDS Overview|Amazon RDS]].

> [!question]
> Will I be charged if the DB instance is idle?
> 1. No
> 2. Yes
> 3. Only is running in GovCloud
> 4. Only if running in VPC
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** You are charged for an [[RDS Overview|Amazon RDS]] DB instance as long as it is running, regardless of whether it is actively serving traffic or idle. To stop being charged for the instance itself, you must stop or delete the instance.

> [!question]
> What is the minimum charge for the data transferred between Amazon RDS and Amazon EC2 Instances in the same Availability Zone?
> 1. USD 0.10 per GB
> 2. No charge. It is free.
> 3. USD 0.02 per GB
> 4. USD 0.01 per GB
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** Data transfer between an [[RDS Overview|Amazon RDS]] DB instance and an Amazon EC2 instance in the same [[VPC Overview|Availability Zone]] is free of charge.

> [!question]
> Does Amazon RDS allow direct host access via Telnet, Secure Shell (SSH), or Windows Remote Desktop Connection?
> 1. Yes
> 2. No
> 3. Depends on if it is in VPC or not
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** As a managed service, [[RDS Overview|Amazon RDS]] does not provide shell access (root SSH or RDP) to DB instances. This is to ensure the integrity of the managed service, though it does restrict access to certain system procedures that require advanced privileges.

> [!question]
> What are the two types of licensing options available for using Amazon RDS for Oracle?
> 1. BYOL and Enterprise License
> 2. BYOL and License Included
> 3. Enterprise License and License Included
> 4. Role based License and License Included
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[RDS Overview|Amazon RDS]] for Oracle provides two licensing models: **Bring Your Own License (BYOL)** and **License Included**. In the License Included model, you do not need to purchase Oracle licenses separately; the license cost is bundled into the RDS hourly price.

> [!question]
> A user plans to use RDS as a managed DB platform. Which of the below mentioned features is not supported by RDS?
> 1. Automated backup
> 2. Automated scaling to manage a higher load
> 3. Automated failure detection and recovery
> 4. Automated software patching
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** While [[RDS Overview|RDS]] manages backups, patching, and failure detection/recovery, it does not automatically scale compute resources (CPU/RAM) "on the fly" to handle higher loads in the same way a serverless product might. Scaling RDS typically requires a manual modification of the instance class or using [[Aurora Serverless|Aurora Serverless]].

> [!question]
> A user is launching an AWS RDS with MySQL. Which of the below mentioned options allows the user to configure the InnoDB engine parameters?
> 1. Options group
> 2. Engine parameters
> 3. Parameter groups
> 4. DB parameters
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** A [[RDS Overview|DB Parameter Group]] acts as a container for engine configuration values that can be applied to one or more DB instances. This is where you configure settings like InnoDB parameters for MySQL.

> [!question]
> A user is planning to use the AWS RDS with MySQL. Which of the below mentioned services the user is not going to pay?
> 1. Data transfer
> 2. RDS CloudWatch metrics
> 3. Data storage
> 4. I/O requests per month
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** Basic [[CloudWatch Overview|CloudWatch metrics]] for [[RDS Overview|Amazon RDS]] are provided at no additional charge. Users pay for the instance class, storage, I/O requests, and data transfer (depending on the destination).
