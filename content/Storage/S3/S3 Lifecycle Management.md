---
tags: [aws, sap-c02, storage, service]
---
# S3 Lifecycle Management

S3 Lifecycle configuration provides a way to manage your objects so that they are stored cost-effectively throughout their lifecycle. It allows you to automate transitions between storage classes and manage object expiration.

> [!info] 
> Lifecycle configuration enables moving less frequently accessed objects to lower-cost storage classes, archiving data for long-term retention, or permanently deleting objects.

## Key Concepts

- **Transitions**: Define when objects should transition to another storage class (e.g., from Standard to Standard-IA).
- **Expiration**: Define when objects expire. S3 deletes expired objects on your behalf.
- **Versioning**: Lifecycle rules apply to both versioned and non-versioned buckets.
    - **Non-versioned**: Periods are calculated from the object's creation date.
    - **Versioned**: Rules can apply to the current version and non-current versions separately. The period for non-current versions is calculated from when the object became non-current.

> [!important]
> S3 calculates time by adding the number of days to the object creation time and rounding to the next day midnight UTC.

## Lifecycle Transition Constraints

| From Storage Class | To Storage Class | Min Size | Min Days |
| ------------------ | ---------------- | -------- | -------- |
| STANDARD / INTELLIGENT_TIERING | STANDARD-IA / ONEZONE-IA | 128 KB | 30 Days |
| STANDARD-IA | ONEZONE-IA | 128 KB | 30 Days |
| Any Storage Class | GLACIER / DEEP_ARCHIVE | Any | Any* |
| GLACIER | DEEP_ARCHIVE | Any | Any* |

*\*Note: Early deletion fees apply if deleted before 90 days for Glacier or 180 days for Deep Archive.*

> [!exam]
> - Objects < 128 KB cannot be transitioned to STANDARD-IA or ONEZONE-IA.
> - Minimum 30-day stay in the current storage class is required before transitioning to IA classes.
> - **Direct PUT**: While Lifecycle rules are standard for tiering, you **can** upload objects directly to `GLACIER` or `DEEP_ARCHIVE` storage classes via the S3 API.
> - **One-way Transitions**: Lifecycle transitions are **one-way** (from warmer to colder). To "move" an object back to a warmer tier, you must restore it (for Glacier) or manually copy/overwrite the object.
> - Lifecycle configuration on MFA-enabled buckets is **not supported**.
> - Up to 1,000 lifecycle rules per bucket.

## Expiration Behavior

### Non-Versioned Buckets
- Objects reaching the expiration date are permanently deleted.

### Versioning-Enabled Buckets
- **Current Version Expiration**: S3 inserts a **Delete Marker**. The previous current version becomes a non-current version.
- **Non-current Version Expiration**: S3 permanently deletes the non-current versions.
- **Expired Object Delete Marker**: If the only version of an object is a delete marker, S3 can remove it to clean up the bucket.

## Architecture & Cost Optimization

- **Automation**: S3 handles all transitions automatically once configured.
- **Asynchronous Processing**: Transitions and expirations are performed asynchronously. There might be a delay, but you are not charged for storage once an object has expired.
- **Cost Benefits**: Use Lifecycle policies to move data to Glacier for long-term archival (replaces traditional tape backups).

## Related Services
- [[_Storage Index|Storage Index]]
- [[S3 Overview|S3]]
- [[S3 Storage Classes]]

---
**Practice:** [[S3 Lifecycle - Practice Questions|S3 Lifecycle Practice Questions]]