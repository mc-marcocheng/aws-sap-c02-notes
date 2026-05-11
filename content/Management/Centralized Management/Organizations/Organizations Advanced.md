---
tags: [aws, sap-c02, management, organizations, advanced]
---
# AWS Organizations (Professional Deep Dive)

While the basics of AWS Organizations cover consolidated billing and simple Service Control Policies (SCPs), the SAP-C02 exam demands a deep understanding of advanced governance, multi-account strategies, and integration with other AWS services.

## Advanced SCP Strategies

SCPs are JSON policies that define the maximum permissions for member accounts. 
- **Deny-List Strategy**: The default configuration. `FullAWSAccess` is attached everywhere. You apply explicit `Deny` policies to restrict specific actions (e.g., prevent leaving the organization, prevent disabling [[CloudTrail]]). This is easier to manage but less secure by default.
- **Allow-List Strategy**: Remove the default `FullAWSAccess` policy and replace it with explicit `Allow` policies detailing exactly what services are permitted. This is highly secure but requires significant administrative overhead to maintain.

### Common SCP Use Cases for SAP-C02
- **Data Residency**: Restricting resource creation to specific AWS Regions using `aws:RequestedRegion`.
- **Protecting Security Tooling**: Denying actions like `cloudtrail:StopLogging`, `config:DeleteConfigurationRecorder`, or `guardduty:DeleteDetector` to prevent local administrators from bypassing security controls.
- **Root User Restrictions**: SCPs affect the **root user** of member accounts. You can deny actions to the root user (e.g., `Deny` on `*` with condition `StringLike {"aws:PrincipalArn": "arn:aws:iam::*:root"}`).

## Delegated Administrator

By default, only the Management account can configure organization-wide settings for integrated services. To follow the principle of least privilege, you can register a member account as a **Delegated Administrator** for specific services.
- **Benefits**: Allows specialized teams (e.g., Security) to manage their tools ([[GuardDuty]], [[Macie]], [[Security Hub]]) across the organization without needing access to the billing and root management account.
- **Supported Services**: AWS SSO ([[IAM Identity Center]]), [[CloudFormation StackSets]], GuardDuty, Macie, Security Hub, [[Backup|AWS Backup]], [[Config|AWS Config]], etc.

## Other Policy Types in Organizations

1. **Tag Policies**: Enforce standardization of tags across resources. You can specify required tag keys, allowed values, and even force casing. They do not retroactively modify tags but can prevent non-compliant tag changes.
2. **Backup Policies**: Centrally manage and apply AWS Backup plans across the organization.
3. **AI Services Opt-Out Policies**: Control whether AWS can use your content to improve AI services. (Rarely tested)

### Example: Region Restriction SCP
The most common exam pattern for region control. This policy denies all actions in any region except the approved ones.

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "DenyAllOutsideApprovedRegions",
            "Effect": "Deny",
            "NotAction": [
                "iam:*",
                "organizations:*",
                "route53:*",
                "budgets:*",
                "waf:*",
                "cloudfront:*",
                "globalaccelerator:*",
                "importexport:*",
                "support:*"
            ],
            "Resource": "*",
            "Condition": {
                "StringNotEquals": {
                    "aws:RequestedRegion": [
                        "us-east-1",
                        "eu-west-1"
                    ]
                }
            }
        }
    ]
}
```
*Note: Global services must be excluded from the Deny.*

## Cross-Account Access Strategies

Organizations simplifies cross-account access but doesn't grant it directly via SCPs.
- **Resource-Based Policies**: You can use the `aws:PrincipalOrgID` or `aws:PrincipalOrgPaths` condition keys in resource-based policies (like [[S3 Overview|S3]] Bucket Policies, [[KMS]] Key Policies, [[SNS]] Topic Policies) to grant access to any account within your organization or a specific OU.
  - *Example*: An S3 bucket policy allowing `s3:GetObject` where `aws:PrincipalOrgID` is `o-xxxxxxxxxx`.

## Strategic Scenarios

> [!exam]
> **SAP-C02 Scenario: Enforcing Tagging Compliance at Scale**
> *Scenario:* A company wants to ensure that every [[EC2 Overview|EC2]] instance and [[EBS Overview|EBS]] volume created in any account has a `CostCenter` tag. If the tag is missing, the launch should fail.
> *Solution:* 
> 1. Use an **Organizations Tag Policy** to define the allowed values and capitalization for `CostCenter`.
> 2. Use an **Organizations SCP** to deny `ec2:RunInstances` and `ec2:CreateVolume` if the required tag is not present in the request (`aws:RequestTag/CostCenter`).

> [!exam]
> **SAP-C02 Scenario: Secure Multi-Account S3 Access**
> *Scenario:* A central logging account holds an S3 bucket. You need to allow all current and future accounts in the organization to write logs to this bucket, but external accounts must be denied.
> *Solution:* Attach a resource-based policy to the S3 bucket. Grant `s3:PutObject` to `Principal: "*"` and use the condition `StringEquals: {"aws:PrincipalOrgID": "your-org-id"}`. This automatically scales as accounts are added or removed from the organization.

## Related Services
- [[_Management Index|Management Index]]
- [[Organizations Overview|AWS Organizations]]
- [[CloudFormation StackSets]]
- [[IAM Identity Center]]

---
**Practice:** [[Organizations Advanced - Practice Questions|AWS Organizations Advanced Practice Questions]]
