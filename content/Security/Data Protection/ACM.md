---
tags: [aws, sap-c02, acm, security]
---
# AWS Certificate Manager (ACM)

AWS Certificate Manager (ACM) handles the complexity of creating, storing, and renewing SSL/TLS certificates for your AWS-based websites and applications.

## Key Features
- **Integrated Services**: Deploy certificates on **[[ALB Overview|ALB]]**, **[[CloudFront Overview|CloudFront]]**, and **[[API Gateway]]**.
- **Automatic Renewals**: ACM automatically renews certificates it issues. Imported certificates must be manually renewed.
- **Validation Methods**:
    - **DNS Validation (Recommended)**: Create a CNAME record in your DNS configuration.
    - **Email Validation**: Approval email sent to domain contacts.
- **Private CA**: Create private certificate authorities to issue private certificates for internal services, IoT devices, and mTLS. Can be shared cross-account via **[[Organizations Overview|AWS RAM]]**.

## Regionality Requirements

> [!important] The CloudFront "us-east-1" Rule
> To use an ACM certificate with **CloudFront**, the certificate MUST be requested or imported in the **US East (N. Virginia) `us-east-1`** region.

- For **ALB**, **NLB** (TLS listeners), or **API Gateway**, the certificate must be in the **same region** as the resource.

## Deployment Trade-offs

| Feature | ACM-Issued Certificate | Imported Certificate |
| :--- | :--- | :--- |
| **Cost** | Free (Public) | Free to import |
| **Renewal** | **Automatic** | **Manual** |
| **Private Key**| Managed by AWS (Cannot download) | Managed by you |

> [!exam]
> - You cannot install ACM certificates directly on EC2 instances. You must use a Load Balancer or CloudFront as the front-end.
> - If an application requires a certificate to be installed directly on an EC2 instance, you must purchase/generate it elsewhere and upload the files to the instance.

## Related Services
- [[_Security Index|Security Index]]
- [[ALB Overview]]
- [[CloudFront Overview]]
- [[API Gateway]]
- [[Route 53 Overview]]

---
**Practice:** [[ACM - Practice Questions|ACM Practice Questions]]