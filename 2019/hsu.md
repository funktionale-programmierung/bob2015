---
layout: talk
active: bob2019
title: The Way of APL
speaker:  Aaron W. Hsu
time: 14:15-15:00
type: Vortrag
language: english
head: 2019
---

#### Understanding the Array Programming Paradigm

While early Von Neumann style programming gave way to Structured
Imperative Programming, which in turn evolved into Functional and OOP
programming paradigms that are currently very popular, another
programming paradigm was maturing and developing: the array
programming paradigm. This deeply misunderstood programming model
receives equal parts derision and wonder, while remaining largely
under-appreciated and under-utilized, despite numerous success stories
as well as research and evidence to back up its sometimes miraculous
claims. Modern computer designs and our need for better methods for
dealing with the needs of rigor, correctness, performance, and scale
warrants a deeper look into the subtleties that are embedded in the
quintessential array programming language, APL.

### Aaron W. Hsu

I'm a passionate computing artist with over a decade of experience in
Scheme before I began to explore the wider application of array
languages to HCI/d, parallel programming, human/computer performance,
and human to human communication. My main project these days is the
Co-dfns compiler, which is a high-performance, parallel APL compiler
that is itself implemented in Co-dfns using a purely data-parallel
compiler construction technique that avoids branching, recursion, or
explicit control structures such as looping. Instead, the entire
compiler is a data-flow program constructed through array programming
and function composition in the simplest manner imaginable.
