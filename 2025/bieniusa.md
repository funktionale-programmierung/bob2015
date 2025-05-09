---
title: "Keynote: Local-first Software"
layout: talk
active: bob2025
speaker: Annette Bieniusa
language: Englisch
portrait: annette-bieniusa.jpg
time: 09:00-10:00
type: Vortrag
head: 2025
slides-file: bieniusa.pdf
video: bob11-2025-local-first-software-bieniusa
---

Local-first software redefines how applications handle data by
prioritizing user ownership of data, responsiveness, and offline
functionality. Unlike traditional cloud-dependent software,
local-first applications store and process data primarily on users'
devices rather than relying on continuous connectivity to a central
server. This ensures that the software remains usable even without an
internet connection, offers faster interactions by eliminating latency
introduced by remote servers, and gives users greater control over
their data. Local-first architectures typically incorporate mechanisms
for synchronization, enabling seamless collaboration and data sharing
across devices. Techniques, such as Conflict-free Replicated Data
Types (CRDTs), are the “secret sauce” to ensure that updates made on
one device are automatically reconciled with changes made on others,
even when they happen offline.


This talk will delve into the
principles of local-first software, the inner workings of CRDTs,
practical implementation strategies, and the challenges developers
must overcome to realize this vision. Finally, we will show the
strengths and limitations in case studies such as collaborative
spreadsheets and present methods for verifying the correctness of
local-first applications.




## Annette Bieniusa

Annette is a professor of Software Technology at the University of
Kaiserslautern-Landau (RPTU). Her research interests include the
semantics of concurrent and distributed programming, focusing on
replication strategies and synchronization techniques. She is
passionate about CRDTs, local-first software, verification, and
teaching students about all aspects of programming.
