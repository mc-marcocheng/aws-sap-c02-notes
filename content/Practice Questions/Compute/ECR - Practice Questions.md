---
tags: [aws, sap-c02, compute, containers, practice-questions]
---
# ECR - Practice Questions

> [!question]
> A large enterprise uses AWS Organizations with a centralized "Shared Services" account for their CI/CD pipelines. Docker images are built in this account and stored in Amazon Elastic Container Registry (ECR). The enterprise mandates that all newly built images must be immediately and securely made available to the "Production" account in a different AWS region without granting cross-account read access to the central repository. What is the MOST operationally efficient solution?
> 
> 1. Write an AWS CodeBuild script in the Shared Services account to run `docker push` twice: once to the local ECR and once to the Production account ECR.
> 2. Configure ECR cross-region and cross-account replication in the Shared Services account, targeting the ECR registry in the Production account.
> 3. Use an Amazon EventBridge rule triggered by the `ECR Image Action` event to invoke an AWS Lambda function that copies the image.
> 4. Sync the ECR repository to an Amazon S3 bucket, configure S3 Cross-Region Replication (CRR), and sync it back to ECR in the Production account.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** Amazon [[ECR]] natively supports cross-account and cross-region replication. By configuring registry replication settings in the source account, AWS automatically copies successful image pushes to the designated destination registries. This requires no custom code, Lambda functions, or modifications to the CI/CD pipeline.

> [!question]
> A security compliance framework requires that all container images deployed to an Amazon EKS cluster must be scanned for software vulnerabilities before deployment. Furthermore, if a "CRITICAL" severity vulnerability is found, the security team must be notified immediately via PagerDuty (an external SaaS provider). Which combination of AWS services will meet this requirement MOST efficiently?
> 
> 1. Use ECR Basic Scanning on push. Configure CloudWatch Alarms to monitor the scan metrics and send an SNS notification to PagerDuty.
> 2. Use ECR Enhanced Scanning (integrated with Amazon Inspector). Create an Amazon EventBridge rule filtering for Inspector finding events with "CRITICAL" severity, and route the event to an API Destination for PagerDuty.
> 3. Deploy a third-party vulnerability scanner as a DaemonSet in the EKS cluster to scan images as they are pulled from ECR.
> 4. Export the ECR images to Amazon S3 and use Amazon Macie to perform deep inspection of the image layers for vulnerabilities.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** ECR Enhanced Scanning uses Amazon [[Inspector]] to provide continuous vulnerability scanning. Inspector automatically publishes findings to Amazon [[EventBridge]]. EventBridge can filter these events by severity ("CRITICAL") and use an **API Destination** to directly call the external PagerDuty webhook securely, requiring no custom Lambda code.
