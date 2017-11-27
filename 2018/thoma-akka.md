---
layout: talk
active: bob2018
title: "Reactive Streaming with Akka Streams"
speaker: Franz Thoma
type: Vortrag
language: english
head: 2018
time: 10:30-11:15
portrait: franz-thoma.jpg
---

A lot of data processing can be decomposed into sequential stages of iterating
and aggregating. The usual pattern is to retrieve data, apply some function to
it, and store the result away for the next processing stage. In practice, this
is usually complicated by the need to handle errors, to execute parts
asynchronously or in parallel, to merge data streams, and to wait for blocking
I/O. As the amount of data increases, resilience against congestion, overflow
and concurrency problems becomes more and more important, and at the same time
harder to manage.

**Akka-Streams** offers a powerful framework for asynchronous pipeline
processing with memory-safety through backpressure. Data flow is modelled as a
graph of Source, Sink and Flow elements that compose in a type-safe way. This
approach hides all the details of rate limiting, buffering, pipelining, and
asynchronicity, while retaining their explicit semantics. And it profits from
the large ecosystem that already exists around the Akka framework!

## Franz Thoma

Franz Thoma is originally a physicist and works as a consultant and software
engineer at TNG Technology Consulting in Munich. While spending time there on
domain specific languages and building compilers, he discovered his love for
functional languages and expressive type systems. With Haskell, Franz found a
robust and elegant language to express himself, which he uses for his own
personal tooling as well as a thinking tool. At TNG, he currently works on
high-throughput ingestion of real-time data for a client's Big Data platform.
