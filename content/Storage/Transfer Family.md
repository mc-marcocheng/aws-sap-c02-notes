---
tags: [aws, sap-c02, storage, transfer]
---
# AWS Transfer Family

AWS Transfer Family is a secure, fully managed transfer service that enables you to move files into and out of Amazon [[S3 Overview|S3]] or Amazon [[EFS]] over several protocols.

## Supported Protocols
- **SFTP** (Secure Shell File Transfer Protocol)
- **FTPS** (File Transfer Protocol Secure)
- **FTP** (File Transfer Protocol)
- **AS2** (Applicability Statement 2) - Used for B2B data exchange.

## Key Features
- **Managed and Serverless**: AWS handles the infrastructure, scaling, and high availability across multiple AZs.
- **Identity Providers**:
    - **Service Managed**: Store user identities directly in the service.
    - **Active Directory**: Integrate with AWS Managed Microsoft AD or on-premises AD.
    - **Custom**: Use [[Lambda]] or [[API Gateway]] to integrate with your own identity provider.
- **Managed File Transfer Workflows (MFTW)**: Automate processing steps like scanning, tagging, and compressing files upon upload.

## Use Cases
- **B2B Data Exchange**: Securely share files with external partners using standard protocols.
- **Migration**: Move legacy file transfer workloads to the cloud without changing client-side applications.
- **Data Ingestion**: Directly ingest data from external sources into an S3 data lake or EFS file system.

## Connectivity & Security
- **VPC Deployment**: Transfer Family endpoints can be deployed **inside a VPC**. This allows for private access over [[Direct Connect Overview|Direct Connect]] or [[VPN]] and ensures that the endpoint is not accessible from the public internet.
- **Security Groups**: When deployed in a VPC, you can use **Security Groups** to control which IP addresses can access your transfer endpoints.
- **FIPS 140-2**: Endpoints can be configured to use FIPS-compliant cryptography for highly regulated industries.

> [!info] Storage Integration
> AWS Transfer Family acts as a gateway; the actual data resides in **Amazon S3** or **Amazon EFS**, allowing you to leverage their respective lifecycle, security, and durability features.

---
## SAP-C02 Exam Focus

> [!exam]
> - **SFTP/FTPS Migration**: Use Transfer Family to replace on-premises SFTP servers while keeping the same client-side protocols.
> - **Storage Backend**: Always choose **S3** for massive scalability or **EFS** if the files need to be accessed by standard Linux file systems.
> - **Custom Auth**: Use **Lambda** or **API Gateway** as a custom identity provider to integrate with existing user databases (like Okta or LDAP).

## Related Services
- [[_Storage Index|Storage Index]]
- [[S3 Overview|S3]]
- [[EFS]]
- [[Lambda]]
- [[API Gateway]]

---
**Practice:** [[Transfer Family - Practice Questions|Transfer Family Practice Questions]]