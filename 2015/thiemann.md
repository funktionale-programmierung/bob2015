---
layout: talk
active: bob2015
title: Moderne typsichere Web-Entwicklung mit Haskell
speaker: Alexander Thiemann
portrait: thiemann.jpg
time: 11:30-13:00
type: Tutorial
language: german
---

Funktionale Programmierung und Haskell wachsen schneller denn je zuvor und
eignen sich als großartige Werkzeuge um kleine und große robuste
Anwendungen zu schreiben. Viele Webanwendungen starten als kleiner und
einfacher Prototyp; wachsen dann schnell und werden immer komplexer.
Deshalb benötigt man ein Werkzeug das schnelle Entwicklungsgeschwindigkeit
und gute Performance bietet - ohne dass die Entwickler von Komplexität
überwältigt werden und dabei beispielsweise triviale Sicherheitsprobleme
übersehen. Haskell ist die perfekte Lösung dafür: Das Typsystem der Sprache
leitet den Entwickler auch bei großen Refactorings sicher zum Ziel
und verhindert dabei diverse verschiedene Sicherheitslücken.

Das Tutorial soll eine Einleitung in Webprogrammierung mit Haskell und dem
Framework "Spock" geben. Dabei werden verschiedene Themen und Möglichkeiten
wie zum Beispiel typsichere Routen, Hyperlinks, Datenbankabfragen,
Templates und JSON parsen/generieren besprochen. Außerdem wird auf
REST-Schnittstellen und Background-Worker eingegangen. Als Referenzprojekt
dient eine kleine Bloganwendung mit Features wie Posten, Kommentieren,
Spamverarbeitung und E-Mail-Newsletter.

### Vorbereitung

1. Haskell-Plattform von [`https://www.haskell.org/platform/`](https://www.haskell.org/platform/) installieren

2. Cabal installieren

       cabal install cabal-install

3. Repository holen

       git clone https://github.com/agrafix/funblog.git

4. Dependencies installieren

       cd funblog
	   <path>/cabal sandbox init
	   <path>/cabal install -j8 —only-dependencies`

5. Projekt einmal bauen

	   <path>/cabal configure
	   <path>/cabal build

Dabei ist `<path>` auf Unix/Mac-Systemen `~/.cabal/bin/cabal`, auf
Windows-Systemen `<drive>:\<username>\AppData\Roaming\cabal\bin`.

Außerdem lohnt es sich noch den Haskell-Mode für den entsprechenden
Editor zu
installieren. [Hier](https://www.haskell.org/haskellwiki/Editors) ist
eine Liste.

### Alexander Thiemann

Alexander Thiemann studiert an der Albert-Ludwigs-Universität Freiburg
Informatik. Er arbeitet nebenbei als Haskell/iOS/JavaScript-Entwickler
bei der factis research GmbH. Außerdem ist er Gründer eines StartUps
für Straßenbahntechnologie und Maintainer des Haskell-Webframeworks
Spock.
