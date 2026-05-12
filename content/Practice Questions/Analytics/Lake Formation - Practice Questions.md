---
tags: [aws, sap-c02, analytics, lake-formation, practice-questions]
---
# AWS Lake Formation - Practice Questions

> [!question]
> A global financial enterprise has built a data lake on Amazon S3. Multiple departments, including HR, Marketing, and Finance, run queries against the centralized data using Amazon Athena. The Chief Information Security Officer (CISO) has mandated that HR analysts should only be able to query rows corresponding to employees in their respective regions, and they must be blocked from viewing the "Salary" column. 
> 
> As a Solutions Architect, how should you implement these access controls with the LEAST administrative overhead?
> 
> 1. Implement fine-grained Amazon S3 bucket policies using condition keys based on the user's IAM role to restrict access to specific prefixes. Store data in separate folders per region.
> 2. Use AWS Lake Formation to define column-level security to exclude the "Salary" column and row-level security using data filters based on the region.
> 3. Create multiple AWS Glue Data Catalog databases for each department and region. Use IAM policies to restrict access to specific Glue databases.
> 4. Implement a custom AWS Lambda function as an Amazon S3 Object Lambda access point to filter out the "Salary" column and regional rows dynamically upon retrieval.
>
> > [!success]- Answer & Rationale
> > **Answer:** B
> > **Rationale:**
> > [[Lake Formation]] is specifically designed to provide centralized, fine-grained access control (column, row, and cell-level) for data lakes in Amazon S3. Using Lake Formation's data filters to enforce row-level security and explicitly excluding the "Salary" column satisfies the CISO's requirements with minimal overhead. 
> > Option A is difficult to manage and scale, and cannot easily block a specific column within an object.
> > Option C requires data duplication and complex catalog management, violating the "least administrative overhead" requirement.
> > Option D (S3 Object Lambda) could work technically but introduces significant custom development and execution overhead compared to the native, managed capabilities of Lake Formation.

> [!question]
> A company is using Amazon EMR to process large datasets stored in Amazon S3. The company wants to enforce fine-grained access control to the data catalog and the underlying S3 data without relying entirely on complex IAM policies or EMRFS authorization. They want a centralized governance solution that can also extend to Amazon Athena users.
> 
> Which solution meets these requirements?
> 
> 1. Enable AWS Resource Access Manager (RAM) to share the S3 buckets and Glue Data Catalog across accounts.
> 2. Use AWS Lake Formation to manage permissions for both the data catalog and the underlying S3 data, and configure the EMR cluster to integrate with Lake Formation.
> 3. Implement Apache Ranger on an EC2 instance and configure Amazon EMR and Amazon Athena to use it for authorization.
> 4. Use Amazon Macie to continuously monitor the S3 buckets and automatically apply tag-based access controls using AWS Config rules.
>
> [!success]- Answer & Rationale
> > **Answer:** B
> > **Rationale:**
> > [[Lake Formation]] integrates natively with Amazon EMR and Amazon Athena to provide centralized, fine-grained access control. You can register the S3 locations with Lake Formation and define permissions on databases and tables. EMR clusters can be configured with security configurations that leverage Lake Formation for authorization.
> > Option A (AWS RAM) is for sharing resources, not fine-grained data access control within a lake.
> > Option C (Apache Ranger) is a valid open-source alternative but requires managing underlying infrastructure (EC2), which adds operational overhead compared to the fully managed Lake Formation. Furthermore, integrating Athena with a self-managed Apache Ranger is not natively supported.
> > Option D (Amazon Macie) is for data discovery and protection (sensitive data finding), not for enforcing query-level authorization.

> [!question]
> A multi-national corporation has a data lake with thousands of tables and hundreds of users across different business units (Finance, Sales, HR). They need to implement an access control model that scales as new tables and users are added. Instead of managing permissions for each individual user on each table, they want to assign permissions based on attributes like "ProjectID" and "Classification".
> 
> Which feature of AWS Lake Formation should they use?
> 1. Lake Formation Blueprints
> 2. Lake Formation Data Filters
> 3. Lake Formation Tag-Based Access Control (LF-TBAC)
> 4. Lake Formation Cross-Account Sharing
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** **Lake Formation Tag-Based Access Control (LF-TBAC)** allows you to define permissions based on tags (LF-Tags) attached to databases, tables, and columns. This attribute-based access control (ABAC) model scales much better than managing individual resource permissions, as new resources automatically inherit permissions based on their tags, and users are granted access based on their assigned tag values. Blueprints (Option 1) are for data ingestion. Data Filters (Option 2) are for row-level security.