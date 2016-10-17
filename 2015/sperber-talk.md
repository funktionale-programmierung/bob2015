---
layout: talk
active: bob2015
title: The purely functional fab
speaker: Michael Sperber
time: 14:45-15:00
portrait: sperber.jpg
type: Vortrag
language: english
youtube: AlSGd6O1x4s
head: 2015
---

Modern semiconductor fabs pose a complex scheduling problem: A fab
must move an every more diversified product mix through a big hall of
very expensive tools.  While doing that, it should keep delivery
dates, optimize throughput and minimize rejects.  Worse: As many of
the tools operate at the atomic level, a typical tool often breaks or
operates below spec.  Software can help manage this complexity, but
needs to be well-structured and predictable to be truly useful.
Traditional imperative and relational techniques fail to solve some of
the harder problems in fab scheduling.  Functional programming is more
efficient for software development, but also brings additional
advantages to the table:

- Programming with compositional models enables systematically
  constructing domain models accessible to scheduling experts.

- Using persistent data structures ("purely functional programming")
  enables speculative simulation, which is needed to solve some complex
  scheduling problems.

- The use of algebra and structuring devices such as monads and arrows
  help structure parts of a scheduling system.

This talk describes our experience developing the ALPS system
("Advanced Logistics and Production System") together with Starview,
Inc.

### Michael Sperber

Michael Sperber ist CTO der Active Group GmbH.  Er ist international
anerkannter Experte für funktionale Programmierung und wendet sie seit
20 Jahren in Forschung, Lehre und industrieller Entwicklung an.
Außerdem hat er zahlreiche Fachartikel und einige Bücher zum Thema
verfasst.  Michael Sperber ist Mitbegründer des Blogs
[funktionale-programmierung.de](http://funktionale-programmierung.de/)
und Mitorganisator der BOB.

