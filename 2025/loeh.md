---
layout: talk
active: bob2025
title: "Abstraction and program design, or the power of parametricity"
speaker: Andres Löh
time: 10:15–11:00
type: Vortrag
language: english
head: 2025
portrait: loeh.jpg
slides-file: loeh.pdf
video: bob11-2025-abstraction-and-program-design-loeh
---

In this talk I want to revisit the parametricity theorem: from parametrically polymorphic types, i.e., types that contain type variables that can be arbitrarily instantiated, we can directly infer certain properties of the underlying functions, without ever having to look at their implementation.

A simple example in Haskell is the type `forall a. a -> a`, which (apart from looping or crashing functions) can only be inhabited by the identity function.

This may sound like a curiosity, but I will argue that it is in fact an invaluable tool in program design and day-to-day reasoning about programs, and explain how to build an intuition that allows you to do so without the need for deep or complicated theory. We will look at several interesting examples and hopefully make a few perhaps surprising discoveries along the way.

I will also try to explain how in the case of parametricity, making types more abstract can really help in making functions *easier* to understand, whereas it often feels like the opposite may be true. To this end, I will try to contrast abstraction in the context of parametricity with other kinds of type-level abstraction common in Haskell, in particular abstraction via type classes, and show how they are different.


### Andres Löh
Fediverse: [@kosmikus@functional.cafe](https://functional.cafe/@kosmikus)\
Bluesky: [@kosmikus.bsky.social](https://bsky.app/profile/kosmikus.bsky.social)\
X/Twitter: [@kosmikus](https://x.com/kosmikus)

Andres Löh is a Haskell consultant and co-owner of Well-Typed LLP. He is based in Regensburg, Germany. He started using Haskell in 1997, when being an undergraduate student of mathematics in Konstanz, and has been an enthusiastic functional programmer ever since. Andres obtained a PhD in Computer Science from Utrecht University in 2004, on extending the Haskell language with capabilities for datatype-generic programming. After having been a university lecturer for several years, he joined Well-Typed in 2010.

Andres is very interested in applying functional programming to real-world problems, and in particular in datatype-generic programming, staging and metaprogramming, domain-specific languages, (dependent) type systems, and proving programs correct.
