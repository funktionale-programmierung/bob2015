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
---

This talk will present the upcoming release of Hasql, the Postgres
driver for Haskell, which is known for driving such significant
projects as Postgrest. Hasql is already the fastest driver in Haskell,
however the new version makes another leap in performance by
completely reimplementing the communication with the backend based on
the binary protocol instead of wrapping the "libpq" C library, which
is used by the majority of Postgres libraries for all languages. Now
Hasql has set the purpose to supersede "libpq" in performance
altogether. In this talk I'll give a detailed introduction into the
library, core ideas behind it and a tutorial on how to use it.


## Nikita Volkov

A Haskell expert and the author of multiple packages on Hackage,
including such notable projects, as "hasql", "stm-containers",
"record"
