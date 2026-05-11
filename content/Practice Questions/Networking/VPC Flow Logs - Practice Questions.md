---
tags: [aws, sap-c02, networking, vpc, practice-questions]
---
# VPC Flow Logs - Practice Questions

> [!question]
> A company is troubleshooting a complex network connectivity issue between an Amazon EC2 instance in a private subnet and a managed AWS service accessed via a VPC Interface Endpoint. The solutions architect needs to determine if the traffic is reaching the endpoint and if specific TCP flags (such as SYN or ACK) are being transmitted correctly. How can the architect gather this information with the LEAST operational overhead?
> 
> 1. Enable default VPC Flow Logs on the VPC Interface Endpoint ENI and analyze the logs in CloudWatch.
> 2. Create a custom VPC Flow Log format that includes the `tcp-flags` field, apply it to the EC2 instance's ENI, and send the logs to Amazon S3 for analysis using Amazon Athena.
> 3. Implement VPC Traffic Mirroring to mirror all traffic from the EC2 instance ENI to a dedicated monitoring instance running Wireshark.
> 4. Use AWS CloudTrail to capture the network packets traversing the AWS PrivateLink connection.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** While standard [[VPC Flow Logs]] provide basic 5-tuple information, you can create a custom flow log format that includes additional fields such as `tcp-flags` to see packet sequence information. Sending to S3 and querying with [[Athena]] is an efficient, low-overhead way to analyze large volumes of custom log data. Traffic Mirroring (Option 3) would work but requires significantly more operational overhead.

> [!question]
> A financial institution is required by regulators to retain all network traffic metadata within their VPCs for a minimum of 7 years. The logs must be immutable, and security analysts need to perform complex SQL queries on the data occasionally during audits. Which solution meets these requirements MOST cost-effectively?
> 
> 1. Publish VPC Flow Logs to Amazon CloudWatch Logs. Set the log group retention policy to 7 years. Use CloudWatch Logs Insights for querying.
> 2. Publish VPC Flow Logs directly to an Amazon S3 bucket. Apply an S3 Object Lock policy in compliance mode for 7 years. Use Amazon Athena for querying.
> 3. Publish VPC Flow Logs to Amazon Kinesis Data Firehose, which streams the data into an Amazon Redshift cluster. Take automated snapshots of Redshift for 7-year retention.
> 4. Publish VPC Flow Logs to CloudWatch Logs, export them daily to S3 Glacier Deep Archive, and use Amazon Macie for querying.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** Publishing [[VPC Flow Logs]] directly to [[S3 Overview|Amazon S3]] is highly cost-effective for large volumes of log data. Using S3 Object Lock ensures immutability (WORM compliance). [[Athena]] allows for complex SQL queries directly against the S3 data without the cost of provisioning a data warehouse like Redshift.
