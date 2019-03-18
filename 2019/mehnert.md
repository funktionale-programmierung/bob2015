---
layout: talk
active: bob2019
title: "MirageOS: building minimized special-purpose unikernels"
speaker: Hannes Mehnert
portrait: hannes-mehnert.jpg
time: 11:45-13:15
type: Tutorial
language: english
head: 2019
---

#### How to develop secure and type-safe MirageOS unikernels

Unikernels are specialized services, where the runtime binary (process,
virtual machine) only contains the necessary libraries. This reduces the
attack surface drastically (around two orders of magnitude). MirageOS is
a unikernel project that uses OCaml, which also reduces the attack
vectors (memory safety, type safety). MirageOS does not contain any
process management, neither virtual memory -- the entire unikernel is
executed in single address space. The cooperative multitasking library
[lwt](https://github.com/ocsigen/lwt/) is used at the base.

MirageOS can be deployed to various modern hypervisors: Xen, Linux KVM,
FreeBSD BHyve, OpenBSD VMM, virtio, as well as to the Genode
microkernel-based operating system framework and the separation kernel
Muen. It can also be run as a unix process with rather restrictive
seccomp filters (less than 10 syscalls needed). It runs on X86-64, ARM64
(Raspberry PI), ESP32; RISC-V support is along its way.

Apart from core Internet Protocols (TCP/IP, DHCP, DNS, HTTP), security
protocols (TLS, OpenPGP, OTR), and branchable distributed storage
(implementing the git protocol) for persistency, several applications
are work-in-progress:

- Calendar and address book (CalDAV/CardDAV) storing data in a remote
  git repository
- EMail (MIME encoding/decoding, SMTP, IMAP)
- Firewall
- VPN Gateway

In this tutorial, first I'll briefly introduce the benefits of MirageOS
and the programming environment - the mirage command line utility takes
care of target-specific dependency, initialization order, etc. by
generating code. Afterwards, we'll dig deep down further examples.

Further information:

- [`https://mirage.io`](https://mirage.io)
- [`https://opam.ocaml.org`](https://opam.ocaml.org)
- [`https://github.com/solo5/solo5`](https://github.com/solo5/solo5)

### Preparation

You can follow the tutorial on a Linux, FreeBSD, OpenBSD, or macOS
box.  You won't need a hypervisor to follow the tutorial, but will be
able to utilize Linux KVM during the tutorial.

You will need the OCaml package manager,
[opam](https://opam.ocaml.org/).  To prepare:

- [install opam](https://opam.ocaml.org/doc/Install.html) >= 2.0.0
- run `opam init` and follow the instructions
- make sure you have OCaml >= 4.06.0 by running `ocaml`
- install MirageOS with `opam install mirage`

For testing purposes, the [mirage-skeleton
repository](https://github.com/mirage/mirage-skeleton) hosts various
example unikernels. Clone that and do a

    mirage configure ; make depend ; make

in any of the subdirectories, and you should end up with a
`./main.native` (use `mirage configure -t hvt` to produce an unikernel
image that runs on KVM).

### [Hannes Mehnert](https://hannes.nqsb.io)

Hannes Mehnert
[researches](https://dblp.uni-trier.de/pers/hd/m/Mehnert:Hannes) in
several engineering areas: from programming languages (such as
compiler optimisation visualisation, type systems) over full
functional correctness proofs of object-oriented code, the topic of
his PhD dissertation, development environments for dependently typed
languages, to network protocols (TCP/IP) and security protocols (TLS,
OTR).

In his spare time, Hannes is not only a hacker, coauthor of a book on
indian cuisine and functional programming in JavaScript, but also a
barista and likes to travel and repair his recumbent bicycle.

Since beginning of 2018, Hannes works on a non-profit to put MirageOS
into production at [robur](https://robur.io). He used to be a postdoc
at University of Cambridge working with the semantics, systems, and
security group.

