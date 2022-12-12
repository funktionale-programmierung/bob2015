---
layout: talk
active: bob2023
title: Getting recursive definitions off their bottoms
speaker: Joachim Breitner
portrait: breitner.png
time: 14:15-15:00
type: Vortrag
language: english
head: 2023
---

Haskell claims to be a declarative language,
where you just write down some equations, and suddenly the variables
contain the solution to these equations. This works even with
recursive equations, but only in some cases: defining recursive
functions, of course, but also cyclic data structures. One can even
apply so-called knot-tying tricks, where a lazy data structure is
filled with values that refer to that data structure! For example, one
can very elegantly calculate the reachable nodes in a graph.

…until the graph is cyclic, and suddenly our nice elegant Haskell
program silently runs in circles and will not produce an answer.

This is unfortunate: The involved equations, although recursive, do
nicely declaratively describe the solution we want! So let’s make it
happen!

We’ll see types (Booleans, Sets) that seem to behave just like the
normal ones, but recursive definitions somehow magically produce the
expected result. And all that in pure code, no monads anywhere! We’ll
see a few use cases that can suddenly be solved much more elegantly.

Then we’ll look under the hood of this (arguably) safe API, won’t be
deterred by unsafePerformIO, and find some very imperative,
monad-infested, concurrency-worried code that implements a form of
“propagator”. We’ll notice that there is plenty we can do to improve
their performance, but won’t actually go there. Instead, we’ll turn
back to the “pure” interface and discuss together if that is still
really “pure”.

### [Joachim Breitner](https://joachim-breitner.de/)

[@nomeata](http://www.twitter.com/nomeata)

Joachim Breitner has been an active member of the Haskell community
ever since he first started using xmonad in 2005 or so. He has
contributed to GHC, and currently serves on the GHC Steering
Committee. He likes to give talks at conferences and workshops, and is
known to find fellow Swing or Tango dancers to go dancing afterwards,
especially in cities like Berlin, so if you dance, let him know.