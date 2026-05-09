---
tags: [aws, sap-c02, service-catalog]
---
# AWS Service Catalog

AWS Service Catalog allows organizations to create and manage catalogs of IT services that are approved for use on AWS. These IT services can include everything from virtual machine images, servers, software, and databases to complete multi-tier application architectures. It helps achieve consistent governance and compliance while enabling users to self-serve approved resources.

## Key Concepts
- **Product**: An IT service that you want to make available for deployment on AWS. A product consists of one or more AWS CloudFormation templates.
- **Portfolio**: A collection of products with configuration information. Portfolios are used to manage who can use specific products and how they can use them.
- **Provisioned Product**: An instance of a product that has been deployed.
- **Constraints**: Rules applied to portfolios or products to control how they can be deployed.
    - **Launch Constraints**: Specify an IAM role that Service Catalog assumes when an end-user launches the product. This allows users to deploy resources they don't natively have IAM permissions to create.
    - **Template Constraints**: Limit the parameters that users can input when launching a product (e.g., restricting EC2 instance types to `t3.micro`).

## Architecture & Workflow
1. **Administrator** creates a CloudFormation template defining the product.
2. Administrator uploads the template to Service Catalog as a **Product**.
3. Administrator adds the Product to a **Portfolio**.
4. Administrator assigns **IAM Users/Groups/Roles** access to the Portfolio.
5. Administrator applies **Constraints** (e.g., a Launch Constraint to grant the service necessary permissions).
6. **End User** browses the Service Catalog and provisions the product, overriding parameters within allowed limits.

## Use Cases
- Standardizing deployments to ensure compliance with corporate security policies.
- Abstracting complex CloudFormation templates into simple products for non-technical users.
- Providing self-service portals for developers to spin up development environments.

## Strategic Scenarios

> [!exam]
> **SAP-C02 Scenario: Self-Service with Least Privilege**
> *Scenario:* Developers need to be able to provision new EC2 instances for testing. However, security policy dictates that developers cannot have direct EC2 launch permissions (`ec2:RunInstances`) to prevent them from launching unapproved instance types or AMIs.
> *Solution:* Use **AWS Service Catalog**. 
> 1. Create a CloudFormation template for the approved EC2 setup (Product).
> 2. Create an IAM role with the necessary permissions to launch the EC2 instance (e.g., `ec2:RunInstances`).
> 3. Add a **Launch Constraint** to the Product using this IAM role.
> 4. Grant developers IAM access only to the Service Catalog portfolio. 
> Developers can now launch the approved instances via Service Catalog without needing direct EC2 permissions.

> [!important]
> **Service Catalog vs CloudFormation StackSets**
> - **Service Catalog** is for **self-service provisioning** within a single account or shared across accounts. It is driven by the *end user*.
> - **StackSets** is for **fleet management** and centralized deployment across multiple accounts/regions, driven by an *administrator*.
> Portfolios can be shared across an AWS Organization to allow member accounts to consume centrally managed products.

---
**Practice:** [[Service Catalog - Practice Questions|Service Catalog Practice Questions]]
