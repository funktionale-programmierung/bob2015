---
layout: talk
active: bob2019
title: State machine modelling and property based testing combined with fault injection 
speaker: Stevan Andjelkovic
time: 17:10-17:55
type: Vortrag
language: english
head: 2019
---

Property based tests of pure programs can give us great confidence that
the involved functions are correct with regard to some specification.
When the programs are monadic however, i.e. use the file system or the
network for example, we need to be more careful because of exceptions.

For example some file that the program uses might have the wrong
permissions or some network traffic gets lost, causing our program to
crash or lose data. The problem here is that typically when we run our
tests none of these exceptions occur and the tests pass. Even a
conscious effort to test for exceptions might be futile, because of the
sheer amount of things that can possibly go wrong in a program
(nevermind combinations of failures and dependencies on timing).

In this talk I'll show how we can overcome these testing difficulties by
using [state machine modelling](https://github.com/advancedtelematic/quickcheck-state-machine)
and property based testing together with fault injection. [Fault
injection](https://en.wikipedia.org/wiki/Fault_injection) is a technique
that purposely introduces faults into our system, for example network
package loss.

I gave a talk last year on combining property based testing and state
machine specifications to test concurrent programs. In this years talk
we'll recall the basics and focus on exceptions rather than on
concurrency, but of course nothing stops us from doing both. 

### Stevan Andjelkovic

I wrote my first property based test in 2006 as part of an introduction
to Haskell at Chalmers University. I also did my master's degree at
Chalmers, before moving to Strathclyde University in 2011 to do a PhD on
the topic of reasoning about effectful programs in type theory.

I now work at Advanced Telematic Systems here in Berlin. The company
does software updates to cars, while I spend most of the time working on
end-to-end testing. The end-to-end tests involve several micro services
and clients (cars), and they run as part of continuous integration to
give us a picture of if the system as a whole is working as it should.
