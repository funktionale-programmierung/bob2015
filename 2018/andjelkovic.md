---
layout: talk
active: bob2018
title: "Testing monadic programs using QuickCheck and state machine based models"
speaker: Stevan Andjelkovic
type: Vortrag
language: english
head: 2018
time: 10:30-11:15
slides-file: andjelkovic.pdf
sketchnote: andjelkovic.jpeg
---

I would like to show how one can apply property based testing to
"real-world" programs, such as a CRUD web server application. I'm
interested in properties about the system as a whole, not merely some
pure parts of it (e.g. serialising and deserisalising to and from JSON).

To achieve this I've implemented a [Haskell library](https://github.com/advancedtelematic/quickcheck-state-machine) on top of QuickCheck
that makes it possible to specify the correctness of the system using
pre- and post-conditions over a state machine model a la Erlang's
proprietary version of QuickCheck.

I'll explain how the library works and demo how one can use it to
specify the correctness of and test a simple CRUD web application. In
the process we will expose bugs in the program logic as well as a race
condition.

Finally, I'll compare and contrast the approach presented to other
similar tools: Z/B-method/Event-B, TLA+, and Jepsen.

## Stevan Andjelkovic

I wrote my first property based test in 2006 as part of an introduction
to Haskell at Chalmers University. I also did my master's degree at
Chalmers, before moving to Strathclyde University in 2011 to do a PhD on
the topic of reasoning about effectful programs in type theory.

I now work at Advanced Telematic Systems here in Berlin. The company
does software updates to cars, while I spend most of the time working on
end-to-end testing. The end-to-end tests involve several micro services
and clients (cars), and they run as part of continuous integration to
give us a picture of if the system as a whole is working as it should.
