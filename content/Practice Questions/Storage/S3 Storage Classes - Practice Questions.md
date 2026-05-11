---
tags: [aws, sap-c02, s3, storage, practice-questions]
---
# S3 Storage Classes Practice Questions

> [!question]
> What does RRS stand for when talking about S3?
> 1. Redundancy Removal System
> 2. Relational Rights Storage
> 3. Regional Rights Standard
> 4. Reduced Redundancy Storage
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale:** RRS stands for **Reduced Redundancy Storage**. It was designed for non-critical, reproducible data stored at lower levels of redundancy than the [[S3 Storage Classes|S3 Standard]] storage class.

> [!question]
> What is the durability of S3 RRS?
> 1. 99.99%
> 2. 99.95%
> 3. 99.995%
> 4. 99.999999999%
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** [[S3 Storage Classes#Reduced Redundancy Storage|Reduced Redundancy Storage (RRS)]] is designed for **99.99% durability** of objects. This is significantly lower than the **99.999999999% (11 9's)** durability provided by [[S3 Storage Classes|S3 Standard]] and other modern storage classes.

> [!question]
> What is the Reduced Redundancy option in Amazon S3?
> 1. Less redundancy for a lower cost
> 2. It doesn’t exist in Amazon S3, but in Amazon EBS.
> 3. It allows you to destroy any copy of your files outside a specific jurisdiction.
> 4. It doesn’t exist at all
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** The [[S3 Storage Classes#Reduced Redundancy Storage|Reduced Redundancy Storage (RRS)]] option provides a lower level of redundancy (99.99% durability) compared to standard storage, which reduces storage costs for data that can be easily recreated.

> [!question]
> An application is generating a log file every 5 minutes. The log file is not critical but may be required only for verification in case of some major issue. The file should be accessible over the internet whenever required. Which of the below mentioned options is a best possible storage solution for it?
> 1. AWS S3
> 2. AWS Glacier
> 3. AWS RDS
> 4. AWS S3 RRS
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale:** [[S3 Storage Classes#Reduced Redundancy Storage|Reduced Redundancy Storage (RRS)]] is ideal for non-critical, reproducible data like logs. While [[S3 Storage Classes|S3 Standard]] is often recommended now, RRS was designed for this specific use case to sustain the loss of data in a single facility while maintaining internet accessibility.

> [!question]
> A user has moved an object to Glacier using the life cycle rules. The user requests to restore the archive after 6 months. When the restore request is completed the user accesses that archive. Which of the below mentioned statements is not true in this condition?
> 1. The archive will be available as an object for the duration specified by the user during the restoration request
> 2. The restored object’s storage class will be RRS
> 3. The user can modify the restoration period only by issuing a new restore request with the updated period
> 4. The user needs to pay storage for both RRS (restored) and Glacier (Archive) Rates
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** When an object is restored from [[S3 Storage Classes|S3 Glacier]], its storage class **still remains GLACIER**. The restored copy is temporary and exists alongside the archived object. Note that the reference to RRS in option 2 and 4 refers to the legacy pricing model for restored objects; modern restores use a different billing structure but the principle that the storage class remains [[S3 Storage Classes|Glacier]] is constant.

> [!question]
> Your department creates regular analytics reports from your company’s log files. All log data is collected in Amazon S3 and processed by daily Amazon Elastic Map Reduce (EMR) jobs that generate daily PDF reports and aggregated tables in CSV format for an Amazon Redshift data warehouse. Your CFO requests that you optimize the cost structure for this system. Which of the following alternatives will lower costs without compromising average performance of the system or data integrity for the raw data?
> 1. Use reduced redundancy storage (RRS) for PDF and CSV data in Amazon S3. Add Spot instances to Amazon EMR jobs. Use Reserved Instances for Amazon Redshift.
> 2. Use reduced redundancy storage (RRS) for all data in S3. Use a combination of Spot instances and Reserved Instances for Amazon EMR jobs. Use Reserved instances for Amazon Redshift
> 3. Use reduced redundancy storage (RRS) for all data in Amazon S3. Add Spot Instances to Amazon EMR jobs. Use Reserved Instances for Amazon Redshift
> 4. Use reduced redundancy storage (RRS) for PDF and CSV data in S3. Add Spot Instances to EMR jobs. Use Spot Instances for Amazon Redshift.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** A combination of [[EC2 Purchase Options#Spot Instances|Spot]] and [[EC2 Purchase Options#Reserved Instances|Reserved Instances]] for [[EMR]] ensures both performance (via Reserved) and cost reduction (via Spot). Using [[S3 Storage Classes#Reduced Redundancy Storage|RRS]] for all data (assuming it's reproducible) reduces storage costs. In a modern context, [[S3 Storage Classes|S3 One Zone-IA]] or [[S3 Storage Classes|S3 Standard]] with [[S3 Lifecycle Management|Lifecycle rules]] might be preferred.

> [!question]
> Which of the below mentioned options can be a good use case for storing content in AWS RRS?
> 1. Storing mission critical data Files
> 2. Storing infrequently used log files
> 3. Storing a video file which is not reproducible
> 4. Storing image thumbnails
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale:** [[S3 Storage Classes#Reduced Redundancy Storage|Image thumbnails]] are a classic use case for [[S3 Storage Classes#Reduced Redundancy Storage|Reduced Redundancy Storage (RRS)]] because they are non-critical and can be easily reproduced from the original images if lost.

> [!question]
> A newspaper organization has an on-premises application which allows the public to search its back catalogue and retrieve individual newspaper pages via a website written in Java. They have scanned the old newspapers into JPEGs (approx. 17TB) and used Optical Character Recognition (OCR) to populate a commercial search product. The hosting platform and software is now end of life and the organization wants to migrate its archive to AWS and produce a cost efficient architecture and still be designed for availability and durability. Which is the most appropriate?
> 1. Use S3 with reduced redundancy to store and serve the scanned files, install the commercial search application on EC2 Instances and configure with auto-scaling and an Elastic Load Balancer.
> 2. Model the environment using CloudFormation. Use an EC2 instance running Apache webserver and an open source search application, stripe multiple standard EBS volumes together to store the JPEGs and search index.
> 3. Use S3 with standard redundancy to store and serve the scanned files, use CloudSearch for query processing, and use Elastic Beanstalk to host the website across multiple availability zones.
> 4. Use a single-AZ RDS MySQL instance to store the search index and the JPEG images use an EC2 instance to serve the website and translate user queries into SQL.
> 5. Use a CloudFront download distribution to serve the JPEGs to the end users and Install the current commercial search product, along with a Java Container for the website on EC2 instances and use Route53 with DNS round-robin.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** [[S3 Storage Classes|S3 Standard]] provides high availability and durability (11 9's) for the 17TB of JPEGs. CloudSearch is a managed service that is more cost-effective than running commercial software on EC2, and [[EC2 Overview|Elastic Beanstalk]] provides an easy way to deploy the Java website across multiple AZs for high availability.

> [!question]
> A research scientist is planning for the one-time launch of an Elastic MapReduce cluster and is encouraged by her manager to minimize the costs. The cluster is designed to ingest 200TB of genomics data with a total of 100 Amazon EC2 instances and is expected to run for around four hours. The resulting data set must be stored temporarily until archived into an Amazon RDS Oracle instance. Which option will help save the most money while meeting requirements?
> 1. Store ingest and output files in Amazon S3. Deploy on-demand for the master and core nodes and spot for the task nodes.
> 2. Optimize by deploying a combination of on-demand, RI and spot-pricing models for the master, core and task nodes. Store ingest and output files in Amazon S3 with a lifecycle policy that archives them to Amazon Glacier.
> 3. Store the ingest files in Amazon S3 RRS and store the output files in S3. Deploy Reserved Instances for the master and core nodes and on-demand for the task nodes.
> 4. Deploy on-demand master, core and task nodes and store ingest and output files in Amazon S3 RRS
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** For a one-time 4-hour job, [[EC2 Purchase Options#Reserved Instances|Reserved Instances (RI)]] are not cost-effective as they require long-term commitments. [[EC2 Purchase Options#Spot Instances|Spot Instances]] for task nodes provide the highest savings. Ingesting 200TB requires the durability of [[S3 Storage Classes|S3 Standard]] (Option 1) rather than [[S3 Storage Classes#Reduced Redundancy Storage|RRS]] (Option 4) to ensure the 4-hour processing window isn't interrupted by data loss.
