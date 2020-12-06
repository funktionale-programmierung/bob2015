---
layout: talk
active: bob2021
title: "Sylvester: computer-based math via F# meta-programming"
speaker: Allister Beharry
portrait: allister-beharry.jpg
time: 
type: Tutorial
language: english
head: 2021
---

<a href="https://github.com/allisterb/Sylvester">Sylvester</a> is an
F#-based DSL that tries to capture the 
<a href="https://github.com/allisterb/Sylvester/tree/master/src/Math/Sylvester.AbstractAlgebra">conceptual</a>,
<a href="https://github.com/allisterb/Sylvester/blob/master/src/Math/Sylvester.AbstractAlgebra/Theories/BooleanAlgebra.fs">logical</a>,
symbolic, computational, and visual properties of mathematical
language without the need for external parsers or interpreters or
interactive environments. Mathematical and 
<a href="https://allisterb.github.io/PropCalculus.html">logical</a>
statements in Sylvester are expressed as conceptual or logical or
symbolic relationships between formulae using F# types, operators and
functions, and a formula is defined as any F# expression for which an
F# code quotation and full expression tree is available. Sylvester can
therefore use the full range of F# language features, IDEs, and
environments like Jupyter notebooks for applications like 
<a href="https://github.com/allisterb/Sylvester/tree/master/src/Lang/Sylvester.Prover">theorem proving</a>, numerical computing and 
<a href="https://github.com/allisterb/Sylvester/tree/master/src/Fabrics/tf">machine
learning</a>, and visualization via interop with JavaScript libraries
like JSXGraph.

One of the biggest barriers to widespread adoption of theorem provers
by math students is the relative paucity of feature-rich programming
environments for these specialized languages, when compared to
mainstream languages like Python or C++ and the sophisticated IDEs and
environments available that are designed to assist the user as much as
possible.

This situation isn't helped by the fragmentation of languages and
tools that attempt to capture the different aspects of mathematical
statements. Typically there are tools like 
<a href="https://leanprover.github.io/about/">Lean</a> for interactive
theorem proving, NumPy and SciPy for numeric programming, 
<a href="http://maxima.sourceforge.net/docs/manual/de/maxima_58.html">Maxima</a>
and its siblings for symbolic computing, 
<a href="http://jsxgraph.org/wp/index.html">JSXGraph</a> and D3 and
similar libraries for visualization, and these tools generally feature
little interoperability with each other.  

Sylvester embeds an
internal DSL into a mainstream functional language that is expressive
enough to capture different aspects of mathematical expressions. As a
hybrid functional-OOP language with extensive meta-programming
features F# is an ideal choice for building a DSL that can naturally
capture the relationships between mathematical expressions, and as a
.NET based language can easily interoperate with libraries in other
languages like C or target different runtime environments like Web
pages or Jupyter notebooks.

This 90-min tutorial will go through using Sylvester in several
applications and scenarios within a Jupyter Notebook and VS Code, both
from a developer's POV as in how a certain language feature is
implemented, and from a user's POV as in how different statements and
problems for a given computer-based math application can be expressed
and solved using a single language and environment. The main topics
are:

- Using F# code-quotations for mathematical expressions
- F# type-level arithmetic and arithmetic constraints
- Theorem-proving
- Symbolic manipulation
- Type-safe abstract algebra
- Type-safe number-parameterized linear algebra
- Compiling F# quotations to JavaScript and using visualization libraries like JSXGraph
- Type-safe number-parameterized machine learning using F# type providers and TensorFlow

### Allister Beeharry

[@allisterbeharry](http://twitter.com/allisterbeharry)

I've been programming computers both as a hobby and professionally for more than 20 years. I like both Windows and Linux. My current focus is computer security, machine learning, conversational user interfaces and .NET scientific programming.
