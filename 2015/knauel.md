---
layout: talk
active: bob2015
title: A Database Application Without NoSQL And SQL - An Experience Report
speaker: Eric Knauel
time: 14:00-14:45
portrait: knauel.jpg
type: Vortrag
language: german
---

Relationale Datenbanken sind das Rückgrat und zentrale Element vieler
traditioneller Geschäftsanwendungen im Umfeld großer Firmen. Im
Quellcode solcher Anwendungen nimmt der Anteil des Codes, der sich mit
der Zusammenstellung von SQL-Abfragen und der Bearbeitung von
Suchergebnissen beschäftigt einen unverhältnismäßig großen Anteil
ein. Ein Grund ist die mangelhafte Komposonalität von SQL-Abfragen:
Abfragen und Ausdrücke zu einer Abfrage zusammenzufügen kann zur
echten Herausforderung werden. Die mangelnde Abstraktionsfähigkeit von
SQL ein Hindernis bei der Entwicklung von Software, die
unterschiedliche Datenbank-Produkte unterstützen muss.

Dieser Vortrag zeigt wie die Verwendung von SQL durch eine
kompositionale domänenspezifische Abfragesprache auf Basis von
relationaler Algebra ersetzt werden kann. Ziel ist es den
Anwendungscode frei von SQL zu halten und von Detail-Wissen über die
Funktionsweise des Datenbank-Modells und der Datenbank-Software zu
befreien. Für die Übersetzung in effizientes SQL wird ein
optimierender Compiler vorgestellt, der den Anforderungen eines
produktiven Einsatzes gewachsen ist. Der Vortrag zeigt zudem, wie der
durchgängige Einsatz der Abfragesprache die Flexibilität der Anwendung
steigert.

Die vorgestellte Abfragesprache und der Query-Compiler gehören zum
Kern der Enterprise-Content-Management-Suite ImageMaster, die von
T-Systems International GmbH hergestellt wird und in zahlreichen
Produktivumgebungen zum Einsatz kommt.

#### Eric Knauel

Dr. Eric Knauel ist seit 2008 Software-Architekt bei T-Systems
International GmbH in Leinfelden-Echterdingen.  Er arbeitet
schwerpunktmäßig in der Produktentwicklung des Kernes der
Enterprise-Content-Management-Suite ImageMaster.

Von 1997 bis 2008 hat er in Tübingen Informatik studiert und war
wissenschaftlicher Angestellter im Arbeitsbereich Programmiersprachen
und Compilerbau. 2008 hat er seine Dissertation zum Thema
Kontrollflußanalysen für Programmiersprachen höherer Ordnung fertig
gestellt.
