---
edition: 2025
layout: talk
active: bob2025
title: "Programming with weak consistency, and Dartagnan"
speaker: Roland Meyer, Thomas Haas
time: 17:00–18:30
type: Tutorial
language: english
head: 2025
portrait: meyer.jpg
portrait2: haas.png
---

Programming with weak consistency guarantees is both a necessity and a pain. It
is a necessity, because more and more platforms opt for weak consistency
guarantees or even give the developer means of influencing the consistency
guarantees. It is a pain, because well-known idioms for synchronization and
communication break if the consistency guarantees are chosen too weak.

Since its proposal in 2010, the programming language CAT has become the de-facto
standard for formulating consistency guarantees. The Linux kernel, the languages
C, C++, Java, and OCaml, the architectures of ARM, Intel, and IBM, as well as
NVIDIA and Vulkan all have their consistency guarantees formulated in CAT.

We introduce Dartagnan, a formal verification tool that helps the programmer
reason about the behavior of a given (C or SPIR-V) program relative to given
consistency guarantees (formulated in CAT). Dartagnan checks whether all
consistent executions meet all assertions in the code, reports bugs otherwise,
or terminates without a conclusion. Dartagnan is a bounded model checker that
unrolls the program into an acyclic form and translates it into logical
constraints that are solved with an SMT solver, like Microsoft's Z3 or Yices.

Dartagnan has been instrumental in finding a bug in qspinlock, one of the major
lock implementations of the Linux kernel, a development that ultimately lead to
new consistency guarantees for the Linux kernel.

We will introduce the basics of weak consistency, the CAT language, and
Dartagnan.

######  Preparations

For an active participation, we suggest to download Dartagnan up-front from
[https://github.com/hernanponcedeleon/Dat3M](https://github.com/hernanponcedeleon/Dat3M)
and follow the installation instructions given on that site.
 

### Roland Meyer

Roland is a Professor at TU Braunschweig and Head of the Institute of Theoretical Computer Science. He is interested in verification techniques for concurrent programs that can be used at industrial scale.

### Thomas Haas

Thomas Haas is the main developer of the memory-model-aware bounded model
checker Dartagnan.
He graduated in 2019 from TU Braunschweig with a Master's degree in Computer
Science. During his time as a student, he participated in the ERATO project in
Tokyo, working on the verification of probabilistic programs.
Since 2019, Thomas is a PhD student at TU Braunschweig where he specializes in
weak memory models and their verification.
