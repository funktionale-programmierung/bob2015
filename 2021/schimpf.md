---
layout: talk
active: bob2021
title: Pipes, Arrows, and the Universe
speaker: Albert Schimpf
portrait: albert-schimpf.jpg
time: 15:05–15:50
type: Vortrag
language: english
head: 2021
slides-file: schimpf.pdf
video: bob2021-pipes-arrows-and-the-universe-schimpf
---

Data science often involves composing individual tasks to complex
workflows. A popular tool to quickly implement and check individual
tasks is using UNIX pipes.  The philosophy behind pipes is
implementing small programs that “do one thing well” and compose them
via pipes. The composition should adhere to one universal interface,
passing strings both as input and output.

While the interface is simple to understand and design for, however,
bigger tasks quickly become unwieldy. Doing anything more complex than
a linear sequence is not feasible. Moreover, working with a string
interface means parsing the input and using tools like xargs. This
results in an interface which cannot be typed properly, since the type
is encoded in the strings themselves.

Therefore, we propose [Scraper](https://github.com/scraperflow): a
universal data, component, and composition framework. With Scraper,
components are generic graph nodes with typed input and output
parameters; the interface between components is a map of key-value
pairs.  Instead of typing the map, Scraper uses typed configurations
of each component.  Composition works by connecting the output arrows
of one component to another one. Arrow types describe data flow,
scopes, and concurrency. These arrows can be used to reason about
which parts of the graph are independent from each other. In addition,
it is visualized where the output map is fed into another component as
an input map.

This allows for visual design of a complex workflow. While adhering to
a universal map data type, it still allows for strong typing of the
composition of components.  Furthermore, to enable rapid prototyping,
a declarative specification is used to build, visualize, and
statically type-check a workflow graph. Our work can be used to
prototype and run typical data science tasks in a more efficient
manner. Composition with usual UNIX pipes works, too.

### Albert Schimpf

I like to build tools that allow me to build tools to solve problems.
Generally interested in functional programming and distributed
systems.

My interests are understanding the different aspects of task-oriented
programing and its relation to functional programming and other
language theories. I want to extend this research also into a
distributed setting.

My previous work includes building tools for verification, mainly
propositional satisfiablility and regular language inclusion solvers.
