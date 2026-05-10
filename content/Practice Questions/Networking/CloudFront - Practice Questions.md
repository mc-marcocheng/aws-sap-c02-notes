---
tags: [aws, sap-c02, cloudfront, practice-questions]
---
# CloudFront Practice Questions

> [!question]
> Your company is moving towards tracking web page users with a small tracking image loaded on each page. Currently, you are serving this image out of US-East, but are starting to get concerned about the time it takes to load the image for users on the West Coast. What are the two best ways to speed up serving this image? (Choose 2)
> 1. Use Route 53’s Latency Based Routing and serve the image out of US-West-2 as well as US-East-1
> 2. Serve the image out through CloudFront
> 3. Serve the image out of S3 so that it isn’t being served off of your web application tier
> 4. Use EBS PIOPs to serve the image faster out of your EC2 instances
> 
> > [!success]- Answer & Rationale
> > **Answer: 1 & 2**
> > **Rationale**: [[CloudFront Overview|CloudFront]] is the most effective way to reduce latency for static assets like a tracking image by caching it at edge locations closer to the users. [[Route 53 Routing Policies|Latency Based Routing]] provides an alternative by directing users to the nearest regional endpoint (US-East-1 vs US-West-2), reducing the round-trip time. Serving from [[S3 Overview|S3]] moves the load but doesn't necessarily solve regional latency. EBS PIOPs addresses disk I/O, which is rarely the bottleneck for a small tracking image compared to network latency.

> [!question]
> You deployed your company website using Elastic Beanstalk and enabled log file rotation to S3. An EMR job periodically analyzes these logs to build a usage dashboard. After implementing CloudFront for dynamic content delivery (using the website as origin), the dashboard shows traffic dropped by an order of magnitude. How do you fix your usage dashboard?
> 1. Enable CloudFront to deliver access logs to S3 and use them as input of the EMR job
> 2. Turn on CloudTrail and use trail log files on S3 as input of the EMR job
> 3. Change your log collection process to use CloudWatch ELB metrics as input of the EMR job
> 4. Use Elastic Beanstalk "Rebuild Environment" option to update log delivery
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale**: Once [[CloudFront Overview|CloudFront]] is placed in front of the application, a significant portion of the traffic is served from the edge cache and never reaches the Elastic Beanstalk (ELB) origin. Therefore, ELB logs no longer represent the total traffic. You must enable CloudFront Access Logs and point your EMR jobs to these logs on [[S3 Overview|S3]] to capture the full picture of user requests.

> [!question]
> An AWS customer runs a public blogging website with 2 million entries per month. Access drops significantly after 6 months and updates stop after 6 months. The customer wants to use CloudFront to improve load times. Which recommendation is most appropriate?
> 1. Duplicate entries into two different buckets and create two separate CloudFront distributions
> 2. Create a CloudFront distribution with "US & Europe" price class for US/Europe users and a different one for the rest
> 3. Create a CloudFront distribution with S3 access restricted via OAI and partition the blog entry’s location in S3 by month to be used with CloudFront behaviors
> 4. Create a CloudFront distribution with Restrict Viewer Access Forward Query string set to true and minimum TTL of 0
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale**: Restricting access via **Origin Access Identity (OAI)** (or the newer OAC) is a security best practice for [[S3 Overview|S3]]. Partitioning content by month in S3 allows you to define different [[CloudFront Overview|Cache Behaviors]] based on path patterns. For example, you can set a higher TTL for older, static content and a lower TTL for newer content that is still being updated frequently.

> [!question]
> Your on-premises PHP application experienced downtime due to unpredictable traffic bursts. You expect more bursts soon and need to quickly improve infrastructure capacity in the short term. The app has a web tier (LB + Apache) and a DB tier (MySQL). Which scenario provides functionality and scalability quickly?
> 1. Setup a CloudFront distribution and configure it to cache objects from a custom origin (your on-premises LB) with a custom TTL.
> 2. Migrate to AWS using VM Import/Export to create an AMI and Auto Scaling Group.
> 3. Create an S3 bucket for website hosting and use Route 53 DNS failover.
> 4. Create a Hybrid environment with Auto Scaling in EC2 and balance traffic between on-premises and AWS.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale**: Setting up [[CloudFront Overview|CloudFront]] as a CDN in front of an existing custom origin is the fastest way to "offload" traffic. By caching static (and even some dynamic) content at the edge, you significantly reduce the load on your on-premises servers without the complexity of a full migration or hybrid setup in a short timeframe.

> [!question]
> You are building a system to distribute confidential training videos via CloudFront. What method serves content stored in S3 that is not publicly accessible?
> 1. Create an Origin Access Identity (OAI) for CloudFront and grant S3 bucket access to that OAI.
> 2. Add the CloudFront security group to the S3 bucket policy.
> 3. Create an IAM User for CloudFront and grant it S3 access.
> 4. Create a bucket policy listing the CloudFront distribution ID as the Principal.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale**: To keep [[S3 Overview|S3]] objects private while allowing [[CloudFront Overview|CloudFront]] to serve them, you use an **Origin Access Identity (OAI)** or **Origin Access Control (OAC)**. You then update the S3 bucket policy to allow `s3:GetObject` only to that identity, ensuring users cannot bypass the CDN to access the files directly.

> [!question]
> A media company needs to limit high-definition video downloads per customer. They use CloudFront with TTL=0 to ensure requests hit an EC2/RDS authentication backend. How do you meet the requirements? (Choose 2)
> 1. Configure a list of trusted signers.
> 2. Return a dynamically signed URL from the authentication backend unless the download limit is reached.
> 3. Enable URL parameter forwarding and count downloads in RDS, returning the S3 URL.
> 4. Use CloudFront logging and EMR to analyze downloads in real-time.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1 & 2**
> > **Rationale**: Trusted signers allow you to generate **Signed URLs** via [[CloudFront Overview|CloudFront]] that are valid for a short time and tied to specific sessions. The backend can check the download count in RDS before issuing a new signed URL for the content on [[S3 Overview|S3]]. Direct S3 URLs would be insecure, and logging is not real-time enough for enforcing immediate limits.

> [!question]
> A customer is implementing a Video On-Demand (VOD) platform supporting iOS, Android, and PC using standard players and streaming technology. What is the most cost-effective and scalable architecture?
> 1. Store video in S3. Configure CloudFront with a streaming option.
> 2. Store video in S3. Configure CloudFront with a download option.
> 3. Launch an Adobe Media Server on EC2 as the origin.
> 4. Use EC2 for both origin and edge servers.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale**: Modern streaming (HLS/DASH) works over standard HTTP. [[CloudFront Overview|CloudFront]]'s standard "download" (web) distribution is used to serve the video segments from [[S3 Overview|S3]]. This is more cost-effective and scalable than using a dedicated RTMP streaming server or custom EC2-based solutions.

> [!question]
> A mobile news app requires stable uploading of user-generated content and quick global delivery. 90% of content is read locally but quickly replaced by new content. How do you optimize both upload and view times?
> 1. Upload to a central S3 bucket and use CloudFront for delivery.
> 2. Upload to the S3 bucket in the closest region and use multiple distributions.
> 3. Upload to EC2 in the closest region, then move to central S3.
> 4. Use an Amazon CloudFront distribution for both uploading content and delivery.
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale**: [[CloudFront Overview|CloudFront]] supports **PUT/POST** methods, which optimizes the "upload" path by utilizing the AWS backbone from the nearest edge location to the origin ([[S3 Overview|S3]]). This reduces latency and improves stability for mobile users compared to uploading directly to S3 over the public internet. [[Global Accelerator|AWS Global Accelerator]] could also assist with non-HTTP traffic, but CloudFront is ideal for content delivery.

> [!question]
> To enable end-to-end HTTPS from the browser to the origin via CloudFront, which options are valid? (Choose 2)
> 1. Use a 3rd-party CA certificate in the origin and CloudFront default certificate in CloudFront.
> 2. Use 3rd-party CA certificates in both the origin and CloudFront.
> 3. Use a self-signed certificate in the origin.
> 4. Use the CloudFront default certificate at the origin.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1 & 2**
> > **Rationale**: [[CloudFront Overview|CloudFront]] requires a certificate issued by a **trusted Certificate Authority (CA)** at the custom origin to establish an HTTPS connection; self-signed certificates are NOT supported for custom origins. On the viewer side, you can use the default certificate or a custom one.

> [!question]
> Your application (90% reads) uses Route 53 pointing to an ELB and Auto Scaling Group. It's expensive during traffic spikes when many people request similar data. What is the simplest and cheapest way to reduce costs and scale?
> 1. Asynchronously replicate common responses to S3 and redirect requests.
> 2. Add another ELB and Auto Scaling layer.
> 3. Create a CloudFront Distribution with ELB as the origin and specify Cache Behaviors.
> 4. Use ElastiCache Memcached to serve requests.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale**: [[CloudFront Overview|CloudFront]] is specifically designed to handle read-heavy spikes by caching responses at the edge. This reduces the number of requests reaching the ELB and EC2 instances, lowering costs and improving performance. This is simpler than manual replication to [[S3 Overview|S3]] or managing a cache layer like ElastiCache.

> [!question]
> You need to analyze geographically distributed, spikey clickstream data and deliver weekly email reports. How should you design for scale and cost?
> 1. Use Redshift for analysis and Lambda for inserts.
> 2. Use a CloudFront distribution with access log delivery to S3. Process logs with EMR.
> 3. Use API Gateway + Lambda + Kinesis + EMR.
> 4. Use Elasticsearch Service with Auto Scaling EC2 groups.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale**: Since reports are only needed weekly (batch processing), [[CloudFront Overview|CloudFront]] Access Logs delivered to [[S3 Overview|S3]] are the most cost-effective way to capture high-scale clickstream data. CloudFront handles the global distribution and spikes effortlessly, and EMR provides a scalable way to process the logs in bulk.

> [!question]
> Your company needs to serve HLS videos to mobile tablets but has no transcoding expertise. How do you implement a HA, high-quality, and cost-efficient architecture?
> 1. Use Elastic Transcoder to convert MP4 to HLS. Store in S3 (with Glacier lifecycle). Serve via CloudFront.
> 2. Build a transcoding pipeline on EC2 using SQS and Auto Scaling.
> 3. Use Elastic Transcoder and serve from EC2 with EBS snapshots.
> 4. Build an EC2 pipeline and serve via CloudFront from EC2.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale**: Elastic Transcoder is a managed service requiring no transcoding expertise. Combining it with [[S3 Overview|S3]] for storage and [[CloudFront Overview|CloudFront]] for delivery (optimized for HLS) provides a serverless, cost-efficient, and highly available solution.
