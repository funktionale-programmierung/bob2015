---
layout: talk
active: bob2018
title: Hedgehog - QuickCheck, but better
speaker: Matthias Fischmann
portrait: matthias-fischmann.png
type: Tutorial
language: english
head: 2018
time: 16:35-18:05
---

[hedgehog](https://hackage.haskell.org/package/hedgehog) is a Haskell
library for writing property-based tests similar to the more
established
[QuickCheck](https://hackage.haskell.org/package/QuickCheck): instead
of "when passed `[3, 1, 2]`, this function returns `[1, 2, 3]`", you
write "when passed a list of numbers, this function returns a list
with the same elements in order".  properties are tested on a range of
random values and provide far wider test coverage.

In this tutorial, you will get acquainted with the concepts of
property-based testing and the specific benefits of hedgehog, like
better error reporting and sound shrinking for free.  With a little
luck we'll get as far as state machine testing like in [the BOB
QuickCheck talk](andjelkovic.html).

Some experience with software development and writing tests would be
great.  Knowledge of QuickCheck is not required.  [Material and
exercises](https://github.com/fisx/bob18-tutorial-hedgehog) will be
provided soon.

### Matthias Fischmann

Matthias Fischmann has implemented his thesis at the Max Planck
Institute for Computer Science in Haskell in 1999 when it was 7 years
young, and has been a user and proponent of functional programming
ever since.  More recently he has developed an interest in software
testing methods.  He was the lead developer of the
[aula](https://github.com/liqd/aula) project.  Starting in March he
will be joining the [wire](https://wire.com) Haskell backend developer
team.
