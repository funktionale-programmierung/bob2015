---
layout: talk
active: bob2015
title: Praktische Erfahrungen mit GPU-Programmierung in Haskell
speaker: Henning Thielemann
time: 15:00-15:45
type: Vortrag
language: deutsch
---

Man hört in den letzten Jahren zunehmend von modernen massiv parallel
rechnenden Grafik-Prozessoren, die sich auch für nicht-grafische
Anwendungen einsetzen lassen.  Einsatzgebiete sind unter anderem
Wetter- und andere physikalische Simulationen, Molekülmodellierung und
Entschlüsselung von Passwörtern.  Für Haskell gibt es inzwischen
mehrere Bibliotheken ('accelerate', 'Obsidian', 'Nikola'), die die
Rechenleistung der Grafikkoprozessoren auf deklarative Weise nutzbar
machen. Das Accelerate-Projekt ist auf die Verarbeitung von
mehrdimensionalen Feldern (=Tensoren) zugeschnitten. Auf diese Weise
ist es abstrakt genug, um nicht nur Code für Grafikprozessoren sondern
auch für Hauptprozessoren und theoretisch auch für programmierbare
Logikbausteine (FPGA) zu erzeugen.  Für einen Kunden habe ich ein
Kalibrierungsverfahren zuerst mit hmatrix/LAPACK entwickelt und es
dann auf Accelerate/CUDA zur Ausführung auf Nvidia-Grafikprozessoren
übertragen. Auf diese Weise habe ich einen direkten Vergleich zwischen
beiden Ansätzen.  In meinem Vortrag möchte ich das Problem grob
vorstellen und über meine Erfahrungen bei der Lösung berichten.

#### Henning Thielemann

Ich habe von 1996 bis 2001 an der Martin-Luther-Universität
Halle-Wittenberg Informatik und Mathematik studiert, 2006 meine
Promotion zum Thema "optimal musterangepasste Wavelets" an der
Universität Bremen abgeschlossen und war bis 2012 PostDoc wiederum an
der Universität Halle. Mein Interesse galt stets ausdrucksstarken
Programmiersprachen, was mich über verschiedene Modula-Dialekte 2003
zu Haskell geführt hat. 2013 bin ich als Haskell-Experte in die
freiberufliche Selbständigkeit gestartet. Mein Interesse an
Anwendungen gilt mathematischen Problemen im Allgemeinen und
Audio-Signal-Verarbeitung im Besonderen.
