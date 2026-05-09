---
tags: [aws, sap-c02, database, rds, rds-proxy, practice-questions]
---
# RDS Proxy - Practice Questions

> [!question]
> A popular e-commerce platform uses an Amazon Aurora MySQL database cluster. During flash sales, a sudden spike in traffic causes thousands of AWS Lambda functions to invoke concurrently. The Aurora cluster experiences performance degradation and connection timeouts due to an excessive number of database connections, even though the database CPU utilization remains relatively low.
> 
> Which solution will resolve this issue with the LEAST amount of application code changes?
> 
> 1. Increase the instance size of the Aurora database cluster to support more connections.
> 2. Implement an Amazon SQS queue to decouple the Lambda functions from the database, processing requests asynchronously.
> 3. Configure Amazon RDS Proxy between the Lambda functions and the Aurora database. Update Lambda connection strings to point to the proxy.
> 4. Implement connection pooling directly within the AWS Lambda function code using global variables.
>
> > [!success]- Answer & Rationale
> > **Answer:** C
> > **Rationale:**
> > [[RDS Proxy]] acts as an intermediary connection pooler. It maintains a pool of established connections to the Aurora database and multiplexes the many connections from the Lambda functions to the fewer database connections. This prevents the database from being overwhelmed by connection requests ("connection storm"). Updating the Lambda connection string is a minimal code change.
> > Option A might temporarily delay the issue but doesn't solve the underlying problem of connection exhaustion, and it increases costs.
> > Option B requires significant architectural and code changes to move to an asynchronous model.
> > Option D is ineffective for Lambda because connection pooling within a single Lambda execution environment does not share connections across thousands of concurrent execution environments.

> [!question]
> A critical financial application relies on an Amazon RDS for PostgreSQL Multi-AZ deployment. The business requirement dictates a maximum Recovery Time Objective (RTO) of 10 seconds in the event of a primary database failure. The application currently experiences up to 60 seconds of downtime during a Multi-AZ failover due to DNS propagation and connection timeout delays.
> 
> How can a Solutions Architect minimize the application downtime during a database failover to meet the RTO?
> 
> 1. Migrate the database to Amazon DynamoDB to leverage multi-region replication.
> 2. Implement an Amazon Route 53 health check and a low TTL for the database endpoint.
> 3. Configure an Amazon RDS Proxy endpoint for the application to connect to.
> 4. Use Amazon Aurora Global Database to provide faster cross-region failover.
>
> > [!success]- Answer & Rationale
> > **Answer:** C
> > **Rationale:**
> > [[RDS Proxy]] significantly reduces failover times (up to 66% faster) for RDS and Aurora databases. When a failover occurs, RDS Proxy detects the new primary instance and automatically routes traffic to it without relying on DNS propagation. It holds application connections open during the failover, preventing connection timeouts and hiding the failover process from the application. This is the most direct way to reduce failover time for an existing RDS instance.
> > Option A is a complete rewrite of the application to use a NoSQL database.
> > Option B is how RDS Multi-AZ natively works, but DNS propagation still causes the 60-second delay the application is currently experiencing.
> > Option D is for cross-region disaster recovery, not for minimizing local Multi-AZ failover time.