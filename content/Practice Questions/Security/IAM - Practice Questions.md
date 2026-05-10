---
tags: [aws, sap-c02, iam, practice-questions]
---
# IAM Practice Questions

> [!question]
> Which service enables AWS customers to manage users and permissions in AWS?
> 1. AWS Access Control Service (ACS)
> 2. AWS Identity and Access Management (IAM)
> 3. AWS Identity Manager (AIM)
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale**: [[IAM|IAM]] is the standard service for managing users, groups, and roles, and their permissions to access AWS resources.

> [!question]
> IAM provides several policy templates you can use to automatically assign permissions to the groups you create. The _____ policy template gives the Admins group permission to access all account resources, except your AWS account information.
> 1. Read Only Access
> 2. Power User Access
> 3. AWS Cloud Formation Read Only Access
> 4. Administrator Access
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale**: Power User Access provides full access to AWS services and resources but does not allow management of users and groups, nor does it provide access to billing and account information. This differs from Administrator Access which includes full account management.

> [!question]
> Every user you create in the IAM system starts with _________.
> 1. Partial permissions
> 2. Full permissions
> 3. No permissions
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale**: By default, new [[IAM#Core Components|IAM users]] have no permissions (Implicit Deny). Permissions must be explicitly granted via [[IAM#Policy Types|policies]].

> [!question]
> Groups can’t _____.
> 1. be nested more than 3 levels
> 2. be nested at all
> 3. be nested more than 4 levels
> 4. be nested more than 2 levels
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale**: [[IAM#Core Components|IAM groups]] cannot be nested. You can only add users to groups, not groups to other groups.

> [!question]
> The _____ service is targeted at organizations with multiple users or systems that use AWS products such as Amazon EC2, Amazon SimpleDB, and the AWS Management Console.
> 1. Amazon RDS
> 2. AWS Integrity Management
> 3. AWS Identity and Access Management
> 4. Amazon EMR
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale**: [[IAM|IAM]] is specifically designed to manage multiple identities and their access to AWS services.

> [!question]
> An AWS customer is deploying an application that is composed of an AutoScaling group of EC2 Instances. The customer's security policy requires that every outbound connection from these instances to any other service within the VPC must be authenticated using a unique x.509 certificate that contains the specific instance-id. In addition, x.509 certificates must be signed by the customer’s Key management service in order to be trusted for authentication. Which of the following configurations will support these requirements?
> 1. Configure an IAM Role that grants access to an Amazon S3 object containing a signed certificate and configure the Auto Scaling group to launch instances with this role. Have the instances bootstrap get the certificate from Amazon S3 upon first boot.
> 2. Embed a certificate into the Amazon Machine Image that is used by the Auto Scaling group. Have the launched instances generate a certificate signature request with the instance’s assigned instance-id to the Key management service for signature.
> 3. Configure the Auto Scaling group to send an SNS notification of the launch of a new instance to the trusted key management service. Have the Key management service generate a signed certificate and send it directly to the newly launched instance.
> 4. Configure the launched instances to generate a new certificate upon first boot. Have the Key management service poll the AutoScaling group for associated instances and send new instances a certificate signature that contains the specific instance-id.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale**: Using an [[IAM Roles and Policies|IAM Role]] to provide secure access to an S3 bucket where the certificate is stored is a standard AWS pattern. The instance can use its role-based credentials to fetch the unique certificate during bootstrapping.

> [!question]
> When assessing an organization's use of AWS API access credentials, which of the following three credentials should be evaluated? (Choose 3)
> 1. Key pairs
> 2. Console passwords
> 3. Access keys
> 4. Signing certificates
> 5. Security Group memberships
> 
> > [!success]- Answer & Rationale
> > **Answer: 2, 3, 4**
> > **Rationale**: API and management access involves Console passwords (for the UI), Access keys (for CLI/SDK), and Signing certificates (X.509 for some older APIs or specific services). Key pairs are for SSH access to EC2 instances, and Security Groups are networking constructs.

> [!question]
> An organization has created 50 IAM users. The organization wants that each user can change their password but cannot change their access keys. How can the organization achieve this?
> 1. The organization has to create a special password policy and attach it to each user.
> 2. The root account owner has to use CLI which forces each IAM user to change their password on first login.
> 3. By default each IAM user can modify their passwords.
> 4. Root account owner can set the policy from the IAM console under the password policy screen.
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale**: In the [[IAM Best Practices|IAM Password Policy]] settings, the administrator can enable "Allow users to change their own password." This is a global setting for the account. Access keys are managed separately via permissions.

> [!question]
> An organization has created 50 IAM users. The organization has introduced a new policy which will change the access of an IAM user. How can the organization implement this effectively so that there is no need to apply the policy at the individual user level?
> 1. Use the IAM groups and add users as per their role to different groups and apply policy to group.
> 2. The user can create a policy and apply it to multiple users in a single go with the AWS CLI.
> 3. Add each user to the IAM role as per their organization role to achieve effective policy setup.
> 4. Use the IAM role and implement access at the role level.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale**: [[IAM#Core Components|IAM Groups]] are the recommended way to manage permissions for multiple users. By attaching the policy to the group, all users in that group automatically inherit the permissions.

> [!question]
> Your organization’s security policy requires that all privileged users either use frequently rotated passwords or one-time access credentials in addition to username/password. Which two of the following options would allow an organization to enforce this policy for AWS users? (Choose 2)
> 1. Configure multi-factor authentication for privileged IAM users.
> 2. Create IAM users for privileged accounts (can set password policy).
> 3. Implement identity federation between your organization’s Identity provider leveraging the IAM Security Token Service.
> 4. Enable the IAM single-use password policy option for privileged users.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1, 2**
> > **Rationale**: [[IAM#Key Features|MFA]] provides the "one-time access credentials" (TOTP). [[IAM Best Practices|IAM User Password Policies]] allow enforcing frequent rotation by setting a password expiration period.

> [!question]
> Your organization is preparing for a security assessment of your use of AWS. In preparation for this assessment, which two IAM best practices should you consider implementing? (Choose 2)
> 1. Create individual IAM users for everyone in your organization.
> 2. Configure MFA on the root account and for privileged IAM users.
> 3. Assign IAM users and groups configured with policies granting least privilege access.
> 4. Ensure all users have been assigned and are frequently rotating a password, access ID/secret key, and X.509 certificate.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1, 2**
> > **Rationale**: Key [[IAM Best Practices]] include Individual IAM Users (accountability), MFA on Root/Privileged users, and Least Privilege. While 3 is also a best practice, 1 and 2 are foundational for security assessments.

> [!question]
> A company needs to deploy services to an AWS region which they have not previously used. The company currently has an IAM role for the Amazon EC2 instances, which permits the instance to have access to Amazon DynamoDB. The company wants their EC2 instances in the new region to have the same privileges. How should the company achieve this?
> 1. Create a new IAM role and associated policies within the new region.
> 2. Assign the existing IAM role to the Amazon EC2 instances in the new region.
> 3. Copy the IAM role and associated policies to the new region and attach it to the instances.
> 4. Create an Amazon Machine Image (AMI) of the instance and copy it to the desired region using the AMI Copy feature.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale**: [[IAM#Key Features|IAM is a global service]]. Roles, Users, Groups, and Policies created in one region are available for use in all other AWS regions.

> [!question]
> After creating a new IAM user which of the following must be done before they can successfully make API calls?
> 1. Add a password to the user.
> 2. Enable Multi-Factor Authentication for the user.
> 3. Assign a Password Policy to the user.
> 4. Create a set of Access Keys for the user.
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale**: Access Keys (Access Key ID and Secret Access Key) are required to sign programmatic requests to the AWS CLI, SDKs, or APIs.

> [!question]
> Which of the below mentioned statements is NOT true with respect to the limitations of IAM?
> 1. One IAM user can be a part of a maximum of 5 groups.
> 2. Organization can create 100 groups per AWS account.
> 3. One AWS account can have a maximum of 5000 IAM users.
> 4. One AWS account can have 250 roles.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale**: The default limit for group membership is 10 groups per user, not 5.

> [!question]
> Within the IAM service a GROUP is regarded as a:
> 1. A collection of AWS accounts.
> 2. It’s the group of EC2 machines that gain the permissions specified in the GROUP.
> 3. There’s no GROUP in IAM, but only USERS and RESOURCES.
> 4. A collection of users.
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale**: An [[IAM#Core Components|IAM Group]] is simply a collection of IAM users.

> [!question]
> Is there a limit to the number of groups you can have?
> 1. Yes for all users except root
> 2. No
> 3. Yes unless special permission granted
> 4. Yes for all users
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale**: There is a default limit of 300 groups per AWS account (though this can be increased by contacting AWS support).

> [!question]
> What is the default maximum number of MFA devices in use per AWS account (at the root account level)?
> 1. 1
> 2. 5
> 3. 15
> 4. 10
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale**: Historically, only one [[IAM#Key Features|MFA]] device could be associated with the root user. (Note: AWS has recently updated this to allow up to 8 MFA devices for root and IAM users, but for exam purposes, 1 was the long-standing default).

> [!question]
> When you use the AWS Management Console to delete an IAM user, IAM also deletes any signing certificates and any access keys belonging to the user.
> 1. FALSE
> 2. This is configurable
> 3. TRUE
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale**: When using the AWS Management Console, the deletion process automatically cleans up associated credentials like access keys and certificates.

> [!question]
> You are setting up a blog on AWS. In which of the following scenarios will you need AWS credentials? (Choose 3)
> 1. Sign in to the AWS management console to launch an Amazon EC2 instance.
> 2. Sign in to the running instance to install some software.
> 3. Launch an Amazon RDS instance.
> 4. Log into your blog’s content management system to write a blog post.
> 5. Post pictures to your blog on Amazon S3.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1, 3, 5**
> > **Rationale**: AWS credentials are needed to interact with AWS services (EC2, RDS, S3). Logging into the OS (2) uses SSH keys, and logging into the blog CMS (4) uses the blog's internal authentication.

> [!question]
> An organization has 500 employees. The organization wants to set up AWS access for each department. Which of the below mentioned options is a possible solution?
> 1. Create IAM roles based on the permission and assign users to each role.
> 2. Create IAM users and provide individual permission to each.
> 3. Create IAM groups based on the permission and assign IAM users to the groups.
> 4. It is not possible to manage more than 100 IAM users with AWS.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale**: Using [[IAM#Core Components|IAM Groups]] to group users by department and applying permissions at the group level is the most scalable and manageable solution.

> [!question]
> Which of the below mentioned pointers will NOT help the organization achieve better security arrangement for EC2 instances?
> 1. Apply the latest patch of OS and always keep it updated.
> 2. Allow only IAM users to connect with the EC2 instances with their own secret access key.
> 3. Disable the password-based login for all the users. All the users should use their own keys to connect with the instance securely.
> 4. Create a procedure to revoke the access rights of the individual user when they are not required anymore.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale**: Secret Access Keys are for API/CLI/SDK access, not for connecting (SSH/RDP) to EC2 instances. SSH uses Key Pairs.
