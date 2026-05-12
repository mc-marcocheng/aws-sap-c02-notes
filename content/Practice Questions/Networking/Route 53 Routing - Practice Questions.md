---
tags: [aws, sap-c02, route53, networking, practice-questions]
---
# Route 53 Routing Practice Questions

> [!question]
> You have deployed a web application targeting a global audience across multiple AWS Regions under the domain name example.com. You decide to use Route 53 Latency-Based Routing to serve web requests to users from the region closest to the user. To provide business continuity in the event of server downtime you configure weighted record sets associated with two web servers in separate Availability Zones per region. During a DR test you notice that when you disable all web servers in one of the regions Route 53 does not automatically direct all users to the other region. What could be happening? (Choose 2 answers)
> 1. Latency resource record sets cannot be used in combination with weighted resource record sets.
> 2. You did not setup an http health check for one or more of the weighted resource record sets associated with the disabled web servers
> 3. The value of the weight associated with the latency alias resource record set in the region with the disabled servers is higher than the weight for the other region.
> 4. One of the two working web servers in the other region did not pass its HTTP health check
> 5. You did not set "Evaluate Target Health" to "Yes" on the latency alias resource record set associated with example.com in the region where you disabled the servers.
> 
> > [!success]- Answer & Rationale
> > **Answer: 2, 5**
> > **Rationale:** 
> > - 2: For [[Route 53 Routing Policies#2. Weighted Routing|Weighted Routing]] to function as part of a failover mechanism, each record must have an associated **Health Check**. Without it, Route 53 assumes the resource is always healthy.
> > - 5: When using **Alias Records** (like the Latency Alias pointing to the Weighted records), you must enable **Evaluate Target Health**. This allows Route 53 to "look through" the alias to the underlying health of the weighted records. If all weighted records in a region are unhealthy, and Evaluate Target Health is Yes, Route 53 will failover to the other region.

> [!question]
> The compliance department within your multi-national organization requires that all data for your customers that reside in the European Union (EU) must not leave the EU and also data for customers that reside in the US must not leave the US without explicit authorization. What must you do to comply with this requirement for a web based profile management application running on EC2?
> 1. Run EC2 instances in multiple AWS Availability Zones in single Region and leverage an Elastic Load Balancer with session stickiness to route traffic to the appropriate zone to create their profile.
> 2. Run EC2 instances in multiple Regions and leverage Route 53's Latency Based Routing capabilities to route traffic to the appropriate region to create their profile.
> 3. Run EC2 instances in multiple Regions and leverage a third party data provider to determine if a user needs to be redirect to the appropriate region to create their profile.
> 4. Run EC2 instances in multiple AWS Availability Zones in a single Region and leverage a third party data provider to determine if a user needs to be redirect to the appropriate zone to create their profile.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** While AWS native [[Route 53 Routing Policies#5. Geolocation Routing|Geolocation Routing]] is the preferred way to handle this, in the context of this specific question, using a mechanism (like a third-party provider or Geolocation routing) to ensure users land in the correct region is required for **Data Sovereignty**.
> > - [[Route 53 Routing Policies#3. Latency-Based Routing (LBR)|Latency Based Routing]] (2) is performance-focused and does not guarantee that a user in the EU won't be routed to the US if latency is lower.

> [!question]
> A US-based company is expanding their web presence into Europe. The company wants to extend their AWS infrastructure from Northern Virginia (us-east-1) into the Dublin (eu-west-1) region. Which of the following options would enable an equivalent experience for users on both continents?
> 1. Use a public-facing load balancer per region to load-balance web traffic, and enable HTTP health checks.
> 2. Use a public-facing load balancer per region to load-balance web traffic, and enable sticky sessions.
> 3. Use Amazon Route 53, and apply a geolocation routing policy to distribute traffic across both regions
> 4. Use Amazon Route 53, and apply a weighted routing policy to distribute traffic across both regions.
> 
> > [!success]- Answer & Rationale
> > **Answer: 3**
> > **Rationale:** [[Route 53 Routing Policies#5. Geolocation Routing|Geolocation Routing]] allows you to route traffic based on the user's geographic location (Continent/Country), ensuring users in Europe reach the Dublin region and users in the US reach the N. Virginia region. This provides a localized and "equivalent" experience by ensuring regional proximity.

> [!question]
> You have been asked to propose a multi-region deployment of a web-facing application where a controlled portion of your traffic is being processed by an alternate region. Which configuration would achieve that goal?
> 1. Route 53 record sets with weighted routing policy
> 2. Route 53 record sets with latency based routing policy
> 3. Auto Scaling with scheduled scaling actions set
> 4. Elastic Load Balancing with health checks enabled
> 
> > [!success]- Answer & Rationale
> > **Answer: 1**
> > **Rationale:** [[Route 53 Routing Policies#2. Weighted Routing|Weighted Routing]] is designed for "shifting" traffic in specific proportions. By assigning a small weight to the alternate region, you can "control" exactly how much traffic is processed there (e.g., for canary testing or gradual migration).

> [!question]
> Your company is moving towards tracking web page users with a small tracking image loaded on each page. Currently you are serving this image out of us-east, but are starting to get concerned about the time it takes to load the image for users on the west coast. What are the two best ways to speed up serving this image? (Choose 2 answers)
> 1. Use Route 53's Latency Based Routing and serve the image out of us-west-2 as well as us-east-1
> 2. Serve the image out through CloudFront
> 3. Serve the image out of S3 so that it isn't being served of your web application tier
> 4. Use EBS PIOPs to serve the image faster out of your EC2 instances
> 
> > [!success]- Answer & Rationale
> > **Answer: 1, 2**
> > **Rationale:** 
> > - 1: [[Route 53 Routing Policies#3. Latency-Based Routing (LBR)|Latency-Based Routing (LBR)]] reduces network latency by directing users to the closest regional endpoint.
> > - 2: [[CloudFront Overview|CloudFront]] (CDN) is the most effective way to serve static assets like images globally, as it caches content at Edge Locations closer to the end-users.

> [!question]
> Your API requires the ability to stay online during AWS regional failures. Your API does not store any state, it only aggregates data from other sources - you do not have a database. What is a simple but effective way to achieve this uptime goal?
> 1. Use a CloudFront distribution to serve up your API. Even if the region your API is in goes down, the edge locations CloudFront uses will be fine.
> 2. Use an ELB and a cross-zone ELB deployment to create redundancy across datacenters. Even if a region fails, the other AZ will stay online.
> 3. Create a Route53 Weighted Round Robin record, and if one region goes down, have that region redirect to the other region.
> 4. Create a Route53 Latency Based Routing Record with Failover and point it to two identical deployments of your stateless API in two different regions. Make sure both regions use Auto Scaling Groups behind ELBs.
> 
> > [!success]- Answer & Rationale
> > **Answer: 4**
> > **Rationale:** Combining [[Route 53 Routing Policies#3. Latency-Based Routing (LBR)|Latency-Based Routing (LBR)]] for performance and [[Route 53 Routing Policies#4. Failover Routing (Active-Passive)|Failover Routing]] for high availability is the "Gold Standard" for multi-region stateless APIs. Using **Auto Scaling** and **ELBs** ensures that each regional deployment is itself highly available and scalable.
