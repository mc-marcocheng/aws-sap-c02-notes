---
tags: [aws, sap-c02, storage, aws-backup]
---
# AWS Backup

AWS Backup is a fully managed, centralized backup service that makes it easy to automate and centrally manage data backups across AWS services.

## Key Features
- **Centralized Management:** Manage backups for [[EC2 Overview|EC2]], [[EBS Overview|EBS]], [[RDS Overview|RDS]], [[DynamoDB Overview|DynamoDB]], [[EFS]], [[FSx]], [[Storage Gateway]], and more.
- **Backup Plans:** Define policies (frequency, retention window, lifecycle to cold storage).
- **Cross-Region and Cross-Account:** Automate copying of backups across AWS regions and accounts (using AWS Organizations).
- **AWS Backup Vault Lock:** Prevents deletion of backups (WORM model). Once locked in **compliance mode**, the lock policy CANNOT be changed or deleted — even by root. Test your policy in **governance mode** first.
- **Backup Audit Manager:** Generates audit reports proving backup compliance (e.g., "all RDS instances backed up in the last 24 hours").
- **Legal Hold:** Prevents backup deletion during investigations, even if the retention period expires.

## Multi-Account & Multi-Region Strategies
- Use **AWS Organizations** to deploy central backup policies across all accounts.
- Cross-account backups require a centralized Backup Vault in a dedicated "Security/Backup" account and appropriate KMS key sharing (CMKs) to encrypt backups.

> [!exam]
> For cross-account backup copies, both the source and destination KMS keys must be Customer Managed Keys (CMKs). AWS Managed Keys cannot be shared across accounts!

## Related Services
- [[_Storage Index|Storage Index]]
- [[Storage Gateway]]
- [[EBS Overview|EBS]]
- [[EFS]]
- [[FSx]]

---
**Practice:** [[Backup - Practice Questions|AWS Backup Practice Questions]]