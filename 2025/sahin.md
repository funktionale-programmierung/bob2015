---
edition: 2025
layout: talk
active: bob2025
title: "Resiliente Systeme entwickeln mit Elixir: Fehlertoleranz von Grund auf"
speaker: Kaan
time: 13:00–14:30
type: Tutorial
language: german
head: 2025
portrait: sahin.jpg
---

In diesem Tutorial wird praxisnah vermittelt, wie mit Elixir stabile und fehlertolerante Systeme gestaltet werden können. Zu Beginn nehmen wir das GenServer-Modul und dessen Funktion im Umgang mit Zustand und Nebenläufigkeit genauer unter die Lupe. Anschließend setzen wir ein einfaches, fehleranfälliges Prozessmodell um, das bewusst Schwachstellen enthält, die typisch für reale Produktionsumgebungen sind und die die Stabilität eines Systems beeinträchtigen können.

Nachdem typische Ausfallszenarien identifiziert sind, optimieren wir das Prozessmodell durch den gezielten Einsatz von Supervisor-Strategien. So wird nach und nach eine robuste Struktur aufgebaut, die Fehler isoliert und Prozesse bei Bedarf automatisch neu startet. Durch den Einsatz von Supervision Trees und kontrollierten Neustarts lässt sich ein resilientes System entwickeln, das auch unter hoher Last zuverlässig läuft und im Ernstfall eine selbstheilende Architektur aufweist.

Dieses Tutorial richtet sich an Entwickler*innen, die das robuste Systemdesign mit Elixir kennenlernen möchten und nachvollziehen wollen, wie man stabile Anwendungen für anspruchsvolle Einsatzbereiche konzipiert.

### Vorbereitung

Um aktiv am Tutorial teilnehmen zu können, sollte Erlang und Elixir lokal installiert sein.

### Kaan

Kaan ist Softwarearchitekt bei der Active Group GmbH in Tübingen, die Software ausschließlich mit funktionaler Programmierung entwickelt. Wenn Kaan nicht gerade in einem Clojure-Projekt mit einem Lisp-Dialekt zugange ist, werkelt er in Emacs Lisp an seiner Emacs-Konfig herum.

Zudem hält Kaan Schulungen zur funktionalen Programmierung.
