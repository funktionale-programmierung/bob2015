---
layout: talk
active: bob2025
title: "Coverage-guided property-based testing"
speaker: Stevan A
time: 15:00–15:45
type: Vortrag
language: english
head: 2025
---

Consider the following example, where an error is triggered if some input
bytestring starts with "bad!":

```
    if input[0] == 'b' {
        if input[1] == 'a' {
            if input[2] == 'd' {
                if input[3] == '!' {
                    error "input must not be bad!"
                }
            }
        }
    }

```

If we were to try to find this error using vanilla property-based testing,
where we restrict the input strings to always be of length four, then it would
take about (2^8)^4 = 2^32 (about 4 billion) tries.

Using coverage-guidance we keep track of inputs that resulted in increased
coverage. So, for example, if we generate the bytestring "b" then we get
further into the nested ifs, and so we take note of that and start generating
longer bytestrings that start with "b" and see if we can get further coverage,
etc. By building on previous successes in getting more coverage, we can
effectively reduce the problem to only need (2^8)*4 = 2^10 = 1024 tries.

In order words coverage-guidance turns an exponential problem into a polynomial
problem!

In this talk I'll show how coverage-guidance can be added to the first version
of QuickCheck, that can be found in the appendix of the original paper, in
about 35 lines of code.


### Stevan A

I'm interested in how we can apply (semi-)formal methods to software development in order to make it easier to build reliable, scalable and maintainable computer systems.