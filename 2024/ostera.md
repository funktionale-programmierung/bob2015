---
layout: talk
active: bob2024
title: Erlang, OCaml, same thing 🤷
speaker: Leandro Ostera
portrait: leandro-ostera.jpg
time:
type: Vortrag
language: english
head: 2024
---

Ever wondered what type-safe, massively concurrent functional
programming could look like? Join me on a journey from Erlang to OCaml
and back again.

We'll learn about [Caramel 🍬](https://github.com/leostera/caramel) –
an experiment in bringing type-safety for the Erlang VM. Caramel was
born out of the question: why is Erlang hard to type? – and as it
turns out, it is not! If you restrict it enough. So much so that what
you end up with is...OCaml?

On the flip side, the new algebraic effects and multicore capabilities
of OCaml 5 open the possibility of new execution models. How far could
we take them? Could we inject Erlang's famed concurrency model into
OCaml?

[Riot 🌪️](https://github.com/leostera/riot) is an actor-model runtime
for OCaml 5 that brings multi-core scheduling and lightweight
processes, communicating via message passing.

**Key Takeaways**
* Learn more about how type safety and supervision trees make for the
  ultimate reliability stack
* Understand the convergence of Erlang and OCaml
* Get started writing Type-safe actor systems in OCaml with Riot

### Leandro Ostera

Bluesky: [@leostera.bsky.social](https://bsky.app/profile/leostera.bsky.social)<br/>
Fediverse: [@leostera@mas.to](https://mas.to/@leostera)<br/>
Twitter: [@leostera](https://twitter.com/leostera)

Leandro is a neurodivergent Latin engineer, writer, leader and
founder, living in Sweden. In his 10+ years in the industry he's
worked at companies like Klarna, Spotify, Walnut, and several
startups. In their spare time, Leandro enjoys building compilers and
doing street photography.