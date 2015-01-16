---
layout: talk
active: bob2015
title: Funktionale Konzepte bei der Entwicklung von Benutzeroberflächen
speaker: Roger Gilliar
time: 14:00-15:30
portrait: gilliar.jpg
type: Tutorial
language: german
---

Funktionale Konzepte bei der Entwicklung von Benutzeroberflächen? ist
das nicht ein Wiederspruch in sich? Benutzeroberflächen benötigen
Zustand (state) den man, zumindest bei der rein funktionalen
Programmierung, vermeiden möchte. Wenn man Zustand also schon nicht
vermeiden kann, sollten zumindest Konzepte vorhanden sein, um Zustand
und vor allem Zustandsänderungen, strukturiert durchführen zu
können. ClojureScript bietet hier mit der von Clojure bekannten
Trennung von Value, Identity und State genau die passende Struktur,
die, wie der Zufall es so will, hervorragend zu den Konzepten von
React.js passt. React.js ist eine von Facebbook entwickelte Library
die sich rein auf den View-Layer beschränkt und mit einigen
innovativen Details aufwarten kann. Diese Details und das
Zusammenspiel zwischen ClojureScript und React.js sind Thema des
Workshops. Zum Ende des Workshops haben Sie die Grundlagen von
React.js und ClojureScript verstanden und eine (kleine) Anwendung zur
Darstellung von Präsentationen in Browser entwickelt.

### Vorbereitung

Kenntnisse in zumindest einer funktionalen Programmiersprache werden
vorausgesetzt.  Außerdem:

Java 1.7 installiert, Leiningen installiert
([`http://leiningen.org`](http://leiningen.org)). Dann bitte:

	lein new mies-om hello-world
	cd hello-world
	lein deps
	lein cljsbuild auto

jeweils in der Kommandozeile ausführen, damit schonmal alle
Abhängigkeiten geladen werden.

### Roger Gilliar

Roger Gilliar ist Autor, Ausbilder und Senior-Software-Engineer bei MCS in
Hamburg. Sein Schwerpunkt liegt schon seit mehr als 10 Jahren beim Einsatz
von Java- und JavaScript-Technologien.
