---
layout: talk
active: bob2018
title: "New Hasql - a native Haskell Postgres driver faster than C"
speaker: Nikita Volkov
type: Vortrag
language: english
head: 2018
time: 15:20-16:05
portrait: nikita-volkov.png
slides-link: slides/volkov.html
youtube: L8-iC4_E5n4
sketchnote: volkov.jpeg
---

In the recent years Haskell has matured into a great tool for
database-driven applications with lots of open-source projects offering
integration with all kinds of databases. There's a special amount of
competition happening in the area of integration with PostgreSQL, with
multiple projects offering different features.

Hasql is a project, which aims to squeeze the maximum performance, while
still offering a nice and mathematically correct layer of abstraction. It
is already known as the fastest driver in Haskell and powers the Postgrest
project, which has 10k stars on GitHub.

The upcoming version of Hasql makes another leap in performance by
completely reimplementing the communication with the backend. Now it
directly uses the binary protocol instead of wrapping the “libpq” C
library, which is used by the majority of Postgres libraries for all
languages. Now Hasql has set the purpose to supersede “libpq” in
performance altogether.

In this talk I’ll give a detailed introduction into the library, core ideas
behind it, its new features and will provide a tutorial on using it.

## Nikita Volkov

A Haskell expert and the author of multiple packages on Hackage,
including such notable projects, as "hasql", "stm-containers",
"record".  CTO at metrix.ai.
