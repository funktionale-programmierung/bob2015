---
layout: talk
active: bob2017
title: Write one program, get two (or three, or many) 
speaker: Andres Löh
portrait: andres-loeh.jpg
time: 15:05-15:50
type: Vortrag
language: english
head: 2017
---

Many programming problems are data conversion problems. Data has to be
converted between two different formats: for example, between a
representation as a Haskell datatype and JSON. Implementing this
conversion consists of two parts: in the case of the example, one that
converts from Haskell to JSON, and one that parses JSON into
Haskell. By using generic programming techniques, one can often get
both directions for free. We write just the datatype definition, and
let a library derive the conversions completely automatically,
together with a guarantee that the conversions are compatible with
each other. But sometimes, we cannot use the generic definition, for
example, because the required JSON representation is slightly
unusual. In such a situation, we would still like to write only one
mapping from Haskell to JSON rather than two, and construct the
program in such a way that a roundtrip property between our conversion
functions is essentially guaranteed. In this talk, I will show how
this can be done for the example of Haskell and JSON and discuss in
how far this can be turned into a more general programming technique
that is applicable to a wide variety of situations (and programming
languages).

### Andres Löh

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
