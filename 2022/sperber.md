---
layout: talk
active: bob2022
title: Event Sourcing without Responsibility
speaker: Michael Sperber
portrait: sperber.jpg
time: 10:15-11:00
type: Vortrag
language: english
head: 2022
---

This is a follow-up to
[Andreas Bernauer's talk from BOB 2016](https://bobkonf.de/2016/bernauer.html): 
The talk examines
the implementation of event-sourcing in a highly distributed
application for configuration management in a large network of car
shops among mobile devices that are only sporadically connected.

When building an event-sourced systems, it's a common reflex to
construct projections to answer queries instead of sifting through the
event stream, using the CQRS paradigm.  However, CQRS might not quite
be the best way to organize an event-sourced system: The concept of
"responbility" is foggy in many contexts, and the separation between
"read models" and "write models" is the wrong axis to use for
organizing storage and indexing.  Moreover, CQRS may lead to
implementing read models prematurely and unnecessarily.

We demonstrate how the implementation of event sourcing and CQRS
played out in our configuration-management application, and reflect
the implications for the architecture of future systems.

### Michael Sperber

[@sperbsen](https://twitter.com/sperbsen)

Michael Sperber is CEO of Active Group in Tübingen, Germany.  Mike
specializes in software architecture using functional programming.

