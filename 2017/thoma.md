---
layout: talk
active: bob2017
title: Shell-Scripting mit Haskell
speaker: Franz Thoma
portrait: franz-thoma.jpg
time: 11:45-12:30
type: Vortrag
language: german
head: 2017
slides-file: thoma.pdf
youtube: 6MJ2jlY2-R4
---

Scripting in Hochsprachen bringt gegenüber blankem Shell-Scripting viele
Vorteile wie Modularität oder Verwendung von existierenden Libraries.
Vor allem dynamisch typisierte Sprachen wie Python sind dafür sehr
beliebt. Statisch typisierte Sprachen erhöhen zudem die Wartbarkeit
durch das Abfangen von Fehlern zur Compile-Zeit, sind aber oft weniger
flexibel einzusetzen.

Für Haskell gibt
es [turtle](https://github.com/Gabriel439/Haskell-Turtle-Library), ein
Framework von Gabriel Gonzalez zum Schreiben von
Shell-Skripten. Standard-Befehle wie `ls` und `cd` werden emuliert oder an
das Betriebssystem delegiert, Pipes bekommen dank `do`-Notation
Steroide, und Kommandozeilenparameter werden deklarativ definiert und
automatisch geparst – mit kostenloser Bash-Completion.

### Franz Thoma

ist ursprünglich Physiker und arbeitet als Consultant und
Softwareentwickler bei TNG Technology Consulting in München. Dort hat
er sich mit Compilerbau und domänenspezifischen Sprachen beschäftigt
und dabei sein Interesse für funktionale Sprachen und Typsysteme
entdeckt.

In Haskell hat er eine robuste und elegante Sprache gefunden, wenn es
um Skripting und Tooling für die Erleichterung der täglichen Arbeit
geht. Zudem nutzt er Haskell auch gerne als Thinking Tool, um
Problemstellungen und Lösungsansätze zu formulieren.
