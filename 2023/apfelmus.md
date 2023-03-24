---
layout: talk
active: bob2023
title: Delta encodings help separate business logic from database operations
speaker: Heinrich Apfelmus
portrait: apfelmus.png
time: 15:05-15:50
type: Vortrag
slides-file: apfelmus.pdf
language: english
head: 2023
---

In this talk, I describe <em>delta encodings</em> and how they helped me
refactor Haskell code in which business logic was mixed with database
operations.

In my case, the business logic is about managing funds in a blockchain
wallet. Each block of the chain is mapped to a delta of the wallet
state, which is then written to a database file. Before using delta
encodings, the business logic was entangled with IO, making it hard to
test and reason about.

In particular, I will describe

* <em>delta encodings</em>, which we define as data types that describe
   changes to other data types. Delta encodings allow us to separate
   the description of a change (business logic) from its execution
   (database operation). Multiple delta encodings may apply to the
   same data type.

* <em>DBVar</em>, which we define to be mutable variable that holds a
  Haskell value (business logic), but also ensures that the value is
  stored on disk (database operation). Delta encodings ensure that
  writing to disk remains performant.

The combination of these techniques is particularly useful in
situations where the database is predominantly written to, and where
its contents still fits into memory.

### Heinrich Apfelmus

Heinrich Apfelmus has been programming in Haskell for more than 15
years, and develops several open source libraries. He has studied
mathematics and completed a PhD in theoretical physics. As a student,
he has participated in international programming competitions.
