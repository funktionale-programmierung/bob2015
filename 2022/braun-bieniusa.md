---
layout: talk
active: bob2022
title: Keeping CALM – Konsistenz in verteilten Systemen leichtgemacht
speaker: Susanne Braun, Annette Bieniusa
portrait: braun.jpg
portrait2: bieniusa.jpg
time: 
type: Vortrag
language: german
head: 2022
---

Eric Brewers CAP-Theorem besagt, dass im Falle von Netzwerkpartitionen
nur eine von zwei Garantien erreicht werden kann: Konsistenz oder
Verfügbarkeit. Zehn Jahre später legt Joseph Hellerstein das
CALM-Theorem nach, und beweist das, was wir eigentlich schon immer
alle schon geahnt haben: Im Falle von Netzwerkpartitionen sind
Konsistenz UND Verfügbarkeit unter bestimmten Bedingungen eben doch
möglich! Wie das geht, zeigen wir euch in diesem Vortrag, und nehmen
euch mit auf eine Journey vom CAP-Theorem hin zum CALM-Theorem. Wir
räumen mit gängigen Mythen auf und zeigen euch, wie ihr das
CALM-Theorem praktisch anwenden könnt. Basierend auf unseren
empirischen Erfahrungen aus verschiedenen Studien (Case Studies und
Action Research Studies) und unserer laufenden Forschung entwickeln
wir Architektur-Empfehlungen und Entwurfsmuster für das Design von
daten-intensiven, verteilten Anwendungen. Der Vortrag gibt konkrete
Hilfestellungen für Architekt:innen, demonstriert Entwurfsmuster mit
laufendem Code und teilt mit den Teilnehmern unsere frei verfügbaren
open access Architektur-Guidelines. 

In dem Vortrag lernen die Teilnehmer:

* wie die Design Patterns im Rahmen des Software Designs angewendet werden können
* grundlegendes Verständnis für die Pitfalls im Zusammenhang mit Daten-Konsistenz und Nebenläufigkeit
* wie die Patterns und Best Practices zusammen mit Domain-Driven
  Design angewendet werden können 
  
Paper: [Tackling Consistency-Related Design Challenges of Distributed Data-Intensive Systems](https://arxiv.org/pdf/2108.03758.pdf)

### Susanne Braun

[@susannebraun](http://www.twitter.com/susannebraun)

Susanne ist Entwicklerin, Software-Architektin und Forscherin am
Fraunhofer IESE. Sie hat mehr als 10 Jahre professionelle Erfahrung
und war lange Zeit für Capgmeini sd&m und die Accso GmbH tätig, bevor
sie zu Fraunhofer wechselte. In ihrer PhD erforscht sie wie man zu
besseren Software-Architektur-Konzepten für verteilte Systeme kommt,
die mit Eventual Consistency klarkommen müssen. Sie spricht regelmäßig
auf Konferenzen, ist aktives Mitglied der Java User Group Community,
Mitglied im Programm-Komitee der JavaLand, Co-Organisatorin der
CyberLand Events.

### Annette Bieniusa

[@anne_biene](http://www.twitter.com/anne_biene)

Annette ist [akademische Oberrätin an der TU Kaiserslautern](https://softech.informatik.uni-kl.de/homepage/de/staff/AnnetteBieniusa/) in der AG
Softwaretechnologie. Sie forscht und lehrt zur Semantik verteilter und
nebenläufiger Systeme, mit einem Fokus auf (Geo-)Replikation,
Synchronisation und Programmiersprachenkonzepte. Sie leitet u.a. die
Entwicklung der geo-replizierten Datenbank AntidoteDB und ist Senior
Technical Advisor der Concordant-Platform, in der Techniken zu
hochskalierbaren, konsistenten Datenhaltung für Cloud und Edge
implementiert sind.


