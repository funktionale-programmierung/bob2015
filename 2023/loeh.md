---
layout: talk
active: bob2023
title: Structuring effectful programs
speaker: Andres Löh
portrait: loeh.jpg
time: 16:15-17:00
type: Vortrag
slides-file: loeh.pdf
language: english
head: 2023
video: bob2023-structuring-effectful-programs-loeh
---

Historically, Haskell has been using monads to encode effects in
programs, and monad transformers to provide a modular way to combine
several such effects. More recently, algebraic effects have become
increasingly popular as a mechanism to replace monad
transformers. Often, discussions about the advantages and
disadvantages of the various approaches seem to focus on technical
details and not on the bigger question of how scalable effectful
applications should actually be designed. In this talk, I am hoping to
provide a brief introduction to both monad transformers and algebraic
effects and then explain how I believe that effectful programs should
be structured in such a way that the choice between these approaches
becomes mostly irrelevant.

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

