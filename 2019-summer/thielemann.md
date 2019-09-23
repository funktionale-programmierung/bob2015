---
layout: talk
active: bob2019-summer
title: Expressive Linear Algebra in Haskell
speaker:  Henning Thielemann
type: Vortrag
language: english
head: 2019
slides-file: henning-thielemann.pdf
youtube: Y2bM3n03z_I
---

### A new type-safe Haskell interface to BLAS and LAPACK

Although Haskell is strictly built on mathematical principles, much
more than more popular languages, Haskell is still not in common use
by mathematicians and engineers.  Numeric computations are dominated
by MatLab/Octave, R, Excel/LibreOffice Calc, and in recent times
NumPy.  Haskell has the [hmatrix](https://hackage.haskell.org/package/hmatrix) suite of packages.  However, these
solutions are more or less tailored to the use in an interactive
environment, because they are weakly or dynamically typed and use
short unqualified function names.  

We present a package for projects where type-safety and efficiency
counts.  The package supports almost all types of matrices that LAPACK
supports, e.g. triangular matrices, Hermitian matrices, banded
matrices und employs the specialised algorithms that LAPACK implements
for them.  It expresses important relations in types, e.g. "the
product of two triangular matrices is triangular" or "the eigenvalues
of Hermitian matrices are real".  We also give more structure to
vectors and matrices.  E.g. we can have Haskell enumerations as
indices, we can have Sets of elements as matrix dimension, we can
track how matrices were built from smaller blocks.  We can also use
matrices as vectors without losing structure.  This is more useful
than you might think first.

## Henning Thieleann

Haskell enthusiast for 15 years now and audio signal processing
specialist.

I studied computer science and mathematics, got a PhD for my
dissertation *Optimally matched wavelets*. My focus was always on
expressive and type-safe languages. I spend many years with dialects
of Modula before eventually arriving at Haskell. I have been a Haskell
freelancer since 2013, with an emphasis on mathematical problems and
signal processing.

