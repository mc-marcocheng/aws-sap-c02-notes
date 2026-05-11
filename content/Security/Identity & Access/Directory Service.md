---
tags: [aws, sap-c02, directory-service, security]
---
# AWS Directory Service

AWS Directory Service provides multiple ways to use Microsoft Active Directory (AD) with other AWS services. Directories store information about users, groups, and devices, and administrators use them to manage access to information and resources.

## Directory Types

### AWS Managed Microsoft AD
AWS Managed Microsoft AD is actual Microsoft Active Directory hosted on the AWS Cloud. It allows you to run directory-aware workloads in the AWS Cloud, including Microsoft SharePoint and custom .NET and SQL Server-based applications.

- **Features**: Real Microsoft AD, supports Trust relationships (one-way, two-way, forest, domain), Multi-Region replication, Schema extensions, LDAPS, MFA via RADIUS.
- **Use Cases**: Best when you need actual Microsoft AD features in AWS, want to configure trust relationships with on-premises AD, or need to support AD-aware workloads in AWS.

### AD Connector
AD Connector is a directory gateway with which you can redirect directory requests to your on-premises Microsoft Active Directory without caching any information in the cloud.

- **Features**: Proxy to on-premises AD, no caching in AWS, requires [[VPN]] or [[Direct Connect Overview|Direct Connect]] to on-premises, supports MFA via RADIUS.
- **Use Cases**: When you want to use existing on-premises AD to log in to AWS services (like WorkSpaces, [[QuickSight]], AWS Management Console) without syncing or hosting AD in AWS.

### Simple AD
Simple AD is a standalone managed directory that is powered by Samba 4 Active Directory Compatible Server.
- **Features**: Basic AD features, user management, group policy.
- **Limitations**: No trust relationships, no RDS SQL Server support, no MFA.
- **Use Cases**: For small deployments that need basic AD capabilities but do not require advanced Microsoft AD features.

## Comparison Table

| Feature | AWS Managed Microsoft AD | AD Connector | Simple AD |
| :--- | :--- | :--- | :--- |
| **Underlying Technology** | Actual Microsoft AD | Proxy/Gateway | Samba 4 |
| **Trust Relationships** | Yes | No (relies on on-prem) | No |
| **Multi-Region Support** | Yes | No | No |
| **Data Storage in AWS** | Yes | No | Yes |
| **MFA Support** | Yes (RADIUS) | Yes (RADIUS) | No |

> [!info] High Availability
> Managed Microsoft AD and Simple AD are deployed across multiple Availability Zones automatically for high availability.

> [!exam] Trust Relationships
> You can establish a one-way or two-way trust between AWS Managed Microsoft AD and your existing on-premises Microsoft Active Directory. This allows users in your on-premises AD to access AWS resources.

> [!important] AD Connector Dependencies
> If the VPN or Direct Connect connection goes down, AD Connector will not be able to authenticate users because it does not cache credentials; authentication **fails completely**. **Managed Microsoft AD with a trust relationship** is more resilient as the directory is hosted in AWS.

## Strategic Scenarios (SAP-C02)

### Scenario 1: Global Authentication for WorkSpaces
**Requirement**: A global company uses Amazon WorkSpaces in multiple AWS Regions (us-east-1, eu-west-1). They want users to authenticate using their on-premises AD credentials. They want to minimize latency during login and avoid relying on the VPN for every authentication request.

**Solution**: Deploy AWS Managed Microsoft AD in a central region and use the Multi-Region feature to replicate the directory to other regions. Establish a two-way trust with the on-premises AD. This provides local authentication endpoints in each region, reducing latency and reliance on the WAN link for login.

### Scenario 2: Zero-Footprint AWS Authentication
**Requirement**: A strict security policy dictates that no user credentials or password hashes can be stored in the cloud. Users must access the AWS Management Console using their existing AD credentials.

**Solution**: Use AD Connector over AWS Direct Connect or Site-to-Site VPN to proxy authentication requests back to the on-premises AD. AD Connector does not cache credentials in AWS.

## Related Services
- [[_Security Index|Security Index]]
- [[VPN]]
- [[Direct Connect Overview]]
- [[QuickSight]]

---
**Practice:** [[Directory Service - Practice Questions|AWS Directory Service Practice Questions]]