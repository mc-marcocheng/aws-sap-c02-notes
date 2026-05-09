---
tags: [aws, sap-c02, iam, security, practice-questions]
---
# IAM Best Practices Practice Questions

> [!question]
> Your organization is preparing for a security assessment of your use of AWS. In preparation for this assessment, which two IAM best practices should you consider implementing? (Choose 2 answers)
> 1. Create individual IAM users for everyone in your organization
> 2. Configure MFA on the root account and for privileged IAM users
> 3. Assign IAM users and groups configured with policies granting least privilege access
> 4. Ensure all users have been assigned and are frequently rotating a password, access ID/secret key, and X.509 certificate
> 
> > [!success]- Answer & Rationale
> > **Answer: 2, 3**
> > **Rationale:** 
> > 2: Enabling [[IAM Best Practices|MFA]] on the root account and for privileged users is a critical security layer. 
> > 3: Granting [[IAM Best Practices|Least Privilege]] via groups and policies ensures that users only have the minimum permissions necessary to perform their tasks, reducing the blast radius of a potential compromise.
> > *Note:* While creating individual users (1) is a best practice, it may be superseded by using [[IAM Roles and Policies|IAM Roles]] and Federation. Rotating credentials (4) should only be enforced for those who actually need them (e.g., users requiring console or CLI access), not "all users" globally if they use federation.

> [!question]
> What are the recommended best practices for IAM? (Choose 3 answers)
> 1. Grant least privilege
> 2. Use the AWS account (root) for regular user
> 3. Use Multi-Factor Authentication (MFA)
> 4. Store access key/private key in git
> 5. Rotate credentials regularly
> 
> > [!success]- Answer & Rationale
> > **Answer: 1, 3, 5**
> > **Rationale:** 
> > 1: [[IAM Best Practices|Least Privilege]] is the foundation of IAM security. 
> > 3: [[IAM Best Practices|MFA]] adds a required second layer of authentication. 
> > 5: Regular rotation of credentials (passwords and access keys) limits the lifespan of compromised credentials.
> > *Note:* You should never use the root account for daily tasks (2) or store secrets in source control (4).

> [!question]
> Which of the below mentioned options is NOT a best practice to securely manage the AWS access credentials?
> 1. Enable MFA for privileged users
> 2. Create individual IAM users
> 3. Keep rotating your secure access credentials at regular intervals
> 4. Create strong access key and secret access key and attach to the root account
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale:** 
> > 4: Attaching access keys to the root account is a major security risk. The [[IAM Best Practices|Root Account]] should have its access keys deleted, and administrative tasks should be performed by an IAM user or role with the `AdministratorAccess` policy.

> [!question]
> Your CTO is very worried about the security of your AWS account. How best can you prevent hackers from completely hijacking your account?
> 1. Use short but complex password on the root account and any administrators.
> 2. Use AWS IAM Geo-Lock and disallow anyone from logging in except for in your city.
> 3. Use MFA on all users and accounts, especially on the root account.
> 4. Don't write down or remember the root account password after creating the AWS account.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** 
> > 3: [[IAM Best Practices|MFA]] is the most effective way to prevent unauthorized access even if credentials are stolen. It is especially critical for the [[IAM Best Practices|Root Account]].
> > *Note:* Geo-Lock (2) is not a standard IAM feature in the way described. Short passwords (1) are less secure than long ones.

> [!question]
> Fill the blanks: ____ helps us track AWS API calls and transitions, ____ helps to understand what resources we have now, and ____ allows auditing credentials and logins.
> 1. AWS Config, CloudTrail, IAM Credential Reports
> 2. CloudTrail, IAM Credential Reports, AWS Config
> 3. CloudTrail, AWS Config, IAM Credential Reports
> 4. AWS Config, IAM Credential Reports, CloudTrail
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** 
> > [[CloudTrail Overview|CloudTrail]] records AWS API calls for the account. 
> > [[AWS Config]] provides a detailed inventory of your AWS resources and their configuration history. 
> > [[IAM Best Practices|IAM Credential Report]] lists all users in your account and the status of their various credentials, including passwords, access keys, and MFA devices.
