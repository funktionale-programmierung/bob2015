---
layout: talk
active: bob2018
title: "FIX-Engine in zwei Wochen"
speaker: Maxim Minin
type: Vortrag
language: german
head: 2018
time: 12:50-13:35
portrait: maxim-minin.jpg
---


Durch stetig fortschreitende Globalisierung und Regulierung herrscht
in der Finanzwelt einerseits der enorme Kostendruck, andererseits die
wachsende Kommunikationsprotokollevielfalt. Unter diesen Umständen
muss der Entwickler bei der Implementierung der Börsenschnittstellen
sehr effizient sein. Meistens stellen die Börsenbetreiber die
Beschreibungen der Schnittstellen und Datenformate im XML-Format zur
Verfügung, so dass die Konverter automatisch generiert werden können.
Um anschließend die Korrektheit des generierten Programms überprüfen
zu können, bietet sich Property Based-Testing an. Die Ziel-Eigenschaft
ist dabei sehr einfach und gleichzeitig sehr mächtig - „decode(encode
(A)) == A“. In dem Vortrag wird erläutert, worauf es dabei ankommt und
was insbesondere beachtet werden muss. Als Beispiel wird eine
Erlang-Implementierung einer FIX-Engine angesehen. Dabei werden sowohl
die persistenten (Codegenerierung vor der Laufzeit) als auch
dynamischen (Parsetransform) Varianten der generativen Programmierung
vorgestellt, sowie deren Vor- und Nachteile behandelt.

## Maxim Minin

Maxim Minin studierte von 2003 bis 2007 an der Goethe-Universität
Frankfurt am Main Wirtschaftsinformatik. Bereits während des Studiums
sammelte er erste Erfahrungen in der Entwicklung von Handelssystemen
und als Eurex-Händler. Nach erfolgreich abgeschlossener Diplomarbeit
arbeitete er bei einem der ältesten Wertpapierhäusern Deutschlands,
bis er sich entschieden hat, das Softwareteam der Baader Bank AG zu
verstärken. 2015 übernahm er die Leitung von „Trading Systems“ der
Baaderbank AG.

