---
layout: talk
active: bob2016
title: An Introduction to Idris
speaker: Andres Löh
portrait: andres-loeh.jpg
time: 16:20-17:50
type: Tutorial
language: english
---

Idris is a strongly typed functional programming languages with dependent
types. It is inspired by Haskell, which means it has a similar syntax and many
of the same language features, such as algebraic data types, pattern matching,
higher-order functions, explicit side effects, and even type classes. However,
it also has so-called full-spectrum dependent types: The type language and
term language are the same, and types can be computed from terms. This grants
the programmer the power to express various complicated invariants on the type
level. This can be simple properties such as how long a list is, or the
dimensions of an image file. But we can also express more advanced properties
such as the fact that a list is sorted or a tree is balanced, or that a given
SQL query is compatible with a given schema.

Idris is a language that is actively developed and gaining popularity quickly.
In terms of libraries or maturity, it may not be at the level of Haskell or F#
yet, but it is certainly good enough for practical experiments and may well be
a glimpse of what the future of programming could be like.

The goal of this tutorial is to explain the basic concepts of Idris. No
prior experience with functional or dependently typed languages is required,
although general programming and software development experience is expected.

Please note that this tutorial will *not* just teach the differences between
Idris and Haskell, but rather teach Idris "from scratch". Due to lack of time,
we will not even try to cover all the features of Haskell, but focus on the
core concepts that also apply to other functional or dependently typed
languages, such as defining datatypes, functions, and programming with types.

#### Aspekte für den Alltag / Takeaway bullet points

This tutorial aims at explaining the fundamental concepts of functional
programming, and is therefore suitable for everyone who wants to know more
about functional programming, and even for people who maybe have experience
only in a dynamically typed or "less pure" functional programming language.

On top of that, the goal is to explain how types are a useful design pattern
for programming, and how the power of types goes beyond the mere
classification of bit patterns in computer memory. With dependent types more
than ever, types are not a hindrance on the way of getting your program
accepted by the compiler, but a helpful ingredient in guiding the programmer
toward a valid solution to a programming problem.

Even for languages that do not offer the full power of dependent types, this
kind of understanding of types can be useful in practice.

The tutorial may hopefully also help to learn that more powerful type systems
do not necessarily need to be more complicated. For example, participants who
have some familiarity with Haskell might realize that programming in Idris is
far more elegant and straight-forward than using the myriad of type system
extensions that GHC provides.

#### Requirements / preparations for the tutorial

You will need the Idris compiler itself (which includes a set
of standard libraries that will be sufficient for the purposes
of the tutorial), and an editor suitable for use with Idris.

We will use version [0.10][Release] of Idris, which is the current version
at the time of writing these instructions. Idris is in active
development, and it is possible that a new version will be released
prior to BOB, but I will use version 0.10 at the tutorial
anyway. If you use a different version, expect subtle differences.

Installation instructions for
various platforms as well as binary packages are available from
the [download page][download]. Successful installation should
give you a binary called `idris` that you can invoke to get into
the REPL.

It is important to have an editor with actual support for Idris.
Idris supports various language-specific interactive editing
features which are extremely helpful during program development.

As a suitable editor, I recommend to use [Atom][Atom]. Activating Idris
support in Atom should be as easy as installing the
[`language-idris`][language-idris]
package via the `Preferences / Packages` menu, and making sure
that the `idris` command is in your search path.

Idris editing support is also available for Emacs and Vim. So if
you prefer one of these editors over Atom, feel free to use them,
and check the information near the bottom of
the [download page][download] on how to install the Idris support
for these.

[Release]: http://www.idris-lang.org/idris-0-10-released/
[Atom]: https://atom.io
[language-idris]: https://atom.io/packages/language-idris
[download]: http://www.idris-lang.org/download

### Andres Löh

Andres Löh is a Haskell consultant and co-owner of Well-Typed LLP. He is based
in Regensburg, Germany. He started using Haskell in 1997, when being an
undergraduate student of mathematics in Konstanz, and has been an enthusiastic
functional programmer ever since. Andres obtained a PhD in Computer Science
from Utrecht University in 2004, on extending the Haskell language with
capabilities for datatype-generic programming. After having been a university
lecturer for several years, he joined Well-Typed in 2010. 
 
Andres is very interested in applying functional programming to real-world
problems, and in particular in datatype-generic programming, domain-specific
languages, (dependent) type systems, parallel and concurrent programming, and
the theory of version control. 
