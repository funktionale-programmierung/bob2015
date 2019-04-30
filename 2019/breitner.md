---
layout: talk
active: bob2019
title: Inspection Testing
speaker: Joachim Breitner
portrait: joachim-breitner.jpg
time: 11:45-12:30
type: Vortrag
language: english
head: 2019
youtube: RBB9f5xN_c8
---

#### A Promise Checked is a Promise Kept

Some high-quality Haskell libraries, including old friends like
[`text`](https://github.com/haskell/text) and new kids on the block
like [`generic-lens`](https://github.com/kcsongor/generic-lens),
promise that the abstractions provided by these libraries are actually
free and will be completely dissolved by the compiler. In the case of
text the promise is that certain pipelines of text-processing
functions will be optimizes (“fused”) to never allocate a full text
value; generic-lens promises that its generically derived lenses are,
after optimization, identical to handwritten ones.

But, in practice, these promises often don’t hold. They held at some
point in the past, when the author checked them manually, but later
versions regressed.

This problem can be fixed with
[`inspection-testing`](https://github.com/nomeata/inspection-testing), a
Haskell library and plugin to the compiler that allows you to
explicitly state what you expect from the compilers optimizations, and
have the compiler check that it actually happens. This can be used by
library authors to test their promises, but also by users to learn
more about what the compiler does with their code.

In this talk, you will discover the tale of broken promises in
commonly used Haskell libraries, and you will learn how these promises
can be checked automatically using inspection-testing.

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

Also, talk to Joachim if you want to go swing dancing after the event.
