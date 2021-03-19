---
layout: talk
active: bob2021
title: Higher-Kinded Data Types By Example
speaker: Chris Penner
portrait: chris-penner.jpg
time: 14:15–15:00
type: Vortrag
language: english
head: 2021
slides-file: penner.pdf
youtube: sIqZEmnFer8
---

#### Strongly-typed highly adaptable records 

My example-driven talk will introduce and explore "Higher Kinded
Datatypes" (HKDs), a novel approach to parameterizing data types which
allows greater flexibility, re-use, and improved type-safety when
performing common tasks on data.

While many data types are parameterized over the _values_ in the type;
HKDs are generalized over a container type which wraps each field.

This approach also allows us to "zip" record fields in a type-safe
way, allowing us to append structured error messages to parsers among
many other things.  It is a surprisingly versatile technique, which
hasn't yet received the attention it deserves.

The talk may also cover practical developments in this area such as
the [barbies](https://hackage.haskell.org/package/barbies) HKD
combinator library and the derivable "Generics" representation of this
idea a'la `higgledy`, both of which make writing practical everyday
code using HKDs much easier.

### Chris Penner

[@chrislpenner](http://www.twitter.com/chrislpenner)

Developer, teacher, aspiring opsimath, if Cunningham's law was a
person. Author of [Optics By Example](https://leanpub.com/optics-by-example).
