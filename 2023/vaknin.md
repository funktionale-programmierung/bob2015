---
layout: talk
active: bob2023
title: OpenTelemetry Workshop
speaker: Osher Vaknin
portrait: vaknin.jpg
time: 16:20-17:50
type: Tutorial
language: english
head: 2023
---

[OpenTelemetry](https://opentelemetry.io/) is a CNCF open-source
project. It can help you analyze your software’s performance and
behavior by generating, collecting, and exporting telemetry data from
your application. OpenTelemetry is getting more and more attention as
it becomes the industry standard for distributed tracing and
observability.

With more than 50 repositories on GitHub and a bunch of SDKs and APIs,
it can look overwhelming, but once you understand the different
components it is built of, it can be powerful and easy to use.

This session will introduce the fundamentals of OpenTelemetry and how
to use it to get traces from your app. We will build an application,
instrument it with OpenTelemetry, and analyze it on a UI backend.

After this session, you will understand how to add auto
instrumentation to get distributed traces from your code, collect and
present them on a backend UI, and analyze them to debug your
application.

Requirements:

* Basic knowledge of python
* Laptop

### Preparations

Participants should have a working [Docker setup](https://www.docker.com/) and
prepare the workshop by following these instructions:

1. Clone <https://github.com/epsagon/opentelemetry-workshop>
   ```
   git clone https://github.com/epsagon/opentelemetry-workshop
   ```

2. Change to directory
   ```
   cd opentelemtry-workshop
   ```

3. Build images
   ```
   docker-compose build
   ```

4. Pull images
   ```
   docker-compose pull
   ```

Then you can start all services with `docker-compose up`.

Note: On Apple Silicon Macs you may need to disable "Use containerd for pulling
and storing images" under the "Features in development" section in the settings
of your Docker Desktop Dashboard.

### Osher Vaknin

Osher is an R&D team leader at Cisco.  Osher and his team are major contributors
to the OpenTelemetry project, the biggest observability project today. For the
last two years, Osher's job is to make developers' lives easier.
