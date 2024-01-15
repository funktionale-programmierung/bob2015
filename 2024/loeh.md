---
layout: talk
active: bob2024
title: Staging Programs in Haskell
speaker: Andres Löh
portrait: loeh.jpg
time: 11:45–13:15
type: Tutorial
language: english
head: 2024
---

Staging is a programming technique where some parts of your program
are annotated to be executed statically, at compilation time, while
all execution is still guaranteed to be type-correct. The main
advantage is that this gives the programmer much more fine-grained
control about performance than is usually the case, in that statically
known parts of the program can also be guaranteed to be executed
statically. This allows, for example, the creation of efficient
domain-specific languages, where (most) abstraction overhead can be
eliminated.

In this tutorial, we will discuss the implementation of Staging in the
context of Haskell (it is, in fact, available as a relatively little
known subset of Template Haskell called "Typed Template Haskell", even
though it still has some practical shortcomings). We will introduce
some common techniques that are useful when going from unstaged to
staged programs, and look at some simple domain-specific language
examples.

### [Andres Löh](https://andres-loeh.de)

Fediverse: [@kosmikus@functional.cafe](https://functional.cafe/@kosmikus)<br/>
Bluesky: [@kosmikus.bsky.social](https://bsky.app/profile/kosmikus.bsky.social)<br/>
Twitter: [@kosmikus](https://twitter.com/kosmikus)

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
programming, staging and metaprogramming, domain-specific languages,
(dependent) type systems, and proving programs correct.
