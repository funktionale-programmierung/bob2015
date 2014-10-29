---
layout: talk
active: bob2015
title: Wie speichert man terabyteweise Dokumente - oder der Ceph Object Store
speaker: Lukas Pustina, Daniel Schneller
time: 15:00-15:45
portrait: pustina.jpg
type: Vortrag
---

CenterDevice ist ein cloudbasiertes Dokumenten-Managementsystem, in
dem Kunden ihre Dokumente ablegen, durchsuchen und mit anderen teilen
können. Für diese Anwendung setzen wir grundsätzlich auf Open Source
Technologien. Von Beginn an war eine hochskalierbare und verteilte
Speicherung der Dokumente notwendig.

Große Datenmengen sind eine Herausforderung, der sich heute zunehmend
Entwickler stellen müssen. Während wir zunächst ein klassisches,
verteiltes Dateisystem genutzt haben, mussten wir mit zunehmender
Dokumentenmenge feststellen, dass diese Lösung nicht für Millionen von
Dokumenten geeignet ist. Aus diesem Grund haben wir das verteilte
Dateisystem gegen den Open Source Object Store ~Ceph~ ausgetauscht.

In diesem Vortrag möchten wir unserer Erfahrungen aufzuzeigen, wann
sich der Einsatz eines Object Stores lohnt und welche Implikationen
damit verbunden sind. Zunächst werden wir die ursprüngliche
Architektur zur Dokumentenspeicherung skizzieren und deren
Leistungsgrenzen aufzeigen. Anschließend werden wir das Open Source
Projekt Ceph als Object Store vorstellen, sowie darauf aufsetzende
Dienste wie das Swift / Amazon S3 kompatible Interface als auch das
Dateisystem CephFS. Darauf aufbauend sollen die konkreten Änderungen
unserer Anwendungsarchitektur beschrieben und so ein Evolutionspfad
aufgezeigt werden. Abschließend möchten wir unsere Leistungsbewertung
vorstellen und ggf. einen Einblick in unser Produktionssystem geben.

Am Ende unserer Vortrags sollen die Zuhörer zum Einen die Probleme der
Speicherung großer Datenmengen erkennen und zum Anderen selbst
entscheiden können, ob Ceph eine mögliche Technologie für ihre
Umgebung ist.

#### Lukas Pustina

Dr. Lukas Pustina hat langjährige Erfahrung in der Entwicklung und
dem Betrieb von verteilten Systemen. Er hat dabei stets ein Auge auf
neue Technologien in diesem Umfeld. Zur Zeit arbeitet er als Leiter
des Bereichs Infrastruktur bei der CenterDevice GmbH an der
Realisierung einer hochskalierbaren Cloudsoftware.

#### Daniel Schneller

Daniel Schneller beschäftigt sich seit über 15 Jahren mit dem Entwurf
und der Umsetzung komplexer Software- und Datenbanksysteme und ist u.
a. Autor des MySQL Admin Cookbook. Er leitet derzeit er bei der
CenterDevice GmbH den Bereich Mobile Development.
