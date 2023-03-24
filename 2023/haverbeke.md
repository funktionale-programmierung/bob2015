---
layout: talk
active: bob2023
title: State Transitions in Complex Systems
speaker: Marijn Haverbeke
portrait: haverbeke.jpg
time: 12:30–13:15
type: Vortrag
slides-file: haverbeke.pdf
language: english
head: 2023
---

In systems whose state consists of a non-trivial number of separate
but related pieces, updating this state in a way that keeps everything
coherent requires some discipline. In extensible systems, where the
different pieces may not even be aware of each other, this becomes
even more challenging.

A good example of such a system is a modular code editor. It involves
a number of constantly-changing pieces of state (the document,
selection, scroll position, and so on) and a lot of non-core state
intimately entangled with those (syntax highlighting, linting,
completion), and possibly with each other.

This presentation discusses the set of principles we arrived at in
designing such an editor ([CodeMirror](https://codemirror.net)), and
compares it to the more traditional event-style architectures. The
editor uses persistent state values and first-class transactions, both
of them extensible by 3rd-party code, to make it straightforward by
construction to keep the zoo of interdependent data involved in a
full-featured editor coherent.

### Marijn Haverbeke

[@marijnjh](http://www.twitter.com/marijnjh)

Marijn has misspent half a lifetime working on developer tools and
programming languages. He is responsible for encouraging the
preposterous concept of Web IDEs by publishing the CodeMirror editor
library, making aspiring programmer's brains melt through the Eloquent
JavaScript textbook, and speeding up the demise of C++ through his
contributions to the Rust compiler and language. He runs a one-person
open-source business from Berlin.
