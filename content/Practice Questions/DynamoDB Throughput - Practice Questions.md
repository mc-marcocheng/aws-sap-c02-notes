---
tags: [aws, sap-c02, dynamodb, practice-questions]
---
# DynamoDB Throughput Practice Questions

> [!question]
> You need to migrate 10 million records in one hour into DynamoDB. All records are 1.5KB in size. The data is evenly distributed across the partition key. How many write capacity units should you provision during this batch load?
> 1. 6667
> 2. 4166
> 3. 5556
> 4. 2778
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale**:
> > 1. **Calculate WCUs per record**: Each record is 1.5KB. Since [[DynamoDB Throughput and Scaling#Write Capacity Units (WCU)|Write Capacity Units]] are rounded up to the nearest 1KB, a 1.5KB record requires **2 WCUs**.
> > 2. **Calculate total records per second**: 10,000,000 records / 3,600 seconds ≈ **2,777.78 records/sec**.
> > 3. **Calculate total WCUs**: 2,777.78 records/sec * 2 WCUs/record = **5,555.56 WCUs**.
> > 4. Rounding up gives **5,556 WCUs**.

> [!question]
> A meteorological system monitors 600 temperature gauges, obtaining temperature samples every minute and saving each sample to a DynamoDB table. Each sample involves writing 1K of data and the writes are evenly distributed over time. How much write throughput is required for the target table?
> 1. 1 write capacity unit
> 2. 10 write capacity units
> 3. 60 write capacity units
> 4. 600 write capacity units
> 5. 3600 write capacity units
> 
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale**:
> > 1. **Total writes per minute**: 600 gauges * 1 sample/gauge = 600 samples per minute.
> > 2. **Writes per second**: 600 samples / 60 seconds = **10 samples per second**.
> > 3. **WCUs per sample**: Each sample is 1KB, which equals **1 WCU**.
> > 4. **Total throughput**: 10 samples/sec * 1 WCU/sample = **10 WCUs**.
> > See [[DynamoDB Throughput and Scaling#Write Capacity Units (WCU)|WCU Calculations]].

> [!question]
> A company is building a system to collect sensor data from its 36000 trucks, which is stored in DynamoDB. The trucks emit 1KB of data once every hour. How much write throughput is required for the target table?
> 1. 10
> 2. 60
> 3. 600
> 4. 150
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale**:
> > 1. **Total writes per hour**: 36,000 trucks * 1 write/truck = 36,000 writes.
> > 2. **Writes per second**: 36,000 writes / 3,600 seconds = **10 writes per second**.
> > 3. **WCUs per write**: 1KB data = **1 WCU**.
> > 4. **Total throughput**: 10 writes/sec * 1 WCU/write = **10 WCUs**.

> [!question]
> A company is using DynamoDB to design storage for their IOT project to store sensor data. Which combination would give the highest throughput?
> 1. 5 Eventual Consistent reads capacity with Item Size of 4KB
> 2. 15 Eventual Consistent reads capacity with Item Size of 1KB
> 3. 5 Strongly Consistent reads capacity with Item Size of 4KB
> 4. 15 Strongly Consistent reads capacity with Item Size of 1KB
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale**:
> > - **1**: 5 RCUs * 2 (eventual) * 4KB = **40 KB/s**
> > - **2**: 15 RCUs * 2 (eventual) * 1KB (rounded to 4KB for calculation) -> actually 15 RCUs allows 15 * 2 = 30 reads of up to 4KB. So 30 * 1KB = **30 KB/s**.
> > - **3**: 5 RCUs * 1 (strong) * 4KB = **20 KB/s**.
> > - **4**: 15 RCUs * 1 (strong) * 1KB = **15 KB/s**.
> > Option 1 provides the highest data throughput in KB/s. See [[DynamoDB Throughput and Scaling#Read Capacity Units (RCU)|RCU comparisons]].

> [!question]
> If your table item's size is 3KB and you want to have 90 strongly consistent reads per second, how many read capacity units will you need to provision on the table?
> 1. 90
> 2. 45
> 3. 10
> 4. 19
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale**:
> > 1. **RCUs per item**: 3KB is rounded up to the nearest 4KB block, so each strongly consistent read requires **1 RCU**.
> > 2. **Total RCUs**: 90 reads/sec * 1 RCU/read = **90 RCUs**.
> > Refer to [[DynamoDB Throughput and Scaling#Read Capacity Units (RCU)|Provisioned Throughput Calculations]].

