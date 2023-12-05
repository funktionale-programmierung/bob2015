---
layout: talk
active: bob2024
title: Property-testing all* the things in SerenityOS
speaker: Martin Janiczek
portrait: martin-janiczek.jpg
time:
type: Vortrag
language: english
head: 2024
---

\*: not all the things.

I'm a big proponent of property-based testing (as in, QuickCheck or
Hypothesis), be it in Elm, Haskell, Scala or JavaScript - it's great
at finding tricky edge cases, refining your understanding of your
system and giving you confidence it works for more cases than just
your happy path unit tests.

Imagine my horror when I saw that SerenityOS, my favorite "watch and
admire it from distance" open source project didn't have any support
for property-based testing! There were three options: don't test at
all, test with unit tests, or fuzz the binary as a black box.

I set out to write a property-based testing framework for SerenityOS,
complete with automatic shrinking and all, and to use it to write
property tests for apps and libraries all across SerenityOS.

In this talk I want to share that journey, the surprising
complications and how I overcame them, the tests I've written and
categories they fall into, and the bugs I've found.

### [Martin Janiczek](https://github.com/Janiczek)

Fediverse: [@janiczek@functional.cafe](https://functional.cafe/@janiczek)<br/>
Twitter: [@janiczek](https://twitter.com/janiczek)

Martin Janiczek is an Elm developer based in Czech Republic writing
complex UIs at Vendr. Into piano and bass, making pizza, programming
language design, property based tests, algebraic data types and
functional programming in general.