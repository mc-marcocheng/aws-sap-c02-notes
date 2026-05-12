---
tags: [aws, sap-c02, transfer-family, storage, practice-questions]
---
# Transfer Family Practice Questions

> [!question]
> A solutions architect must provide a fully managed replacement for an on-premises solution that allows employees and partners to exchange files. The solution must be easily accessible to employees connecting from on-premises systems, remote employees, and external partners. Which solution meets these requirements?
> 1. Use AWS Transfer for SFTP to transfer files into and out of Amazon S3.
> 2. Use AWS Snowball Edge for local storage and large-scale data transfers.
> 3. Use Amazon FSx to store and transfer files to make them available remotely.
> 4. Use AWS Storage Gateway to create a volume gateway to store and transfer files to Amazon S3.
>
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:**
> > - [[Transfer Family|AWS Transfer Family]] provides a fully managed, highly available SFTP, FTPS, and FTP service.
> > - It allows users to securely exchange files with [[S3 Overview|Amazon S3]] or [[EFS|Amazon EFS]] without managing infrastructure.
> > - [[Snow Family|AWS Snowball Edge]] (Option 2) is for physical data migration, not ongoing file exchange.
> > - [[FSx|Amazon FSx]] (Option 3) doesn't natively provide a managed SFTP interface for external partners.
> > - [[Storage Gateway|AWS Storage Gateway]] (Option 4) is for on-premises hybrid storage, not external partner file exchange.

> [!question]
> A financial services company has hundreds of external partners that upload daily transaction files via SFTP to an on-premises server. The company is migrating to AWS and wants to maintain the same SFTP workflow for partners while adding the ability to automatically process files upon arrival. Partners authenticate using SSH keys, and each partner must only access their own directory. Which architecture meets these requirements?
> 1. Deploy an EC2 instance running OpenSSH with a chroot jail configuration. Use S3 as a mounted file system via s3fs. Trigger Lambda via CloudWatch Events on a schedule to process files.
> 2. Configure AWS Transfer Family with an SFTP endpoint backed by Amazon S3. Use a custom identity provider via API Gateway and Lambda for SSH key authentication and directory scoping. Configure S3 Event Notifications to trigger a processing Lambda function.
> 3. Configure AWS Transfer Family with an SFTP endpoint backed by Amazon EFS. Use the service-managed identity provider with SSH keys. Configure EventBridge rules to detect new files.
> 4. Deploy AWS DataSync agents at each partner location. Configure DataSync tasks to transfer files to S3 on a schedule.
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[Transfer Family|AWS Transfer Family]] supports SFTP with [[S3 Overview|Amazon S3]] as the backend storage. A **custom identity provider** (via [[API Gateway|API Gateway]] + [[Lambda]]) enables per-partner SSH key authentication and logical home directory scoping (restricting each partner to their own S3 prefix). [[S3 Overview|S3 Event Notifications]] can trigger a Lambda function to process files immediately upon upload. Option 1 requires managing infrastructure. Option 3 uses service-managed identity, which works but S3 event notifications are simpler for triggering processing than EventBridge for this use case. Option 4 (DataSync) requires agents at partner sites, which is impractical for hundreds of external partners.

> [!question]
> A company using AWS Transfer Family with an SFTP endpoint notices that their endpoint's Elastic IP addresses are being blocked by some partner firewalls during IP rotation events. The security team also wants to restrict SFTP access to only known partner IP ranges. What should the solutions architect implement?
> 1. Deploy the Transfer Family server with a VPC-hosted endpoint type. Attach Elastic IP addresses to the endpoint and use Security Groups to restrict access to partner IP ranges.
> 2. Place an Application Load Balancer in front of the Transfer Family endpoint and use ALB security groups to filter traffic.
> 3. Configure AWS WAF with an IP match condition and associate it with the Transfer Family endpoint.
> 4. Use a PUBLIC endpoint type and configure Transfer Family's built-in IP allowlisting feature.
>
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** [[Transfer Family|AWS Transfer Family]] supports **VPC-hosted endpoints** which allow attaching static Elastic IPs (preventing IP rotation) and associating [[Security Groups vs NACLs#Security Groups (SG)|Security Groups]] for IP-based access control. ALB (Option 2) cannot proxy SFTP traffic (it's Layer 7 HTTP/HTTPS only). WAF (Option 3) cannot be attached to Transfer Family endpoints. PUBLIC endpoints (Option 4) don't support Security Groups or static IPs that prevent rotation.
