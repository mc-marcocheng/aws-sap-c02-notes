---
tags: [aws, sap-c02, storage, transfer]
---
# AWS Transfer Family

AWS Transfer Family is a secure, fully managed transfer service that enables you to move files into and out of Amazon [[S3 Overview|S3]] or Amazon [[EFS]] over several protocols without running or maintaining any server infrastructure.

## Supported Protocols
- **SFTP** (Secure Shell File Transfer Protocol) - Operates over Port 22.
- **FTPS** (File Transfer Protocol Secure) - Requires uploading a server certificate to ACM.
- **FTP** (File Transfer Protocol) - Unencrypted. *Only supported inside a VPC (cannot be public).*
- **AS2** (Applicability Statement 2) - Used for secure, reliable B2B data exchange (EDI). Provides encryption and digital signatures.

## Key Features
- **Managed and Serverless**: AWS handles the infrastructure, scaling, and high availability across up to 3 AZs.
- **Identity Providers**:
    - **Service Managed**: Store user identities (SSH keys) directly in the service.
    - **Active Directory**: Integrate with AWS Managed Microsoft AD.
    - **Custom**: Use **[[Lambda]]** or Amazon **[[API Gateway]]** (RESTful interface) to integrate your directory service to authenticate/authorize users.
- **Managed File Transfer Workflows (MFTW)**: A serverless workflow service to automate processing steps (e.g., scanning, tagging, compressing) of files uploaded using Transfer Family. No additional charge for using managed workflows.
- **AWS Transfer Family Web Apps**: Provides a simple, secure, browser-based interface for non-technical users to upload/download files. Supports VPC hosted endpoints for private access.
- **SFTP Connectors**: Enables secure file transfers *between* Amazon S3 and remote SFTP servers. Supports automated, event-driven file transfer workflows within AWS using service-managed egress or VPC egress (via VPC Lattice).

## Architecture & Connectivity
- **Endpoints**:
    - **Publicly Accessible**: Accessible over the public internet. Supports IPv6 for SFTP.
    - **VPC Hosted**: Deployed inside your VPC. Can be internal-only (via Direct Connect/VPN) or Internet-Facing (SFTP/FTPS only). Supports IPv6 for all protocols.
- **Custom Hostnames**: You can associate a custom domain (e.g., `sftp.company.com`) with the server endpoint using Amazon Route 53 to mask the AWS-generated URL.
- **Logical Directories**: Construct a virtual directory structure using user-friendly names to hide absolute directory paths, S3 bucket names, or EFS file system names from end users.

> [!info] Storage Integration
> AWS Transfer Family acts as a gateway; the actual data resides in **Amazon S3** or **Amazon EFS**, allowing you to leverage their respective lifecycle, security, and durability features. 
> - **S3**: Supports session policies.
> - **EFS**: Supports POSIX user, group, and secondary group IDs.

---
## SAP-C02 Exam Focus

> [!exam]
> - **SFTP/FTPS Migration**: Use Transfer Family to replace on-premises SFTP servers while keeping the same client-side protocols.
> - **B2B EDI**: Use **AS2** for encrypted business-to-business transactions.
> - **Custom Auth**: If an exam question asks to authenticate SFTP users against an existing custom database (e.g., LDAP, Okta, custom DB), use **API Gateway** or **Lambda** as the identity provider.
> - **Remote Server Sync**: If you need to pull files *from* a partner's remote SFTP server into S3 automatically, use **SFTP Connectors**.

## Related Services
- [[_Storage Index|Storage Index]]
- [[S3 Overview|S3]]
- [[EFS]]
- [[Lambda]]
- [[API Gateway]]

---
**Practice:** [[Transfer Family - Practice Questions|Transfer Family Practice Questions]]
