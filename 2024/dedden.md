---
layout: talk
active: bob2024
title: Runtime Verification with the Copilot Language, A Hands-on Introduction
speaker: Frank Dedden
portrait: 
time: 10:05–11:35
type: Tutorial
language: english
head: 2024
---

Systems that have a catastrophic result if they fail (ultra-critical
systems) require a very tight safety margin. For example, civil
aircraft have a prescribed probability smaller than one in a billion
for such catastrophic faults. Additionally, aircraft are highly
complex systems. Due to this complexity, and the possibility of
hardware failures, classical formal verification techniques are not
adequate to achieve such ultra-reliability.

[Copilot](https://copilot-language.github.io/) is a runtime
verification language that allows one to write high-level
specifications for ultra-critical systems. The system is monitored at
runtime to verify if it is still performing according to the
specification.

The implementation of Copilot is primarily developed by NASA and
consists of a high-level stream-based domain specific language and a
collection of libraries providing a range of functions for e.g.
different kinds of temporal logic, majority voting and a connection to
symbolic verification engines via Galois Inc.'s
[What4](https://github.com/GaloisInc/what4).

This hands-on tutorial gives a short introduction to runtime
verification and it's challenges. Followed by writing specifications
for ultra-critical systems using Copilot. We start with the basics of
the language and explore monitoring embedded systems.


**Installation**

Although Copilot is based on Haskell, no knowledge of Haskell is required.
For the purpose of this tutorial we will use a repository containing exercises
and a Docker-based infrastructure to run them. This makes it easy and reliable
to participate in the tutorial.

If you are interested, it is highly recommended to execute the following steps
prior to attending the tutorial:

1. Clone the repository at
   <https://github.com/fdedden/bobkonf-2024-copilot-tutorial>
2. Follow the steps in the included
   [INSTALL.md](https://github.com/fdedden/bobkonf-2024-copilot-tutorial/blob/master/INSTALL.md)
   file.


### Frank Dedden

Frank is a programmer and researcher with a background in languages
and compilers, with a particular interest in applying functional
programming concepts to lower-level systems. His past experience
includes working on the Copilot runtime verification language at NASA
Langley Research Center, and the development of a compiler for a
dependently-typed programming language.
