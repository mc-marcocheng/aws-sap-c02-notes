---
tags: [aws, sap-c02, ec2, compute, practice-questions]
---
# EC2 Practice Questions

> [!question]
> A company is migrating a high-performance database to AWS that requires the absolute lowest possible inter-node latency for a cluster of 10 nodes. The nodes must also be protected against a single rack failure within the AWS data center. Which placement strategy should the solutions architect recommend?
> 1. Launch the instances in a Cluster Placement Group within a single Availability Zone.
> 2. Launch the instances in a Partition Placement Group with 10 partitions.
> 3. Launch the instances in a Spread Placement Group across multiple Availability Zones.
> 4. Launch the instances in a Cluster Placement Group and use Dedicated Hosts.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** While **Cluster Placement Groups** (Option 1) provide the lowest latency, they do not provide rack-level isolation within a single AZ. **Partition Placement Groups** (Option 2) divide the group into logical segments called partitions, ensuring that instances in one partition do not share racks with instances in other partitions, thus providing a balance between low latency and rack-level fault tolerance. **Spread Placement Groups** (Option 3) provide the highest isolation but at the cost of higher latency. (See [[Placement Groups]])

> [!question]
> An e-commerce company has a fleet of EC2 instances that process batch jobs intermittently. The startup time for the application is over 15 minutes due to large data caches being loaded into memory. The company wants to minimize costs when the instances are not in use but needs the application to be ready to process jobs within seconds when restarted. Which feature should be used?
> 1. EC2 Stop and Start
> 2. EC2 Hibernation
> 3. EC2 Auto Scaling with Warm Pools
> 4. EC2 Instance Store
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** **EC2 Hibernation** saves the contents from the instance RAM to the Amazon EBS root volume. When you start the instance, the RAM contents are reloaded, allowing the application to resume where it left off without the 15-minute cache load time. Stop/Start (Option 1) clears the RAM. Warm Pools (Option 3) keep instances in a stopped or hibernated state but are more complex for single instance management. (See [[EC2 Overview]])

> [!question]
> A solutions architect is troubleshooting a performance issue on a fleet of T3 instances. The application experiences sporadic latency spikes during peak hours. Upon inspection, the `CPUCreditBalance` metric is near zero. What is the MOST cost-effective way to ensure consistent performance without changing the instance family?
> 1. Change the instances to Unlimited mode.
> 2. Switch to T3a instances which are 10% cheaper.
> 3. Upgrade the instances to a larger size (e.g., t3.medium to t3.large).
> 4. Purchase Reserved Instances to increase the CPU credit accrual rate.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** **Unlimited mode** allows T3 instances to burst above their baseline for as long as needed, incurring a surcharge for "surplus credits" if the balance is exhausted. This is often more cost-effective than over-provisioning with larger instances (Option 3) for workloads that only burst occasionally. T3a (Option 2) doesn't solve the credit exhaustion. RIs (Option 4) do not affect credit accrual rates. (See [[EC2 Instance Types|EC2 Types]])
