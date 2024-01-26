---
layout: talk
active: bob2024
title: "The K Framework: A tool kit for language semantics and verification"
speaker: Jost Berthold
speaker2: Georgy Lukyanov
portrait: jost-berthold.jpg
portrait2: georgy-lukyanov.jpg
time: 16:20–17:55
type: Tutorial
language: english
head: 2024
---

The [K Framework](https://kframework.org/) provides a set of tools for
developing programming languages and formal analysis tools. By writing
a single description of your language’s syntax and operational
semantics, you can use K to automatically extract different components
and tools for your language, such as a parser, an efficient
interpreter, and a symbolic execution engine to prove program
properties.

K implementations have been built for several general-purpose
programming languages (C, Rust, Java, Python) and many blockchain
contract languages (most prominently, EVM). K's predominant
application area today is blockchain contracts. However, the
K-Framework and its foundations in [Matching
Logic](https://matching-logic.org) can easily model semantics of other
programming languages and arbitrary state transition systems in
various domains.

This tutorial is aimed at anyone who is interested in programming
language implementation or program verification. We will build a
simple programming language by defining its syntax and operational
semantics of the language in K. With the language definition in hand,
we will take advantage of K’s support for deductive verification to
write some simple proofs over programs. By the end of this session,
the attendees should be able to implement and verify their next
research DSL or language of interest using K.


### Jost Berthold ###

Jost Berthold is a software engineer in the Haskell backend team at
Runtime Verification Inc., the maintainers of the K framework. He
holds a Ph.D from Philipps-Universitat Marburg, Germany for research
on parallel programming with functional languages. Following his Ph.D
he held academic positions at the University of St. Andrews and the
University of Copenhagen - DIKU, researching parallel functional
programming and DSLs for mathematical finance.

In 2015, Jost became a software engineer in Sydney. Before joining
Runtime Verification, he worked on a contract language for distributed
ledger technology, as well as a big data analytics platform for a
major Australian bank. He believes in the superiority of
strongly-typed functional programming.

### Georgy Lukyanov ###

Georgy is a software engineer with expertise in formal software
verification and typed function programming.

Currently, Georgy works at Runtime Verification Inc, where he develops
and applies the K Framework to formal verification of smart contracts
on the Ethereum and Algorand blockchains.

Before joining RV, Georgy was a PhD student at Newcastle University,
UK, working on formal verification of instruction-set level programs.