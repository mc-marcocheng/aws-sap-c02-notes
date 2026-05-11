---
tags: [aws, sap-c02, architecture, resilience]
---
# Multi-Region Active-Active

The most robust and expensive architecture for extreme disaster recovery and global low-latency requirements.

## Core Services
- **Database**: [[DynamoDB Advanced Features|DynamoDB Global Tables]] or [[Aurora Overview|Aurora Global Database]] for cross-region replication.
- **Routing**: [[Global Accelerator]] for static Anycast IPs and TCP/UDP routing, or [[Route 53 Overview|Route 53]] with Latency or Geolocation routing.
- **Compute**: Stateless compute tiers in both regions (Auto Scaling EC2, ECS, or Lambda).

## Challenges
- **Data Conflict Resolution**: DynamoDB Global Tables uses "last writer wins". Active-Active RDBMS requires careful application sharding.
- **Latency**: Applications must be designed to tolerate the speed of light replication lag between regions.

## Related Notes
- [[DR Strategies Overview]]
