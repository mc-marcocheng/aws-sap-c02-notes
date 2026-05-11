---
tags: [aws, sap-c02, storage, s3]
---
# S3 Subresources

S3 Subresources manage specific bucket and object configurations. This note focuses on key operational features.

## 1. Static Website Hosting
- **Function**: Serves static web content (HTML, JS, CSS) directly from S3.
- **Endpoint**: `<bucket-name>.s3-website-<region>.amazonaws.com`.
- **Key Constraints**:
    - Does **NOT** support HTTPS (use CloudFront for SSL).
    - Bucket must be public (or use CloudFront OAC/OAI).
- **Configuration**: Requires an Index document and an optional Error document.

## 2. CORS (Cross-Origin Resource Sharing)
- **Function**: Defines how client web applications in one domain can interact with resources in a different domain.
- **Use Case**: A website at `example.com` loading fonts or images from `my-s3-bucket.s3.amazonaws.com`.

## 3. Event Notifications
- **Function**: Triggers actions when specific events occur in a bucket (e.g., `s3:ObjectCreated:*`).
- **Destinations**: [[Lambda]], [[SQS Overview|SQS]], [[SNS]].
- **EventBridge Integration**: S3 can publish events to **Amazon EventBridge**.
    - **Recommended**: Use EventBridge for advanced content filtering, routing to multiple targets, and integrating with other AWS services.

## 4. Querying & Billing

### S3 Select
- **Function**: Uses SQL to retrieve only a subset of data from an object (CSV, JSON, Parquet).
- **Benefit**: Drastically reduces data transfer costs and improves performance by filtering data at the storage layer instead of the application layer.

### Requester Pays
- **Function**: The requester (instead of the bucket owner) pays the cost of the data transfer and the requests.
- **Requirement**: The requester must include `x-amz-request-payer` in their request.

## Related Services
- [[_Storage Index|Storage Index]]
- [[S3 Overview|S3]]
- [[CloudFront Overview|CloudFront]]
- [[Lambda]]
- [[SQS Overview|SQS]]
- [[EventBridge]]

---
**Practice:** [[S3 Subresources - Practice Questions|S3 Subresources Practice Questions]]