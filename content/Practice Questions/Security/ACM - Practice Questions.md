---
tags: [aws, sap-c02, acm, security, practice-questions]
---
# ACM Practice Questions

> [!question]
> A company hosts an online shopping portal in the AWS Cloud. The portal provides HTTPS security by using a TLS certificate on an ELB. Recently, the portal suffered an outage because the TLS certificate expired. A SysOps administrator must create a solution to automatically renew certificates to avoid this issue in the future. What is the MOST operationally efficient solution that meets these requirements?
> 1. Request a public certificate by using AWS Certificate Manager. Associate the certificate from ACM with the ELB. Write a scheduled AWS Lambda function to renew the certificate every 18 months.
> 2. Request a public certificate by using AWS Certificate Manager. Associate the certificate from ACM with the ELB. ACM will automatically manage the renewal of the certificate.
> 3. Register a certificate with a third-party certificate authority (CA). Import this certificate into AWS Certificate Manager. Associate the certificate from ACM with the ELB. ACM will automatically manage the renewal of the certificate.
> 4. Register a certificate with a third-party certificate authority (CA). Configure the ELB to import the certificate directly from the CA. Set the certificate refresh cycle on the ELB to refresh when the certificate is within 3 months of the expiration date.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** Certificates issued by [[ACM|AWS Certificate Manager]] (public certificates) are automatically renewed by AWS as long as they are in use by an AWS service like [[ELB Overview|Elastic Load Balancer]], [[CloudFront Overview|CloudFront]], or [[API Gateway|API Gateway]]. This is the most operationally efficient solution. Manual renewal logic (Option 1) is unnecessary. [[ACM]] does not manage the renewal of imported third-party certificates (Option 3). Option 4 is incorrect as [[ELB Overview|ELB]] lacks native third-party certificate refresh capabilities.
