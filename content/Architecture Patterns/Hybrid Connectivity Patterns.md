---
tags: [aws, sap-c02, architecture, networking]
---
# Hybrid Connectivity Patterns

Connecting on-premises environments to AWS securely and reliably.

## Redundancy and Failover
1. **DX with VPN Backup**: Cost-effective. VPN over the internet acts as a backup to a Direct Connect circuit. BGP path manipulation (AS_PATH prepending) ensures DX is preferred.
2. **Dual DX**: High availability. Two connections at different DX locations.
3. **DX with SiteLink**: If an enterprise has multiple branches connected to AWS DX, AWS SiteLink allows them to route traffic between branches over the AWS backbone.

## Scale
- **Direct Connect Gateway**: Connect a single DX to multiple VPCs across different regions.
- **Transit Gateway**: Hub-and-spoke model. Terminate DX and VPNs on the TGW to connect on-premises to thousands of VPCs seamlessly.

## Related Notes
- [[Direct Connect Overview]]
- [[VPN]]
- [[Transit Gateway]]
