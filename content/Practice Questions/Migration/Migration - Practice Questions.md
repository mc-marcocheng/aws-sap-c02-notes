---
tags: [aws, sap-c02, migration, practice-questions]
---
# Migration Practice Questions

> [!question]
> Your must architect the migration of a web application to AWS. The application consists of Linux web servers running a custom web server. You are required to save the logs generated from the application to a durable location. What options could you select to migrate the application to AWS? (Choose 2)
> 1. Create an AWS Elastic Beanstalk application using the custom web server platform. Specify the web server executable and the application project and source files. Enable log file rotation to Amazon Simple Storage Service (S3).
> 2. Create Dockerfile for the application. Create an AWS OpsWorks stack consisting of a custom layer. Create custom recipes to install Docker and to deploy your Docker container using the Dockerfile. Create custom recipes to install and configure the application to publish the logs to Amazon CloudWatch Logs.
> 3. Create Dockerfile for the application. Create an AWS OpsWorks stack consisting of a Docker layer that uses the Dockerfile. Create custom recipes to install and configure Amazon Kinesis to publish the logs into Amazon CloudWatch.
> 4. Create a Dockerfile for the application. Create an AWS Elastic Beanstalk application using the Docker platform and the Dockerfile. Enable logging the Docker configuration to automatically publish the application logs. Enable log file rotation to Amazon S3.
> 5. Use VM import/Export to import a virtual machine image of the server into AWS as an AMI. Create an Amazon Elastic Compute Cloud (EC2) instance from AMI, and install and configure the Amazon CloudWatch Logs agent. Create a new AMI from the instance. Create an AWS Elastic Beanstalk application using the AMI platform and the new AMI.
> 
> > [!success]- Answer & Rationale
> > **Answer: 4, 5**
> > **Rationale:** 
> > - **Option 4**: [[EC2 Overview|Elastic Beanstalk]] supports [[ECS Overview|Docker]] containers and can be configured to use `awslogs` for log streaming and rotation to [[S3 Overview|Amazon S3]].
> > - **Option 5**: Using [[EC2 Overview|AWS VM Import/Export]] allows you to migrate the legacy environment exactly as it is into an [[EC2 Overview|Amazon EC2]] AMI. Installing the [[CloudWatch Logs|Amazon CloudWatch Logs]] agent ensures logs are durably stored, and using this as a custom AMI in [[EC2 Overview|Elastic Beanstalk]] provides a managed deployment environment.
> > - Option 1 is incorrect because Elastic Beanstalk doesn't support custom executables directly without a specific platform or Docker. Option 2 requires application code changes to use the SDK for S3/CloudWatch. Option 3 adds unnecessary complexity with Kinesis.

> [!question]
> Your company hosts an on-premises legacy engineering application with 900GB of data shared via a central file server. The engineering data consists of thousands of individual files ranging in size from megabytes to multiple gigabytes. Engineers typically modify 5-10 percent of the files a day. Your CTO would like to migrate this application to AWS, but only if the application can be migrated over the weekend to minimize user downtime. You calculate that it will take a minimum of 48 hours to transfer 900GB of data using your company’s existing 45-Mbps Internet connection. After replicating the application’s environment in AWS, which option will allow you to move the application’s data to AWS without losing any data and within the given timeframe?
> 1. Copy the data to Amazon S3 using multiple threads and multi-part upload for large files over the weekend, and work in parallel with your developers to reconfigure the replicated application environment to leverage Amazon S3 to serve the engineering files.
> 2. Sync the application data to Amazon S3 starting a week before the migration, on Friday morning perform a final sync, and copy the entire data set to your AWS file server after the sync completes.
> 3. Copy the application data to a 1-TB USB drive on Friday and immediately send overnight, with Saturday delivery, the USB drive to AWS Import/Export to be imported as an EBS volume, mount the resulting EBS volume to your AWS file server on Sunday.
> 4. Leverage the AWS Storage Gateway to create a Gateway-Stored volume. On Friday copy the application data to the Storage Gateway volume. After the data has been copied, perform a snapshot of the volume and restore the volume as an EBS volume to be attached to your AWS file server on Sunday.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** 900GB over 45Mbps takes at least 48 hours, making a full weekend transfer extremely risky. By using a synchronization approach to [[S3 Overview|Amazon S3]] (similar to [[Migration Readiness Assessment|AWS DataSync]] or `aws s3 sync`), you can transfer the bulk of the data ahead of time. The final delta sync (only 5-10% of data) will easily complete within the weekend window, minimizing downtime. [[Storage Gateway Overview|AWS Storage Gateway]] or direct S3 copies over the weekend would still be bottlenecked by the 45Mbps bandwidth for the initial full load.

> [!question]
> You are tasked with moving a legacy application from a virtual machine running inside your datacenter to an Amazon VPC. Unfortunately this app requires access to a number of on-premises services and no one who configured the app still works for your company. Even worse there’s no documentation for it. What will allow the application running inside the VPC to reach back and access its internal dependencies without being reconfigured? (Choose 3 answers)
> 1. An AWS Direct Connect link between the VPC and the network housing the internal services
> 2. An Internet Gateway to allow a VPN connection.
> 3. An Elastic IP address on the VPC instance
> 4. An IP address space that does not conflict with the one on-premises
> 5. Entries in Amazon Route 53 that allow the Instance to resolve its dependencies’ IP addresses
> 6. A VM Import of the current virtual machine
> 
> > [!success]- Answer & Rationale
> > **Answer: 1, 4, 6**
> > **Rationale:** 
> > - **1 ([[Direct Connect Overview|AWS Direct Connect]])**: Provides the necessary hybrid connectivity to reach back to on-premises services.
> > - **4 (Non-conflicting IP space)**: Essential for routing between the [[VPC Overview|Amazon VPC]] and on-premises network without NAT or address collisions.
> > - **6 ([[EC2 Overview|AWS VM Import/Export]])**: Migrating the VM as-is ensures that all hardcoded configurations and internal dependencies remain intact, as the "tribal knowledge" of how it was configured is lost.
> > - Option 2 is incorrect because a VPN requires a Virtual Private Gateway (VGW) and Customer Gateway (CGW), not just an IGW. Option 3 (EIP) doesn't help with internal connectivity. Option 5 (Route 53) helps with resolution but not the underlying reachability if the network isn't set up.

> [!question]
> An enterprise runs 103 line-of-business applications on virtual machines in an on-premises data center. Many of the applications are simple PHP, Java, or Ruby web applications, are no longer actively developed, and serve little traffic. Which approach should be used to migrate these applications to AWS with the LOWEST infrastructure costs?
> 1. Deploy the applications to single-instance AWS Elastic Beanstalk environments without a load balancer.
> 2. Use AWS SMS to create AMIs for each virtual machine and run them in Amazon EC2.
> 3. Convert each application to a Docker image and deploy to a small Amazon ECS cluster behind an Application Load Balancer.
> 4. Use VM Import/Export to create AMIs for each virtual machine and run them in single-instance AWS Elastic Beanstalk environments by configuring a custom image.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** [[EC2 Overview|Elastic Beanstalk]] in a single-instance configuration is the most cost-effective for 103 low-traffic apps. It avoids the fixed cost of an [[ELB Overview|Application Load Balancer (ALB)]] for each app. [[ECS Overview|Amazon ECS]] with an ALB would likely be more expensive due to ALB costs per application (or complexity of shared ALB routing). Using custom images (Option 4) or plain [[EC2 Overview|Amazon EC2]] (Option 2) increases management overhead compared to the standard Beanstalk platforms.
