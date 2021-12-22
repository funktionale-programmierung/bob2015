---
layout: talk
active: bob2022
title: Infrastructure as Code - Betrieb ohne Handarbeit
speaker: Tim Digel
portrait: digel.jpg
time: 
type: Vortrag
language: german
head: 2022
---

## Mit Terraform, Ansible/Nixos und Continous Deployment per Knopfdruck zum Betrieb 

Der Mehrwert jeder Software kann frühstens erlangt werden, wenn sie
betrieben wird. In vielen Fällen ist das dann der Fall, wenn sie auf
entsprechender Infrastruktur installiert und betriebsbereit ist. Dafür
benötigen wir die Infrastruktur, müssen diese mit Betriebssystemen und
nötigen Softwarekomponenten versehen und konfigurieren. Dies ist bei
kleinen Systemen oft trivial, doch bei zunehmender Komplexität stellt
sich schnell heraus, dass der Aufbau und die Wartung einer stabilen
Infrastruktur schwierig ist.

Daher sollen alle nötigen Schritte automatisiert werden,
nachvollziehbar sein und jederzeit reproduzierbar durchgeführt werden
können.  Dafür kommt Infrastructure as Code zum Einsatz. Alle nötigen
Definitionen und nötigen Schritte werden mit Konfigurationsdateien,
als Code oder mit Domain Specific Languages (DSL) zum eigentlichen
Quellcode der Software festgehalten.


* Mit Terraform wird die Infrastruktur an sich definiert. Dabei wird
  z. B. festgelegt, wie viele virtuelle Maschinen mit welchen
  Ressourcen benötigt werden, wie die Netzwerk- und IP-Konfiguration
  erfolgen oder in welchem Rechenzentrum die Software betrieben werden
  soll.

* Sobald die Infrastruktur vorhanden und zugänglich ist, muss diese
  konfiguriert werden. Mit Ansible und NixOS gibt es zwei Ansätze
  jeden Installations- und Konfigurationsschritt zu definieren und
  automatisch zur Anwendung zu bringen.

* Im Betrieb stellt man sich dann der nächsten Herausforderung:
  Software muss häufig und regelmäßig aktualisiert werden. Eine
  Automatisierung ist nahezu unumgänglich. Mit Continuous Deployment
  und als Code definierten Schritten in z. B. Github Actions gelangt
  die Software vollautomatisch auf die Infrastruktur.

### Tim Digel

Tim Digel ist Diplom-Mathematiker und sein ganzes Erwachsenenleben in
der Softwareindustrie tätig. Er kann kein Java und befasste sich
nahezu ausschließlich mit funktionalen Programmiersprachen. Tim
arbeitet als Softwarearchitekt und DevOps-Spezialist bei der Netze BW
GmbH.
