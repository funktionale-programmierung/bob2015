---
layout: talk
active: bob2025
title: "Programming with weak consistency, and dartagnan"
speaker: Roland Meyer, Thomas Haas
time: 17:00–18:30
type: Tutorial
language: english
head: 2025
portrait: meyer.jpg
portrait2: haas.png
---

Programming with weak consistency guarantees is both a necessity and a pain.
It is a necessity, because more and more platforms opt for weak consistency guarantees, with the Linux kernel being a prominent example, or even give the developer means to influence the consistency guarantees, as in the case of C atomics. 
It is a pain, because well-known idioms for synchronization and communication among threads break if the consistency guarantees are chosen too weak. 
As a consequence, the developer has to explicitly reason about the behavior of the program on the very platform.
We introduce dartagnan, an open-source tool that helps precisely with this task. 
dartagnan takes as input a program annotated with correctness assertions and a consistency model.
It then checks whether all consistent executions meet the assertions, and reports bugs otherwise. 
dartagnan has been instrumental in finding a bug in qspinlock, one of the major lock implementations of the Linux kernel, a development that ultimately lead to a new Linux kernel memory model.


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
