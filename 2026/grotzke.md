---
layout: talk
active: bob2026
title: "Zuverlässig laden – Reactive Systems im Einsatz für E-Mobility"
speaker: Martin Grotzke
time: 17:50–18:35
type: Talk
language: german
head: 2026
portrait: grotzke.webp
---

Wer ein Elektroauto lädt, erwartet, dass alles einfach funktioniert: App öffnen, Ladesäule anschließen, Strom fließt. Hinter diesem scheinbar simplen Vorgang steckt jedoch ein kompliziertes, verteiltes System mit hohen Zuverlässigkeitsanforderungen – von der App über Backend-Services bis zur Ladesäule.

eRound ist eine Plattform für Ladeinfrastruktur-Betreiber, ein sogenanntes Charge-Point-Management-System (CPMS). An dieser Plattform zeige ich, wie solche Systeme unter realen Bedingungen zuverlässig und reaktiv bleiben. Im Vortrag beleuchte ich den vollständigen Ablauf eines Ladevorgangs – von der E-Mobility-App über das CPMS bis zur Ladesäule – sowie die zugrundeliegende Architektur von eRound mit Microservices auf Kubernetes, Kafka-Integration und Quarkus auf der JVM.

Im Zentrum steht die Frage: Wie erreichen wir Resilienz, Skalierbarkeit und Reaktionsfähigkeit in einem Umfeld, in dem Netzabbrüche, Hardwarefehler und externe Abhängigkeiten die Regel sind? Das Reactive Manifesto bietet dafür hilfreiche Leitlinien, die in eRound praktisch umgesetzt sind – von asynchroner Kommunikation über Event-Streaming bis automatischer Recovery.

Der Vortrag vermittelt technische Einblicke auf Code-Ebene und architektonische Prinzipien, die zeigen, wie sich Zuverlässigkeit in verteilten Systemen nicht nur denken, sondern praktisch bauen lässt.


### Martin Grotzke
[https://www.linkedin.com/in/martingrotzke/](https://www.linkedin.com/in/martingrotzke/)

Martin Grotzke entwickelt seit über 20 Jahren Software und ist Mitgründer der inoio gmbh, die er seit 2011 mit aufgebaut und 2023 in Verantwortungseigentum überführt hat. Vertrauen und Zuverlässigkeit ziehen sich wie ein roter Faden durch seine Arbeit – als Mensch ebenso wie als Entwickler. Besonders faszinieren ihn die Herausforderungen hochverfügbarer Systeme: Wie lassen sich Konsistenz, Reaktivität und Resilienz in verteilten Architekturen praktisch umsetzen? Über Themen wie das CAP-Theorem, Reactive Systems und funktionale Ansätze tauscht er sich leidenschaftlich und mit Freude mit anderen aus.