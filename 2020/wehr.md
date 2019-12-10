---
layout: talk
active: bob2020
title: Introduction to Idris
speaker: Stefan Wehr
portrait: stefan-wehr.jpg
time: 10:30-11:50
type: Tutorial
language: english
head: 2020
---

Idris is a strongly typed functional programming language with dependent
types. The language is inspired by Haskell with similar syntax and
language features. Idris supports algebraic data types, pattern matching,
control over side-effects, higher-order functions and type classes.

But Idris also supports dependent types, meaning that terms can be used
on the type-level. Thus, dependent types offer to possibility to use the
rich
term language to compute types, allowing programers to express many
invariants on the type-level that would otherwise being checked at runtime
(or not at all). A simple example of such an invariant is that an index
accessing a specific element of an array must be within the bounds of the
array. More complex properties are expressible as well, for example
that a search tree fulfills the search tree property or that an SQL query
is compatible with a certain database schema.

The tutorial does not assume prior knowledge of Haskell. It assumes,
however, good general programming skills and basic experience with
functional programming.

#### Takeaway bullet points

- Learn the power of dependent types.
- Learn the fundamental ideas of type-driven development.
- Learn how to use types as a guideline for designing APIs.

## Preparations

Please install the Idris compiler on your machine. The current version is
1.3.2. More information can be found on the Idris homepage:

[`https://www.idris-lang.org/`](https://www.idris-lang.org/)

It is beneficial to install an editor plugin for Idris. There are (at
least) plugins for [Atom](https://atom.io/packages/language-idris),
[Vim](https://github.com/idris-hackers/idris-vim) and
[Emacs](https://github.com/idris-hackers/idris-mode).

Please make sure your setup works before coming to the tutorial, otherwise
we won't have enough time discussing the features of Idris. Please contact
the instructor should you have problems with the installation or the
setup.

## Stefan Wehr

[@skogsbaer](http://twitter.com/skogsbaer)

Stefan Wehr entwirft und entwickelt bei der medilyse GmbH komplexe
Anwendungen und verteilte Systeme, meistens in der funktionalen
Programmiersprache Haskell. Davor hat er sich in seiner Promotion mit
der Integration von objekt-orientierten und funktionalen Sprachen
beschäftigt.
