---
layout: talk
active: bob2020
title: "Ganz praktisch: Probabilistische Funktionen"
speaker: Christoph-Schmalhofer
portrait: christoph-schmalhofer.jpg
time: 16:35-18:10
type: Tutorial
language: german
head: 2020
---

Zufallsprozesse sind überall, zum Beispiel: Aktienkurse,
Antwortzeiten, Luftverschmutzung.  Probabilistische Funktionen können
Zufallsprozesse lernen, simulieren und Vorhersagen versuchen.

#### Ein wenig Theorie


- Universal (Higher Order) Probabilistic Programming
- Stochastische Prozesse sind Probabilistische Funktionen
- "A Convenient Category for Higher-Order Probability Theory"


#### Intuition Gaußprozesse

- einfach, gutartig, vielseitig
- Anwendungen ohne Ende: Optimierung, Robotik, Geowissenschaften, ...
- viele Einzeiler, viele Plots

#### Fallstudie: Interpolation Mauna Loa CO2-Daten

- Julia GaussianProcesses.jl
- Kovarianzfunktions-Zoo


##### Tinkering around

- Analyse einfacher Datasets
- probabilistische Funktionen selbst gebaut (Closures + Currying)

### Vorbereitung

Julia kann hier heruntergeladen werden:

[`https://julialang.org/downloads/`](https://julialang.org/downloads/)

Zur Vorbereitung bitte noch die Packages GaussianProcesses,
DelimitedFiles, Distributions und Plots installieren.  Dazu Julia
starten (mit dem Befehl `julia`) und die Pkg-REPL
aktivieren durch Drücken auf `]`.

Dort folgenden Befehl absetzen:

```
add GaussianProcesses DelimitedFiles Distributions Plots
```

Dann die Pkg-REPL verlassen mit Backspace und die Packages
vorcompilieren mit:

```
using GaussianProcesses DelimitedFiles Distributions Plots
```

## Christoph Schmalhofer

Christoph Schmalhofer works as Software Architect for InNuce Solutions
in Hamburg. 

Er hat Philosophie und Physik studiert und arbeitet seit 20 Jahren in
der Software-Entwicklung. Er hat unter anderem ein OODBMS,
Kreditrating-Software und einen Fahrzeugkonfigurator mitentwickelt.
