---
layout: talk
active: bob2015
title: Clojure Redeployed
speaker: Jan Stępień
time: 17:15-18:00
portrait: stepien.jpg
type: Vortrag
---

At stylefruits we've been using Clojure on production since late
2012. By now it's the core ingredient of our infrastructure. It's been
introduced at each level of our stack, down from backend data
processing up to client-facing websites. We've been using the language
to maintain web applications handling 10 million unique monthly
visitors. We've made a lot of mistakes and we've learned a lot.

This talk is dedicated to the newest addition to our infrastructure: a
Clojure REST-inspired API. The project, initially designed to back
stylefruits mobile apps, is intended to become the façade abstracting
away data sources from all our mobile and web applications.

Taught by our previous mistakes in the realm of deployment and
scalability we've set our requirements high. We're aiming for
continuous delivery, high availability, dynamic scaling and pauseless
deployments under load. To reach our goals we've picked
state-of-the-art deployment tools, including AWS Elastic Beanstalk and
Docker.

Aside from deployment matters, Clojure proves to be an excellent
choice for building a modular and stateless service. The breadth of
its ecosystem is invaluable; an example is the excellent Liberator
library which allows us to implement HTTP endpoints of our API in a
declarative fashion.

In this talk we're going to share our experiences, both good and bad,
gained while prototyping, deploying and maintaining our newest
project.


#### Jan Stępień

Jan Stępień is a developer at stylefruits. He graduated from Warsaw
University of Technology with MSc Eng in Computer Science. He spends
most of his time on both macro- and micro- backend services written in
Clojure. Aside from Clojure he can be seen hacking Ruby and Haskell
and keeping his fingers crossed for Rust. When offline, he is known to
run both half and full marathons and wander in snowy Alpine
wilderness.
