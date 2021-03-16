---
layout: talk
active: bob2021
title: A gentle introduction to Stream Processing
speaker: Nicolas Fränkel
portrait: nicolas-fraenkel.jpg
time: 11:45–12:30
type: Vortrag
language: english
head: 2021
slides-file:fraenkel.pdf
---

While “software is eating the world”, those who are able to best
manage the huge mass of data will emerge out on the top.

The batch processing model has been faithfully serving us for
decades. However, it might have reached the end of its usefulness for
all but some very specific use-cases. As the pace of businesses
increases, most of the time, decision makers prefer slightly wrong
data sooner, than 100% accurate data later. Stream processing - or
data streaming - exactly matches this usage: instead of managing the
entire bulk of data, manage pieces of them as soon as they become
available.

In this talk, I’ll define the context in which the old batch
processing model was born, the reasons that are behind the new stream
processing one, how they compare, what are their pros and cons, and a
list of existing technologies implementing the latter with their most
prominent characteristics. I’ll conclude by describing in detail one
possible use-case of data streaming that is not possible with batches:
display in (near) real-time all trains in Switzerland and their
position on a map. I’ll go through the all the requirements and the
design. Finally, using an OpenData endpoint and the Hazelcast
platform, I’ll try to impress attendees with a working demo
implementation of it.

### Nicolas Fränkel

[@nicolas_frankel](http://twitter.com/nicolas_frankel)

Developer Advocate with 15+ years experience consulting for many
different customers, in a wide range of contexts (such as telecoms,
banking, insurances, large retail and public sector). Usually working
on Java/Java EE and Spring technologies, but with focused interests
like Rich Internet Applications, Testing, CI/CD and DevOps. Currently
working for Hazelcast. Also double as a trainer and triples as a book
author.
