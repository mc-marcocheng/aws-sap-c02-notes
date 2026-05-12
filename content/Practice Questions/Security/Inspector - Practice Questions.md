---
tags: [aws, sap-c02, inspector, practice-questions]
---
# Inspector Practice Questions

> [!question]
> A company is using Amazon Inspector across their AWS Organization. The security team notices that several newly launched EC2 instances in a member account are not being scanned for software vulnerabilities, although network reachability scans are returning results. What is the most likely cause of this issue?
> 1. Amazon Inspector is not enabled in the region where the instances were launched.
> 2. The EC2 instances do not have the AWS Systems Manager (SSM) Agent installed, running, and properly authenticated.
> 3. The Inspector agent has not been manually installed on the new EC2 instances.
> 4. The member account has not been fully onboarded to AWS Security Hub.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[Inspector|Amazon Inspector]] (v2) uses the [[Systems Manager Overview|AWS Systems Manager]] (SSM) Agent to collect inventory for software vulnerability scans. If the agent is missing or lacks the IAM role to connect to SSM, the software scan will fail, though network reachability scans (which look at VPC configs and Security Groups) will still work. Option 3 is wrong because Inspector v2 does not use a standalone Inspector agent (unlike v1).

> [!question]
> A solutions architect is designing a pipeline for containerized applications. Container images are pushed to Amazon ECR. The security team requires that any image containing "Critical" or "High" severity vulnerabilities must not be allowed to be deployed to Amazon EKS. Which combination of actions meets this requirement with the LEAST operational overhead?
> 1. Enable ECR basic scanning on push. Create an EventBridge rule to trigger a Lambda function that deletes the image if high severity findings are found.
> 2. Enable Amazon Inspector continuous scanning for ECR. Configure an EventBridge rule that matches Inspector findings. Route the event to a Lambda function that updates the image tag to "quarantined" and configures EKS admission controllers to reject "quarantined" tags.
> 3. Enable Amazon Inspector continuous scanning for ECR. Use an EventBridge rule on finding creation to trigger an SNS topic to email the security team to manually block the deployment.
> 4. Deploy an inline scanner inside the CI/CD pipeline before pushing to ECR to fail the build if vulnerabilities are found.
> 
> [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[Inspector|Amazon Inspector]] provides continuous and on-push scanning for Amazon ECR. By capturing the findings via [[EventBridge|Amazon EventBridge]], you can automate remediation (like tagging the image or notifying a webhook). Using a Lambda function to quarantine the image and an EKS admission controller (like OPA Gatekeeper or Kyverno) to block deployment is a robust, automated cloud-native pattern. Option 1 relies on basic scanning (Clair), not Inspector, and deleting images disrupts pipelines. Option 4 adds overhead to the CI/CD pipeline and doesn't handle zero-day continuous scanning once the image is in ECR.

> [!question]
> A company uses Amazon Inspector to scan their EC2 fleet and ECR repositories. The security team wants to be notified within minutes whenever a new "CRITICAL" severity vulnerability is discovered on any production EC2 instance (tagged `Environment:Production`). The notification must include the instance ID, CVE identifier, and remediation guidance. Which solution achieves this with the LEAST operational overhead?
> 1. Configure Amazon Inspector to export findings to an S3 bucket. Use an S3 event to trigger a Lambda function that parses findings and sends emails via SES.
> 2. Create an EventBridge rule matching Inspector finding events with severity CRITICAL and resource tag `Environment:Production`. Set the target as an SNS topic with an email subscription using an input transformer to format the message.
> 3. Enable Inspector integration with AWS Security Hub. Create a Security Hub custom action that sends an SNS notification for critical findings.
> 4. Use CloudWatch Logs Insights to query Inspector findings every 5 minutes via a scheduled Lambda function.
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[Inspector|Amazon Inspector]] publishes findings as events to [[EventBridge|Amazon EventBridge]] in near real-time. An EventBridge rule can filter by severity and resource tags, and an input transformer can format the notification to include specific fields (instance ID, CVE, remediation). This is fully serverless with no custom code. Option 1 requires custom Lambda code. Option 3 requires manual custom action invocation. Option 4 introduces a 5-minute delay and polling overhead.