---
layout: talk
active: bob2023
title: Einführung in das Haskell-Web-Framework IHP
speaker: Bianca Lutz
portrait: lutz.jpg
time: 16:20-17:50
type: Tutorial
language: german
head: 2023
---

Was kommt dabei heraus, wenn man ein Web Development Framework à la
Ruby on Rails mit Haskell und Nix aufzieht? Die Integrated Haskell
Platform (IHP) von digitally induced zum Beispiel. Zwei Jahre nach dem
ersten öffentlichen Release liegt das Framework nun in Version 1.0
vor. 

IHP bietet schnelle und einfache Web-Entwicklung vom Prototyp bis in
die Produktion, mit den Vorzügen, die Nix und Haskell zu bieten haben,
aber ohne den Schmerz einer steilen Lernkurve, mit der beide
"glänzen".

Das Tutorial gibt eine praxisorientierte Einführung und zeigt die
(notwendigen) Tradeoffs des Frameworks zwischen schnellem Start und
architektonischer Robustheit.

Anhand eines Beispiels schauen wir uns den grundsätzlichen Aufbau
einer IHP-App an und lernen die wichtigsten Basisfeatures des
Frameworks kennen.  Die Verwendung weiterer Komponenten, wie Email und
Hintergrund-Jobs, sind ebenfalls beispielhaft ausprogrammiert. Die
Teilnehmer:innen können Wünsche äußern, welche wir uns im Detail
anschauen. Praxis-Tipps für den reibungslosen Einsatz der Plattform
runden das Tutorial ab.

### Vorbereitung

Wer nebenbei ein bisschen mitexperimentieren möchte, benötigt eine
funktionierende Nix-Installation. Anleitungen dazu findet ihr
[hier](https://nixos.org/download.html#download-nix).
Die Single-User-Installation ist einfacher zu deinstallieren
und eignet sich deshalb besser, wenn es nur ums Experimentieren geht.

IHP selbst ist als Nix-Paket verfügbar; installieren lässt es sich
per:

```
nix-env --install ihp-new
```

Hinweise für die Editorintegration findet ihr im
[IHP-Guide](https://ihp.digitallyinduced.com/Guide/installation.html#3-setting-up-your-editor).

Um im Tutorium Zeit zu sparen, befüllt ihr am besten euren Nix-Store
mit den Abhängigkeiten. Dazu einfach einmal ein Dummy-Projekt anlegen:

```
ihp-new dummy
```

Im Projektordner die Datei `default.nix` um die markierten drei Zeilen
ergänzen:

```
let
    ihp = builtins.fetchGit {
        url = "https://github.com/digitallyinduced/ihp.git";
        ref = "refs/tags/v1.0.1";
    };
    haskellEnv = import "${ihp}/NixSupport/default.nix" {
        ihp = ihp;
        haskellDeps = p: with p; [
            cabal-install
            base
            wai
            text
            hlint
            p.ihp
            mmark                               # <-----hier
        ];
        otherDeps = p: with p; [
            mailhog                             # <-----hier
        ];
        projectPath = ./.;
        withHoogle = true;                      # <-----hier
    };
in
    haskellEnv

```

Anschließend die Projektumgebung mit dem folgenden Befehl (im Projektordner)
noch einmal bauen:
```
nix-shell --run 'make -B .envrc'
```

Dann kann das Projekt auch wieder weg:
```
cd ..
rm -rf dummy
```


### Bianca Lutz

Bianca ist Softwarearchitektin bei der Active Group GmbH. Bevor sie
2022 ins FP-Lager wechselte, hat sie ihr Skillset vor allem an
Legacy-ERP-Systemen geschärft. Ihr besonderes Interesse gilt dem
Einfluss, den mentale Modelle auf die Programmierpraxis haben. Seit
dem Studium ist sie außerdem von formalen Methoden fasziniert und
träumt heimlich davon, eines Tages den Großteil des alltäglichen
Code-Gebastels der Maschine überlassen zu können.
