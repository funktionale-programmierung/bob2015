---
layout: talk
active: bob2015
title: Programming Workflows with Grammars
speaker: Arie Middelkoop
time: 12:15-13:00
type: Vortrag
---

Assistants, a specific form of workflows and a classical part of
content management systems, are a means to implement business
processes by guiding and also restricting a user in performing some
sequence of tasks within the system (e.g. filling out a form). Such
assistants are typically described in terms of control flow graphs:
the nodes represent concrete tasks in the system and the edges
represent conditional transitions. Such a description is imperative,
relying on a careful sequencing of side effects.

In this talk, we propose a more declarative description that is
related to functional reactive programming (FRP) and is (loosely)
based on attribute grammars. The key insights are:

* The grammar specifies allowed sequences of symbols, and a symbol represents a task. The grammar does not only specify how to interpret performed tasks (i.e. parsing), but also which tasks still need to be performed to complete the process (i.e. generating).
* The tasks can be arranged in a tree, as specified by the productions of the grammar.
* The attribute grammar represents an arrow (hence the link to FRP) with attributes describing the data flow between tasks.

An important advantage compared to imperative descriptions is
compositionality. Moreover, grammar-related techniques provide
solutions to several common implementation challenges of Assistants.


#### Arie Middelkoop

Arie Middelkoop obtained his Ph.D. at the University of Utrecht in the
Netherlands in the area of software engineering, working on attribute
grammar extensions for the development of compilers. After a Postdoc
at LIP6 in Paris, he joined vwd Group in Kaiserslautern, where he
applies modern compiler construction techniques to financial software.

