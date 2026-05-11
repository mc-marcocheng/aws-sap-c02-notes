---
tags: [aws, sap-c02, database, aurora]
---
# Aurora Serverless

Amazon [[Aurora Serverless]] is an on-demand, auto-scaling configuration for [[Aurora Overview|Aurora]]. It automatically starts up, shuts down, and scales capacity based on application needs, providing a cost-effective solution for intermittent or unpredictable workloads.

> [!important]
> - **Scaling**: Scales capacity in **Aurora Capacity Units (ACUs)**.
> - **Cost**: You pay for the ACUs used per second and the underlying database storage.
> - **Pause/Resume**: Can scale down to **zero ACUs** when inactive, incurring only storage costs.

## Architecture

![[aurora-serverless-arch.png]]

- **Separation of Compute and Storage**: Compute is separate from the storage volume. Storage remains spread across 3 AZs (6 copies) regardless of compute status.
- **Proxy Fleet**: Database endpoints connect to a proxy fleet that routes traffic to a fleet of resources that scale automatically.
- **VPC Access**: Aurora Serverless does not have a public IP and must be accessed from within a [[VPC Overview|VPC]].

## Scaling Mechanism

- **ACUs**: Each ACU is a combination of processing (CPU) and memory capacity. You define a **Minimum ACU** and **Maximum ACU**.
- **Scaling Points**: Aurora Serverless scales by finding a "scaling point"—a point in time where no long-running queries, transactions, or table locks are active.
- **Cooldown Periods**:
    - **Scale-down**: 15 minutes after a scale-up; 310 seconds after a scale-down.
    - **Scale-up**: No cooldown period; scales as soon as needed.

> [!info]
> If a scaling point isn't found, the operation may time out unless "Force capacity change" is enabled (though this can drop connections).

## Use Cases
- **Infrequently Used Applications**: Sites that are only active during business hours.
- **New Applications**: When capacity requirements are unknown.
- **Development/Test**: To avoid paying for idle database time.
- **Variable Workloads**: Applications with sudden, unpredictable spikes in traffic.

## High Availability and Failover

- **Single AZ Compute**: The compute instance resides in a single AZ.
- **Automatic Failover**: If an AZ failure occurs, Aurora Serverless recreates the instance in a different AZ.
- **Failover Time**: Generally slower than Aurora Provisioned (which has hot replicas).

## Aurora Serverless v1 vs v2

| Feature | Serverless v1 | Serverless v2 |
| --- | --- | --- |
| **Scaling Increment** | Doubling capacity | **0.5 ACU** increments |
| **Scaling Speed** | Seconds to minutes (needs scaling point) | **Instant** (scales within the instance) |
| **Min/Max Capacity** | 1 - 256 ACUs | **0.5** - 128 ACUs |
| **Read Replicas** | Not supported | **Supported** (including Multi-AZ) |
| **Use Case** | Infrequent/predictable workloads | Most production workloads, high-scale |

### Serverless v2 Key Details
- **Instant Scaling**: Scales capacity within the same instance, avoiding the proxy delay and "scaling point" requirement of v1.
- **High Availability**: Supports Multi-AZ deployments and Aurora Replicas for faster failover.
- **Granularity**: Scales in 0.5 ACU increments for better cost optimization.

> [!exam]
> - **Scaling to Zero**: Unique to Aurora Serverless v1 (v2 scales to 0.5 ACU min but not zero).
> - **Scaling Points**: Scaling in v1 can be blocked by long-running queries or table locks.
> - **v2 Replication**: Unlike v1, v2 supports read replicas and can be part of a Global Database.

## Related Services
- [[_Database Index|Database Index]]
- [[Aurora Overview]]
- [[RDS Proxy]]

---
**Practice:** [[Aurora - Practice Questions|Aurora Practice Questions]]