---
tags: [aws, sap-c02, route53, networking, practice-questions]
---
# Route 53 Resolver Practice Questions

> [!question]
> A company wants to install a new private intranet service using Amazon EC2 instances inside a Virtual Private Cloud (VPC). The VPC is connected to the company’s on-premises network using an AWS Site-to-Site VPN. The new service must communicate with the on-premises services already in place. On-premises services are accessed using company-owned hostnames (e.g., a DNS zone). This DNS zone is entirely on-premises and accessible only via the company’s private network. To connect the new service with current services, a solutions architect must guarantee that the new service can resolve hostnames on the company’s example domain. Which solution satisfies these criteria?
> 1. Create an empty private zone in Route 53 for `company.example`. Add an additional NS record to the company’s on-premises `company.example` zone that points to the authoritative name servers for the new private zone in Route 53.
> 2. Turn on DNS hostnames for the VPC. Configure a new outbound endpoint with Route 53 Resolver. Create a Resolver rule to forward requests for `company.example` to the on-premises name servers.
> 3. Turn on DNS hostnames for the VPC. Configure a new inbound resolver endpoint with Route 53 Resolver. Configure the on-premises DNS server to forward requests for `company.example` to the new resolver.
> 4. Use AWS Systems Manager to configure a run document that will install a hosts file that contains any required hostnames. Use an Amazon EventBridge (Amazon CloudWatch Events) rule to run the document when an instance is entering the running state.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** To allow VPC resources (like EC2 instances) to resolve domain names in an on-premises network, you must use a [[Route 53 Resolver]] Outbound Endpoint. An **Outbound Endpoint** combined with a **Forwarding Rule** for the specific domain (`company.example`) allows Route 53 to forward DNS queries to the on-premises DNS servers via the established [[VPN Overview|VPN]] or [[Direct Connect Overview|Direct Connect]]. **Inbound Endpoints** are used when on-premises resources need to resolve names in an [[Route 53 Overview|AWS Private Hosted Zone]]. Creating an empty private zone in Route 53 and adding NS records on-prem is used for delegating a subdomain to Route 53, but doesn't solve the VPC-to-on-prem resolution requirement. Using Systems Manager to manage hosts files is not a scalable or cloud-native DNS solution.
