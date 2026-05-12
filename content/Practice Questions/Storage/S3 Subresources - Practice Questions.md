---
tags: [aws, sap-c02, s3, storage, practice-questions]
---
# S3 Subresources Practice Questions

> [!question]
> An organization’s security policy requires multiple copies of all critical data to be replicated across at least a primary and backup data center. The organization has decided to store some critical data on Amazon S3. Which option should you implement to ensure this requirement is met?
> 1. Use the S3 copy API to replicate data between two S3 buckets in different regions
> 2. You do not need to implement anything since S3 data is automatically replicated between regions
> 3. Use the S3 copy API to replicate data between two S3 buckets in different facilities within an AWS Region
> 4. You do not need to implement anything since S3 data is automatically replicated between multiple facilities within an AWS Region
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale:** Amazon S3 Standard, S3 Standard-IA, and S3 Glacier storage classes automatically replicate data across a minimum of three Availability Zones (AZs) within an AWS Region. Each AZ is a separate "facility" with its own power, cooling, and networking. Therefore, S3 provides high durability and meets the requirement for replication across multiple facilities automatically without further configuration of [[S3 Subresources]].

> [!question]
> A customer wants to track access to their Amazon Simple Storage Service (S3) buckets and also use this information for their internal security and access audits. Which of the following will meet the Customer requirement?
> 1. Enable AWS CloudTrail to audit all Amazon S3 bucket access.
> 2. Enable server access logging for all required Amazon S3 buckets
> 3. Enable the Requester Pays option to track access via AWS Billing
> 4. Enable Amazon S3 event notifications for Put and Post.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[S3 Subresources|S3 Access Logs]] provide detailed records for the requests that are made to a bucket. This is ideal for security and access audits as it captures details like the requester, bucket name, request time, request action, response status, and error code. While CloudTrail is used for auditing, "Server Access Logging" is the traditional S3 feature for tracking data-plane access.

> [!question]
> A user is enabling a static website hosting on an S3 bucket. Which of the below mentioned parameters cannot be configured by the user?
> 1. Error document
> 2. Conditional error on object name
> 3. Index document
> 4. Conditional redirection on object name
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** When configuring [[S3 Subresources#1. Static Website Hosting|Static Website Hosting]], you can specify an Index document, an Error document, and Routing Rules (which allow for conditional redirection). There is no "Conditional error on object name" parameter in the S3 website configuration.

> [!question]
> Company ABCD is running their corporate website on Amazon S3 accessed from `http://www.companyabcd.com`. Their marketing team has published new web fonts to a separate S3 bucket accessed by the S3 endpoint: `https://abcdfonts.s3.amazonaws.com`. While testing the new web fonts, Company ABCD recognized the web fonts are being blocked by the browser. What should Company ABCD do to prevent the web fonts from being blocked by the browser?
> 1. Enable versioning on the abcdfonts bucket for each web font
> 2. Create a policy on the abcdfonts bucket to enable access to everyone
> 3. Add the Content-MD5 header to the request for webfonts in the abcdfonts bucket from the website
> 4. Configure the abcdfonts bucket to allow cross-origin requests by creating a CORS configuration
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale:** Browsers implement the Same-Origin Policy, which blocks scripts or assets (like fonts) from being requested from a different domain. To allow `www.companyabcd.com` to access fonts in `abcdfonts.s3.amazonaws.com`, you must enable [[S3 Subresources#2. CORS (Cross-Origin Resource Sharing)|CORS]] on the destination bucket.

> [!question]
> Company ABCD is currently hosting their corporate site in an Amazon S3 bucket with Static Website Hosting enabled. Currently, when visitors go to `http://www.companyabcd.com` the `index.html` page is returned. Company ABCD now would like a new page `welcome.html` to be returned when a visitor enters `http://www.companyabcd.com` in the browser. Which of the following steps will allow Company ABCD to meet this requirement? (Choose 2)
> 1. Upload an html page named welcome.html to their S3 bucket
> 2. Create a welcome subfolder in their S3 bucket
> 3. Set the Index Document property to welcome.html
> 4. Move the index.html page to a welcome subfolder
> 5. Set the Error Document property to welcome.html
> 
> > [!success]- Answer & Rationale
> > **Answer: 1 & 3**
> > **Rationale:** To change the landing page of an S3 static website, you must ensure the file exists in the bucket (Upload `welcome.html`) and then update the **Index Document** property in the [[S3 Subresources#1. Static Website Hosting|Static Website Hosting]] configuration to point to that specific file.
