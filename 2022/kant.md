---
layout: talk
active: bob2022
title: "io-sim: testing, simulating, and prototyping concurrent programs in Haskell"
speaker: Philipp Kant
portrait: kant.jpg
time: 
type: Vortrag
language: english
head: 2022
---


We present applications of the Haskell library
[io-sim](https://github.com/input-output-hk/ouroboros-network/tree/master/io-sim). This
library provides [type
classes](https://github.com/input-output-hk/ouroboros-network/tree/master/io-classes)
with concurrency primitives that can either be run in IO, or executed
in simulation. The library has been developed to help with
QuichQueck-style property based testing of concurrent code, where the
determinism of the simulations is helpful to get minimal failing test
cases. Subsequently, it has also turned out to be quite useful for
prototyping distributed systems, getting performance estimates and
prediction points of congestion before starting a full implementation.

### Philipp Kant 

[@philipp_kant](http://www.twitter.com/philipp_kant)

During his postdoc years in theoretical particle physics, Philipp
learned about functional programming, and in particular Haskell, and
was immediately fascinated. He left academia in 2014, switching to
software development. In 2017, he joined IOHK, a cryptocurrency
company, where he now works at the interface between research and
development.
