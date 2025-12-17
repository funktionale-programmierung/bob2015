---
layout: talk
active: bob2026
title: "Going back in time with the Undoable Monad"
speaker: Paul-Elliot
time: 11:05–11:50
type: Talk
language: english
head: 2026
portrait: paul-elliot.webp
---

Slipshow is a presentation tool. One of its specificity is that it is
not based on slides, but on an infinite canvas on which you can zoom
or scroll. Yet, compared to Prezi, the source of a presentation is
text.

The way the author defines the dynamic of its presentation is by
intertwining actions in its textual content. Slipshow allows many
actions, such as revealing new content, scrolling or zooming, starting
an animation, or even starting a script defined by the user. This
gives the author freedom in how they want to present.

However, for Slipshow itself, this is a programming challenge: How to
allow to go back in your presentation's steps? How to organize the
code so that it's not restricting to adding new actions, and that it's
easy to maintain?

Originally written in JavaScript, Slipshow has suffered from bad
design in this space. However, since its rewrite in OCaml, the
opportunity to tackle this problem has been taken, with great success
and much more stability, using the Undoable Monad.

Monads are a way to embed a "computing" DSL in a programming
language. They allow to define a "variant" of computation (for
instance "concurrent programming") and let the user program in that
new way, almost transparently.

The Undoable Monad provides an excellent example of monad: it is
simple enough, yet solves a real problem in an elegant way. This talk
is a fun and practical introduction to monadic programming.

### Paul-Elliot

After some time deep in Mathematics, I've been at Tarides working on
the OCaml tooling. I'm now focusing on my personal project, Slipshow!
