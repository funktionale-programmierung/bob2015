---
layout: talk
active: bob2019-summer
title: From idea to working product in 7 days
speaker:  Philipp Maier
portrait: philipp-maier.png
type: Vortrag
language: english
head: 2019
---

### How I created Hilfeleistung als Service 
 
Hilfeleistung als Service is making it easier for people with
disabilities to register assistance requests with Deutsche Bahn, the
German railway provider. In this talk I want to speak about how I
took an idea, applied serverless strategies, and delivered a working
solution within 7 days.

I was lying. It actually took me 9 days to deliver the first
end-to-end working solution and another 20 days for the polished up
MVP. Nevertheless, using existing services and writing as little
glue code as possible let me focus on the core domain: making it
easier to register assistance requests.

So this is about rapid prototyping. Trying out ideas fast. But not in
the boring old way with some RAD framework, but the all new fancy
"serverless" approach. Obviously I have not used a single AWS
service. This is about rapid application development. This description
is missing buzzwords. I, of course, also used microservices (not
really but sort of)!

But back to being serious. I think building Hilfeleistung als Service
worked out pretty well. In this talk I will go into details about the
problem at hand, the integration of the various services like
Cloudflare, Netlify, and Mailgun and how I deployed my own NixOS
server for the Haskell backend and Selenium.

### Philipp Maier

[@AkiiZedd](http://twitter.com/#!/AkiiZedd)

Philipp likes domain events. So much that he stores them, sends them
on journeys and folds over them. In his free time, he does exactly
this but with Haskell.


