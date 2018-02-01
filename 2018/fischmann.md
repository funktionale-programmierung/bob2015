---
layout: talk
active: bob2018
title: Hedgehog - QuickCheck, but better
speaker: Matthias Fischmann
portrait: matthias-fischmann.png
type: Tutorial
language: english
head: 2018
time: 12:00-13:30
---

Hedgehog is a Haskell library for writing property-based tests
similar to the more established QuickCheck: instead of "when passed
`[3, 1, 2]`, this function returns `[1, 2, 3]`", you write "when passed a
list of numbers, this function returns a list with the same elements
in order".  properties are tested on a range of random values and
provide far wider test coverage.

In this tutorial, you will get acquainted with the concepts of
property-based testing and write tests with Hedgehog for example code
snippets that I will provide.  With a little luck we'll get as far as
state machine testing demonstrated in [the BOB
QuickChectalk](andjelkovic.html), and you will learn a complementary
way to do it and deepen your understanding of the underlying concepts.

Some experience with software development and writing tests (not
necessarily property-based) would be great.  Material and exercises
will be on github.

### Matthias Fischmann

Matthias Fischmann has implemented his thesis at the Max Planck
Institute for Computer Science in Haskell 15 years ago, and has been a
user and proponent of functional programming ever since.  He works as
a software consultant for well-typed.com and is CEO at zerobuzz.net.
