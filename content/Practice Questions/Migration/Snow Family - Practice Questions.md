---
tags: [aws, sap-c02, snow-family, migration, practice-questions]
---
# Snow Family Practice Questions

> [!question]
> A company wants to transfer petabyte-scale of data to AWS for their analytics, however are constrained on their internet connectivity? Which AWS service can help them transfer the data quickly?
> 1. S3 enhanced uploader
> 2. Snowmobile
> 3. Snowball
> 4. Direct Connect
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** [[Snow Family|Snowball]] (specifically Snowball Edge) is designed for large-scale data migrations at the petabyte-scale. It provides a physical device that is shipped to AWS, bypassing internet bandwidth limitations entirely. [[Snow Family|Snowmobile]] is designed for exabyte-scale and is overkill for petabyte-scale. [[Direct Connect Overview|Direct Connect]] provides a dedicated connection but is often slower for one-time massive transfers if connectivity is already a constraint.

> [!question]
> A company wants to transfer its video library data, which runs in exabytes, to AWS. Which AWS service can help the company transfer the data?
> 1. Snowmobile
> 2. Snowball
> 3. S3 upload
> 4. S3 enhanced uploader
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** [[Snow Family|Snowmobile]] is the only member of the [[Snow Family]] capable of handling exabyte-scale data migrations. A single Snowmobile can carry up to 100 PB. [[Snow Family|Snowball]] Edge units max out at ~100 TB usable capacity, making them impractical for exabyte-scale transfers. Standard S3 upload methods are constrained by internet bandwidth and are not feasible for exabyte-level data volumes.

> [!question]
> A research facility in a remote location with no internet connectivity needs to collect IoT sensor data from 200 devices, perform local ML inference on the data, and periodically ship results to AWS. The facility has limited IT staff and cannot maintain complex infrastructure. Which Snow Family device is MOST appropriate?
> 
> 1. AWS Snowcone with AWS IoT Greengrass
> 2. AWS Snowball Edge Storage Optimized
> 3. AWS Snowball Edge Compute Optimized with GPU
> 4. AWS Snowmobile
>
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** [[Snow Family|Snowball Edge Compute Optimized]] with GPU is designed for edge computing use cases that require ML inference capabilities in disconnected environments. It can run EC2 instances and Lambda functions locally. Snowcone (Option 1) has limited compute and storage (14 TB) for 200 IoT devices. Storage Optimized (Option 2) lacks GPU for ML inference. Snowmobile (Option 4) is for bulk data transfer only and has no compute capabilities.

> [!question]
> A media company needs to migrate 80 TB of archived video content from an on-premises NAS to Amazon S3 Glacier Deep Archive. Their internet connection is 100 Mbps. The project has a strict 2-week deadline. They also need to encrypt the data with their own encryption keys during transit. Which approach meets all requirements?
> 
> 1. Use AWS DataSync over the internet with bandwidth throttling disabled.
> 2. Order an AWS Snowball Edge Storage Optimized device, configure it with a customer-managed AWS KMS key, copy the data, and ship it back with an S3 lifecycle policy to transition objects to Glacier Deep Archive.
> 3. Set up AWS Direct Connect with a 1 Gbps dedicated connection and transfer via S3 CLI.
> 4. Use S3 Transfer Acceleration with multipart upload and server-side encryption with customer-provided keys (SSE-C).
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** At 100 Mbps, transferring 80 TB would take approximately 74 days — far exceeding the 2-week deadline. [[Snow Family|Snowball Edge]] supports customer-managed KMS keys for encryption and can transfer 80 TB within the timeframe. After import to S3, a lifecycle policy moves objects to Glacier Deep Archive. [[Direct Connect Overview|Direct Connect]] (Option 3) takes weeks to provision. [[DataSync]] (Option 1) is constrained by the 100 Mbps link. S3 Transfer Acceleration (Option 4) also cannot overcome the bandwidth limitation.

> [!question]
> A company has ordered multiple AWS Snowball Edge devices for a large data migration. Their security policy requires that data be encrypted and that the encryption keys are managed exclusively within their AWS account. If a device is intercepted during shipping, the data must remain unreadable. Which statements about Snowball Edge security are TRUE? (Choose 2)
> 
> 1. Snowball Edge uses a Trusted Platform Module (TPM) to detect unauthorized modifications to the hardware or software.
> 2. Data on Snowball Edge is encrypted using keys stored on the device in a tamper-resistant enclosure that erases keys if breached.
> 3. Snowball Edge encrypts all data with 256-bit encryption, and the encryption keys are managed through AWS KMS — they are never stored on the device itself.
> 4. AWS personnel can access the data on a Snowball Edge device during transit if required for troubleshooting.
> 5. The device automatically wipes all data after 90 days regardless of whether it has been returned.
>
> > [!success]- Answer & Rationale
> > **Answer: 1, 3**
> > **Rationale:** [[Snow Family|Snowball Edge]] devices include a TPM for tamper detection and use 256-bit encryption managed via [[KMS|AWS KMS]]. The encryption keys are never stored on the device; they are held in AWS KMS and only used after the device is authenticated at an AWS facility. This means intercepted devices contain only encrypted, inaccessible data. AWS personnel cannot access customer data (Option 4 is false).
