---
layout: talk
active: bob2016
title: Dynamic programming at ease - with grammars, algebras, products
speaker: Stefanie Schirmer
portrait: stefanie-schirmer.jpg
time: 10:15-11:00
type: Vortrag
slides-file: schirmer.pdf
language: english
---

Did you recently face a combinatorial optimization problem?
Simply combining the multiple decision cases to recursively solve each
subproblem leads to the dreaded "combinatorial explosion". Finding an
optimal solution is considered intractable, even on a powerful compute
cluster.

Dynamic programming is a technique to tame these problems. It reduces
complexity by reusing intermediate results that are stored in a table,
instead of computing them again. With this trick, the complexity drops
to merely filling the dynamic programming tables, and exponentially
hard problems become polynomial.
Dynamic programming algorithms are usually expressed in the form of
recursive formulas, recurrences. They contain index fiddling to
navigate to the correct previous solutions, and a mix of tabulated and
non-tabulated solutions.
Developing such an algorithm is tedious, error-prone and the resulting
programs are hard to debug.

We will explore a formal framework for dynamic programming on
sequences. Separating the problems of search space description,
candidate description, candidate evaluation and tabulation helps us in
thinking about dynamic programming.
Bellman's GAP is a programming language derived from that formalism.
The compiler of the language handles tabulation, access of
intermediate results and backtracking. We can focus on the fun part,
the algorithm itself, and equip it with different evaluation
strategies and scoring schemes.

### Stefanie Schirmer

Stefanie Schirmer is a Software Engineer at Etsy and an alumna of
Hacker School in New York.

She studied Applied Computer Science in the Natural Sciences in
Bielefeld, Germany. In her PhD project she developed metrics for the
structure comparison of RNA molecules. After working at the cancer
research institute of Université de Montréal, she found her way to
Hacker School and to Etsy.

Together with Hannes Mehnert and Jens Ohlig, she wrote a book about
functional programming and curry cooking.

