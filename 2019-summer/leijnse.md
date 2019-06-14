---
layout: talk
active: bob2019-summer
title: Purely functional distributed programming for collaborative applications
speaker: Adriaan Leijnse
type: Vortrag
language: english
head: 2019
---

Wouldn't it be wonderful if we could program distributed applications
without having to send messages around?

In this talk I'll introduce a purely functional programming model
which I'm calling relativistic functional reactive programming (RFRP)
which enables precisely that.

Where the original functional reactive programming model semantically
described programs as functions from time to output value, RFRP takes
locality into account by defining programs as functions of points in
spacetime to output value.

In this ongoing work I'm applying RFRP to eventually consistent distributed programs.

Therefore I'll first introduce the basics of eventual consistency by
defining useful RFRP primitives, then explain how composition of these
primitives can be used to precisely and succinctly describe the
semantics of replicated data types (which make programming eventually
consistent programs easier), and finally I'll show how RFRP can be
used to define complex collaborative applications without any
concurrency-related surprises.  Everything will be illustrated using
code samples in my prototype RFRP library written in Haskell.

## Adriaan Leijnse

I'm in love with finding ways to express correct programs as
succinctly and clearly as possible. I also dream of a future in which
people own their data and can collaborate without corporate
intermediaries. These two goals are being combined in my PhD studies
for which I'm developing a purely functional programming language for
peer-to-peer collaborative applications.

My PhD studies are at the Universidade NOVA de Lisboa supervised by
professors Carla Ferreira and Annette Bieniusa. My work is sponsored
by Protocol Labs Inc.
