---
layout: talk
active: bob2017
title: "Immutable Hash Maps: Plenty of room at the bottom"
speaker: Peter Schuck, Cliff Rodgers
portrait: peter-schuck.jpg
portrait2: cliff-rodgers.jpg
time: 12:35-13:20
type: Vortrag
language: english
head: 2017
slides-file: schuck.pdf
---

The Hash Array Mapped Trie (HAMT) has become the standard
implementation for Immutable Hash Maps. However there is still room
for big improvements with this central data structure.

The Compressed Hash Array Mapped Prefix-tree (CHAMP) is a modification
of the Hash Array Mapped Trie that performs the hat trick of

- Speeding up iteration and equality checking by 100% or more
- Lowers memory overhead
- Reduces the lines of code needed by 33%, along with making the implementation much easier to understand

### Peter Schuck

Peter is a full stack developer with a soft spot for functional
programming al a Clojure and for high performance JavaScript. He's
contributed to the ClojureScript compiler and is currently working on
significant performance gains to Clojure's HashMaps. No language snob
he's comfortable with a wide variety of languages like PHP, Ruby,
JavaScript, and Scala. Peter is a senior software developer at
Bendyworks in Madison WI.


### Cliff Rodgers

Cliff Rodgers is a Senior Developer working at Bendyworks, a web
development shop focused on delivering Ruby on Rails, Clojure, and
JavaScript apps that customers love, in Madison Wisconsin.  Before
joining Bendyworks, Cliff earned a PhD in Neuroscience from University
of Wisconsin-Madison.  His research focused primarily on mechanisms of
pain and memory.  He has previously presented at the Society for
Neuroscience annual meeting, the Neuropharmacology Conference on
GABAergic Signaling in Health and Disease, and the International
Symposium on Memory and Awareness in Anesthesia. In his spare time, he
enjoys biking.
