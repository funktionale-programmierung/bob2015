---
layout: talk
active: bob2026
title: "Parallelism without panic: a user’s guide to multicore safety in OCaml"
speaker: Carine Morel
time: 13:00–14:30
type: Tutorial
language: english
head: 2026
portrait: morel.webp
---

OCaml has a reputation for keeping its promises: strong types, solid abstractions, and very few runtime surprises. Multicore parallelism changes the rules a bit: suddenly, we can encounter race conditions, the kind of bugs that only show up at 3 AM, disappear when you add a print statement, and return months later just to spite you. If we want to stay in OCaml’s comfort zone, we need good tools.

This talk takes a user’s tour through the current toolbox for multicore safety in OCaml. After a brief introduction to OCaml’s memory model, we explore the practical helpers available today, including a race detector (ThreadSanitizer), a model checker, and a property-based concurrency tester. These tools are similar, albeit less mature, to those found in other languages. However, we show that when combined, they already provide a surprisingly robust workflow for debugging multicore code without compromising your sanity.

Then we look at a more radical option: OxCaml, a promising but experimental mode-system extension inspired by Rust’s ownership model. The idea is simple: if you really dislike runtime bugs, or if you’re writing critical software, you shouldn’t just detect data races, you should make them statically impossible to write.

In brief, OCaml already provides the tools you need for everyday multicore safety, and OxCaml points toward an even more reassuring future for those who require the strongest guarantees.


### Carine Morel
[lyrm.bsky.social](lyrm.bsky.social)

I started out as a physicist, then got happily lost in functional programming with OCaml and resurfaced as a software engineer. When OCaml gained shared-memory parallelism, I discovered a new passion, and I’ve been diving deeper ever since.