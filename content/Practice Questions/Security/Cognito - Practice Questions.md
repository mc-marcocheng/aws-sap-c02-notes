---
tags: [aws, sap-c02, cognito, practice-questions]
---
# Cognito Practice Questions

> [!question]
> A company is developing a mobile application where users will upload profile images directly to an Amazon S3 bucket. The application authenticates users via their social media accounts (Google and Facebook). What is the MOST efficient and secure way to grant the application access to upload files to the S3 bucket?
> 1. Authenticate users via Google/Facebook, use AWS STS `AssumeRoleWithWebIdentity` in the application code, and use the temporary credentials to access S3.
> 2. Create an Amazon Cognito User Pool for authentication and an Identity Pool to provide temporary AWS credentials mapped to an IAM role with S3 write permissions.
> 3. Create an Amazon Cognito User Pool and map an IAM role to the User Pool group to grant access to S3.
> 4. Use an Amazon API Gateway endpoint backed by a Lambda function to upload to S3, protected by an Amazon Cognito User Pool authorizer.
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[Cognito]] Identity Pools are specifically designed to exchange identity provider tokens for temporary AWS credentials to directly access AWS resources like [[S3 Overview|S3]]. Option 4 works but is not the MOST efficient as it adds unnecessary compute (Lambda) and API hops when direct S3 access via Identity Pools is possible.

> [!question]
> A company has an existing application with millions of users stored in a custom on-premises SQL database. The company is migrating the application to AWS and wants to use Amazon Cognito User Pools for authentication. They want to migrate users seamlessly without requiring them to reset their passwords. How can this be achieved?
> 1. Export the users from the SQL database and use the Cognito User Import CSV tool to import users and passwords.
> 2. Create an AWS Lambda function for the `Pre sign-up` trigger to validate the user against the on-premises database and create the user in Cognito.
> 3. Use the User Migration Lambda trigger in Amazon Cognito to authenticate users against the legacy database during their first sign-in and migrate their profiles.
> 4. Federate the Cognito User Pool with the on-premises database using SAML 2.0.
>
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** The User Migration Lambda trigger allows you to smoothly migrate users from a legacy system. When a user tries to log in, Cognito calls the Lambda function which verifies the credentials against the old database. If successful, the user is created in Cognito with their existing password.

> [!question]
> A company uses an Application Load Balancer (ALB) in front of an Auto Scaling group of EC2 instances. The company wants to require all users to authenticate via their corporate SAML Identity Provider (IdP) before accessing the application. How can the Solutions Architect meet this requirement with the LEAST amount of custom code?
> 1. Configure the ALB to use an Amazon Cognito User Pool configured with the corporate SAML IdP as an authentication action in the listener rules.
> 2. Deploy a Lambda function as a target for the ALB to handle SAML authentication before forwarding the request to the EC2 instances.
> 3. Use Amazon Cognito Identity Pools configured with the SAML IdP and configure the ALB to validate the temporary AWS credentials.
> 4. Configure AWS IAM Identity Center with the SAML IdP and associate it with the ALB.
>
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** [[ALB Overview|ALB]] natively supports authentication via OIDC or [[Cognito]] User Pools. By configuring a Cognito User Pool with the SAML IdP, the ALB can handle the entire authentication flow without requiring custom code in the application.