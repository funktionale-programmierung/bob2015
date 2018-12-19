---
layout: talk
active: bob2019
title: "Across Time and Space: Building Explorative UIs Using a Many-Worlds Interpretation of State"
speaker:  Nikolas Göbel, Malte Sandstede 
portrait: nikolas-goebel.jpg
portrait2: malte-sandstede.png
time: 16:20-17:05
type: Vortrag
language: english
head: 2019
---

The functional approach to state management in the frontend was first
enabled by React, pioneered by the likes of om.next, Redux, and Elm,
and has ushered in a golden era in web development. It is captured by
the two signatures `view :: DB -> HTML` and `mutate :: DB -> Tx ->
DB`. What might happen when we start working with more than one world,
i.e. when we replace the notion of mutate with that of `solve :: DB ->
Tx -> [DB]`? Using Clojure and Rust, we explore these ideas in the
context of 3DF, a stream processing system based on differential
dataflows.

### Nikolas Göbel

Nikolas Göbel is a partner at Clockworks and a graduate student at ETH
Zurich. He is interested in languages and systems that make
programming more declarative and in building tools that augment human
thinking and learning. He works mostly in Clojure and Rust.

### Malte Sandstede

Malte Sandstede is a partner at Clockworks and a graduate student at
TU Munich. He aims to create technology that becomes more than an end
in itself — software that is able to convey its inherent beauty to
programmers and end-users alike. His language of choice is Clojure.
