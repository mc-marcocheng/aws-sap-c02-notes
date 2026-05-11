---
tags: [aws, sap-c02, dynamodb, database, practice-questions]
---
# DynamoDB Advanced Practice Questions

> [!question]
> What are the services supported by VPC endpoints, using Gateway endpoint type? (Choose 2 answers)
> 1. Amazon S3
> 2. Amazon EFS
> 3. Amazon DynamoDB
> 4. Amazon Glacier
> 5. Amazon SQS
> 
> > [!success]- Answer & Rationale
> > **Answer: 1, 3**
> > **Rationale:** [[VPC Endpoints|VPC Gateway Endpoints]] are a specific type of [[VPC Endpoints|VPC Endpoint]] that provide private connectivity to only two AWS services: [[S3 Overview|Amazon S3]] and [[DynamoDB Overview|Amazon DynamoDB]]. Unlike [[VPC Endpoints|VPC Interface Endpoints]] (powered by [[VPC Endpoints|PrivateLink]]), they do not require an [[VPC Overview|Elastic Network Interface]] (ENI) or a private IP address from your subnet; instead, they use a prefix list in the [[VPC Overview - Route Tables|Route Table]] to direct traffic. Services like [[EFS|Amazon EFS]], [[SQS Overview|Amazon SQS]], and [[S3 Storage Classes|Glacier]] use [[VPC Endpoints|VPC Interface Endpoints]].

> [!question]
> A company has setup an application in AWS that interacts with DynamoDB. DynamoDB is currently responding in milliseconds, but the application response guidelines require it to respond within microseconds. How can the performance of DynamoDB be further improved?
> 1. Use ElastiCache in front of DynamoDB
> 2. Use DynamoDB inbuilt caching
> 3. Use DynamoDB Accelerator
> 4. Use RDS with ElastiCache instead
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** [[DynamoDB DAX|DynamoDB Accelerator (DAX)]] is a fully managed, highly available, in-memory cache specifically designed for [[DynamoDB Overview|DynamoDB]]. It provides up to a 10x performance improvement, reducing latency from milliseconds to microseconds, even at millions of requests per second. While [[ElastiCache]] can be used to cache database results, [[DynamoDB DAX|DAX]] is preferred for [[DynamoDB Overview|DynamoDB]] because it is API-compatible and handles cache invalidation and data population automatically.
