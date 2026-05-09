---
tags: [aws, sap-c02, migration]
---
# Migration Readiness Assessment (MRA)

The Migration Readiness Assessment (MRA) is a process of gaining an understanding of your current cloud readiness and identifying areas where you can improve to achieve your desired business outcomes.

> [!exam]
> For the SAP-C02 exam, understand the **6 R's** of migration:
> 1. **Rehost** (Lift & Shift): Move as-is (Fastest).
> 2. **Replatform** (Lift & Reshape): Small optimizations (e.g., move to RDS).
> 3. **Refactor / Re-architect**: Full cloud-native redesign.
> 4. **Repurchase**: Switch to a different product (e.g., SaaS).
> 5. **Retain**: Keep as-is on-premises.
> 6. **Retire**: Decommission.

## Migration Phases

### 1. Migration Preparation & Business Planning
- Develop a preliminary business case.
- Gain foundational experience with the cloud.
- Align stakeholders and define objectives.

### 2. Portfolio Discovery & Planning
- Use **AWS Application Discovery Service** to map the IT landscape.
- Categorize applications using the **6 R's** strategy.
- Prioritize applications for migration.

### 3. Application Design
- Design the target architecture in AWS for each application.
- Choose between cloud-native, serverless, or traditional EC2-based designs.

### 4. Migration & Validation
- Execute the migration using tools like **AWS MGN** or **AWS DMS**.
- Validate that the application meets performance and security requirements.

### 5. Modernize & Operate
- Move from traditional operations to a cloud-native operating model.
- Continue to optimize for cost and performance.

## Key Drivers for Migration
- **Operational Costs**: Reducing infrastructure spend.
- **Workforce Productivity**: Increasing the speed of feature delivery.
- **Operational Resilience**: Improving uptime and reducing risk.
- **Business Agility**: Faster time-to-market.

> [!info] Landing Zone
> As part of the Foundation phase, it is recommended to create a **Landing Zone** (using [[Control Tower]]) to ensure a secure, multi-account environment is ready for the incoming workloads.

![[migration-process-1024x387.png]]

---
**Practice:** [[Migration Readiness - Practice Questions|Migration Readiness Practice Questions]]