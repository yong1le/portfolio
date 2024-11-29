# Speeding Up Data ETL Process

![Performance benchmarks of different iterations of my ETL script](/images/mpac/data-etl.png)

<span class="text-center">
**_Chart showing the speed differences between different iterations of my ETL script_**
</span>

## Situation

The Data Extraction, Transformation, and Loading (ETL) process is a crucial part of onboarding our clients at MPAC.
One of our clients stored their data in a `SQL` database involving many linked relations. Since our product
expected to receive data in a `JSON` format, we needed to transform the data from the SQL database into a `JSON` format.
This involves finding all related data among all the tables and linking them together to form a `JSON` object.

My initial task was to write a script that would perform this transformation. Since this was supposed to be a one-time
operation for this client, I focused on producing a script that would work correctly in a short amount of time,
instead of optimizing on the performance. However, as requirements for our client changed, we needed to run this
script weekly, and a processing time of **20 hours** became unacceptable.

## Task

I was tasked with optimizing the ETL process to reduce the time it took to complete the transformation.

## Action

1. I started by examinating the possible areas of bottleneck in my script. I found out that I was relying too
   much on builtin python operations like `for` loops, which are extremely slow for large datasets. After this
   discovery, I started rearchitecting my script to use methods from the `pandas` library, which call `C++`
   functions under the hood. This helped me bring my processing time down to **3 hours** locally.
2. With my solution complete, I tried running my script on the production environment. However, the CPUs
   available on AWS are nowhere as powerful compared to my local machine. For this reason, the processing took
   **10 hours** on the production environment.
3. After finding out about this CPU bottleneck, I started looking into using multiprocessing techniques to
   parallelize the processing. After 2 more attempts, I was able to bring the processing time down to **3 hours**,
   while maintaining the correctness of the script.

## Result

The optimized ETL process significantly reduced the time it took us to prepare all the data in our environments.
The new process completed in a fraction of the time it took compared to the old process. The improved performance
of the ETL process had a positive impact on the business's operations, enabling a faster feedback loop.

---

If I were to work on this artifact again, I would choose to start with the multiprocessing techniques from the beginning.
It was a massive overhaul to refactor my script to use `pandas`, then also try to parallelize it, and I could have saved
time by starting with these performance considerations to begin with..
