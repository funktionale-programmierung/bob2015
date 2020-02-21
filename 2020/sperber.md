---
layout: talk
active: bob2020
title: Control Your Effects in Haskell
speaker: Michael Sperber
portrait: michael-sperber.jpg
time: 16:35-18:05
type: Tutorial
language: english
head: 2020
---

Functional programming is all about not using effects.  Particularly
in Haskell.  Well, it turns out we sometimes do want to program with
effects.  When that happens, we keep them under control.  With monads.
Right?  Unfortunately, monads compose quite poorly in Haskell, and
when they do, using them is often awkward.  The result is that much
Haskell code takes a dive into the IO monad when really it should not.
This tutorial is if you're still willing to fight this disturbing
trend.

Strangely enough, with monads in Haskell past their 25th anniversary,
this problem is only lately getting the attention it deserves.  As a
result, we have a handful of patterns and a quickly growing collection
of effects libraries.  Should you jump on one of those bandwagons or
plod on with trusty old monad transformers?  This tutorial will help
you out!

### Preparations

Check out [this Github repo](https://github.com/mikesperber/haskell-effects-tutorial) 
and
follow the instructions in the
[README](https://github.com/mikesperber/haskell-effects-tutorial).

## Mike Sperber

[@sperbsen](http://twitter.com/sperbsen)

Mike Sperber is CEO of Active Group, a software consultancy in
Tübingen, Germany that develops software for client projects using
functional programming.  He has a long history of publishing on
functional programming, including many research papers, and was the
project editor for the R6RS standard for the Scheme programming
language.  He has also developed an introductory course in programming
in use at several German universities, based on the PLT group's
Program by Design approach.  He also co-authored (with Nicole Rauch)
the curriculum on Functional Software Architecture for iSAQB.  Mike is
one of the founders of the
[`funktionale-programmierung.de`](https://funktionale-programmierung.de/)
blog, and one of the co-organizers of BOB.
