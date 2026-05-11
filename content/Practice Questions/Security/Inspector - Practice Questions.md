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
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[Inspector|Amazon Inspector]] provides continuous and on-push scanning for Amazon ECR. By capturing the findings via [[EventBridge|Amazon EventBridge]], you can automate remediation (like tagging the image or notifying a webhook). Using a Lambda function to quarantine the image and an EKS admission controller (like OPA Gatekeeper or Kyverno) to block deployment is a robust, automated cloud-native pattern. Option 1 relies on basic scanning (Clair), not Inspector, and deleting images disrupts pipelines. Option 4 adds overhead to the CI/CD pipeline and doesn't handle zero-day continuous scanning once the image is in ECR.