---
layout: talk
active: bob2015
title: Scalable consistency for replicated data
speaker: Annette Bieniusa
portrait: bieniusa.jpg
time: 16:15-17:45
type: Tutorial
language: english
head: 2015
---

Replicating modifiable data is a challenge in large-scale
distributed systems, as it suffers from a fundamental tension between
availability and data consistency.  Eventual consistency sidesteps the
problem of availability under network partitioning, but remains
ad-hoc, error-prone, and difficult to apply for programmers.

In this talk, we will introduce a new approach to shared, mutable and
replicated data: conflict-free replicated data types (CRDTs).
Complying to simple mathematical properties (namely commutativity of concurrent 
updates, or inflations of object states in a semi-lattice), any CRDT provably 
converges, provided all replicas eventually receive all operations.  
A CRDT requires no synchronization: an update can
execute immediately, irrespective of network latency, faults, or
disconnection; it is highly scalable and fault-tolerant. 

In this tutorial, we will explain and justify the theoretical
foundation of CRDTs and see how they are integrated and used in Riak
2.0.

### Preparations

Participants should install Riak 2.0 - instructions are
[here](http://docs.basho.com/riak/latest/ops/building/installing/).

Moreover, participants should install `riak_playground` from
[here](https://github.com/cmeiklejohn/riak-playground).

### Annette Bieniusa

Annette Bieniusa is a lecturer and researcher at the University of
Kaiserslautern. She received a PhD in Computer Science from the
University of Freiburg in 2011 and spent one year as postdoctoral
researcher at INRIA Paris-Rocquencourt.

Her research interests include semantics of concurrent and distributed
programming, with a focus on replication, synchronization, and
programming language concepts such as Software Transactional Memory
and Replicated Data Structures.

Annette was involved in several national and international research
projects, and is currently collaborating with Chris Meiklejohn in the
EU-Project „SyncFree: Large-scale Computation without
Synchronization“.
