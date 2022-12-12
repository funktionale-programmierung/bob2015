---
layout: talk
active: bob2023
title: Version control in the age of distributed computing
speaker: Pierre-Étienne Meunier
portrait: meunier.jpg
time: 15:05-15:50
type: Vortrag
language: english
head: 2023
---

This talk will be about Pijul (https://pijul.org), a version control
system I contributed to, based on new datastructures. Pijul is
mathematically defined as the smallest generalisation of repositories
that can "tolerate" conflicts. This has a number of nice consequences
which we claim allow people to spend less time worrying about version
control and have more predictable and reliable workflows.

I will talk about how to use it in practice and what new, more
flexible workflows it allows. I will also describe some elements of
its design, including:

- How it works internally.

- The key advantages of having a mathematically sound version control
system, and how this allows people to spend more time on their code
and less on version control.

- How Pijul prompted the design of a new key-value store library, and
how that key-value store turned out to be really fast.

- The design of our new (to be announced soon) open source hosting
service for repositories, and the challenges of maintaining an online
service with a team of one person.

### Pierre-Étienne Meunier
