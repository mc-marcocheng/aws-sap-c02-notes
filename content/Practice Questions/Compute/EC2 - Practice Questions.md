---
tags: [aws, sap-c02, ec2, compute, practice-questions]
---
# EC2 Practice Questions

> [!question]
> What are the Amazon EC2 API tools?
> 1. They don’t exist. The Amazon EC2 AMI tools, instead, are used to manage permissions.
> 2. Command-line tools to the Amazon EC2 web service
> 3. They are a set of graphical tools to manage EC2 instances.
> 4. They don’t exist. The Amazon API tools are a client interface to Amazon Web Services.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** The Amazon EC2 API tools are command-line tools that provide a client interface to the Amazon EC2 web service. These tools allow users to manage their EC2 resources, such as launching instances and configuring security groups, directly from the command line. While the modern unified [[EC2 Overview|AWS CLI]] is now the preferred method, these specific API tools were the original method for interacting with the service programmatically.

> [!question]
> When a user is launching an instance with EC2, which of the below mentioned options is not available during the instance launch console for a key pair?
> 1. Proceed without the key pair
> 2. Upload a new key pair
> 3. Select an existing key pair
> 4. Create a new key pair
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** During the EC2 instance launch process in the AWS Management Console, users are given three primary options regarding key pairs: **Select an existing key pair**, **Create a new key pair**, or **Proceed without a key pair**. The option to **Upload (Import) a new key pair** is not available directly within the launch wizard; a user must import their public key in the "Key Pairs" section of the EC2 console *before* starting the launch sequence if they wish to use an externally generated key. See [[EC2 Overview]] for more details on access management.
