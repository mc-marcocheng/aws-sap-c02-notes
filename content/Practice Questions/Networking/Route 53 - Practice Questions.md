---
tags: [aws, sap-c02, route53, dns, practice-questions]
---
# Route 53 Practice Questions

> [!question]
> What does Amazon Route 53 provide?
> 1. A global Content Delivery Network.
> 2. None of these.
> 3. A scalable Domain Name System.
> 4. An SSH endpoint for Amazon EC2.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3. A scalable Domain Name System.**
> > **Rationale**: [[Route 53 Overview#DNS Service|Amazon Route 53]] is a highly available and scalable Domain Name System (DNS) web service. It is designed to route end users to Internet applications by translating names like `www.example.com` into numeric IP addresses. Option A describes [[CloudFront Overview|CloudFront]]. Option D describes EC2 Instance Connect or Systems Manager Session Manager.

> [!question]
> Does Amazon Route 53 support NS Records?
> 1. Yes, it supports Name Service records.
> 2. No.
> 3. It supports only MX records.
> 4. Yes, it supports Name Server records.
> 
> > [!success]- Answer & Rationale
> > **Answer: 4. Yes, it supports Name Server records.**
> > **Rationale**: [[Route 53 Overview#DNS Record Types|Route 53]] supports **NS (Name Server)** records. An NS record identifies the name servers for the hosted zone. When you create a hosted zone, Route 53 automatically creates an NS record for you.

> [!question]
> Does Route 53 support MX Records?
> 1. Yes.
> 2. It supports CNAME records, but not MX records.
> 3. No.
> 4. Only Primary MX records. Secondary MX records are not supported.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1. Yes.**
> > **Rationale**: [[Route 53 Overview#DNS Record Types|Route 53]] supports **MX (Mail Exchange)** records, which are used to route email to your mail servers. It supports multiple MX records with different priorities.

> [!question]
> Which of the following statements are true about Amazon Route 53 resource records? (Choose 2 answers)
> 1. An Alias record can map one DNS name to another Amazon Route 53 DNS name.
> 2. A CNAME record can be created for your zone apex.
> 3. An Amazon Route 53 CNAME record can point to any DNS record hosted anywhere.
> 4. TTL can be set for an Alias record in Amazon Route 53.
> 5. An Amazon Route 53 Alias record can point to any DNS record hosted anywhere.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1, 3**
> > **Rationale**: According to [[Route 53 Overview#Alias Records vs. CNAME|Alias vs. CNAME]] rules: 
> > - **1 is true:** Alias records are a Route 53 extension that can point to other Route 53 records in the same hosted zone or to supported AWS resources.
> > - **3 is true:** CNAME records are standard DNS records that can point to any domain name hosted anywhere.
> > - **2 is false:** DNS RFCs do not allow a CNAME for the zone apex (root domain).
> > - **4 is false:** Alias records do not have a user-configurable TTL; they inherit the TTL of the underlying AWS resource.
> > - **5 is false:** Alias records can only point to specific supported AWS resources or other Route 53 records.

> [!question]
> Which statements are true about Amazon Route 53? (Choose 2 answers)
> 1. Amazon Route 53 is a region-level service.
> 2. You can register your domain name.
> 3. Amazon Route 53 can perform health checks and failovers to a backup site in the event of the primary site failure.
> 4. Amazon Route 53 only supports Latency-based routing.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2, 3**
> > **Rationale**: As detailed in [[Route 53 Overview#Key Functions|Route 53 Key Functions]]:
> > - **2 is true:** Route 53 provides domain registration services.
> > - **3 is true:** Route 53 Health Checks can monitor endpoints and automatically failover traffic to healthy resources.
> > - **1 is false:** Route 53 is a **Global** service.
> > - **4 is false:** Route 53 supports multiple routing policies, including Simple, Weighted, Geolocation, Geoproximity, and Multi-value Answer.

> [!question]
> A customer is hosting their company website on a cluster of web servers that are behind a public-facing load balancer. The customer also uses Amazon Route 53 to manage their public DNS. How should the customer configure the DNS zone apex record to point to the load balancer?
> 1. Create an A record pointing to the IP address of the load balancer.
> 2. Create a CNAME record pointing to the load balancer DNS name.
> 3. Create a CNAME record aliased to the load balancer DNS name.
> 4. Create an A record aliased to the load balancer DNS name.
> 
> > [!success]- Answer & Rationale
> > **Answer: 4. Create an A record aliased to the load balancer DNS name.**
> > **Rationale**: For the **zone apex** (e.g., `example.com`), you cannot use a CNAME record. [[Route 53 Overview#SAP-C02 Exam Scenarios|Route 53 Alias (Type A) records]] allow you to point the zone apex to an AWS resource like an ELB.

> [!question]
> A user has configured ELB with three instances. The user wants to achieve High Availability as well as redundancy with ELB. Which of the below mentioned AWS services helps the user achieve this for ELB?
> 1. Route 53.
> 2. AWS Mechanical Turk.
> 3. Auto Scaling.
> 4. AWS EMR.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1. Route 53.**
> > **Rationale**: [[Route 53 Overview#3. Health Checking|Route 53]] provides **High Availability** and redundancy at the DNS level by performing health checks on the ELB and enabling failover to other regions or resources if the ELB becomes unavailable. (While Auto Scaling provides instance-level HA, Route 53 provides service-level HA).

> [!question]
> How can the domain’s zone apex for example “myzoneapexdomain.com” be pointed towards an Elastic Load Balancer?
> 1. By using an AAAA record.
> 2. By using an A record.
> 3. By using an Amazon Route 53 CNAME record.
> 4. By using an Amazon Route 53 Alias record.
> 
> > [!success]- Answer & Rationale
> > **Answer: 4. By using an Amazon Route 53 Alias record.**
> > **Rationale**: The zone apex cannot be a CNAME. Using a [[Route 53 Overview#Alias Records vs. CNAME|Route 53 Alias record]] (which can be Type A or AAAA) is the specific Route 53 feature designed to solve this limitation for AWS resources.

> [!question]
> You need to create a simple, holistic check for your system’s general availability and uptime. Your system presents itself as an HTTP-speaking API. What is the simplest tool on AWS to achieve this with?
> 1. Route 53 Health Checks.
> 2. CloudWatch Health Checks.
> 3. AWS ELB Health Checks.
> 4. EC2 Health Checks.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1. Route 53 Health Checks.**
> > **Rationale**: [[Route 53 Overview#Route 53 Health Checks|Route 53 Health Checks]] are external to the VPC and monitor your application's availability from various global locations, providing a "holistic" view of uptime for an internet-facing API.

> [!question]
> Your organization’s corporate website must be available on `www.acme.com` and `acme.com`. How should you configure Amazon Route 53 to meet this requirement?
> 1. Configure acme.com with an ALIAS record targeting the ELB. www.acme.com with an ALIAS record targeting the ELB.
> 2. Configure acme.com with an A record targeting the ELB. www.acme.com with a CNAME record targeting the acme.com record.
> 3. Configure acme.com with a CNAME record targeting the ELB. www.acme.com with a CNAME record targeting the acme.com record.
> 4. Configure acme.com using a second ALIAS record with the ELB target. www.acme.com using a PTR record with the acme.com record target.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1. Configure acme.com with an ALIAS record targeting the ELB. www.acme.com with an ALIAS record targeting the ELB.**
> > **Rationale**: Using [[Route 53 Overview#Alias Records vs. CNAME|Alias records]] for both `acme.com` (zone apex) and `www.acme.com` (subdomain) targeting the ELB is the most efficient and recommended configuration in AWS. It avoids the performance penalty of a CNAME lookup and allows the zone apex to point to the ELB.
