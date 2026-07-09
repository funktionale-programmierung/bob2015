---
topic: formal-methods
layout: talk
active: bob2026
title: "Agda by Example: Programming and Proving with Dependent Types"
speaker: Peter Thiemann
time: 10:15–11:45
type: Tutorial
language: english
head: 2026
portrait: peter-thiemann.webp
---

**Agda by Example: Programming and Proving with Dependent Types** is a hands-on introduction to one of the most elegant verification tools in modern functional programming. Participants will learn how to write total programs, encode invariants directly in types, and develop machine-checked proofs alongside executable code. Through live examples and small guided exercises, we’ll build data structures, manipulate dependently typed vectors, prove algebraic properties, and construct verified functions that cannot go wrong.
This tutorial is designed for software engineers and functional programmers who are curious about rigorous correctness, type-driven development, and the practical side of theorem proving. No prior experience with proof assistants is required—only familiarity with functional programming concepts. Come discover how Agda turns specifications into code, and code into proofs, all by example.

# Preparations

**Please complete this before arriving.**
We will start coding immediately and cannot do installations during the session.

This setup normally takes **10–20 minutes on macOS** and **20–40 minutes on Windows/Linux**.

We will work with [this
repository](https://github.com/peterthiemann/agda-tutorial-bob2026)
where you find the information below and more.

---

You will need:

- Laptop (macOS, Linux, or Windows 10/11)
- Stable internet (first Agda run downloads/compiles interfaces)
- About 4–6 GB free disk space
- VS Code (recommended)

## Installing Agda and the Agda standard library

This guide explains how to install **Agda**, a dependently typed functional programming language and proof assistant, together with the **Agda standard library** and editor support.

### macOS (Recommended: Homebrew — easiest method)

#### A. Install Homebrew (if not installed)

Open Terminal and run:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Restart the terminal afterwards.

#### B. Install Agda + Standard Library

Homebrew provides prebuilt binaries — **no manual GHC/cabal setup needed**.

```bash
brew update
brew install agda
brew install agda-stdlib
```

Verify:

```bash
agda --version
```

#### C. Register the standard library

Homebrew installs the library but Agda must be told where it is:

```bash
mkdir -p ~/.agda
echo "$(brew --prefix)/share/agda-stdlib/standard-library.agda-lib" >> ~/.agda/libraries
echo "standard-library" >> ~/.agda/defaults
```

#### D. Editor integration

Run once:

```bash
agda-mode setup
```

Then install **Agda Mode** in VS Code (or use Emacs).

You are done.

### Linux

These instructions work reliably on Ubuntu/Debian. Other distributions are similar.

Install prerequisites:

```bash
sudo apt update
sudo apt install ghc cabal-install git build-essential
```

Install Agda:

```bash
cabal update
cabal install Agda
```

Add cabal binaries to PATH:

```bash
echo 'export PATH="$HOME/.cabal/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

Verify:

```bash
agda --version
```

Install standard library:

```bash
git clone https://github.com/agda/agda-stdlib.git
cd agda-stdlib
mkdir -p ~/.agda
echo "$PWD/standard-library.agda-lib" >> ~/.agda/libraries
echo "standard-library" >> ~/.agda/defaults
```

### Windows (Recommended: WSL)

Native Windows installation is fragile. Please use **WSL (Windows Subsystem for Linux)**.

#### A. Install WSL

Open PowerShell as Administrator:

```powershell
wsl --install
```

Reboot when prompted and open **Ubuntu** from the Start menu.

#### B. Install Agda inside WSL

```bash
sudo apt update
sudo apt install ghc cabal-install git build-essential
cabal update
cabal install Agda
echo 'export PATH="$HOME/.cabal/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

Verify:

```bash
agda --version
```

#### C. Install standard library

```bash
git clone https://github.com/agda/agda-stdlib.git
cd agda-stdlib
mkdir -p ~/.agda
echo "$PWD/standard-library.agda-lib" >> ~/.agda/libraries
echo "standard-library" >> ~/.agda/defaults
```

## Editor Support
### VS Code (recommended)

1. Install **Visual Studio Code**
2. Install extension: **Agda Mode**
3. Run once:

```bash
agda-mode setup
```

### Emacs

Agda ships with an Emacs mode. After installation:

```bash
agda --emacs-mode setup
```

More information can be found in the [official documentation](https://agda.readthedocs.io/en/latest/tools/emacs-mode.html).

## Testing Your Installation

After installation you should be able to run:

```bash
agda --version
```

Create a file `Hello.agda`:

```agda
module Hello where

open import Agda.Builtin.Nat

double : Nat → Nat
double n = n + n
```

Then run:

```bash
agda Hello.agda
```

If no errors appear, your installation is correct.

## Common Problems

### agda: command not found
Restart the terminal or ensure PATH contains:
```
~/.cabal/bin
```

### Standard library not found
Check:
```
~/.agda/libraries
~/.agda/defaults
```

### First load is slow

That is fine — Agda compiles library interfaces the first time.

---

You are now ready for the tutorial.


# Peter Thiemann

Peter Thiemann is a professor at the university of Freiburg and leads the programming languages group at the institute of computer science. His research interests are focused on programming with types, in particular functional programming and concurrent programming.
