---
tags: [aws, sap-c02, iam, security, practice-questions]
---
# IAM Federation Practice Questions


> [!question]
> A photo-sharing service stores pictures in Amazon Simple Storage Service (S3) and allows application sign-in using an OpenID Connect-compatible identity provider. Which AWS Security Token Service approach to temporary access should you use for the Amazon S3 operations?
> 1. SAML-based Identity Federation
> 2. Cross-Account Access
> 3. AWS IAM users
> 4. Web Identity Federation
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale**: [[IAM Federation|Web Identity Federation]] is specifically designed for applications that use OpenID Connect (OIDC) or social identity providers (like Google, Facebook, or Amazon) to authenticate users and exchange their tokens for temporary AWS credentials via [[IAM Roles and Policies|AWS STS]].

> [!question]
> Which technique can be used to integrate AWS IAM (Identity and Access Management) with an on-premise LDAP (Lightweight Directory Access Protocol) directory service?
> 1. Use an IAM policy that references the LDAP account identifiers and the AWS credentials.
> 2. Use SAML (Security Assertion Markup Language) to enable single sign-on between AWS and LDAP.
> 3. Use AWS Security Token Service from an identity broker to issue short-lived AWS credentials.
> 4. Use IAM roles to automatically rotate the IAM credentials when LDAP credentials are updated.
> 5. Use the LDAP credentials to restrict a group of users from launching specific EC2 instance types.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale**: When using a non-SAML compatible directory like a custom LDAP, a custom identity broker is required. This broker authenticates the user against LDAP and then calls [[IAM Roles and Policies|AWS STS]] (e.g., `AssumeRole`) to obtain temporary credentials. See [[IAM Federation#3. Custom Identity Broker|Custom Identity Broker]].

> [!question]
> You are designing a photo sharing mobile app the application will store all pictures in a single Amazon S3 bucket. Users will upload pictures from their mobile device directly to Amazon S3 and will be able to view and download their own pictures directly from Amazon S3. You want to configure security to handle potentially millions of users in the most secure manner possible. What should your server-side application do when a new user registers on the photo-sharing mobile application?
> 1. Create a set of long-term credentials using AWS Security Token Service with appropriate permissions Store these credentials in the mobile app and use them to access Amazon S3.
> 2. Record the user’s Information in Amazon RDS and create a role in IAM with appropriate permissions. When the user uses their mobile app create temporary credentials using the AWS Security Token Service “AssumeRole” function.
> 3. Record the user’s Information in Amazon DynamoDB. When the user uses their mobile app create temporary credentials using AWS Security Token Service with appropriate permissions.
> 4. Create IAM user. Assign appropriate permissions to the IAM user Generate an access key and secret key for the IAM user, store them in the mobile app.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale**: For millions of users, creating individual IAM users is not scalable or secure. The best approach is to store user metadata in [[DynamoDB Overview|Amazon DynamoDB]] and use a federation mechanism (like [[IAM Federation|Amazon Cognito]] or a custom broker using [[IAM Roles and Policies|AWS STS]]) to provide temporary, scoped access to [[S3 Overview|Amazon S3]].

> [!question]
> Your company has recently extended its datacenter into a VPC on AWS to add burst computing capacity as needed. Members of your Network Operations Center (NOC) need to be able to go to the AWS Management Console and administer Amazon EC2 instances as necessary. You don’t want to create new IAM users for each NOC member. Which option below will meet the needs for your NOC members?
> 1. Use OAuth 2.0 to retrieve temporary AWS security credentials to enable your NOC members to sign in to the AWS Management Console.
> 2. Use Web Identity Federation to retrieve AWS temporary security credentials to enable your NOC members to sign in to the AWS Management Console.
> 3. Use your on-premises SAML 2.0-compliant identity provider (IDP) to grant the NOC members federated access to the AWS Management Console via the AWS single sign-on (SSO) endpoint.
> 4. Use your on-premises SAML 2.0-compliant identity provider (IDP) to retrieve temporary security credentials to enable NOC members to sign in to the AWS Management Console.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale**: For enterprise console access using an existing directory, [[IAM Federation#1. SAML 2.0 Federation (Enterprise)|SAML 2.0 Federation]] is the standard. Users authenticate with their IdP and are redirected to the AWS SSO endpoint to access the console without needing local IAM users.

> [!question]
> A corporate web application is deployed within an Amazon VPC and is connected to the corporate data center via an IPsec VPN. The application must authenticate against the on-premises LDAP server. After authentication, each logged-in user can only access an Amazon S3 keyspace specific to that user. Which two approaches can satisfy these objectives? (Choose 2)
> 1. Develop an identity broker that authenticates against IAM security Token service to assume a IAM role.
> 2. The application authenticates against LDAP and retrieves the name of an IAM role associated with the user. The application then calls the IAM Security Token Service to assume that IAM role.
> 3. Develop an identity broker that authenticates against LDAP and then calls IAM Security Token Service to get IAM federated user credentials (GetFederationToken).
> 4. The application authenticates against LDAP then calls IAM STS to log in to IAM using the LDAP credentials.
> 5. The application authenticates against IAM Security Token Service using the LDAP credentials.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2 & 3**
> > **Rationale**: Both options involve authenticating against the on-premises LDAP first. Option 2 uses `AssumeRole` to get scoped credentials, while Option 3 uses `GetFederationToken` (often used by identity brokers for users who don't have IAM identities). See [[IAM Federation#3. Custom Identity Broker|Custom Identity Broker]].

> [!question]
> Company B is launching a new game app for mobile devices. Users will log into the game using their existing social media account. Company B would like to directly save player data to a DynamoDB table and progress data to an S3 bucket. What is the best approach?
> 1. Use an EC2 Instance with an EC2 role that communicates with the mobile app via web services.
> 2. Use temporary security credentials that assume a role providing access using web identity federation.
> 3. Use Login with Amazon allowing users to sign in with an Amazon account.
> 4. Use an IAM user with access credentials assigned a role for distribution with the mobile app.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale**: [[IAM Federation|Web Identity Federation]] allows mobile applications to authenticate via social providers and obtain temporary credentials to access [[DynamoDB Overview|Amazon DynamoDB]] and [[S3 Overview|Amazon S3]] directly, avoiding the need for intermediate servers or hardcoded credentials.

> [!question]
> A user has created a mobile application which makes calls to DynamoDB. The application is using the DynamoDB SDK and root account access keys (bad practice). What is the best practice?
> 1. Create a separate IAM user for each mobile application and provide DynamoDB access.
> 2. Create an IAM role with DynamoDB and EC2 access. Route all calls through EC2.
> 3. The application should use an IAM role with web identity federation which validates calls with identity providers (Google, Amazon, Facebook).
> 4. Create an IAM Role with DynamoDB access and attach it with the mobile application.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale**: Never distribute long-term credentials (especially root keys) in mobile apps. The best practice is to use [[IAM Federation|Web Identity Federation]] (or [[IAM Federation|Amazon Cognito]]) to provide temporary, least-privilege credentials to the mobile client.

> [!question]
> You are managing the AWS account of a big organization with 1000+ employees. They want to provide access to various services to most employees. What is the best possible solution?
> 1. Create a separate IAM user for each employee.
> 2. Create an IAM role and attach STS with the role. Attach that role to the EC2 instance.
> 3. Create IAM groups as per the organization’s departments and add each user.
> 4. Attach an IAM role with the organization’s authentication service to authorize each user.
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale**: For large organizations, integrating AWS with the existing [[IAM Federation#1. SAML 2.0 Federation (Enterprise)|Identity Provider (SAML 2.0)]] is the most scalable approach. It centralizes user management and avoids the overhead of managing 1000+ IAM users.

> [!question]
> Your company is evaluating Amazon S3 for personal document storage for all employees. You need to set up single sign-on from your corporate AD/LDAP directory and restrict access for each user to a designated user folder in a bucket. Which three things do you need to consider? (Choose 3)
> 1. Setting up a federation proxy or identity provider.
> 2. Using AWS Security Token Service to generate temporary tokens.
> 3. Tagging each folder in the bucket.
> 4. Configuring IAM role.
> 5. Setting up a matching IAM user for every user in your corporate directory.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1, 2, 4**
> > **Rationale**: To achieve SSO from AD/LDAP to S3 with folder-level isolation, you need: 1. An [[IAM Federation|Identity Provider (IdP)]] or proxy, 2. [[IAM Roles and Policies|AWS STS]] to provide temporary credentials, and 4. An IAM Role with a policy using policy variables (like `${saml:sub}` or `${auth:principalid}`) to restrict folder access.

> [!question]
> A web application has confidential data on S3. The security policy requires that all access must be authenticated by a centralized access management system operated by a separate security team. The web app team must be prohibited from circumventing this system. Which configuration supports this?
> 1. Encrypt data on S3 using CloudHSM operated by the security team.
> 2. Configure the web application to authenticate end-users against the centralized system. Have the web application provision trusted users STS tokens for S3.
> 3. Have the security team create an IAM role for S3 access. Have the web team provision instances with this role.
> 4. Configure the web application to authenticate end-users using SAML. Have end-users authenticate to IAM using the SAML token.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale**: By using a centralized system to authenticate users and then having the application request specific, short-lived [[IAM Roles and Policies|AWS STS]] tokens, the security team maintains control. The web team cannot access the data directly because they don't have the user credentials required by the centralized system.

> [!question]
> What is web identity federation?
> 1. Use of an identity provider like Google or Facebook to become an AWS IAM User.
> 2. Use of an identity provider like Google or Facebook to exchange for temporary AWS security credentials.
> 3. Use of AWS IAM User tokens to log in as a Google or Facebook user.
> 4. Use of AWS STS Tokens to log in as a Google or Facebook user.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale**: [[IAM Federation|Web Identity Federation]] is the process where a user authenticates with a public IdP (Google, Facebook, etc.) and exchanges that authentication token for temporary AWS credentials using [[IAM Roles and Policies|AWS STS]].

> [!question]
> Games-R-Us is launching a new game app. Users will log in using Facebook and the game records player data to DynamoDB. What is the most secure approach for signing requests to the DynamoDB API?
> 1. Create an IAM user with access credentials distributed with the mobile app.
> 2. Distribute the AWS root account access credentials with the mobile app.
> 3. Request temporary security credentials using web identity federation.
> 4. Establish cross account access between the mobile app and the DynamoDB table.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale**: Using [[IAM Federation|Web Identity Federation]] ensures that no long-term credentials are stored on the device and that each user gets their own temporary, restricted credentials.

> [!question]
> You are building a simple and cheap mobile app for cat pictures using S3. Which option allows you to build this without worrying about scaling, authentication, or authorization?
> 1. Build the application using AWS Cognito and web identity federation.
> 2. Use JWT or SAML compliant systems to build authorization policies.
> 3. Use AWS API Gateway with a constantly rotating API Key.
> 4. Create an AWS OAuth Service Domain.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale**: [[IAM Federation|Amazon Cognito]] acts as an identity broker, handling interaction with multiple identity providers and providing a simple way to manage identities and access to AWS resources like [[S3 Overview|Amazon S3]] without managing servers.

> [!question]
> You are creating a mobile app in JavaScript for users to post sightings of good deeds to DynamoDB. Which option provides the most cost-effective and scalable architecture?
> 1. Use a Token Vending Machine (TVM) on an EC2 instance to provide signed credentials.
> 2. Register the app with a Web Identity Provider, create an IAM role, and serve the app out of an S3 bucket (website).
> 3. Use a TVM on load-balanced/autoscaled Apache EC2 instances.
> 4. Register with WIF and use Apache EC2 instances to serve the app.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale**: Serving the frontend from an [[S3 Overview|Amazon S3]] bucket as a static website is highly cost-effective and scalable. Using [[IAM Federation|Web Identity Federation]] (WIF) allows the client-side JavaScript to directly interact with [[DynamoDB Overview|Amazon DynamoDB]] using temporary credentials, removing the need for EC2 backend servers.
