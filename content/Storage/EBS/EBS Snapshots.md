---
tags: [aws, sap-c02, ebs]
---
# EBS Snapshots

EBS Snapshots are point-in-time, incremental backups of EBS volumes stored in Amazon S3.

## 1. Key Concepts
- **Incremental**: Only the blocks that have changed since the last snapshot are stored. This reduces storage costs and snapshot time.
- **Regional**: Snapshots are constrained to the region where they were created.
- **Storage**: Snapshots are stored in S3 (11 9's durability) but are managed via the EC2/EBS APIs.

## 2. Snapshot Lifecycle Management

### Creation
- **Asynchronous**: You can continue using the volume while the snapshot is in progress.
- **Consistency**: To ensure a consistent snapshot, it is best practice to:
    1. **Freeze I/O** (at the OS or application level).
    2. **Unmount** the volume.
    3. **Stop** the instance (most reliable for root volumes).
- **Multi-Volume Snapshots**: Allows taking crash-consistent snapshots across multiple volumes attached to an instance.

### Copying & Sharing
- **Copying**: Snapshots can be copied across regions for Disaster Recovery. The first copy is a full copy; subsequent copies are incremental.
- **Sharing**: You can share snapshots with other AWS accounts or make them public (unencrypted only).

---
## 3. Encryption
- **Encrypted Volumes**: Snapshots of encrypted volumes are automatically encrypted using the same KMS key.
- **Encrypted Snapshots**: Volumes created from encrypted snapshots are automatically encrypted.
- **Re-encryption**: You can change the KMS key during the snapshot copy process.

> [!exam] Sharing Encrypted Snapshots
> To share an encrypted snapshot, you must share the **KMS Key** used to encrypt it with the target account. You cannot share snapshots encrypted with the default AWS-managed KMS key.

---
## 4. Performance Features

### Fast Snapshot Restore (FSR)
- Eliminates the "pre-warming" requirement (latency on first read).
- Instantly provides full performance for volumes created from snapshots.
- Charged per Hour / Availability Zone.

### Amazon Data Lifecycle Manager (DLM)
- Automates the creation, retention, and deletion of EBS snapshots and EBS-backed AMIs.

---
## SAP-C02 Strategic Scenarios

| Scenario | Recommendation |
| :--- | :--- |
| **Region-wide Disaster Recovery** | Schedule snapshots using **DLM** and enable **Cross-Region Copy**. |
| **Migrate Volume to different AZ** | Take a **Snapshot** and create a new volume from it in the target AZ. |
| **Share data securely with another account** | Share the snapshot + the **KMS Customer Managed Key (CMK)**. |
| **Recover a single file** | Create a volume from a snapshot, mount it, and copy the file. |

> [!important]
> Deleting a snapshot only removes the data unique to that snapshot. Blocks used by subsequent incremental snapshots are retained.

---
**Practice:** [[EBS Snapshots - Practice Questions|EBS Snapshots Practice Questions]]