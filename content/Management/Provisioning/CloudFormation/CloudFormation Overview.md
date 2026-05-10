---
tags: [aws, sap-c02, cloudformation]
---
# CloudFormation Overview

AWS CloudFormation provides a common language for you to describe and provision all the infrastructure resources in your cloud environment (Infrastructure as Code).

## Core Concepts
- **Template**: A JSON or YAML file that describes the desired state of your resources.
- **Stack**: A single unit of managed resources created from a template.
- **Change Sets**: A preview of how proposed changes will affect your running resources before you apply them.
- **StackSets**: Enables you to create, update, or delete stacks across multiple **Accounts** and **Regions** with a single operation.

## Template Anatomy
- **Parameters**: Input values provided at runtime.
- **Mappings**: Lookup tables for static configurations (e.g., Region-to-AMI mapping).
- **Conditions**: Control whether certain resources are created based on logic (e.g., `IsProduction`).
- **Resources**: (Required) The actual AWS resources to be provisioned.
- **Outputs**: Values returned after stack creation (e.g., a Load Balancer URL).
- **Metadata**: Additional information about the template.

## Advanced Features
- **Nested Stacks**: Stacks created as part of other stacks using the `AWS::CloudFormation::Stack` resource. Best practice for modularizing templates.
- **Custom Resources**: Allow you to include resources not natively supported by CloudFormation, often backed by **Lambda**.
- **Drift Detection**: Identifies if resources have been modified outside of CloudFormation.
- **Stack Policies**: Prevents stack resources from being unintentionally updated or deleted during a stack update.

## Resource Attributes
- **CreationPolicy**: Waits for success signals (e.g., from an EC2 user-data script).
- **DeletionPolicy**: Determines what happens to a resource when the stack is deleted (`Delete`, `Retain`, or `Snapshot`).
- **DependsOn**: Explicitly defines a dependency order for resource creation.
- **UpdatePolicy**: Defines how CloudFormation handles updates to resources like Auto Scaling groups (e.g., `AutoScalingRollingUpdate`).

> [!exam]
> **SAP-C02 Deployment Strategies**:
> - **Rolling Updates**: Use `UpdatePolicy` on ASGs.
> - **Blue/Green**: Create a new stack, swap DNS (Route 53), then delete the old stack.
> - **Cross-Account/Region**: Always use **StackSets**.

---
## Related Practice Questions
- [[CloudFormation - Practice Questions]]

![[stack-set-conceptual-sv.png]]

---
**Practice:** [[CloudFormation - Practice Questions|CloudFormation Practice Questions]]