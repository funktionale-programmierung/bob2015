---
layout: talk
active: bob2024
title: "SwiftUI: Declarative GUIs for Mobile and Desktop Applications"
speaker: Manuel Chakravarty
portrait: manuel-chakravarty.jpg
time: 
type: tutorial
language: english
head: 2024
---

Modern graphical user interfaces typically require a complex balancing
act of managing view state, during asynchronous user interactions,
while the model state of the application may change concurrently;
e.g., due to network activity. This necessitates a complex dance of
coordinating UI view updates and event handlers, while trying to
ensure that the view state always accurately reflects the
application’s model state and that no user input gets lost.

Declarative user interfaces promise to automate much of this
complexity by automatically and efficiently rendering the user
interface on the basis of the current model state, thus freeing the
programmer from manually tracking all dependencies leading to state
and view updates. SwiftUI is Apple’s contender at realising this dream
for complex mobile and desktop applications.

In this tutorial, I will show you how SwiftUI works and we will build
an application together. I will explain views, view modifiers,
bindings, observable models, previews, and more.

To participate in this tutorial, you will need a Mac as we will make
use of the Xcode IDE. However, you don’t need to know Swift. If you
are familiar with Kotlin or Scala, or even just modern Java with some
functional programming, I will explain the rest.



### [Manuel Chakravarty](https://JustTesting.org/)

Twitter: [@TacticalGrace](https://twitter.com/TacticalGrace)

Manuel M T Chakravarty is a researcher and software developer with
interests in programming languages, cryptography, and programming
environments. He developed the interactive development environment
Haskell for Mac — one of the first Swift apps on the Mac App Store. He
is now working on the successor of Haskell for Mac, which leverages
SwiftUI for cross-platform development. His current research work lies
at the intersection of programming languages and cryptography with
applications to open blockchains. Recent contributions cover smart
contract and native asset support for UTxO ledgers, such as Cardano,
as well as multi-party state channels. He has also published
extensively on programming languages, compilers, and high-performance
computing. He contributed to both the design and implementation of the
Haskell programming language (most notably, type families, associated
types, and the foreign function interface) as well as several Haskell
tools and open source libraries. He is currently a functional
programming expert at Tweag and a researcher & architect of smart
contract technology at IOG (formerly, IOHK). Before that he was an
Associate Professor at UNSW Sydney.
