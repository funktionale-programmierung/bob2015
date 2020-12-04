---
layout: talk
active: bob2021
title: Comparing two type-level Haskell web service frameworks
speaker: Arian van Putten, Matthias Fischmann
portrait: arian-van-putten.jpg
portrait2: matthias-fischmann.png
time: 
type: Vortrag
language: english
head: 2021
---

Web developers write a lot of code that is not very interesting, and
still allows for making mistakes, like serialization functions,
swagger docs, API client handlers, mock services for testing, and
more.

We give an overview of two Haskell libraries that allow the user to
write less code and exclude more errors at compile time: mu and
servant. Servant has been around for years and is widely used in
production for implementing traditional rest APIs, but also for
serving HTML pages and really anything HTTP; mu is quite new and was
introduced for writing gRPC services, but as a framework both are
potentially solutions for the same set of problems.

In this talk, we will show code examples on how the Haskell type
system supports the developer in building services, and try to give a
sense which library you want to look into next for your own projects.

### Arian van Putten

[@ProgrammerDude](https://twitter.com/ProgrammerDude)

Arian van Putten is a passionate developer with a strong theoretical
background in type Haskell theory, functional programming and
compilers, but also a love for DevOps and Linux. He has studied at
Utrecht University and is now working for wire.com as a backend
engineer.

### Matthias Fischmann

17 years ago, while completing his diploma at the Max Planck institute
for Computer Science, Matthias Fischmann implemented his thesis in
Haskell and has never looked back from functional programming since.
His more recent projects in Haskell include an interactive platform
for schools and a platform for identity management.  He received his
doctorate from Berlin's Humboldt-Universität. These days, he works for
[Wire](https://wire.com/) as a software architect.
