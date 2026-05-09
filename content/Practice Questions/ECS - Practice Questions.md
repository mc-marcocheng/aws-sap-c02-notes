---
tags: [aws, sap-c02, ecs, compute, practice-questions]
---
# ECS Practice Questions

> [!question]
> You need a solution to distribute traffic evenly across all of the containers for a task running on Amazon ECS. Your task definitions define dynamic host port mapping for your containers. What AWS feature provides this functionality?
> 1. Application Load Balancers support dynamic host port mapping.
> 2. CloudFront custom origins support dynamic host port mapping.
> 3. All Elastic Load Balancing instances support dynamic host port mapping.
> 4. Classic Load Balancers support dynamic host port mapping.
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** [[ALB Overview|Application Load Balancers]] (ALB) support dynamic host port mapping, which allows multiple tasks from the same service to run on a single container instance by mapping different host ports to the same container port. This is essential for maximizing resource utilization in an [[ECS Overview|ECS]] cluster.

> [!question]
> Your security team requires each Amazon ECS task to have an IAM policy that limits the task’s privileges to only those required for its use of AWS services. How can you achieve this?
> 1. Use IAM roles for Amazon ECS tasks to associate a specific IAM role with each ECS task definition
> 2. Use IAM roles on the Amazon ECS container instances to associate IAM role with each ECS task on that instance
> 3. Connect to each running Amazon ECS container instance and add discrete credentials
> 4. Reboot each Amazon ECS task programmatically to generate new instance metadata for each task
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** By using [[IAM Roles and Policies|IAM Roles for Tasks]], you can specify an IAM role at the task definition level. This ensures that each [[ECS Overview|ECS]] task has its own set of permissions, adhering to the principle of least privilege. This is distinct from the [[ECS Overview|ECS]] Task Execution Role, which is used by the ECS agent itself, and the Instance Role, which applies to the underlying [[EC2 Overview|EC2]] instance.
