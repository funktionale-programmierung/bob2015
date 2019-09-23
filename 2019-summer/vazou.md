---
layout: talk
active: bob2019-summer
title: Liquidate your Assets
speaker: Niki Vazou
portrait: niki-vazou.jpg
type: Vortrag
language: english
head: 2019
youtube: yrA8kkXprHM
---

[Liquid Haskell](https://ucsd-progsys.github.io/liquidhaskell-blog/) is an extension of Haskell’s Type system that allows
annotating types with refinement predicates. It's great for ensuring
correctness of your code, but it can also be used to improve the
performance of your code.

If you track your resources then Liquid Haskell can be used to
statically bound the resources needed at runtime, thus statically
deciding how performent your code is. You are liquidating your assets.

To track resource we define a `Tick monad that ticks each time a
resource (ranging recursive calls to thunks) is used. Then we use
refinement types to statically approximate the number of ticks that
can occur at runtime. This reasoning aids runtime code optimization,
since it can be used to compare resource usage of two different
programs.

In this talk I will presen this technique through small examples
(sorting algorithms and mapping) and discuss the advantage and current
limitations on real world code adaptation.


## Niki Vazou

[@nikivazou](http://twitter.com/nikivazou)

Niki Vazou is an Assistant Professor at IMDEA. I started my computer
science education in NTUA, Athens, Greece. She received her Ph.D. from
UCSD, San Diego where she developed [Liquid
Haskell](https://ucsd-progsys.github.io/liquidhaskell-blog/), as
described in her Ph.D. thesis. After that, she spent some time as a
postdoctoral fellow at the University of Maryland.

Niki's research interests include refinement types, automated program
verification, and type systems and my goal is to make theorem proving
a useful part of mainstream programming. Liquid Haskell is an
SMT-based, refinement type checker for Haskell programs that has been
used for various applications ranging from fully automatic light
verification of Haskell code, e.g., bound checking, to sophisticated
theorem proving, e.g., non-interference.
