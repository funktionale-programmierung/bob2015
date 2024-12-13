---
layout: talk
active: bob2025
title: "A Language Server for your DSL for free"
speaker: Hannes Siebenhandl
time: 13:50–14:35
type: Talk
language: english
head: 2025
portrait: siebenhandl.jpg
---

Domain-specific languages (DSL) are well-studied tools for solving problems specific to a domain.
Especially in the Haskell Community, DSLs are quite popular due to parser-combinators and succinct definitions of abstract syntax trees (AST).
However, it is often difficult to integrate a particular DSL into any modern IDE.
This causes a DSL to be harder to use in practice and negatively affects productivity.
Sometimes, developers combat this by implementing plugins that introduce syntax highlighting specific to an editor.
However, we argue that it is preferable to use existing infrastructure, such as the Language Server Protocol, which provides out-of-the-box IDE support for most editors.

In this talk, we focus on key challenges for implementing a Language Server, as a Language Server simply has different requirements from a parser or an interpreter.
We discuss how to approach the design and implementation of a DSL such that we get Language Server support (almost) for free.
In particular, we show how to provide advanced IDE features, such as semantics-aware syntax highlighting or automatic refactorings, with minimal effort.
To implement this, we augment the AST to retain additional information about the sources, such as parentheses, comments, and whitespace, in a non-intrusive way.


### Hannes Siebenhandl

Hannes Siebenhandl is a Haskell consultant with a special interest in IDEs and build tools. He completed his master's degree at the Vienna University of Technology in 2024 on the topic of algebraic effect systems and joined Well-Typed LLP soon after.
In 2018, Hannes first discovered his passion for developer tools that boost the productivity of every-day programming, such as IDEs and build tools.
Since then, he has been involved with the development and maintenance of the Haskell Language Server and multiple IDE-adjacent projects.