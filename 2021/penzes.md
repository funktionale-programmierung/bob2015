---
layout: talk
active: bob2021
title: "Show case: STG backend for Idris2"
speaker: Andor Penzes
portrait: andor-penzes.jpg
time: 17:05–17:50
type: Vortrag
language: english
head: 2021
slides-file: penzes.pdf
---

In this talk I am going to show how to combine emerging technologies
of functional programming.  Idris is a dependently typed programming
language, which makes it as a sharp tool in the programmer's hand. A
very good fit to modeling complex domains with high accuracy. Idris
has a plugin architecture for the code generation, which allows
engineers to implement code generations for even exotic technologies.
My exotic backend is the code generator of the Glasgow Haskell
Compiler. How to implement such a thing?

The pieces of the puzzle are: a) External STG (ExtSTG), which is a
clone of the intermediate representation of the Glasgow Haskell
Compiler. b) An interpreter for ExtSTG which is formalized and written
in Haskell. c) GHC-WPC which is a modified GHC compiler that can
compile binaries from ExtSTG. d) The architecture of the Idris2
compiler back-end.

The main focus of the talk is how to write Idris2 back-end. The
take-away is how simple are the intermediate representation of the
compilers when they are formalized in functional programming, and a
recipe for your Idris2 backend.

### Andor Penzes

[@sverien](https://twitter.com/sverien)

Andor is a Software Developer and Functional Programming enthusiastic,
compiler developer hobbyist, interested in new programming
methodologies and software solutions.  Beside the virtual world, he
plays the handpan.
