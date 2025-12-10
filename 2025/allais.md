---
edition: 2025
layout: talk
active: bob2025
title: "Correct by Construction Concurrent Programs in Idris 2"
speaker: Guillaume Allais
time: 13:00–13:45
type: Vortrag
language: english
head: 2025
portrait: allais.png
---

Concurrent programs destructively updating shared memory are
notoriously hard to get right. Concurrent separation logics
are logics with built-in notions of e.g. ownership of memory
regions, concurrent accesses, and lock mechanisms. They give
experts a way to verify a posteriori that complex concurrent
imperative programs hopefully abide by their formal
specification.

We will see how next generation languages let us get rid of
a posteriori verification in favour of a correct-by-construction
approach whereby the program is interactively built in a
specification-respecting dialogue with the compiler.
For this presentation we will be using [Idris 2](https://www.idris-lang.org/),
a general purpose functional language with an expressive
type system combining dependent types to enforce complex
invariants and linear logic to track resource usage.

We will demonstrate how a simple library can capture ideas
from concurrent separation logic by providing proof-carrying
concurrent primitives. These make it impossible to write into
memory one does not own or to release a lock without having
proven that its associated invariant has been re-established.
They also guarantee that whatever is read from the shared
memory is invariant-respecting.

This will culminate in worked out example e.g. the definition
of map-reduce primitives repeatedly and safely breaking down
a buffer into chunks that can be processed concurrently
and/or a naïve bank with concurrent cash machines.


### Guillaume Allais
Fediverse: [@gallais@mamot.fr](https://mamot.fr/@gallais)

Guillaume Allais is a lecturer in computer science building trustworthy systems, and developing the languages, programming patterns, libraries, and tools that make it easier to develop such systems in an interactive manner. 

He is a core contributor to various dependently typed languages and their standard libraries, and has written extensively about type-driven partial evaluation, generic programming, correct-by-construction programming, and the careful runtime-representation of invariant-rich data,
