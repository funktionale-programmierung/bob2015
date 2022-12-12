---
layout: talk
active: bob2023
title: Cloud, done the nix way
speaker: Julian Kirsten Arni
portrait: arni.jpg
time: 16:15-17:00
type: Vortrag
language: english
head: 2023
---

Historically, Haskell has been using monads to encode effects in
programs, and monad transformers to provide a modular way to combine
several such effects. More recently, algebraic effects have become
increasingly popular as a mechanism to replace monad
transformers. Often, discussions about the advantages and
disadvantages of the various approaches seem to focus on technical
details and not on the bigger question of how scalable effectful
applications should actually be designed. In this talk, I am hoping to
provide a brief introduction to both monad transformers and algebraic
effects and then explain how I believe that effectful programs should
be structured in such a way that the choice between these approaches
becomes mostly irrelevant.

### Julian Kirsten Arni

[@jk_arni](https://twitter.com/jk_arni)

Julian is a Haskell and Nix developer working at garnix.io, and
Artificial Labs. He was one of the original authors of the Servant web
framework. In previous lives, he was a philosopher, and Brazilian U16
chess champion.
