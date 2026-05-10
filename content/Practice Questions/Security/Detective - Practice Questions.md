---
tags: [aws, sap-c02, detective, practice-questions]
---
# Detective Practice Questions

> [!question]
> A security operations center (SOC) receives an alert from Amazon GuardDuty indicating that an IAM user's credentials may have been compromised and used from an anomalous IP address. The security analyst needs to determine exactly what API calls the compromised IAM user made, which resources they interacted with, and if any other AWS accounts were accessed from that same IP address over the last 30 days. Which AWS service should the analyst use to perform this analysis MOST efficiently?
> 1. Amazon Athena to query AWS CloudTrail logs in Amazon S3.
> 2. Amazon Macie to scan for sensitive data access.
> 3. Amazon Detective to visualize the relationship between the IAM user, the IP address, and the API calls.
> 4. AWS Security Hub to aggregate and query the specific GuardDuty findings.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** [[Detective|Amazon Detective]] is specifically designed for root cause analysis and deep investigation of security findings. It automatically builds a behavior graph from CloudTrail, VPC Flow Logs, and GuardDuty, allowing analysts to easily visualize relationships (IAM user -> IP address -> API calls) over time. While [[Athena|Amazon Athena]] (Option 1) could technically do this, it requires writing complex SQL queries and lacks the built-in visual relationships and efficiency of Detective.

> [!question]
> An organization uses AWS Organizations and has deployed Amazon GuardDuty and AWS Security Hub across all member accounts. They now want to enable Amazon Detective to allow the centralized security team to investigate incidents across the entire organization. How should the solutions architect configure Amazon Detective?
> 1. Enable Detective in the organization's management account and manually invite all member accounts to the behavior graph.
> 2. Designate a delegated administrator account for Detective in AWS Organizations. Enable Detective in that account, and configure it to automatically enable and onboard all existing and new member accounts.
> 3. Deploy an AWS CloudFormation StackSet to enable Detective in all member accounts, and configure each to export their behavior graph to an Amazon S3 bucket in the security account.
> 4. Enable Detective in each member account and link it directly to the centralized AWS Security Hub instance.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** Like most AWS security services, [[Detective|Amazon Detective]] integrates directly with [[Organizations Overview|AWS Organizations]]. Best practice is to designate a delegated administrator account (typically the security tooling account). From this account, you can enable Detective and use the Organizations integration to automatically enable and onboard all current and future member accounts into a single, unified behavior graph. Option 1 is wrong because you should avoid using the management account for security workloads. Option 3 is overly complex and Detective doesn't export graphs to S3 in this manner.