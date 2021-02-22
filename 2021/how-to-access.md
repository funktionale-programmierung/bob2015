---
layout: standalone
title: Information on how moderation works at BOB 2021
head: 2021
language: en
---

## How to give space access

- Gahter space is configured as guest-list access only.
- Participants will have to sign into Gather with the email address provided during registration via [ti.to](ti.to) (can be changed there, too).
- Use [`tito2gather`](https://gitlab.active-group.de/ag/tito2gather) to convert
  the participants list that we manage via [ti.to](ti.to) to a CSV file in the
  format that Gather needs for access control.
- Generate a staff-only guest list (`tito2gather -s`) and a all-participants
  guest list (`tito2gather` without `-s`).
- Open the space's [premium dashboard](https://gather.town/dashboard/rkUetgocVw39X6Mp/BOBkonf2021).
- Under `Space Access` you can upload the guest list.

### Open and close space for all participants

- Thu 18:00 Update user roles to all.
- Thu 19:59 Update user roles to staff only.
- Thu 20:00 Shutdown room.
- Thu 20:01 Open room.
- Fri 07:30 Update user roles to all.
