---
layout: talk
active: bob2019
title: Wire Once, Rewire Twice
speaker:  Eric Torreborre
portrait: eric-torreborre.jpg
time: 15:05-15:50
type: Vortrag
language: english
head: 2019
---

At Symbiont, we use a "modules-as-records-of-functions" to structure
our services and share code. We need the ability to create components
which can easily be wired together but also changed at will for unit
or integration testing even if they are very far down in the
dependency tree.

This talk will show how we approached this problem, started solving it
with 2 simple type classes but then came up with a much more simple
way, relying on just one data structure!

Not only this makes reconfiguring applications a breeze but the same
technique can be applied to Hedgehog generators where you can define a
"compositional language" to modify existing generators for nested data
structures. You can now express things like "generate a model of shoe
with only the colour blue and 2 sizes

### Eric Torreborre

Software developer at Symbiont (Haskell). Author of the
[specs2](https://etorreborre.github.io/specs2/) testing library in
Scala.
