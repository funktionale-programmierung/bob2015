---
layout: talk
active: bob2023
title: Cloud, done the nix way
speaker: Julian Kirsten Arni
portrait: arni.jpg
time: 16:15-17:00
type: Vortrag
language: english
head: 2023
slides-link: https://docs.google.com/presentation/d/e/2PACX-1vQWLT-rDFGDsMpOY1tO-Z71KxjP-7_j-Vm-NaJDm2yo0_ntOTHUG_lhuYEYFOr4-PCXu_WbxfYZOgDz/pub?start=false&loop=false&delayms=3000
---

Nix has proved to be a revolutionary advance in packaging. In addition
to packaging, the core idea has also been succesfuly applied to
machine configuration (with NixOS), and to programming languages
(Unison). Given how fruitful these applications have been, it's
natural to ask whether there are others.

In this talk, we'll ask how to do cloud infrastructure the nix way.
The core idea will be a hash-based service-addressing: the way we
contact a service is not via a identifier for a machine (an IP
address), nor a mutable pointer to a machine (a service URL), but
instead a hash URL that is unique to the machine configuration (the
hash of all the software and configuration in a machine).

Suddenly, many of the problems of distributed systems become much
easier.  Deployments with zero downtime, where every request is
handled to completion, services are terminated promptly and in the
right order, there is no overprovisioning, and we have an exquisitely
fine-grained control and understanding of API compatibility issues.

As part of this investigation, we'll go through what the core idea of
Nix is, and how it relates to similar hash-based technologies such as
git, docker, and unison.  You'll learn about infrastructure and
deployment philosophies and techniques, how to adjudicate which
notions of identity work best in a given settings, what
input-addressed and content-addressed hashing are and why you should
care, and more.

### Julian Kirsten Arni

[@jk_arni](https://twitter.com/jk_arni)

Julian is a Haskell and Nix developer working at garnix.io, and
Artificial Labs. He was one of the original authors of the Servant web
framework. In previous lives, he was a philosopher, and Brazilian U16
chess champion.
