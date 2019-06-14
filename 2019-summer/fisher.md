---
layout: talk
active: bob2019-summer
title: Using Formal Methods to Eliminate Exploitable Bugs
speaker:  Kathleen Fisher
portrait: kathleen-fisher.jpg
type: Vortrag
language: english
head: 2019
---


For decades, formal methods have offered the promise of software that
doesn’t have exploitable bugs.  Until recently, however, it hasn’t
been possible to verify software of sufficient complexity to be
useful. Recently, that situation has changed.  SeL4 is an open-source
operating system microkernel efficient enough to be used in a wide
range of practical applications. It has been proven to be fully
functionally correct, ensuring the absence of buffer overflows, null
pointer exceptions, use-after-free errors, etc., and to enforce
integrity and confidentiality properties.  The CompCert Verifying C
Compiler maps source C programs to provably equivalent assembly
language, ensuring the absence of exploitable bugs in the compiler.  A
number of factors have enabled this revolution in the formal methods
community, including increased processor speed, better infrastructure
like the Isabelle/HOL and Coq theorem provers, specialized logics for
reasoning about low-level code, increasing levels of automation
afforded by tactic languages and SAT/SMT solvers, and the decision to
move away from trying to verify existing artifacts and instead focus
on co-developing the code and the correctness proof.  In this talk I
will explore the promise and limitations of current formal methods
techniques for producing useful software that provably does not
contain exploitable bugs.  I will discuss these issues in the context
of DARPA’s HACMS program, which had as its goal the creation of
high-assurance software for vehicles, including quad-copters,
helicopters, and automobiles.

## Kathleen Fisher

Before joining Tufts School of Engineering, Kathleen Fisher was a
program manager at DARPA, where she started and managed the HACMS and
PPAML programs; a consulting faculty member in the Computer Science
Department at Stanford University, and a principal member of the
technical staff at AT&T Labs Research. Fisher is an ACM Fellow. She is
an associate editor for <a href="http://toplas.acm.org/"
target="_blank">TOPLAS </a>and a former editor of the <a
href="http://mc.manuscriptcentral.com/jfp_submit"
target="_blank"><em>Journal of Functional Programming</em></a>. Fisher
is a past chair of the ACM Special Interest Group in Programming
Languages (<a href="http://www.sigplan.org/"
target="_blank">SIGPLAN</a>) and past co-chair of CRA's Committee on
the Status of Women (<a href="http://cra-w.org/"
target="_blank">CRA-W</a>). She is a recipient of the <a
href="http://www.sigplan.org/Awards/Service/" target="_blank">SIGPLAN
Distinguished Service Award</a>, vice chair of DARPA's ISAT study
group, and a member of the Board of Trustees of Harvey Mudd College.
