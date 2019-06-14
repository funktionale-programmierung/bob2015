---
layout: talk
active: bob2019-summer
title: Statistical testing of software
speaker:  Stevan Andjelkovic
type: Vortrag
language: english
head: 2019
---
How does one effectively measure the quality of software?

In this talk I'll give a summary of how the literature on Cleanroom
Software Engineering (Harlan Mills et al) and the Software Reliability
Engineering (John Musa et al) answer this question.

The general principle, shared by both Mills' and Musa's approaches,
consists of four steps:

1. Model the expected use of the software under test, i.e. what are the use
   cases and how often do they occur with relation to each other. This model
   is called a usage model or an operational profile, and is supposed to
   capture what realistic use of the software looks like;

2. Use the usage model to generate test cases that correspond to realistic
   use;

3. Use a test oracle to determine if the generated test cases passed or
   failed. A simple test oracle could for example check if the software under
   test crashes when we execute the generated test case;

4. Statistically compute how reliable the software under test is based on the
   outcome of repeating step (2) and (3) some number of times.

I'll then show how one might go about implementing those steps using
property based testing and state machine modelling. Property based
testing already has machinery for generating random test cases which
makes step (2) easy, and state machine modelling gives us a way to
define a test oracle that we need in step (3). By doing some
bookkeeping of test outcomes while running them, the reliability can
be computed at the end.

For example, if the reliability is say 90%, then that should be
interpreted as: if a user uses the system as specified by the usage
model, then in 90% of the cases the system will act according to the
specification captured by the state machine.

The demo I'll show will be using the Haskell library
[quickcheck-state-machine](FIXME) which I've helped develop, but one could also
use the Java program [JUMBL](FIXME] developed by Mills' collaborators.

## Stevan Andjelkovic

I wrote my first property based test in 2006 as part of an
introduction to Haskell at Chalmers University. I also did my master's
degree at Chalmers, before moving to Strathclyde University in 2011 to
do a PhD on the topic of reasoning about effectful programs in type
theory.

I now work at HERE Technologies here in Berlin. Our group, previously
know as Advanced Telematic Systems, does software updates for devices
in general and for cars in particular.
