---
layout: talk
active: bob2015
title: Clojures Implementation von STM
speaker: Stefan Kamphausen
time: 16:15-17:00
portrait: kamphausen.jpg
type: Vortrag
language: german
slides-link: https://github.com/ska2342/de.skamphausen.bobkonf15
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

Stefan ist Director DevOps & NLP bei der Firma Acrolinx in Berlin. Er
ist Autor des deutschen Clojure Buchs und ein langjähriger Liebhaber der
Familie der Lisp-artigen Programmiersprachen.
