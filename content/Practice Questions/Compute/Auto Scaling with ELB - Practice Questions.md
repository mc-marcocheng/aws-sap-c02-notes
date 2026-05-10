---
tags: [aws, sap-c02, ec2, auto-scaling, elb, practice-questions]
---
# Auto Scaling with ELB Practice Questions

> [!question]
> A company is building a two-tier web application to serve dynamic transaction-based content. The data tier is leveraging an Online Transactional Processing (OLTP) database. What services should you leverage to enable an elastic and scalable web tier?
> 1. Elastic Load Balancing, Amazon EC2, and Auto Scaling
> 2. Elastic Load Balancing, Amazon RDS with Multi-AZ, and Amazon S3
> 3. Amazon RDS with Multi-AZ and Auto Scaling
> 4. Amazon EC2, Amazon DynamoDB, and Amazon S3
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > For an elastic and scalable web tier, you need [[ELB Overview|Elastic Load Balancing]] to distribute traffic across multiple instances, [[EC2 Overview|EC2]] instances to host the application, and [[Auto Scaling Overview|Auto Scaling]] to automatically adjust the number of instances based on demand (load).

> [!question]
> You have been given a scope to deploy some AWS infrastructure for a large organization. The requirements are that you will have a lot of EC2 instances but may need to add more when the average utilization of your Amazon EC2 fleet is high and conversely remove them when CPU utilization is low. Which AWS services would be best to use to accomplish this?
> 1. Amazon CloudFront, Amazon CloudWatch and Elastic Load Balancing
> 2. Auto Scaling, Amazon CloudWatch and AWS CloudTrail
> 3. Auto Scaling, Amazon CloudWatch and Elastic Load Balancing
> 4. Auto Scaling, Amazon CloudWatch and AWS Elastic Beanstalk
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > [[Auto Scaling Overview|Auto Scaling]] handles the addition and removal of instances. [[CloudWatch Overview|CloudWatch]] monitors metrics like CPU utilization to trigger the scaling policies. [[ELB Overview|Elastic Load Balancing]] (ELB) ensures that incoming traffic is distributed across the dynamically changing fleet of instances.

> [!question]
> A user has configured ELB with Auto Scaling. The user suspended the Auto Scaling AddToLoadBalancer, which adds instances to the load balancer. process for a while. What will happen to the instances launched during the suspension period?
> 1. The instances will not be registered with ELB and the user has to manually register when the process is resumed
> 2. The instances will be registered with ELB only once the process has resumed
> 3. Auto Scaling will not launch the instance during this period due to process suspension
> 4. It is not possible to suspend only the AddToLoadBalancer process
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > When the `AddToLoadBalancer` process is suspended, [[Auto Scaling Overview|Auto Scaling]] launches instances but does not add them to the [[ELB Overview|load balancer]]. Resuming the process does not retroactively add instances launched during the suspension; they must be registered manually.

> [!question]
> You have an Auto Scaling group associated with an Elastic Load Balancer (ELB). You have noticed that instances launched via the Auto Scaling group are being marked unhealthy due to an ELB health check, but these unhealthy instances are not being terminated. What do you need to do to ensure trial instances marked unhealthy by the ELB will be terminated and replaced?
> 1. Change the thresholds set on the Auto Scaling group health check
> 2. Add an Elastic Load Balancing health check to your Auto Scaling group
> 3. Increase the value for the Health check interval set on the Elastic Load Balancer
> 4. Change the health check set on the Elastic Load Balancer to use TCP rather than HTTP checks
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > By default, [[Auto Scaling Overview|Auto Scaling]] groups only use EC2 status checks to determine health. If an instance fails an [[ELB Overview|ELB]] health check but passes EC2 status checks, it won't be replaced unless you specifically configure the [[Auto Scaling Overview|Auto Scaling]] group to use ELB health checks.

> [!question]
> You are responsible for a web application that consists of an Elastic Load Balancing (ELB) load balancer in front of an Auto Scaling group of Amazon Elastic Compute Cloud (EC2) instances. For a recent deployment of a new version of the application, a new Amazon Machine Image (AMI) was created, and the Auto Scaling group was updated with a new launch configuration that refers to this new AMI. During the deployment, you received complaints from users that the website was responding with errors. All instances passed the ELB health checks. What should you do in order to avoid errors for future deployments? (Choose 2 answer)
> 1. Add an Elastic Load Balancing health check to the Auto Scaling group. Set a short period for the health checks to operate as soon as possible in order to prevent premature registration of the instance to the load balancer.
> 2. Enable EC2 instance CloudWatch alerts to change the launch configuration's AMI to the previous one. Gradually terminate instances that are using the new AMI.
> 3. Set the Elastic Load Balancing health check configuration to target a part of the application that fully tests application health and returns an error if the tests fail.
> 4. Create a new launch configuration that refers to the new AMI, and associate it with the group. Double the size of the group, wait for the new instances to become healthy, and reduce back to the original size. If new instances do not become healthy, associate the previous launch configuration.
> 5. Increase the Elastic Load Balancing Unhealthy Threshold to a higher value to prevent an unhealthy instance from going into service behind the load balancer.
> > [!success]- Answer & Rationale
> > **Answer: 1 and 3**
> > 1. **Add an ELB health check to the Auto Scaling group**: This ensures that if the ELB deems an instance unhealthy, [[Auto Scaling Overview|Auto Scaling]] will replace it.
> > 2. **Set the ELB health check to target a part of the application that fully tests health**: If instances passed health checks but still served errors, the health check was likely too shallow (e.g., just checking if the web server port is open). A deep health check verifies that the application logic and dependencies are functional.

> [!question]
> What is the order of most-to-least rapidly-scaling (fastest to scale first)? A) EC2 + ELB + Auto Scaling B) Lambda C) RDS
> 1. B, A, C
> 2. C, B, A
> 3. C, A, B
> 4. A, C, B
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > [[Lambda|Lambda]] is designed to scale almost instantly in response to events. [[EC2 Overview|EC2]] instances managed by [[Auto Scaling Overview|Auto Scaling]] typically take a few minutes to boot and pass health checks. [[RDS Overview|RDS]] scaling (such as vertical scaling or storage expansion) is the slowest, often taking 15 minutes or more and potentially requiring a maintenance window.

> [!question]
> A user has hosted an application on EC2 instances. The EC2 instances are configured with ELB and Auto Scaling. The application server session time out is 2 hours. The user wants to configure connection draining to ensure that all in-flight requests are supported by ELB even though the instance is being deregistered. What time out period should the user specify for connection draining?
> 1. 5 minutes
> 2. 1 hour
> 3. 30 minutes
> 4. 2 hours
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > Connection draining (or deregistration delay) for [[ELB Overview|ELB]] has a maximum timeout limit of 3600 seconds (1 hour). Since the application session timeout (2 hours) exceeds this maximum, you should set the connection draining timeout to the maximum allowed 1 hour to protect in-flight requests for as long as possible.
