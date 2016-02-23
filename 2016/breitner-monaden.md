---
layout: talk
active: bob2016
title: Mit Monaden die Zukunft im Blick
speaker: Joachim Breitner
portrait: joachim-breitner.jpg
time: 14:15-15:00
type: Vortrag
slides-link: http://joachim-breitner.de/publications/MonadFix_BobKonf2016_2016-02-19.pdf
youtube: BQzJqdNASyg
language: german
---

Man muss keine Monaden kennen, um Haskell zu programmieren, denn es
ist nur eine Abstraktionsschicht, also ein Muster, mit dem man seine
Programme strukturiert. Als solches aber ein sehr erfolgreiches, und
mit der richtigen Monade werden komplizierte Programmieraufgaben
plötzlich einfach, übersichtlich und weniger fehlerträchtig.

Eine oft übersehene Variante der Monade wird durch die
`MonadFix`-Typklasse beschrieben: Monaden, in denen sich Fixpunkte
berechnen kann. Damit kann man, in gewisser Weise, Werte benutzen, die
erst später berechnet werden.

In einer Live-Coding-Sitzung zeigt Joachim Breitner, wie er dank einer
selbstgestrickten Monaden die Ausgabe eines Binär-Datenformates
„schön“ implementiert, wie er dem mit MonadFix den letzten Schliff
gibt, und warum das eigentlich überhaupt funktionieren kann.

Dieser Vortrag ist kein Monaden-Tutorial, sondern spricht eher jene an,
die ein solches schon einmal bearbeitet haben und nun sehen wollen, wie
man dieses Programmiermuster in der Praxis erfolgreich einsetzt. Wer
mit Monaden noch nicht gearbeitet hat, kann natürlich entweder schnell
mitdenken, oder sich einfach nur vom Ergebnis beeindrucken lassen.

### Joachim Breitner

Joachim Breitner ist Doktorand am Lehrstuhl für Programmierparadigmen
des Karlsruher Instituts für Technologie und forscht zu Haskell,
insbesondere zu optimierenden Programmtransformationen und deren
Verifikation mit Hilfe des interaktiven Theorembeweisers Isabelle.

Als Hüter der Haskell-Pakete in Debian, als Mitentwickler des
Compilers GHC und Mitglied des Haskell Core Library Committees ist er
ein aktives Mitglieder der internationalen Haskell-Community. Zuletzt
war er an der Einführung der „Safe Coercions“ beteiligt, und die von
ihm entwickelte Optimierung „Call Arity“ lässt den Compiler noch mehr
Listen mittels list fusion eliminieren. Er betreibt das
[Haskell performance dashboard](http://perf.haskell.org), das die
Performanceentwicklung des GHCs und anderer Projekte überwacht.

Joachim tanzt Swing und fliegt, wenn das Wetter es erlaubt, Gleitschirm.
