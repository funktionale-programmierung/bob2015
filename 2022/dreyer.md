---
layout: talk
active: bob2022
speaker: Derek Dreyer
type: Vortrag
language: english
head: 2022
portrait: derek-dreyer.jpg
---

The Rust systems programming language promises to overcome the
seemingly fundamental tradeoff in language design between high-level
safety guarantees and low-level control over resource
management. Unfortunately, none of Rust’s safety claims have been
formally proven, and there is good reason to question whether they
actually hold. Specifically, Rust employs a strong, ownership-based
type system, but then extends the expressive power of this core type
system through libraries that internally use unsafe features.

In this talk, I will present
[RustBelt](http://plv.mpi-sws.org/rustbelt), the first formal (and
machine-checked) safety proof for a language representing a realistic
subset of Rust. Our proof is extensible in the sense that, for each
new Rust library that uses unsafe features, we can say what
verification condition it must satisfy in order for it to be deemed a
safe extension to the language. 

We have carried out this verification for some of the most important
libraries that are used throughout the Rust ecosystem.  The secret
weapon that makes RustBelt possible is the [Iris
framework](http://iris-project.org) for higher-order concurrent
separation logic in [Coq](https://coq.inria.fr/).

The talk will not assume any prior familiarity with concurrent
separation logic or Rust.

## Derek Dreyer

Derek Dreyer is a professor of computer science at the Max Planck
Institute for Software Systems (MPI-SWS) in Saarbruecken, Germany, and
recipient of the 2017 ACM SIGPLAN Robin Milner Young Researcher Award.
His research explores connections between type systems for high-level
languages and separation logics for low-level systems programming.
Most recently, he and his collaborators have led the development of
RustBelt, the first formal foundation for the Rust programming
language, and Iris, a unifying framework for higher-order separation
logic implemented in Coq.  He also spends an inappropriate amount of
time researching Scotch whisky.
