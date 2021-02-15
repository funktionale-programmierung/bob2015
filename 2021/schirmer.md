---
layout: talk
active: bob2021
title: A Firewall for Your Radical Network
speaker: Stefanie Schirmer
portrait: stefanie-schirmer.jpg
time: 17:05–17:50
type: Vortrag
language: english
head: 2021
---

QubesOS is probably the most secure operating system right now,
recommended by security professionals and human rights activists.
Security issues in operating systems are often related to networking
or hardware. By separating networking, private data and hardware
drivers into different virtual machines, QubesOS helps to isolate
attacks. In case of a breach, attackers are confined to a virtual
machine (=Qube), for example the networking Qube. The rest of the
system is safe on separate Qubes, even in case of compromise.
The Qubes-Mirage-Firewall is written in OCaml as a unikernel - a
small, single purpose operating system kernel - in the library
operating system MirageOS. The talk will not be QubesOS-specific,
rather use it as an example and draw conclusions that apply to all
operating systems and give a general understanding and strategy plan
for network security tailored to everyone's individual needs.

We will talk about:

- Functional Programming as a security practice
- The layered structure of networking and why we have it
- What is a network protocol and how we read it
- Tools to analyze and learn about a network (wireshark, traceroute)
- The idea of QubesOS and how to structure your system into different
Qubes and run them
- Configuring a firewall and why it has been obscure in the past
- Testing a firewall to see who can access which parts of the network

### Stefanie Schirmer

[@linse](http://www.twitter.com/linse)

I'm a German engineer and artist who has worked in Montreal and New
York, now back in Berlin. I'm an alumna of Hacker School / Recurse
Center, and also of the School for Poetic Computation in New York
City. During my PhD in Bioinformatics, I researched programming
languages and compilers, dynamic programming and RNA structures, with
the use of statistical models. However, technology is not a cure-all,
and I strive for a human-centric approach. This talk is about my work
on a firewall for QubesOS, a security-focused operating system that is
used by activists and journalists. The work is open source and funded
by the German Ministry of Education (BMBF) via the Prototype Fund.
Since then, I have been working on the search stack at DuckDuckGo.


