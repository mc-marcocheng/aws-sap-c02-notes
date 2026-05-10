---
tags: [aws, sap-c02, x-ray, practice-questions]
---
# AWS X-Ray - Practice Questions

> [!question]
> A company has a serverless application consisting of API Gateway, AWS Lambda, and Amazon DynamoDB. The application is experiencing intermittent slow response times. The architecture team wants to identify the exact component causing the latency. They also want to search for traces corresponding to specific premium user IDs.
> 
> Which solution meets these requirements with the LEAST operational overhead?
> 
> 1. Enable X-Ray tracing on API Gateway and Lambda. Add the user ID as metadata in the Lambda code. Use the X-Ray console to search for the metadata.
> 2. Enable X-Ray tracing on API Gateway and Lambda. Add the user ID as an annotation in the Lambda code. Filter traces in the X-Ray console using the annotation.
> 3. Deploy the X-Ray daemon on an EC2 instance. Configure API Gateway to send logs to the instance. Add the user ID as an annotation in Lambda.
> 4. Enable VPC Flow Logs for the Lambda function's VPC. Analyze the flow logs using Athena to find the latency bottlenecks based on user IDs.
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** AWS X-Ray is natively integrated with API Gateway and Lambda (just requires a configuration toggle). To search and filter traces by business logic (like user ID), you must use **Annotations**, because they are indexed. Metadata is not indexed and cannot be used for searching. Therefore, B is correct and A is incorrect. C is overly complex and unnecessary for serverless. D (VPC Flow Logs) does not provide application-level tracing or latency details.
> > **Reference Notes:** [[X-Ray]]

> [!question]
> You are migrating a multi-tier application to Amazon EKS. The application uses X-Ray for distributed tracing. Currently, the application is generating too many traces during peak hours, significantly increasing costs. The development team does not want to redeploy the application code to change tracing behavior.
> 
> How can you optimize the X-Ray costs while still retaining statistically significant trace data?
> 
> 1. Modify the X-Ray daemon configuration file in the EKS pods to drop traces randomly.
> 2. Create an EventBridge rule that disables X-Ray during peak hours and enables it during off-peak hours.
> 3. Configure Centralized Sampling Rules in the X-Ray console to lower the sampling rate.
> 4. Change the IAM policy for the EKS node group to deny `xray:PutTraceSegments` during peak hours.
>
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** **Centralized Sampling Rules** in X-Ray allow you to control the amount of data recorded without modifying or redeploying your application code. You can define rules based on service names, HTTP methods, and URL paths to adjust the fixed rate and percentage of requests to trace.
> > **Reference Notes:** [[X-Ray]]
