---
layout: talk
active: bob2025
title: "Functional data structures in Swift"
speaker: Manuel Chakravarty
time: 15:50–16:35
type: Vortrag
language: english
head: 2025
portrait: chakravarty.jpg
slides-file: chakravarty.pdf
---

One of the intriguing  features of Swift is its distinction between value types and reference types. Conceptually, value types are always copied in assignments and passed-by-value in function calls — i.e., they are semantically immutable. In contrast, for reference types, Swift only copies a pointer to an object on an assignment and they are being  passed-by-reference to functions. If such an object gets mutated, it changes for for all references. While most languages feature both value and reference types, Swift is unique in that (1) it makes it easy to define and use both flavours of types and (2) it supports fine-grained mutability control.

For large values, such as arrays, frequent copying carries a significant performance penalty. Hence, the Swift compiler goes to great length to avoid copying whenever it is safe. For large values, this effectively boils down to a copy-on-write strategy, where a large value is only copied when it actually is being mutated (on one code path). Swift facilitates for user-defined value types to also adopt this copy-on-write strategy.

In this talk, I will explain the semantic difference between value and reference types, and I will illustrate how this facilitates safe and robust coding practices in Swift. Moreover, I will explain how the copy-on-write strategy for large values works and how it interacts with Swift’s memory management system. Finally, I will demonstrate how you can define your own copy-on-write large value types.


### Manuel Chakravarty
Bluesky: [@tacticalgrace.bsky.social](https://bsky.app/profile/tacticalgrace.bsky.social) <br/>
X/Twitter: [@TacticalGrace](https://x.com/TacticalGrace)

Manuel M T Chakravarty is a researcher and software developer with interests in programming languages, cryptography, and programming environments. He developed the interactive development environment Haskell for Mac — one of the first Swift apps on the Mac App Store. He is now working on the successor of Haskell for Mac, which leverages SwiftUI for cross-platform development. His current research work lies at the intersection of programming languages and cryptography with applications to open blockchains. Recent contributions cover smart contract and native asset support for UTxO ledgers, such as Cardano, as well as multi-party state channels. He has also published extensively on programming languages, compilers, and high-performance computing. He contributed to both the design and implementation of the Haskell programming language (most notably, type families, associated types, and the foreign function interface) as well as several Haskell tools and open source libraries. He is currently a functional programming expert at Tweag and a researcher & architect of smart contract technology at IOG. Before that he was an Associate Professor at UNSW Sydney.
