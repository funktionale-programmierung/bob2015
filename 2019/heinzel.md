---
layout: talk
active: bob2019
title: Writing Hardware in Haskell
speaker: Matthias Heinzel
portrait: matthias-heinzel.jpg
time: 16:20-17:50
type: Tutorial
language: english
head: 2019
---


In this hands-on session, we will write Haskell programs, compile them
into digital circuits, and flash them onto an FPGA (field programmable
gate array).

FPGAs are computer chips containing logic and memory cells that can be
dynamically reconfigured to implement various digital circuits. This
allows to iteratively develop processors, highly parallel
high-performance computations, networking stacks and more without
having to manufacture a custom chip.

While traditional hardware description languages (HDLs), exist to
design these systems, circuit semantics are also nicely captured by
purely functional programs. [Clash](https://clash-lang.org/) in particular, can compile a
subset of Haskell into traditional HDLs, providing powerful high-level
abstractions and correctness guarantees. It also allows reusing large
parts of the existing Haskell tooling and library ecosystem.

We will start with an overview of digital circuits and FPGAs,
explaining the flexibility and restrictions faced when designing
hardware.  After a quick demo of how to work with Clash, participants
will write their own designs, test them in GHCi and compile them to
hardware.

The tutorial assumes basic proficiency with Haskell, including
Functors and
Applicatives. [FPGAs](http://www.latticesemi.com/icestick) and some
additional hardware are provided, but a laptop is required to run
Clash and an [open source hardware design
toolchain](http://www.clifford.at/icestorm/).

Participants will
- gain an understanding of the inner workings of digital circuits, which they are surrounded by in their daily lives
- see examples of how to use types and common abstractions (Functor, ...) to model properties of a domain
- more generally experience the versatility and expressiveness of
  functional programming, inspiring them to solve problems in a
  multitude of domains outside of what they thought is possible.
  
### Matthias Heinzel

Matthias started programming with C on microcontrollers, but during
his computer engineering degree fell under the spell of immutability,
purity and principled abstraction.  Since then, he has been interested
in both hardware, functional programming and what happens at their
intersection.
