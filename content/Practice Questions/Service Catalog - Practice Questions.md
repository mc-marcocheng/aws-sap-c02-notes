---
tags: [aws, sap-c02, service-catalog, practice-questions]
---
# Service Catalog - Practice Questions

> [!question] Question 1: Self-Service Provisioning without Direct Permissions
> A data science team frequently needs to deploy Amazon EMR clusters for data processing tasks. The security team wants to ensure that the data scientists can launch these clusters on-demand, but they must strictly use approved AMIs, specific VPC subnets, and only `m5.xlarge` instance types. The data scientists should NOT have direct IAM permissions to create EMR clusters or modify VPC settings to prevent misconfigurations.
> 
> What is the most secure and operationally efficient way to implement this?
> 
> 1. Create an IAM policy that allows `elasticmapreduce:RunJobFlow` but uses `Condition` keys to restrict the AMI, VPC subnet, and instance type. Attach this policy directly to the data scientists' IAM group.
> 2. Create an AWS CloudFormation template defining the approved EMR cluster. Upload it to AWS Service Catalog as a product in a portfolio. Apply a Template Constraint to restrict the instance type. Apply a Launch Constraint with an IAM role that has permissions to create the EMR cluster. Grant the data scientists access to the portfolio.
> 3. Create a Lambda function that takes an API Gateway request and launches the EMR cluster using the approved configurations. Give the data scientists access to invoke the API Gateway endpoint.
> 4. Use CloudFormation StackSets to deploy the EMR clusters to the data scientists' accounts whenever they request one via a Jira ticket.
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:**
> > - **B is correct** because AWS Service Catalog is designed exactly for this use case: providing self-service provisioning of approved architectures while enforcing constraints. 
> >   - The **Template Constraint** enforces the `m5.xlarge` instance type rule.
> >   - The **Launch Constraint** allows the Service Catalog to assume a role to provision the resources on behalf of the user, meaning the user doesn't need direct IAM permissions (satisfying the requirement that they shouldn't have direct EMR permissions).
> > - A is incorrect because while IAM conditions can restrict some aspects, complex restrictions (like specific subnets and AMIs together) are difficult to manage purely with IAM. Furthermore, Service Catalog provides a better UI/UX for self-service.
> > - C is incorrect because building a custom API and Lambda function introduces unnecessary development and maintenance overhead when a native service (Service Catalog) exists for this purpose.
> > - D is incorrect because StackSets is for administrator-driven, multi-account deployments, not end-user self-service provisioning.
> > 
> > **Links:** [[Service Catalog]]

> [!question] Question 2: Multi-Account Portfolio Sharing
> A central cloud center of excellence (CCoE) team has created an AWS Service Catalog portfolio containing several approved IT services. The company uses AWS Organizations with 50 member accounts. The CCoE team wants to make this portfolio available to all developers across all 50 member accounts without having to manually share the portfolio with each account ID.
> 
> How should the CCoE team achieve this?
> 
> 1. Enable AWS Organizations sharing in Service Catalog. Share the portfolio with the entire Organization or specific Organizational Units (OUs).
> 2. Create a CloudFormation StackSet that deploys a copy of the portfolio and all its products to every member account in the Organization.
> 3. Update the IAM permissions of the portfolio to allow `Principal: "*"` with a condition `aws:PrincipalOrgID` matching the Organization ID.
> 4. It is not possible to share portfolios automatically. The CCoE team must script the AWS CLI `aws servicecatalog create-portfolio-share` command to run for each account ID.
>
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:**
> > - **A is correct** because AWS Service Catalog integrates natively with AWS Organizations. You can share portfolios directly with the organization root or specific OUs. When shared this way, the portfolio automatically becomes available to all member accounts within the specified scope, without needing manual account-by-account sharing.
> > - B is incorrect because duplicating the portfolio via StackSets creates unnecessary overhead and makes maintaining the products difficult (you'd have to update 50 copies instead of 1 shared portfolio).
> > - C is incorrect because Service Catalog sharing is managed via Portfolio Sharing mechanisms, not standard IAM resource-based policies attached directly to the portfolio.
> > - D is incorrect because Organizations integration eliminates the need for manual or scripted account-by-account sharing.
> > 
> > **Links:** [[Service Catalog]], [[Organizations Overview]]
