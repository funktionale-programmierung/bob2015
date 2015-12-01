---
layout: talk
active: bob2016
title: Type the web with Servant!
speaker: Andres Löh
portrait: andres-loeh.jpg
time: 
type: Talk
language: english
---

Servant is a domain-specific language embedded in Haskell that allows the
specification of web APIs as Haskell types. From such an API type, various
functionality can then be statically computed.

For example, for turning the API into a web server, the developer just has to
provide a number of handlers. The type system ensures that the handlers are
compatible with the specified API: every handler has to be present; handlers
automatically get query parameters and the request body supplied in decoded
form, as Haskell values of the right type, as specified by the API; handlers
also have to provide a result of the correct Haskell type. There is no risk of
run-time errors by mistakenly accessing a non-existing parameter or returning
the wrong kind of result, because all coding and decoding is performed by
Servant, as dictated by the API.

From a Servant API, one can also build a client, comprising functions that
query each of the endpoints. Once again, Servant will take care of all the
coding and decoding, allowing the client functions to work with proper Haskell
types.

Further interpretations of the API type include documentation in various
formats, mock servers, type-safe link generation, and more.

In the talk, we will introduce the idea of Servant and provide several
examples of its use.

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
