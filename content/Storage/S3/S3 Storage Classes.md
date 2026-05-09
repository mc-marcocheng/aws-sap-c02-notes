---
tags: ['aws', 'sap-c02', 's3']
---
# S3 Storage Classes

> [!info] Overview
> AWS S3 offers a range of storage classes to optimize for different access patterns and cost requirements. All classes (except One Zone-IA) are designed for **99.999999999% (11 9's)** of durability across multiple Availability Zones.

## Storage Classes Comparison

| Storage Class | Durability | Availability | AZs | Min Duration | Retrieval Fee | Use Case |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **S3 Standard** | 11 9's | 99.99% | ≥3 | None | None | Frequent, high-perf access |
| **S3 Intelligent-Tiering** | 11 9's | 99.9% | ≥3 | None | None | Unknown/changing patterns |
| **S3 Standard-IA** | 11 9's | 99.9% | ≥3 | 30 days | Per GB | Long-lived, infrequent |
| **S3 One Zone-IA** | 11 9's | 99.5% | **1** | 30 days | Per GB | Non-critical, reproducible |
| **S3 Glacier Instant** | 11 9's | 99.9% | ≥3 | 90 days | Per GB | Millisecond access archive |
| **S3 Glacier Flexible** | 11 9's | 99.99% | ≥3 | 90 days | Per GB | Archive (mins to hours) |
| **S3 Glacier Deep Archive**| 11 9's | 99.9% | ≥3 | 180 days | Per GB | 7-10 year preservation |

![[s3-storage-classes-performance.png]]

---
## S3 Standard (Default)
- **Use Case**: Performance-sensitive data, dynamic websites, content distribution.
- **Latency**: Millisecond access.
- **Resiliency**: Sustains loss of data in two facilities (entire AZs).

## S3 Intelligent-Tiering
- **Function**: Automatically moves objects between access tiers based on access patterns.
- **Tiers**: Frequent, Infrequent, Archive Instant (and optional Archive/Deep Archive).
- **Cost**: Monthly monitoring/automation fee per object. **No retrieval fees**.
- **Ideal For**: Long-lived data with unknown or unpredictable access patterns.

## S3 Standard-IA (Infrequent Access)
- **Use Case**: Backups, DR files, older data accessed occasionally.
- **Retrieval**: Millisecond access, but incurs a retrieval fee per GB.
- **Minimums**: 128 KB object size and 30-day storage duration.

## S3 One Zone-IA
- **Constraint**: Stores data in **only one AZ**.
- **Risk**: Data is lost if the AZ is destroyed (earthquake, flood).
- **Ideal For**: Secondary backup copies or data easily recreated.

---
## Archive Classes (S3 Glacier)

### S3 Glacier Instant Retrieval
- **Retrieval Time**: **Milliseconds** (same as Standard).
- **Ideal For**: Archives that need to be accessed quarterly but must be available instantly.

### S3 Glacier Flexible Retrieval
- **Retrieval Options**:
    - **Expedited**: 1-5 minutes.
    - **Standard**: 3-5 hours.
    - **Bulk**: 5-12 hours (Free).
- **Vault Lock**: Enforces WORM (Write Once Read Many) policies for compliance.

### S3 Glacier Deep Archive
- **Retrieval Time**: 12 hours (Standard) or 48 hours (Bulk).
- **Cost**: Lowest storage cost in AWS.
- **Ideal For**: Regulatory compliance (7-10 years) where data is rarely accessed.

---
## S3 Analytics & Lifecycle

### S3 Storage Class Analysis
- Analyzes storage access patterns to help you decide when to transition data to IA.
- Provides recommendations for lifecycle policies.

### Lifecycle Management
- **Transitions**: Moving objects between storage classes (e.g., Standard -> IA -> Glacier).
- **Expiration**: Automatically deleting objects after a certain period.

---
## SAP-C02 Exam Strategy

> [!exam]
> - **Cost Optimization**: If access patterns are **unpredictable**, use **S3 Intelligent-Tiering**.
> - **Compliance**: For legal/regulatory requirements with data that cannot be deleted, use **S3 Glacier with Vault Lock**.
> - **Performance**: All S3 storage classes (except Flexible/Deep Archive) provide **millisecond first-byte latency**.
> - **Min Storage Duration**: Remember the minimum durations (Standard-IA/One Zone-IA: 30 days, Glacier: 90 days, Deep Archive: 180 days). Deleting before this earns a pro-rated charge.

---
**References:**
- [[S3 Overview]]
- [[S3 Lifecycle Management]]
- [[S3 Data Protection]]

---
**Practice:** [[S3 Storage Classes - Practice Questions|S3 Storage Classes Practice Questions]]