---
tags: [aws, sap-c02, storage-gateway, practice-questions]
---
# Storage Gateway Practice Questions

> [!question]
> Which of the following services natively encrypts data at rest within an AWS region? (Choose 2)
> 1. AWS Storage Gateway
> 2. Amazon DynamoDB
> 3. Amazon CloudFront
> 4. Amazon Glacier
> 5. Amazon Simple Queue Service
> 
> > [!success]- Answer & Rationale
> > **Answer: 1, 4**
> > **Rationale**: [[Storage Gateway|AWS Storage Gateway]] natively encrypts data at rest when stored in [[S3 Overview|Amazon S3]] or [[S3 Storage Classes|Amazon S3 Glacier]] using AES-256. [[S3 Storage Classes|Amazon S3 Glacier]] automatically encrypts data at rest using AES-256. Note: While [[DynamoDB Overview|Amazon DynamoDB]] and [[SQS Overview|Amazon SQS]] now support encryption at rest, historically in the context of these specific practice sets, Storage Gateway and Glacier are highlighted for their native encryption behaviors. [[CloudFront Overview|Amazon CloudFront]] is a CDN and primarily handles data in transit.

> [!question]
> What does the AWS Storage Gateway provide?
> 1. It allows to integrate on-premises IT environments with Cloud Storage.
> 2. A direct encrypted connection to Amazon S3.
> 3. It’s a backup solution that provides an on-premises Cloud storage.
> 4. It provides an encrypted SSL endpoint for backups in the Cloud.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale**: [[Storage Gateway|AWS Storage Gateway]] is a hybrid cloud storage service that connects on-premises software appliances with cloud-based storage to provide seamless integration with data security features between on-premises and the AWS storage infrastructure. It gives on-premises access to virtually unlimited cloud storage.

> [!question]
> You’re running an application on-premises due to its dependency on non-x86 hardware and want to use AWS for data backup. Your backup application is only able to write to POSIX-compatible block-based storage. You have 140TB of data and would like to mount it as a single folder on your file server. Users must be able to access portions of this data while the backups are taking place. What backup solution would be most appropriate for this use case?
> 1. Use AWS Storage Gateway and configure it to use Gateway Cached volumes.
> 2. Configure your backup software to use Amazon S3 as the target for your data backups.
> 3. Configure your backup software to use Amazon S3 Glacier as the target for your data backups.
> 4. Use AWS Storage Gateway and configure it to use Gateway Stored volumes.
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale**: [[Storage Gateway#Volume Gateway|Gateway-Stored Volumes]] maintain the entire data set locally to provide low-latency access to the data while asynchronously backing up point-in-time snapshots (as [[EBS Overview|Amazon EBS]] snapshots) to [[S3 Overview|Amazon S3]]. Since the requirement is for a backup solution where the primary data is hosted on-premises and accessible during backup, and the application requires block-based storage, Stored Volumes are the best fit. Cached volumes (Choice 1) would move the primary data to [[S3 Overview|Amazon S3]], which might not be ideal if the primary requirement is local performance for the full dataset.

> [!question]
> A customer has a single 3-TB volume on-premises that is used to hold a large repository of images and print layout files. This repository is growing at 500 GB a year and must be presented as a single logical volume. The customer is becoming increasingly constrained with their local storage capacity and wants an off-site backup of this data, while maintaining low-latency access to their frequently accessed data. Which AWS Storage Gateway configuration meets the customer requirements?
> 1. Gateway-Cached volumes with snapshots scheduled to Amazon S3
> 2. Gateway-Stored volumes with snapshots scheduled to Amazon S3
> 3. Gateway-Virtual Tape Library with snapshots to Amazon S3
> 4. Gateway-Virtual Tape Library with snapshots to Amazon S3 Glacier
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale**: [[Storage Gateway#Volume Gateway|Gateway-Cached Volumes]] store data in [[S3 Overview|Amazon S3]], which acts as the primary storage, while retaining a copy of recently read data locally in a cache for low-latency access. This addresses the customer's local storage capacity constraint (since the bulk of the data is in [[S3 Overview|Amazon S3]]) while still providing performance for frequently accessed files.

> [!question]
> You have a proprietary data store on-premises that must be backed up daily by dumping the data store contents to a single compressed 50GB file and sending the file to AWS. Your SLAs state that any dump file backed up within the past 7 days can be retrieved within 2 hours. Your compliance department has stated that all data must be held indefinitely. The time required to restore the data store from a backup is approximately 1 hour. Your on-premise network connection is capable of sustaining 1gbps to AWS. Which backup methods to AWS would be most cost-effective while still meeting all of your requirements?
> 1. Send the daily backup files to Amazon S3 Glacier immediately after being generated.
> 2. Transfer the daily backup files to an Amazon EBS volume in AWS and take daily snapshots of the volume.
> 3. Transfer the daily backup files to Amazon S3 and use appropriate bucket lifecycle policies to send to Amazon S3 Glacier.
> 4. Host the backup files on a Storage Gateway with Gateway-Cached Volumes and take daily snapshots.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale**: Choice 3 is the most cost-effective. Storing files in [[S3 Overview|Amazon S3]] for the first 7 days ensures they can be retrieved within the 2-hour RTO ([[S3 Storage Classes|Amazon S3 Glacier]] Standard retrieval takes 3-5 hours). After 7 days, lifecycle policies can move them to [[S3 Storage Classes|Amazon S3 Glacier]] for indefinite storage at a much lower cost. Choice 1 fails the RTO because [[S3 Storage Classes|Amazon S3 Glacier]] retrieval is too slow. Choice 2 and 4 are less cost-effective due to the higher costs of [[EBS Overview|Amazon EBS]] and active [[Storage Gateway]] storage/local disks compared to [[S3 Overview|Amazon S3]]/[[S3 Storage Classes|Amazon S3 Glacier]].

> [!question]
> A customer implemented AWS Storage Gateway with a gateway-cached volume at their main office. An event takes the link between the main and branch office offline. Which methods will enable the branch office to access their data? (Choose 3)
> 1. Use a HTTPS GET to the Amazon S3 bucket where the files are located.
> 2. Restore by implementing a lifecycle policy on the Amazon S3 bucket.
> 3. Make an Amazon S3 Glacier Restore API call to load the files into another Amazon S3 bucket within four to six hours.
> 4. Launch a new AWS Storage Gateway instance AMI in EC2, and restore from a gateway snapshot.
> 5. Create an Amazon EBS volume from a gateway snapshot, and mount it to an EC2 instance.
> 6. Launch an AWS Storage Gateway virtual iSCSI device at the branch office, and restore from a gateway snapshot.
> 
> > [!success]- Answer & Rationale
> > **Answer: 4, 5, 6**
> > **Rationale**: [[Storage Gateway#Volume Gateway|Gateway volume]] data is stored in [[S3 Overview|Amazon S3]] but is managed by the service and cannot be accessed directly via [[S3 Overview|Amazon S3]] APIs (disproving 1, 2, 3). To access the data if the original gateway is lost: 1. **4**: You can launch a new gateway on [[EC2 Overview|Amazon EC2]] and restore the volume from a snapshot. 2. **5**: Since volume snapshots are stored as [[EBS Overview|Amazon EBS]] snapshots, you can create an [[EBS Overview|Amazon EBS]] volume from them and mount it to an [[EC2 Overview|Amazon EC2]] instance. 3. **6**: You can deploy a new gateway appliance (VM) at the branch office and restore from the snapshot.

> [!question]
> A company uses on-premises servers to host its applications. The company is running out of storage capacity. The applications use both block storage and NFS storage. The company needs a high-performing solution that supports local caching without rearchitecting its existing applications. Which combination of actions should a solutions architect take to meet these requirements? (Choose two.)
> 1. Mount Amazon S3 as a file system to the on-premises servers.
> 2. Deploy an AWS Storage Gateway file gateway to replace NFS storage.
> 3. Deploy AWS Snowball Edge to provision NFS mounts to on-premises servers.
> 4. Deploy an AWS Storage Gateway volume gateway to replace the block storage.
> 5. Deploy EFS volumes and mount them to on-premises servers.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2, 4**
> > **Rationale**: **Choice 2**: [[Storage Gateway#1. S3 File Gateway|S3 File Gateway]] provides an NFS/SMB interface with local caching, perfectly replacing traditional NFS storage while backing data to [[S3 Overview|Amazon S3]]. **Choice 4**: [[Storage Gateway#2. Volume Gateway|Volume Gateway]] provides iSCSI block storage with local caching (Cached Volumes), replacing on-premises block storage. Choice 1 ([[S3 Overview|Amazon S3]] mounting) and 5 ([[EFS|Amazon EFS]] over Direct Connect/VPN) typically lack the high-performance local caching provided by [[Storage Gateway|AWS Storage Gateway]]. Choice 3 is for migration/data transfer, not a permanent storage replacement.
