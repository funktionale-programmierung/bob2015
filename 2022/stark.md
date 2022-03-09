---
layout: talk
active: bob2022
title: Introduction to Verification with the Coq Proof Assistant
speaker: Kathrin Stark
portrait: stark.jpg
time: 
type: Tutorial
language: english
head: 2022
---

Despite our best efforts, even well-typed functional programs still
contain bugs that might or might not be uncovered by the
tests. Wouldn't it be nice if we could prove the correctness from
mathematical foundations instead?  Interactive proof assistants such
as [Coq](https://coq.inria.fr/about-coq) allow you to write a
correctness specification in mathematical logic, implement the program
in a statically-typed functional language and argue for the
correctness as part of the implementation.

This tutorial shows how to start using one specific proof assistant,
the Coq proof assistant, by leading through a row of examples over
inductive data structures. Programs are written in an OCaml-like
language, while proofs are constructed using so-called tactics that
allow developing indisputable proofs in an interplay between humans
and computers.

Basic familiarity with writing programs in (any) functional language
helps follow this tutorial. No further knowledge is required.

## Tutorial preparation

Before the tutorial, please have an IDE for Coq available. There are
two recommended possibilities:

- You can install the Coq proof assistant together with CoqIDE. See
  [here](https://coq.inria.fr/download) for complete download
  instructions. See
  [here](https://github.com/coq/platform/releases/tag/2022.01.0) for
  binary installers for Coq 8.14.1 for macOS/Windows and
  [here](https://snapcraft.io/coq-prover) for Linux. For simplicity,
  we use the CoqIDE, but interfaces for EMacs and Visual Studio Code
  are available.

- You can run Coq in your browser via the [jsCOQ
  plugin](https://k-stark.de/BobKONFjsCOQ).

### [Kathrin Stark](http://www.k-stark.de)

[@KathrinStarkCS](https://twitter.com/KathrinStarkCS)

Kathrin Stark recently started as an assistant professor in computer
science at Heriot-Watt University in Edinburgh. She started using
proof assistants after attending a lecture ten years ago and has been
a user of the Coq proof assistant ever since. In her research, she
works on minimising the overhead in using proof assistants and on
turning them into a practical software verification tool.




