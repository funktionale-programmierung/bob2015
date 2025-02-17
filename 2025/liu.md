---
layout: talk
active: bob2025
title: "Developing DSLs: A Look at Three Practical Strategies with Real-World Examples"
speaker: Ziyang Liu
time: 13:00–13:45
type: Vortrag
language: english
head: 2025
portrait: liu.jpg
---

Domain-specific languages (DSLs) are languages specialized for a particular domain, and are typically equipped with features that make them well-suited for programming within that domain. This talk explores and compares three common strategies to creating DSLs:

- Standalone DSLs, which are entirely new languages.
- DSLs embedded in existing host languages.
- DSLs that are subsets of existing host languages, which may employ one of two techniques: metaprogramming and compiler plugins.

Each strategy comes with its own benefits and drawbacks, and the optimal choice will vary based on your unique needs. We'll give an in-depth comparison of these approaches with real-world examples, considering the viewpoints of both language developers and language users. An example domain is smart contract languages for the Cardano blockchain, where DSLs employing each of the three strategies can be found. We’ll also draw examples from fields such as flight control systems, signal processing and more.


### Ziyang Liu

I lead the Plutus team at Input Output Global, focused on developing smart contract languages for the Cardano blockchain and the accompanying compilers, interpreters, libraries, and costing tools. All of our work is open source and freely accessible at [github.com/IntersectMBO/plutus](https://github.com/IntersectMBO/plutus).