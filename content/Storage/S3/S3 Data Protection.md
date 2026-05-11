---
tags: [aws, sap-c02, storage, s3]
---
# S3 Data Protection

S3 is designed for 99.999999999% (11 9's) of durability by redundantly storing objects across multiple facilities within a region. However, durability doesn't protect against accidental deletion or corruption.

## 1. Resilience & Durability
- **Regional Replication**: S3 Standard, IA, and Glacier classes replicate data across at least 3 Availability Zones.
- **Integrity**: S3 uses checksums to detect data corruption during storage and transit.

## 2. Protecting Against Deletion

### S3 Versioning
- Keeps multiple versions of an object.
- **Delete Marker**: Deleting an object in a versioned bucket inserts a delete marker instead of permanently removing the data.
- **Recovery**: You can restore an older version by deleting the delete marker.

### MFA Delete
- Requires a hardware/virtual MFA code for:
    1. Permanently deleting an object version.
    2. Suspending or changing versioning on the bucket.
- > [!important]
  > Can only be enabled via the AWS CLI or SDK by the **Root User**.

### S3 Object Lock
- Provides WORM (Write Once, Read Many) protection.
- **Retention Period**: Specifies a fixed period.
- **Legal Hold**: Indefinite protection until explicitly removed.

---
## 3. Cross-Region & Same-Region Replication

### CRR (Cross-Region Replication)
- **Use Case**: Compliance, Disaster Recovery, Lower Latency for global users.
- **Feature**: Automatically and asynchronously copies objects to a bucket in a different region.

### SRR (Same-Region Replication)
- **Use Case**: Log aggregation, Syncing production and test accounts.
- **Feature**: Copies objects to a different bucket in the same region.

### S3 Batch Replication
- **Definition**: A mechanism to replicate objects that existed before a replication configuration was in place, or to re-replicate objects that previously failed.
- **Use Case**: Post-hoc DR setup, migrating existing data between buckets, or compliance remediation.
- **Integration**: Leverages **S3 Batch Operations** to handle the replication of millions (or billions) of objects.

> [!exam] Replication Rules
> - **Versioning** must be enabled on both source and destination buckets.
> - **Live Replication**: By default, CRR/SRR only copies NEW objects.
> - **Batch Replication**: Required for existing objects or objects that failed to replicate.
> - **Delete Markers**: Can optionally be replicated. Permanent version deletions are **NOT** replicated to prevent malicious deletes from propagating.

---
## SAP-C02 Trade-off Summary

| Goal | Mechanism |
| :--- | :--- |
| **Protect against ransomware** | Versioning + Object Lock (Compliance Mode). |
| **Protect against accidental Admin delete** | MFA Delete. |
| **Disaster Recovery (Region failure)** | Cross-Region Replication (CRR). |
| **Durability on a budget** | S3 One Zone-IA (only if data is reproducible). |

> [!info] 
> Remember that **S3 Intelligent-Tiering** also provides the same 11 9's durability as S3 Standard while optimizing for cost.

## Related Services
- [[_Storage Index|Storage Index]]
- [[S3 Overview|S3]]
- [[KMS]]
- [[Backup]]

---
**Practice:** [[S3 Data Protection - Practice Questions|S3 Data Protection Practice Questions]]