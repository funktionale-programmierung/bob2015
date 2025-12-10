---
edition: 2025
layout: talk
active: bob2025
title: "Beyond the Basics of LSP: Advanced IDE services for OCaml"
speaker: Xavier Van de Woestyne
time: 11:05–11:50
type: Vortrag
language: english
head: 2025
portrait: woestyne.jpg
slides-file: woestyne.pdf
video: bob11-2025-beyond-the-basics-of-lsp-woestyne
---

[LSP](https://microsoft.github.io/language-server-protocol/) has greatly standardised the behaviour of IDEs, in a good direction: we can provide, _de-facto_, decent language support in editors supporting LSP. 
But it also imposes a standardisation that often assumes that all languages behave like TypeScript. In this presentation, I'll introduce you to [Merlin](https://github.com/ocaml/merlin), the IDE service library for OCaml, and cover the custom features (via _code-action_ and _custom-request_) that enhance the OCaml development experience (covering expression destructuring, expression construction, search by types (_à la hoogle_, directly in the IDE), type enclosures etc.).  

The aim of the presentation was to show how to go beyond the default features offered by LSP and offer a development experience adapted to a more expressive language.


### Xavier Van de Woestyne
[Github](https://github.com/xvw)\
X/Twitter: [@vdwxv](https://x.com/vdwxv)\
Fediverse: [@xvw@merveilles.town](https://merveilles.town/@xvw)

I am an OCaml Senior Software Engineer at [Tarides](https://tarides.com) working in the Editor team (on Merlin and OCaml LSP). I a m very interested in Functional Programming, type system and Languages tooling.
