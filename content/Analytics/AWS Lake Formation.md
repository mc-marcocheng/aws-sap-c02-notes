---
tags: [aws, sap-c02, analytics, lake-formation]
---
# AWS Lake Formation

> [!info] AWS Lake Formation
> A service that makes it easy to set up a secure data lake in days. It helps you collect, catalog, clean, and secure data in Amazon S3, making it available for analytics and machine learning.

## Key Features
- **Centralized Access Control:** Define fine-grained access controls (table, column, row, and cell level) centrally for data in S3.
- **Blueprints:** Use built-in blueprints to ingest data from relational databases and log sources.
- **Data Catalog:** Builds on the AWS Glue Data Catalog.
- **Data Filtering:** Restrict access to specific rows and columns.
- **Cross-Account Access:** Share data across AWS accounts securely.

## Use Cases
- Building secure data lakes on Amazon S3.
- Centralizing data governance and access control.
- Enforcing fine-grained permissions for Amazon Athena, Amazon Redshift Spectrum, and Amazon EMR.

## Architecture

> [!important] Integration with Analytics
> Lake Formation acts as the authorization layer. When users query data via Athena, Redshift Spectrum, or EMR, those services request credentials from Lake Formation, which enforces the permissions before returning the data from S3.

### Comparison: Lake Formation vs. IAM/S3 Policies

| Feature | Lake Formation | IAM / S3 Policies |
| :--- | :--- | :--- |
| **Granularity** | Database, Table, Column, Row, Cell | Bucket, Object |
| **Management** | Centralized for Data Lakes | Decentralized, per resource/role |
| **Analytics Engine Support** | Native (Athena, EMR, Redshift Spectrum) | Requires complex bucket policy mapping |

## Strategic Scenarios

> [!exam] SAP-C02 Exam Scenario
> **Scenario:** A company has a multi-tenant data lake on Amazon S3. Different departments (HR, Finance, Marketing) need access to specific columns and rows within the same datasets using Amazon Athena.
> **Solution:** Implement **AWS Lake Formation** to define row-level and column-level security policies. Register the S3 path in Lake Formation, grant fine-grained permissions to IAM roles/users representing the departments, and have users query via Athena. This avoids data duplication and complex S3 bucket policies.

---
**Practice:** [[AWS Lake Formation - Practice Questions|AWS Lake Formation Practice Questions]]