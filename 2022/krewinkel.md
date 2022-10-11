---
layout: talk
active: bob2022
title: Haskell ❤️ Lua
speaker: Albert Krewinkel
portrait: krewinkel.png
time: 15:05-15:50
type: Vortrag
language: english
head: 2022
slides-link: /2022/slides/krewinkel.html
video: bob2022-haskell-hearts-lua-krewinkel
---

## Come together over FFI 

Haskell and Lua share some similarities, like support for functional
programming, but are otherwise very different. Nonetheless, the two
complement each other in interesting ways. This is demonstrated by
pandoc, the universal document converter, which is written in Haskell
and uses Lua as extension language. Pandoc’s behavior can be modified
through Lua filters, custom readers, and custom writers, leveraging
the power of Haskell and flexibility of Lua.

While combining the two languages is made easy by the
[hslua](https://hslua.org/) package, the internals of that package are
not always straight-forward and a testament to the powers of Haskell’s
Foreign Function Interface. We will take a look at the encountered
impedance mismatch and how it was overcome, compare it to efforts in
adjacent languages like OCaml, and see how hslua can be used to expose
application internals to scripts effectively and conveniently.

### Albert Krewinkel

[@kraut0xa](https://twitter.com/kraut0xa)

Albert is a molecular biologist turned mathematician turned software
engineer. He is a passionate open source contributor with a special
interest in open science and publishing workflows. He serves as a core
developer for the universal document converter
[pandoc](https://pandoc.org/). After spending time in Lübeck, Hamburg,
and Menlo Park, Albert now lives in Berlin with his wife and kids.

