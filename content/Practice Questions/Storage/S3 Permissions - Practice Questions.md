---
tags: [aws, sap-c02, s3, storage, practice-questions]
---
# S3 Permissions Practice Questions

> [!question]
> Which features can be used to restrict access to data in S3? Choose 2 answers
> 1. Set an S3 ACL on the bucket or the object.
> 2. Create a CloudFront distribution for the bucket.
> 3. Set an S3 bucket policy.
> 4. Enable IAM Identity Federation
> 5. Use S3 Virtual Hosting
> 
> > [!success]- Answer & Rationale
> > **Answer: 1, 3**
> > **Rationale:** S3 access can be controlled using resource-based policies (Bucket Policies and [[S3 Permissions#Option C ACLs (Legacy)|ACLs]]) or user-based policies (IAM). CloudFront, Federation, and Virtual Hosting are for delivery or identity, not direct S3 access restriction.

> [!question]
> Which method can be used to prevent an IP address block from accessing public objects in an S3 bucket?
> 1. Create a bucket policy and apply it to the bucket
> 2. Create a NACL and attach it to the VPC of the bucket
> 3. Create an ACL and apply it to all objects in the bucket
> 4. Modify the IAM policies of any users that would access the bucket
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** [[S3 Permissions#1. Evaluation Logic|Bucket policies]] support conditions, such as `IpAddress` or `NotIpAddress`, which allow you to explicitly deny access from specific IP ranges even if the objects are otherwise public. ACLs do not support conditional logic.

> [!question]
> A user has granted read/write permission of his S3 bucket using ACL. Which of the below mentioned options is a valid ID to grant permission to other AWS accounts (grantee) using ACL?
> 1. IAM User ID
> 2. S3 Secure ID
> 3. Access ID
> 4. Canonical user ID
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale:** When using [[S3 Permissions#4. Predefined Groups (ACLs)|ACLs]] to grant permissions to other AWS accounts, you must use the Canonical User ID, which is an alphanumeric identifier associated with the AWS account.

> [!question]
> A root account owner has given full access of his S3 bucket to one of the IAM users using the bucket ACL. When the IAM user logs in to the S3 console, which actions can he perform?
> 1. He can just view the content of the bucket
> 2. He can do all the operations on the bucket
> 3. It is not possible to give access to an IAM user using ACL
> 4. The IAM user can perform all operations on the bucket using only API/SDK
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** S3 [[S3 Permissions#Option C ACLs (Legacy)|ACLs]] are used to grant permissions to other AWS accounts or predefined groups, not specific IAM users within the same account. To grant access to an IAM user, you should use an IAM Policy or a Bucket Policy.

> [!question]
> A root AWS account owner is trying to understand various options to set the permission to AWS S3. Which of the below mentioned options is not the right option to grant permission for S3?
> 1. User Access Policy
> 2. S3 Object Policy
> 3. S3 Bucket Policy
> 4. S3 ACL
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** There is no such thing as an "S3 Object Policy." Permissions for objects are managed via [[S3 Permissions#Option A Bucket Policies & IAM (Preferred)|Bucket Policies]], IAM (User Access Policies), or Object [[S3 Permissions#Option C ACLs (Legacy)|ACLs]].

> [!question]
> A system admin is managing buckets, objects and folders with AWS S3. Which of the below mentioned statements is true and should be taken in consideration by the sysadmin?
> 1. Folders support only ACL
> 2. Both the object and bucket can have an Access Policy but folder cannot have policy
> 3. Folders can have a policy
> 4. Both the object and bucket can have ACL but folders cannot have ACL
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale:** In S3, "folders" are merely prefixes in the object key name and are not actual resources. Therefore, you cannot apply an ACL to a folder; ACLs apply only to the [[S3 Permissions#3. Object Ownership (Crucial for Exam)|bucket or the object]] itself.

> [!question]
> A user has created an S3 bucket which is not publicly accessible. The bucket is having thirty objects which are also private. If the user wants to make the objects public, how can he configure this with minimal efforts?
> 1. User should select all objects from the console and apply a single policy to mark them public
> 2. User can write a program which programmatically makes all objects public using S3 SDK
> 3. Set the AWS bucket policy which marks all objects as public
> 4. Make the bucket ACL as public so it will also mark all objects as public
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** Using a [[S3 Permissions#1. Evaluation Logic|Bucket Policy]] is the most efficient way to apply permissions to multiple objects at once (e.g., using a wildcard like `folder/*` or `*`). Applying ACLs to each object individually would be much more manual effort.

> [!question]
> You need to configure an Amazon S3 bucket to serve static assets for your public-facing web application. Which methods ensure that all objects uploaded to the bucket are set to public read? Choose 2 answers
> 1. Set permissions on the object to public read during upload.
> 2. Configure the bucket ACL to set all objects to public read.
> 3. Configure the bucket policy to set all objects to public read.
> 4. Use AWS Identity and Access Management roles to set the bucket to public read.
> 5. Amazon S3 objects default to public read, so no action is needed.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1, 3**
> > **Rationale:** You can either set the ACL on the object during the `PUT` operation or use a [[S3 Permissions#1. Evaluation Logic|Bucket Policy]] that grants `s3:GetObject` to `*` (All Users). Bucket ACLs do not automatically make objects public.

> [!question]
> Amazon S3 doesn't automatically give a user who creates _____ permission to perform other actions on that bucket or object.
> 1. a file
> 2. a bucket or object
> 3. a bucket or file
> 4. a object or file
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** Although the resource creator is typically the owner, S3 does not automatically grant permissions for all possible actions unless explicitly defined in policies or if the owner is the parent account. This is particularly relevant in [[S3 Permissions#3. Object Ownership (Crucial for Exam)|cross-account scenarios]].

> [!question]
> A root account owner is trying to understand the S3 bucket ACL. Which of the below mentioned options cannot be used to grant ACL on the object using the authorized predefined group?
> 1. Authenticated user group
> 2. All users group
> 3. Log Delivery Group
> 4. Canonical user group
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale:** "Canonical user group" is not a [[S3 Permissions#4. Predefined Groups (ACLs)|predefined group]]. Predefined groups include Authenticated Users, All Users, and Log Delivery. A "Canonical User ID" refers to an individual AWS account.

> [!question]
> A user is enabling logging on a particular bucket. Which of the below mentioned options may be best suitable to allow access to the log bucket?
> 1. Create an IAM policy and allow log access
> 2. It is not possible to enable logging on the S3 bucket
> 3. Create an IAM Role, which has access to the log bucket
> 4. Provide ACL for the logging group
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale:** To enable S3 server access logging, you must grant the **Log Delivery Group** write permissions via a [[S3 Permissions#4. Predefined Groups (ACLs)|Bucket ACL]]. This is one of the few remaining valid use cases for Bucket ACLs.

> [!question]
> A user is trying to configure access with S3. Which of the following options is not possible to provide access to the S3 bucket / object?
> 1. Define the policy for the IAM user
> 2. Define the ACL for the object
> 3. Define the policy for the object
> 4. Define the policy for the bucket
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** As noted previously, there is no "Object Policy" in S3. Permissions are handled via [[S3 Permissions#Option A Bucket Policies & IAM (Preferred)|IAM User Policies]], [[S3 Permissions#1. Evaluation Logic|Bucket Policies]], or [[S3 Permissions#Option C ACLs (Legacy)|ACLs]].

> [!question]
> A user is having access to objects of an S3 bucket, which is not owned by him. If he is trying to set the objects of that bucket public, which of the below mentioned options may be a right fit for this action?
> 1. Make the bucket public with full access
> 2. Define the policy for the bucket
> 3. Provide ACL on the object
> 4. Create an IAM user with permission
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** If an object is owned by a different account than the bucket owner, the bucket policy cannot grant permissions on that object. The object owner must use an **Object ACL** to manage permissions. See [[S3 Permissions#3. Object Ownership (Crucial for Exam)|Object Ownership]].

> [!question]
> A bucket owner has allowed another account's IAM users to upload or access objects in his bucket. The IAM user of Account A is trying to access an object created by the IAM user of account B. What will happen in this scenario?
> 1. The bucket policy may not be created as S3 will give error due to conflict of Access Rights
> 2. It is not possible to give permission to multiple IAM users
> 3. AWS S3 will verify proper rights given by the owner of Account A, the bucket owner as well as by the IAM user B to the object
> 4. It is not possible that the IAM user of one account accesses objects of the other IAM user
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** This is a [[S3 Permissions#2. Cross-Account Access Strategies|cross-account scenario]]. S3 evaluates the policies in the requester's context, the bucket owner's context, and the object owner's context. Access is only granted if authorized in all relevant contexts.
