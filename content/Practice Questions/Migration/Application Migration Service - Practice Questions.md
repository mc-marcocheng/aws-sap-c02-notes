---
tags: [aws, sap-c02, migration, mgn, practice-questions]
---
# Application Migration Service - Practice Questions

> [!question]
> An enterprise is migrating 300 on-premises legacy virtual machines to AWS using AWS Application Migration Service (MGN). The corporate security policy strictly prohibits any on-premises server from accessing the public internet. The on-premises data center is connected to AWS via a 10 Gbps AWS Direct Connect connection. How should the solutions architect configure the migration architecture to meet the security requirements?
> 
> 1. Configure the MGN replication agents to route traffic through an on-premises proxy server that has internet access.
> 2. Create VPC Interface Endpoints for AWS MGN and Amazon EC2, and configure the on-premises agents to replicate data over the Direct Connect connection to the VPC endpoints.
> 3. Use an AWS Site-to-Site VPN over the Direct Connect connection and configure the MGN agents to use the VPN tunnel.
> 4. Deploy an AWS Storage Gateway on-premises and use it as a cache for the MGN replication traffic before it is sent to AWS.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** [[Application Migration Service]] supports private replication. By creating VPC Interface Endpoints (AWS PrivateLink) for MGN and EC2, the replication agents can send data directly to AWS over the [[Direct Connect Overview|Direct Connect]] connection without requiring public internet access, satisfying the strict security policy. Option 1 violates the no-internet rule.

> [!question]
> A company is planning a lift-and-shift migration of their VMware environment to AWS using AWS Application Migration Service (MGN). They have strict compliance requirements that prohibit installing any third-party software agents directly on the guest operating systems of their database servers. How can the company migrate these servers using MGN?
> 
> 1. Use AWS DataSync to migrate the block storage of the database servers instead of AWS MGN.
> 2. Install the AWS MGN replication agent on the VMware vCenter server rather than the individual guest OS.
> 3. Use the AWS MGN agentless replication feature by deploying the AWS MGN vCenter Appliance in the on-premises environment.
> 4. Use AWS Server Migration Service (SMS) instead, as it does not require guest OS agents.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** AWS MGN supports agentless replication specifically for VMware vCenter environments. By deploying the AWS MGN vCenter Appliance, the service can perform block-level replication at the hypervisor level, completely avoiding the need to install agents on the guest OS. (Note: AWS SMS is deprecated and replaced by MGN).
