---
tags: [aws, sap-c02, ebs, storage, practice-questions]
---
# EBS Snapshots Practice Questions

> [!question]
> An existing application stores sensitive information on a non-boot Amazon EBS data volume attached to an Amazon Elastic Compute Cloud instance. Which of the following approaches would protect the sensitive data on an Amazon EBS volume?
> 1. Upload your customer keys to AWS CloudHSM. Associate the Amazon EBS volume with AWS CloudHSM. Remount the Amazon EBS volume.
> 2. Create and mount a new, encrypted Amazon EBS volume. Move the data to the new volume. Delete the old Amazon EBS volume.
> 3. Unmount the EBS volume. Toggle the encryption attribute to True. Re-mount the Amazon EBS volume.
> 4. Snapshot the current Amazon EBS volume. Restore the snapshot to a new, encrypted Amazon EBS volume. Mount the Amazon EBS volume.
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > To encrypt an existing unencrypted [[EBS Overview|EBS]] volume, you must take a [[EBS Snapshots|snapshot]], then either copy it to an encrypted version or create an encrypted volume directly from the snapshot. Encryption cannot be "toggled" on an existing volume.

> [!question]
> Is it possible to access your EBS snapshots?
> 1. Yes, through the Amazon S3 APIs.
> 2. Yes, through the Amazon EC2 APIs.
> 3. No, EBS snapshots cannot be accessed; they can only be used to create a new EBS volume.
> 4. EBS doesn't provide snapshots.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > Although [[EBS Snapshots]] are stored in [[S3 Overview|Amazon S3]] for durability, they are managed and accessed exclusively through the [[EC2 Overview|Amazon EC2]]/EBS APIs. You cannot view them as objects in an S3 bucket.

> [!question]
> Which of the following approaches provides the lowest cost for Amazon Elastic Block Store snapshots while giving you the ability to fully restore data?
> 1. Maintain two snapshots: the original snapshot and the latest incremental snapshot.
> 2. Maintain a volume snapshot; subsequent snapshots will overwrite one another.
> 3. Maintain a single snapshot: the latest snapshot is both Incremental and complete.
> 4. Maintain the most current snapshot, archive the original and incremental to Amazon Glacier.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > [[EBS Snapshots]] are incremental. When you delete an older snapshot, only the data unique to that snapshot is removed. The latest snapshot always contains all the blocks needed to restore the entire volume, making it both incremental and effectively "complete."

> [!question]
> Which procedure for backing up a relational database on EC2 that is using a set of RAIDed EBS volumes for storage minimizes the time during which the database cannot be written to and results in a consistent backup?
> 1. Detach EBS volumes, 2. Start EBS snapshot of volumes, 3. Re-attach EBS volumes.
> 2. Stop the EC2 Instance. 2. Snapshot the EBS volumes.
> 3. Suspend disk I/O, 2. Create an image of the EC2 Instance, 3. Resume disk I/O.
> 4. Suspend disk I/O, 2. Start EBS snapshot of volumes, 3. Resume disk I/O.
> 5. Suspend disk I/O, 2. Start EBS snapshot of volumes, 3. Wait for snapshots to complete, 4. Resume disk I/O.
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > For RAIDed volumes, you should pause I/O (freeze), initiate the [[EBS Snapshots|snapshot]], and then resume I/O immediately. Because snapshots are point-in-time and asynchronous, you do not need to wait for the data transfer to [[S3 Overview|Amazon S3]] to complete before resuming database operations.

> [!question]
> How can an EBS volume that is currently attached to an EC2 instance be migrated from one Availability Zone to another?
> 1. Detach the volume and attach it to another EC2 instance in the other AZ.
> 2. Simply create a new volume in the other AZ and specify the original volume as the source.
> 3. Create a snapshot of the volume, and create a new volume from the snapshot in the other AZ.
> 4. Detach the volume, then use the ec2-migrate-volume command to move it to another AZ.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > [[EBS Overview|EBS]] volumes are locked to a specific [[VPC Overview|Availability Zone]]. To migrate a volume, you must create a [[EBS Snapshots|snapshot]] and then restore that snapshot into a new volume in the target AZ.

> [!question]
> How are the EBS snapshots saved on Amazon S3?
> 1. Exponentially.
> 2. Incrementally.
> 3. EBS snapshots are not stored in the Amazon S3.
> 4. Decrementally.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > All [[EBS Snapshots]] are incremental, meaning only the blocks that have changed since the previous snapshot are saved to [[S3 Overview|Amazon S3]].

> [!question]
> EBS Snapshots occur _____
> 1. Asynchronously.
> 2. Synchronously.
> 3. Weekly.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > The snapshot process is asynchronous. The point-in-time state is captured immediately, and the data blocks are uploaded to [[S3 Overview|Amazon S3]] in the background while the volume remains available for use.

> [!question]
> What will be the status of the snapshot until the snapshot is complete?
> 1. Running.
> 2. Working.
> 3. Progressing.
> 4. Pending.
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > A snapshot remains in the `pending` state while the data is being transferred to [[S3 Overview|Amazon S3]].

> [!question]
> Before I delete an EBS volume, what can I do if I want to recreate the volume later?
> 1. Create a copy of the EBS volume (not a snapshot).
> 2. Create and Store a snapshot of the volume.
> 3. Download the content to an EC2 instance.
> 4. Back up the data in to a physical disk.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > Creating a [[EBS Snapshots|snapshot]] is the standard AWS mechanism for long-term backup and point-in-time recovery of [[EBS Overview|EBS]] volumes.

> [!question]
> Which of the following are true regarding encrypted Amazon Elastic Block Store (EBS) volumes? (Choose 2 answers)
> 1. Supported on all Amazon EBS volume types.
> 2. Snapshots are automatically encrypted.
> 3. Available to all instance types.
> 4. Existing volumes can be encrypted.
> 5. Shared volumes can be encrypted.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1 & 2**
> > Encryption is supported for all [[EBS Overview|EBS]] volume types. When a volume is encrypted, any [[EBS Snapshots|snapshots]] taken from it are automatically encrypted using the same [[KMS|KMS]] key.

> [!question]
> Amazon EBS snapshots have which of the following two characteristics? (Choose 2.)
> 1. EBS snapshots only save incremental changes from snapshot to snapshot.
> 2. EBS snapshots can be created in real-time without stopping an EC2 instance.
> 3. EBS snapshots can only be restored to an EBS volume of the same size or smaller.
> 4. EBS snapshots can only be restored and mounted to an instance in the same Availability Zone as the original EBS volume.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1 & 2**
> > [[EBS Snapshots]] are incremental and can be taken while the volume is active (though freezing I/O is best practice for consistency). They can be restored to volumes of the same or larger size, and can be used to create volumes in any [[VPC Overview|AZ]] within the region.

> [!question]
> A user is planning to schedule a backup for an EBS volume. The user wants security of the snapshot data. How can the user achieve data encryption with a snapshot?
> 1. Use encrypted EBS volumes so that the snapshot will be encrypted by AWS.
> 2. While creating a snapshot select the snapshot with encryption.
> 3. By default the snapshot is encrypted by AWS.
> 4. Enable server side encryption for the snapshot using S3.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > If the source [[EBS Overview|EBS]] volume is encrypted, the [[EBS Snapshots|snapshot]] is automatically encrypted by AWS. For unencrypted volumes, you can encrypt the data during the snapshot copy process.

> [!question]
> A sys admin is trying to understand EBS snapshots. Which of the below mentioned statements will not be useful to the admin to understand the concepts about a snapshot?
> 1. Snapshot is synchronous.
> 2. It is recommended to stop the instance before taking a snapshot for consistent data.
> 3. Snapshot is incremental.
> 4. Snapshot captures the data that has been written to the hard disk when the snapshot command was executed.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > Snapshots are asynchronous, not synchronous. The point-in-time is captured immediately, but the transfer happens in the background.

> [!question]
> When creation of an EBS snapshot is initiated but not completed, the EBS volume:
> 1. Cannot be detached or attached to an EC2 instance until the snapshot completes.
> 2. Can be used in read-only mode while the snapshot is in progress.
> 3. Can be used while the snapshot is in progress.
> 4. Cannot be used until the snapshot completes.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > Because [[EBS Snapshots]] are asynchronous, the volume can be used normally (read/write) while the snapshot data is being uploaded to [[S3 Overview|Amazon S3]].

> [!question]
> You have a server with a 500GB Amazon EBS data volume. The volume is 80% full. You need to back up the volume at regular intervals and be able to re-create the volume in a new Availability Zone in the shortest time possible. All applications using the volume can be paused for a period of a few minutes with no discernible user impact. Which of the following backup methods will best fulfill your requirements?
> 1. Take periodic snapshots of the EBS volume.
> 2. Use a third-party incremental backup application to back up to Amazon Glacier.
> 3. Periodically back up all data to a single compressed archive and archive to Amazon S3 using a parallelized multi-part upload.
> 4. Create another EBS volume in the second Availability Zone attach it to the Amazon EC2 instance, and use a disk manager to mirror the two disks.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > Periodic [[EBS Snapshots]] are the most efficient way to backup [[EBS Overview|EBS]] volumes and allow for rapid restoration into any [[VPC Overview|AZ]] within the same region.

> [!question]
> A user is creating a snapshot of an EBS volume. Which of the below statements is incorrect in relation to the creation of an EBS snapshot?
> 1. Its incremental.
> 2. It can be used to launch a new instance.
> 3. It is stored in the same AZ as the volume.
> 4. It is a point in time backup of the EBS volume.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > [[EBS Snapshots]] are stored in [[S3 Overview|Amazon S3]], which is a regional service. Snapshots are not restricted to a single [[VPC Overview|AZ]], unlike the volumes themselves.

> [!question]
> A user has created a snapshot of an EBS volume. Which of the below mentioned usage cases is not possible with respect to a snapshot?
> 1. Mirroring the volume from one AZ to another AZ.
> 2. Launch an instance.
> 3. Decrease the volume size.
> 4. Increase the size of the volume.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > When creating a volume from a [[EBS Snapshots|snapshot]], you can maintain the same size or increase it, but you cannot decrease the volume size.

> [!question]
> What is true of the way that encryption works with EBS?
> 1. Snapshotting an encrypted volume makes an encrypted snapshot; restoring an encrypted snapshot creates an encrypted volume when specified / requested.
> 2. Snapshotting an encrypted volume makes an encrypted snapshot when specified / requested; restoring an encrypted snapshot creates an encrypted volume when specified / requested.
> 3. Snapshotting an encrypted volume makes an encrypted snapshot; restoring an encrypted snapshot always creates an encrypted volume.
> 4. Snapshotting an encrypted volume makes an encrypted snapshot when specified / requested; restoring an encrypted snapshot always creates an encrypted volume.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > Encryption is "sticky." A snapshot of an encrypted volume is always encrypted, and a volume restored from an encrypted snapshot is always encrypted.

> [!question]
> Why are more frequent snapshots of EBS Volumes faster?
> 1. Blocks in EBS Volumes are allocated lazily, since while logically separated from other EBS Volumes, Volumes often share the same physical hardware. Snapshotting the first time forces full block range allocation, so the second snapshot doesn’t need to perform the allocation phase and is faster.
> 2. The snapshots are incremental so that only the blocks on the device that have changed after your last snapshot are saved in the new snapshot.
> 3. AWS provisions more disk throughput for burst capacity during snapshots if the drive has been pre-warmed by snapshotting and reading all blocks.
> 4. The drive is pre-warmed, so block access is more rapid for volumes when every block on the device has already been read at least one time.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > Because [[EBS Snapshots]] are incremental, taking them more frequently means fewer blocks have changed between snapshots, resulting in less data being transferred to [[S3 Overview|Amazon S3]].

> [!question]
> Which is not a restriction on AWS EBS Snapshots?
> 1. Snapshots which are shared cannot be used as a basis for other snapshots.
> 2. You cannot share a snapshot containing an AWS Access Key ID or AWS Secret Access Key.
> 3. You cannot share encrypted snapshots.
> 4. Snapshot restorations are restricted to the region in which the snapshots are created.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > Shared [[EBS Snapshots]] can absolutely be used as a basis for new volumes and even new snapshots by the recipient. Note that C is also partially outdated as encrypted snapshots *can* be shared if the [[KMS|KMS]] key is also shared.

> [!question]
> There is a very serious outage at AWS. EC2 is not affected, but your EC2 instance deployment scripts stopped working in the region with the outage. What might be the issue?
> 1. The AWS Console is down, so your CLI commands do not work.
> 2. S3 is unavailable, so you can’t create EBS volumes from a snapshot you use to deploy new volumes.
> 3. AWS turns off the `DeployCode` API call when there are major outages, to protect from system floods.
> 4. None of the other answers make sense.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > [[EBS Snapshots]] are stored in [[S3 Overview|Amazon S3]]. If S3 is experiencing an outage in the region, you will be unable to create or restore volumes from those snapshots.
