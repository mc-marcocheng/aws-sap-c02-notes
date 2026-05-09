---
tags: [aws, sap-c02, analytics, big-data]
---
# Amazon EMR (Elastic Map Reduce)

[[EMR|Amazon EMR]] is a managed cluster platform that simplifies running big data frameworks, such as Apache Hadoop and Apache Spark, on AWS to process and analyze vast amounts of data.

## Architecture & Node Types

An EMR cluster consists of several node types:

- **Master Node (Primary Node)**: Coordinates the distribution of data and tasks among other nodes. It tracks task status and monitors cluster health. 
  - > [!warning]
    > If the Master node fails, the cluster is terminated and the job must be re-executed (unless using multi-master support, though not explicitly detailed in raw content).
- **Core Nodes**: Run tasks and host data using the **Hadoop Distributed File System (HDFS)**.
- **Task Nodes**: Run tasks only and **do not** store data in HDFS. They are ideal for scaling compute capacity using **Spot Instances**.

## Storage Options

- **HDFS (Hadoop Distributed File System)**: Ephemeral storage distributed across the cluster nodes. Data is lost when the cluster is terminated.
- **EMRFS (EMR File System)**: An implementation of HDFS that allows EMR to directly access data stored in [[S3 Overview|S3]].
  - **Benefits**: Decouples compute and storage, higher durability (11 9's), and enables **Transient Clusters**.

## Cluster Deployment Models

- **Transient Clusters**: Automatically shut down when the job or steps are complete. Most cost-effective for periodic workloads.
- **Persistent Clusters**: Continue running after the job is complete. Useful for frequently run jobs or when storing data on HDFS (rarely recommended over S3).
- **EMR Serverless**: Run Spark/Hive without managing clusters. Automatically scales resources and releases them when jobs finish.

## Cost Optimization (SAP-C02 Focus)

> [!exam]
> **Spot Instance Strategy**: Use On-Demand or Reserved Instances for the **Master** and **Core** nodes to ensure cluster stability. Use **Spot Instances** for **Task nodes** to significantly reduce costs, as their failure won't lead to data loss or cluster termination.

- **Data Aggregation**: Hadoop performs better with fewer large files than many small files.
- **Instance Types**: Match instance types to the workload (e.g., High Memory for Spark, High CPU for compute-intensive tasks).

## Security

- **Security Configuration**: A reusable template for encryption settings (at rest in S3/Local disk, in transit).
- **Encryption**: Supports S3 SSE (SSE-S3, SSE-KMS) and CSE (CSE-KMS, CSE-Custom).
- **IAM Runtime Roles**: Manage access control for each job or query individually.
- **VPC**: EMR clusters should be launched in a VPC for network isolation.

---
**Practice:** [[EMR - Practice Questions|EMR Practice Questions]]