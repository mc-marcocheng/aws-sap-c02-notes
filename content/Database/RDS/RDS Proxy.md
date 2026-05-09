---
tags: [aws, sap-c02, database, rds, rds-proxy]
---
# Amazon RDS Proxy

> [!info] Amazon RDS Proxy
> A fully managed, highly available database proxy for Amazon RDS and Amazon Aurora that makes applications more scalable, more resilient to database failures, and more secure.

## Key Features
- **Connection Pooling:** Multiplexes many application connections to fewer database connections, reducing database memory and CPU overhead.
- **Failover Acceleration:** Reduces failover times for Aurora and RDS multi-AZ databases by up to 66% by automatically routing traffic to the new primary instance without application intervention.
- **Security:** Enforces IAM authentication for databases and securely manages database credentials using AWS Secrets Manager.
- **Serverless Integration:** Ideal for AWS Lambda functions that require relational database access, preventing connection exhaustion.

## Use Cases
- Serverless applications (AWS Lambda) querying RDS/Aurora.
- Applications with unpredictable or highly variable database traffic (e.g., flash sales).
- Improving database availability and minimizing application downtime during failovers.
- Centralizing database credential management and enforcing IAM authentication.

## Architecture

> [!important] How it Works
> The application connects to the RDS Proxy endpoint instead of the database endpoint. The proxy maintains a pool of established connections to the database. When the application sends a query, the proxy borrows a connection from the pool, executes the query, and returns the connection to the pool.

### Comparison: Direct Connection vs. RDS Proxy

| Feature | Direct Connection | RDS Proxy |
| :--- | :--- | :--- |
| **Connection Limits** | Bound by database instance size | Handles thousands of concurrent application connections |
| **Failover Handling** | Application must handle DNS caching and reconnect | Proxy seamlessly routes to the new primary, minimizing impact |
| **Authentication** | Native DB credentials (IAM auth supported but requires app changes) | Enforces IAM authentication, manages secrets transparently |

## Strategic Scenarios

> [!exam] SAP-C02 Exam Scenario
> **Scenario:** A serverless application built with thousands of concurrent AWS Lambda functions is overwhelming the Amazon Aurora MySQL database with connection requests, causing `TooManyConnections` errors.
> **Solution:** Implement **Amazon RDS Proxy** between the Lambda functions and the Aurora database. Configure the Lambda functions to connect to the RDS Proxy endpoint. Store the database credentials in **AWS Secrets Manager** and configure RDS Proxy to use them. Enable IAM authentication for the Lambda functions to connect to the proxy.

---
**Practice:** [[RDS Proxy - Practice Questions|RDS Proxy Practice Questions]]