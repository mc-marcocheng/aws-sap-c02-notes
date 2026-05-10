---
tags: [compute, aws, sap-c02, outposts]
---
# AWS Outposts

AWS Outposts brings native AWS services, infrastructure, and operating models to virtually any data center, co-location space, or on-premises facility. It is ideal for workloads requiring low latency access to on-premises systems, local data processing, or strict data residency requirements.

## Architecture & Connectivity
- **Physical Rack:** Managed by AWS, delivered to your data center. Connected to the nearest AWS Region.
- **Service Link:** A required connection between the Outpost and its parent AWS Region (via Direct Connect or Site-to-Site VPN). AWS uses this to manage the infrastructure.
- **Local Gateway (LGW):** Allows Outposts to communicate directly with your on-premises network and the internet, minimizing latency.
- **Supported Services:** EC2, EBS, S3 (Outposts storage classes), RDS, ElastiCache, EKS, ECS, and EMR.

## High Availability
- Outposts relies on the parent region for control plane operations. If the service link is disconnected, running instances continue to run, but you cannot launch new instances or use services relying on the control plane.
- For HA, deploy multiple Outposts racks (potentially connected to different AZs in the parent region).

> [!exam]
> Whenever a scenario mentions "ultra-low latency to on-premises machinery/factory equipment" or "data must remain on-premises due to legal compliance," the answer is almost always **AWS Outposts**. Use the **Local Gateway** to route traffic directly to local networks without traversing the AWS Region.

## Related Services
- [[_Compute Index|Compute Index]]
- [[EC2 Overview|EC2]]
- [[Lambda]]
- [[VPC Overview|VPC]]

---
**Practice:** [[Outposts - Practice Questions|Outposts Practice Questions]]