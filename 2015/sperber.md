---
layout: talk
active: bob2015
title: Streifzug durch Clojure
speaker: Michael Sperber
time: 11:30-13:00
portrait: sperber.jpg
type: Tutorial
language: german
---

Clojure ist neben Scala die führende funktionale Programmiersprache
für die Java-Plattform.  Clojure ist eine konsequente
Weiterentwicklung der Ideen von Lisp: Es erbt die Lisp-artige
Klammernsyntax, die besonders leicht zu erlernen und merken ist ebenso
wie die hochdynamische Programmierumgebung.  Im Unterschied zu Lisp
setzt Clojure aber konsequent auf persistente Datenstrukturen und
moderne Mechanismen für Nebenläufigkeit und Parallelität.  Das Tutorial
gibt einen Streifzug durch durch die Sprache Clojure und das
dazugehörige Ökosystem.

### Vorbereitung

Teilnehmer, die den Beispielen folgen wollten, sollten vorher auf
ihrem Rechner ein [JDK
installieren](http://www.oracle.com/technetwork/java/javase/downloads/index.html)
und dann die Tools [Leiningen](http://leiningen.org/) und
[Nightcode](https://nightcode.info/).  Es ist außerdem empfehlenswert,
folgende Befehle laufenzulassen:

	lein new clojure-test
	cd clojure-test
	lein test

Der letzte Befehl sollten Output mit einem fehlgeschlagenen Testfall
produzieren.

### Michael Sperber

Michael Sperber ist CTO der Active Group GmbH.  Er ist international
anerkannter Experte für funktionale Programmierung und wendet sie seit
20 Jahren in Forschung, Lehre und industrieller Entwicklung an.
Außerdem hat er zahlreiche Fachartikel und einige Bücher zum Thema
verfasst.  Michael Sperber ist Mitbegründer des Blogs
[funktionale-programmierung.de](http://funktionale-programmierung.de/)
und Mitorganisator der BOB.
