---
layout: talk
active: bob2022
title: Local-first Distributed Applications with REScala
speaker: Ragnar Mogk
portrait: mogk.jpg
time: 17:10-17:55
type: Vortrag
language: english
head: 2022
---

Local-first software is a new term for interactive end-user
applications, which provide data ownership and privacy while still
enabling data to be shared, and which allow working offline while
ensuring data consistency. Developing such applications is often
perceived as hard, because of the use of unsuited general purpose
programming models. [REScala](https://www.rescala-lang.com/) is a
mature research project that addresses these issues and provides a
specialized programming model designed to be understandable by
developers while still providing the flexibility for efficient
implementations that automatically ensure all desired properties.

In this talk, we will show how a combination of functional reactive
programming (the mostly classical variant) and conflict-free
replicated data types (specifically join semilattices) provide
abstract reasoning about all points in space and time for local-first
applications. Specifically why reasoning in the abstract is actually
much easier for developers than reasoning about all the hundreds and
thousands of possible special cases their implementation admits.

We hope that this talk helps to spread such better suited programming
models, thus leading to most software being local-first by
default. Then, we may see a future where individuals own their data
and not have it stolen by advertisers, and companies keep their
sovereignty without being at the mercy of the biggest players.

### Ragnar Mogk

Ragnar Mogk has been the technical lead of the REScala project at the
Technical University of Darmstadt since working on his master thesis
in 2014. In his time as a PhD student, working on programming
languages for distributed and concurrent systems, he realized that his
private interest for personal data ownership aligns perfectly with
commercial interest of most companies (except for a couple of very
large ones). Given this insight, Ragnar completed his PhD in 2021 and
is now contributing to the academic and industrial communities that
are tackling these problems.
