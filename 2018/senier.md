---
layout: talk
active: bob2018
title: "When one beyond-mainstream technology is not enough: Combining program verification with component-based architectures"
speaker: Alexander Senier
type: Vortrag
language: english
head: 2018
time: 12:00-12:45
slides-file: senier.pdf
youtube: ZtML-iZ5xB4
---

Fuzzing. Bug bounties. ASLR. Code reviews. Despite the immense efforts put into improving the robustness of our software and the security of our systems, we don't seem to make good progress here. Have a look at a recent update to your favorite smartphone OS. Every single month, dozens of flaws get fixed. But even more are still lurking in the code bases. Many of them allow for total system compromise. What is the reason that the situation does not seem to improve?

We argue that it's the due to lacking approaches at the architecture level as well as the implementation level. Consequently, the problem has to be addressed at those two levels: Firstly, our systems need to be structured such that most complexity is in untrusted components which cannot affect system security. Secondly, for the much smaller trusted portions we need to establish formal correctness arguments.

In this talk, we present our approach to building trustworthy mobile
OS. We combine the novel system architecture of the
[Genode](http://genode.org/about/index) OS framework with the
[SPARK](http://spark-2014.org) technology for high-reliability
applications.

## Alexander Senier

Alexander Senier is the founder and CEO of Componolit, a startup
developing a secure, open-source mobile OS that will run unmodified
Android apps in isolation. Since he started programming 25 years ago,
he is in search of tools and technologies for creating better
software. Consequently, he's interested in formal verification,
microkernels and open-source software which he has used to build
high-security systems in the past.


