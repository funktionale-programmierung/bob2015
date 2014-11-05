---
layout: talk
active: bob2015
title: Break the Monolith - Service Extraction at SoundCloud
speaker: Jan Kischkel
time: 17:00-17:45
portrait: kischkel.jpg
type: Vortrag
language: english
---

Often, in the life of a successful software project comes a time when
the previously elegant architecture turns into a horrific monolith
that no one wants to touch. But, how do you pull out its features into
new services without incurring downtime, while simultaneously
migrating the data to a better schema? The messages feature on
soundcloud.com shows one way of doing this. This feature got pulled
out of a Rails application and became a Scala microservice with a
dedicated database. This talk outlines the steps of the migration,
drawbacks of large Rails applications, and the pains of adopting
Scala.

#### Jan Kischkel

Jan Kischkel is a senior web developer for SoundCloud in Berlin. After
receiving a diploma from the Ostfalia University of Applied Sciences, he
has worked on a wide range of projects, from huge enterprise applications
to microservices.
