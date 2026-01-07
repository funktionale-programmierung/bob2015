---
layout: talk
active: bob2026
title: "SwiftUI is functional"
speaker: Manuel Chakravarty
time: 15:50–16:35
type: Talk
language: english
head: 2026
portrait: chakravarty.webp
---

Scaling modern user interfaces is hard. GUI libraries simplify getting complex interfaces on the screen, but keeping UI state in sync with application state is a challenge, exacerbated by asynchronous state changes (e.g., network activity). Avoiding callback hell, while keeping the application modular, avoiding UI glitches, and preventing data loss can quickly turn into a nightmare.

This led to a plethora of software architectures, starting with the model-view-controller (MVC) and the model-view-update (MVU) architecture, exhibiting an object-oriented and a functional approach, respectively, with complementary strengths. MVC facilitates modularity, but handling of state and view updates is complex. Conversely, MVU simplifies state handling, but suffers from a lack of modularity.

Modern approaches (e.g., React, Flux & reacl-c) work towards reconciling these opposites. In particular, SwiftUI is a declarative UI framework leveraging functional programming in Swift, including immutable data types and embedded domain-specific languages. It is focused on native apps and has been shown to scale from apps for smart watches to desktop applications, providing a declarative MVU approach while retaining excellent modularity.

I will explain SwiftUI’s software architecture together with its core components, including the observation framework, bindings, the view protocol, and the render tree. In this talk, I will focus on the underlying concepts and not on a particular implementation.


### Manuel Chakravarty
[Bluesky: @tacticalgrace.justtesting.org](https://bsky.app/profile/tacticalgrace.justtesting.org)
&
[Twitter: @TacticalGrace](https://twitter.com/tacticalgrace)

Manuel M T Chakravarty is a researcher and software developer with interests in programming languages, cryptography, and programming environments. He developed the interactive development environment Haskell for Mac — one of the first Swift apps on the Mac App Store. He is now working on the successor of Haskell for Mac, which leverages SwiftUI for cross-platform development. His current research work lies at the intersection of programming languages and cryptography with applications to open blockchains. He has also published extensively on programming languages, compilers, and high-performance computing. He contributed to both the design and implementation of the Haskell programming language (most notably, type families, associated types, and the foreign function interface) as well as several Haskell tools and open source libraries. He is currently a functional programming expert at Tweag and a researcher & architect of smart contract technology at IOG. Before that he was an Associate Professor at UNSW Sydney.
