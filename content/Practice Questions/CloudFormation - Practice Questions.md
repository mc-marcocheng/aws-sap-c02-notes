---
tags: [aws, sap-c02, cloudformation, practice-questions]
---
# CloudFormation Practice Questions

> [!question]
> What does Amazon CloudFormation provide?
> 1. The ability to setup Autoscaling for Amazon EC2 instances.
> 2. A templated resource creation for Amazon Web Services.
> 3. A template to map network resources for Amazon Web Services.
> 4. None of these.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale**: [[CloudFormation Overview|AWS CloudFormation]] is an Infrastructure as Code (IaC) service that allows you to define your entire AWS infrastructure in a declarative template (JSON or YAML). It automates the provisioning and management of related resources in an orderly and predictable fashion.

> [!question]
> Which of the following components are required as a part of a CloudFormation template?
> 1. Parameters
> 2. Outputs
> 3. Template version
> 4. Resources
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale**: The `Resources` section is the only mandatory section in a [[CloudFormation Overview#Template Anatomy|CloudFormation template]]. It specifies the stack resources and their properties. All other sections like Parameters, Mappings, and Outputs are optional.

> [!question]
> In regard to AWS CloudFormation, what is a stack?
> 1. Set of AWS templates that are created and managed as a template.
> 2. Set of AWS resources that are created and managed as a template.
> 3. Set of AWS resources that are created and managed as a single unit.
> 4. Set of AWS templates that are created and managed as a single unit.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale**: A [[CloudFormation Overview#Core Concepts|stack]] is the collection of AWS resources that CloudFormation creates and manages as a single unit. When you delete a stack, all resources defined in its template are deleted (unless a deletion policy specifies otherwise).

> [!question]
> A large enterprise wants to adopt CloudFormation to automate administrative tasks while implementing least privilege and separation of duties. They have Network Admins (VPCs, Subnets) and Application Operators (ELB, ASG, RDS). Which statements represent valid design considerations? (Choose 2)
> 1. Network stack updates will fail upon attempts to delete a subnet with EC2 instances.
> 2. Unless resource level permissions are used on the `CloudFormation:DeleteStack` action, network administrators could tear down application stacks.
> 3. The application stack cannot be deleted before all network stacks are deleted.
> 4. Restricting the launch of EC2 instances into VPCs requires resource level permissions in the IAM policy of the application group.
> 5. Nesting network stacks within application stacks simplifies management but requires resource level permissions for the network group.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1, 2**
> > **Rationale**: 
> > - **1:** AWS prevents the deletion of a subnet if it still contains active resources like EC2 instances.
> > - **2:** CloudFormation actions like `DeleteStack` need to be restricted. If a user has permission to call `DeleteStack` on any stack, they could potentially delete stacks owned by other teams unless specific resource-level permissions (stack ARNs) are defined in their IAM policies.

> [!question]
> You want to manage your AWS infrastructure in a manner similar to application code (versioning, staging, reverting). Which approach addresses this?
> 1. Use cost allocation reports and AWS OpsWorks.
> 2. Use AWS CloudWatch metrics and alerts along with resource tagging.
> 3. Use AWS Elastic Beanstalk and a version control system like GIT.
> 4. Use AWS CloudFormation and a version control system like GIT.
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale**: [[CloudFormation Overview|CloudFormation]] templates are text files (JSON/YAML) that can be stored in version control systems like Git. This allows for infrastructure versioning, peer reviews (Pull Requests), and the ability to revert to previous versions of the environment.

> [!question]
> A user wants the stack creation of ELB and AutoScaling to wait until an EC2 instance is launched and configured properly. How can this be configured?
> 1. It is not possible for stack creation to wait.
> 2. Use the `HoldCondition` resource.
> 3. Use the `DependentCondition` resource.
> 4. Use the `WaitCondition` resource.
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale**: A `WaitCondition` (combined with a `WaitConditionHandle`) allows CloudFormation to pause the creation of dependent resources until it receives a success signal from an external source, such as a script running on an EC2 instance (often using `cfn-signal`).

> [!question]
> During stack creation, CloudFormation successfully creates EC2, ELB, and AutoScaling but fails to create the RDS instance. What is the default behavior?
> 1. It will warn the user and ask to manually create RDS.
> 2. It will wait for user input to correct the mistake.
> 3. Rollback all changes and terminate all created services.
> 4. Keep successfully created resources but terminate stack creation.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale**: By default, "automatic rollback on error" is enabled. If any resource fails to create, [[CloudFormation Overview|CloudFormation]] deletes all resources it has created so far for that stack to ensure you don't have orphaned resources or a partially functioning environment.

> [!question]
> Which step is NOT required when using CloudFormation to set up an environment?
> 1. Create a stack.
> 2. Configure a service manually.
> 3. Create and upload a template.
> 4. Provide parameters configured as part of the template.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale**: The whole point of [[CloudFormation Overview|CloudFormation]] is to automate the configuration. You define the configuration in the template, and CloudFormation handles the service configuration during stack creation.

> [!question]
> A company wants to instantiate tracking systems in any region without manual intervention. What needs to be done to ensure the template works in every AWS region? (Choose 2)
> 1. IAM users must be defined for every target region.
> 2. The names of DynamoDB tables must be different in every target region.
> 3. Use built-in functions to set the AvailabilityZone attribute of the ELB resource.
> 4. Avoid using DeletionPolicies for EBS snapshots.
> 5. Use built-in `Mappings` and `FindInMap` functions to refer to the AMI ID set in the `ImageId` attribute.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3, 5**
> > **Rationale**: 
> > - **5:** AMI IDs are region-specific. Using a [[CloudFormation Overview#Template Anatomy|Mapping]] allows the template to look up the correct AMI ID based on the region it is being deployed in (`AWS::Region`).
> > - **3:** Using intrinsic functions to determine AZs (like `Fn::GetAZs`) ensures the ELB is placed in valid AZs for the target region.
> > - Note: IAM users are global (1 is wrong), and DynamoDB table names only need to be unique within a region (2 is wrong).

> [!question]
> A test run takes 30 minutes, then the stack is torn down. The RDS test results must remain accessible after deletion. Which solutions allow this? (Choose 2)
> 1. Define a `DeletionPolicy` of type `Retain` for the RDS resource.
> 2. Define a `DeletionPolicy` of type `Snapshot` for the RDS resource.
> 3. Define automated backups with a 30-day retention period.
> 4. Define an RDS Read-Replica in the stack.
> 5. Define an `UpdatePolicy` to prevent deletion.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1, 2**
> > **Rationale**: 
> > - **Retain:** [[CloudFormation Overview|CloudFormation]] will keep the RDS instance alive even after the stack is deleted using a [[CloudFormation Overview#Resource Attributes|DeletionPolicy]].
> > - **Snapshot:** CloudFormation will take a final snapshot of the database before deleting the instance, allowing you to restore the data later.
> > - Automated backups (3) are deleted when the instance is deleted unless a snapshot is kept. Read replicas (4) are also deleted with the stack. `UpdatePolicy` (5) does not control resource deletion on stack deletion.

> [!question]
> What is the maximum number of stacks you can create per region?
> 1. 500
> 2. 2000
> 3. 5000
> 4. 100
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale**: The default limit for the number of CloudFormation stacks per region is 2000. This limit can be increased by contacting AWS support.

> [!question]
> You need to model a resource type that is currently unsupported by CloudFormation. How should you overcome this?
> 1. Use a CloudFormation Custom Resource Template and select an API call to proxy.
> 2. Submit a ticket to AWS Forums.
> 3. Use Chef, Puppet, or Ansible to author Heat templates.
> 4. Create a CloudFormation Custom Resource by implementing logic in AWS Lambda or SNS.
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale**: [[CloudFormation Overview#Advanced Features|Custom Resources]] allow you to write your own provisioning logic. You can use an AWS Lambda function to handle the Create, Update, and Delete events for resources that aren't natively supported.

> [!question]
> What is a circular dependency in AWS CloudFormation?
> 1. When a template references an earlier version of itself.
> 2. When Nested Stacks depend on each other.
> 3. When Resources form a `DependsOn` loop.
> 4. When a template references a region which references the original template.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale**: A circular dependency occurs when Resource A depends on Resource B, and Resource B depends on Resource A (directly or indirectly). [[CloudFormation Overview|CloudFormation]] cannot determine which resource to create first and will fail to validate the template.

> [!question]
> You need to run a large batch data processing job (EMR) once per day, with source/output in S3. You want to version control the setup and teardown logic. Approach?
> 1. Model an AWS EMR job in AWS Elastic Beanstalk.
> 2. Model an AWS EMR job in AWS CloudFormation.
> 3. Model an AWS EMR job in AWS OpsWorks.
> 4. Model an AWS EMR job in AWS CLI Composer.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale**: [[CloudFormation Overview|CloudFormation]] natively supports the `AWS::EMR::Cluster` and `AWS::EMR::Step` resources, allowing you to define the cluster and the work it should perform in a version-controlled template.

> [!question]
> Your company needs to automate 3 layers of a large cloud deployment. You want to track evolution and control alterations carefully. Good way?
> 1. Use OpsWorks Stacks with three layers.
> 2. Use CloudFormation Nested Stack Templates with three child stacks.
> 3. Use AWS Config to declare a configuration set.
> 4. Use Elastic Beanstalk Linked Applications.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale**: [[CloudFormation Overview#Advanced Features|Nested Stacks]] are a best practice for modularizing large templates. You can have separate templates for Network, Database, and Application layers, and call them from a single root template. This improves maintainability and reuse.

> [!question]
> Which code snippet returns the URL of a load balancer named "ElasticLoadBalancer"?
> 1. `"Fn::Join" : ["", [ "http://", {"Fn::GetAtt" : [ "ElasticLoadBalancer","DNSName"]}]]`
> 2. `"Fn::Join" : ["", [ "http://", {"Fn::GetAtt" : [ "ElasticLoadBalancer","Url"]}]]`
> 3. `"Fn::Join" : ["", [ "http://", {"Ref" : "ElasticLoadBalancerUrl"}]]`
> 4. `"Fn::Join" : ["", [ "http://", {"Ref" : "ElasticLoadBalancerDNSName"}]]`
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale**: The `DNSName` attribute of an `AWS::ElasticLoadBalancing::LoadBalancer` resource provides the public DNS name. You use `Fn::GetAtt` to retrieve it. `Ref` on an ELB returns its name, not its DNS address.

> [!question]
> Which stack state refuses `UpdateStack` calls?
> 1. `UPDATE_ROLLBACK_FAILED`
> 2. `UPDATE_ROLLBACK_COMPLETE`
> 3. `UPDATE_COMPLETE`
> 4. `CREATE_COMPLETE`
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale**: `UPDATE_ROLLBACK_FAILED` is a terminal state where the stack failed to update and then failed to roll back to its original state. You must fix the underlying issue (e.g., a manually deleted resource) and use `ContinueUpdateRollback` before the stack can be updated again.

> [!question]
> Which of these is NOT a Pseudo Parameter in AWS CloudFormation?
> 1. `AWS::StackName`
> 2. `AWS::AccountId`
> 3. `AWS::StackArn`
> 4. `AWS::NotificationARNs`
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale**: While `AWS::StackName`, `AWS::AccountId`, `AWS::Region`, and `AWS::NotificationARNs` are pseudo parameters, `AWS::StackArn` is not (though you can construct it). 

> [!question]
> Which of these is NOT an intrinsic function?
> 1. `Fn::SplitValue`
> 2. `Fn::FindInMap`
> 3. `Fn::Select`
> 4. `Fn::GetAZs`
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale**: There is no `Fn::SplitValue`. The correct function for splitting strings is `Fn::Split`.

> [!question]
> Which of these is NOT a CloudFormation Helper Script?
> 1. `cfn-signal`
> 2. `cfn-hup`
> 3. `cfn-request`
> 4. `cfn-get-metadata`
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale**: The standard helper scripts are `cfn-init` (retrieve metadata), `cfn-signal` (send signals), `cfn-get-metadata` (retrieve resource metadata), and `cfn-hup` (check for updates). `cfn-request` does not exist.

> [!question]
> Which status represents a failure state during a stack update?
> 1. `UPDATE_COMPLETE_CLEANUP_IN_PROGRESS`
> 2. `DELETE_COMPLETE_WITH_ARTIFACTS`
> 3. `ROLLBACK_IN_PROGRESS`
> 4. `ROLLBACK_FAILED`
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale**: `ROLLBACK_IN_PROGRESS` indicates that an operation failed and the stack is currently attempting to revert to its previous known-good state. Note that `ROLLBACK_FAILED` is not a standard status; the update-specific failure state is `UPDATE_ROLLBACK_FAILED`.

> [!question]
> You need to create a Route53 record only when not running in production. How should you implement this?
> 1. Use a `Parameter` for environment and a `Condition` on the Route53 resource.
> 2. Create two templates, one with the record and one without.
> 3. Use a `Parameter` for environment and set the record value to null for production.
> 4. Use `DeletionPolicy` to remove it later.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale**: Using a [[CloudFormation Overview#Template Anatomy|Condition]] in a single template is the most efficient and DRY (Don't Repeat Yourself) method. You define a condition (e.g., `IsNonProd`) based on an input parameter and then apply `Condition: IsNonProd` to the Route53 resource.
