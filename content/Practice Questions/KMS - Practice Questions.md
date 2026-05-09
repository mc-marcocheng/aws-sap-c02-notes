---
tags: [aws, sap-c02, kms, security, practice-questions]
---
# KMS Practice Questions

> [!question]
> Designing a personal document-archiving solution for a global enterprise. You are designing a personal document-archiving solution for your global enterprise with thousands of employee. Each employee has potentially gigabytes of data to be backed up in this archiving solution. The solution will be exposed to he employees as an application, where they can just drag and drop their files to the archiving system. Employees can retrieve their archives through a web interface. The corporate network has high bandwidth AWS DirectConnect connectivity to AWS. You have regulatory requirements that all data needs to be encrypted before being uploaded to the cloud. How do you implement this in a highly available and cost efficient way?
> 
> 1. Manage encryption keys on-premise in an encrypted relational database. Set up an on-premises server with sufficient storage to temporarily store files and then upload them to Amazon S3, providing a client-side master key.
> 2. Manage encryption keys in a Hardware Security Module (HSM) appliance on-premise server with sufficient storage to temporarily store, encrypt, and upload files directly into amazon Glacier.
> 3. Manage encryption keys in amazon Key Management Service (KMS), upload to amazon simple storage service (s3) with client-side encryption using a KMS customer master key ID and configure Amazon S3 lifecycle policies to store each object using the amazon glacier storage tier.
> 4. Manage encryption keys in an AWS CloudHSM appliance. Encrypt files prior to uploading on the employee desktop and then upload directly into amazon glacier.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale**: With Client-Side Encryption (CSE) using [[KMS Overview|KMS]], the encryption happens at the client side before the object is uploaded to S3, fulfilling the regulatory requirement. [[KMS Overview|KMS]] is a cost-effective and highly available managed service. Using [[S3 Overview|S3]] with lifecycle policies to move data to [[S3 Storage Classes|Glacier]] is more flexible and cost-effective for this volume of data compared to direct [[S3 Storage Classes|Glacier]] uploads or maintaining on-premise infrastructure.

> [!question]
> Authenticating EC2 outbound connections with unique x.509 certificates. An AWS customer is deploying an application that is composed of an Auto Scaling group of EC2 Instances. The customers security policy requires that every outbound connection from these instances to any other service within the customers Virtual Private Cloud must be authenticated using a unique x 509 certificate that contains the specific instance-id. In addition an x 509 certificates must be designed by the customer’s Key management service in order to be trusted for authentication. Which of the following configurations will support these requirements?
> 
> 1. Configure an IAM Role that grants access to an Amazon S3 object containing a signed certificate and configure the Auto Scaling group to launch instances with this role. Have the instances bootstrap get the certificate from Amazon S3 upon first boot.
> 2. Embed a certificate into the Amazon Machine Image that is used by the Auto Scaling group Have the launched instances generate a certificate signature request with the instance’s assigned instance-id to the Key management service for signature.
> 3. Configure the Auto Scaling group to send an SNS notification of the launch of a new instance to the trusted key management service. Have the Key management service generate a signed certificate and send it directly to the newly launched instance.
> 4. Configure the launched instances to generate a new certificate upon first boot. Have the Key management service poll the AutoScaling group for associated instances and send new instances a certificate signature that contains the specific instance-id.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale**: Embedding a certificate/agent into the AMI allows launched instances to generate a Certificate Signing Request (CSR) that includes their specific `instance-id`. This CSR is then sent to the [[KMS Overview|KMS]] (or a custom CA backend) for signing. This satisfies the requirement for a unique certificate per instance and ensures the certificate contains the `instance-id`.

> [!question]
> Rotating KMS keys with imported key material. A company has a customer master key (CMK) with imported key materials. Company policy requires that all encryption keys must be rotated every year. What can be done to implement the above policy?
> 
> 1. Enable automatic key rotation annually for the CMK.
> 2. Use AWS Command Line interface to create an AWS Lambda function to rotate the existing CMK annually.
> 3. Import new key material to the existing CMK and manually rotate the CMK.
> 4. Create a new CMK, import new key material to it, and point the key alias to the new CMK.
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale**: [[KMS Overview|KMS]] keys with imported key material (Origin: EXTERNAL) do not support automatic key rotation. To rotate these keys, you must perform a manual rotation: create a new [[KMS Overview|KMS]] key, import the new key material, and update your application or [[KMS Overview#Aliases|Alias]] to point to the new key ID.

> [!question]
> KMS key types supporting automatic rotation every 12 months. An organization policy states that all encryption keys must be automatically rotated every 12 months. Which AWS Key Management Service (KMS) key type should be used to meet this requirement? (Select TWO)
> 
> 1. AWS managed Customer Master Key (CMK)
> 2. Customer managed CMK with AWS generated key material
> 3. Customer managed CMK with imported key material
> 4. AWS managed data key
> 
> > [!success]- Answer & Rationale
> > **Answer: 1, 2**
> > **Rationale**: **AWS managed keys** are automatically rotated every year (this was updated from every 3 years). **Customer managed keys** with AWS-generated key material (Origin: AWS_KMS) support optional automatic rotation every year. Keys with imported material or asymmetric keys do not support automatic rotation. Data keys are not "rotated" by [[KMS Overview|KMS]]; they are unique per encryption operation or managed by the service using them via envelope encryption.
