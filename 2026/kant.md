---
layout: talk
active: bob2026
title: "Zero Knowledge Proof? That Sounds Useless!"
speaker: Philipp Kant
time: 15:50–16:35
type: Talk
language: english
head: 2026
portrait: kant.webp
---

To the contrary! Zero-knowledge proofs (ZKPs) let you prove that
something is true without revealing why it’s true. That may sound like
a magic trick, but it’s immensely practical: verifying that a
computation was done correctly without re-running it, proving you’re
over 18 without showing your ID or revealing your date of birth, or
even checking the integrity of an election without exposing any
ballots.

This talk introduces ZKPs for programmers who haven’t studied
cryptography. We’ll explore where they can be applied, and build an
intuitive, qualitative understanding of how they work. You’ll learn
the key mathematical ideas, like polynomial commitments and arithmetic
circuits, only to the depth needed to see why they matter, not to
prove the theorems behind them.

To round things off, we will look at ways of implementing
ZKPs. Luckily, the days where you needed to manually construct a
circuit representing your calculation are gone, and there are Domain
Specific Languages (DSLs) available that can do the heavy lifting for
you. To demonstrate how that works, we will look at a concrete example
of a ZKP written in the Noir language.

By the end, you’ll know what ZKPs are, why they’re useful, and how to
start experimenting with them yourself -- no crypto background
required.


### Philipp Kant

Philipp began his career in theoretical particle physics, where he
discovered a love for elegant abstractions—and eventually for
functional programming. After leaving academia, he switched to
software engineering and has worked in the blockchain space since
2017, contributing to the design and implementation of Cardano and
later Mina Protocol, which uses zero-knowledge proofs to keep the
chain succinct and avoid much of the redundancy that's ingrained into
most blockchain systems.

He is now a co-founder of Ensurable Systems, offering consulting and
engineering around blockchain and zero-knowledge technology. Philipp
enjoys making complex ideas approachable and showing that deep tech
can be explained without heavy math. When not thinking about proofs or
protocols, he enjoys reading to his kids, hiking, and the occasional
game of Magic: The Gathering.
