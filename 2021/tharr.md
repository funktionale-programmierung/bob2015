---
layout: talk
active: bob2021
title: Developing declarative and functional iOS apps with SwiftUI and Combine
speaker: Max Tharr
portrait: max-tharr.jpg
time: 
type: Tutorial
language: english
head: 2021
---

Native app development was imperative and object oriented, having all
side effects those paradigms usually bring with them. With two new
native swift frameworks, I've developed several apps with completely
declarative UI code and functional event handling and logic, one of
them in production in the finance sector. I want to share my
experiences and give an overview of those frameworks, with their
advantages, downsides and common pitfalls.

Last summer there was a big hype among iOS developers for a brief
moment: Apple released two new, completely different frameworks for UI
and event handling. After a first hype, few have been brave enough to
directly adapt those frameworks in production code with most
developers waiting for others to test how they perform in
production. Luckily, I had the opportunity to use both frameworks in a
real product in the finance sector, aiming at real customers and
experiencing the state of production-readiness of these frameworks as
well as how good they scale when your app gets bigger.

SwiftUI is a new native UI framework for Apple operating systems. It
has a declarative syntax, reducing the amount of code necessary for UI
programming and removing the necessity to use imperative code in
applications.

Combine is an event handling framework released simultaneously which
is heavily inspired by [ReactiveX](http://reactivex.io/). It is
asynchronous and uses a functional syntax and greatly improves
handling asynchronous events like user input or network requests.

In my tutorial, I will show how it is possible with these frameworks to
create iOS apps with (almost) no imperative code, using a purely
declarative UI and async, functional event handling. I also want to
show a few examples of typical mistakes people make when they use
these frameworks and in which parts of the app it might still be safer
to resort to the conventional frameworks used there.

### Max Tharr

Max is a fullstack developer at Mayflower. He develops mobile and web
apps, with a focus on UX and modern programming paradigms like
declarative, functional and reactive programming. He comes from an
Augmented Reality and Games Engineering background and has a heart for
Open Source.
