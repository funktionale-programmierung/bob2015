---
layout: talk
active: bob2020
title: Graphen@Problemlösen
speaker: Holger Tiemeyer
portrait: holger-tiemeyer.jpg
time: 12:00-13:30
type: Tutorial
language: german
head: 2020
---

Systemausprägungen und Anforderungen können multidimensionalen
Ausprägungen unterliegen: Zigtausende Confluence-Seiten, endlos lange
JIRA-Boards, hunderte Microservices, Cloud-Umgebungen etc. 
Der Einstieg in solche ein Projekt oder solch eine Domäne stellt uns
als Softwareentwickler oder -architekt oft vor enorme
Herausforderungen: Wir müssen diese Domänen schnell erfassen, um
Lösungen für anfallende Anforderungen und Aufgaben zu finden. Oft
genug stehen wir vor der Frage: Wie gehe ich jetzt an das Problem
heran? Wo ist der Schlüssel zur richtigen Lösung?
Dabei gibt es eine einfache Möglichkeit der Abstraktion: Graphen – ein
miteinander durch Pointer (Zeiger) verbundenes Informationsgeflecht.
Diese Pointer sind eine Basisgeste des Menschen und stellen das am
stärksten ausgeprägten Visualisierungs-Tool dar. Mit minimalem
Informationsverlust lassen sich hiermit die besten Lösungswege für ein
Problem finden.

In diesem Tutorial wollen wir Lösungen anhand graphenbasierter
Modellierung erproben: Wie können wir sie effektiv einsetzen? Wie
können wir mit ihnen Problemlösungsbarrieren überwinden und anhand von
effektiver Informationsvisualisierung unsere Problemdomänen erklären
und erfassen?

## Vorbereitung

Voraussetzung: Installiertes JDK 8+

1. Download der [Neo4J-Community-Edition](https://neo4j.com/download-center/#community)

2. Zip in ein Verzeichnis entpacken und unter `<neo4j-home>/bin` die
   folgende Befehle aufrufen  
   Windows:  
```
.\neo4j.bat install-service
=> Neo4j service installed
.\neo4j.bat start
=> Neo4j service started
```
 Linux/Unix/macOS:
```
./neo4j start
=> Neo4j service started
```
 
3. Im Browser die Seite:
   [`http://localhost:7474`](http://localhost:7474) aufrufen.  
   Username (default): `neo4j`  
   Password: `neo4j`

## Holger Tiemeyer

Holger Tiemeyer ist Senior Software-Architekt bei der Pentasys AG

Holger Tiemeyer hat an der Universität Hamburg Informatik mit
Nebenfach Psychologie studiert.
Er realisiert in der Rolle als Senior Software-Architekt
unterschiedliche Projekte in verschiedenen Enterprise-Kontexten bei
der Pentasys AG. Seine Hauptaufgabe liegt in dem Entwurf und der
Umsetzung von komplexen Softwarearchitekturen. 
Er ist Mitglied im iSAQB e.V. und leitet dort die Arbeitsgruppe
Hochschulen.
