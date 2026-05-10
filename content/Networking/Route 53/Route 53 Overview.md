---
tags: [aws, sap-c02, networking, route53]
---
# Route 53 Overview

> [!info] Definition
> **Amazon Route 53** is a highly available and scalable Domain Name System (DNS) web service. It is designed to give developers and businesses an extremely reliable and cost-effective way to route end users to Internet applications by translating names like `www.example.com` into numeric IP addresses like `192.0.2.1`.

## Key Functions

### 1. Domain Registration
- Route 53 allows you to register domain names (e.g., `.com`, `.net`, `.org`).
- Supports **DNSSEC** for domain registration.

### 2. DNS Service
- Responds to DNS queries using a global network of authoritative DNS servers.
- Supports public and private hosted zones.
- **Free Queries**: Queries to certain AWS resources (S3 buckets, ELBs, CloudFront distributions) are free.

### 3. Health Checking
- Monitors the health and performance of your application endpoints.
- **Failover**: Can automatically route traffic away from unhealthy resources.
- **Integration**: Integrates with CloudWatch for alarms and notifications.

![[how-route-53-routes-traffic.png]]

---
## DNS Record Types

- **A (Address)**: IPv4 address.
- **AAAA**: IPv6 address.
- **CNAME (Canonical Name)**: Maps one domain name to another. **Note**: Cannot be used for the zone apex (root domain).
- **MX (Mail Exchange)**: Routes email to mail servers.
- **NS (Name Server)**: Identifies the name servers for the hosted zone.
- **SOA (Start of Authority)**: Provides information about the domain and the hosted zone.
- **TXT (Text)**: Used for various services like email verification (SPF, DKIM).

---
## Alias Records vs. CNAME

> [!important]
> **Alias records** are a Route 53-specific extension to DNS. They act like a CNAME but have special properties.

| Feature | CNAME Record | Alias Record |
| :--- | :--- | :--- |
| **Zone Apex Support** | No (cannot use for `example.com`) | **Yes** (can use for `example.com`) |
| **Cost** | Regular DNS query charges | **Free** for supported AWS resources |
| **DNS RFC** | Standard DNS protocol | Route 53 extension (not standard) |
| **TTL** | Manually configured | Uses the target's TTL (managed by AWS) |

### Alias Supported Targets
- **Elastic Load Balancers (ALB/NLB)**
- **CloudFront Distributions**
- **S3 Buckets** (configured as static websites)
- **API Gateway**
- **Global Accelerator**
- **VPC Interface Endpoints**

![[route-53-cname-vs-alias-records.jpg]]

---
## Hosted Zones

### Public Hosted Zone
- Used for routing traffic on the public internet.

### Private Hosted Zone
- Used for routing traffic within one or more **VPCs**.
- **Split-View (Split-Horizon) DNS**: You can have a public and private hosted zone with the same name. Internal VPC clients will see the private records, while external clients see the public ones.

---
## Route 53 Health Checks

- **Endpoint Monitoring**: Checks a specific IP or domain name via HTTP, HTTPS, or TCP.
- **Calculated Health Checks**: Monitors the status of other health checks (Parent -> Child). Up to 255 children.
- **CloudWatch Alarm Monitoring**: Useful for resources that don't have a public endpoint (e.g., internal databases).

---
## Advanced Security & Compliance

### Route 53 Resolver DNS Firewall
- **Outbound Protection**: Monitors and controls the domains that applications in your VPC can query.
- **Data Exfiltration**: Helps prevent compromised instances from sending data out via DNS tunneling.
- **Action**: Can be set to ALLOW, BLOCK, or ALERT.

### DNSSEC
- Protects your domain from DNS spoofing and man-in-the-middle attacks.
- Works by establishing a chain of trust using digital signatures.
- **KMS Integration**: Uses an asymmetric customer-managed key in **KMS** (US East 1 region) for signing.

---
## Logging and Observability

### DNS Query Logging (Public)
- Logs queries for public hosted zones.
- Sent to **CloudWatch Logs**.

### Resolver Query Logging (Private/Hybrid)
- Logs queries originating in a VPC, from on-premises (via inbound endpoint), or via outbound endpoints.
- Sent to **CloudWatch Logs**, **S3**, or **Kinesis Data Firehose**.

---
## SAP-C02 Exam Scenarios

> [!exam]
> - **Zone Apex**: Always use **Alias (A)** records to point the root domain (`example.com`) to AWS resources like ALBs or CloudFront.
> - **Hybrid DNS**: For bi-directional DNS resolution between on-premises and AWS, use **Route 53 Resolver Inbound** and **Outbound Endpoints**.
> - **Health Checks**: Use **Calculated Health Checks** for complex failover logic involving multiple endpoints.
> - **Security**: Prevent DNS tunneling and data exfiltration using **Route 53 Resolver DNS Firewall**.

---
## Related Services
- [[_Networking Index|Networking Index]]
- [[Route 53 Routing Policies]]
- [[Route 53 Resolver]]
- [[VPC Overview]]
- [[CloudFront Overview]]
- [[S3 Overview]]

---
**Practice:** [[Route 53 - Practice Questions|Route 53 Practice Questions]]