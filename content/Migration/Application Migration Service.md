---
tags: [aws, sap-c02, migration, mgn]
---
# Application Migration Service (MGN)

AWS Application Migration Service (AWS MGN) is the primary service for highly automated lift-and-shift (rehost) migrations to AWS. It replaces Server Migration Service (SMS) and CloudEndure.

## Core Concepts
- **Rehost Strategy**: Moves applications from physical infrastructure, VMware, Hyper-V, Azure, or GCP to AWS without making changes.
- **Continuous Replication**: Uses a replication agent on the source servers to continuously replicate data at the block level to an underlying AWS staging area.
- **Cutover**: Allows for non-disruptive testing before a final, minimal-downtime cutover window.

> [!exam]
> When the scenario mentions a **lift-and-shift** migration of a large fleet of on-premises servers with minimal downtime, **AWS MGN** is the primary choice.

## Related Services
- [[_Migration Index|Migration Index]]
- [[Cloud Migration Strategies]]
- [[DMS]]

---
**Practice:** [[Application Migration Service - Practice Questions|Application Migration Service Practice Questions]]
