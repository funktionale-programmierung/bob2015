---
layout: talk
active: bob2021
title: "Combining clojure.spec with design recipes"
speaker: Diego Sánchez, Lenadro Doctors
portrait: diego-sanchez.jpg
portrait2: leandro-doctors.jpg
time: 
type: Tutorial
language: english
head: 2021
---

We share a method to systematically and comprehensively evolve a
domain model, complementing use cases and "design recipes" with
(clojure.spec-based) specifications. This approach facilitates finding
inaccuracies at the edges of our in-growth domain, allowing us to: 1)
supersede the de facto "tinker until it works" standard with a
systematic "define-specify-verify (repeat)" cycle; and 2) complement
the traditional mitigation of both internal and parameter validation
errors.

Our approach combines the use of "design recipes", use cases and "à la
xDD" examples with (clojure.spec-based) specifications. The use of
"design recipes" allows us to be systematic, while the usage of
example-based use cases provide a comprehensive understanding of the
domain. And when adding specifications to the mix, we end up empowered
to verify compliance both at compile-time and at run-time.

This combination allows us to:


- move from a "tinker until it works" process to a "define-specify-verify (repeat)" cycle,
- find mistakes at the domain’s edge,
- count with specification-based generative tests, and
- automatic, specification-based documentation for the domain model

This approach is based on combining the main ideas of two books: [How
to Design Programs](https://htdp.org/) (Felleisen et. al.) , and [Domain Modeling made
Functional](https://fsharpforfunandprofit.com/books/) (Wlaschin).

### Diego Sanchez

[@dsminotauro](http://twitter.com/dsminotauro)

I found vital focusing on mentoring, couching teams for them to
achieve coding standards of excellence. In a meanwhile I still write
code for me to get in touch with the craft and to learn new paradigms
as functional programming.

### Leandro Doctors

- Proactive and Self-Motivated Free Software and Free Culture geek.
- Interested in the Social Impact of Science and Technology.
- Contributions to Free Software, as part of globally distributed teams.
- Experienced both as a Researcher and as a Lecturer.
- Dedicated student mentor.
- International and Multicultural experience (Europe, South America,
  and Africa).

