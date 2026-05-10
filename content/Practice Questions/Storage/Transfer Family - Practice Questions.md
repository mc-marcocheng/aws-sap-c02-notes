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
> > - [[Transfer Family|AWS Transfer Family]] (formerly AWS Transfer for SFTP) provides a fully managed, highly available, and scalable SFTP, FTPS, and FTP service.
> > - It allows users to securely exchange files with [[S3 Overview|Amazon S3]] or [[EFS|Amazon EFS]] without needing to manage infrastructure.
> > - It is ideal for external partners and remote employees as it uses standard protocols that are widely supported.
> > - (2) [[Snow Family|AWS Snowball Edge]] is for physical data migration or edge computing, not for ongoing file exchange.
> > - (3) [[FSx for Lustre|Amazon FSx]] is a file system service, but it doesn't natively provide the managed SFTP interface needed for external partner exchange as easily as Transfer Family.
> > - (4) [[Storage Gateway|AWS Storage Gateway]] (Volume Gateway) is designed to provide on-premises applications with low-latency access to data in AWS, but it's not the primary tool for "exchanging files" with external partners via standard protocols.
