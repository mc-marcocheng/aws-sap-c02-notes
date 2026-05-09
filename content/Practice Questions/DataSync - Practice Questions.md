---
tags: [aws, sap-c02, datasync, practice-questions]
---
# DataSync Practice Questions

> [!question]
> A company is migrating 50 TB of data from an on-premises NFS share to Amazon EFS. They have a 1 Gbps AWS Direct Connect connection. The migration must happen without traversing the public internet, and incremental updates must run nightly after the initial copy. Which solution meets these requirements?
> 1. Deploy an AWS Storage Gateway File Gateway, mount it on-premises, and copy the files.
> 2. Deploy an AWS DataSync agent on-premises. Configure a VPC Endpoint for DataSync. Create a task to copy from NFS to EFS and schedule it to run nightly.
> 3. Use an AWS Snowball Edge device for the initial copy, then use a custom script with `rsync` over Direct Connect for nightly updates.
> 4. Use AWS Transfer Family to transfer files via SFTP to EFS.
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[DataSync]] is perfect for initial online migrations and scheduled incremental updates. Using a VPC Endpoint ensures traffic flows privately over the Direct Connect connection without hitting the public internet.

> [!question]
> A media company needs to transfer petabytes of video files from Amazon S3 in `us-east-1` to Amazon FSx for Lustre in `eu-west-1` for processing. The transfer must be fast, automated, and include checksum validation. What is the optimal solution?
> 1. Create a Lambda function that triggers on S3 ObjectCreate to copy files to FSx.
> 2. Use S3 Cross-Region Replication to replicate to a destination bucket, then link it to FSx for Lustre.
> 3. Use AWS DataSync to configure a transfer task from the S3 bucket to the FSx for Lustre file system.
> 4. Mount S3 as a file system on EC2 instances using S3 File Gateway and copy files to FSx using `rsync`.
>
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** [[DataSync]] natively supports AWS-to-AWS transfers (including cross-region) between S3 and FSx. It handles automation, high speed, and built-in data validation without requiring on-premises agents.

> [!question]
> An organization is using AWS DataSync to migrate data from an on-premises SMB server to Amazon S3. The transfer is consuming the entire internet bandwidth during the day, impacting user connectivity. How can this be resolved?
> 1. Deploy multiple DataSync agents and load balance them.
> 2. Compress the data on the SMB server before migration.
> 3. Configure a bandwidth limit within the DataSync task settings.
> 4. Pause the DataSync task during the day and resume it at night.
>
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** [[DataSync]] tasks have built-in bandwidth throttling capabilities to limit the network impact during business hours.