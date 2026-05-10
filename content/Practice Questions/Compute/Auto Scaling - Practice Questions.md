---
tags: [aws, sap-c02, ec2, auto-scaling, practice-questions]
---
# Auto Scaling Practice Questions

Test your knowledge of Amazon EC2 Auto Scaling with these architect-level practice questions.

> [!question]
> A user is trying to setup a scheduled scaling activity using Auto Scaling. The user wants to setup the recurring schedule. Which of the below mentioned parameters is not required in this case?
> 1. Maximum size
> 2. Auto Scaling group name
> 3. End time
> 4. Recurrence value
> 
> > [!success]- Answer & Rationale
> > **Answer: 1. Maximum size**
> > **Rationale**: When setting up a scheduled scaling activity, specifically a recurring one, you need the ASG name, the recurrence value (cron expression), and optionally an end time. While you *can* specify a new maximum size as part of the scaling action, it is not a *required* parameter for the schedule itself if you are only adjusting desired capacity or if the group limits are already sufficient. However, in the context of the API/CLI, `MinSize`, `MaxSize`, and `DesiredCapacity` are the targets of the scaling, but `Maximum size` is often already defined for the group.

> [!question]
> A user has configured Auto Scaling with 3 instances. The user had created a new AMI after updating one of the instances. If the user wants to terminate two specific instances to ensure that Auto Scaling launches instances with the new launch configuration, which command should he run?
> 1. `as-delete-instance-in-auto-scaling-group <Instance ID> --no-decrement-desired-capacity`
> 2. `as-terminate-instance-in-auto-scaling-group <Instance ID> --update-desired-capacity`
> 3. `as-terminate-instance-in-auto-scaling-group <Instance ID> --decrement-desired-capacity`
> 4. `as-terminate-instance-in-auto-scaling-group <Instance ID> --no-decrement-desired-capacity`
> 
> > [!success]- Answer & Rationale
> > **Answer: 4. `as-terminate-instance-in-auto-scaling-group <Instance ID> --no-decrement-desired-capacity`**
> > **Rationale**: To replace specific instances with new ones (using the updated Launch Configuration), you must terminate them without decreasing the desired capacity. The `--no-decrement-desired-capacity` flag ensures that the ASG perceives a gap between the desired capacity and the actual count, triggering the launch of new instances using the latest configuration. See [[EC2 Overview]].

> [!question]
> A user is planning to scale up an application by 8 AM and scale down by 7 PM daily using Auto Scaling. What should the user do in this case?
> 1. Setup the scaling policy to scale up and down based on the CloudWatch alarms
> 2. User should increase the desired capacity at 8 AM and decrease it by 7 PM manually
> 3. User should setup a batch process which launches the EC2 instance at a specific time
> 4. Setup scheduled actions to scale up or down at a specific time
> 
> > [!success]- Answer & Rationale
> > **Answer: 4. Setup scheduled actions to scale up or down at a specific time**
> > **Rationale**: For predictable, time-based traffic patterns, [[Auto Scaling Overview#Scaling Policies|Scheduled Scaling]] is the most efficient and automated approach. It allows you to define specific times to adjust the min, max, or desired capacity.

> [!question]
> An organization has setup Auto Scaling with ELB. Due to some manual error, one of the instances got rebooted. Thus, it failed the Auto Scaling health check. Auto Scaling has marked it for replacement. How can the system admin ensure that the instance does not get terminated?
> 1. Update the Auto Scaling group to ignore the instance reboot event
> 2. It is not possible to change the status once it is marked for replacement
> 3. Manually add that instance to the Auto Scaling group after reboot to avoid replacement
> 4. Change the health of the instance to healthy using the Auto Scaling commands
> 
> > [!success]- Answer & Rationale
> > **Answer: 2. It is not possible to change the status once it is marked for replacement**
> > **Rationale**: Once an instance is marked as unhealthy and scheduled for replacement by Auto Scaling, its fate is sealed. You cannot manually "clear" the unhealthy status to prevent termination within the ASG lifecycle. See [[ALB Overview]].

> [!question]
> A user has configured Auto Scaling with the minimum capacity as 2 and the desired capacity as 2. The user is trying to terminate one of the existing instance with the command: `as-terminate-instance-in-auto-scaling-group <Instance ID> --decrement-desired-capacity`. What will Auto Scaling do in this scenario?
> 1. Terminates the instance and does not launch a new instance
> 2. Terminates the instance and updates the desired capacity to 1
> 3. Terminates the instance and updates the desired capacity & minimum size to 1
> 4. Throws an error
> 
> > [!success]- Answer & Rationale
> > **Answer: 4. Throws an error**
> > **Rationale**: Auto Scaling will not allow you to decrement the desired capacity below the minimum size of the group. Since the minimum capacity is 2, attempting to decrement the desired capacity to 1 will result in an error.

> [!question]
> An organization has configured Auto Scaling for hosting their application. The system admin wants to understand the Auto Scaling health check process. If the instance is unhealthy, Auto Scaling launches an instance and terminates the unhealthy instance. What is the order execution?
> 1. Auto Scaling launches a new instance first and then terminates the unhealthy instance
> 2. Auto Scaling performs the launch and terminate processes in a random order
> 3. Auto Scaling launches and terminates the instances simultaneously
> 4. Auto Scaling terminates the instance first and then launches a new instance
> 
> > [!success]- Answer & Rationale
> > **Answer: 4. Auto Scaling terminates the instance first and then launches a new instance**
> > **Rationale**: In a standard unhealthy instance replacement, Auto Scaling first terminates the unhealthy instance to free up capacity (or simply as the first step in the replacement flow) and then launches a new instance to maintain the desired capacity.

> [!question]
> A user has configured ELB with Auto Scaling. The user suspended the Auto Scaling `terminate` process only for a while. What will happen to the availability zone rebalancing process (AZRebalance) during this period?
> 1. Auto Scaling will not launch or terminate any instances
> 2. Auto Scaling will allow the instances to grow more than the maximum size
> 3. Auto Scaling will keep launching instances till the maximum instance size
> 4. It is not possible to suspend the terminate process while keeping the launch active
> 
> > [!success]- Answer & Rationale
> > **Answer: 2. Auto Scaling will allow the instances to grow more than the maximum size**
> > **Rationale**: The `AZRebalance` process works by first launching a new instance in the under-represented AZ and then terminating an instance in the over-represented AZ. If `Terminate` is suspended, the launch will still occur to balance the zones, but the subsequent termination won't. This can cause the ASG to temporarily grow up to 10% beyond its maximum size. See [[ALB Overview]].

> [!question]
> An organization has configured Auto Scaling with ELB. There is a memory issue in the application which is causing CPU utilization to go above 90%. The higher CPU usage triggers an event for Auto Scaling as per the scaling policy. If the user wants to find the root cause inside the application without triggering a scaling activity, how can he achieve this?
> 1. Stop the scaling process until research is completed
> 2. It is not possible to find the root cause from that instance without triggering scaling
> 3. Delete Auto Scaling until research is completed
> 4. Suspend the scaling process until research is completed
> 
> > [!success]- Answer & Rationale
> > **Answer: 4. Suspend the scaling process until research is completed**
> > **Rationale**: You can [[Auto Scaling Overview#Standby and Suspension|suspend]] Auto Scaling processes (like `Launch` or `AlarmNotification`) to prevent scaling actions while you investigate the instance. Alternatively, putting the instance in a `Standby` state is also a common practice for troubleshooting. See [[ALB Overview]].

> [!question]
> A user has configured ELB with Auto Scaling. The user suspended the Auto Scaling `AlarmNotification` (which notifies Auto Scaling for CloudWatch alarms) process for a while. What will Auto Scaling do during this period?
> 1. AWS will not receive the alarms from CloudWatch
> 2. AWS will receive the alarms but will not execute the Auto Scaling policy
> 3. Auto Scaling will execute the policy but it will not launch the instances until the process is resumed
> 4. It is not possible to suspend the AlarmNotification process
> 
> > [!success]- Answer & Rationale
> > **Answer: 2. AWS will receive the alarms but will not execute the Auto Scaling policy**
> > **Rationale**: Suspending `AlarmNotification` prevents the ASG from reacting to CloudWatch alarms. The alarms are still triggered in CloudWatch, but the notification to the ASG is ignored, so no scaling policies are executed. See [[ALB Overview]].

> [!question]
> An organization has configured two single availability zones. The Auto Scaling groups are configured in separate zones. The user wants to merge the groups such that one group spans across multiple zones. How can the user configure this?
> 1. Run the command `as-join-auto-scaling-group` to join the two groups
> 2. Run the command `as-update-auto-scaling-group` to configure one group to span across zones and delete the other group
> 3. Run the command `as-copy-auto-scaling-group` to join the two groups
> 4. Run the command `as-merge-auto-scaling-group` to merge the groups
> 
> > [!success]- Answer & Rationale
> > **Answer: 2. Run the command `as-update-auto-scaling-group` to configure one group to span across zones and delete the other group**
> > **Rationale**: There is no "merge" or "join" command for ASGs. The procedure is to update one ASG to include the subnets/AZs of the other, and then delete the redundant ASG.

> [!question]
> An organization has configured Auto Scaling with ELB. One of the instance health check returns the status as `Impaired` to Auto Scaling. What will Auto Scaling do in this scenario?
> 1. Perform a health check until cool down before declaring that the instance has failed
> 2. Terminate the instance and launch a new instance
> 3. Notify the user using SNS for the failed state
> 4. Notify ELB to stop sending traffic to the impaired instance
> 
> > [!success]- Answer & Rationale
> > **Answer: 2. Terminate the instance and launch a new instance**
> > **Rationale**: When an instance fails health checks (marks as impaired), Auto Scaling's primary job is to maintain availability by replacing it. It will terminate the unhealthy instance and launch a replacement. See [[ALB Overview]].

> [!question]
> A user has setup an Auto Scaling group. The group has failed to launch a single instance for more than 24 hours. What will happen to Auto Scaling in this condition?
> 1. Auto Scaling will keep trying to launch the instance for 72 hours
> 2. Auto Scaling will suspend the scaling process
> 3. Auto Scaling will start an instance in a separate region
> 4. The Auto Scaling group will be terminated automatically
> 
> > [!success]- Answer & Rationale
> > **Answer: 2. Auto Scaling will suspend the scaling process**
> > **Rationale**: This is known as **Administrative Suspension**. If an ASG is unable to launch instances for 24 hours (e.g., due to an invalid AMI ID or security group), AWS will automatically suspend the `Launch` process to prevent unnecessary costs or resource exhaustion.

> [!question]
> A user is planning to setup infrastructure on AWS for the Christmas sales. The user is planning to use Auto Scaling based on the schedule for proactive scaling. What advise would you give to the user?
> 1. It is good to schedule now because if the user forgets later on it will not scale up
> 2. The scaling should be setup only one week before Christmas
> 3. Wait till end of November before scheduling the activity
> 4. It is not advisable to use scheduled based scaling
> 
> > [!success]- Answer & Rationale
> > **Answer: 3. Wait till end of November before scheduling the activity**
> > **Rationale**: While scheduled scaling is good for proactive planning, scheduling it too far in advance (e.g., in early summer for Christmas) might not account for architectural changes that happen in the interim. Waiting until closer to the event (e.g., late November) ensures the configuration is still valid and reflects the current state of the application.

> [!question]
> A user is trying to setup a recurring Auto Scaling process. The user has setup one process to scale up every day at 8 am and scale down at 7 PM. The user is trying to setup another recurring process which scales up on the 1st of every month at 8 AM and scales down the same day at 7 PM. What will Auto Scaling do in this scenario?
> 1. Auto Scaling will execute both processes but will add just one instance on the 1st
> 2. Auto Scaling will add two instances on the 1st of the month
> 3. Auto Scaling will schedule both the processes but execute only one process randomly
> 4. Auto Scaling will throw an error since there is a conflict in the schedule of two separate Auto Scaling Processes
> 
> > [!success]- Answer & Rationale
> > **Answer: 4. Auto Scaling will throw an error since there is a conflict in the schedule of two separate Auto Scaling Processes**
> > **Rationale**: Auto Scaling will not allow you to create scheduled actions that conflict in timing. If two schedules attempt to modify the same capacity settings at the exact same time, it will result in an error or a rejected configuration.

> [!question]
> A sys admin is trying to understand the Auto Scaling activities. Which of the below mentioned processes is not performed by Auto Scaling?
> 1. Reboot Instance
> 2. Schedule Actions
> 3. Replace Unhealthy
> 4. Availability Zone Re-Balancing
> 
> > [!success]- Answer & Rationale
> > **Answer: 1. Reboot Instance**
> > **Rationale**: Auto Scaling manages the lifecycle of instances (Launch, Terminate, Replace), but it does not perform "Reboot" as a standard automated process. If an instance is failing, it replaces it; it doesn't try to reboot it.

> [!question]
> You have started a new job and are reviewing your company’s infrastructure on AWS. You notice one web application where they have an Elastic Load Balancer in front of web instances in an Auto Scaling Group. When you check the metrics for the ELB in CloudWatch you see four healthy instances in Availability Zone (AZ) A and zero in AZ B. There are zero unhealthy instances. What do you need to fix to balance the instances across AZs?
> 1. Set the ELB to only be attached to another AZ
> 2. Make sure Auto Scaling is configured to launch in both AZs
> 3. Make sure your AMI is available in both AZs
> 4. Make sure the maximum size of the Auto Scaling Group is greater than 4
> 
> > [!success]- Answer & Rationale
> > **Answer: 2. Make sure Auto Scaling is configured to launch in both AZs**
> > **Rationale**: If the ASG is only configured with subnets in AZ A, it will only launch instances there. To balance across AZs, you must ensure the ASG is configured to use subnets in both AZ A and AZ B. See [[ALB Overview]].

> [!question]
> You have been asked to leverage Amazon VPC EC2 and SQS to implement an application that submits and receives millions of messages per second to a message queue. You want to ensure your application has sufficient bandwidth between your EC2 instances and SQS. Which option will provide the most scalable solution for communicating between the application and SQS?
> 1. Ensure the application instances are properly configured with an Elastic Load Balancer
> 2. Ensure the application instances are launched in private subnets with the EBS-optimized option enabled
> 3. Ensure the application instances are launched in public subnets with the associate-public-IP-address=true option enabled
> 4. Launch application instances in private subnets with an Auto Scaling group and Auto Scaling triggers configured to watch the SQS queue size
> 
> > [!success]- Answer & Rationale
> > **Answer: 4. Launch application instances in private subnets with an Auto Scaling group and Auto Scaling triggers configured to watch the SQS queue size**
> > **Rationale**: Scaling based on SQS queue size (e.g., using the `ApproximateNumberOfMessagesVisible` metric) is the standard pattern for worker-based architectures. This ensures that the number of processing instances scales directly with the volume of work in the queue. See [[SQS Overview]]. See [[EC2 Overview]].

> [!question]
> You have decided to change the Instance type for instances running in your application tier that are using Auto Scaling. In which area below would you change the instance type definition?
> 1. Auto Scaling launch configuration
> 2. Auto Scaling group
> 3. Auto Scaling policy
> 4. Auto Scaling tags
> 
> > [!success]- Answer & Rationale
> > **Answer: 1. Auto Scaling launch configuration**
> > **Rationale**: The instance type, AMI, and other boot parameters are defined in the [[Auto Scaling Overview#Core Components|Launch Configuration]] (or Launch Template). To change the instance type, you must create a new LC/LT or a new version and associate it with the ASG.

> [!question]
> A user is trying to delete an Auto Scaling group from CLI. Which of the below mentioned steps are to be performed by the user?
> 1. Terminate the instances with the `ec2-terminate-instance` command
> 2. Terminate the Auto Scaling instances with the `as-terminate-instance` command
> 3. Set the minimum size and desired capacity to 0
> 4. There is no need to change the capacity. Run the `as-delete-group` command and it will reset all values to 0
> 
> > [!success]- Answer & Rationale
> > **Answer: 3. Set the minimum size and desired capacity to 0**
> > **Rationale**: From the CLI, you cannot delete an ASG if it still has running instances. You must first set the capacity to 0, which triggers the termination of the instances, and then you can delete the group.

> [!question]
> A user has created a web application with Auto Scaling. The user is regularly monitoring the application and he observed that the traffic is highest on Thursday and Friday between 8 AM to 6 PM. What is the best solution to handle scaling in this case?
> 1. Add a new instance manually by 8 AM Thursday and terminate the same by 6 PM Friday
> 2. Schedule Auto Scaling to scale up by 8 AM Thursday and scale down after 6 PM on Friday
> 3. Schedule a policy which may scale up every day at 8 AM and scales down by 6 PM
> 4. Configure a batch process to add a instance by 8 AM and remove it by Friday 6 PM
> 
> > [!success]- Answer & Rationale
> > **Answer: 2. Schedule Auto Scaling to scale up by 8 AM Thursday and scale down after 6 PM on Friday**
> > **Rationale**: Scheduled scaling allows for recurring actions. In this case, setting specific start and end times for the Thursday-Friday window is the most automated and accurate approach.

> [!question]
> A user has configured the Auto Scaling group with the minimum capacity as 3 and the maximum capacity as 5. When the user configures the AS group, how many instances will Auto Scaling launch?
> 1. 3
> 2. 0
> 3. 5
> 4. 2
> 
> > [!success]- Answer & Rationale
> > **Answer: 1. 3**
> > **Rationale**: By default, if desired capacity is not specified, Auto Scaling sets it to the minimum capacity. Thus, it will immediately launch 3 instances to meet that minimum requirement.

> [!question]
> A sys admin is maintaining an application on AWS. The application is installed on EC2 and user has configured ELB and Auto Scaling. Considering future load increase, the user is planning to launch new servers proactively so that they get registered with ELB. How can the user add these instances with Auto Scaling?
> 1. Increase the desired capacity of the Auto Scaling group
> 2. Increase the maximum limit of the Auto Scaling group
> 3. Launch an instance manually and register it with ELB on the fly
> 4. Decrease the minimum limit of the Auto Scaling group
> 
> > [!success]- Answer & Rationale
> > **Answer: 1. Increase the desired capacity of the Auto Scaling group**
> > **Rationale**: Increasing the **Desired Capacity** is the direct way to manually trigger the launch of new instances within an ASG. See [[ALB Overview]]. See [[EC2 Overview]].

> [!question]
> In reviewing the auto scaling events for your application you notice that your application is scaling up and down multiple times in the same hour. What design choice could you make to optimize for the cost while preserving elasticity? Choose 2 answers.
> 1. Modify the Amazon CloudWatch alarm period that triggers your auto scaling scale down policy.
> 2. Modify the Auto scaling group termination policy to terminate the oldest instance first.
> 3. Modify the Auto scaling policy to use scheduled scaling actions.
> 4. Modify the Auto scaling group cool down timers.
> 5. Modify the Auto scaling group termination policy to terminate newest instance first.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1. Modify the Amazon CloudWatch alarm period that triggers your auto scaling scale down policy., 4. Modify the Auto scaling group cool down timers.**
> > **Rationale**: Frequent scaling (flapping) is often caused by alarms that are too sensitive or cooldowns that are too short. Increasing the **CloudWatch alarm period** (e.g., from 1 minute to 5 minutes) ensures that transient spikes don't trigger scaling. Adjusting the **Cooldown Period** ensures that the system doesn't scale again until the previous action has had time to take effect.

> [!question]
> You have a business critical two tier web app currently deployed in two availability zones in a single region, using Elastic Load Balancing and Auto Scaling. The app depends on synchronous replication (very low latency connectivity) at the database layer. The application needs to remain fully available even if one application Availability Zone goes off-line, and Auto scaling cannot launch new instances in the remaining Availability Zones. How can the current architecture be enhanced to ensure this?
> 1. Deploy in two regions using Weighted Round Robin (WRR), with Auto Scaling minimums set for 100% peak load per region.
> 2. Deploy in three AZs, with Auto Scaling minimum set to handle 50% peak load per zone.
> 3. Deploy in three AZs, with Auto Scaling minimum set to handle 33% peak load per zone.
> 4. Deploy in two regions using Weighted Round Robin (WRR), with Auto Scaling minimums set for 50% peak load per region.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2. Deploy in three AZs, with Auto Scaling minimum set to handle 50% peak load per zone.**
> > **Rationale**: If Auto Scaling cannot launch *new* instances (as per the constraint), you must have enough capacity *already running* to handle the failure. In a 3-AZ setup, if each zone handles 50% of peak load, the total capacity is 150%. If one AZ fails, the remaining two zones (50% + 50%) can handle 100% of the load without needing to launch new instances. Option C is incorrect because 33% + 33% only covers 66% of peak load.

> [!question]
> A user has created a launch configuration for Auto Scaling where CloudWatch detailed monitoring is disabled. The user wants to now enable detailed monitoring. How can the user achieve this?
> 1. Update the Launch config with CLI to set `InstanceMonitoringDisabled = false`
> 2. The user should change the Auto Scaling group from the AWS console to enable detailed monitoring
> 3. Update the Launch config with CLI to set `InstanceMonitoring.Enabled = true`
> 4. Create a new Launch Config with detail monitoring enabled and update the Auto Scaling group
> 
> > [!success]- Answer & Rationale
> > **Answer: 4. Create a new Launch Config with detail monitoring enabled and update the Auto Scaling group**
> > **Rationale**: Launch Configurations are **immutable**. You cannot update an existing one. You must create a new LC (or Launch Template version) with the desired settings and associate it with the ASG.

> [!question]
> A user has created an Auto Scaling group with default configurations from CLI. The user wants to setup the CloudWatch alarm on the EC2 instances, which are launched by the Auto Scaling group. The user has setup an alarm to monitor the CPU utilization every minute. Which of the below mentioned statements is true?
> 1. It will fetch the data at every minute but the four data points [corresponding to 4 minutes] will not have value since the EC2 basic monitoring metrics are collected every five minutes
> 2. It will fetch the data at every minute as detailed monitoring on EC2 will be enabled by the default launch configuration of Auto Scaling
> 3. The alarm creation will fail since the user has not enabled detailed monitoring on the EC2 instances
> 4. The user has to first enable detailed monitoring on the EC2 instances to support alarm monitoring at every minute
> 
> > [!success]- Answer & Rationale
> > **Answer: 1. It will fetch the data at every minute but the four data points [corresponding to 4 minutes] will not have value since the EC2 basic monitoring metrics are collected every five minutes**
> > **Rationale**: By default (especially via CLI), basic monitoring (5-minute intervals) is enabled. If you create a 1-minute alarm, it will only receive data points every 5 minutes, resulting in "missing" data for the other 4 minutes. You must enable **Detailed Monitoring** for 1-minute data delivery. See [[EC2 Overview]].

> [!question]
> A customer has a website which shows all the deals available across the market. The site experiences a load of 5 large EC2 instances generally. However, a week before Thanksgiving vacation they encounter a load of almost 20 large instances. The load during that period varies over the day based on the office timings. Which of the below mentioned solutions is cost effective as well as help the website achieve better performance?
> 1. Keep only 10 instances running and manually launch 10 instances every day during office hours.
> 2. Setup to run 10 instances during the pre-vacation period and only scale up during the office time by launching 10 more instances using the AutoScaling schedule.
> 3. During the pre-vacation period setup a scenario where the organization has 15 instances running and 5 instances to scale up and down using Auto Scaling based on the network I/O policy.
> 4. During the pre-vacation period setup 20 instances to run continuously.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2. Setup to run 10 instances during the pre-vacation period and only scale up during the office time by launching 10 more instances using the AutoScaling schedule.**
> > **Rationale**: This is the most cost-effective and performant balance. It uses scheduled scaling to proactively handle the known daily office-hour spikes during the high-traffic week, while avoiding the cost of running 20 instances 24/7. See [[EC2 Overview]].

> [!question]
> When Auto Scaling is launching a new instance based on condition, which of the below mentioned policies will it follow?
> 1. Based on the criteria defined with cross zone Load balancing
> 2. Launch an instance which has the highest load distribution
> 3. Launch an instance in the AZ with the fewest instances
> 4. Launch an instance in the AZ which has the highest instances
> 
> > [!success]- Answer & Rationale
> > **Answer: 3. Launch an instance in the AZ with the fewest instances**
> > **Rationale**: To maintain high availability, Auto Scaling always attempts to distribute instances evenly across Availability Zones. When launching a new instance, it picks the zone with the fewest instances.

> [!question]
> The user has created multiple AutoScaling groups. The user is trying to create a new AS group but it fails. How can the user know that he has reached the AS group limit specified by AutoScaling in that region?
> 1. Run the command: `as-describe-account-limits`
> 2. Run the command: `as-describe-group-limits`
> 3. Run the command: `as-max-account-limits`
> 4. Run the command: `as-list-account-limits`
> 
> > [!success]- Answer & Rationale
> > **Answer: 1. Run the command: `as-describe-account-limits`**
> > **Rationale**: The CLI command `describe-account-limits` (or the older `as-describe-account-limits`) returns the limits for the number of ASGs and Launch Configurations in your account for that region.

> [!question]
> A user is trying to save some cost on the AWS services. Which of the below mentioned options will not help him save cost?
> 1. Delete the unutilized EBS volumes once the instance is terminated
> 2. Delete the Auto Scaling launch configuration after the instances are terminated
> 3. Release the elastic IP if not required once the instance is terminated
> 4. Delete the AWS ELB after the instances are terminated
> 
> > [!success]- Answer & Rationale
> > **Answer: 2. Delete the Auto Scaling launch configuration after the instances are terminated**
> > **Rationale**: Auto Scaling Launch Configurations (and templates) are free of charge. You only pay for the resources they create (EC2 instances). Deleting the LC itself provides no cost savings.

> [!question]
> To scale up the AWS resources using manual Auto Scaling, which of the below mentioned parameters should the user change?
> 1. Maximum capacity
> 2. Desired capacity
> 3. Preferred capacity
> 4. Current capacity
> 
> > [!success]- Answer & Rationale
> > **Answer: 2. Desired capacity**
> > **Rationale**: Adjusting the **Desired Capacity** is the standard way to manually trigger a scale-up or scale-down event in an ASG.

> [!question]
> For AWS Auto Scaling, what is the first transition state an existing instance enters after leaving steady state in Standby mode?
> 1. Detaching
> 2. Terminating:Wait
> 3. Pending
> 4. EnteringStandby
> 
> > [!success]- Answer & Rationale
> > **Answer: 3. Pending**
> > **Rationale**: When an instance is moved from `InService` to `Standby`, it is technically removed from the ASG's active set. When it is moved back *out* of Standby to become active again, it enters the `Pending` state while it is re-registered with load balancers and prepared for service. (Note: The raw question asks for transition *after leaving steady state in Standby*, implying returning to service).

> [!question]
> For AWS Auto Scaling, what is the first transition state an instance enters after leaving steady state when scaling in due to health check failure or decreased load?
> 1. Terminating
> 2. Detaching
> 3. Terminating:Wait
> 4. EnteringStandby
> 
> > [!success]- Answer & Rationale
> > **Answer: 1. Terminating**
> > **Rationale**: When an instance is selected for termination (scale-in or unhealthy), it transitions directly into the `Terminating` state.

> [!question]
> A user has setup Auto Scaling with ELB on the EC2 instances. The user wants to configure that whenever the CPU utilization is below 10%, Auto Scaling should remove one instance. How can the user configure this?
> 1. The user can get an email using SNS when the CPU utilization is less than 10%. The user can use the desired capacity of Auto Scaling to remove the instance
> 2. Use CloudWatch to monitor the data and Auto Scaling to remove the instances using scheduled actions
> 3. Configure CloudWatch to send a notification to Auto Scaling Launch configuration when the CPU utilization is less than 10% and configure the Auto Scaling policy to remove the instance
> 4. Configure CloudWatch to send a notification to the Auto Scaling group when the CPU Utilization is less than 10% and configure the Auto Scaling policy to remove the instance
> 
> > [!success]- Answer & Rationale
> > **Answer: 4. Configure CloudWatch to send a notification to the Auto Scaling group when the CPU Utilization is less than 10% and configure the Auto Scaling policy to remove the instance**
> > **Rationale**: Dynamic scaling involves CloudWatch alarms sending notifications to the Auto Scaling group, which then executes a defined scaling policy (e.g., "Remove 1 instance"). See [[ALB Overview]]. See [[EC2 Overview]].

> [!question]
> A user has enabled detailed CloudWatch metric monitoring on an Auto Scaling group. Which of the below mentioned metrics will help the user identify the total number of instances in an Auto Scaling group including pending, terminating and running instances?
> 1. `GroupTotalInstances`
> 2. `GroupSumInstances`
> 3. It is not possible to get a count of all the three metrics together.
> 4. `GroupInstancesCount`
> 
> > [!success]- Answer & Rationale
> > **Answer: 1. `GroupTotalInstances`**
> > **Rationale**: `GroupTotalInstances` is an ASG metric (available with group metrics enabled) that provides the total count of instances in all states (InService, Pending, Terminating) within the group.

> [!question]
> Your startup wants to implement an order fulfillment process for selling a personalized gadget... How can you implement the order fulfillment process while making sure that the emails are delivered reliably?
> 1. Add a business process management application to your Elastic Beanstalk app servers...
> 2. Use SWF with an Auto Scaling group of activity workers and a decider instance in another Auto Scaling group with min/max=1 Use the decider instance to send emails to customers.
> 3. Use SWF with an Auto Scaling group of activity workers and a decider instance in another Auto Scaling group with min/max=1 use SES to send emails to customers.
> 4. Use an SQS queue to manage all process tasks Use an Auto Scaling group of EC2 Instances that poll the tasks and execute them. Use SES to send emails to customers.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3. Use SWF with an Auto Scaling group of activity workers and a decider instance in another Auto Scaling group with min/max=1 use SES to send emails to customers.**
> > **Rationale**: Simple Workflow Service (SWF) is ideal for long-running, multi-step processes like order fulfillment. Using an ASG for activity workers ensures the processing layer can scale. Using Amazon SES (Simple Email Service) ensures reliable email delivery, which is a standard best practice compared to sending from EC2 directly. See [[Index|SES Overview]].