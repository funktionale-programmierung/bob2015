---
layout: talk
active: bob2022
title: Einführung in Scala 3
speaker: Simon Härer
portrait: haerer.jpg
time: 14:15-15:50
type: Tutorial
language: german
head: 2022
---

Nach 8 Jahren, 28000 Commits und 7400 Pull-Requests war es am 14. Mai
2021 endlich so weit: Scala 3 wurde veröffentlicht. Neben dem neuen
Compiler „Dotty“ haben es eine neue Syntax sowie einige Neuerungen an
der Sprache in Scala 3 geschafft.

In diesem Tutorial werden die Neuerungen aus Scala 3 vorgestellt und
gemeinsam erkundet. Dabei gehen wir unteranderem auf die neue Syntax
ein, lernen die "neuen Implicits" kennen und erfreuen uns an den
schlanken algebraischen Datentypen-Definitionen. Dabei wird stets im
Auge behalten, wo wir aus Scala 2 herkommen und warum die Reise in
Scala 3 diesen Weg nahm.

Dieses Tutorial richtet sich an alle, die in Scala 2 zwischen implcits
und sealed traits erweitert mit Product with Serializable verloren
waren. Für Teilnehmer ohne Scala-2-Erfahrung gibt es zu Beginn in
Windeseile einen kleinen Syntax-Crashkurs.


### Vorbereitung

Alle Teilnehmenden sollen aktiv mitprogrammieren und werden während
des Tutorials auch regelmäßig dazu animiniert - es sollte niemand auf
der Strecke bleiben. Damit wir sofort beginnen können, sollten alle
eine fertige Umgebung parat haben, um Scala 3 programmieren und Code
ausführen zu können.

Das Tutorial wird in VS Code abgehalten, aber natürlich dürfen auch
andere Editoren verwendet werden. Auto-Vervollständigung ist
allerdings sehr hilfreich. Daher die folgenden Einstiegspunkte,
um ein funktionierendes Setup hinzubekommen:

1. **Scala 3 installieren**

   <https://docs.scala-lang.org/scala3/getting-started.html>
   
   Zusammenfassung:
   
   - `cs setup` ausführen
   - `sbt new scala/scala3.g8` ausführen und "hello-world" als Name
     eingeben
   - Zur Überprüfung `sbt run` im erzeugten Verzeichnis eingeben

     .

2. **VS Code installieren**

    <https://code.visualstudio.com/download>

   Zusammenfassung:
   
   - VS Code herunterladen und installieren
   - Die Erweiterung
     [Scala Metals](https://marketplace.visualstudio.com/items?itemName=scalameta.metals) installieren
   - Zum Überprüfen "hello-world"-Beispielprojekt über "File -> Open
     Folder" öffnen
     


### Simon Härer

Simon Härer ist Softwarearchitekt bei der Active Group GmbH. Sein
besonderes Interesse gilt der funktionalen Programmierung,
Entwicklungsmethodiken und Softwarearchitektur.
