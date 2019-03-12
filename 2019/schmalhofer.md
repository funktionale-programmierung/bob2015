---
layout: talk
active: bob2019
title: Einstieg in die Probabilistische Programmierung
speaker: Christoph Schmalhofer
portrait: christoph-schmalhofer.jpg
time: 16:20-17:50
type: Tutorial
language: german
head: 2019
---

Die letzten Jahre hat Probabilistisches Programmieren Fahrt
aufgenommen. Es wird mehr geforscht, publiziert, konferiert, entwickelt
und auch angewendet.

Der Einstieg ist durch die Integration in Mainstream-Sprachen wie
Haskell, Scala und Python einfach geworden.

Probabilistische Programme sind lernfähige Simulationen

Kurz vorgestellt - alte Bekannte als Probabilistische Programme:

- Naive Bayes
- Markov-Kette
- Bayes-Netze
- Gauß-Prozesse

Basics:


- Eigenbau einer diskreten Wahrscheinlichkeitsmonade (Scala)
- die Sampling-Variante von Rainier (Scala))
- Olegs Freie Wahrscheinlichkeitsmonade (Haskell))

Kurze Vorstellung der Algorithmen:

- MCMC
- Variational Bayesian Methods

Deep Probabilistic Programming: kann Tensorflow Probability wirklich mehr?

Erfahrungsbericht - Probabilistische Logik für Fahrzeugkonfiguration:

- Principle of Explosion: "ex falso quodlibet"
- Markov-Logic mit Figaro (Scala)

### Vorbereitung

Ich werde den interaktiven Teil des Tutorials auf Julia/Turing
aufbauen. Die Installation von Turing ist recht gut dokumentiert und
ist sowohl unter Julia 1.0 als auch Julia 1.1 möglich.

[`http://turing.ml/docs/get-started/`](http://turing.ml/docs/get-started/)

Für Fedora User habe ich noch den Tipp:

    dnf install openblas-dev

Installiert man Julia 1.1 ohne Paketmanager, kann ein expliziter
Build-Schritt notwendig sein:

[`https://github.com/TuringLang/Libtask.jl/issues/18`](https://github.com/TuringLang/Libtask.jl/issues/18)

### Christoph Schmalhofer

Christoph Schmalhofer ist Software-Entwickler/Architekt bei InNuce
Solutions in Hamburg.

Er hat Philosophie und Physik studiert und arbeitet seit 20 Jahren in
der Software-Entwicklung. Er hat unter anderem ein OODBMS,
Kreditrating-Software und einen Fahrzeugkonfigurator mitentwickelt.
