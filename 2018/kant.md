---
layout: talk
active: bob2018
title: "Formally Specifying Blockchain Protocols using the Psi Calculus"
speaker: Philipp Kant
type: Vortrag
language: english
head: 2018
time: 12:50-13:35
portrait: philipp-kant.jpg
slides-file: kant.pdf
youtube: dYTangDsias
---

Blockchains are distributed systems, with actors that adhere to agreed-upon
protocols. The protocols ensure that the systems performs as desired, even
when some of the actors behave dishonestly.

Since the integrity of such a system can protect hundreds of millions of
dollars, cryptographers spend great effort on designing the protocols, and
proving correctness guarantees under well-specified threat models. The
implementation of the actual systems running those protocols is then
performed by software engineers. These two activities require different
skillsets, as well as different levels of abstraction. Bridging this gap
while preserving the correctness guarantees is a non-trivial task.

At IOHK, we use the Psi calculus to translate the cryptographic
protocols described in research papers (main protocol
[here](https://eprint.iacr.org/2016/889.pdf), related papers
[here](https://iohk.io/research/library/)) into a formal language,
producing a machine-readable, executable specification. This has
multiple benefits:

- It creates a common language for the researchers and engineers.
- It forces the specification to be complete and unambiguous.
- It allows simulations, including performance simulations, of the systems
before they are fully implemented.

The leap that leads from the research paper to the implementation can then
be replaced by a larger number of small steps, each refining the
specification and adding more details and design decisions. It is then
feasible to show that the implementation matches the paper, by verifying
that each of these steps.

## Philipp Kant

During his postdoc years in theoretical particle physics, Philipp
developed a passion for Haskell, and finally made the switch to software
development in 2014. Early in 2017, he joined IOHK, a cryptocurrency
research and development company.

