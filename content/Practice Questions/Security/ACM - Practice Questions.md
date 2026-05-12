---
tags: [aws, sap-c02, acm, security, practice-questions]
---
# ACM Practice Questions

> [!question]
> A company is using AWS Certificate Manager (ACM) to manage their SSL/TLS certificates. They have several certificates that are about to expire. How does ACM handle the renewal of these certificates?
> 1. ACM automatically renews all certificates, including both those issued by AWS and those imported from a third-party CA.
> 2. ACM automatically renews only those certificates that were issued by ACM. For imported certificates, the user is responsible for manually renewing and re-importing them.
> 3. ACM provides a notification to the user but does not automatically renew any certificates.
> 4. ACM only renews certificates that are used with CloudFront distributions.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale**: [[ACM|AWS Certificate Manager]] automatically renews certificates that it issues (ACM-issued certificates) provided they are in use and their DNS/Email validation remains valid. However, ACM cannot automatically renew **imported** certificates. For these, you must obtain a new certificate from your third-party provider and manually re-import it into ACM before the existing one expires.

> [!question]
> A company uses Amazon CloudFront to serve a global web application. They need to attach an SSL/TLS certificate to the CloudFront distribution for their custom domain. The company's security policy requires that all certificates be managed within AWS. In which AWS Region must the ACM certificate be requested?
> 
> 1. The same region as the application's origin (e.g., us-west-2 if origin is in us-west-2)
> 2. Any region, as ACM certificates are global resources
> 3. us-east-1 (N. Virginia)
> 4. The region closest to the majority of end users
>
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** [[ACM|AWS Certificate Manager]] certificates used with [[CloudFront Overview|Amazon CloudFront]] **must** be requested in the **us-east-1 (N. Virginia)** region. This is a specific CloudFront requirement. For other services like [[ALB Overview|ALB]] or [[API Gateway]], the certificate must be in the same region as the resource.

> [!question]
> A company imported a third-party SSL certificate into AWS Certificate Manager for use with their Application Load Balancer. Three months later, the certificate expired and caused a service outage. How should the company prevent this from happening again?
> 
> 1. Use AWS Config to create a rule that checks certificate expiration and triggers automatic renewal via ACM.
> 2. Replace the imported certificate with a certificate issued directly by ACM, which will be automatically renewed.
> 3. Create a CloudWatch alarm on the `DaysToExpiry` metric for the ACM certificate and set up an SNS notification.
> 4. Both B and C are valid, but B is the most operationally efficient long-term solution.
>
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale:** [[ACM|AWS Certificate Manager]] only automatically renews certificates that **it issued** (public certificates). Imported certificates are never auto-renewed. The best long-term solution is to replace the imported cert with an ACM-issued one (Option B). However, if an imported certificate must be used (e.g., for Extended Validation), the `DaysToExpiry` CloudWatch metric (Option C) provides proactive alerting. Option D correctly identifies both as valid with B being optimal.
