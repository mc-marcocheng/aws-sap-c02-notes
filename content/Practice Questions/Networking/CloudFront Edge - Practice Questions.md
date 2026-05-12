---
tags: [aws, sap-c02, cloudfront, practice-questions]
---
# CloudFront Edge Practice Questions

> [!question]
> You've been given the requirement to customize the content which is distributed to users via a CloudFront Distribution. The content origin is an S3 bucket. How could you achieve this?
> 1. Add an event to the S3 bucket. Make the event invoke a Lambda function to customize the content before rendering.
> 2. Add a Step Function. Add a step with a Lambda function just before the content gets delivered to the users.
> 3. Use Lambda@Edge.
> 4. Use a separate application on an EC2 Instance for this purpose.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** [[CloudFront Edge Functions|Lambda@Edge]] is a feature of Amazon [[CloudFront Overview|CloudFront]] that lets you run code closer to users of your application, which improves performance and reduces latency. With [[CloudFront Edge Functions|Lambda@Edge]], you don't have to manage any infrastructure in multiple locations around the world. You can use it to customize content (e.g., A/B testing, header manipulation, or dynamic content generation) as it flows through the CloudFront distribution. Options 1 and 2 are incorrect as they don't integrate directly with the CloudFront request/response lifecycle in the required manner. Option 4 adds unnecessary complexity and latency.

> [!question]
> A company's packaged application dynamically creates and returns single-use text files in response to user requests. The company is using Amazon CloudFront for distribution but wants to further reduce data transfer costs. The company cannot modify the application's source code. What should a solutions architect do to reduce costs?
> 1. Use Lambda@Edge to compress the files as they are sent to users.
> 2. Enable Amazon S3 Transfer Acceleration to reduce the response times.
> 3. Enable caching on the CloudFront distribution to store generated files at the edge.
> 4. Use Amazon S3 multipart uploads to move the files to Amazon S3 before returning them to users.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** [[CloudFront Edge Functions|Lambda@Edge]] can be used to intercept the [[CloudFront Overview|CloudFront]] response from the origin and perform operations like compression (e.g., Gzip) before the content is delivered to the viewer. This reduces the size of the payload, thereby decreasing data transfer costs. Since the files are "single-use," caching (3) is unlikely to provide significant benefits. [[S3 Overview|S3 Transfer Acceleration]] (2) is for faster uploads to S3, not for reducing data transfer out costs from CloudFront. Multipart uploads (4) are also unrelated to the delivery cost of files to end-users.

> [!question]
> A multi-tenant SaaS application uses Amazon CloudFront to serve content. Each tenant has a custom domain (e.g., tenant1.app.com, tenant2.app.com). The application needs to inspect the Host header on every request and route to the correct tenant's S3 origin bucket — with sub-millisecond execution time and no network calls. The function will execute millions of times per second. Which CloudFront edge compute option should be used?
> 
> 1. Lambda@Edge with an Origin Request trigger
> 2. **CloudFront Functions** with a Viewer Request trigger
> 3. Lambda@Edge with a Viewer Request trigger
> 4. A custom EC2-based origin routing layer
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[CloudFront Edge Functions|CloudFront Functions]] run at the edge locations (not regional edge caches like Lambda@Edge), execute in sub-millisecond time, and are designed for lightweight, high-volume request manipulation like header inspection and URL rewriting. They are significantly cheaper and faster than Lambda@Edge for simple operations that don't require network calls or complex processing. (See [[CloudFront Edge Functions]])
