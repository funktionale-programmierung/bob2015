---
layout: talk
active: bob2019
title: Applicative DSLs
speaker: Franz Thoma
portrait: franz-thoma.jpg
time: 10:15-11:00
type: Vortrag
language: english
head: 2019
---

Monadic DSLs are ubiquitous in functional programming: Parser
combinators, build systems, test data generators (like QuickCheck's
Gen) are usually monadic, and »Free Monad + Interpreter« is a
well-known pattern for building DSLs. Monads allow a great deal of
flexibility for DSL embedding, and come with a rich interface of
generic combinators. In comparison, Applicatives seem quite restricted
at first glance. On the other hand however, Applicatives compose and
parallelize easily, and provide several additional benefits, as we
will see. Are these worth the restrictions?

In this talk, we are going to explore libraries like
[`optparse-applicative`](https://github.com/pcapriotti/optparse-applicative)
that use an applicative DSL for extra benefit, and show the design of
an applicative DSL by the example of an Applicative test data
generator library.

### Franz Thoma

Franz Thoma is originally a physicist and works as a consultant and
software engineer at TNG Technology Consulting in Munich. While
spending time there on domain specific languages and building
compilers, he discovered his love for functional languages and
expressive type systems. With Haskell, Franz found a robust and
elegant language to express himself, which he uses for his own
personal tooling as well as a thinking tool. At TNG, he currently
works on high-throughput ingestion of real-time data for a client's
Big Data platform.
