---
tags: [aws, sap-c02, guardduty, practice-questions]
---
# GuardDuty Practice Questions

> [!question]
> A company uses AWS Organizations and has enabled Amazon GuardDuty in the security tooling account, which is set as the delegated administrator. The security team wants to automatically remediate EC2 instances that are communicating with known malicious IP addresses by isolating them in a restricted Security Group. How should the solutions architect design this automated remediation with minimal operational overhead?
> 1. In the security tooling account, create an AWS Lambda function that uses the EC2 API to change the Security Group. Configure a GuardDuty Custom Action to trigger the Lambda function.
> 2. In each member account, create an Amazon EventBridge rule that triggers on GuardDuty findings and targets an AWS Lambda function in the same account to change the Security Group.
> 3. In the security tooling account, create an Amazon EventBridge rule that triggers on GuardDuty findings. Route the event to a central EventBridge event bus, which triggers an AWS Systems Manager Automation document that runs in the affected member account using cross-account IAM roles to isolate the instance.
> 4. Use AWS Firewall Manager to automatically block the malicious IPs at the organizational level upon receiving a GuardDuty finding in the delegated administrator account.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** GuardDuty findings are sent to [[EventBridge|Amazon EventBridge]]. In a multi-account environment managed via [[Organizations Overview|AWS Organizations]], routing events centrally and using [[Systems Manager Overview|AWS Systems Manager Automation]] with cross-account IAM roles is the most scalable, exam-approved pattern for cross-account remediation (Option 3). Option 1 is incorrect because GuardDuty doesn't have "Custom Actions" (that's Security Hub). Option 2 has high operational overhead (deploying in every account). Option 4 blocks the IP but doesn't isolate the EC2 instance as requested.

> [!question]
> A financial services company operates in 10 AWS Regions. They require all GuardDuty findings to be stored in a centralized Amazon S3 bucket in the `us-east-1` region for long-term compliance retention. How can this be achieved most efficiently?
> 1. Configure GuardDuty in `us-east-1` to monitor all other regions natively and export to the S3 bucket.
> 2. Enable GuardDuty in all 10 regions. In each region, configure GuardDuty to export findings directly to the central S3 bucket in `us-east-1`, using an AWS KMS key for encryption.
> 3. Enable GuardDuty in all 10 regions. Use Amazon EventBridge in each region to capture findings and trigger a Lambda function to write to the central S3 bucket.
> 4. Enable GuardDuty in all 10 regions. Use AWS CloudTrail multi-region trail to capture the findings and store them in the central S3 bucket.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[GuardDuty|Amazon GuardDuty]] supports exporting findings directly to an [[S3 Overview|Amazon S3]] bucket, even if the bucket is in a different region. You must enable GuardDuty in all regions (it's a regional service) and configure the export in each region to point to the central S3 bucket, secured with an [[KMS Overview|AWS KMS]] key. Option 1 is false (no native cross-region monitoring). Option 3 adds unnecessary Lambda overhead. Option 4 is incorrect because GuardDuty findings are not CloudTrail events.