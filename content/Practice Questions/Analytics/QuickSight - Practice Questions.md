---
tags: [aws, sap-c02, analytics, quicksight, practice-questions]
---
# Amazon QuickSight - Practice Questions

> [!question]
> A SaaS company provides analytics dashboards to its customers. The data is stored in a multi-tenant Amazon Aurora PostgreSQL database located in private subnets. The company wants to use Amazon QuickSight to build and embed these dashboards directly into their web application. Dashboards must load quickly, and each customer must only see their own data.
> 
> Which combination of QuickSight features and architectures should the Solutions Architect recommend?
> 
> 1. Use QuickSight Standard Edition. Connect directly to Aurora over the internet using a public Elastic IP. Implement application-level filtering before rendering the dashboard.
> 2. Use QuickSight Enterprise Edition. Create a QuickSight VPC connection to access the private Aurora database. Ingest data into SPICE and implement Row-Level Security (RLS) using user or group tags.
> 3. Use QuickSight Enterprise Edition. Configure an AWS Site-to-Site VPN to connect QuickSight to the VPC. Use Direct Query to Aurora and implement Row-Level Security (RLS).
> 4. Use QuickSight Standard Edition. Export data daily from Aurora to Amazon S3 using AWS Glue, then use QuickSight to query the S3 data directly using Athena.
>
> > [!success]- Answer & Rationale
> > **Answer:** B
> > **Rationale:**
> > [[QuickSight]] Enterprise Edition is required for VPC connections, Row-Level Security (RLS), and embedded analytics. Creating a VPC connection allows secure access to the Aurora database in private subnets without exposing it to the internet. Using SPICE ensures the dashboards load blazingly fast, as requested. Row-Level Security (RLS) ensures that each SaaS customer can only view their respective data.
> > Option A is insecure (exposing DB to internet) and Standard Edition doesn't support the required features.
> > Option C is incorrect because QuickSight uses native VPC connections (ENIs), not Site-to-Site VPNs, to access private VPC resources.
> > Option D introduces latency, complexity, and Standard Edition lacks the required RLS and embedding features.

> [!question]
> A retail company uses Amazon QuickSight to visualize sales data stored in Amazon Redshift. Regional managers complain that the dashboard performance is slow when they filter data interactively. The dashboard is currently configured to use Direct Query. The data only needs to be updated once per day at midnight.
> 
> How can a Solutions Architect improve the dashboard performance MOST cost-effectively?
> 
> 1. Scale up the Amazon Redshift cluster to a larger instance type to handle the query volume.
> 2. Change the QuickSight dataset to use SPICE and schedule a daily refresh at midnight.
> 3. Implement Amazon ElastiCache in front of Amazon Redshift to cache dashboard queries.
> 4. Convert the Redshift cluster to an Amazon Aurora database for faster read performance.
>
> > [!success]- Answer & Rationale
> > **Answer:** B
> > **Rationale:**
> > Since the data only needs to be updated once per day, changing the dataset to use [[QuickSight]] SPICE (Super-fast, Parallel, In-memory Calculation Engine) is the most efficient and cost-effective solution. SPICE stores data in-memory, providing rapid response times for interactive filtering. A scheduled refresh at midnight fulfills the freshness requirement.
> > Option A increases costs significantly and might not solve the interactive filtering latency as effectively as an in-memory engine.
> > Option C is complex to implement for QuickSight; QuickSight does not natively integrate with ElastiCache as a query cache for Redshift.
> > Option D requires a major database migration and may not be suitable for analytical workloads compared to Redshift.