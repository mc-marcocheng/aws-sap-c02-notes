---
tags: [aws, sap-c02, ec2, compute, practice-questions]
---
# EC2 Purchase Practice Questions

> [!question]
> If I want my instance to run on a single-tenant hardware, which value do I have to set the instance’s tenancy attribute to?
> 1. dedicated
> 2. isolated
> 3. one
> 4. reserved
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > To run on single-tenant hardware, the tenancy attribute must be set to `dedicated`. [[EC2 Purchase Options#Dedicated Instances|Dedicated Instances]] run on hardware dedicated to a single customer, providing physical isolation at the host level.

> [!question]
> You have a video transcoding application running on Amazon EC2. Each instance polls a queue to find out which video should be transcoded, and then runs a transcoding process. If this process is interrupted, the video will be transcoded by another instance based on the queuing system. You have a large backlog of videos, which need to be transcoded, and would like to reduce this backlog by adding more instances. You will need these instances only until the backlog is reduced. Which type of Amazon EC2 instances should you use to reduce the backlog in the most cost efficient way?
> 1. Reserved instances
> 2. Spot instances
> 3. Dedicated instances
> 4. On-demand instances
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > Since the application is fault-tolerant (the queuing system allows for retries if interrupted) and the goal is to reduce a backlog cost-effectively, [[EC2 Purchase Options#Spot Instances|Spot Instances]] are the best choice as they offer the highest discounts (up to 90%).

> [!question]
> The one-time payment for Reserved Instances is __________ refundable if the reservation is cancelled.
> 1. always
> 2. in some circumstances
> 3. never
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > Reserved Instance purchases are **never** refundable. If a reservation is no longer needed, it cannot be cancelled for a refund, although it can sometimes be sold on the [[EC2 Purchase Options#Reserved Instances (RI)|Reserved Instance Marketplace]].

> [!question]
> You run a web application where web servers on EC2 Instances are in an Auto Scaling group. Monitoring over the last 6 months shows that 6 web servers are necessary to handle the minimum load. During the day up to 12 servers are needed. Five to six days per year, the number of web servers required might go up to 15. What would you recommend to minimize costs while being able to provide high availability?
> 1. 6 Reserved instances (heavy utilization), 6 Reserved instances (medium utilization), rest covered by On-Demand instances
> 2. 6 Reserved instances (heavy utilization), 6 On-Demand instances, rest covered by Spot Instances
> 3. 6 Reserved instances (heavy utilization), 6 Spot instances, rest covered by On-Demand instances
> 4. 6 Reserved instances (heavy utilization), 6 Reserved instances (medium utilization), rest covered by Spot instances
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > For high availability on a web tier, you should use [[EC2 Purchase Options#Reserved Instances (RI)|Reserved Instances]] for the predictable steady-state load (6 instances) and [[EC2 Purchase Options#Purchase Model Comparison|On-Demand Instances]] for the daily fluctuations to 12. Spot instances are not recommended for the web tier in this scenario because their availability is not guaranteed, which could compromise the application's uptime during peaks.

> [!question]
> A user is running one instance for only 3 hours every day. The user wants to save some cost with the instance. Which of the below mentioned Reserved Instance categories is advised in this case?
> 1. The user should not use RI; instead only go with the on-demand pricing
> 2. The user should use the AWS high utilized RI
> 3. The user should use the AWS medium utilized RI
> 4. The user should use the AWS low utilized RI
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > For a workload running only 3 hours a day, traditional [[EC2 Purchase Options#Reserved Instances (RI)|Reserved Instances]] (which are billed 24/7 regardless of usage) would be more expensive than [[EC2 Purchase Options#Purchase Model Comparison|On-Demand Instances]]. 

> [!question]
> Which of the following are characteristics of a reserved instance? (Choose 3)
> 1. It can be migrated across Availability Zones
> 2. It is specific to an Amazon Machine Image (AMI)
> 3. It can be applied to instances launched by Auto Scaling
> 4. It is specific to an instance Type
> 5. It can be used to lower Total Cost of Ownership (TCO) of a system
> 
> > [!success]- Answer & Rationale
> > **Answer: 1, 3, 5**
> > [[EC2 Purchase Options#Reserved Instances (RI)|Reserved Instances]] can be modified to change Availability Zones within a region. They are automatically applied as a billing discount to matching instances, including those launched by [[Auto Scaling Overview|Auto Scaling]]. Their primary purpose is to lower the [[EC2 Purchase Options#Purchase Model Comparison|Total Cost of Ownership (TCO)]] by providing significant discounts over On-Demand rates.

> [!question]
> You have a distributed application that periodically processes large volumes of data across multiple Amazon EC2 Instances. The application is designed to recover gracefully from Amazon EC2 instance failures. You are required to accomplish this task in the most cost-effective way. Which of the following will meet your requirements?
> 1. Spot Instances
> 2. Reserved instances
> 3. Dedicated instances
> 4. On-Demand instances
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > For periodic, large-volume data processing that is designed to be fault-tolerant, [[EC2 Purchase Options#Spot Instances|Spot Instances]] provide the most cost-effective solution, allowing for massive scale at a fraction of the cost of other models.

> [!question]
> Can I move a Reserved Instance from one Region to another?
> 1. No
> 2. Only if they are moving into GovCloud
> 3. Yes
> 4. Only if they are moving to US East from another region
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > [[EC2 Purchase Options#Reserved Instances (RI)|Reserved Instances]] are scoped to a specific Region and cannot be moved to a different Region. You can only modify attributes like Availability Zone or instance size within the same Region.

> [!question]
> An application you maintain consists of multiple EC2 instances in a default tenancy VPC. This application has undergone an internal audit and has been determined to require dedicated hardware for one instance. Your compliance team has given you a week to move this instance to single-tenant hardware. Which process will have minimal impact on your application while complying with this requirement?
> 1. Create a new VPC with tenancy=dedicated and migrate to the new VPC
> 2. Use ec2-reboot-instances command line and set the parameter dedicated=true
> 3. Right click on the instance, select properties and check the box for dedicated tenancy
> 4. Stop the instance, create an AMI, launch a new instance with tenancy=dedicated, and terminate the old instance
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > You cannot change the tenancy attribute of an existing instance. The most efficient way to move to dedicated hardware is to create an AMI of the current instance and then launch a new instance from that AMI with the tenancy set to `dedicated`. This is a standard procedure for moving to [[EC2 Purchase Options#Dedicated Hosts vs. Dedicated Instances|Dedicated Tenancy]].

> [!question]
> Your department creates regular analytics reports from your company’s log files. All log data is collected in Amazon S3 and processed by daily Amazon Elastic Map Reduce (EMR) jobs that generate daily PDF reports and aggregated tables in CSV format for an Amazon Redshift data warehouse. Your CFO requests that you optimize the cost structure for this system. Which of the following alternatives will lower costs without compromising average performance of the system or data integrity for the raw data?
> 1. Use reduced redundancy storage (RRS) for PDF and CSV data in Amazon S3. Add Spot instances to Amazon EMR jobs. Use Reserved Instances for Amazon Redshift.
> 2. Use reduced redundancy storage (RRS) for all data in S3. Use a combination of Spot instances and Reserved Instances for Amazon EMR jobs. Use Reserved instances for Amazon Redshift.
> 3. Use reduced redundancy storage (RRS) for all data in Amazon S3. Add Spot Instances to Amazon EMR jobs. Use Reserved Instances for Amazon Redshift.
> 4. Use reduced redundancy storage (RRS) for PDF and CSV data in S3. Add Spot Instances to EMR jobs. Use Spot Instances for Amazon Redshift.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > Using a combination of [[EC2 Purchase Options#Spot Instances|Spot Instances]] and [[EC2 Purchase Options#Reserved Instances (RI)|Reserved Instances]] for EMR ensures that the steady-state performance is maintained by RIs while costs are reduced by Spots. [[EC2 Purchase Options#Reserved Instances (RI)|Reserved Instances]] for Redshift are ideal for steady-state data warehousing. S3 RRS (though legacy) reduces costs for reproducible data while maintaining integrity.

> [!question]
> A research scientist is planning for the one-time launch of an Elastic MapReduce cluster and is encouraged by her manager to minimize the costs. The cluster is designed to ingest 200TB of genomics data with a total of 100 Amazon EC2 instances and is expected to run for around four hours. The resulting data set must be stored temporarily until archived into an Amazon RDS Oracle instance. Which option will help save the most money while meeting requirements?
> 1. Store ingest and output files in Amazon S3. Deploy on-demand for the master and core nodes and spot for the task nodes.
> 2. Optimize by deploying a combination of on-demand, RI and spot-pricing models for the master, core and task nodes. Store ingest and output files in Amazon S3 with a lifecycle policy that archives them to Amazon Glacier.
> 3. Store the ingest files in Amazon S3 RRS and store the output files in S3. Deploy Reserved Instances for the master and core nodes and on-demand for the task nodes.
> 4. Deploy on-demand master, core and task nodes and store ingest and output files in Amazon S3 RRS
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > For a one-time 4-hour job, [[EC2 Purchase Options#Reserved Instances (RI)|Reserved Instances]] are not cost-effective as they require a 1 or 3-year commitment. Using [[EC2 Purchase Options#Spot Instances|Spot Instances]] for task nodes in EMR handles the heavy lifting at a low cost, while On-Demand master and core nodes ensure cluster stability.

> [!question]
> A company currently has a highly available web application running in production. The application’s web front-end utilizes an Elastic Load Balancer and Auto scaling across 3 availability zones. During peak load, your web servers operate at 90% utilization and leverage a combination of heavy utilization reserved instances for steady state load and on-demand and spot instances for peak load. You are asked with designing a cost effective architecture to allow the application to recover quickly in the event that an availability zone is unavailable during peak load. Which option provides the most cost effective high availability architectural design for this application?
> 1. Increase auto scaling capacity and scaling thresholds to allow the web-front to cost-effectively scale across all availability zones to lower aggregate utilization levels that will allow an availability zone to fail during peak load without affecting the applications availability.
> 2. Continue to run your web front-end at 90% utilization, but purchase an appropriate number of utilization RIs in each availability zone to cover the loss of any of the other availability zones during peak load.
> 3. Continue to run your web front-end at 90% utilization, but leverage a high bid price strategy to cover the loss of any of the other availability zones during peak load.
> 4. Increase use of spot instances to cost effectively to scale the web front-end across all availability zones to lower aggregate utilization levels that will allow an availability zone to fail during peak load without affecting the applications availability.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > To achieve true [[High Availability|High Availability]], the system must have spare capacity to absorb the load if one AZ fails. By adjusting [[Auto Scaling Overview|Auto Scaling]] thresholds to maintain lower aggregate utilization, you ensure that the remaining 2 AZs can handle the 100% load without being overwhelmed when one AZ goes offline.

> [!question]
> You run accounting software in the AWS cloud. This software needs to be online continuously during the day every day of the week, and has a very static requirement for compute resources. You also have other, unrelated batch jobs that need to run once per day at any time of your choosing. How should you minimize cost?
> 1. Purchase a Heavy Utilization Reserved Instance to run the accounting software. Turn it off after hours. Run the batch jobs with the same instance class, so the Reserved Instance credits are also applied to the batch jobs.
> 2. Purchase a Medium Utilization Reserved Instance to run the accounting software. Turn it off after hours. Run the batch jobs with the same instance class, so the Reserved Instance credits are also applied to the batch jobs.
> 3. Purchase a Light Utilization Reserved Instance to run the accounting software. Turn it off after hours. Run the batch jobs with the same instance class, so the Reserved Instance credits are also applied to the batch jobs.
> 4. Purchase a Full Utilization Reserved Instance to run the accounting software. Turn it off after hours. Run the batch jobs with the same instance class, so the Reserved Instance credits are also applied to the batch jobs.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > Since the accounting software has a predictable, continuous daytime load, a [[EC2 Purchase Options#Reserved Instances (RI)|Reserved Instance]] is the best choice. By running the daily batch jobs during the hours the accounting software is "off" using the same instance class, you maximize the value of the RI credits, essentially running the batch jobs for free under the same reservation.
