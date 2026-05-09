---
tags: [aws, sap-c02, dynamodb, dax, practice-questions]
---
# DynamoDB DAX Practice Questions

> [!question]
> A company has setup an application in AWS that interacts with DynamoDB. DynamoDB is currently responding in milliseconds, but the application response guidelines require it to respond within microseconds. How can the performance of DynamoDB be further improved?
> 1. Use ElastiCache in front of DynamoDB
> 2. Use DynamoDB inbuilt caching
> 3. Use DynamoDB Accelerator
> 4. Use RDS with ElastiCache instead
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** [[DynamoDB DAX|DynamoDB Accelerator (DAX)]] is an in-memory cache specifically designed for DynamoDB that reduces response times from milliseconds to **microseconds**. While ElastiCache could be used, DAX is API-compatible and requires minimal code changes, making it the preferred solution for sub-millisecond DynamoDB performance.

> [!question]
> A company needs to manage DAX clusters from their on-premises data center without exposing traffic to the public internet. Which feature should they use?
> 1. VPC gateway endpoint
> 2. Internet gateway with security groups
> 3. AWS PrivateLink for DAX
> 4. NAT gateway
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** [[DynamoDB DAX]] supports [[VPC Endpoints|AWS PrivateLink]] for management APIs (like `CreateCluster` or `DescribeClusters`). This allows performing administrative operations privately over an interface VPC endpoint without needing to traverse the public internet.

> [!question]
> What is the maximum number of nodes a DAX cluster can scale to?
> 1. 3 nodes
> 2. 5 nodes
> 3. 10 nodes
> 4. Unlimited nodes
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** A [[DynamoDB DAX]] cluster can consist of a single primary node and up to 9 read replicas, totaling **10 nodes**. This allows for horizontal scaling to handle millions of requests per second.

> [!question]
> A company requires customer-managed KMS keys for encrypting all data at rest. Can they use DAX for their DynamoDB tables?
> 1. Yes, DAX supports customer-managed keys
> 2. No, DAX only supports AWS-owned keys for encryption at rest
> 3. Yes, but only for the item cache
> 4. Yes, but only for the query cache
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** One of the security limitations of [[DynamoDB DAX]] is that it only supports **AWS-owned keys** for encryption at rest. It does NOT support customer-managed KMS keys (CMKs). If this is a strict compliance requirement, the company cannot use DAX.

> [!question]
> Which write strategy should be used for bulk uploads to minimize write latency in DAX?
> 1. Write-around
> 2. Write-through
> 3. Write-back
> 4. Write-behind
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** The **Write-around** strategy bypasses the [[DynamoDB DAX]] cache and writes directly to DynamoDB. This is ideal for bulk uploads or large write operations where the data isn't immediately needed in the cache, as it reduces the overhead and latency associated with updating the cache.

> [!question]
> Which of the following statements about DAX are correct? (Select THREE)
> 1. DAX supports AWS PrivateLink for management APIs
> 2. DAX caches strongly consistent reads
> 3. DAX can scale to 10 nodes for millions of requests per second
> 4. DAX supports customer-managed KMS keys
> 5. DAX provides microsecond response times for eventually consistent reads
> 
> > [!success]- Answer & Rationale
> > **Answer: 1, 3, 5**
> > **Rationale:** [[DynamoDB DAX]] provides microsecond performance for eventually consistent reads and scales horizontally up to 10 nodes. It also supports [[VPC Endpoints|AWS PrivateLink]] for management operations. However, it does NOT cache strongly consistent reads (they pass through to DynamoDB) and it does NOT support customer-managed KMS keys.

> [!question]
> What happens when a strongly consistent read request is made to DAX?
> 1. DAX returns the cached value
> 2. DAX passes the request through to DynamoDB without caching
> 3. DAX returns an error
> 4. DAX converts it to an eventually consistent read
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[DynamoDB DAX]] is optimized for eventually consistent reads. When a **strongly consistent read** is requested, DAX passes the request directly to DynamoDB. The result is returned to the application but is **not cached** in DAX.
