---
layout: talk
active: bob2026
title: "Programming Efficient Joins"
speaker: Fritz Henglein
time: 15:00–15:45
type: Vortrag
language: english
head: 2026
portrait: henglein.webp
slides-file: henglein.pdf
video: bob11-2026-efficient-joins-henglein
edition: 2026
---

A relational join is a function that combines data from multiple sources and joins them by programmer-defined attributes they share.  They are everywhere data records are stored and processed, also outside database systems.  Common examples include joining customers and orders; connecting genes, mutations, and experiments; and combining songs, artists and plays.   Joins have a reputation of being tricky to program and difficult to implement efficiently.  For example, computing the set of triangles (x, y, z) where x likes y, y likes z and z likes x, cannot be implemented efficiently using techniques employed in standard SQL query engines such as binary hash joins and any form of query plan optimization.  

In this talk we show that joins are simple to program to be guaranteed worst-case optimal, even for cyclic queries like triangles.  They require only basic data structures and programming techniques: Nested dictionaries, iterating over the smallest set, and nested iteration.  We illustrate this by 20-line Python and Haskell programs for triangles, which can execute orders of magnitude faster than common SQL engines. We give a useful intuition underlying the method's worst-case optimality proof and provide additional techniques for rather straightforwardly coded optimizations.


### Fritz Henglein

I am Professor of Programming Languages and Systems at DIKU, the Department of Computer Science at the University of Copenhagen.  My current general interests are in compositional domain-specific languages for (targeted) expressiveness, security, optimization and high performance.  A common theme is exploring abstract linear algebra and its extensions for both modeling and efficiency.  (Having previously worked on type systems, type inference and type-based program analysis, this can be thought of as a progression from types to [vector] spaces.) Applications are in financial technology (financial contracts and instruments), machine learning (with symbolic representation of linear operator representing derivatives), algebraic generalizations of relational querying, quantum programming, and greenwashing-proof supply-chain modeling.

I have been involved in a number of deep tech start-ups over the years (including a university) and presently serve on a number of academic and company committees.
