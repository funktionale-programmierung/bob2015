---
layout: talk
active: bob2018
title: "A Tutorial on Liquid Haskell"
speaker: Andres Löh
portrait: andres-loeh.jpg
type: Tutorial
language: english
head: 2018
time: 14:30-16:00
---

Liquid Haskell is a preprocessor for GHC (the primary Haskell compiler) that
allows the programmer to equip a program with more sophisticated type
annotations. An automatic external theorem prover such as Z3 is then used to
prove the program type-correct with respect to these extra annotations.

The language of types supported by Liquid Haskell is based on refinement types,
and allows types to be restricted to certain values or properties of their
values. For example, we can define the type of integers between 0 and 10, or
the type of lists that have a particular length. We can establish pre- and
postconditions of functions using refinement types, potentially proving rather
sophisticated properties.

In this tutorial, I will introduce Liquid Haskell, explain how it works, and
what can (and cannot) be expected of it. We will look at a number of examples
and see how they can be equipped with more precise types than Haskell would
normally allow.

## Required knowledge

Familiarity with basic Haskell will be very helpful. But the Haskell code we
will look at in the tutorial will all be very straight-forward.

In particular, the tutorial does *not* expect any previous knowledge of:

- type system extensions of Haskell (such as GADTs or type families),
- refinement types or Liquid Haskell itself,
- theorem provers or proof assistants.

## Software requirements

It is *not* necessary to install Liquid Haskell in order to follow the
tutorial. Just bring your computer. There will be a website that you
can point your browser to that will allow you to work on the tutorial
exercises interactively.

That being said, you are of course welcome to also install a version
of Liquid Haskell locally on your machine.

If you want to reproduce my environment as closely as possible: I will
be using ghc-8.2.2 and liquidhaskell-0.8.2.3. Liquid Haskell needs a
theorem prover to function properly, preferably z3. I'm using
z3-4.6.0, but I don't think that the z3 version is particularly
critical.

## Andres Löh

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
