---
layout: talk
active: bob2019
title: Logic in the Service of System Configurations
speaker:  Shriram Krishnamurthi
portrait: shriram-krishnamurthi.jpg
time: 12:35-13:20
type: Vortrag
language: english
head: 2019
---

Programming is glamorous; everyone has ideas for how it should be done
better. System configuration, in contrast, lacks panache; it seems to
consist mainly of fiddling with lots of little settings across
devices. However, configuration actually performs a very difficult
task: the devices are heterogenous, they work at different levels of
abstraction (databases, servers, networks), and they form a
distributed system that must act in concert to achieve a subtle (often
unstated) goal. Indeed, many security and correctness problems stem
not from incorrect programs (for which people constantly produce new
verifiers) but rather from subtle configuration errors.


There are several modalities of action: e.g., verification (given a
configuration and a property, does the configuration match the
property?); differential analysis (given two configurations, how are
they different?); and synthesis (given a specification, can we
generate a configuration?). All these can be unified under the rubric
of mathematical logic. We will see how the tools of logic can address
several of these problems in a somewhat uniform way.

The talk will be self-contained, but does expect that the listener has
a basic knowledge of logic (namely that the upside-down A is for-all
and the backward E is there-exists).

### Shriram Krishnamurthi

Shriram Krishnamurthi is a Professor of Computer Science and an
Associate Director of the Executive Master in Cybersecurity at Brown
University. With collaborators and students, he has created several
influential systems and written multiple widely-used books. He also
co-directs the Bootstrap math-and-computing outreach program. For his
work he has received SIGPLAN's Robin Milner Young Researcher Award,
SIGSOFT's Influential Educator Award, SIGPLAN's Software Award, and
Brown's Henry Merritt Wriston Fellowship for distinguished
contribution to undergraduate education. He has authored over a dozen
papers recognized for honors by program committees. He has an honorary
doctorate from the Università della Svizzera Italiana.

With collaborators and students, he has created several influential
systems: [DrRacket](http://racket-lang.org/) and
[WeScheme](https://www.wescheme.org/) (programming environments),
[Margrave](http://www.margrave-tool.org/) (policy analyzer), FrTime
and Flapjax (reactive programming languages), Lambda-JS and TeJaS
(semantics and types for JavaScript), and Flowlog (software-defined
networking programming language and verifier). He is now working on
the [Pyret programming language](https://www.pyret.org/). He is the
author of [Programming Languages: Application and Interpretation](http://www.plai.org/) and
a co-author of [How to Design Programs](http://htdp.org/) and [Programming and
Programming Languages](https://papl.cs.brown.edu/2018/).
