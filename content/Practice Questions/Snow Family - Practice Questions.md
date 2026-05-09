---
tags: [aws, sap-c02, snow-family, migration, practice-questions]
---
# Snow Family Practice Questions

> [!question]
> A company wants to transfer petabyte-scale of data to AWS for their analytics, however are constrained on their internet connectivity? Which AWS service can help them transfer the data quickly?
> 1. S3 enhanced uploader
> 2. Snowmobile
> 3. Snowball
> 4. Direct Connect
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** [[Snow Family|Snowball]] (specifically Snowball Edge) is designed for large-scale data migrations at the petabyte-scale. It provides a physical device that is shipped to AWS, bypassing limited internet connectivity. [[Snow Family|Snowmobile]] is intended for exabyte-scale migrations (up to 100 PB per container), which is overkill for a standard petabyte-scale request. [[Direct Connect Overview|Direct Connect]] provides a dedicated network connection but is often slower for one-time massive transfers if connectivity is already a constraint.

> [!question]
> A company wants to transfer its video library data, which runs in exabytes, to AWS. Which AWS service can help the company transfer the data?
> 1. Snowmobile
> 2. Snowball
> 3. S3 upload
> 4. S3 enhanced uploader
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** [[Snow Family|Snowmobile]] is the only member of the [[Snow Family]] capable of handling exabyte-scale data migrations. A single Snowmobile can carry up to 100 PB. [[Snow Family|Snowball]] Edge units max out at ~100 TB usable capacity, making them impractical for exabyte-scale transfers. Standard S3 upload methods are constrained by internet bandwidth and are not feasible for exabyte-level data volumes.
