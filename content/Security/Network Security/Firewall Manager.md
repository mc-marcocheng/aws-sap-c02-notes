---
tags: [aws, sap-c02, firewall-manager, security]
---
# AWS Firewall Manager

AWS Firewall Manager is a security management service that allows you to centrally configure and manage firewall rules across your accounts and applications in [[Organizations Overview|AWS Organizations]].

## Architectural Patterns & Key Facts
- **Prerequisites:** 
  1. Must use [[Organizations Overview|AWS Organizations]] with all features enabled.
  2. Must configure [[Config]] across all accounts.
  3. Must designate a delegated administrator account.
- **Supported Protections:**
  - **AWS [[WAF]]:** Centrally deploy WAF rules to Application Load Balancers, API Gateways, and CloudFront distributions.
  - **AWS [[Shield]] Advanced:** Centrally manage DDoS protection.
  - **Security Groups:** Centrally manage EC2 and ENI security groups (e.g., enforce a baseline security group, audit for overly permissive rules like port 22 open to the world).
  - **AWS [[Network Firewall]]:** Centrally deploy Network Firewalls and routing across VPCs.
  - **Amazon [[Route 53 Resolver]] DNS Firewall:** Manage DNS firewall rules.
- **Auto-Remediation & Enforcement:** Automatically applies rules to new resources as they are created. It can also auto-remediate non-compliant resources (e.g., removing a non-compliant security group rule).

> [!exam] SAP-C02 Exam Tip
> **Centralized Enforcement = Firewall Manager**.
> If a question asks how to "ensure all Application Load Balancers across 50 accounts have a specific WAF WebACL applied" or how to "prevent developers in any account from opening SSH (port 22) to `0.0.0.0/0`", the answer involves **AWS Firewall Manager** security policies.
> Do not confuse Firewall Manager (which *manages* firewalls) with Network Firewall (which *is* a firewall for VPCs).

## Related Services
- [[_Security Index|Security Index]]
- [[WAF]]
- [[Shield]]
- [[Network Firewall]]
- [[Organizations Overview]]

---
**Practice:** [[Firewall Manager - Practice Questions|Firewall Manager Practice Questions]]