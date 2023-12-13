---
layout: talk
active: bob2024
title: "Hyper Hyper! Javascript fatigue und die Hypermedia Renaissance (?)"
speaker: Marco Schneider
portrait: marco-schneider.jpg
portrait-position: top
time: 15:05–15:50
type: Vortrag
language: german
head: 2024
---

Hypermedia erlebt in den letzten Jahren eine Renaissance. Das
Elixir-Webframework [Phoenix](https://www.phoenixframework.org/)
bietet mit
[Live-Views](https://hexdocs.pm/phoenix_live_view/Phoenix.LiveView.html)
einen Hypermedia-Mechanismus an, um reiche Webfrontends ohne
JavaScript zu schreiben. Ähnlich das
[Turbo](https://www.hotrails.dev/turbo-rails)-Paket für Ruby on Rails.

Dazu gesellt sich seit einiger Zeit [HTMX](https://htmx.org/). Das ist
eine sprach- und frameworkunabhängige Javascript-Bibliothek die HTML
als Hypertext endlich vervollständigen soll. Wer sich schon immer
darüber geärgert hat, dass nur Anchor-Tags und Formulare einen Request
abschicken dürfen, warum diese überhaupt nur `GET` bzw. `POST`
unterstützen und warum immer gleich die ganze Seite ersetzt werden
muss, ist hier genau richtig.

Anders als mit [React](https://react.dev/) und Konsorten bekommen wir
mit HTMX endlich wieder die Möglichkeit, wirklich deklarativen
Frontendcode zu schreiben und den Zustand dort zu lassen, wo er
ohnehin hingehört: auf dem Server. Dass die Frontend Buildzeiten auf
Null sinken ist natürlich ein netter Bonus.

Wer also keine Lust mehr hat, für jede Single Page Application
grundlegende Browserfunktionalität nachzubauen (looking at you,
Navigation und History) oder Performancehacks für große `<select>`s zu
basteln, kann sich hier anschauen, wie das deklarative Hypermedia Web
in Zukunft (wieder) aussehen könnte.

### Marco Schneider

Fediverse: [@anarres@chaos.social](https://chaos.social/@anarres)

Marco ist Softwarearchitekt bei der [Active Group
GmbH](https://www.active-group.de) in Tübingen, die Software
ausschließlich mit funktionaler Programmierung entwickelt. Er
interessiert sich neben der funktionalen Programmierung auch für die
Feinheiten von Programmiersprachen und die Auswirkungen, die
Sprachmittel auf das Design unserer Programme hat.
