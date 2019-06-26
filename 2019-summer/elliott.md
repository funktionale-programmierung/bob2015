---
layout: talk
active: bob2019-summer
title: Deriving Probabilistic Programming using Denotational Design
speaker: Conal Elliott
portrait: conal-elliott.jpg
type: Vortrag
language: english
head: 2019
---

It is fairly well-known that discrete probability distributions form a
monad, and so probabilistic programs can be written monadically. The
monadic operation definitions look quite unlike most other monads, and one
may wonder how they might emerge from familiar, generally useful
principles. This talk illustrates denotational design by deriving
probability distributions from the simpler and more familiar function
monad. Distribution operations are required to satisfy a standard set of
equations (as a “monad homomorphism”), the solution of which is a correct
implementation of probabilistic computation. As usual with denotational
design, the code then follows inevitably. The only creative decision is the
function/distribution relationship, which is simple (while pleasantly
non-computable) and intuitively compelling.

Continuous distributions have a very similar specification. Moreover,
probabilistic computation itself turns out to generalize much further while
retaining simplicity. Other specializations include general convolution and
efficient language recognition.

## Conal Elliott

[@conal](http://twitter.com/conal)

Conal Elliott is a Distinguished Scientist at Target.  Conal explores
elegant and principled techniques from math and programming language
theory for building fast, correct, and beautiful software, now with
applications including machine learning and other large-scale
optimization problems. Much of his current work is based on category
theory, particularly automatic translation of Haskell programs into
various categories for enhanced abilities such as automatic
differentiation and for massively parallel execution on GPUs or FPGAs.
Conal invented the paradigm now known as “functional reactive
programming” in the early 1990s, and then pioneered compilation
techniques for high-performance, high-level embedded domain-specific
languages, with applications including 2D and 3D computer graphics.
