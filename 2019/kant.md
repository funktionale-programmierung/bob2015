---
layout: talk
active: bob2019
title: Designing Applications with Pluggable Layers Using Polymorphism
speaker:  Philipp Kant
portrait: philipp-kant.jpg
time: 14:15-15:00
type: Vortrag
language: english
head: 2019
youtube: hJvD62rPKuE
---

The flagship product of IOHK is *Cardano*, the Proof-of-Stake (PoS)
blockchain hosting the cryptocurrency *Ada*. Conceptually, the system
can be divided into a stack of layers: the networking layer that
distributes messages across the nodes, a cryptographic layer to handle
signatures, a ledger layer that keeps track of funds and transactions,
and in between, orchestrating everything, the consensus layer that
implements the PoS protocol and determines how the nodes agree on a
sequence of blocks.

All of those layers are the subject of ongoing research and
improvement, and we want to retain the ability to replace an
individual layer, with minimal changes required on the rest of the
system. In order to do that, we keep the consensus layer polymorphic
in the types of the other layers. Replacing a layer then amounts to
choosing another concrete instantiation.

We show how to use Haskell's type system to design such a polymorphic
consensus layer. Features we use for that are Type Classes, Type
Families, Phantom Types, and others.

### Philipp Kant

During his postdoc years in theoretical particle physics, Philipp
learned about functional programming, and in particular Haskell, and
was immediately fascinated. He left academia in 2014, switching to
software development. In 2017, he joined IOHK, a cryptocurrency
company, where he now works at the interface between research and
development.
