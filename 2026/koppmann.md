---
layout: talk
active: bob2026
title: "Illegal States Are My Favorite Security Vulnerabilities (to Delete at Compile Time)"
speaker: Michael Koppmann
time: 15:00–16:30
type: Tutorial
language: english
head: 2026
portrait: koppmann.webp
---

Types in programming languages are meant to protect us, but how often do we still end up chasing silly bugs caused by a single misplaced value? A common culprit is the code smell “Primitive Obsession”: representing everything as integers, strings, and Booleans instead of meaningful domain types. It works until an order ID gets passed where a customer ID was expected, or missing access control is exploited, and nobody notices until it is too late.

Over the last decades, type systems have become surprisingly powerful. Nowadays, even mainstream languages let us encode business rules, workflows, and even security properties directly into types. That means the compiler can act as a very strict, very fast reviewer that never gets tired. It refuses to build your code if a workflow is incomplete, a state is impossible, or an access rule is violated. Entire classes of bugs simply can’t compile anymore. “Security by design” is the core idea behind this presentation.

In this tutorial, I will show concrete TypeScript examples of how we can model business workflows and constraints with types. Making illegal states unrepresentable, designing internal APIs that are harder to misuse, and capturing security invariants so they’re enforced automatically. The approach is not tied to a single language but is a practical design technique that can make your programming life easier.

### Prepraration

For the tutorial, we will use [this GitHub
repository](https://github.com/mkoppmann/Type-Driven-TypeScript-Development). It
contains instructions to get you prepared for the tutorial. We recommend
checking out the repository and installing all required software beforehand if
you plan on attending.

### Michael Koppmann
[Fediverse: @shibayashi@communicating.cypherpunk.observer](Fediverse: @shibayashi@communicating.cypherpunk.observer)

Michael Koppmann is a senior information security consultant at SBA Research. Michael’s consulting activities are focused on the technical aspects of information security. He frequently conducts penetration tests on a wide range of computer systems, including web, mobile, and cloud application security, source code audits, architecture reviews and more.

In addition to his hands-on consulting work, Michael spearheads the development of multiple in-house software tools, ensuring that they meet the highest security standards. Beyond coding, he is also an accomplished trainer and speaker, providing training sessions and lectures on secure application development, APIs, and microservices.

His research interests include green sustainable software, secure and maintainable software engineering, and online privacy.
