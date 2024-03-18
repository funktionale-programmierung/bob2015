---
layout: talk
active: bob2024
title: "Computation Expressions in F#"
speaker: David Schaefer, Ronald Schlenker
portrait:
time: 11:45–13:15
type: Tutorial
language: english
head: 2024
---

Granted: A good programming language is typically much more than just
the sum of its individual features. And yet, sometimes it's worth
taking a closer look: "Computation Expressions" (CEs) from F# are an
existing language element that manages to combine flexibility and
simplicity in an amazing way.

Sounds like a nice, theoretical little game? They certainly are - and
much more: A practical and much-used concept in libraries and in the
F# compiler itself. While similar ideas like the "do" notation known
from Haskell provide language support for monads, CEs go much further.
They allow to reinterpret idiomatic language constructs and give room
to control the execution and evaluation for distinct computations
themselves.

Compared to alternative concepts such as language macros or compiler
plug-ins, CEs do not create "languages within the language" which tend
to erode a common "basis of intelligibility" among participating
developers. Rather, the original, intentional character of all
language constructs from the user's point of view remains untouched.
Hence CEs are a powerful tool that lives in the sweet spot between
versatility and quick and easy adoption.

In this tutorial we will show
- how to write a CE from scratch
- what the compiler is doing behind the scenes
- how real world examples work successfully in the industry
- how much fun they can be

### Prior knowledge required

To follow the tutorial you need the following prior knowledge:
- basic (functional) programming knowledge
- familiarity with the ML syntax or F# can help but is not a strict requirement

### Software Requirements

Please install the latest .NET SDK from
https://dotnet.microsoft.com/en-us/download

Verify that you can execute `dotnet fsi` to start the F# REPL and a
simple `id 42` works as expected.

For coding F# we recommend [VS Code](https://code.visualstudio.com/)
with the
[Ionide](https://marketplace.visualstudio.com/items?itemName=Ionide.Ionide-fsharp)
plugin, even though any other editor should suffice.

Please clone
[https://github.com/dawedawe/bobkonf2024](https://github.com/dawedawe/bobkonf2024)
to have the exercises ready.

### David Schaefer

Fediverse: [@dawe@fosstodon.org](https://fostodon.org/@dawe)<br/>
Twitter: [@dawe70704856]( https://twitter.com/dawe70704856)

I'm David Schaefer, aka [dawe](https://github.com/dawedawe), living near Cologne, Germany.

I fell in love with functional programming (FP) while being exposed to
theoretical computer science during my time at the university.<br/>
After various other jobs, I am a freelancer today and part of the
G-Research Open Source team. There, I work full time on the F# open
source ecosystem. My main focus is on developer tooling.

### [Roland Schlenker](https://github.com/SchlenkR)

Twitter: [@SchlenkR](https://twitter.com/SchlenkR)<br/>
YouTube: [@ThePureState](https://www.youtube.com/@ThePureState)


Ronald is a Frankfurt/Germany based programmer with more than 20 years
of professional experience. As an expert and recognized member of the
F# community, he supports his clients in the design and implementation
of complex business applications and technically highly sophisticated
libraries. In addition to his day-to-day work for clients, Ronald
consults and coaches teams in progressive fields, and he is involved
in many successful open source projects like "Vide" (an approach for
unified reactive UI development for Web, Avalonia, Maui and others),
obscure stuff like "TypeFighter" (a type system (1st order logic),
focusing structural types, set theory, and graph based solvers), daily
workhorses like "FsHttp", or audio/music/DSP things like the DSP
version of "Vide".

