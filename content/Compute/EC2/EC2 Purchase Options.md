---
tags: ['aws', 'sap-c02', 'ec2']
---
# EC2 Purchase Options

AWS provides several purchasing options to optimize costs based on workload requirements, predictability, and flexibility.

## Purchase Model Comparison

| Option | Best For | Payment Model | Commitment |
| :--- | :--- | :--- | :--- |
| **On-Demand** | Spiky, unpredictable, or short-term workloads | Pay by second/hour | No commitment |
| **Reserved (RI)** | Steady-state, predictable usage | Discounted hourly rate | 1 or 3 years |
| **Savings Plans** | Consistent usage across EC2, Lambda, Fargate | Commit to $/hour | 1 or 3 years |
| **Spot** | Fault-tolerant, flexible, or stateless apps | Up to 90% discount | No commitment (can be interrupted) |
| **Dedicated Host** | Compliance, licensing (BYOL), visibility | Pay for physical server | Varies |
| **Dedicated Instance** | Hardware isolation requirements | Pay by instance | No commitment |

---
## Reserved Instances (RI)

> [!info] **RI Offering Classes**
> - **Standard**: Highest discount (up to 75%). Can be modified (AZ, size within family) but not exchanged.
> - **Convertible**: Lower discount (up to 54%). Can be exchanged for different instance families, OS, or tenancies.

### Payment Options
- **All Upfront**: Lowest total cost.
- **Partial Upfront**: Balance of upfront and discounted hourly rate.
- **No Upfront**: Discounted hourly rate with no initial cost (1-year term only).

---
## Spot Instances

> [!important] **Handling Interruptions**
> Spot instances can be interrupted by AWS with a **2-minute notification**. 
> - **Best Practice**: Use for stateless, fault-tolerant applications (e.g., batch processing, CI/CD, big data).
> - **Spot Fleet**: Automates the management of a group of Spot instances, attempting to maintain target capacity even if instances are reclaimed.

---
## Dedicated Hosts vs. Dedicated Instances

| Feature | Dedicated Instance | Dedicated Host |
| :--- | :--- | :--- |
| **Visibility** | No visibility into sockets/cores | Full visibility into sockets and physical cores |
| **Licensing** | Not suitable for per-core/per-socket licenses | **Primary use case for BYOL** (Windows Server, SQL Server) |
| **Placement Control** | Automatic placement | Manual control over instance placement on the host |
| **Tenancy** | Single-tenant hardware | Single-tenant physical server |

---
## Capacity Reservations

> [!info] **On-Demand Capacity Reservations**
> - Reserve compute capacity in a specific AZ for any duration.
> - No term commitment; bill starts when provisioned.
> - Can be combined with Regional RIs or Savings Plans for billing discounts.

---
### SAP-C02 Exam Scenarios

> [!exam] **Scenario: Regulatory Compliance / Licensing**
> A company needs to run a legacy application that requires a physical server license.
> - **Solution**: Use **Dedicated Hosts** to satisfy licensing requirements and gain visibility into physical cores.

> [!exam] **Scenario: Cost-Effective Batch Processing**
> A workload processes large volumes of data and can be restarted if interrupted.
> - **Solution**: Use **Spot Instances** with a **Spot Fleet** or **ASG with Spot** to minimize costs.

> [!exam] **Scenario: Consistent Global Load**
> A web application has a baseline of 10 instances running 24/7 globally.
> - **Solution**: Use **Compute Savings Plans** or **Regional Reserved Instances** for the baseline, and On-Demand for spikes.

---
## Related Links
- [[EC2 Overview]]
- [[EC2 Instance Types]]
- [[Auto Scaling Overview]]

---
**Practice:** [[EC2 Purchase - Practice Questions|EC2 Purchase Practice Questions]]