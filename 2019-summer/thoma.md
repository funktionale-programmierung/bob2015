---
layout: talk
active: bob2019-summer
title: Functional Design Patterns
speaker: Franz Thoma
portrait: franz-thoma.jpg
type: Vortrag
language: english
head: 2019
youtube: qPzwUXErcSE
slides-file: thoma.pdf
---

While design patterns seem to be an integral part of OOP, the term is
strangely absent from discussions on functional languages. Every now
and then, I see questions about design patterns in functional
programming get answers along the lines of »In Functional Programming,
we have much more powerful abstractions, we don't need design
patterns«. So is it true that FP does not need design patterns, or
have we just not looked hard enough to find and catalogize them?

Indeed, I will show in this talk that most of the familiar GoF
patterns are not applicable in functional languages, either because
they're just emulating functional language features (e.g. Visitor,
Strategy), or because they're a solution to a problem we do not have
in FP (e.g. Singleton). But I'm going to show that also in functional
languages, we sometimes have to find reusable solutions that cannot be
cast directly into a library, and are described as a design pattern
instead. We will have a look at some common and widely-used patterns,
like the Monad Transformer Stack, the Config Monoid, the Free Monad,
and others.

## Franz Thoma

Franz Thoma is originally a physicist and works as a consultant and
software engineer at TNG Technology Consulting in Munich. While
spending time there on domain specific languages and building
compilers, he discovered his love for functional languages and
expressive type systems. With Haskell, Franz found a robust and
elegant language to express himself, which he uses for his own
personal tooling as well as a thinking tool. At TNG, he currently
works on high-throughput ingestion of real-time data for a client's
Big Data platform.
