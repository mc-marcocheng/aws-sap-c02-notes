---
tags: [aws, sap-c02, appsync, practice-questions] 
---
# AppSync Practice Questions

> [!question]
> A company is building a mobile application that needs to display real-time updates of sports scores. The data is stored in DynamoDB and updated frequently by backend microservices. The app must also function when the mobile device goes offline and synchronize data when connectivity is restored. Which solution requires the LEAST operational overhead?
> 1. Use API Gateway with WebSockets and a custom caching layer on the mobile app.
> 2. Use AppSync with GraphQL subscriptions and AWS Amplify DataStore on the mobile app.
> 3. Use IoT Core MQTT topics to push updates and local SQLite databases on the devices.
> 4. Use ElastiCache for Redis with a pub/sub mechanism accessed directly from the mobile app.
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[AppSync]] natively supports real-time GraphQL subscriptions and integrates with AWS Amplify DataStore to provide built-in offline synchronization and conflict resolution, minimizing operational overhead compared to building custom WebSocket or MQTT solutions.

> [!question]
> A legacy application stores customer profiles across a relational database (RDS), an OpenSearch cluster for search, and a DynamoDB table for preferences. A new front-end requires aggregating this data efficiently without making multiple API calls from the client. Which AWS service provides the most efficient way to achieve this?
> 1. Deploy an Application Load Balancer in front of Lambda functions.
> 2. Use Amazon EventBridge to aggregate the responses.
> 3. Implement Amazon AppSync to create a unified GraphQL API.
> 4. Set up an API Gateway REST API with proxy integrations.
>
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** [[AppSync]] allows defining a single GraphQL schema that resolves data from multiple disparate backend sources (RDS, OpenSearch, DynamoDB) in a single request, preventing over-fetching and reducing client-side logic.

> [!question]
> An architecture relies on Amazon AppSync to serve requests. To protect the backend systems from being overwhelmed by unexpected bursts of traffic, which mechanism should the architect use?
> 1. Use AppSync built-in rate limiting per IP address.
> 2. Attach AWS WAF to the AppSync API and implement rate-based rules.
> 3. Configure API Gateway in front of AppSync to handle throttling.
> 4. Enable DynamoDB Auto Scaling for all AppSync queries.
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** AWS [[WAF|WAF]] integrates directly with Amazon [[AppSync]] and can be used to set rate-based rules, block malicious IPs, and protect the backend from sudden traffic bursts or DDoS attacks.