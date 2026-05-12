---
tags: [aws, sap-c02, ebs, storage, practice-questions]
---
# EBS Practice Questions

> [!question]
> A company is migrating a latency-sensitive Oracle database from on-premises to AWS. The database requires 64,000 IOPS with sub-millisecond latency and 1,000 MB/s throughput. The database volume is 2 TB. The company also needs consistent snapshot performance without impacting production I/O. Which EBS configuration meets these requirements?
> 1. A single io2 Block Express volume with 64,000 provisioned IOPS attached to an R6i.metal instance.
> 2. Multiple gp3 volumes in a RAID 0 configuration to aggregate IOPS, attached to an R5.4xlarge instance.
> 3. A single io1 volume with 64,000 provisioned IOPS attached to an EBS-optimized R5.8xlarge instance.
> 4. A single gp3 volume with 16,000 IOPS and 1,000 MB/s throughput attached to an R6i.2xlarge instance.
>
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** [[EBS Overview|io2 Block Express]] volumes support up to 256,000 IOPS and 4,000 MB/s throughput per volume with sub-millisecond latency, making them ideal for latency-sensitive databases. Option 2 adds operational complexity with RAID and gp3 max IOPS is 16,000 per volume. Option 3's io1 volumes max at 64,000 IOPS but have higher latency than Block Express. Option 4's single gp3 cannot exceed 16,000 IOPS.

> [!question]
> Which Amazon storage is the best for database-style applications that frequently encounter many random reads and writes across the dataset?
> 1. None of these
> 2. Amazon Instance Storage
> 3. Any of these
> 4. Amazon EBS
>
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale:** [[EBS Overview|Amazon EBS]] (specifically SSD-backed volumes like `gp3` or `io2`) is optimized for random I/O workloads, which are common in databases. While [[EC2 Instance Types|Instance Store]] offers high performance, it lacks the persistence required for most database applications.

> [!question]
> A user has created numerous EBS volumes. What is the general limit for each AWS account for the maximum number of EBS volumes that can be created?
> 1. 10000
> 2. 5000
> 3. 100
> 4. 1000
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** By default, there is a soft limit of 5,000 [[EBS Overview|Amazon EBS]] volumes per region. This limit can be increased by contacting AWS support.

> [!question]
> Select the correct set of steps for exposing a snapshot only to specific AWS accounts.
> 1. Select Public for all the accounts and check mark those accounts.
> 2. Select Private and enter the IDs of those AWS accounts, and click Save.
> 3. Select Public, enter the IDs of those AWS accounts, and click Save.
> 4. Select Public, mark the IDs of those AWS accounts as private, and click Save.
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** To share an [[EBS Snapshots|EBS Snapshot]] securely, it should be kept **Private**, and specific AWS Account IDs must be explicitly authorized to access it.

> [!question]
> If an Amazon EBS volume is the root device of an instance, can I detach it without stopping the instance?
> 1. Yes but only if Windows instance
> 2. No
> 3. Yes
> 4. Yes but only if a Linux instance
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** The **root volume** of an [[EC2 Overview|EC2]] instance cannot be detached while the instance is running. You must stop the instance first.

> [!question]
> Can we attach an EBS volume to more than one EC2 instance at the same time?
> 1. Yes
> 2. No
> 3. Only EC2-optimized EBS volumes.
> 4. Only in read mode.
>
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** With **EBS Multi-Attach**, you can attach a single `io1` or `io2` volume to multiple Nitro-based [[EC2 Overview|EC2]] instances within the same Availability Zone.

> [!question]
> Do Amazon EBS volumes persist independently from the running life of an Amazon EC2 instance?
> 1. Only if instructed to when created
> 2. Yes
> 3. No
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[EBS Overview|Amazon EBS]] volumes are independent of the [[EC2 Overview|EC2]] instance lifecycle. They can be detached and moved between instances, though the `DeleteOnTermination` flag determines if the volume is deleted when its instance is terminated.

> [!question]
> Can I delete a snapshot of the root device of an EBS volume used by a registered AMI?
> 1. Only via API
> 2. Only via Console
> 3. Yes
> 4. No
>
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale:** You cannot delete an [[EBS Snapshots|EBS Snapshot]] that is currently associated with a registered [[EC2 Overview|AMI]]. You must deregister the AMI first.

> [!question]
> By default, EBS volumes that are created and attached to an instance at launch are deleted when that instance is terminated. You can modify this behavior by changing the value of which flag to false?
> 1. DeleteOnTermination
> 2. RemoveOnDeletion
> 3. RemoveOnTermination
> 4. TerminateOnDeletion
>
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** The `DeleteOnTermination` attribute controls the lifecycle of an [[EBS Overview|Amazon EBS]] volume relative to its [[EC2 Overview|EC2]] instance.

> [!question]
> Your company policies require encryption of sensitive data at rest. Which options would allow you to encrypt your data at rest on an EBS volume? (Choose 3)
> 1. Implement third party volume encryption tools
> 2. Do nothing as EBS volumes are encrypted by default
> 3. Encrypt data inside your applications before storing it on EBS
> 4. Encrypt data using native data encryption drivers at the file system level
> 5. Implement SSL/TLS for all services running on the server
>
> > [!success]- Answer & Rationale
> > **Answer: 1, 3, 4**
> > **Rationale:** Data at rest on [[EBS Overview|Amazon EBS]] can be secured using application-level encryption, OS-level encryption (file system drivers), or third-party tools. Native [[EBS Overview|EBS Encryption]] (using [[KMS]]) is also a primary method, though it is not "on by default" for all accounts without configuration.

> [!question]
> Which of the following are true regarding encrypted Amazon EBS volumes? (Choose 2)
> 1. Supported on all Amazon EBS volume types
> 2. Snapshots are automatically encrypted
> 3. Available to all instance types
> 4. Existing volumes can be encrypted
> 5. Shared volumes can be encrypted
>
> > [!success]- Answer & Rationale
> > **Answer: 1, 2**
> > **Rationale:** [[EBS Overview|EBS Encryption]] is available for all volume types (`gp2/3`, `io1/2`, `st1`, `sc1`). When an EBS volume is encrypted, any [[EBS Snapshots|EBS Snapshot]] taken from it is also automatically encrypted.

> [!question]
> How can you secure data at rest on an EBS volume?
> 1. Encrypt the volume using the S3 server-side encryption service
> 2. Attach the volume to an instance using EC2’s SSL interface.
> 3. Create an IAM policy that restricts read and write access to the volume.
> 4. Write the data randomly instead of sequentially.
> 5. Use an encrypted file system on top of the EBS volume
>
> > [!success]- Answer & Rationale
> > **Answer: 5**
> > **Rationale:** Using an encrypted file system or native [[EBS Overview|EBS Encryption]] (which uses [[KMS]]) ensures that data is encrypted at rest on the block device.

> [!question]
> A user requires dedicated EC2 to EBS traffic for better application performance. How can the user achieve this?
> 1. Launch the EC2 instance as EBS dedicated with PIOPS EBS
> 2. Launch the EC2 instance as EBS enhanced with PIOPS EBS
> 3. Launch the EC2 instance as EBS dedicated with PIOPS EBS
> 4. Launch the EC2 instance as EBS optimized with PIOPS EBS
>
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale:** **EBS-optimized** instances provide dedicated bandwidth to [[EBS Overview|Amazon EBS]], ensuring that I/O traffic does not contend with other network traffic from the [[EC2 Overview|EC2]] instance.

> [!question]
> A user is launching an EBS-backed EC2 instance under the free usage tier and wants to encrypt the volume. How can the user encrypt the data at rest?
> 1. Use AWS EBS encryption to encrypt the data at rest
> 2. User cannot use EBS encryption and has to encrypt the data manually
> 3. The user has to select the encryption enabled flag while launching
> 4. Encryption of volume is not available as a part of the free usage tier
>
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** [[EBS Overview|EBS Encryption]] is a native feature available to all users, including those on the free tier. It utilizes [[KMS]] and does not require manual OS-level encryption.

> [!question]
> A user wants to ensure snapshots are encrypted. How can the user achieve data encryption with a snapshot?
> 1. Use encrypted EBS volumes so that the snapshot will be encrypted by AWS
> 2. While creating a snapshot select the snapshot with encryption
> 3. By default the snapshot is encrypted by AWS
> 4. Enable server side encryption for the snapshot using S3
>
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** Encryption for an [[EBS Snapshots|EBS Snapshot]] is inherited from the source [[EBS Overview|Amazon EBS]] volume. If the volume is encrypted, the snapshot is automatically encrypted.

> [!question]
> A user rebooted an EBS-backed EC2 instance. Which statement is NOT true regarding the reboot action?
> 1. The private and public address remains the same
> 2. The Elastic IP remains associated with the instance
> 3. The volume is preserved
> 4. The instance runs on a new host computer
>
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale:** A **reboot** keeps the instance on the same physical host. Only a **Stop/Start** cycle typically moves an instance to a new physical host.

> [!question]
> What is the difference between performing a restart (reboot) and a stop/start on an EBS-backed instance regarding billing (legacy model)?
> 1. For restart it does not charge for an extra hour, while every stop/start it will be charged as a separate hour
> 2. Every restart is charged as a separate hour
> 3. For every restart or start/stop it will be charged as a separate hour
> 4. For restart it charges extra only once
>
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** In the traditional hourly billing model, a reboot did not trigger a new billing hour, whereas stopping and starting the instance did. Note: AWS now uses per-second billing for most instances.

> [!question]
> A user started an instance at 9 AM. Between 9 AM and 10 AM, they stopped and restarted it twice and rebooted it once. For how many instance hours will AWS charge?
> 1. 3 hours
> 2. 4 hours
> 3. 2 hours
> 4. 1 hour
>
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** 9 AM start (1 hour), first stop/start (2nd hour), second stop/start (3rd hour). The reboot does not trigger a new billing hour. Total = 3 hours.

> [!question]
> A database on EBS is seeing large variance in response times due to disk wait time. What two ways can improve performance while maintaining persistence? (Choose 2)
> 1. Move to an SSD backed instance
> 2. Move the database to an EBS-Optimized Instance
> 3. Use Provisioned IOPs EBS
> 4. Use the ephemeral storage on an m2.4xLarge Instance Instead
>
> > [!success]- Answer & Rationale
> > **Answer: 2, 3**
> > **Rationale:** Using an **EBS-optimized** instance provides dedicated throughput, and [[EBS Overview|Provisioned IOPS]] (`io1/io2`) provides consistent performance for I/O-intensive database workloads.

> [!question]
> Which AWS functionality helps an organization achieve a secure encrypted database storage option on EBS?
> 1. AWS MFA with EBS
> 2. AWS EBS encryption
> 3. Multi-tier encryption with Redshift
> 4. AWS S3 server-side storage
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[EBS Overview|EBS Encryption]] provides a simple, managed way to encrypt data at rest on [[EBS Overview|Amazon EBS]] volumes using [[KMS]].

> [!question]
> How can a user share data from an encrypted EBS volume with another AWS account?
> 1. Create an AMI from the volume and share the AMI
> 2. Copy the data to an unencrypted volume and then share
> 3. Take a snapshot and share the snapshot with a friend
> 4. If both the accounts are using the same encryption key then share directly
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** You cannot share an [[EBS Snapshots|EBS Snapshot]] encrypted with the default AWS-managed [[KMS]] key. One workaround is to copy the data to an unencrypted volume or use a custom KMS key and share the key itself.

> [!question]
> Which statement is true regarding charges for an EBS-backed instance?
> 1. The user will be charged for volume and instance only when the instance is running
> 2. The user will be charged for the volume even if the instance is stopped
> 3. The user will be charged only for the instance running cost
> 4. The user will not be charged for the volume if the instance is stopped
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** Even when an [[EC2 Overview|EC2]] instance is stopped and compute charges cease, the [[EBS Overview|Amazon EBS]] storage continues to incur costs because the data is being preserved.

> [!question]
> How can a user attach an EBS volume to a running EC2 instance in a VPC?
> 1. The user must create EBS within the same VPC.
> 2. The user can create EBS in the same zone as the instance and attach it.
> 3. It is not possible until the instance is stopped.
> 4. The user can specify the same subnet while creating EBS.
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[EBS Overview|Amazon EBS]] volumes are **Zonal**. To attach a volume to an [[EC2 Overview|EC2]] instance, both must reside in the same **Availability Zone**.

> [!question]
> Which advice should you NOT give to a user for creating an EBS volume?
> 1. Take the snapshot of the volume when the instance is stopped
> 2. Stripe multiple volumes attached to the same instance
> 3. Create an AMI from the attached volume
> 4. Attach multiple volumes to the same instance
>
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** An [[EC2 Overview|AMI]] is created from an [[EC2 Overview|EC2]] instance or an [[EBS Snapshots|EBS Snapshot]], not directly from an "attached volume" as a standalone object.

> [!question]
> How can a user attach an EBS volume already attached to one instance to another running instance in the same AZ?
> 1. Terminate the first instance first
> 2. Attach the volume as read only to the second instance
> 3. Detach the volume first and attach to new instance
> 4. No need to detach. Just select the volume and attach it.
>
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** Standard [[EBS Overview|Amazon EBS]] volumes can only be attached to one instance at a time. To move a volume, it must first be detached from the current instance.

> [!question]
> What is the scope of an EBS volume?
> 1. VPC
> 2. Region
> 3. Placement Group
> 4. Availability Zone
>
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale:** [[EBS Overview|Amazon EBS]] volumes are tied to a specific **Availability Zone**. To move data across zones, you must create an [[EBS Snapshots|EBS Snapshot]] and restore it in the target zone.
