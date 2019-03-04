---
---

Der Widerspenstigen Zähmung
===========================

Funktionale Programmierung in einer kleinen Firma

@raichoo

Über mich
=========

  - @raichoo auf Twitter

  - Softwareentwickler bei Saltation in Bielefeld

  - Haskell seit 2009

  - Idris Contributor

  - Autor von `neovimhaskell/haskell-vim` und diversen anderen Modes.

  - Seit ca. 3 Jahren mehr oder weniger Vollzeit Haskell

Der Status Quo
==============

- Software Industrie in Deutschland bewegt sich sehr langsam
  Beispiel:
    Jobausschreibungen in einer großen Firma Java/COBOL 50/50.

- Überwiegend dominiert von "unsicheren" Sprachen:
  C, C++, Java, PHP, JavaScript.

- Funktionale Programmierung wird großteils als "unpraktikabel und
  akademisch" empfunden (Universitäten sind daran vermutlich nicht ganz
  unschuldig).

Saltation
=========

- Um die 25 Mitarbeiter (in den letzten 5 Jahren knapp verdoppelt)

- Consulting

- Web, Mobile und Desktop Entwicklung

- Damals primär: PHP, JavaScript, C++, Java

Experimente
===========

- Scala
    - sbt
    - schwer nachvollziehbarer Code (z.B. Methoden aus Mixin, Implicit etc)
    - viele Sonderfälle in der Grammatik (z.B. Auto-Tupling)

- NodeJS/JavaScript
    - CPS
    - keine Typsicherheit

- Rust

- Haskell

Herausragende Features
======================

- Haskell ist "langweilig".

- Typinferenz ("Milner's Coincidence" considered *highly* useful).

- Language Extensions (Typinferenz erhalten).

- Typed Holes.

- Modulsystem
    - Kapselung
    - Extended Pattern
    - Re-exporte

- Laziness (Youtube: Working hard to keep things lazy)

Startschwierigkeiten
====================

- Wie setzt man eine Sprache durch die kaum jemand auf der Arbeit beherrscht?

- Workshops

- Lesegruppe (LYAH)

- Einsatz (es ist einfacher Haskell einzusetzen als es vorher zu lernen)

Web-Frameworks
==============

- Yesod
    - Vollwertiges Web-Framework (Haskell on Rails)
    - Niedrigere Einstiegshürde als "plain" Haskell.
    - Vertraute Umgebung für Webentwickler
    - Hervorragende Dokumentation (www.yesodweb.com/book)
    - Schneller Turnaround dank `yesod-bin`

- Scotty
    - Sinatra-artiges Mirco Web-Framework
    - unkompliziertes Aufsetzen von JSON REST-Services in
      Kombination mit Aeson (vs Express.js).

Tooling
=======

- stack
    - stark reduzierte Build-Zeiten auf Entwicklungsmascheinen.
    - einfaches Aufsetzen auf anderen Systemen.
    - reproduzierbare Builds.
    - continuous building `--file-watch --fast --pedantic`.

- hoogle, ghci

- jenkins

- Neovim, Atom

Testing
=======

- Typen helfen, aber reichen nicht.

- QuickCheck
    - Abstrakte Algebra: Tests for free.

- doctest

- tasty (komibinert unit tests, property test etc.)

Sprachlandschaft heute
======================
	
- primär immer noch großteils PHP.

- JavaScript wurde für neue Projekte von TypeScript abglöst.
    - kritischer Code teilweise in PureScript

- seit 3 Jahren dauerhafte Haskell Projekte.

- seit kurzem verstärktes Aufkommen neuer Haskell Projekte.
  (Entwicklung für 4 unterschieldiche Kunden)

- Insgesamt 5 Haskeller (und ein paar die lauern).

Danke
=====

- Vielen Dank für Eure Aufmerksamkeit!

- Wenn Ihr weiter Fragen habt sprecht mich ruhig an.

- Oder fragt mich auf Twitter unter @raichoo

