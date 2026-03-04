---
layout: talk
active: bob2026
title: "Parallelism without panic: a user’s guide to multicore safety in OCaml"
speaker: Carine Morel, Sudha Parimala
time: 13:00–14:30
type: Tutorial
language: english
head: 2026
portrait: morel.webp
portrait2: parimala.jpg
---

OCaml has a reputation for keeping its promises: strong types, solid
abstractions, and very few runtime surprises. Multicore parallelism changes
the rules a bit: suddenly, we can encounter race conditions, the kind of
bugs that only show up at 3 AM, disappear when you add a print statement,
and return months later just to spite you. If we want to stay in OCaml’s
comfort zone, we need good tools.

In this tutorial, participants start from a buggy lock-free queue and work
their way toward a correct implementation using the tools available today
for multicore safety in OCaml: a race detector (ThreadSanitizer),
property-based concurrency testing (QCheck-Lin), and a model checker
(dscheck). Step by step, they will discover why standard testing falls
short for concurrent code, learn to apply each tool to find specific
classes of bugs, and fix them until the queue is fully correct. These tools
are similar, albeit less mature, to those found in other languages, but
when combined, they already provide a surprisingly robust workflow for
writing reliable multicore code.

At the end of the tutorial, we will also have a look at a more radical
option: OxCaml, a promising but experimental mode-system extension inspired
by Rust’s ownership model. The idea is simple: if you really dislike
runtime bugs, or if you’re writing critical software, you shouldn’t just
detect data races, you should make them statically impossible to write.

In brief, OCaml already provides the tools you need for everyday multicore
safety, and OxCaml points toward an even more reassuring future for those
who require the strongest guarantees.

### Preparation

This tutorial includes hands-on exercises that require a working OCaml
environment. Please follow the setup instructions available in the
repository before the tutorial, as some options can take up to some times
to complete: [lyrm/bobkonf2026#setup](https://github.com/lyrm/bobkonf2026#setup)

The fastest option is GitHub Codespaces, which runs entirely in your
browser and takes only a few minutes. A local devcontainer setup and a
manual local setup are also available.

### Carine Morel
[lyrm.bsky.social](lyrm.bsky.social)

I started out as a physicist, then got happily lost in functional
programming with OCaml and resurfaced as a software engineer. When
OCaml gained shared-memory parallelism, I discovered a new passion,
and I’ve been diving deeper ever since.

### Sudha Parimala

Sudha has been programming with OCaml for 6+ years. These days she’s mostly
into build tooling, and multicore OCaml. She’s based in the Netherlands
these days. Outside of programming, she likes reading, making art, and
visiting museums.

