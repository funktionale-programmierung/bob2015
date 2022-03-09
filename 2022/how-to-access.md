---
layout: standalone
title: Information on how moderation works at BOB 2022
head: 2022
language: en
---

## How to give space access

- Gather space is configured as guest-list access only.
- Participants will have to sign into Gather with the email address provided during registration via [ti.to](https://ti.to/) (can be changed there, too).
- Use [`tito2gather`](https://gitlab.active-group.de/ag/bob/-/tree/master/tito2gather) to convert
  the participants list that we manage via [ti.to](https://ti.to/) to a CSV file in the
  format that Gather needs for access control.
- Staff, guests and speaker are managed outside ti.to in CSV files: `staff.csv`, `guests.csv` and `speaker.csv`.
- Generate the all-participants guest list `gather.cvs` (`./staff+speaker+tito2gather <path-to-tito-csv-export-file>`).
- Open the space's [premium dashboard](https://app.gather.town/dashboard/kaLdDo4mZ0bUWg2o/BOBkonf/space-access).
- Under `Space Access` you can upload the guest list.

### Open and close space for all participants and cleanup chat

- Turn "preserve chat history" OFF.
- Thu 18:00 Update user roles to all.
- Turn "preserve chat history" ON.
- Thu 19:59 Update user roles to staff only.
- Thu 20:00 Shutdown room to kick everybody out.
- Turn "preserve chat history" OFF.
- Thu 20:01 Open room.
- Fri 07:30 Update user roles to all.
- Turn "preserve chat history" ON.
