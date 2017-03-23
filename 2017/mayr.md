---
layout: talk
active: bob2017
title: Writing a native Mac GUI application in Haskell
speaker: Nikolas Mayr
portrait: nikolas-mayr.jpg
time: 14:15-15:00
type: Vortrag
language: english
head: 2017
slides-file: mayr.pdf
youtube: bFr4NntxsEc
---

Haskell is a superb language for implementing Mac applications with
native GUI. Yet this approach is rarely taken by developers.

This talk examines the development of the JSON Class Generator, a
full-fledged `NSDocument` based Mac application, written partly in
Objective-C and largely in Haskell. It reveals the application's
architecture and illuminates the main design decisions and alternative
implementations. The presentation explains, how the two distinct
language runtimes co-exist and communicate with each other inside a
single binary and how a functional reactive user interface was
constructed and tested on top of this layer. It concludes by stating
under which circumstances the benefit of combining two languages does
compensate the seemingly higher effort.

### Nikolas Mayr

Nikolas Mayr is a software developer, who has worked on more than 20
iOS apps - including 4 top-ranked ones - since 2010. He performed for
companies like t-online.de, thalia.de, mobile.de, rocket-internet.de.
His passion for Haskell started in 2006 and has steadily grown. In
2016 he founded lifted.software and released the JSON Class Generator -
a native Mac app, that is made of mostly Haskell.
