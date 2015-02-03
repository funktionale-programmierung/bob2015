---
layout: talk
active: bob2015
title: Clutching a grip on AUTOSAR using Haskell
speaker: Johan Nordlander
time: 16:15-17:00
portrait: nordlander.jpg
type: Vortrag
language: english
slides-file: nordlander.pdf
youtube: 4OUwfQga2Jw
---

AUTOSAR is a software component standard for the automotive
industry. It offers concurrency, communication, distribution and
real-time facilities in a platform-neutral format, but notably lacks a
specification rigorous enough to facilitate simulation and testing in
a composable and platform-independent way.

This talk will give an overview of the AUTOSAR semantic formalization
carried out in the RAW FP project at Chalmers University of
Technology, and show how it has been concretized as a Haskell DSL that
is executable on any major platform under simulated real time. While
the formalized semantics captures every possible direction an AUTOSAR
system can evolve in, the embedded DSL defers scheduling decisions to
a pluggable procedure that can select among all legal execution
paths. This feature has been put to good use in an AUTOSAR simulator
with random scheduling, that has the ability to reveal race conditions
much faster than the partially deterministic scheduler found on
typical AUTOSAR platforms.

A non-trivial automotive system in the form of an ABS implementation
will be used as a running DSL example, and a comparison against real
AUTOSAR code will illustrate the amount of AUTOSAR validation checks
that can be captured using the Haskell type system alone. Some
ambiguities and dubious features of the AUTOSAR specification will
also be emphasized, together with suggested paths forward -- for the
standard as well as for the use of Haskell in resource-constrained
industrial settings.

#### Johan Nordlander

Johan Nordlander holds a Ph.D. from Chalmers University of Technology
in 1999, and is currently dividing his time between a research
position at Chalmers and his work as a network management consultant
for Data Ductus AB. His research interests lie in the fields of formal
semantics, real-time constraints, programming language design, and
type systems. Nordlander has been deeply involved in the TIMMO and
TIMMO-2-USE projects, that provided the foundation for the Timing
Extension of the AUTOSAR standard. As a software professional, he is
mostly engaged in developing tools and techniques that support
software-defined networking.
