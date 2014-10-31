---
layout: talk
active: bob2015
title: Clojures Implementation von STM
speaker: Stefan Kamphausen
time: 16:15-17:00
portrait: kamphausen.jpg
type: Vortrag
---

In Clojure, der Lisp-artigen, funktionalen Programmiersprache auf der
JVM, die einen starken Fokus auf nebenläufige Programmierung setzt,
findet sich eine Implementierung von Software Transactional Memory (STM).

STM koordiniert transaktionale Änderungen an mehreren Datenstrukturen
in einem multi-threaded Kontext und befreit die Entwicklerin von der
fehleranfällige Verwaltung von Locks.  Somit vereinfacht STM die
nebenläufige Programmierung.

Dieser Vortrag beschreibt die Funktion und Verwendung von Clojures STM
und beleuchtet darüber hinaus, wie verschiedene Design-Entscheidungen
in Clojure zusammenwirken, um schließlich Clojures Implementierung von
STM zu erlauben.  Das dafür notwendige Verständnis, wie Clojure das
Fortschreiten der Zeit modelliert, wird ebenso vermittelt wie
Implementationsdetails und Fallstricke.

#### Stefan Kamphausen

Stefan Kamphausen is a long-time Lisp addict which is reflected by
several articles and talks on Emacs and Clojure and his authoring of
the first German Clojure book.

Currently he works at Acrolinx in Berlin, focussing on DevOps and
natural language processing.
