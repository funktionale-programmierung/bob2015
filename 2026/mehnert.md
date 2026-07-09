---
layout: talk
active: bob2026
title: "Run your own digital infrastructure using MirageOS unikernels"
speaker: Hannes Mehnert
time: 17:00–17:45
type: Vortrag
language: english
head: 2026
video: bob11-2026-digital-infrastructure-mirageos-mehnert
edition: 2026
---

MirageOS started more than a decade ago as a research project at University of Cambridge. Nowadays it provides various useful services, from web server over DNS & DHCP, eMail server (including mailing lists), VPN, CalDAV (calendar), firewall, ... Security is built-in: few attack vectors (by using the memory-safe and type-safe programming language OCaml), tiny attack surface (much smaller binaries), reproducible builds (supply chain security).

We also developed a lean web user interface for managing MirageOS unikernels, together with an orchestrator that allows you to deploy via CI actions, or from a build server, including lifecycle management (updates, restart on failure, monitoring, ...).

Over the years, we also managed to simplify the code of the simplest unikernel by removing abstraction (that was introduced prematurely). Take a look at the screencast https://asciinema.org/a/681922

I will show the general idea, what is available right now (and how easy to use it is), and how we moved this project from a research experiment to production.


### Hannes Mehnert
[@hannes@social.coop](https://social.coop/@hannes)

In computer security since >20 years. PhD "formal verification of the correctness of OO code" (separation logic & Coq). Learned that verifiying existing code is tedious (mutable state). Redeveloping OS in FP brings trustworthy systems. Works full-time on MirageOS since >10 years, now at robur.coop. Since 2025 leading the OCaml Security team.
