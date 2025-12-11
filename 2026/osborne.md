---
layout: talk
active: bob2026
title: "Generating tests from formal specification: the good, the bad and the messy"
speaker: Nicolas Osborne
time: 13:50–14:35
type: Talk
language: english
head: 2026
---

This talk will present how to generate model-based testing from formal
specifications in the OCaml ecosystem and evaluate the advantages and
disavantages of doing so instead of writing them by hand.

QCheck-STM is a model-based testing framework for mutable OCaml data-structure.
Amongst other things, the user has to provide a model in a state-machine-like
fashion and a random command generator.

Gospel is an model-based behavioural specification language for OCaml. OCaml
types are given a model and OCaml functions are annotated with a contract
describing its functional behaviour.

Ortac consumes Gospel contracts to generate QCheck-STM test suites. The
QCheck-STM model is based on the Gospel one and Ortac looks at the functions'
post-conditions in order to see if it can compute how the model evolves when
running the function. Ortac will be able to generate tests for every functions
which specification hold enough information to compute the next state.

In a first section I will explain how QCheck-STM and Ortac work based on some
examples of Gospel specifications. Then, in a second section I will highlight
the advantages of this workflow: less boilerplate, the generated code includes
testing the model's invariants if any, test failure messages contain the piece
of specification that has been violated and includes the expected value if
possible. In a third section I will point to the current limitations and how we
are trying to overcome them.


### Nicolas Osborne

Senior software engineer at [Tarides](https://tarides.com/).