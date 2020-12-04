---
layout: talk
active: bob2021
title: Haskell Bytes – A guided tour through the heap of a Haskell program
speaker: Joachim Breitner
portrait: joachim-breitner.jpg
type: Tutorial
language: english
head: 2020
---

In this tutorial we will go on a guided tour through the memory of a
running Haskell program and get to peek at the raw bytes of Haskell
values. We’ll see how uniformity allows for polymorphic functions and
data structures, where the garbage collector finds the information it
needs and learn to predict how large certain values tend to become, and
what’s so bad about String. We will also see laziness and sharing at
work, and reveal the mystery of how Haskell fits infinite data
structures into a finite amount of memory.

## Target audience:

Basic exposure to Haskell (or any other functional language) should be
enough.

## Setup

Precise details to follow, but probably not more than GHC and cabal in
a to be determined version, e.g. installed via ghcup, plus a text
editor of your choice.

### Joachim Breitner

Ever since Joachim Breitner got infected with the Haskell fever in
2005, he has been an active part of the community, with many
contributions to GHC, and lately, has been driving the GHC proposal
process. He obtained a PhD in Karlsruhe, Germany, for the inception
and formal verification of the Call Arity program transformation, has
worked as a post-doc with Stephanie Weirich at the University of
Pennsylvania to make formal verification of Haskell practical, and is
now riding the blockchain bandwagon and makes sure that DFINITY is
going to be a great platform from a programming languages point of
view.

