---
layout: talk
active: bob2023
title:  Extending a Language - Writing Powerful Macros in Scheme
speaker: Marc Nieper-Wißkirchen
portrait: nieper-wisskirchen.png
time: 11:45-13:15
type: Tutorial
language: english
head: 2023
---

One of the defining properties of the functional programming language
Scheme is the availability of a facility for writing hygienic macros.
By employing this, a programmer can customize the language until it
fits the posed problem perfectly.  This customization can range from
simple syntactic sugar to syntax for pattern matching to integrating
domain-specific languages into Scheme - all without any runtime
overhead.

However, many still consider writing macros for Scheme a black art.
In this tutorial, we want to convince everyone of the contrary.  We
will start with writing simple macros, discuss what makes Scheme’s
macro system elegant and powerful simultaneously, and finally come to
the question of how to implement complex embedded sublanguages -
without ever leaving our Scheme system.

We learn what the current R6RS and R7RS dialects bring to the table
and discuss ongoing developments, expanding the scope of syntactic
abstraction.  We see what distinguishes Scheme macros from macros or
templates in most other languages and how programming can benefit from
syntactic abstraction.

The tutorial does not assume knowledge of Scheme, only that you are
not allergic to parentheses.  Good general programming skills, which
include essential experience with functional programming, are helpful,
though.


### Preparation

Course materials will appear in this GitHub repository: https://github.com/mnieper/scheme-macros.

Participants benefit from installing [Chez
Scheme](https://cisco.github.io/ChezScheme/) and a good editor for
Scheme (https://www.gnu.org/software/emacs/) on their machines.

An excellent introduction to Scheme is The Scheme Programming Language (https://scheme.com/tspl4/).

### Marc Nieper-Wißkirchen

Marc Nieper-Wißkirchen holds the Algebra and Number Theory Chair at
the University of Augsburg. He regularly uses functional and
declarative programming to solve algorithmic problems in his
research. He teaches students the basics of programming and
mathematical algorithms using the programming language Scheme. Among
other things, his working group is concerned with category theory and
constructive mathematics.

Born in 1975 in Eckernförde and growing up in Flensburg, he gradually
moved his center of life towards the south of Germany. After studying
physics and mathematics at the University of Cologne and after a
postdoc year in Cambridge, England, he became a junior professor in
Mainz before settling with his family in Augsburg, where he has been
living since 2008.

Programming has always been a pet issue for him. He enjoys the close
connections between algebra, functional programming, and type
theories, which has led to more than one supervision of a thesis
between mathematics and computer science. Since 2016, he has become an
active member of the Scheme community, authoring 30 Scheme Requests
for Implementation. He is a member of the Scheme Working Group 2,
whose goal is to standardize the next language revision. He sees his
role in ensuring that Scheme stays the jewel it is and in healing the
split that was caused by R7RS-small’s disregard for the previous
standard. He would consider himself an expert in Scheme macrology.