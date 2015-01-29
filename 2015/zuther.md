---
layout: talk
active: bob2015
title: Microservices und die Jagd nach mehr Konversion - Fluch oder Segen für den Entwickler
speaker: Bernd Zuther
time: 10:15-11:00
portrait: zuther.jpg
type: Vortrag
language: german
slides-link: slides/zuther/slides/02_bobkonf/index.html
---

Softwareentwicklung wandelt sich derzeit: Es reicht nicht mehr
Produktinkremente potenziell produktiv zu setzen, sondern Änderungen
müssen produktiv gehen. Um in gesättigten Märkten noch Innovationen
hervorzubringen und neues Wachstum zu generieren, arbeiten
Fachabteilungen immer öfter mit Lean-Startup-Methoden. Eine Methode im
Lean-Startup ist die Bildung von Hypothesen, die durch Tests validiert
werden. Dazu wird Software in unterschiedlichen Varianten ausgespielt
und dann beobachtet, wie Kunden auf eine Änderungen reagieren. Je nach
Test-Ergebnis werden Teile der Software dann wieder entfernt oder
angepasst. Somit ist es wichtig Software schnell an den an den
Anwender zu bringen.

Software schneller in Produktion zu bringen, ist mit den meisten
Softwarearchitekturen nicht so einfach. Häufig existieren
monolithische Anwendungen, die kompliziert zu installieren sind und
bei denen für kleine Änderungen die Koordination von vielen Teams
nötig ist. Um Teile der Software zu entkoppeln und
Koordinationsaufwand zwischen den Teams zu verringern, wird häufig
vorgeschlagen eine Applikation in kleine Dienste zu zerlegen, oft kurz
Microservice-Architektur genannt.

Wir sehen uns an Hand eines konkreten Beispiels an, wie man eine
bestehende Architektur in eine Mircroservice-Architektur überführen
kann und welche Konsequenzen dies auf technischer Ebene hat. Zum
Beispiel führen Microservices zu mehreren Deployment Pipelines und man
braucht Konzepte die unterschiedlichen Teile der Software auch schnell
auf unterschiedlichen Rechner provisionieren zu können. Außerdem
sollte man sich Gedanken zum Thema Logging und dem Monitoring im
Betrieb machen, denn sonst kann der Betrieb eines solchen
hochverteilten Systems schnell zur Qual werden.


#### Bernd Zuther

Bernd Zuther ist Spring Spezialist und als Berater für die codecentric
AG tätig. Er ist vorwiegend in Kundenprojekten im Java-Enterprise
Bereich unterwegs. Neben seiner Berater-Tätigkeit engagiert er sich
vor allen in den Big Data und NoSQL sowie Continuous Delivery.
