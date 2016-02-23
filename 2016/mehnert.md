---
layout: talk
active: bob2016
title:  Jackline, a secure instant messaging application, functional from the ground up
speaker: Hannes Mehnert
portrait: hannes-mehnert.jpg
time: 17:10-17:55
type: Vortrag
slides-file: mehnert.pdf
youtube: 3Ca40xVciac
language: english
---

A huge amount of communication is done via instant messaging (IM) these
days.  An IM protocol which is open and extensible is XMPP, based on
XML.  A lot of XMPP clients use unsafe languages, and need regular
security updates because flaws are found in some of the dependent
libraries.  The advantage of IM over store-and-forward communication
(eMail) is that online end-to-end key exchanges are used (such as
authenticated Diffie-Hellman) to provide end-to-end security with
forward secrecy.

In this talk, I will present Jackline, a terminal-based XMPP client.
Jackline is developed full stack in OCaml, running as a MirageOS
unikernel on a Xen hypervisor (as well as a native UNIX binary).  This
unikernel does not include a standard C library, but executes the OCaml
runtime directly on Xen.  All required protocols, TCP/IP, TLS, XML,
XMPP, SASL, and OTR, are implemented in OCaml in a purely functional
style.  Unicode is supported.  The trusted computing base of Jackline is
two orders of magnitude smaller than similar systems on UNIX (relying on
libxml2, libpurple, OpenSSL, libotr, ...).

Jackline is still under heavy development, it already has a solid user
base.  It is a concrete application on top of the cryptographic
libraries (TLS and OTR) we developed over the last two years.  Jackline
provides evidence that OCaml is suitable as a systems programming
language: low-level network layers, bit-twiddling symmetric
cryptography, complex cryptographic protocols, user interfaces -- all in
OCaml using functional goodness (purely functional protocols, functional
reactive programming).

### Hannes Mehnert

[Hannes Mehnert](https://twitter.com/h4nnes) researches in several
engineering areas: from programming languages (such as visualisation
of compiler optimisations, type systems) over full functional
correctness proofs of object-oriented code, development environments
for dependently typed languages, to network protocols (TCP/IP) and
security protocols (TLS, OTR).  He feels safe in a garbage collected
environment, and appreciates purely functional goodness.

In his spare time, Hannes is not only a hacker, coauthor of a book on
Indian cuisine and functional programming in JavaScript, but also a
barista and likes to travel with hist recumbent bicycle and repair it.

He is currently doing a postdoc at University of Cambridge working with
the semantics, systems, and security group.
