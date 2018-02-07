---
layout: talk
active: bob2018
title: "Engineering TCP/IP with logic"
speaker: Hannes Mehnert
type: Vortrag
language: english
head: 2018
time: 17:25-18:05
---

TCP/IP is a complex protocol, which is specified in a series of RFCs.
Each RFC is written in English prose, and interpreted differently by
different people.  Nevertheless, TCP/IP is a widely deployed network
protocol nowadays, a lot of people depend on it.

In this talk, I will present a formal model of TCP/IP (developed
2000-2009 and refurbished since 2016), how it can be used to validate
the FreeBSD TCP/IP stack, and what we learned while writing it.  It is
modelled as a label transition system, including timers, retransmission,
etc.  Hundreds of transition rules are defined to cope with the little
details of TCP/IP.  We use symbolic execution to validate a trace, which
is produced by running a test on a TCP/IP stack, using backtracking
which is required to validate some traces.

While formalising TCP in HOL4, roughly 3 dozen anomalies have been
discovered,
and partially reported upstream.  The development of the formal model also
lead to an extended and more correct state machine on top of the initial
TCP/IP
RFC 793.

The resulting model spans over 350 pages, and contains lots of
documentation.  The pdf is rendered directly from the HOL4 source, the
tool HOLDoc was engineered which combined the transition rules and
comments into latex code.  A recent draft is available at
[`http://www.cl.cam.ac.uk/~pes20/Netsem/paper3.pdf`](http://www.cl.cam.ac.uk/~pes20/Netsem/paper3.pdf).

This is joint work with Peter Sewell, Michael Norrish, Tom Ridge,
earlier contributors are Steve Bishop, Matthew Fairbairn, Michael
Smith, and Keith Wansbrough.  The model is available under the 2
clause BSD license at
[`https://github.com/PeterSewell/netsem`](https://github.com/PeterSewell/netsem).

The project website is http://www.cl.cam.ac.uk/~pes20/Netsem/index.html

## Hannes Mehnert

[Hannes Mehnert](https://hannes.nqsb.io) researches in several
engineering areas: from programming languages (such as compiler
optimisation visualisation, type systems) over full functional
correctness proofs of object-oriented code, development environments
for dependently typed languages, to network protocols (TCP/IP) and
security protocols (TLS, OTR).  He feels safe in a garbage collected
environment, and appreciates purely functional goodness.

In his spare time, Hannes is not only a hacker, coauthor of a book on
indian cuisine and functional programming in JavaScript, but also a
barista and likes to travel and repair his recumbent bicycle.

Since beginning of 2018, Hannes works on a non-profit to put MirageOS
into production (http://robur.io).  He used to be a postdoc at
University of Cambridge working with the semantics, systems, and
security group.


