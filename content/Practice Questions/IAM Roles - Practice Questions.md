---
tags: [aws, sap-c02, iam, security, practice-questions]
---
# IAM Roles Practice Questions

> [!question]
> A company is building software on AWS that requires access to various AWS services. Which configuration should be used to ensure that AWS credentials (i.e., Access Key ID/Secret Access Key combination) are not compromised?
> 1. Enable Multi-Factor Authentication for your AWS root account.
> 2. Assign an IAM role to the Amazon EC2 instance.
> 3. Store the AWS Access Key ID/Secret Access Key combination in software comments.
> 4. Assign an IAM user to the Amazon EC2 Instance.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** Using [[IAM Roles and Policies#IAM Roles|IAM roles]] for EC2 instances is a best practice. It provides temporary credentials via [[IAM Roles and Policies#AWS STS (Security Token Service)|AWS STS]], eliminating the need to store long-term access keys on the instance.

> [!question]
> A company is preparing to give AWS Management Console access to developers. Company policy mandates identity federation and role-based access control. Roles are currently assigned using groups in the corporate Active Directory. What combination of the following will give developers access to the AWS console? (Select 2)
> 1. AWS Directory Service AD Connector
> 2. AWS Directory Service Simple AD
> 3. AWS Identity and Access Management groups
> 4. AWS Identity and Access Management roles
> 5. AWS Identity and Access Management users
> 
> > [!success]- Answer & Rationale
> > **Answer: 1, 4**
> > **Rationale:** [[IAM Roles and Policies#Identity Federation|Identity federation]] requires a way to connect the on-premises AD to AWS, which is done via [[IAM Federation|Directory Service]] AD Connector. Users then assume [[IAM Roles and Policies#IAM Roles|IAM roles]] to gain access to the console based on their AD group membership.

> [!question]
> A customer needs corporate IT governance and cost oversight of all AWS resources consumed by its divisions. The divisions want to maintain administrative control of the discrete AWS resources they consume and keep those resources separate from the resources of other divisions. Which of the following options, when used together will support the autonomy/control of divisions while enabling corporate IT to maintain governance and cost oversight? (Select 2)
> 1. Use AWS Consolidated Billing and disable AWS root account access for the child accounts.
> 2. Enable IAM cross-account access for all corporate IT administrators in each child account.
> 3. Create separate VPCs for each division within the corporate IT AWS account.
> 4. Use AWS Consolidated Billing to link the divisions' accounts to a parent corporate account.
> 5. Write all child AWS CloudTrail and Amazon CloudWatch logs to each child account's Amazon S3 "Log" bucket.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2, 4**
> > **Rationale:** [[Organizations Overview#Consolidated Billing|Consolidated Billing]] provides cost oversight across multiple accounts. [[IAM Roles and Policies#Cross-Account Access|IAM cross-account access]] allows corporate IT to maintain governance by accessing division accounts without compromising their autonomy.

> [!question]
> Which of the following items are required to allow an application deployed on an EC2 instance to write data to a DynamoDB table? Assume that no security keys are allowed to be stored on the EC2 instance. (Select 2)
> 1. Create an IAM Role that allows write access to the DynamoDB table
> 2. Add an IAM Role to a running EC2 instance.
> 3. Create an IAM User that allows write access to the DynamoDB table.
> 4. Add an IAM User to a running EC2 instance.
> 5. Launch an EC2 Instance with the IAM Role included in the launch configuration
> 
> > [!success]- Answer & Rationale
> > **Answer: 1, 2**
> > **Rationale:** To allow an application on EC2 to access DynamoDB securely, you must create an [[IAM Roles and Policies#IAM Roles|IAM Role]] with the necessary permissions. This role is then associated with the EC2 instance via an [[IAM Roles and Policies#Instance Profiles|Instance Profile]] (which can be done for running instances).

> [!question]
> You are looking to migrate your Development (Dev) and Test environments to AWS. You have decided to use separate AWS accounts to host each environment. You plan to link each accounts bill to a Master AWS account using Consolidated Billing. To make sure you Keep within budget you would like to implement a way for administrators in the Master account to have access to stop, delete and/or terminate resources in both the Dev and Test accounts. Identify which option will allow you to achieve this goal.
> 1. Create IAM users in the Master account with full Admin permissions. Create cross-account roles in the Dev and Test accounts that grant the Master account access to the resources in the account by inheriting permissions from the Master account.
> 2. Create IAM users and a cross-account role in the Master account that grants full Admin permissions to the Dev and Test accounts.
> 3. Create IAM users in the Master account. Create cross-account roles in the Dev and Test accounts that have full Admin permissions and grant the Master account access.
> 4. Link the accounts using Consolidated Billing. This will give IAM users in the Master account access to resources in the Dev and Test accounts.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** Administrators in the Master account assume [[IAM Roles and Policies#Cross-Account Access Flow|cross-account roles]] in the Dev and Test accounts to perform management tasks.

> [!question]
> You have an application running on an EC2 Instance which will allow users to download files from a private S3 bucket using a pre-assigned URL. Before generating the URL the application should verify the existence of the file in S3. How should the application use AWS credentials to access the S3 bucket securely?
> 1. Use the AWS account access Keys the application retrieves the credentials from the source code of the application.
> 2. Create a IAM user for the application with permissions that allow list access to the S3 bucket launch the instance as the IAM user and retrieve the IAM user's credentials from the EC2 instance user data.
> 3. Create an IAM role for EC2 that allows list access to objects in the S3 bucket. Launch the instance with the role, and retrieve the role's credentials from the EC2 Instance metadata.
> 4. Create an IAM user for the application with permissions that allow list access to the S3 bucket. The application retrieves the IAM user credentials from a temporary directory with permissions that allow read access only to the application user.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** Attaching an [[IAM Roles and Policies#IAM Roles|IAM role]] to the EC2 instance allows the application to retrieve temporary credentials from [[EC2 Overview#Instance Metadata|Instance Metadata]] securely.

> [!question]
> An administrator is using Amazon CloudFormation to deploy a three tier web application that consists of a web tier and application tier that will utilize Amazon DynamoDB for storage when creating the CloudFormation template which of the following would allow the application instance access to the DynamoDB tables without exposing API credentials?
> 1. Create an IAM Role that has the required permissions to read and write from the required DynamoDB table and associate the Role to the application instances by referencing an instance profile.
> 2. Use the Parameter section in the Cloud Formation template to have the user input Access and Secret Keys from an already created IAM user.
> 3. Create an IAM Role that has the required permissions and reference the Role in the instance profile property of the application instance.
> 4. Create an IAM user in the CloudFormation template, use the GetAtt function to retrieve the Access and secret keys and pass them to the application instance through user-data.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** [[CloudFormation Overview|CloudFormation]] can automate the creation of [[IAM Roles and Policies#IAM Roles|IAM roles]] and [[IAM Roles and Policies#Instance Profiles|Instance Profiles]] to provide secure access to DynamoDB.

> [!question]
> An enterprise wants to use a third-party SaaS application. The SaaS application needs to access Amazon EC2 resources running within the enterprise's account. The enterprise requires that any outside access conforms to the principles of least privilege and ensures that credentials used by the SaaS vendor cannot be used by any other third party. Which of the following would meet all of these conditions?
> 1. From the AWS Management Console, navigate to the Security Credentials page and retrieve the access and secret key for your account.
> 2. Create an IAM user within the enterprise account and provide these credentials to the SaaS provider.
> 3. Create an IAM role for cross-account access allows the SaaS provider's account to assume the role and assign it a policy that allows only the actions required by the SaaS application.
> 4. Create an IAM role for EC2 instances, assign it a policy and provide the role ARN to the SaaS provider to use when launching their application instances.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** [[IAM Roles and Policies#Cross-Account Access|Cross-account roles]] (ideally with an **External ID**) are the standard way to grant third-party access while preventing the "confused deputy" problem.

> [!question]
> A user has created an application which will be hosted on EC2. The application makes calls to DynamoDB to fetch certain data. The application is using the DynamoDB SDK to connect with from the EC2 instance. Which of the below mentioned statements is true with respect to the best practice for security in this scenario?
> 1. The user should attach an IAM role with DynamoDB access to the EC2 instance.
> 2. The user should create an IAM user with DynamoDB access and use its credentials within the application.
> 3. The user should create an IAM role, which has EC2 access so that it will allow deploying the application.
> 4. The user should create an IAM user with DynamoDB and EC2 access.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** Attaching an [[IAM Roles and Policies#IAM Roles|IAM role]] to the EC2 instance is the secure best practice for application-to-service communication.

> [!question]
> A customer is deploying multiple applications owned by different teams. The security team wants to delegate authorization to teams but independently apply restrictions based on factors like device and location. How can this be implemented?
> 1. Operate an authentication service that generates AWS STS tokens with IAM policies.
> 2. Add additional IAM policies to the application IAM roles that deny user privileges based on information security policy.
> 3. Configure IAM policies that restrict modification of the application IAM roles only to the information security team.
> 4. Enable federation with the internal LDAP directory and grant the application teams permissions to modify users.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** You can use [[IAM Roles and Policies#Policies for Roles|Permissions Policies]] with `Deny` statements and conditions (like `aws:SourceIp`) to enforce global restrictions regardless of what the development team grants.

> [!question]
> You are creating an Auto Scaling group whose Instances need to insert a custom metric into CloudWatch. Which method would be the best way to authenticate your CloudWatch PUT request?
> 1. Create an IAM role with the PutMetricData permission and modify the Auto Scaling launch configuration to launch instances in that role.
> 2. Create an IAM user with the PutMetricData permission and inject the users credentials into the instance User Data.
> 3. Modify the appropriate CloudWatch metric policies to allow the PutMetricData permission.
> 4. Create an IAM user with the PutMetricData permission and put the credentials in a private repository.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** Using an [[IAM Roles and Policies#IAM Roles|IAM role]] in the launch configuration allows instances to automatically get temporary credentials for [[CloudWatch Overview|CloudWatch]].
