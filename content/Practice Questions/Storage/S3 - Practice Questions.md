---
tags: [aws, sap-c02, s3, storage, practice-questions]
---
# S3 Practice Questions

> [!question]
> A genomics research company stores petabytes of sequencing data in Amazon S3. They need to run complex SQL queries across this data to identify patterns, but only a small subset of columns are relevant per query. The data is stored as CSV files averaging 500 MB each. The team wants to minimize query costs and improve performance without maintaining any infrastructure. Which approach is most cost-effective?
> 1. Convert the CSV files to Apache Parquet format using AWS Glue, then query with Amazon Athena.
> 2. Load all the data into Amazon Redshift Spectrum external tables and run queries from a Redshift cluster.
> 3. Enable S3 Select on each object and have the application issue S3 Select requests.
> 4. Create an EMR cluster with Apache Spark to query the CSV files directly in S3.
>
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** Converting to columnar format (Parquet) via [[Glue|AWS Glue]] allows [[Athena|Amazon Athena]] to skip irrelevant columns, dramatically reducing the amount of data scanned and therefore cost. [[S3 Overview|S3 Select]] (Option 3) works on individual objects but cannot perform complex SQL joins across multiple objects. Redshift Spectrum (Option 2) requires a running Redshift cluster. EMR (Option 4) requires cluster management.

> [!question]
> What are characteristics of Amazon S3? Choose 2 answers
> 1. Objects are directly accessible via a URL
> 2. S3 should be used to host a relational database
> 3. S3 allows you to store objects or virtually unlimited size
> 4. S3 allows you to store virtually unlimited amounts of data
> 5. S3 offers Provisioned IOPS
> 
> > [!success]- Answer & Rationale
> > **Answer: 1, 4**
> > **Rationale:** In [[S3 Overview|Amazon S3]], objects are directly accessible via a URL, and it provides virtually unlimited storage space. The maximum size of an individual object is 5 TB (not unlimited size).

> [!question]
> You are building an automated transcription service in which Amazon EC2 worker instances process an uploaded audio file and generate a text file. You must store both of these files in the same durable storage until the text file is retrieved. You do not know what the storage capacity requirements are. Which storage option is both cost-efficient and scalable?
> 1. Multiple Amazon EBS volume with snapshots
> 2. A single Amazon Glacier vault
> 3. A single Amazon S3 bucket
> 4. Multiple instance stores
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** A single [[S3 Overview|Amazon S3]] bucket is cost-efficient, scalable, and provides durable storage where you don't need to know storage capacity requirements in advance.

> [!question]
> A media company produces new video files on-premises every day with a total size of around 100GB after compression. All files have a size of 1-2 GB and need to be uploaded to Amazon S3 every night in a fixed time window between 3am and 5am. Current upload takes almost 3 hours, although less than half of the available bandwidth is used. What step(s) would ensure that the file uploads are able to complete in the allotted time window?
> 1. Increase your network bandwidth to provide faster throughput to S3
> 2. Upload the files in parallel to S3 using mulipart upload
> 3. Pack all files into a single archive, upload it to S3, then extract the files in AWS
> 4. Use AWS Import/Export to transfer the video files
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** Using [[S3 Overview#Multipart Upload|S3 Multipart Upload]] allows uploading a single large object as a set of parts in parallel, which improves throughput and effectively utilizes available network bandwidth.

> [!question]
> A company is deploying a two-tier, highly available web application to AWS. Which service provides durable storage for static content while utilizing lower Overall CPU resources for the web tier?
> 1. Amazon EBS volume
> 2. Amazon S3
> 3. Amazon EC2 instance store
> 4. Amazon RDS instance
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[S3 Overview|Amazon S3]] provides highly durable storage for static content. Serving static content directly from S3 offloads this work from the web tier EC2 instances, lowering their overall CPU utilization.

> [!question]
> You have an application running on an Amazon Elastic Compute Cloud instance, that uploads 5 GB video objects to Amazon Simple Storage Service (S3). Video uploads are taking longer than expected, resulting in poor application performance. Which method will help improve performance of your application?
> 1. Enable enhanced networking
> 2. Use Amazon S3 multipart upload
> 3. Leveraging Amazon CloudFront, use the HTTP POST method to reduce latency.
> 4. Use Amazon Elastic Block Store Provisioned IOPs and use an Amazon EBS-optimized instance
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[S3 Overview#Multipart Upload|Amazon S3 Multipart Upload]] is recommended for objects larger than 100 MB and is required for objects over 5 GB in a single PUT operation. It significantly improves upload performance by uploading object parts in parallel.

> [!question]
> When you put objects in Amazon S3, what is the indication that an object was successfully stored?
> 1. Each S3 account has a special bucket named_s3_logs. Success codes are written to this bucket with a timestamp and checksum.
> 2. A success code is inserted into the S3 object metadata.
> 3. A HTTP 200 result code and MD5 checksum, taken together, indicate that the operation was successful.
> 4. Amazon S3 is engineered for 99.999999999% durability. Therefore there is no need to confirm that data was inserted.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** A successful upload to [[S3 Overview|Amazon S3]] returns a successful HTTP 200 response. Additionally, you can verify data integrity by comparing the returned ETag header against the calculated MD5 checksum of the uploaded object.

> [!question]
> You have private video content in S3 that you want to serve to subscribed users on the Internet. User IDs, credentials, and subscriptions are stored in an Amazon RDS database. Which configuration will allow you to securely serve private content to your users?
> 1. Generate pre-signed URLs for each user as they request access to protected S3 content
> 2. Create an IAM user for each subscribed user and assign the GetObject permission to each IAM user
> 3. Create an S3 bucket policy that limits access to your private content to only your subscribed users' credentials
> 4. Create a CloudFront Origin Identity user for your subscribed users and assign the GetObject permission to this user
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** [[S3 Overview#Pre-Signed URLs|Pre-signed URLs]] allow users to download a specific object without requiring AWS security credentials. The URL is valid until an expiration date and time, making it ideal for temporarily sharing private content.

> [!question]
> You run an ad-supported photo sharing website using S3 to serve photos to visitors of your site. At some point you find out that other sites have been linking to the photos on your site, causing loss to your business. What is an effective method to mitigate this?
> 1. Remove public read access and use signed URLs with expiry dates.
> 2. Use CloudFront distributions for static content.
> 3. Block the IPs of the offending websites in Security Groups.
> 4. Store photos on an EBS volume of the web server.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** Hotlinking can be prevented by removing public read access from the objects and generating [[S3 Overview#Pre-Signed URLs|pre-signed URLs]] with expiration dates. This ensures only authenticated users of your application can view the photos.

> [!question]
> You are designing a web application that stores static assets in an Amazon Simple Storage Service (S3) bucket. You expect this bucket to immediately receive over 150 PUT requests per second. What should you do to ensure optimal performance?
> 1. Use multi-part upload.
> 2. Add a random prefix to the key names.
> 3. Amazon S3 will automatically manage performance at this scale.
> 4. Use a predictable naming scheme, such as sequential numbers or date time sequences, in the key names
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** With recent performance improvements, [[S3 Overview|Amazon S3]] scales automatically to support high request rates. It can handle at least 3,500 PUT/COPY/POST/DELETE and 5,500 GET/HEAD requests per second per prefix automatically.

> [!question]
> What is the maximum number of S3 buckets available per AWS Account?
> 1. 100 Per region
> 2. There is no Limit
> 3. 100 Per Account
> 4. 500 Per Account
> 5. 100 Per IAM User
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** By default, you can create up to 100 [[S3 Overview#Buckets|buckets]] per AWS account (this is a soft limit). You can request an increase to a maximum of 1,000 buckets.

> [!question]
> Your customer needs to create an application to allow contractors to upload videos to Amazon Simple Storage Service (S3) so they can be transcoded into a different format. She creates AWS Identity and Access Management (IAM) users for her application developers, and in just one week, they have the application hosted on a fleet of Amazon Elastic Compute Cloud (EC2) instances. The attached IAM role is assigned to the instances. As expected, a contractor who authenticates to the application is given a pre-signed URL that points to the location for video upload. However, contractors are reporting that they cannot upload their videos. Which of the following are valid reasons for this behavior? Choose 2 answers
> 1. The IAM role does not explicitly grant permission to upload the object.
> 2. The contractors' accounts have not been granted "write" access to the S3 bucket.
> 3. The application is not using valid security credentials to generate the pre-signed URL.
> 4. The developers do not have access to upload objects to the S3 bucket.
> 5. The S3 bucket still has the associated default permissions.
> 6. The pre-signed URL has expired.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3, 6**
> > **Rationale:** A [[S3 Overview#Pre-Signed URLs|pre-signed URL]] allows temporary access for anyone with the URL, meaning the contractors themselves do not need explicit AWS IAM permissions. However, the creator of the URL must use valid security credentials and the URL must not have expired.