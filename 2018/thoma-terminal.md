---
layout: talk
active: bob2018
title: "Terminal GUIs with Haskell: <tt>vty</tt> and <tt>brick</tt>"
speaker: Franz Thoma
portrait: franz-thoma.jpg
type: Tutorial
language: english
head: 2018
time: 12:00-13:30
---

For interactive full-screen terminal applications, the usual go-to ecosystem is
plain C with the `ncurses` library. However, also the Haskell ecosystem has a
lot to offer: **`vty`**, a high-level combinator library for formatting and
arranging text elements on a terminal screen. And building on top of `vty` we
have **`brick`**, a library for layouting terminal applications from widgets.
Where you need to tell `ncurses` exactly to »put the cursor there and print a
char«, the declarative approach of these libraries is much safer and easier to
manage.

After a short introduction to the basics of event handling and terminal
rendering in Haskell, we're going to play »Pong« on the terminal!

### Prerequisites:

* Linux/Unix machine or VM: Unfortunately, Vty does not support
  Windows currently. You can try with Win10 and WSL, but I'd rather
  recommend a Linux VM if you're on Windows.
* You'll need a working [Stack](http://haskellstack.org/) installation to
  build the project.
* Clone or download the Github repository
  ([https://github.com/fmthoma/vty-workshop](https://github.com/fmthoma/vty-workshop))
  and follow the README instructions to check that the build works.

## Franz Thoma

Franz Thoma is originally a physicist and works as a consultant and software
engineer at TNG Technology Consulting in Munich. While spending time there on
domain specific languages and building compilers, he discovered his love for
functional languages and expressive type systems. With Haskell, Franz found a
robust and elegant language to express himself, which he uses for his own
personal tooling as well as a thinking tool. At TNG, he currently works on
high-throughput ingestion of real-time data for a client's Big Data platform.
