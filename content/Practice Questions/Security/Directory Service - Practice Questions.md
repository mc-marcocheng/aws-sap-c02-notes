---
tags: [aws, sap-c02, directory-service, practice-questions]
---
# AWS Directory Service - Practice Questions

> [!question] Question 1
> A company wants to use their on-premises Active Directory to authenticate users accessing the AWS Management Console and Amazon WorkSpaces. A strict compliance mandate states that no directory data, including password hashes or cached credentials, may be stored in the cloud. Which AWS Directory Service solution should the company implement?
> 
> 1. AWS Managed Microsoft AD with a two-way trust to the on-premises AD.
> 2. Simple AD configured to replicate data from on-premises.
> 3. AD Connector with an AWS Direct Connect connection to the on-premises data center.
> 4. EC2 instances running Active Directory Domain Services acting as Read-Only Domain Controllers (RODCs).
>
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** 
> > - A is incorrect because [[Directory Service#AWS Managed Microsoft AD]] stores directory data in the cloud.
> > - B is incorrect because Simple AD cannot replicate from on-premises and also stores data in the cloud.
> > - C is correct because [[Directory Service#AD Connector]] acts only as a proxy. It redirects requests to the on-premises AD and does not cache credentials or store directory data in the cloud, meeting the strict compliance mandate.
> > - D is incorrect because RODCs store directory data (and some cached credentials) in the cloud.

> [!question] Question 2
> A global financial institution uses Amazon WorkSpaces across three AWS Regions: us-east-1, eu-west-1, and ap-southeast-1. They are currently using a single AWS Managed Microsoft AD in us-east-1. Users in Europe and Asia are reporting slow login times. The architecture team wants to improve authentication performance for all global users while minimizing management overhead. Which solution should an SAP-C02 Solutions Architect recommend?
> 
> 1. Deploy AD Connector in eu-west-1 and ap-southeast-1, pointing to the us-east-1 AWS Managed Microsoft AD.
> 2. Enable the Multi-Region feature for the existing AWS Managed Microsoft AD and add eu-west-1 and ap-southeast-1.
> 3. Create new AWS Managed Microsoft AD instances in eu-west-1 and ap-southeast-1, and establish two-way trusts between all of them.
> 4. Migrate from AWS Managed Microsoft AD to Simple AD in all three regions.
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:**
> > - A is incorrect because AD Connector would still route requests back to us-east-1, maintaining the latency issue.
> > - B is correct because the Multi-Region feature of [[Directory Service#AWS Managed Microsoft AD]] allows you to easily replicate your directory across multiple regions. This provides local directory endpoints in each region, drastically reducing authentication latency for WorkSpaces users in those regions with minimal management overhead.
> > - C is incorrect because managing separate directories and a complex mesh of trust relationships introduces significant and unnecessary management overhead compared to the native Multi-Region feature.
> > - D is incorrect because Simple AD does not support Multi-Region replication, and migrating would lose advanced Microsoft AD features.