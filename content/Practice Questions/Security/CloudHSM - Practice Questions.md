---
tags: [aws, sap-c02, security, hsm, practice-questions]
---
# CloudHSM - Practice Questions

> [!question]
> A healthcare company is building a highly secure application that processes cryptographic operations. Regulatory requirements mandate that the cryptographic keys must be generated and stored on a hardware security module (HSM) validated at FIPS 140-2 Level 3. Furthermore, the company must have exclusive, single-tenant control over the HSM appliance, managing its users and policies independently of AWS IAM. Which solution meets these stringent requirements?
> 
> 1. Use AWS Key Management Service (KMS) with a Customer Managed Key (CMK) configured for asymmetric encryption.
> 2. Provision an AWS CloudHSM cluster, initialize the cluster within a private VPC subnet, and use the CloudHSM client software to manage the keys.
> 3. Use AWS KMS with a Custom Key Store backed by AWS CloudHSM, managing all cryptographic operations through the KMS API.
> 4. Use Amazon Macie to generate compliance reports proving that the default KMS keys meet FIPS 140-2 Level 3 standards.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[CloudHSM]] provides dedicated, single-tenant hardware security modules validated to FIPS 140-2 Level 3. Unlike KMS (which is multi-tenant and managed via IAM), managing CloudHSM directly using its client software gives the customer complete, exclusive control over the HSM appliance, its crypto users (CUs), and policies. Option 3 uses CloudHSM but delegates management to the KMS service.

> [!question]
> A financial institution is using AWS CloudHSM for an application requiring high availability across multiple Availability Zones. The architecture includes a CloudHSM cluster with three HSM instances, one in each AZ. If one of the HSM instances suffers a hardware failure, how does the system ensure the cryptographic keys are not lost and operations continue?
> 
> 1. An AWS Lambda function must be triggered by CloudWatch to restore the keys to a new HSM from a manual backup stored in Amazon S3.
> 2. The application code must detect the failure and programmatically re-import the cryptographic keys into the remaining healthy HSM instances.
> 3. CloudHSM automatically synchronizes keys across all HSMs in a cluster; the load balancer will route traffic to the remaining healthy instances seamlessly.
> 4. The CloudHSM client must be manually reconfigured to point to the IP addresses of the remaining healthy HSMs.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** AWS [[CloudHSM]] clusters provide native high availability. When you add multiple HSMs to a cluster, AWS automatically keeps the keys synchronized across all HSMs. The CloudHSM client software automatically load balances requests and handles failover if an HSM node becomes unavailable.
