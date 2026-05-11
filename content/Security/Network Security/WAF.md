---
tags: [aws, sap-c02, waf, security]
---
# AWS Web Application Firewall (WAF)

AWS WAF is a web application firewall that helps protect your web applications or APIs against common web exploits and bots that may affect availability, compromise security, or consume excessive resources.

## Key Features
- **Integration**: Tightly integrates with **[[CloudFront Overview|CloudFront]]**, **[[ALB Overview|ALB]]**, **[[API Gateway]]**, and **AWS [[AppSync]]**.
- **Managed Rules**: Pre-configured rules provided by AWS and Marketplace sellers (e.g., OWASP Top 10, IP reputation lists). **AWS WAF Bot Control** provides managed protection against common and pervasive bots.
- **Custom Rules**: Define rules based on IP addresses, HTTP headers, HTTP body, URI strings, SQL injection, and XSS.
    - **Scope-down Statements**: Use scope-down statements to narrow the scope of a rule (e.g., apply a rule only to specific paths or if another condition is met).
- **Actions**: `Allow`, `Block`, `Count` (Monitor), `CAPTCHA`, and `Challenge`.

## Deployment Models
- **At the Edge**: Deployed with **[[CloudFront Overview|CloudFront]]** to block requests at edge locations, before they reach your origin.
- **Regional**: Deployed with **[[ALB Overview|ALB]]** or **[[API Gateway]]** to protect regional resources.

![[how-waf-works.png]]

### Dynamic Updates with Lambda
WAF can be updated dynamically using **[[CloudWatch Logs]]**, **S3**, and **[[Lambda|AWS Lambda]]**.
1. CloudFront/ALB sends logs to S3.
2. Lambda parses logs for malicious patterns (e.g., high error rates from specific IPs).
3. Lambda updates the WAF Web ACL to block those IPs.

## Rate-Based Rules
Rate-based rules track the number of requests from each originating IP address and trigger an action when the number of requests exceeds a threshold. This is critical for mitigating **HTTP Flood DDoS attacks**.

---
### Comparison: Security Groups vs. NACLs vs. WAF

| Feature | Security Groups | NACLs | AWS WAF |
| --- | --- | --- | --- |
| **Layer** | 4 (TCP/UDP) | 4 (TCP/UDP) | 7 (HTTP/HTTPS) |
| **State** | Stateful | Stateless | Stateful (Inspection) |
| **Scope** | Instance Level | Subnet Level | Resource Level (ALB/CF) |
| **Capabilities** | Allow only | Allow and Deny | Deep Packet Inspection |

> [!exam]
> For SAP-C02, use WAF for:
> - SQL Injection / XSS protection.
> - Blocking specific countries (Geo-match).
> - Rate-limiting per IP.
> - Managed rules for common vulnerabilities.

## Related Services
- [[_Security Index|Security Index]]
- [[CloudFront Overview]]
- [[ALB Overview]]
- [[API Gateway]]
- [[AppSync]]

---
**Practice:** [[WAF - Practice Questions|WAF Practice Questions]]