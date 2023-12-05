---
layout: talk
active: bob2024
title: Hands on Introduction to the Copilot Runtime Verification Language
speaker: Frank Dedden
portrait: 
time:
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


### Frank Dedden

Frank is a programmer and researcher with a background in languages
and compilers, with a particular interest in applying functional
programming concepts to lower-level systems. His past experience
includes working on the Copilot runtime verification language at NASA
Langley Research Center, and the development of a compiler for a
dependently-typed programming language.
