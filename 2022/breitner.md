---
layout: talk
active: bob2022
title: Specification-driven design
speaker: Joachim Breitner
portrait: breitner.png
time: 14:15-15:00
type: Vortrag
language: english
slides-file: breitner.pdf
head: 2022
youtube: _YyCUiBgEJQ
---

Do you, too, think that "implementation-defined" is a derogary term?
Let me describe how I have pushed againt that, and for development
model that puts an abstract _specification_ of the system to be built
in a central, pivotal position, flanked by a clean-room, decoupled
"reference implementation" and a "specification acceptance test",
using functional programming for good effect in both cases.

Many developers tend to focus on the "how", and less on the "what", of
what they are building. This is not bad per se, but if left unchecked,
this may lead to systems with an "implementation-defined surface",
with a organically grown interface that leaks abstractions and exposes
implementation details.

To counter this effect, one can write a proper _specification_ for the
system. A document that, in prose and or math, precisely describes the
interface of the system, but also its behavior, i.e. its
semantics. This decouples the outward-facing aspects of the system
from the internals.

On top of that one can write a _reference implementation_ of the
system, based only on the specification. This checks and clarifies the
specification, and by comparing the behavior of the two
implementations, one can triangulate bugs and detect when
implementations and spec went out of sync.

To make things even more rigid, one can add a _conformance test
suite_, again based soley on the specification, and probes an
implementation and checks for certain behaviours. This can be
integrated into the developent process, e.g. as a CI check, and
additionally keep the implementations honest.

All in all, this gives you a clear picture of the essence of your
system or service, a place to discuss changes between stakeholders on
either side of the interface without getting distracted by
implementation designs, insulates your users from implementation
changes and gives your developers a clearly demarked space to go wild
within.

### [Joachim Breitner](https://joachim-breitner.de/)

[@nomeata](http://www.twitter.com/nomeata)

Ever since Joachim Breitner got infected with the Haskell fever in
2005, he has been an active part of the community, with many
contributions to GHC, and lately, has been driving the GHC proposal
process. He obtained a PhD in Karlsruhe, Germany, for the inception
and formal verification of the Call Arity program transformation, has
worked as a post-doc with Stephanie Weirich at the University of
Pennsylvania to make formal verification of Haskell practical, and is
now riding the blockchain bandwagon and makes sure that DFINITY is
going to be a great platform from a programming languages point of
view.
