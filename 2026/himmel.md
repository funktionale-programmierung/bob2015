---
topic: formal-methods
layout: talk
active: bob2026
title: "Proofs for programs, programs for proofs"
speaker: Julia Himmel
time: 15:00–15:45
type: Vortrag
language: english
head: 2026
portrait: himmel.webp
video: bob11-2026-proofs-for-programs-himmel
edition: 2026
---

Proofs about programs are great, but what happens if we let programs and proofs interact in both directions? Lean is both a programming language and an interactive theorem prover, and it provides ways of influencing the compiler using proofs. A simple example is proving that array accesses are in-bounds to guarantee that no bounds check is emitted by the compiler. Much more elaborate examples involving nontrivial properties of programs are possible, limited only by the ergonomics of the proving system.

Thanks to Lean being a competent interactive theorem prover, this is now quite practical, and we can reason about complex properties like balancing properties of binary search trees or UTF-8 decoding and encoding right as we implement them, and use proofs to make the implementations even better. In my presentation, I will walk through many examples in the Lean standard library where this interaction has enabled us to write code that is safe, fast and user-friendly all at once.


### Julia Himmel

Julia is a tech lead at the Lean Focused Research Organization, the non-profit behind the Lean theorem prover and programming language. She leads the standard library team, helping advance Lean as a tool for developing production-ready formally verified software.
