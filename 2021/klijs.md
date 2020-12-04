---
layout: talk
active: bob2021
title: Event in, events out?
speaker: Gerard Klijs
portrait: gerard-klijs.jpg
time: 
type: Tutorial
language: english
head: 2021
---

Using event sourcing strategies can be a nice way to enable some
decoupling. However when interacting with external systems one should
watch out how much of the internal objects leak through to the api.

Event sourcing is an architecture that brings a couple of benefits
compared to crud applications. It becomes easier to model complex
domains. Also because events are the only way to change data, and the
events are always stored, there is a clear audit trail.

Using GraphQL for the api enables streaming which could be very nice
when working with events. But it also allows you to design specific
types, and even gracefully deprecate when needed.

We will work on example which is easy to setup with docker, and
continue to make modifications to the model to add new features.

### Gerard Klijs

[@GKlijs](http://twitter.com/GKlijs)

With roots in Java Web development the last years I've versified,
working on streaming systems, GraphQL, and also been busy with
Clojure, Rust and Kotlin. Some of those things ended up as open source
to be used by others.
