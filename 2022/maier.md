---
layout: talk
active: bob2022
title: "$HOME Improvement mit Nix"
speaker: Johannes Maier
portrait: maier.jpg
time: 11:45-13:20
type: Tutorial
language: german
head: 2022
---

## Eine portable, reproduzierbare Entwicklungsumgebung - geht das?

Als Entwickler:innen müssen wir oft unsere gewohnte Umgebung auf neuen
Systemen einrichten — eventuell mit Betriebssystemwechsel. Um den
Prozess zu vereinfachen, sind bspw. git-Repositorien beliebt, die die
Konfigurationsdateien beinhalten, oder Tools wie GNU Stow. Was dann
allerdings noch fehlt, ist die eigentliche Software, für die man
üblicherweise den Weg über den betriebssystemeigenen Paket-Manager
beschreitet.

[home-manager](https://github.com/nix-community/home-manager) ermöglicht es, User-Environments mithilfe der
Programmiersprache Nix deklarativ zu beschreiben. Dies betrifft sowohl
Konfigurationsdateien im Home-Verzeichnis als auch die zugehörigen
Softwarepakete. Diese Umgebung ist dann mit wenigen Befehlen
installierbar - inklusive Rollback-Funktionalität.

Es wird eine kurze Einführung in die Nix-Programmiersprache
geben. Anschließend transformieren wir gemeinsam ein bestehendes
Home-Verzeichnis und versionieren das Ergebnis (mit git). Ein
Highlight ist die deklarative Spezifikation von E-Mail-Accounts, die
das komplexe Tooling in diesem Bereich vereinheitlicht.

Die Teilnehmer:innen können Wünsche äußern, welche weiteren Programme
aufgenommen werden sollen.

### Vorbereitung

Wer nebenbei ein bisschen mitexperimentieren möchte, benötigt
funktionierende Installationen von Nix und home-manager (prinzipiell
mindestes auf Linux, macOS und auch WSL2 möglich). Anleitungen dazu
findet ihr hier:

- [Nix](https://nixos.org/download.html#download-nix)
- [Home-Manager](https://nix-community.github.io/home-manager/index.html#sec-install-standalone)

### Johannes Maier

[@kenran__](https://twitter.com/kenran__)

Johannes Maier ist Softwarearchitekt bei der Active Group GmbH in
Tübingen. Dort arbeitet er mit funktionalen Progammiersprachen,
vorzugsweise Haskell, und nutzt dabei Nix, um komplexe Abhängigkeiten
zu bändigen und Continuous Deployment zu erreichen. Wenn er nicht
gerade mit seinen Kindern Lego baut, lötet er an seiner nächsten
Tastatur oder konfiguriert Emacs.
