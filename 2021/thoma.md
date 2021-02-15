---
layout: talk
active: bob2021
title: Guarding your IO Boundaries
speaker: Franz Thoma
portrait: franz-thoma.jpg
time: 16:15–17:00
type: Vortrag
language: english
head: 2021
---

At the boundaries of our applications, a lot of bad things can
happen. Users supply all kinds of invalid or malicious input, other
services may or may not return what their documentation promises,
little Bobby Tables is sneaking around the corner. How do we cope?

In the world of strongly-typed functional languages, we've been used
for a long time to guarding our applications right at the boundaries:
Make sure that the data we're receiving looks like what we're
expecting right at the beginning, so that the inner parts of our
application can rely on those expectations. But in the
JavaScript/Node.js universe, this hasn't really caught on, and without
a strong type system, there wasn't much to gain either – until now!
With the rise of TypeScript, we now have all the tools of a strong
type system at hands, so why not use them?

In this talk, we're going to look at concepts for guarding IO
boundaries, use the example of the io-ts library to see what
TypeScript can (and did!) learn from Haskell.

### Franz Thoma

Franz Thoma is originally a physicist and works as a consultant and
software engineer at TNG Technology Consulting in Munich. While
spending time there on domain specific languages and building
compilers, he discovered his love for functional languages and
expressive type systems. With Haskell, Franz found a robust and
elegant language to express himself, which he uses for his own
personal tooling as well as a thinking tool. At TNG, he currently
works on high-throughput ingestion of real-time data for a client's
Big Data platform.


