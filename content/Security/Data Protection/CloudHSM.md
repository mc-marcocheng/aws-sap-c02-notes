---
tags: [aws, sap-c02, security, hsm]
---
# AWS CloudHSM

CloudHSM provides hardware security modules in the AWS Cloud. It allows you to generate and use your own encryption keys on the AWS Cloud.

## Key Features
- **Dedicated Hardware**: You have exclusive access to the HSM appliance.
- **FIPS 140-2 Level 3**: Validated for stringent compliance requirements.
- **VPC Deployment**: The HSM resides within your VPC.
- **Custom Key Store**: Can be integrated with AWS [[KMS]] as a custom key store.

> [!exam]
> Use CloudHSM when you must have **exclusive control** over the hardware generating the keys, when required to meet **FIPS 140-2 Level 3** compliance, or when running applications that use PKCS#11, Java JCA/JCE, or Microsoft CAPI/CNG (e.g., **Oracle TDE**).

## Related Services
- [[_Security Index|Security Index]]
- [[KMS]]

---
**Practice:** [[CloudHSM - Practice Questions|CloudHSM Practice Questions]]
