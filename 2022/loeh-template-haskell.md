---
layout: talk
active: bob2022
title: Staging with Typed Template Haskell
speaker: Andres Löh
portrait: loeh.jpg
time: 16:20-17:55
type: Tutorial
language: english
head: 2022
---

Typed Template Haskell is a little known subset of Template Haskell
that allows the creation of strongly typed metaprograms. By employing
such metaprograms, the user gets explicit control over what parts of
the program get evaluated at compile time, and what parts get
evaluated a run time, without having to rely on predicting the
heuristics of the optimiser. This, for example, allows the creation of
staged domain-specific languages which are guaranteed to produce
reasonably efficient code. In the tutorial, we are introducing the
language constructs of Typed Template Haskell and will look at several
examples of how it can be used in practice.

The tutorial will consist of a significant amount of demonstration and
discussion, but there will also be small tasks/exercises that you can
try to solve yourself either during or after the tutorial. I will be
using ghc 9.2.1 for this tutorial (9.2.2 should also work). The
interface of Typed Template Haskell changed between recent versions of
GHC, so using older versions of GHC should in principle work, but may
require some ad-hoc adaptations. Some examples may require simple
additional package dependencies such as e.g. containers, but nothing
that would be difficult to install on the fly.

### Andres Löh

[@kosmikus](https://twitter.com/kosmikus)

Andres Löh is a Haskell consultant and co-owner of Well-Typed LLP. He
is based in Regensburg, Germany. He started using Haskell in 1997,
when being an undergraduate student of mathematics in Konstanz, and
has been an enthusiastic functional programmer ever since. Andres
obtained a PhD in Computer Science from Utrecht University in 2004, on
extending the Haskell language with capabilities for datatype-generic
programming. After having been a university lecturer for several
years, he joined Well-Typed in 2010.

Andres is very interested in applying functional programming to
real-world problems, and in particular in datatype-generic
programming, domain-specific languages, (dependent) type systems,
parallel and concurrent programming, and the theory of version
control.



