---
layout: talk
active: bob2017
title: An introduction to Servant
speaker: Andres Löh
portrait: andres-loeh.jpg
time: 16:20-17:50
type: Tutorial
language: english
head: 2017
---

Servant is a domain-specific language embedded in Haskell
that allows the specification of web APIs as Haskell types.

Once such an API has been specified, it can be used to
drive the implementation of various components, such as
a server handling requests according to the API, or also
a client that sends requests according to the API, or
also documentation of the API itself.

In all these cases, most of the program is derived
automatically from the shape of API, and the developer only
has to fill in the remaining parts, such as the handlers
for a server, or the endpoint descriptions for
documentation. And everything happens in a type-safe way.

Servant therefore shows nicely that types can do more for
us than just catch errors; they can instead help us write
parts of our programs automatically for us, and guide us
in their construction.

In this tutorial, we will incrementally develop a small
web backend application in Haskell using Servant, and look
a little bit at how it works internally and can be extended
with new functionality.

The language of the tutorial is English.

Servant makes use of various Haskell language extensions
for type-level programming. These will be introduced as we
go. However, some basic familiarity with Haskell or at least
another statically typed functional programming language is
going to be helpful.

### Preparation

[This GitHub repository](https://github.com/kosmikus/servant-bobkonf-2017) has
instructions for following along with the tutorial.

### Andres Löh

Andres Löh is a Haskell consultant and co-owner of Well-Typed LLP. He is based
in Regensburg, Germany. He started using Haskell in 1997, when being an
undergraduate student of mathematics in Konstanz, and has been an enthusiastic
functional programmer ever since. Andres obtained a PhD in Computer Science
from Utrecht University in 2004, on extending the Haskell language with
capabilities for datatype-generic programming. After having been a university
lecturer for several years, he joined Well-Typed in 2010. 
 
Andres is very interested in applying functional programming to real-world
problems, and in particular in datatype-generic programming, domain-specific
languages, (dependent) type systems, parallel and concurrent programming, and
the theory of version control. 
