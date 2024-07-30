# Debugging Local Docker Services

**Date: Jul 29, 2024**

![Design of how to debug local docker services](/images/mpac/local-debug.png)

<span class="text-center">
**_Flow diagram describing my implementation of how to debug local Docker services_**
</span>

## Situation

[Docker](https://www.docker.com/) containers are a way of building consistent
and expectable applications to be run anywhere. During my Co-op term at
[MPAC](https://www.mpac.ca/en), I worked extensively with Docker containers.
The project I was working on used a micro-services
architecture, which means that we have many docker services running at the same
time. To orchestrate this while doing local development, we have a separate
project responsible for spinning up all required services
locally using [Docker Compose](https://docs.docker.com/compose).

This method of starting services for local development worked well in most cases,
but it was an issue if a developer needed to debug their service.
Usually, a developer would start the debugger using their IDE, and provide it
arguments on how to start the respective application. If we used the usual
way of starting debuggers, we would need to restart all services to debug a single
one. It also became _extremely_ messy if we needed to debug _multiple_ services.

## Task

I was given the task of improving our current workflow for local development.
Part of this improvement had to do with finding a way to debug our services
that would cause minimal friction for developers.

## Action

1. Firstly, I set out to investigate common solutions within the industry. I came
   upon a method which allows us to start an application as a remote debug server.
   Local debuggers can connect to this server using a
   **Debug Adaptor Protocol** (DAP).
2. After discovering this method, I had to test its integration with our system.
   I creating a **Proof of Concept** (POC), and presented it to my supervisor.
3. After receiving an approval from my supervisor, I continued to flush out the
   details and polish the implementation for our workflow.

## Result

This method allowed us to run a debugger on any of our services whenever we
needed. Since the service would always be ready to connect to a debugger, we did
not need to restart any of the services when debugging them. This proved to be
a very helpful feature, as our system is large and complicated, the debugger
has made it much simpler to follow the execution flow of many operations in
later development.

---

If I were to work on this artifact again, I would choose to look
for performance optimizations in this workflow. Although the overhead is usually
negligible, there were some occasions where much of the CPU on my machine was taken
up by the debugger.
While developing this artifact, I learned the importance of complying to
industry standards and common patterns. Although niche solutions may seem to
work better currently, they become problematic when you try to expand on them.
