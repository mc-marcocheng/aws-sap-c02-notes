---
tags: [aws, sap-c02, architecture, organizations]
---
# Multi-Account Strategy

A foundational topic for SAP-C02. AWS recommends a multi-account strategy using [[Organizations Overview|AWS Organizations]] and [[Control Tower]] to isolate workloads, manage billing, and enforce security policies.

## Recommended OU Structure
- **Security OU**: Centralized logging (CloudTrail, VPC Flow Logs to S3) and security tooling (Security Hub, GuardDuty).
- **Infrastructure OU**: Shared networking services (Transit Gateway, Route 53 Resolver, Shared VPCs).
- **Workloads OU**: Application-specific accounts (Dev, Test, Prod).
- **Sandbox OU**: Isolated accounts for developer experimentation.

## Best Practices
- **SCPs**: Apply Service Control Policies at the OU level to restrict actions (e.g., deny disabling CloudTrail, restrict regions).
- **Federation**: Use [[IAM Identity Center]] for centralized SSO access.
- **Cost Allocation**: Use Consolidated Billing and Cost Allocation Tags.

## Related Notes
- [[Organizations Advanced]]
- [[Control Tower]]
- [[Centralized Egress & Inspection]]
