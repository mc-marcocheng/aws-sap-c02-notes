---
tags: [aws, sap-c02, fsx, practice-questions]
---
# Amazon FSx - Practice Questions

> [!question] Question 1
> A media and entertainment company uses a large on-premises NetApp storage array for rendering workloads. They want to burst their rendering capacity into AWS during peak times. The rendering fleet in AWS consists of hundreds of Amazon EC2 Linux instances that need to access the data via NFS, while artists on-premises use Windows workstations via SMB. Both Linux instances and Windows workstations must access the same exact dataset simultaneously. Which AWS storage solution is most appropriate?
> 
> 1. Amazon FSx for Windows File Server with an AWS Storage Gateway.
> 2. Amazon EFS accessed by Linux instances and Amazon EC2 Windows instances acting as SMB gateways.
> 3. Amazon FSx for NetApp ONTAP.
> 4. Amazon S3 with an S3 File Gateway deployed on-premises.
>
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** 
> > - A is incorrect because FSx for Windows File Server primarily targets SMB workloads and does not provide native, high-performance NFS access for Linux compute clusters simultaneously with SMB.
> > - B is incorrect because managing EC2 Windows instances as SMB gateways adds significant administrative overhead and performance bottlenecks.
> > - C is correct because [[Amazon FSx#Amazon FSx for NetApp ONTAP]] natively supports multi-protocol access, allowing NFS (for Linux EC2 instances) and SMB (for Windows workstations) to access the same dataset concurrently. It is also fully managed and integrates well with existing NetApp workflows.
> > - D is incorrect because S3 File Gateway provides asynchronous caching and is not designed for simultaneous, high-performance, POSIX-compliant multi-protocol file locking and rendering workloads required in this scenario.

> [!question] Question 2
> A large healthcare organization is migrating hundreds of TBs of Windows file shares to AWS. These shares use complex NTFS permissions and are accessed by thousands of users across multiple departments. The organization requires a highly available solution that can span across Availability Zones. They also want to minimize storage costs by automatically deduplicating redundant files. Which solution should the Solutions Architect recommend?
> 
> 1. Amazon EC2 instances running Windows Server in an Auto Scaling group with EBS volumes attached.
> 2. Amazon FSx for Windows File Server deployed in a Multi-AZ configuration with Data Deduplication enabled.
> 3. Amazon FSx for NetApp ONTAP in a Single-AZ deployment.
> 4. Amazon S3 integrated with AWS Transfer Family using the SMB protocol.
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:**
> > - A is incorrect because managing EC2 instances with EBS for file sharing is not a fully managed solution, does not natively span AZs for HA file sharing without complex clustering (like WSFC), and adds immense administrative overhead.
> > - B is correct because [[Amazon FSx#Amazon FSx for Windows File Server]] is fully managed, natively supports Windows NTFS permissions, offers Multi-AZ deployments for high availability, and includes built-in Data Deduplication to optimize storage costs.
> > - C is incorrect because while it supports SMB, FSx for Windows File Server is the most direct, native path for pure Windows file share migrations with complex NTFS requirements, and the option specifies Single-AZ, which does not meet the HA requirement.
> > - D is incorrect because AWS Transfer Family does not support the SMB protocol (it supports SFTP, FTPS, and FTP).