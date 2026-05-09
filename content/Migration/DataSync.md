---
tags: [aws, sap-c02, datasync]
---
# AWS DataSync

AWS DataSync is an online data transfer service that simplifies, automates, and accelerates moving data between on-premises storage systems and AWS storage services, as well as between AWS storage services.

## Key Features
- **Supported Sources/Destinations:** NFS, SMB, HDFS, S3, EFS, FSx (Windows, Lustre, OpenZFS, NetApp ONTAP).
- **Architecture:** Requires a DataSync Agent deployed on-premises (VMware, Hyper-V, KVM) to access local storage. No agent needed for AWS-to-AWS transfers.
- **Performance:** Multi-threaded, optimized custom protocol. Built-in scheduling, bandwidth throttling, and data validation (checksums).

## Security & Architecture Patterns
- Data transfer occurs over the internet (encrypted via TLS) or via **AWS Direct Connect** or **VPN**.
- For private transfers without internet access, DataSync agents can use **VPC Endpoints** to communicate securely with the DataSync service.

> [!exam]
> DataSync is ideal for migrating active datasets, replicating data for disaster recovery, or transferring data for processing. Use AWS Snowball Edge for massive offline transfers, and DataSync for ongoing online replication or incremental transfers over VPN/Direct Connect.

---
**Practice:** [[DataSync - Practice Questions|DataSync Practice Questions]]