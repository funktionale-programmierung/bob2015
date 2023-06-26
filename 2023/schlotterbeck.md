---
layout: talk
active: bob2023
title: Ist das ein Graph oder kann das weg? Funktionales Deep Learning in Haskell
speaker: Raoul Schlotterbeck
portrait: schlotterbeck.jpg
time: 12:30–13:15
type: Vortrag
slides-file: schlotterbeck.pdf
language: german
head: 2023
video: bob2023-ist-das-ein-graph-oder-kann-das-weg-schlotterbeck
---

Mathematisch betrachtet sind Neuronale Netze parametrisierte
Funktionen. Optimierungsverfahren zum Trainieren neuronaler Netze sind higher-order
Funktionen, die Parameter anhand von Trainingsdaten optimieren. Bei
der Nutzung gängiger Deep-Learning-Frameworks verschwindet die Grenze
zwischen dem mathematischen Modell und der Implementierung: Um das
Optimierungsverfahren zu realisieren, ist in der Regel eine komplexe
Maschinerie nötig, in der neuronale Netze state-behaftete Graphen sind, die zur
Laufzeit verwaltet werden müssen. Daran ist leider einiges
suboptimal. Neben praktischen Problemen ist das indirekte Programmiermodell mit
Graphen schwer zu verstehen, der Fokus auf numerische Arrays
verhindert Generalisierung, die Algorithmen sind kompliziert,
wesentliche Funktionalität der Programmiersprache kann nicht genutzt
werden.

Dank Conal Elliots Compiler-Plugin ConCat verschwindet in
Haskell das Graphen-Modell genauso wie die Beschränkung auf numerische
Arrays; die wesentlichen Konzepte werden sichtbar - Funktionen,
Optimierung und Ableitbarkeit. Das Plugin erlaubt eine generalisierte
Formulierung der Kernideen. Die Trennung der neuronalen Netze von ihrer Optimierung
erlaubt es z.B., separat über diese Aspekte nachzudenken und sie
unabhängig voneinander zu testen und zu verwenden. Ableitungen werden
automatisch zur Kompilierzeit generiert.

Der Vortrag gibt Einblicke in
Ansatz und Denkweise und enthält Erfahrungsberichte aus der
Entwicklung einer Applikation für Anomaly Detection in industrieller
Produktion.

### Raoul Schlotterbeck

Raoul Schlotterbeck ist Softwarearchitekt bei der Active Group GmbH
mit Schwerpunkt Datenanalytik. Er ist ausgebildeter Physiker. Bei der
Active Group verbindet er robuste mathematische Theorie mit
industrieller Anwendung.
