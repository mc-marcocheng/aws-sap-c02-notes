---
tags: [aws, sap-c02, systems-manager, practice-questions]
---
# Systems Manager - Practice Questions

> [!question]
> A company manages hundreds of Amazon EC2 instances across multiple AWS accounts in an AWS Organization. The security team mandates that all instances must be scanned for missing patches daily. Furthermore, a centralized report showing the patch compliance status of all instances across all accounts must be generated for auditors.
> 
> What is the MOST operationally efficient way to meet these requirements?
> 
> 1. Create a cross-account IAM role. Run a Lambda function daily that loops through all accounts, executes `AWS-RunPatchBaseline` via SSM Run Command, and writes the results to DynamoDB.
> 2. In the management account, configure a Systems Manager Maintenance Window to run `AWS-RunPatchBaseline` with the `Scan` operation. Configure a Resource Data Sync to send compliance data to a central S3 bucket. Use Amazon Athena to query the centralized data.
> 3. Deploy an AWS Config conformance pack to check for patch compliance. Aggregate the Config rules in an Aggregator in the security account and export the data to S3.
> 4. Install a third-party vulnerability scanner on all instances. Configure the scanner to send daily reports to a central SNS topic, which triggers an email to the auditors.
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** **Resource Data Sync** is the native Systems Manager feature used to aggregate inventory and patch compliance data from multiple accounts and regions into a single central S3 bucket. Once in S3, Amazon Athena can be used to query and generate reports. Option A is heavy custom development. Option C uses Config, but SSM is the native tool for patch compliance data.
> > **Reference Notes:** [[Systems Manager Patch Manager & Automation]]

> [!question]
> A cloud operations team has an AWS Config rule that checks if Amazon EBS volumes are encrypted. If an unencrypted volume is detected, it is marked as non-compliant. The team wants to automatically remediate this by creating an encrypted snapshot, creating a new encrypted volume from the snapshot, and replacing the unencrypted volume.
> 
> Which solution implements this automated remediation with the LEAST custom code?
> 
> 1. Create an Amazon EventBridge rule that triggers an AWS Step Functions state machine to execute the volume replacement logic using AWS SDK calls.
> 2. Use an AWS Systems Manager Automation runbook as the remediation action for the AWS Config rule. Use a custom or AWS-provided runbook that performs the encryption and replacement steps.
> 3. Create a Lambda function that performs the remediation. Attach the Lambda function directly to the EBS volume's resource policy.
> 4. Configure Amazon Macie to detect the unencrypted volumes and trigger an SSM Run Command script on the attached EC2 instance to encrypt the drive.
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** AWS Config natively supports automated remediation using **AWS Systems Manager Automation runbooks**. You can link an SSM Automation document directly to the Config rule, and it will execute automatically when a resource is evaluated as non-compliant. This requires little to no custom code compared to building a Step Functions workflow (Option A) or a Lambda function (Option C).
> > **Reference Notes:** [[Systems Manager Patch Manager & Automation]]
