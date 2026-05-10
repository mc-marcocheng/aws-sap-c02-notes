---
tags: [compute, aws, sap-c02, ec2, auto-scaling, elb]
---
# Auto Scaling with ELB

Auto Scaling with [[ELB Overview|Elastic Load Balancing]] makes it easy to route traffic across a dynamically changing fleet of [[EC2 Overview|EC2]] instances. The load balancer acts as a single point of contact for all incoming traffic to the instances in an [[Auto Scaling Overview|Auto Scaling]] group.

## Overview
- **Auto Scaling**: Dynamically adds and removes [[EC2 Overview|EC2]] instances.
- **Elastic Load Balancing**: Manages incoming requests by optimally routing traffic so that no one instance is overwhelmed.
- **Integration**: Auto Scaling helps to automatically increase/decrease the number of instances when demand changes, while ELB distributes the incoming web traffic among all running instances.

![[elb-autoscaling-integration.png]]

## Attaching/Detaching ELB with Auto Scaling Group
- Auto Scaling enables attaching one or more load balancers to an existing Auto Scaling group.
- ELB registers the EC2 instance using its IP address and routes requests to the primary IP address of the primary interface (eth0).
- **Registration**: After attachment, ELB automatically registers the instances in the group.
- **Deregistration**: When ELB is detached, it enters the `Removing` state.
- **Connection Draining**: If enabled, ELB waits for in-flight requests to complete before deregistering. Instances remain running after deregistration.
- **Suspension**: If the `AddToLoadBalancer` process is suspended, instances launched during that period are not added to the load balancer and must be registered manually.

## High Availability & Redundant
- Auto Scaling can span across multiple [[VPC Overview|Availability Zones]] (AZs) within a region.
- If an AZ becomes unhealthy, Auto Scaling launches new instances in an unaffected AZ.
- ELB can distribute requests across instances in a single or multiple AZs.
- Spanning Auto Scaling groups across multiple AZs and using ELB provides geographic redundancy.

## Health Checks
- **EC2 Health Checks**: Auto Scaling checks EC2 instance status by default.
- **ELB Health Checks**: ELB performs its own health checks (e.g., pinging a health check page).
- **Integration**: Auto Scaling, by default, does not replace instances failing ELB health checks. You must configure the Auto Scaling group to use ELB health check results to determine instance health.

## Monitoring
- ELB sends data about load balancers and instances to [[CloudWatch Overview|CloudWatch]].
- Auto Scaling groups can be configured to use ELB metrics (like request latency or count) to scale the application automatically.

## Related Services
- [[_Compute Index|Compute Index]]
- [[EC2 Overview|EC2]]
- [[Lambda]]
- [[VPC Overview|VPC]]

---
**Practice:** [[Auto Scaling with ELB - Practice Questions|Auto Scaling with ELB Practice Questions]]