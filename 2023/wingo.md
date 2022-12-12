---
layout: talk
active: bob2023
title: "A world to win: WebAssembly for the rest of us"
speaker: Andy Wingo
portrait: wingo.jpg
time: 10:15-11:00
type: Vortrag
language: english
head: 2023
---

WebAssembly has been around for a while, but until now it has been of
limited utility for high-level languages, especially those that use
garbage collection.  Things are about to change, though, as web
browsers are about to ship support for managed memory, making
WebAssembly a viable target for Scheme, OCaml, and in general everyone
who is not C++ or Rust.  This talk will recap why it is that the 1.0
version of WebAssembly wasn't a great target for e.g. Scheme, what the
workarounds were, what the new facilities are, how implementations
will be able to take advantage of them, and what limitations remain.
In 2-3 years it's reasonable to expect that WebAssembly will be an
excellent compilation target and language run-time substrate for many
of our dearest languages, but it's up to us to make it there.

### Andy Wingo

[@andywingo](https://twitter.com/andywingo)

Andy is a virtual machine engineer with broad experience across the
technology stack, from adaptive optimization to standard libraries to
garbage collectors. Though he mostly works on JavaScript and
WebAssembly implementations (V8, SpiderMonkey, etc) these days, he has
a soft spot for Scheme, and continues to putter away on Guile when he
can find time.
