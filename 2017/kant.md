---
layout: talk
active: bob2017
title: "Performance and Safety: an Example of using Liquid Haskell in the Real World"
speaker: Philipp Kant
portrait: philipp-kant.jpg
time: 12:35-13:20
type: Vortrag
language: english
head: 2017
slides-file: kant.html
youtube: 8Y78eTaEkBU
---

No one should ever be forced to choose between performant and robust
software.  Yet sometimes, when we have to squeeze every bit of
performance from our code, we are tempted to leave abstractions behind
and go down to the level of bare pointer arithmetic.  Thus, we reduce
all overhead for the sake of improving speed, at the price of risking
segmentation faults and worse.

Using the example of the Store serialisation library, we show how to
get the best of both worlds, by using Liquid Haskell.  Liquid Haskell
is an extension of Haskell's Type system that allows annotating types
with refinement predicates.  For example, this allows us to encode, in
the type system, that some pointer points to a region in memory of a
certain size.  Thus, the absence of pointer overflows can be encoded
in the types of our functions, and be proven by Liquid Haskell.  This
is superior to performing bounds checks in several ways:

- There is no runtime overhead.
- Since the correctness is statically proven, we do not need to handle errors at runtime.
- Writing down the involved invariances in Liquid Haskell helps to get
  a precise understanding of our code and possible sources of errors.

The talk aims to be practical, showing in detail how to use Liquid
Haskell to prove the correctness of assumptions about your code.

### Philipp Kant

Philipp is a physicist and spent several years doing calculations in
theoretical particle physics. In 2014, he turned to software
development. He now works at FP Complete, where he is concerned with
implementing high performance, parallelised software for scientific
simulations.
