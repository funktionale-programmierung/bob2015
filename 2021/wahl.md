---
layout: talk
active: bob2021
title: SIMD in higher level programming languages
speaker: Matthias Wahl
portrait: matthias-wahl.jpg
time: 14:15–15:00
type: Vortrag
language: english
head: 2021
slides-link: https://blog.m7w3.de/simd/
video: bob2021-simd-in-higher-level-programming-languages-wahl
---

Modern processors support Single Instruction Multiple Data techniques
since 1997 when intel introduced MMX. Every modern CPU has physical
registers for performing vectorized SIMD operations on up to 512 bits
with a single instruction. There is a part of the CPU which is most of
the time only used by compiler optimizations invisible and unbeknownst
to users or by low-level systems programmers comfortable with assembly
and processor architecture. Those magicians have gone through
unspeakable pain and know ancient dark magic from unreadable runes
chiseled into unreachable cave walls.

This is a sad state. Given our very CPUs could do so much more and be
up to 8x as efficient. We actively waste resources.

Having established that we need to do something about it, I will
explore what we can do to expose SIMD in higher level languages, what
steps are necessary to do something about it, and show you what is
being done about it in existing and emerging languages.

### Matthias Wahl

Tremor and Ponylang Core Team Member, Systems Engineer @ Wayfair,
mediocre programmer, embarassing dad.
