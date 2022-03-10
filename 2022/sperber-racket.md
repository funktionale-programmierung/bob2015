---
layout: talk
active: bob2022
title: Implementing Domain-Specific Langugages with Racket
speaker: Michael Sperber
portrait: sperber.jpg
time: 16:20-17:55
type: Tutorial
language: english
head: 2022
---

One of the most powerful abstraction facilities in any programming
languages has been effectively confined to Scheme and its descendant
Racket: *hygienic macros*.  The "hygienic" means that Racket macros
respect the scoping rules of the language, and thus does not require
the programmer to garnish macro expanders with manual name generation,
a process both tedious and error-prone.

As a result, the Racket macro system is a pleasure to use, and enables
the implementation of syntactic facilities beyond the practical reach
of traditional Lisps such a Clojure, and beyond the imagination of
lesser languages.  What dials up the DSL capabilities up to 11 however
is the availability of control operators in Racket.

The tutorial gives a short hands-on introduction to both.  Prior
Racket experience is not required.

## Preparation

Download and install [Racket](https://racket-lang.org/) from
[here](https://download.racket-lang.org/).

### Michael Sperber

[@sperbsen](https://twitter.com/sperbsen)

Michael Sperber is CEO of Active Group in Tübingen, Germany.  Mike
specializes in software architecture using functional programming.
