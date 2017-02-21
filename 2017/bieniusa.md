---
layout: talk
active: bob2017
title: Mehr Konsistenz für replizierte Daten!
speaker: Anette Bieniusa
portrait: annette-bieniusa.jpg
time: 11:45-13:15
type: Tutorial
language: german
head: 2017
---


Beim Programmieren von verteilten System müssen Entwickler sich einer
ganzen Reihe von Herausforderungen stellen.  Ein der schwierigsten
Herausforderungen besteht darin Daten konsistent zu halten, wenn diese
von mehreren Prozessen nebenläufig zugreifbar und modifizierbar sind.

Entwickler haben dabei typischerweise zwei Möglichkeiten: 

1. Die Updates werden mit Hilfe einer Metrik (z.B. Zeitpunkt der
   Updates) total geordnet. Bei diesem nicht-deterministischen
   Verfahren können allerdings Daten verlorengehen.

2. Alle Updates werden gespeichert und die Konfliktauflösung wird an
   den App-Entwickler bzw. Nutzer delegiert. Diese ad-hoc
   Konfliktauflösung ist in der Regel aber nicht-trivial und ist oft
   fehlerhaft implementiert.

Konflikt-freie replizierte Datentypen (CRDTs) bieten eine alternative
Lösung.  Diese Datentypen implementieren eine deterministische
Konfliktauflösung, beispielsweise über eine dedizierte
Merge-Funktion. Dies gestattet dem Entwickler sich auf die
Datenmodellierung zu konzentrieren.

In meinem Tutorial gebe ich eine Einführung in eine Open-Source
Bibliothek für CRDTs in Erlang.  Die Semantik der verschiedenen
Datentypen und ihrer Strategien zur Konfliktauflösung werden wir
anhand von Beispielen diskutieren und dabei verstehen, wie CRDTs in
einer verteilten Anwendung zum Einsatz kommen können.

### Vorbereitung

Es gibt ein Docker-Image mit allem, was für das Tutorial nötig ist.
Es wird installiert mit:

`docker run -i -t cmeiklejohn/crdt-tutorial`  

### Annette Bieniusa

Annette Bieniusa ist Akademische Rätin an der TU Kaiserslautern in der
Arbeitsgruppe Software-Technik. Ihr Forschungsgebiet ist die Semantik
verteilter und nebenläufiger Systeme, mit einem Fokus auf
(Geo-)Replikation, Synchronisation und Programmiersprachenkonzepte zur
Konsistenz.

