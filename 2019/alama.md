---
layout: talk
active: bob2019
title: Introduction to Web Development in Racket 
speaker: Jesse Alama
portrait: jesse-alama.jpg
time: 10:05-11:35
type: Tutorial
language: english
head: 2019
---

Racket is a Lisp that strives not only to be a best-in-breed
environment for language-oriented programming; it's also a great
language for doing systems programming. In particular, Racket comes
out-of-the-box with an HTTP server and a potpourri of libraries and
DSLs for web development. For some time now, pretty much every
language has had such feature, so what makes Racket different and
worth consideration? A killer feature that distinguishes Racket from
other frameworks and languages it is support for continuations and
their clever use to make a full-fledged language for web programming,
which help make REST and allied concepts such as HATEOAS
automatic. The aim of this tutorial is to give the audience an
impression of what web programming in Racket looks like by building a
little HTTP API. A Racket package will be made available with which
you can hack along with the teacher as we proceed through the
tutorial.


### Jesse Alama

I'm a fullstack developer at Vicampo.de GmbH, an online wine retailer
based in Mainz, Germany. But my heart is in the Lisp world, primarily
Racket. In my private life, I hack the web with Racket and have
authored a moderately successful book on the subject, [Server:
Racket](https://serverracket.com), and am working on an upcoming
[course on introductory web programming using Racket](https://racketwebcourse.com).

### Prerequisites

Participants will need a text editor of their choice, as well as
Racket on their machines. It can be downloaded at

[`https://download.racket-lang.org`](https://download.racket-lang.org)

Alternatively, Racket is likely to be available using various package
manages for many OSs and distributions (Homebrew for macOS, all sorts
of Linux distributions, *BSD, etc.). After installing, this command
line command


    $ racket --version

should work, as well as

    $ raco

<!--
Given that Racket and its command line tool (the aforementioned raco)
are installed, they will additionally need to install a Racket package
that I'm currently preparing for the tutorial. It can be installed
like this:

    $ raco pkg install --auto package-i-am-working-on

(Of course, I'll come up with a more appropriate name.)
-->
