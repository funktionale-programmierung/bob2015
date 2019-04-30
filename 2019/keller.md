---
layout: talk
active: bob2019
title: "Keynote: High-Peformance Haskell"
speaker: Gabriele Keller
portrait: gabriele-keller.jpg
type: Vortrag
language: english
head: 2019
time: 09:00-10:00
youtube: qBoaE4diJbY
---

Functional languages are becoming increasingly popular, not least due
to their high level of abstraction, reuse, and compositionally. By
conventional wisdom, these features discourage their use for
performance critical applications as they can come at the cost of
lower efficiency. However, as demonstated by a number of new
functional high-performance systems, we can make abstraction work for
us in this space, exploiting the absence of uncontrolled side effects
and the way they expose computational and communication patterns to
aggressively optimise and generate highly efficient code

The Haskell embedded DSL [Accelerate](http://www.acceleratehs.org/) is
such a language. It enables application programmers with relatively
little knowledge of parallel computing to write programs accelerated
by multi-core CPU and GPU architectures, even beating hand optimised
code for typical applications. In this talk, I will give an overview
over programming in Accelerate, demonstrate some applications, and
show how advanced features of the Haskell type system, like type
families, play a crucial role in the implementation.

### [Gabriele Keller](https://www.uu.nl/staff/GKKeller)

Gabriele Keller has recently been appointed as chair of the
[Software Technology Group](https://www.uu.nl/staff/organizationalchart/BETA/87/849/858)
at Utrecht University. Before moving to the
Netherlands, she co-founded the Programming Languages & Systems Group
at the University of New South Wales, and was a Principal Researcher
at Data6 (formerly NICTA) in the Trustworthy Systems project. She
contributed to the design of type families in Haskell, and is one of
the co-authors of the paper
[Associated Type Synonyms](https://www.microsoft.com/en-us/research/wp-content/uploads/2005/01/at-syns.pdf), which won the
ACM SIGPLAN Most Influential ICFP Paper Award. She co-developed
leading Haskel high-performance array frameworks, including
[Repa](https://hackage.haskell.org/package/repa) and
[Accelerate](https://hackage.haskell.org/package/accelerate). Her research interest are type systems, functional
languages, and how these languages can be used to reduce the costs of
software development, in particular in the context of high-performance
computing and safety critical systems.
