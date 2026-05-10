---
tags: [aws, sap-c02, s3, storage, practice-questions]
---
# S3 Lifecycle Practice Questions

> [!question]
> If an object is stored in the Standard S3 storage class and you want to move it to Glacier, what must you do in order to properly migrate it?
> 1. Change the storage class directly on the object.
> 2. Delete the object and re-upload it, selecting Glacier as the storage class.
> 3. None of the above.
> 4. Create a lifecycle policy that will migrate it after a minimum of 30 days.
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale:** Any object uploaded to [[S3 Overview|Amazon S3]] must first be placed into either the Standard, Reduced Redundancy, or Infrequent Access storage class. Once in S3, the only way to move the object to [[S3 Storage Classes|Glacier]] is through a [[S3 Lifecycle Management|Lifecycle Policy]]. Note: While direct PUT to Glacier is possible via Glacier API, within the S3 ecosystem and common exam scenarios, lifecycle transition is the primary mechanism for migration from Standard.

> [!question]
> A company wants to store their documents in AWS. Initially, these documents will be used frequently, and after a duration of 6 months, they would not be needed anymore. How would you architect this requirement?
> 1. Store the files in Amazon EBS and create a Lifecycle Policy to remove the files after 6 months.
> 2. Store the files in Amazon S3 and create a Lifecycle Policy to remove the files after 6 months.
> 3. Store the files in Amazon Glacier and create a Lifecycle Policy to remove the files after 6 months.
> 4. Store the files in Amazon EFS and create a Lifecycle Policy to remove the files after 6 months.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** Store the files in [[S3 Overview|Amazon S3]] and create a [[S3 Lifecycle Management|Lifecycle Policy]] to remove (expire) the files after 6 months. S3 is the most cost-effective and scalable service for document storage compared to EBS or EFS, and its lifecycle management specifically handles automated expiration.

> [!question]
> Your firm has uploaded a large amount of aerial image data to S3. In the past, in your on-premises environment, you used a dedicated group of servers to process this data and used Rabbit MQ, an open source messaging system, to get job information to the servers. Once processed the data would go to tape and be shipped offsite. Your manager told you to stay with the current design, and leverage AWS archival storage and messaging services to minimize cost. Which is correct?
> 1. Use SQS for passing job messages, use Cloud Watch alarms to terminate EC2 worker instances when they become idle. Once data is processed, change the storage class of the S3 objects to Reduced Redundancy Storage.
> 2. Setup Auto-Scaled workers triggered by queue depth that use spot instances to process messages in SQS. Once data is processed, change the storage class of the S3 objects to Reduced Redundancy Storage.
> 3. Setup Auto-Scaled workers triggered by queue depth that use spot instances to process messages in SQS. Once data is processed, change the storage class of the S3 objects to Glacier.
> 4. Use SNS to pass job messages use Cloud Watch alarms to terminate spot worker instances when they become idle. Once data is processed, change the storage class of the S3 object to Glacier.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** This solution replaces on-premises components with AWS equivalents:
> > - **RabbitMQ** is replaced by [[SQS Overview|Amazon SQS]].
> > - **Processing Servers** are replaced by [[EC2 Overview|Amazon EC2]] workers using [[EC2 Purchase Options|Spot Instances]] and [[Auto Scaling Overview|Auto Scaling]] triggered by queue depth for maximum cost efficiency.
> > - **Tape Archival** is replaced by [[S3 Storage Classes|Glacier]] via [[S3 Lifecycle Management|Lifecycle Transitions]].

> [!question]
> You have a proprietary data store on-premises that must be backed up daily by dumping the data store contents to a single compressed 50GB file and sending the file to AWS. Your SLAs state that any dump file backed up within the past 7 days can be retrieved within 2 hours. Your compliance department has stated that all data must be held indefinitely. The time required to restore the data store from a backup is approximately 1 hour. Your on-premise network connection is capable of sustaining 1gbps to AWS. Which backup methods to AWS would be most cost-effective while still meeting all of your requirements?
> 1. Send the daily backup files to Glacier immediately after being generated.
> 2. Transfer the daily backup files to an EBS volume in AWS and take daily snapshots of the volume.
> 3. Transfer the daily backup files to S3 and use appropriate bucket lifecycle policies to send to Glacier.
> 4. Host the backup files on a Storage Gateway with Gateway-Cached Volumes and take daily snapshots.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** This approach meets all requirements:
> > - **SLA (2-hour retrieval)**: Storing in [[S3 Overview|Amazon S3]] for the first 7 days provides immediate retrieval. [[S3 Storage Classes|Glacier]] standard retrieval takes 3-5 hours, which would fail the SLA if data was sent there immediately (Option 1).
> > - **Indefinite Hold**: [[S3 Lifecycle Management|Lifecycle Policies]] can transition data to Glacier after 7 days for low-cost, long-term archival.
> > - **Cost-Effectiveness**: S3 and Glacier are significantly cheaper than maintaining large [[EBS Overview|Amazon EBS]] volumes or [[Storage Gateway|AWS Storage Gateway]] for archival purposes.
